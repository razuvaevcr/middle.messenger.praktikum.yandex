const chatTmp: string = `
	<div class="user-bar">
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
		{{{ friendMessage }}}
		{{{ userMessage }}}
	</div>
	{{{ form }}}
					
`;

export default chatTmp;
