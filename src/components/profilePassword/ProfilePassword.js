import Handlebars from 'handlebars';

import ProfileInfoLayout from '../../layouts/profile/ProfileInfoLayout';

			
let template = Handlebars.compile(ProfileInfoLayout);

const profilePasswordChangeable = {
	fields: {
		oldPassword: {
			label: 'Старый пароль',
			value: '•••••••',
			changeable: true,
		},
		newPassword: {
			label: 'Новый пароль',
			value: '•••••••••••',
			changeable: true,
		},
		repeatNewPassword: {
			label: 'Повторите новый пароль',
			value: '•••••••••••',
			changeable: true,
		},
	}
};

const ProfilePasswod = template(profilePasswordChangeable);

export default ProfilePasswod;
