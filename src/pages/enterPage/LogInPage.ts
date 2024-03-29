import Block from '../../core/block/Block';
import { TEnterPage } from '../../types/types';
import Button from '../../components/button/Button';
import EnterInput from '../../components/input/EnterInput';
import Form from '../../components/form/Form';
import { formValidation } from '../../utils/validate';
import AuthController from '../../core/controllers/AuthController';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
// import navigation from '../../components/navigation/navigation';
import router from '../../core/router/router';
import enterTmp from './tmp';

import './enterPage.scss';


class BaseLogInPage extends Block<TEnterPage> {
	constructor() {
		super('section', {
			classNames: [
				'enter',
			],
			form: new Form({
				classNames: [
					'enter__form',
				],
				title: 'Вход',
				login: new EnterInput({
					label: {
						text: 'Логин',
					},
					input: {
						name: 'login',
					},
				}),
				password: new EnterInput({
					label: {
						text: 'Пароль',
					},
					input: {
						name: 'password',
					},
				}),
				mainBtn: new Button({
					tagName: 'button',
					classNames: [
						'enter__btns__autorisation',
						'btn',
					],
					text: 'Авторизоваться',
					type: 'submit',
					settings: { withInternalID: true },
				}),
				secondBtn: new Button({
					tagName: 'button',
					type: 'button',
					classNames: [
						'enter__btns__link',
						'btn_flat',
						'btn',
					],
					text: 'Нет аккаунта',
					settings: { withInternalID: true },
					events: {
						click: () => router.go('/sign-up'),
					},
				}),
				events: {
					submit: (event) => {
						event.preventDefault();

						const data = formValidation(event.target);
						if (data) {
							AuthController.signin(data);
						}
					},
				},
			}),
			// navigation,
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(enterTmp, this.props);
	}
}

const LogInPage = withStore(mapStateToProps)(BaseLogInPage);


export default LogInPage;
