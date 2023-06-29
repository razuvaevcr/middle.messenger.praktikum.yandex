import Message from './Message';


const friendMessage = new Message({
	classNames: [
		'message-history__message',
		'message_friend',
	],
	text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam explicabo recusandae omnis eum eligendi dignissimos laboriosam, quis a quo molestiae tenetur nostrum necessitatibus provident eius repellat, voluptates, soluta et? Ad!',
});

const userMessage = new Message({
	classNames: [
		'message-history__message',
		'message_user',
	],
	text: 'Lorem ipsum? Ad!',
});


export {
	friendMessage,
	userMessage,
};
