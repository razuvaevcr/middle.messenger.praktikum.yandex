import Handlebars from 'handlebars';

const source = `<ul class="info">
					{{#each fields}}
					<li class="info__fields">
						<div class="info__fields__label">{{label}}</div>
						<div class="info__fields__value">{{value}}</div>
					</li>
					{{/each}}
				</ul>`;

			
let template = Handlebars.compile(source);

const infoData = {
	fields: {
		mail: {
			label: 'Почта',
			value: 'lorem@ipsum.com',
		},
		login: {
			label: 'Логин',
			value: 'ivanivanov',
		},
		name: {
			label: 'Имя',
			value: 'Иван',
		},
		surname: {
			label: 'Фамилия',
			value: 'Иванов',
		},
		nickname: {
			label: 'Имя в чате',
			value: 'Иван',
		},
		phone: {
			label: 'Телефон',
			value: '+7 (909) 967 30 30',
		},
	}
};

const ProfileInfo = template(infoData);

export default ProfileInfo;