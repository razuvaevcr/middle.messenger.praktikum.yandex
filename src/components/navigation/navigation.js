import Handlebars from 'handlebars';

const source = `<nav class="nav">
					<ul class="nav__list">
						{{#each links}}
						<li class="nav__list__item"><a href="{{value}}">{{label}}</a></li>
						{{/each}}
					</ul>
				</nav>`;

			
let template = Handlebars.compile(source);

const listItems = {
	links: {
		enter: {
			label: 'Вход',
			value: '/#/login',
		},
		registration: {
			label: 'Регистрация',
			value: '/#/signin',
		},
		home: {
			label: 'Домашняя',
			value: '/#/home',
		},
		chat: {
			label: 'Чат',
			value: '/#/home/chat',
		},
		profile: {
			label: 'Профиль',
			value: '/#/profile',
		},
		page404: {
			label: 'Страница 404',
			value: '/#/error404',
		},
		page500: {
			label: 'Страница 500',
			value: '/#/error500',
		},
		changeProfile: {
			label: 'Изменить профиль',
			value: '/#/profile/changedata',
		},
		changePassword: {
			label: 'Изменить пароль',
			value: '/#/profile/changepass',
		},
	},
};

const navigation = template(listItems);

export default navigation;