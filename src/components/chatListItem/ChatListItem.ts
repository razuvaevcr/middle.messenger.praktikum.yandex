import ChatController from '../../core/controllers/ChatController';
import Block from '../../core/eventBus/Block';
import store from '../../core/store/Store';
import { TChatItem } from '../../types/types';
import chatItemTmp from './tmp';
import MessageController from '../../core/controllers/MessageController';


class ChatListItem extends Block<TChatItem> {
	constructor(props: any) {
		super('div', {
			...props,
			classNames: [
				'chat',
			],
			events: {
				click: async () => {
					const chats = document.querySelectorAll('.chat');

					if (chats && chats.length > 0) {
						chats.forEach((elem: HTMLElement) => {
							elem.classList.remove('chat_active');
						});
					}

					store.set('activeChat', this.props.chatId);
					store.set('activeChatAvatar', this.props.avatar);
					store.set('activeChatTitle', this.props.title);
					this.setProps({
						isActive: 'true',
					});

					if (this.props.isActive) {
						this.element.classList.add('chat_active');
					}

					const { user, activeChat } = await store.getState();
					const token = await ChatController.getToken(activeChat as number);
					await MessageController.init((user as { id: number }).id, activeChat as number, token.token);
					await MessageController.getMessages();
				},
			},
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(chatItemTmp, this.props);
	}
}

export default ChatListItem;
