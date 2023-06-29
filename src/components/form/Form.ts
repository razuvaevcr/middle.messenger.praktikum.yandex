import Block from '../../utils/eventBus/Block';
import { formValidation } from '../../utils/validate';
import { TForm } from '../../types/types';
import formTmp from './tmp';


class Form extends Block<TForm> {
	constructor(props: TForm) {
		super('form', props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});

		this.props.events = {
			submit: (event: Event) => {
				event.preventDefault();
				formValidation(event);
			},
		};
	}

	render() {
		return this.compile(formTmp, this.props);
	}
}


export default Form;
