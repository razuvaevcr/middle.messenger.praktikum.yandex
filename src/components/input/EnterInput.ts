import Block from '../../core/eventBus/Block';
import { inputValidation } from '../../utils/validate';
import { TInput } from '../../types/types';

import inputTmp from './tmp';


class EnterInput extends Block<TInput> {
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


export default EnterInput;
