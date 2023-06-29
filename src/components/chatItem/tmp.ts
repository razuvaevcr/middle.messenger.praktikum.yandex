const chatItemTmp: string = `
	<div class="chat__photo">{{ photo }}</div>
	<div class="chat__info">
		<div class="chat__info__message">
			<div class="chat__info__name">{{ message.name }}</div>
			<div class="chat__info__last-msg">{{ message.message }}</div>
		</div>
		<div class="chat__info__stat">
			<div class="chat__info__time">{{ statistics.time  }}</div>
			<div class="chat__info__new-msg {{ statistics.newMassage }}"></div>
		</div>
	</div>
`;

export default chatItemTmp;
