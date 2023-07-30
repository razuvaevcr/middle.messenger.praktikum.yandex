import validate from './validate';


// Input
const inputValidation = (target: EventTarget | null, data?: Record<string, string> | null) => {
	let newClassName = ' input_validate';

	const input = target as HTMLInputElement;

	if (input.name === 'message') {
		newClassName = ' message-bar__message_validate';
	}

	if (validate(input) === true) {
		if ((input.className).includes(newClassName)) {
			input.className = input.className.replace(newClassName, '');

			const element = document.querySelector('p') as Node;
			input.parentElement?.removeChild(element);
		}

		if (data) {
			data[input.name] = input.value;
		}
	} else {
		if (!(input.className).includes(newClassName)) {
			input.className += newClassName;

			input.parentElement?.append(validate(input) as Node);
		}
	}
};


// Form
const formValidation = (target: EventTarget | null) => {
	const data: any = {};
	let inputsCount = 0;

	const form = target as HTMLFormElement;

	for (let i = 0; i < form.length; i++) {
		if (form[i].nodeName === 'INPUT') {
			inputsCount++;
			inputValidation(form[i], data);
		}
	}

	if (Object.keys(data).length == inputsCount) {
		return data;
	} else {
		return undefined;
	}
};


export {
	inputValidation,
	formValidation,
};
