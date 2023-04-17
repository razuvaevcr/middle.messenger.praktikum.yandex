const ChatLayout = `<div class="user-bar">
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
						{{#each message}}
						<div class="message-history__message {{@key}}">{{this}}</div>
						{{/each}}
					</div>
					<div class="message-bar">
						<button class="btn btn_mini"></button>
						<input name="message" placeholder="Сообщение" class="message-bar__message">
						<button class="btn btn_mini"></button>
					</div>`;

export default ChatLayout;
