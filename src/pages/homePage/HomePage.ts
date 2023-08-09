import Block from '../../core/block/Block';
import { THomePage } from '../../types/types';
import Button from '../../components/button/Button';
import SearchInput from '../../components/input/SearchInput';
import Chat from '../../components/chat/Chat';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
import homePageTmp from './tmp';
import AddChatModal from '../../components/modals/AddChatModal';
import AddUserModal from '../../components/modals/AddUserModal';
import ChatController from '../../core/controllers/ChatController';
import store from '../../core/store/Store';
import DeleteUserModal from '../../components/modals/DeleteUserModal';
import AddPhotoModal from '../../components/modals/AddPhotoModal';
import AddFileModal from '../../components/modals/AddFileModal';
import AddLocationModal from '../../components/modals/AddLocationModal';
import ChangeChatAvatarModal from '../../components/modals/ChangeChatAvatarModal';
import router from '../../core/router/router';

import './homePage.scss';


class BaseHomePage extends Block<THomePage> {
	constructor(props: any) {
		super('section', {
			classNames: [
				'home',
			],
			profileBtn: new Button({
				tagName: 'button',
				type: 'button',
				classNames: [
					'profile-btn',
					'btn',
				],
				text: 'Профиль',
				settings: { withInternalID: true },
				events: {
					click: () => router.go('/settings'),
				},
			}),
			search: new SearchInput({
				tagName: 'div',
				classNames: [
					'search',
				],
				input: {
					name: 'search',
					placeholder: 'Поиск',
					type: 'text',
				},
			}),
			addChatBtn: new Button({
				tagName: 'button',
				classNames: [
					'add-chat-btn',
					'btn_mini',
				],
				text: '+',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__add-chat');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			chat: new Chat({}),
			addChatModal: new AddChatModal(),
			addUserModal: new AddUserModal(),
			deleteUserModal: new DeleteUserModal(),
			addPhotoModal: new AddPhotoModal(),
			addFileModal: new AddFileModal(),
			addLocationModal: new AddLocationModal(),
			changeChatAvatarModal: new ChangeChatAvatarModal(),
			// emptyChat: { //для заглушки при невыбранном чате
			// 	className: 'empty-chat',
			// 	text: 'Выберите чат чтобы отправить сообщение',
			// },
			...props,
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	async componentDidMount() {
		await ChatController.getChats();
	}

	render() {
		if (!store.getState().activeChat) {
			this.children.chat.hide();
		} else {
			this.children.chat.show();
		}

		return this.compile(homePageTmp, this.props);
	}
}

const HomePage = withStore(mapStateToProps)(BaseHomePage);


export default HomePage;
