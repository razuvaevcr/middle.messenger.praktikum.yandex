import Block from '../../core/block/Block';
import { TErrorPage } from '../../types/types';
import Button from '../../components/button/Button';
import router from '../../core/router/router';
import errorTmp from './tmp';

import './errorPage.scss';


class Error500Page extends Block<TErrorPage> {
	constructor() {
		super('section', {
			classNames: [
				'error',
			],
			errorNumber: '500',
			subtitle: 'Мы уже фиксим',
			button: new Button({
				tagName: 'button',
				type: 'button',
				classNames: [
					'error__link',
					'btn_flat',
				],
				text: 'Назад к чатам',
				settings: { withInternalID: true },
				events: {
					click: () => router.go('/messenger'),
				},
			}),
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(errorTmp, this.props);
	}
}


export default Error500Page;
