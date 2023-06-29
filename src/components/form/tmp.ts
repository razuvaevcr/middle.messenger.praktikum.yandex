const formTmp: string = `
	{{#if title}}
		<div class="enter__title">{{title}}</div>
		<ul class="inputs">
			{{{email}}}
			{{{login}}}
			{{{first_name}}}
			{{{second_name}}}
			{{{phone}}}
			{{{password}}}
			{{{second_password}}}
		</ul>

		<div class="enter__btns">
			{{{ mainBtn }}}
			{{{ secondBtn }}}
		</div>
	{{else}}
		{{#if saveButton}}
			<ul class="info">
				{{{ email }}}
				{{{ login }}}
				{{{ first_name }}}
				{{{ second_name }}}
				{{{ display_name }}}
				{{{ phone }}}
				{{{ old_password }}}
				{{{ new_password }}}
				{{{ new_password_again }}}
			</ul>
			{{{ saveButton }}}
		{{else}}
			{{{ sendBtn }}}
			{{{ input }}}
			{{{ addBtn }}}
		{{/if}}
		
	{{/if}}
`;

export default formTmp;
