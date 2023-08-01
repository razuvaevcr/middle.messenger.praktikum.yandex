const chatItemTmp: string = `
	<img class="chat__avatar" src="{{ avatar }}"></img>
	<div class="chat__info">
		<div class="chat__info__message">
			<div class="chat__info__title">{{ title }}</div>
			<div class="chat__info__last-msg">{{ lastMessage }}</div>
		</div>
		<div class="chat__info__stat">
			<div class="chat__info__time">{{ lastMessageTime  }}</div>
			<div class="chat__info__new-msg {{ newMessage }}"></div>
		</div>
	</div>
`;

export default chatItemTmp;
