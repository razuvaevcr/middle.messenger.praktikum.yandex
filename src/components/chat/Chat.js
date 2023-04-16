import Handlebars from 'handlebars';

import ChatLayout from '../../layouts/home/ChatLayout';


const template = Handlebars.compile(ChatLayout);

const chat = {
	name: 'Андрей',
	message: {
		message_friend: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam explicabo recusandae omnis eum eligendi dignissimos laboriosam, quis a quo molestiae tenetur nostrum necessitatibus provident eius repellat, voluptates, soluta et? Ad!',
		message_user: 'Lorem?',
	},
};

const Chat = template(chat);

export default Chat;
