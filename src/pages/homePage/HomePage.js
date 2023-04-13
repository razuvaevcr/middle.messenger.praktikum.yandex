import ChatList from '../../components/chatsList/ChatsList';
import Chat from '../../components/chat/Chat';
import EmptyChat from '../../components/chat/EmptyChat';

import './homePage.scss'


const HomePage = {
	render: (path) => {
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
				${path === "/home/chat" ? Chat : EmptyChat}
			</div>
		</section>`;
	}
}

export default HomePage;