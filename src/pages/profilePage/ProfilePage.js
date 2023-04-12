import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import ProfileChange from '../../components/profileChange/ProfileChange';
import ProfilePass from '../../components/profilePass/ProfilePass';

import './profilePage.scss';

const profileButtons = `<div class="actions">
							<button onclick="document.location='/#/profile/changeData'" class="actions__btn">Изменить данные</button>
							<button onclick="document.location='/#/profile/changePass'" class="actions__btn">Изменить пароль</button>
							<button onclick="document.location='/#/home'" class="actions__btn actions__btn_red">Выйти</button>
						</div>`;

const saveButton = `<button onclick="document.location='/#/profile'" class="actions__btn-save">Сохранить</button>`

const ProfilePage = {
	render: (path) => {
		console.log(path)
		return `
			<section class="profile">
				<button onclick="document.location='/#/home'" class="back-btn"><-</button>
				<div class="user">
					<div class="user__avatar"></div>
					<div class="user__name">Иван</div>
				</div>
				${path == '/profile' ? ProfileInfo : path == '/profile/changedata' ? ProfileChange : ProfilePass}
				${path == '/profile' ? profileButtons : saveButton}	
			</section>
		`;
	}
}

export default ProfilePage;


// info
// btns
// 