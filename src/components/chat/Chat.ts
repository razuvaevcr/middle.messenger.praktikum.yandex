import Block from '../../utils/eventBus/Block';
import { TChat } from '../../types/types';
import chatTmp from './tmp';


class Chat extends Block<TChat> {
	constructor(props: TChat) {
		super('div', props);

		this.element.classList.add('right');
	}

	render() {
		return this.compile(chatTmp, this.props);
	}
}


export default Chat;
