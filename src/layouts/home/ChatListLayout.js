const chatsInner = `<div class="chat__photo"></div>
					<div class="chat__info">
						<div class="chat__info__message">
							<div class="chat__info__name">{{name}}</div>
							<div class="chat__info__last-msg">{{last_msg}}</div>
						</div>
						<div class="chat__info__stat">
							<div class="chat__info__time">{{time}}</div>
							<div class="chat__info__new-msg {{new_msg}}"></div>
						</div>
					</div>`;


const ChatListLayout = `<div class="chats">
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

export default ChatListLayout;
