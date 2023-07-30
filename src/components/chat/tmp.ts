const chatTmp: string = `
	<div class="user-bar">
		<div class="user-bar__user">
			<div class="user-bar__photo"></div>
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


// <div class="user-bar__menu">
// 			<span></span>
// 			<span></span>
// 			<span></span>
// 		</div>
