import Button from './Button';


const signInRegBtn = new Button({
	tagName: 'button',
	classNames: [
		'enter__btns__autorisation',
		'btn',
	],
	text: 'Зарегистрироваться',
	type: 'submit',
	settings: { withInternalID: true },
});

const signInEnterBtn = new Button({
	tagName: 'a',
	href: '#/login',
	classNames: [
		'enter__btns__link',
		'btn_flat',
	],
	text: 'Войти',
	settings: { withInternalID: true },
});

const logInAuthorizationBtn = new Button({
	tagName: 'button',
	classNames: [
		'enter__btns__autorisation',
		'btn',
	],
	text: 'Авторизоваться',
	type: 'submit',
	settings: { withInternalID: true },
});

const logInNoAccountBtn = new Button({
	tagName: 'a',
	href: '#/signin',
	classNames: [
		'enter__btns__link',
		'btn_flat',
	],
	text: 'Нет аккаунта',
	settings: { withInternalID: true },
});

const chatsListProfileBtn = new Button({
	tagName: 'a',
	href: '/#/profile',
	classNames: [
		'profile-btn',
		'btn_flat',
	],
	text: 'Профиль',
	settings: { withInternalID: true },
});

const messageBarAddBtn = new Button({
	tagName: 'button',
	classNames: [
		'btn',
		'btn_mini',
	],
	settings: { withInternalID: true },
});

const messageBarSendBtn = new Button({
	tagName: 'button',
	classNames: [
		'btn',
		'btn_mini',
	],
	settings: { withInternalID: true },
});

const error404Btn = new Button({
	tagName: 'a',
	href: '/#/home',
	classNames: [
		'error__link',
		'btn_flat',
	],
	text: 'Назад к чатам',
	settings: { withInternalID: true },
});

const error500Btn = new Button({
	tagName: 'a',
	href: '/#/home',
	classNames: [
		'error__link',
		'btn_flat',
	],
	text: 'Назад к чатам',
	settings: { withInternalID: true },
});

const profileBackBtn = new Button({
	tagName: 'button',
	classNames: [
		'back-btn',
		'btn',
	],
	settings: { withInternalID: true },
	events: {
		click: (event) => {
			event.preventDefault();
			document.location = '/#/home';
		},
	},
});

const profileChangeBackBtn = new Button({
	tagName: 'button',
	classNames: [
		'back-btn',
		'btn',
	],
	settings: { withInternalID: true },
	events: {
		click: (event) => {
			event.preventDefault();
			document.location = '/#/profile';
		},
	},
});

const profileChangePasswordBackBtn = new Button({
	tagName: 'button',
	classNames: [
		'back-btn',
		'btn',
	],
	settings: { withInternalID: true },
	events: {
		click: (event) => {
			event.preventDefault();
			document.location = '/#/profile';
		},
	},
});

const profileSaveBtn = new Button({
	tagName: 'button',
	classNames: [
		'actions__btn-save',
		'btn',
	],
	text: 'Сохранить',
	settings: { withInternalID: true },
});

const profileChangePasswordSaveBtn = new Button({
	tagName: 'button',
	classNames: [
		'actions__btn-save',
		'btn',
	],
	text: 'Сохранить',
	settings: { withInternalID: true },
});

const profileChangeDataBtn = new Button({
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
			document.location = '/#/profile/changedata';
		},
	},
});

const profileChangePasswordBtn = new Button({
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
			document.location = '/#/profile/changepass';
		},
	},
});

const profileOutBtn = new Button({
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
			document.location = '/#/login';
		},
	},
});


export {
	signInRegBtn,
	signInEnterBtn,
	logInAuthorizationBtn,
	logInNoAccountBtn,
	chatsListProfileBtn,
	messageBarAddBtn,
	messageBarSendBtn,
	error404Btn,
	error500Btn,
	profileBackBtn,
	profileChangeBackBtn,
	profileChangePasswordBackBtn,
	profileSaveBtn,
	profileChangePasswordSaveBtn,
	profileChangeDataBtn,
	profileChangePasswordBtn,
	profileOutBtn,
};
