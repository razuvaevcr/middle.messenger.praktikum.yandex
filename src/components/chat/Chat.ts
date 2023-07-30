import Block from '../../core/eventBus/Block';
import { TChat } from '../../types/types';
import chatTmp from './tmp';

import Button from '../button/Button';
import MessageInput from '../input/MessageInput';
import Form from '../form/Form';
import { formValidation } from '../../utils/validate';
import MessageController from '../../core/controllers/MessageController';
import store from '../../core/store/Store';
import ChatBurgerMenu from '../burger/BurgerMenu';
import MessageBurgerMenu from '../burger/MessageBurgerMenu';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';

class BaseChat extends Block<TChat> {
	constructor(props: any) {
		super('div', {
			...props,
			classNames: [
				'right',
			],
			chatName: 'Chat',
			optionsBtn: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'user-bar__menu',
				],
				settings: { withInternalID: true },
				events: {
					click: () => {
						const burgersClasses = document.querySelector('.burger__chat')!.classList;

						burgersClasses.contains('burger_hide') ? burgersClasses.remove('burger_hide') : burgersClasses.add('burger_hide');
					},
				},
			}),
			form: new Form({
				classNames: [
					'message-bar',
				],
				optionsBtn: new Button({
					tagName: 'button',
					classNames: [
						'btn',
						'btn_mini',
					],
					type: 'button',
					settings: { withInternalID: true },
					events: {
						click: (event) => {
							event.preventDefault();
							const burgersClasses = document.querySelector('.burger__message')!.classList;

							burgersClasses.contains('burger_hide') ? burgersClasses.remove('burger_hide') : burgersClasses.add('burger_hide');
						},
					},
				}),
				input: new MessageInput({
					classNames: [
						'message-bar__message-wrapper',
					],
					input: {
						classNames: [
							'message-bar__message',
						],
						name: 'message',
						placeholder: 'Сообщение',
						type: 'text',
					},
				}),
				sendBtn: new Button({
					tagName: 'button',
					type: 'submit',
					classNames: [
						'btn',
						'btn_mini',
					],
					settings: { withInternalID: true },
				}),
				events: {
					submit: async (event) => {
						event.preventDefault();
						formValidation(event.target);

						const currentChatId = await store.getState().activeChat;
						if (currentChatId) {
							const formData = new FormData((event.target as HTMLFormElement));
							const data = {
								message: String(formData.get('message')),
							};
							this.setProps({
								value: '',
							});
							await MessageController.handleOpen(data.message);
						} else {
							console.log('Чат не выбран');
						}

						((event.target as HTMLFormElement)[1] as HTMLInputElement).value = '';
					},
				},
			}),
			optionsMenu: new ChatBurgerMenu(),
			messageOptionsMenu: new MessageBurgerMenu(),
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(chatTmp, this.props);
	}
}

const Chat = withStore(mapStateToProps)(BaseChat);


export default Chat;
