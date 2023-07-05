import Block from '../utils/eventBus/Block';
import { TPage } from '../types/types';


class Page extends Block<TPage> {
	constructor(props: TPage) {
		super('section', props);

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(this.props.layout, this.props);
	}
}


export default Page;
