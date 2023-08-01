const formTmp: string = `
	{{#if title}}
		{{#if login}}
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
			<div class="modal__title">{{title}}</div>
			{{{input}}}
			{{#if fileInput}}
				{{{fileInput}}}
			{{/if}}
			{{{submitBtn}}}
		{{/if}}
	{{else}}
		{{#if saveButton}}
			<ul class="info">
				{{{ email }}}
				{{{ login }}}
				{{{ first_name }}}
				{{{ second_name }}}
				{{{ display_name }}}
				{{{ phone }}}
				{{{ oldPassword }}}
				{{{ newPassword }}}
				{{{ newPasswordAgain }}}
			</ul>
			{{{ saveButton }}}
		{{else}}
			{{{ optionsBtn }}}
			{{{ input }}}
			{{{ sendBtn }}}
		{{/if}}
		
	{{/if}}
`;

export default formTmp;
