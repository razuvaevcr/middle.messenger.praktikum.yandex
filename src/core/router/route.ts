import renderDOM from './renderDOM';
import Block from '../eventBus/Block';


class Route {
	public pathname: string;

	private _blockClass: any;

	private _block: Block<Record<string, unknown>> | null;

	private _props: any;

	constructor(pathname: string, view: typeof Block, props: any) {
		this.pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname: string) {
		if (this.match(pathname)) {
			this.pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	match(pathname: string) {
		return isEqual(pathname, this.pathname);
	}

	public render() {
		if (!this._block) {
			this._block = new this._blockClass();
			renderDOM(this._props.rootQuery, this._block!);
			return;
		}

		this._block.show();
	}

	getPathname() {
		return this.pathname;
	}
}

function isEqual(lhs: unknown, rhs: unknown) {
	return lhs === rhs;
}


export default Route;
