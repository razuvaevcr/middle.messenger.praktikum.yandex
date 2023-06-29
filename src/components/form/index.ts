import Form from './Form';
import {
	signInRegBtn,
	signInEnterBtn,
	logInAuthorizationBtn,
	logInNoAccountBtn,
	profileSaveBtn,
	profileChangePasswordSaveBtn,
	messageBarAddBtn,
	messageBarSendBtn,
} from '../button';
import {
	logInInputLogin,
	logInInputPassword,
	signInInputEmail,
	signInInputLogin,
	signInInputFirstName,
	signInInputSecondName,
	signInInputPhone,
	signInInputPassword,
	signInInputSecondPassword,
	changeProfileInputEmail,
	changeProfileInputLogin,
	changeProfileInputFirstName,
	changeProfileInputSecondName,
	changeProfileInputDisplayName,
	changeProfileInputPhone,
	changeProfileInputOldPassword,
	changeProfileInputNewPassword,
	changeProfileInputOldPasswordAgain,
	messageBarInput,
} from '../input';


const logInForm = new Form({
	classNames: [
		'enter__form',
	],
	title: 'Вход',
	login: logInInputLogin,
	password: logInInputPassword,
	mainBtn: logInAuthorizationBtn,
	secondBtn: logInNoAccountBtn,

});


const signInForm = new Form({
	classNames: [
		'enter__form',
	],
	title: 'Регистрация',
	email: signInInputEmail,
	login: signInInputLogin,
	first_name: signInInputFirstName,
	second_name: signInInputSecondName,
	phone: signInInputPhone,
	password: signInInputPassword,
	second_password: signInInputSecondPassword,
	mainBtn: signInRegBtn,
	secondBtn: signInEnterBtn,
});

const profileChangeForm = new Form({
	classNames: [
		'change-profile__form',
	],
	changeable: true,
	email: changeProfileInputEmail,
	login: changeProfileInputLogin,
	first_name: changeProfileInputFirstName,
	second_name: changeProfileInputSecondName,
	display_name: changeProfileInputDisplayName,
	phone: changeProfileInputPhone,
	saveButton: profileSaveBtn,
});

const profileChangePasswordForm = new Form({
	classNames: [
		'change-profile__form',
	],
	changeable: true,
	old_password: changeProfileInputOldPassword,
	new_password: changeProfileInputNewPassword,
	new_password_again: changeProfileInputOldPasswordAgain,
	saveButton: profileChangePasswordSaveBtn,
});

const messageForm = new Form({
	classNames: [
		'message-bar',
	],
	addBtn: messageBarAddBtn,
	input: messageBarInput,
	sendBtn: messageBarSendBtn,
});


export {
	logInForm,
	signInForm,
	profileChangeForm,
	profileChangePasswordForm,
	messageForm,
};
