import Handlebars from 'handlebars';

import EnterLayout from '../../layouts/EnterLayout';


let template = Handlebars.compile(EnterLayout);

const signIn = {
	title: "Регистрация",
	inputs: {
		email: "Почта",
		login: "Логин",
		first_name: "Имя",
		second_name: "Фамилия",
		phone: "Телефон",
		password: "Пароль",
		second_password: "Пароль (еще раз)",
	},
	buttons: {
		main: "Зарегистрироваться",
		secondary: "Войти",
		link: "#/login",
	}
};

const SignIn = template(signIn);

export default SignIn;
