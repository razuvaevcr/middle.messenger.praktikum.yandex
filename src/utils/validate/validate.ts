const loginRegEx = /^[a-zA-Z0-9](?=.*[a-zA-z])[a-zA-Z0-9-_\.]{2,20}$/;
const passwordRegEx = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+=/?><.\.]{3,41}$/;
const phoneRegEx = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){7,17}\d$/;
const namesRegEx = /^[A-ZА-Я][A-ZА-Яa-zа-я0-9-\.]{1,40}$/;
const emailRegEx = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}/;

function validator(value: string, regEx: RegExp): boolean {
	return value.match(regEx) !== null;
}

const validate = (target: HTMLInputElement): boolean => {
	const { name, value } = target;

	switch (name) {
	case 'email':
		return validator(value, emailRegEx);
	case 'login':
		return validator(value, loginRegEx);
	case 'first_name':
		return validator(value, namesRegEx);
	case 'second_name':
		return validator(value, namesRegEx);
	case 'phone':
		return validator(value, phoneRegEx);
	case 'password':
	case 'old_password':
	case 'new_password':
	case 'new_password_again':
		return validator(value, passwordRegEx);
	case 'message':
	case 'display_name':
		return value.length > 1;
	default:
		return false;
	}
};


export default validate;
