import validate from './validate';


// Input
const inputValidation = (event: Event) => {
	let newClassName = ' input_validate';

	const target = event.target as HTMLInputElement;

	if (target.name === 'message') {
		newClassName = ' message-bar__message_validate';
	}

	if (validate(target)) {
		if ((target.className).includes(newClassName)) {
			target.className = target.className.replace(newClassName, '');
		}
	} else {
		if (!(target.className).includes(newClassName)) {
			target.className += newClassName;
		}
	}
};


// Form
const formValidation = (event: Event) => {
	const data: Record<string, string> = {};
	let newClassName = ' input_validate';

	const target = event.target as HTMLFormElement;

	for (let i = 0; i < target.length; i++) {
		if (target[i].nodeName === 'INPUT') {
			const inputElement = target[i] as HTMLInputElement;

			if (inputElement.name === 'message') {
				newClassName = ' message-bar__message_validate';
			}

			if (validate(inputElement)) {
				if ((target[i].className).includes(newClassName)) {
					target[i].className = target[i].className.replace(newClassName, '');
				}

				data[inputElement.name] = inputElement.value;
			} else {
				if (!(target[i].className).includes(newClassName)) {
					target[i].className += newClassName;
				}
			}
		}
	}

	if (Object.keys(data).length) console.log(data);
};


export {
	inputValidation,
	formValidation,
};
