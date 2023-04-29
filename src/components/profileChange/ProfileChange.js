import Handlebars from 'handlebars';

import ProfileInfoLayout from '../../layouts/profile/ProfileInfoLayout';

		
let template = Handlebars.compile(ProfileInfoLayout);

const profileDataChangeable = {
	fields: {
		email: {
			label: 'Почта',
			value: 'lorem@ipsum.com',
			changeable: true,
		},
		login: {
			label: 'Логин',
			value: 'ivanivanov',
			changeable: true,
		},
		first_name: {
			label: 'Имя',
			value: 'Иван',
			changeable: true,
		},
		second_name: {
			label: 'Фамилия',
			value: 'Иванов',
			changeable: true,
		},
		display_name: {
			label: 'Имя в чате',
			value: 'Иван',
			changeable: true,
		},
		phone: {
			label: 'Телефон',
			value: '+7 (909) 967 30 30',
			changeable: true,
		},
	}
};

const ProfileChange = template(profileDataChangeable);

export default ProfileChange;
