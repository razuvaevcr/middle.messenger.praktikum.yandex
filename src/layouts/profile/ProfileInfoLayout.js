const ProfileInfoLayout = `<ul class="info">
							{{#each fields}}
							<li class="input-wrapper_long">
								{{#if changeable}}
									<label for="{{@key}}" class="label_long">{{label}}</label>
									<input name="{{@key}}" placeholder="{{value}}" class="input_long">
								{{else}}
									<div class="label_long">{{label}}</div>
									<div class="info__value">{{value}}</div>
								{{/if}}
							</li>
							{{/each}}
						</ul>`;

export default ProfileInfoLayout;
