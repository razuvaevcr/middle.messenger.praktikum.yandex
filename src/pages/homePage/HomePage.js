import ChatList from '../../components/chatsList/ChatsList';
import Chat from '../../components/chat/Chat';
import EmptyChat from '../../layouts/home/EmptyChatLayout';

import './homePage.scss'


const HomePage = {
	render: (path) => {
		return `
		<section class="home">
			<div class="left">
				<a href="/#/profile" class="profile-btn btn_flat">Профиль</a>
				<div class="search">
					<input name="search" placeholder="Поиск" type="text">
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
