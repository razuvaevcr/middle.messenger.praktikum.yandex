import Block from '../../utils/eventBus/Block';
import { TChatItem } from '../../types/types';
import chatItemTmp from './tmp';


class ChatItem extends Block<TChatItem> {
	constructor(props: TChatItem) {
		super('div', props);

		if (this.props.isActive) {
			this.props.classNames.push('chat_active');
		}

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(chatItemTmp, this.props);
	}
}


export default ChatItem;
