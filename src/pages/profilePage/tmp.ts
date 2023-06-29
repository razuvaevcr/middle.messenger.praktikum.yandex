const profilePageTmp: string = `
	{{{ backButton }}}
	
	<div class="user">
		<div name="avatar" class="user__avatar"></div>
		<div class="user__name">Иван</div>
	</div>


	{{#if form}}
		<div class="info">
			{{{ form }}}
		</div>
	{{else}}
		<ul class="info">
			{{#each inputs}}
				<li class="input-wrapper_long">
					<div class="label_long">{{this.label}}</div>
					<div class="info__value">{{this.input}}</div>
				</li>
			{{/each}}
		</ul>
		<div class="actions">
			{{{ changeDataButton }}}
			{{{ changePasswordButton }}}
			{{{ outButton }}}	
		</div>
	{{/if}}
`;

export default profilePageTmp;
