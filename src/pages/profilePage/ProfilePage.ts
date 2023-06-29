import Page from '../Page';
import {
	profileBackBtn,
	profileChangeDataBtn,
	profileChangePasswordBtn,
	profileOutBtn,
	profileChangePasswordBackBtn,
	profileChangeBackBtn,
} from '../../components/button';
import { profileChangePasswordForm, profileChangeForm } from '../../components/form';
import profilePageTmp from './tmp';

import './profilePage.scss';


const ProfilePage = new Page({
	layout: profilePageTmp,
	classNames: [
		'profile',
	],
	backButton: profileBackBtn,
	changeable: false,
	inputs: {
		email: {
			label: 'Почта',
			input: 'some@email.com',
		},
		login: {
			label: 'Логин',
			input: 'some',
		},
		first_name: {
			label: 'Имя',
			input: 'Ivan',
		},
		second_name: {
			label: 'Фамилия',
			input: 'Ivanov',
		},
		display_name: {
			label: 'Имя в чате',
			input: 'some',
		},
		phone: {
			label: 'Телефон',
			input: '8(999)999-99-99',
		},
	},
	changeDataButton: profileChangeDataBtn,
	changePasswordButton: profileChangePasswordBtn,
	outButton: profileOutBtn,
});

const ChangeProfilePage = new Page({
	layout: profilePageTmp,
	classNames: [
		'profile',
	],
	backButton: profileChangeBackBtn,
	changeable: true,
	form: profileChangeForm,
});

const ChangeProfilePasswordPage = new Page({
	layout: profilePageTmp,
	classNames: [
		'profile',
	],
	backButton: profileChangePasswordBackBtn,
	changeable: true,
	form: profileChangePasswordForm,
});


export {
	ProfilePage,
	ChangeProfilePage,
	ChangeProfilePasswordPage,
};
