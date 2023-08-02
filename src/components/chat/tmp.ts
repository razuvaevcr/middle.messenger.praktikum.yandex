const chatTmp: string = `
	<div class="user-bar">
		<div class="user-bar__user">
			<div class="user-bar__photo">
				<img class="user__avatar__img" src="{{{ chatAvatar }}}" alt="Аватар"></img>
				{{{ changeChatAvatarBtn }}}
			</div>
			<div class="user-bar__name">{{chatName}}</div>
		</div>
		{{{ optionsBtn }}}
	</div>

	{{{ optionsMenu }}}
	
	<div class="message-history">
		{{{ messages }}}
	</div>
	
	{{{ messageOptionsMenu }}}
	
	{{{ form }}}				
`;

export default chatTmp;

