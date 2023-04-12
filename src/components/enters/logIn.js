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
						<button type="submit" class="enter__btns__autorisation">{{buttons.logIn}}</button>
						<a href="#/signin" class="enter__btns__link">{{buttons.noAccount}}</a>
					</div>
				</form>`;

			
let template = Handlebars.compile(source);

let context = {
	title: "Вход",
	inputs: {
		logIn: "Логин",
		pass: "Пароль",
	},
	buttons: {
		logIn: "Авторизоваться",
		noAccount: "Нет аккаунта",
	}
};

const LogIn = template(context);

export default LogIn;