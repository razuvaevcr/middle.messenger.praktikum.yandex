import Block from '../../utils/eventBus/Block';
import { TChatList } from '../../types/types';

class ChatsList extends Block<TChatList> {
	constructor(props: TChatList) {
		super('div', props);

		this.element.classList.add(this.props.classNames);
	}

	render() {
		return this.compile(this.props.layout, this.props);
	}
}


export default ChatsList;
