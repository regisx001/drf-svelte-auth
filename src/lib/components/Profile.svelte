<script lang="ts">
	let avatar: string = 'avatar.svg';
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
		<form action="." method="post">
			<input
				on:change={loadAvatar}
				type="file"
				name="avatar"
				accept="image/png, image/gif, image/jpeg"
			/>

			<label for="username">Username</label>
			<input type="text" readonly name="username" id="username" />

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
