import Handlebars from 'handlebars';

import ErrorLayout from '../../layouts/ErrorLayout';


let template = Handlebars.compile(ErrorLayout);

const error404 = {
	errorNumber: "404",
	subtitle: "Не туда попали",
	button: "Назад к чатам",
};

const Error404 = template(error404);

export default Error404;
