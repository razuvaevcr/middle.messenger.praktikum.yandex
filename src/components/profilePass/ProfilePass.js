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
			label: 'Старый пароль',
			value: '•••••••',
		},
		login: {
			label: 'Новый пароль',
			value: '•••••••••••',
		},
		name: {
			label: 'Повторите новый пароль',
			value: '•••••••••••',
		},
	}
};

const ProfileInfo = template(infoData);

export default ProfileInfo;