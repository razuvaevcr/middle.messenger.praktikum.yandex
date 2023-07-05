const navigationTmp: string = `
	<nav class="nav">
		<ul class="nav__list">
			{{#each links}}
			<li class="nav__list__item"><a class="btn" href="{{value}}">{{label}}</a></li>
			{{/each}}
		</ul>
	</nav>
`;

export default navigationTmp;
