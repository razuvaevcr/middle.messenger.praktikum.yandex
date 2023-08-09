import burgerTmp from './tmp';
import Block from '../../core/block/Block';
import Button from '../button/Button';
import { TBurgerMenu } from '../../types/types';
import ChatController from '../../core/controllers/ChatController';
import store from '../../core/store/Store';

import './burger.scss';


class ChatBurgerMenu extends Block<TBurgerMenu> {
	constructor() {
		super('div', {
			classNames: [
				'burger',
				'burger__chat',
				'burger_hide',
			],
			addUser: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'burger__item',
				],
				text: 'Добавить пользователя',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__add-user');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			removeUser: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'burger__item',
				],
				text: 'Удалить пользователя',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__delete-user');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			removeChat: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'btn_red',
					'burger__item',
				],
				text: 'Удалить чат',
				settings: { withInternalID: true },
				events: {
					click: () => {
						if (store.getState().activeChat) {
							ChatController.deleteChat({ chatId: store.getState().activeChat! });
						} else {
							throw new Error('Чат не выбран');
						}
						console.log();
					},
				},
			}),
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(burgerTmp, this.props);
	}
}

export default ChatBurgerMenu;
