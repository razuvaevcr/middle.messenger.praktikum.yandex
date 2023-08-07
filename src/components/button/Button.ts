import Block from '../../core/block/Block';
import { TButton } from '../../types/types';
import buttonTmp from './tmp';


class Button extends Block<TButton> {
	constructor(props: TButton) {
		super(props.tagName, props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});

		if (this.props.type) {
			this.element.setAttribute('type', this.props.type);
		}

		if (this.props.href) {
			this.element.setAttribute('href', this.props.href);
		}
	}

	render() {
		return this.compile(buttonTmp, this.props);
	}
}


export default Button;
