import Handlebars from 'handlebars';

const chatsInner = `<div class="chat__photo"></div>
					<div class="chat__info">
						<div class="chat__info__message">
							<div class="chat__info__name">{{name}}</div>
							<div class="chat__info__last-msg">{{last_msg}}</div>
						</div>
						<div class="chat__info__stat">
							<div class="chat__info__time">{{time}}</div>
							<div class="chat__info__new-msg"></div>
						</div>
					</div>`;


const source = `<div class="chats">
					{{#each id}}
						{{#if active}}
						<div class="chat chat_active">
							${chatsInner}
						</div>
						{{else}}
						<div class="chat">
							${chatsInner}
						</div>
						{{/if}}
					{{/each}}
				</div>`;

			
let template = Handlebars.compile(source);

let context = {
	id: {
		1: {
			name: 'Андрей',
			last_msg: 'Друзья, у меня для вас выпуск новостей!...',
			time: '12:40',
			new_msg: true,
			active: true,
		},
		2: {
			name: 'Сергей',
			last_msg: 'Друзья,не для вас у меня выпуск новостей!...',
			time: '06:30',
			new_msg: false,
			active: false,
		},
		3: {
			name: 'Петр',
			last_msg: 'Выпуск новостей, у меня для вас друзья!...',
			time: '13:40',
			new_msg: true,
			active: false,
		},
	}
};

const ChatsList = template(context);


export default ChatsList;