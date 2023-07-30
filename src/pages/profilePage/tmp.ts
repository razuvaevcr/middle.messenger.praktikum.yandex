const profilePageTmp: string = `
	{{{ backButton }}}
	
	<div class="user">
		<div name="avatar" class="user__avatar">
			<img class="user__avatar__img" src="{{{userAvatar}}}" alt="Аватар"></img>
			{{{ userAvatarBtn }}}
		</div>
		<div class="user__name">{{{ userName }}}</div>
		{{{ changeAvatarModal }}}
	</div>


	{{#if form}}
		<div class="info">
			{{{ form }}}
		</div>
	{{else}}
		<ul class="info">
			<li class="input-wrapper_long">
				<div class="label_long">Почта</div>
				<div class="info__value">Email</div>
			</li>
			<li class="input-wrapper_long">
				<div class="label_long">Логин</div>
				<div class="info__value">{{login}}</div>
			</li>
			<li class="input-wrapper_long">
				<div class="label_long">Имя</div>
				<div class="info__value">{{first_name}}</div>
			</li>
			<li class="input-wrapper_long">
				<div class="label_long">Фамилия</div>
				<div class="info__value">{{second_name}}</div>
			</li>
			<li class="input-wrapper_long">
				<div class="label_long">Имя в чате</div>
				<div class="info__value">{{display_name}}</div>
			</li>
			<li class="input-wrapper_long">
				<div class="label_long">Телефон</div>
				<div class="info__value">Phone number</div>
			</li>
		</ul>
		<div class="actions">
			{{{ changeDataButton }}}
			{{{ changePasswordButton }}}
			{{{ outButton }}}	
		</div>
	{{/if}}
`;

export default profilePageTmp;
