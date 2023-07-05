import { v4 as makeUUID } from 'uuid';
import EventBus from './EventBus';
import Compiler from '../compiler/compiler';


abstract class Block<Props extends Record<string, any>> {
	static EVENTS: Record<string, string> = {
		INIT: 'init',
		FLOW_CDM: 'flow:component-did-mount',
		FLOW_CDU: 'flow:component-did-update',
		FLOW_RENDER: 'flow:render',
	};

	protected _element: HTMLElement;

	private _meta: {
		tagName: string,
		props: Record<string, any>,
	};

	private eventBus: () => EventBus;

	public props: Record<string, any>;

	private _id: string;

	protected children: Record<string, Block<Props>>;

	constructor(tagName = 'div', propsAndChildren: Props) {
		const { children, props } = this._getChildren(propsAndChildren);

		this.children = children as Record<string, Block<Props>>;

		const eventBus = new EventBus();

		this._meta = {
			tagName,
			props,
		};

		this._id = makeUUID();

		this.props = this._makePropsProxy({ ...props, __id: this._id });

		this.eventBus = () => eventBus;

		this._registerEvents(eventBus);
		eventBus.emit(Block.EVENTS.INIT);
	}

	private _getChildren<T>(propsAndChildren: Record<string, T>) {
		const children: Record<string, T> = {};
		const props: Record<string, T> = {};

		Object.entries(propsAndChildren).forEach(([key, value]) => {
			if (value instanceof Block) {
				children[key] = value;
			} else {
				props[key] = value;
			}
		});

		return { children, props };
	}

	private _registerEvents(eventBus: EventBus) {
		eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
		eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
		eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
	}

	private _createResources() {
		const { tagName } = this._meta;
		this._element = this._createDocumentElement(tagName);
	}

	protected init() {
		this._createResources();

		this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
	}

	public compile(template: string, props: Record<string, unknown>) {
		const propsAndStubs = { ...props };

		Object.entries(this.children).forEach(([key, child]) => {
			propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
		});

		const fragment = this._createDocumentElement('template');

		fragment.innerHTML = Compiler(template, propsAndStubs);

		Object.values(this.children).forEach((child) => {
			const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

			if (!stub) {
				return;
			}

			stub.replaceWith(child.getContent());
		});

		return fragment.content;
	}

	private _componentDidMount(): void {
		this.componentDidMount();

		Object.values(this.children).forEach((child) => {
			child.dispatchComponentDidMount();
		});
	}

	public componentDidMount(): void { }

	public dispatchComponentDidMount(): void {
		this.eventBus().emit(Block.EVENTS.FLOW_CDM);
	}

	private _componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): void {
		const response = this.componentDidUpdate(oldProps, newProps);
		if (!response) {
			return;
		}
		this._render();
	}

	componentDidUpdate(oldProps: Record<string, unknown>, newProps: Record<string, unknown>): boolean {
		return oldProps !== newProps;
	}

	public setProps = (nextProps: Record<string, unknown>) => {
		if (!nextProps) {
			return;
		}

		Object.assign(this.props, nextProps);
	};

	public get element() {
		return this._element;
	}

	private _render() {
		const block = this.render();

		this._removeEvents();

		this._element.innerHTML = ''; // удаляем предыдущее содержимое

		if (block !== undefined) this._element.appendChild(block);

		this._addEvents();
	}

	render() { }

	public getContent(): HTMLElement {
		return this.element;
	}

	private _makePropsProxy(props: Record<string, unknown>) {
		const self = this;

		return new Proxy(props, {
			get(target: Record<string, unknown>, prop: string) {
				const value = target[prop];
				return typeof value === 'function' ? value.bind(target) : value;
			},
			set(target: Record<string, unknown>, prop: string, value: unknown) {
				target[prop] = value;
				self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
				return true;
			},
			deleteProperty() {
				throw new Error('Нет доступа');
			},
		});
	}

	private _addEvents(): void {
		const { events = {} } = this.props as Record<string, Record<string, () => void>>;


		Object.keys(events).forEach((eventName: string) => {
			this._element.addEventListener(eventName, events[eventName]);
		});
	}

	private _removeEvents(): void {
		const { events = {} } = this.props as Record<string, Record<string, () => void>>;

		Object.keys(events).forEach((eventName) => {
			this._element.removeEventListener(eventName, events[eventName]);
		});
	}

	private _createDocumentElement(tagName: string): HTMLTemplateElement {
		const element = document.createElement(tagName) as HTMLTemplateElement;
		element.setAttribute('data-id', this._id);

		return element;
	}

	public show() {
		this.getContent().style.display = 'block';
	}

	public hide() {
		this.getContent().style.display = 'none';
	}
}


export default Block;
