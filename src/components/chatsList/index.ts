import ChatsList from './ChatsList';
import chatItem from '../chatItem';
import chatsListTmp from './tmp';


const chatsList = new ChatsList({
	layout: chatsListTmp,
	classNames: [
		'chats',
	],
	chats: chatItem,
});


export default chatsList;
