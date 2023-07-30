import Button from '../button/Button';
import Form from '../form/Form';
import ModalInput from '../input/ModalInput';
import ChatController from '../../core/controllers/ChatController';
import { formValidation } from '../../utils/validate';
import Modal from './Modal';

import './modals.scss';


class AddFileModal extends Modal {
	constructor() {
		super('div', {
			classNames: [
				'modal-overlay',
				'modal__add-file',
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

						// const data = { title: formValidation(event.target).addChatModalInput };
						// console.log(data);

						// if (data) {
						// 	ChatController.createChat(data);
						// 	this.hide();
						// }
						// console.log('submit');
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

export default AddFileModal;
