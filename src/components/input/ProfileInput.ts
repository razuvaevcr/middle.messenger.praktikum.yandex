import Block from '../../core/eventBus/Block';
import { inputValidation } from '../../utils/validate';
import { TInput } from '../../types/types';

import inputTmp from './tmp';


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
			value: this.props.input.value,
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


export default ProfileInput;
