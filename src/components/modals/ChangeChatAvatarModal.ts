import store from '../../core/store/Store';
import Button from '../button/Button';
import Form from '../form/Form';
import ModalInput from '../input/ModalInput';
import ChatController from '../../core/controllers/ChatController';
import Modal from './Modal';


import './modals.scss';


class ChangeChatAvatarModal extends Modal {
	constructor() {
		super('div', {
			classNames: [
				'modal-overlay',
				'modal__change-chat-avatar',
			],
			form: new Form({
				classNames: [
					'modal__form',
				],
				title: 'Добавить файл',
				input: new ModalInput({
					classNames: [
						'modal__input',
						'input',
					],
					input: {
						classNames: [
							'input',
						],
						name: 'addChatModalInput',
						type: 'file',
					},
				}),
				submitBtn: new Button({
					tagName: 'button',
					type: 'submit',
					classNames: [
						'btn',
						'actions__btn-save',
					],
					text: 'Добавить',
					settings: { withInternalID: true },
				}),
				events: {
					submit: (event) => {
						event.preventDefault();

						const file = ((event.target! as HTMLFormElement)[0] as HTMLInputElement).files![0];

						if (file) {
							const formData = new FormData();
							formData.append('avatar', file);
							formData.append('chatId', `${store.getState().activeChat!}`);
							ChatController.uploadChatAvatar(formData);
							this.hide();
						}
					},
				},
			}),
			events: {
				click: (event) => {
					this.hideModal(event);
				},
			},
		});
	}
}

// const ChangeChatAvatarModal = withStore(mapStateToProps)(BaseChangeChatAvatarModal);

export default ChangeChatAvatarModal;
