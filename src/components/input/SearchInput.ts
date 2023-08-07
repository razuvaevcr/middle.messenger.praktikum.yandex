import Block from '../../core/block/Block';
import { inputValidation } from '../../utils/validate';
import { TInput } from '../../types/types';
import inputTmp from './tmp';


class SearchInput extends Block<TInput> {
	constructor(props: TInput) {
		super(props.tagName, props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});

		this.props.settings = { withInternalID: true };

		this.props.events = {
			focusout: (event: Event) => inputValidation(event.target),
		};
	}

	render() {
		return this.compile(inputTmp, this.props);
	}
}


export default SearchInput;
