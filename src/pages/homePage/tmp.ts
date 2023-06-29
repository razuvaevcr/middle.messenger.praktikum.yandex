const homePageTmp: string = `
	<div class="left">
		{{{ profileBtn }}}
		{{{ search }}}
		{{{ chatsList }}}
	</div>

	{{#if chat}}
		{{{ chat }}}
	{{else}}
		<div class='right'>
			{{{ emptyChat }}}
		</div>
	{{/if}}
`;

export default homePageTmp;
