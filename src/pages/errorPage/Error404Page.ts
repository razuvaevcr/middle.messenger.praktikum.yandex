import Block from '../../core/eventBus/Block';
import { TErrorPage } from '../../types/types';
import Button from '../../components/button/Button';
import router from '../../core/router/router';
import errorTmp from './tmp';

import './errorPage.scss';


class Error404Page extends Block<TErrorPage> {
	constructor() {
		super('section', {
			classNames: [
				'error',
			],
			errorNumber: '404',
			subtitle: 'Не туда попали',
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


export default Error404Page;
