import Handlebars from 'handlebars';

const source = `<div class="user-bar">
					<div class="user-bar__user">
						<div class="user-bar__photo"></div>
						<div class="user-bar__name">{{name}}</div>
					</div>
					<div class="user-bar__menu">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="message-history">
					<div class="message-history__empty">Выберите чат чтобы отправить сообщение</div>
				</div>
				<div class="message-bar">
					<div class="message-bar__add-btn"></div>
					<input placeholder="Сообщение" class="message-bar__message">
					<div class="message-bar__send-btn"></div>
				</div>`;

			
let template = Handlebars.compile(source);

let context = {
	name: 'Андрей',
	messageFriend: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam explicabo recusandae omnis eum eligendi dignissimos laboriosam, quis a quo molestiae tenetur nostrum necessitatibus provident eius repellat, voluptates, soluta et? Ad!',
	messageUser: {
		first: 'Lorem?',
		second: 'ipsum!',
	}
};

const Chat = template(context);


export default Chat;