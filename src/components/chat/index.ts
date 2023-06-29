import Chat from './Chat';
import { friendMessage, userMessage } from '../message';
import { messageForm } from '../form';


const chat = new Chat({
	name: 'Андрей',
	friendMessage,
	userMessage,
	form: messageForm,
});

const emptyChat: string = '<div class="message-history__empty">Выберите чат чтобы отправить сообщение</div>';


export {
	chat,
	emptyChat,
};
