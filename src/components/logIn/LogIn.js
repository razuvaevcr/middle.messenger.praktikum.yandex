import Handlebars from 'handlebars';

import EnterLayout from '../../layouts/EnterLayout';

let template = Handlebars.compile(EnterLayout);

const logIn = {
	title: "Вход",
	inputs: {
		login: "Логин",
		password: "Пароль",
	},
	buttons: {
		main: "Авторизоваться",
		secondary: "Нет аккаунта",
		link: "#/signin",
	}
};

const LogIn = template(logIn);

export default LogIn;
