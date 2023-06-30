import Block from '../../utils/eventBus/Block';
import { inputValidation } from '../../utils/validate';
import { TInput } from '../../types/types';
import inputTmp from './tmp';


class Input extends Block<TInput> {
	constructor(props: TInput) {
		super(props.tagName, props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});

		this.props.settings = { withInternalID: true };

		this.props.events = {
			focusout: (event: Event) => inputValidation(event.target),
		};
	}

	render() {
		return this.compile(inputTmp, this.props);
	}
}

class FormInput extends Block<TInput> {
	constructor(props: TInput) {
		super('li', props);

		this.props.classNames = [
			'inputs__item',
			'input-wrapper',
		];

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});

		this.props.label = {
			classNames: [
				'inputs__item__label',
				'label',
			],
			text: this.props.label.text,
		};

		this.props.input = {
			classNames: [
				'inputs__item__value',
				'input',
			],
			type: 'text',
			name: this.props.input.name,
		};

		this.props.settings = { withInternalID: true };

		this.props.events = {
			focusout: (event: Event) => inputValidation(event.target),
		};
	}

	render() {
		return this.compile(inputTmp, this.props);
	}
}

class ProfileInput extends Block<TInput> {
	constructor(props: TInput) {
		super('li', props);

		this.element.classList.add('input-wrapper_long');

		this.props.label = {
			classNames: [
				'label_long',
			],
			text: this.props.label.text,
		};

		this.props.input = {
			classNames: [
				'input_long',
			],
			type: 'text',
			name: this.props.input.name,
			placeholder: this.props.input.placeholder,
		};

		this.props.settings = { withInternalID: true };

		this.props.events = {
			focusout: (event: Event) => inputValidation(event.target),
		};
	}

	render() {
		return this.compile(inputTmp, this.props);
	}
}


export {
	Input,
	FormInput,
	ProfileInput,
};
