import Block from '../../core/eventBus/Block';
import { TProfilePage } from '../../types/types';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';
import ProfileInput from '../../components/input/ProfileInput';
import router from '../../core/router/router';
import { formValidation } from '../../utils/validate';
import store, { withStore } from '../../core/store/Store';
import UserController from '../../core/controllers/UserController';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
import ChangeUserAvatarModal from '../../components/modals/ChangeUserAvatarModal';
import profilePageTmp from './tmp';

import './profilePage.scss';
import BASE_URL_RESOURCES from '../../core/controllers/baseURL';


class BaseChangeProfilePage extends Block<TProfilePage> {
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
			userAvatar: store.getState().user ? `${BASE_URL_RESOURCES}${store.getState().user!.avatar}` : 'https://s.oxbridge.es/ox/Oxteacher/informacion%20personal/ficheros/201000401370_20221121_141124.png',
			// userAvatar: new UserAvatar({}),
			userAvatarBtn: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'user__avatar__btn',
				],
				text: 'Поменять аватар',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__change-avatar-modal');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			userName: store.getState().user?.first_name,
			form: new Form({
				classNames: [
					'change-profile__form',
				],
				changeable: true,
				email: new ProfileInput({
					label: {
						text: 'Почта',
					},
					input: {
						name: 'email',
						value: 'Email',
					},
				}),
				login: new ProfileInput({
					label: {
						text: 'Логин',
					},
					input: {
						name: 'login',
						value: props.login,
					},
				}),
				first_name: new ProfileInput({
					label: {
						text: 'Имя',
					},
					input: {
						name: 'first_name',
						value: props.first_name,
					},
				}),
				second_name: new ProfileInput({
					label: {
						text: 'Фамилия',
					},
					input: {
						name: 'second_name',
						value: props.second_name,
					},
				}),
				display_name: new ProfileInput({
					label: {
						text: 'Имя в чате',
					},
					input: {
						name: 'display_name',
						value: props.display_name,
					},
				}),
				phone: new ProfileInput({
					label: {
						text: 'Телефон',
					},
					input: {
						name: 'phone',
						value: 'Phone',
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
							UserController.changeUserProfile(data);
							router.go('/settings');
						}
					},
				},
			}),
			changeAvatarModal: new ChangeUserAvatarModal(),
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

const ChangeProfilePage = withStore(mapStateToProps)(BaseChangeProfilePage);


export default ChangeProfilePage ;
