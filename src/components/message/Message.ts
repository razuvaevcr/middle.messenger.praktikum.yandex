import Block from '../../utils/eventBus/Block';
import { TMessage } from '../../types/types';
import messageTmp from './tmp';


class Message extends Block<TMessage> {
	constructor(props: TMessage) {
		super('div', props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(messageTmp, this.props);
	}
}


export default Message;
