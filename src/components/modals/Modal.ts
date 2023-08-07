import Block from '../../core/block/Block';
import { TModal } from '../../types/types';

import modalTmp from './tmp';


class Modal extends Block<TModal> {
	constructor(tagName: string, props: TModal) {
		super(tagName, props);

		this.props.classNames.push('modal');

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	protected hideModal(event: Event) {
		if ((event.target as HTMLElement).className.includes('modal-overlay')) {
			this.hide();
		} else {
			return;
		}
	}

	render() {
		return this.compile(modalTmp, this.props);
	}
}


export default Modal;
