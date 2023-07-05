import ChatItem from './ChatItem';
import chatItemTmp from './tmp';


const chatItem = new ChatItem({
	layout: chatItemTmp,
	isActive: true,
	classNames: [
		'chat',
	],
	photo: '',
	message: {
		name: 'Андрей',
		message: 'Друзья, у меня для вас выпуск новостей!...',
	},
	statistics: {
		time: '12:40',
		newMassage: 'chat__info__new-msg_active',
	},
});


export default chatItem;
