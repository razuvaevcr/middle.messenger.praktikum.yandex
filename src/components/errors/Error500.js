import Handlebars from 'handlebars';

import ErrorLayout from '../../layouts/ErrorLayout';


let template = Handlebars.compile(ErrorLayout);

const error500 = {
	errorNumber: "500",
	subtitle: "Мы уже фиксим",
	button: "Назад к чатам",
};

const Error500 = template(error500);

export default Error500;
