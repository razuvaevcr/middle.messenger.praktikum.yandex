import Handlebars from 'handlebars';

import './errorPage.scss'

const source = `<div class="error__title">{{errorNumber}}</div>
				<div class="error__subtitle">{{subtitle}}</div>
				<a href="/#/home" class="error__link">{{button}}</a>`;

			
let template = Handlebars.compile(source);

const error404 = {
	errorNumber: "404",
	subtitle: "Не туда попали",
	button: "Назад к чатам",
};

const error500 = {
	errorNumber: "500",
	subtitle: "Мы уже фиксим",
	button: "Назад к чатам",
};
const ErrorPage = {
	render: (path) => {
		console.log(path)
		return `
			<section class="error">
				${path === '/error500' ? template(error500) : template(error404)}
			</section>
		`;
	}
}

export default ErrorPage;