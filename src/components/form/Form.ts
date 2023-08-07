import Block from '../../core/block/Block';
import { TForm } from '../../types/types';
import formTmp from './tmp';


class Form extends Block<TForm> {
	constructor(props: TForm) {
		super('form', props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(formTmp, this.props);
	}
}


export default Form;
