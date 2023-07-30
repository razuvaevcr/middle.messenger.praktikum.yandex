const inputTmp: string = `
	{{#if label}}
		<label 
			for={{ input.name }} 
			class='{{#each label.classNames}} {{ this }}{{/each}}'
		>{{ label.text }}</label>
	{{/if}}
	<input 
		name={{ input.name }} 
		{{#if input.value}}
			value={{ input.value }}
		{{/if}}
		{{#if input.placeholder}}
			placeholder={{ input.placeholder }}
		{{/if}}
		{{#if input.classNames}}
			class='{{#each input.classNames}} {{ this }}{{/each}}'
		{{/if}}
		{{#if input.autofocus}}
			autofocus
		{{/if}}
		type={{ input.type }}
	>	
`;

export default inputTmp;
