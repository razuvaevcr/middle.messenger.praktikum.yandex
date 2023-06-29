import Handlebars from 'handlebars';
import navigationTmp from './tmp';


const template: Function = Handlebars.compile(navigationTmp);

const listItems: Record<string, Record<string, Record<string, string>>> = {
	links: {
		enter: {
			label: 'Вход',
			value: '/#/login',
		},
		registration: {
			label: 'Регистрация',
			value: '/#/signin',
		},
		home: {
			label: 'Домашняя',
			value: '/#/home',
		},
		chat: {
			label: 'Чат',
			value: '/#/home/chat',
		},
		profile: {
			label: 'Профиль',
			value: '/#/profile',
		},
		page404: {
			label: 'Страница 404',
			value: '/#/error404',
		},
		page500: {
			label: 'Страница 500',
			value: '/#/error500',
		},
		changeProfile: {
			label: 'Изменить профиль',
			value: '/#/profile/changedata',
		},
		changePassword: {
			label: 'Изменить пароль',
			value: '/#/profile/changepass',
		},
	},
};

const navigation: (data: object) => string = template(listItems);


export default navigation;
