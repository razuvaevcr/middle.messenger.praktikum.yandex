import Handlebars from 'handlebars';

import ChatListLayout from '../../layouts/home/ChatListLayout';


let template = Handlebars.compile(ChatListLayout);

let chats = {
	id: {
		1: {
			name: 'Андрей',
			last_msg: 'Друзья, у меня для вас выпуск новостей!...',
			time: '12:40',
			new_msg: 'chat__info__new-msg_active',
			active: false,
		},
		2: {
			name: 'Сергей',
			last_msg: 'Друзья,не для вас у меня выпуск новостей!...',
			time: '06:30',
			new_msg: '',
			active: true,
		},
		3: {
			name: 'Петр',
			last_msg: 'Выпуск новостей, у меня для вас, друзья!...',
			time: '13:40',
			new_msg: '',
			active: false,
		},
	}
};

const ChatsList = template(chats);

export default ChatsList;
