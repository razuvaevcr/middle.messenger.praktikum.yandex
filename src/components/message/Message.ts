import Block from '../../core/eventBus/Block';
import { TMessage } from '../../types/types';
import messageTmp from './tmp';


class Message extends Block<TMessage> {
	constructor(props: TMessage) {
		super('div', {
			classNames: [
				'message-history__message',
			],
			text: '',
			time: '',
			content: '',
			is_read: '',
			id: '',
			isUserMessage: false,
			...props,
		});

		if (this.props.isUserMessage) {
			this.props.classNames.push('message_user');
		} else {
			this.props.classNames.push('message_friend');
		}

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(messageTmp, this.props);
	}
}


export default Message;
