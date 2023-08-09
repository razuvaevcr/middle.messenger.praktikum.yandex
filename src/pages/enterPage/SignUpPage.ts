import Block from '../../core/block/Block';
import { TEnterPage } from '../../types/types';
import Button from '../../components/button/Button';
import EnterInput from '../../components/input/EnterInput';
import Form from '../../components/form/Form';
import { formValidation } from '../../utils/validate';
import AuthController from '../../core/controllers/AuthController';
import { withStore } from '../../core/store/Store';
import mapStateToProps from '../../utils/mapStateToProps/mapStateToProps';
import router from '../../core/router/router';
import enterTmp from './tmp';

import './enterPage.scss';


class BaseSignUpPage extends Block<TEnterPage> {
	constructor() {
		super('section', {
			classNames: [
				'enter',
			],
			form: new Form({
				classNames: [
					'enter__form',
				],
				title: 'Регистрация',
				email: new EnterInput({
					label: {
						text: 'Почта',
					},
					input: {
						name: 'email',
					},
				}),
				login: new EnterInput({
					label: {
						text: 'Логин',
					},
					input: {
						name: 'login',
					},
				}),
				first_name: new EnterInput({
					label: {
						text: 'Имя',
					},
					input: {
						name: 'first_name',
					},
				}),
				second_name: new EnterInput({
					label: {
						text: 'Фамилия',
					},
					input: {
						name: 'second_name',
					},
				}),
				phone: new EnterInput({
					label: {
						text: 'Телефон',
					},
					input: {
						name: 'phone',
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
				second_password: new EnterInput({
					label: {
						text: 'Пароль (еще раз)',
					},
					input: {
						name: 'second_password',
					},
				}),
				mainBtn: new Button({
					tagName: 'button',
					classNames: [
						'enter__btns__autorisation',
						'btn',
					],
					text: 'Зарегистрироваться',
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
					text: 'Войти',
					settings: { withInternalID: true },
					events: {
						click: () => router.go('/'),
					},
				}),
				events: {
					submit: (event) => {
						event.preventDefault();

						const data = formValidation(event.target);
						if (data) {
							AuthController.signup(data);
						}
					},
				},
			}),
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(enterTmp, this.props);
	}
}

const SignUpPage = withStore(mapStateToProps)(BaseSignUpPage);


export default SignUpPage;
