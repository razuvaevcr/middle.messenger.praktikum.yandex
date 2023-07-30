const homePageTmp: string = `
	<div class='left'>
		{{{ profileBtn }}}
		{{{ search }}}
		{{{ addChatBtn }}}
		{{{ chats }}}
	</div>

	{{{ chat }}}
	<div class="{{{ emptyChat.className }}}">{{{ emptyChat.text }}}</div>
	
	

	{{{ addChatModal }}}
	{{{ addUserModal }}}
	{{{ deleteUserModal }}}
	{{{ addPhotoModal }}}
	{{{ addFileModal }}}
	{{{ addLocationModal }}}
`;

export default homePageTmp;
