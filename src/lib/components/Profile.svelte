<script lang="ts">
	import { PUBLIC_DOMAIN } from '$env/static/public';

	export let user: any;

	let avatar: string;
	if (user.avatar) {
		avatar = PUBLIC_DOMAIN + user.avatar;
	} else {
		avatar = 'avatar.svg';
	}
	function loadAvatar(e: Event) {
		// @ts-ignore
		const newAvatar = e.target.files[0];
		avatar = URL.createObjectURL(newAvatar);
	}
</script>

<article class="profile">
	<header>
		<center> Update Personal Info </center>
	</header>
	<div class="picture">
		<img src={avatar} class="avatar" alt="" />

		<form action="?/updateProfile" method="post">
			<input on:change={loadAvatar} type="file" name="avatar" />

			<label for="username">First Name</label>
			<input type="text" name="first_name" id="username" />

			<label for="username">Last Name</label>
			<input type="text" name="last_name" id="username" />

			<label for="email">Email</label>
			<input type="text" name="email" id="email" />

			<label for="bio">Bio</label>
			<textarea cols="40" rows="3" name="bio" id="bio" />

			<button type="submit">Save Data</button>
		</form>
	</div>
</article>

<style>
	.profile {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 700px;
		max-width: 800px;
	}
	/* Handle Profile Picture */
	.picture {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.avatar {
		margin: 0 10px;
		vertical-align: middle;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 2px solid rgb(33, 77, 136);
	}
</style>
