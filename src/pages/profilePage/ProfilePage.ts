import Block from '../../core/eventBus/Block';
import { TProfilePage } from '../../types/types';
import Button from '../../components/button/Button';
import router from '../../core/router/router';
import AuthController from '../../core/controllers/AuthController';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
import profilePageTmp from './tmp';
import store from '../../core/store/Store';

import './profilePage.scss';


class BaseProfilePage extends Block<TProfilePage> {
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
						router.go('/home');
					},
				},
			}),
			changeable: false,
			userAvatar: store.getState().user?.avatar ? `https://ya-praktikum.tech/api/v2/resources/${store.getState().user?.avatar}` : 'https://s.oxbridge.es/ox/Oxteacher/informacion%20personal/ficheros/201000401370_20221121_141124.png',
			userName: store.getState().user?.first_name,
			changeDataButton: new Button({
				tagName: 'button',
				classNames: [
					'actions__btn',
					'btn',
					'btn_flat',
				],
				text: 'Изменить данные',
				settings: { withInternalID: true },
				events: {
					click: (event) => {
						event.preventDefault();
						router.go('/profile/changedata');
					},
				},
			}),
			changePasswordButton: new Button({
				tagName: 'button',
				classNames: [
					'actions__btn',
					'btn',
					'btn_flat',
				],
				text: 'Изменить пароль',
				settings: { withInternalID: true },
				events: {
					click: (event) => {
						event.preventDefault();
						router.go('/profile/changepass');
					},
				},
			}),
			outButton: new Button({
				tagName: 'button',
				classNames: [
					'actions__btn',
					'actions__btn_red',
					'btn',
					'btn_flat',
				],
				text: 'Выйти',
				settings: { withInternalID: true },
				events: {
					click: (event) => {
						event.preventDefault();

						AuthController.logout();
						router.go('/');
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
		return this.compile(profilePageTmp, this.props);
	}
}

const ProfilePage = withStore(mapStateToProps)(BaseProfilePage);


export default ProfilePage;
