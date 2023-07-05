import {
	nameErrorMessage,
	loginErrorMessage,
	emailErrorMessage,
	passwordErrorMessage,
	phoneErrorMessage,
	messageErrorMessage,
} from './ErrorMessage';


const loginRegEx = /^[a-zA-Z0-9](?=.*[a-zA-z])[a-zA-Z0-9-_\.]{2,20}$/;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+=/?><.\.]{3,41}$/;
const phoneRegEx = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){7,17}\d$/;
const namesRegEx = /^[A-ZА-Я][A-ZА-Яa-zа-я0-9-\.]{1,40}$/;
const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;

function matcher(value: string, regEx: RegExp): boolean {
	return value.match(regEx) !== null;
}

const createError = (errorMessage: string): HTMLParagraphElement => {
	let error = document.createElement('p');
	error.classList.add('input__validation-error');
	error.innerHTML = errorMessage;
	return error;
};

const validate = (target: HTMLInputElement): boolean | HTMLParagraphElement => {
	const { name, value } = target;

	switch (name) {
	case 'email':
		return matcher(value, emailRegEx) || createError(emailErrorMessage);
	case 'login':
		return matcher(value, loginRegEx) || createError(loginErrorMessage);
	case 'first_name':
	case 'second_name':
		return matcher(value, namesRegEx) || createError(nameErrorMessage);
	case 'phone':
		return matcher(value, phoneRegEx) || createError(phoneErrorMessage);
	case 'password':
	case 'second_password':
	case 'old_password':
	case 'new_password':
	case 'new_password_again':
		return matcher(value, passwordRegEx) || createError(passwordErrorMessage);
	case 'message':
	case 'display_name':
		return value.length > 1 || createError(messageErrorMessage);
	default:
		return false;
	}
};


export default validate;
