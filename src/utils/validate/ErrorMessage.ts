const nameErrorMessage = 'Поле должно быть на латинице или кириллице, без пробелов, цифр и спецсимволов. Первая буква должна быть заглавной.';

const loginErrorMessage = 'Поле должно содержать от 3 до 20 символов латиницы. Может содержать цифры, но не состоять из них. Без пробелов, без спецсимволов.';

const emailErrorMessage = 'Поле должно быть на латинице, может включать цифры и спецсимволы, обязательно должна быть «собака» (@).';

const passwordErrorMessage = 'Поле должно содержать от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.';

const phoneErrorMessage = 'Поле должно содержать от 10 до 15 символов, состоит из цифр, может начинается с плюса.';

const messageErrorMessage = 'Поле не должно быть пустым.';

export {
	nameErrorMessage,
	loginErrorMessage,
	emailErrorMessage,
	passwordErrorMessage,
	phoneErrorMessage,
	messageErrorMessage,
};
