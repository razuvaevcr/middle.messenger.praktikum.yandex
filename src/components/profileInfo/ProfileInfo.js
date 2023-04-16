import Handlebars from 'handlebars';

import ProfileInfoLayout from '../../layouts/profile/ProfileInfoLayout';


let template = Handlebars.compile(ProfileInfoLayout);

const profileData = {
	fields: {
		email: {
			label: 'Почта',
			value: 'lorem@ipsum.com',
			changeable: false,
		},
		login: {
			label: 'Логин',
			value: 'ivanivanov',
			changeable: false,
		},
		first_name: {
			label: 'Имя',
			value: 'Иван',
			changeable: false,
		},
		second_name: {
			label: 'Фамилия',
			value: 'Иванов',
			changeable: false,
		},
		display_name: {
			label: 'Имя в чате',
			value: 'Иван',
			changeable: false,
		},
		phone: {
			label: 'Телефон',
			value: '+7 (909) 967 30 30',
			changeable: false,
		},
	}
};

const ProfileInfo = template(profileData);

export default ProfileInfo;
