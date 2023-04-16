const enterLayout = `<form onSubmit="document.location='/#/home'" class="enter__form">
						<div class="enter__title">{{title}}</div>
						<ul class="inputs">
							{{#each inputs}}
							<li class="inputs__item input-wrapper">
								<label for="{{@key}}" class="inputs__item__label label">{{this}}</label>
								<input name="{{@key}}" type="text" class="inputs__item__value input">
							</li>
							{{/each}}
						</ul>
						<div class="enter__btns">
							<button type="submit" class="enter__btns__autorisation btn">{{buttons.main}}</button>
							<a href="{{buttons.link}}" class="enter__btns__link btn_flat">{{buttons.secondary}}</a>
						</div>
					</form>`;

export default enterLayout;
