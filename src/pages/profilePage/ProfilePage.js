import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import ProfileChange from '../../components/profileChange/ProfileChange';
import ProfilePassword from '../../components/profilePassword/ProfilePassword';
import ProfileButtons from '../../layouts/profile/ProfileButtons';
import ProfileSaveButton from '../../layouts/profile/ProfileSaveButton';

import './profilePage.scss';


const ProfilePage = {
	render: (path) => {
		return `
			<section class="profile">
				<button onclick="document.location='/#/home'" class="back-btn btn"><-</button>
				<div class="user">
					<div name="avatar" class="user__avatar"></div>
					<div class="user__name">Иван</div>
				</div>
				${path == '/profile' ? ProfileInfo : path == '/profile/changedata' ? ProfileChange : ProfilePassword}
				${path == '/profile' ? ProfileButtons : ProfileSaveButton}	
			</section>
		`;
	}
}

export default ProfilePage;
