import ChatList from '../../components/chatsList/ChatsList';
import Chat from '../../components/chat/Chat';

import './homePage.scss'


const HomePage = {
	render: () => {
		return `
		<section class="home">
			<div class="left">
				<button onclick="document.location='/#/profile'" class="profile-btn">Профиль ></button>
				<div class="search">
					<input placeholder="Поиск" type="text">
				</div>
				${ChatList}
			</div>

			<div class="right">
				${Chat}
			</div>
		</section>`;
	}
}

export default HomePage;