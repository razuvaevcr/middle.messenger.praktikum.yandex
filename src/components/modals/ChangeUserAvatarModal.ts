import Button from '../button/Button';
import Form from '../form/Form';
import ModalInput from '../input/ModalInput';
import Modal from './Modal';

import './modals.scss';
import UserController from '../../core/controllers/UserController';


class ChangeUserAvatarModal extends Modal {
	constructor() {
		super('div', {
			classNames: [
				'modal-overlay',
				'modal__change-avatar-modal',
			],
			form: new Form({
				classNames: [
					'modal__form',
				],
				title: 'Изменить Аватар',
				input: new ModalInput({
					classNames: [
						'modal__input',
						'input',
					],
					input: {
						classNames: [
							'input',
						],
						name: 'cahngeAvatarModalInput',
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
					text: 'Изменить',
					settings: { withInternalID: true },
				}),
				events: {
					submit: (event) => {
						event.preventDefault();
						const file = ((event.target! as HTMLFormElement)[0] as any).files[0];

						if (file) {
							const formData = new FormData();
							formData.append('avatar', file);
							UserController.changeUserAvatar(formData);
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

export default ChangeUserAvatarModal;
