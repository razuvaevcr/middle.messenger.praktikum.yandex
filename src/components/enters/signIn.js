import Handlebars from 'handlebars';

const source = `<form onSubmit="document.location='/#/home'" class="enter__form">
					<div class="enter__title">{{title}}</div>
					<div class="enter__input">
					{{#each inputs}}
						<label for="{{@key}}" class="enter__input__label">{{this}}</label>
						<input name="{{@key}}" type="text" class="enter__input__value">
					{{/each}}
					</div>
					<div class="enter__btns">
						<button type="submit" class="enter__btns__autorisation">{{buttons.register}}</button>
						<a href="#/login" class="enter__btns__link">{{buttons.enter}}</a>
					</div>
				</form>`;

			
let template = Handlebars.compile(source);

let context = {
	title: "Регистрация",
	inputs: {
		email: "Почта",
		logIn: "Логин",
		name: "Имя",
		surname: "Фамилия",
		tel: "Телефон",
		pass: "Пароль",
		verification: "Пароль (еще раз)",
	},
	buttons: {
		register: "Зарегистрироваться",
		enter: "Войти",
	}
};
const SignIn = template(context);

export default SignIn;