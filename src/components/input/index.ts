import { Input, FormInput, ProfileInput } from './Input';

const logInInputLogin = new FormInput({
	label: {
		text: 'Логин',
	},
	input: {
		name: 'login',
	},
});

const logInInputPassword = new FormInput({
	label: {
		text: 'Пароль',
	},
	input: {
		name: 'password',
	},
});

const signInInputEmail = new FormInput({
	label: {
		text: 'Почта',
	},
	input: {
		name: 'email',
	},
});

const signInInputLogin = new FormInput({
	label: {
		text: 'Логин',
	},
	input: {
		name: 'login',
	},
});

const signInInputFirstName = new FormInput({
	label: {
		text: 'Имя',
	},
	input: {
		name: 'first_name',
	},
});

const signInInputSecondName = new FormInput({
	label: {
		text: 'Фамилия',
	},
	input: {
		name: 'second_name',
	},
});

const signInInputPhone = new FormInput({
	label: {
		text: 'Телефон',
	},
	input: {
		name: 'phone',
	},
});

const signInInputPassword = new FormInput({
	label: {
		text: 'Пароль',
	},
	input: {
		name: 'password',
	},
});

const signInInputSecondPassword = new FormInput({
	label: {
		text: 'Пароль (еще раз)',
	},
	input: {
		name: 'second_password',
	},
});

const chatsSearchInput = new Input({
	tagName: 'div',
	href: '#/login',
	classNames: [
		'search',
	],
	input: {
		name: 'search',
		placeholder: 'Поиск',
		type: 'text',
	},
});

const messageBarInput = new Input({
	classNames: [
		'message-bar__message-wrapper',
	],
	input: {
		classNames: [
			'message-bar__message',
		],
		name: 'message',
		placeholder: 'Сообщение',
		type: 'text',
	},
});

const changeProfileInputEmail = new ProfileInput({
	label: {
		text: 'Почта',
	},
	input: {
		name: 'email',
		placeholder: 'some@email.com',
	},
});

const changeProfileInputLogin = new ProfileInput({
	label: {
		text: 'Логин',
	},
	input: {
		name: 'login',
		placeholder: 'some_login',
	},
});

const changeProfileInputFirstName = new ProfileInput({
	label: {
		text: 'Имя',
	},
	input: {
		name: 'first_name',
		placeholder: 'Ivan',
	},
});

const changeProfileInputSecondName = new ProfileInput({
	label: {
		text: 'Фамилия',
	},
	input: {
		name: 'second_name',
		placeholder: 'Ivanov',
	},
});

const changeProfileInputDisplayName = new ProfileInput({
	label: {
		text: 'Имя в чате',
	},
	input: {
		name: 'display_name',
		placeholder: 'some',
	},
});

const changeProfileInputPhone = new ProfileInput({
	label: {
		text: 'Телефон',
	},
	input: {
		name: 'phone',
		placeholder: '8(999)999-99-99',
	},
});

const changeProfileInputOldPassword = new ProfileInput({
	label: {
		text: 'Старый пароль',
	},
	input: {
		name: 'old_password',
		placeholder: '•••••••',
	},
});

const changeProfileInputNewPassword = new ProfileInput({
	label: {
		text: 'Новый пароль',
	},
	input: {
		name: 'new_password',
		placeholder: '•••••••',
	},
});

const changeProfileInputOldPasswordAgain = new ProfileInput({
	label: {
		text: 'Повторите новый пароль',
	},
	input: {
		name: 'new_password_again',
		placeholder: '•••••••',
	},
});


export {
	logInInputLogin,
	logInInputPassword,
	signInInputEmail,
	signInInputLogin,
	signInInputFirstName,
	signInInputSecondName,
	signInInputPhone,
	signInInputPassword,
	signInInputSecondPassword,
	chatsSearchInput,
	messageBarInput,
	changeProfileInputEmail,
	changeProfileInputLogin,
	changeProfileInputFirstName,
	changeProfileInputSecondName,
	changeProfileInputDisplayName,
	changeProfileInputPhone,
	changeProfileInputOldPassword,
	changeProfileInputNewPassword,
	changeProfileInputOldPasswordAgain,
};
