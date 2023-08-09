import Block from '../../core/block/Block';
import { TProfilePage } from '../../types/types';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import { formValidation } from '../../utils/validate';
import ProfileInput from '../../components/input/ProfileInput';
import router from '../../core/router/router';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
import UserController from '../../core/controllers/UserController';
import profilePageTmp from './tmp';
import store from '../../core/store/Store';

import './profilePage.scss';


class BaseChangePasswordPage extends Block<TProfilePage> {
	constructor(props: any) {
		super('section', {
			classNames: [
				'profile',
			],
			backButton: new Button({
				tagName: 'button',
				classNames: [
					'back-btn',
					'btn',
				],
				settings: { withInternalID: true },
				events: {
					click: (event) => {
						event.preventDefault();
						router.go('/settings');
					},
				},
			}),
			changeable: true,
			userAvatar: store.getState().user ? store.getState().user!.avatar : 'https://s.oxbridge.es/ox/Oxteacher/informacion%20personal/ficheros/201000401370_20221121_141124.png',
			userName: store.getState().user?.first_name,
			form: new Form({
				classNames: [
					'change-profile__form',
				],
				changeable: true,
				oldPassword: new ProfileInput({
					label: {
						text: 'Старый пароль',
					},
					input: {
						name: 'oldPassword',
						placeholder: '•••••••',
					},
				}),
				newPassword: new ProfileInput({
					label: {
						text: 'Новый пароль',
					},
					input: {
						name: 'newPassword',
						placeholder: '•••••••',
					},
				}),
				newPasswordAgain: new ProfileInput({
					label: {
						text: 'Повторите новый пароль',
					},
					input: {
						name: 'newPasswordAgain',
						placeholder: '•••••••',
					},
				}),
				saveButton: new Button({
					tagName: 'button',
					classNames: [
						'actions__btn-save',
						'btn',
					],
					text: 'Сохранить',
					settings: { withInternalID: true },
				}),
				events: {
					submit: (event) => {
						event.preventDefault();

						const data = formValidation(event.target);

						if (data) {
							UserController.changeUserPassword(data);
							router.go('/settins');
						}
					},
				},
			}),
			...props,
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		if (this.props.userAvatar != store.getState().user!.avatar) {
			this.props.userAvatar = store.getState().user!.avatar;
		}
		return this.compile(profilePageTmp, this.props);
	}
}

const ChangePasswordPage = withStore(mapStateToProps)(BaseChangePasswordPage);


export default ChangePasswordPage;
