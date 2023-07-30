import burgerTmp from './tmp';
import Block from '../../core/eventBus/Block';
import Button from '../button/Button';
import { TBurgerMenu } from '../../types/types';

import './burger.scss';


class MessageBurgerMenu extends Block<TBurgerMenu> {
	constructor() {
		super('div', {
			classNames: [
				'burger',
				'burger__message',
				'burger_hide',
			],
			addUser: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'burger__item',
				],
				text: 'Добавить фото',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__add-photo');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			removeUser: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'burger__item',
				],
				text: 'Добавить файл',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__add-file');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
			removeChat: new Button({
				tagName: 'button',
				classNames: [
					'btn',
					'btn_mini',
					'burger__item',
				],
				text: 'Добавить локацию',
				settings: { withInternalID: true },
				events: {
					click: () => {
						const addModal = document.querySelector('.modal__add-location');

						(addModal! as HTMLElement).style.display = 'block';
					},
				},
			}),
		});

		this.props.classNames.forEach((className: string) => {
			this.element.classList.add(className);
		});
	}

	render() {
		return this.compile(burgerTmp, this.props);
	}
}

export default MessageBurgerMenu;
