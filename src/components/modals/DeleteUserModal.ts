import Button from '../button/Button';
import Form from '../form/Form';
import ModalInput from '../input/ModalInput';
import ChatController from '../../core/controllers/ChatController';
import { formValidation } from '../../utils/validate';
import Modal from './Modal';
import store from '../../core/store/Store';

import './modals.scss';


class DeleteUserModal extends Modal {
	constructor() {
		super('div', {
			classNames: [
				'modal-overlay',
				'modal__delete-user',
			],
			form: new Form({
				classNames: [
					'modal__form',
				],
				title: 'Удалить пользователя',
				input: new ModalInput({
					classNames: [
						'modal__input',
						'input',
					],
					input: {
						classNames: [
							'input',
						],
						name: 'deleteUserModalInput',
						placeholder: 'id пользователя',
						type: 'text',
					},
				}),
				submitBtn: new Button({
					tagName: 'button',
					type: 'submit',
					classNames: [
						'btn',
						'btn_red',
						'actions__btn-save',
					],
					text: 'Удалить',
					settings: { withInternalID: true },
				}),
				events: {
					submit: (event) => {
						event.preventDefault();

						const data = {
							users: [ Number(formValidation(event.target).deleteUserModalInput) ],
							chatId: Number(store.getState().activeChat),
						};

						if (data) {
							ChatController.deleteUserFromChat(data);

							this.hide();
							console.log(`Пользователь ${Number(formValidation(event.target).deleteUserModalInput)} удален`);
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

export default DeleteUserModal;
