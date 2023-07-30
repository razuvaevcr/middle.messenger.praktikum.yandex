import Button from '../button/Button';
import Form from '../form/Form';
import ModalInput from '../input/ModalInput';
import ChatController from '../../core/controllers/ChatController';
import { formValidation } from '../../utils/validate';
import Modal from './Modal';
import store from '../../core/store/Store';

import './modals.scss';


class AddUserModal extends Modal {
	constructor() {
		super('div', {
			classNames: [
				'modal-overlay',
				'modal__add-user',
			],
			form: new Form({
				classNames: [
					'modal__form',
				],
				title: 'Добавить пользователя',
				input: new ModalInput({
					classNames: [
						'modal__input',
						'input',
					],
					input: {
						classNames: [
							'input',
						],
						name: 'addUserModalInput',
						placeholder: 'id пользователя',
						type: 'text',
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

						const data = {
							users: [Number(formValidation(event.target).addUserModalInput)],
							chatId: Number(store.getState().activeChat),
						};

						if (data) {
							ChatController.addUserToChat(data);

							this.hide();
							console.log(`Пользователь ${Number(formValidation(event.target).addUserModalInput)} добавлен`);
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

export default AddUserModal;
