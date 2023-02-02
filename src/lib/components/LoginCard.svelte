<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: any;
</script>

<article class="login">
	<div class="header"><h1>Login</h1></div>
	<form action="?/login" use:enhance method="post">
		<label for="username">Username</label>
		<input class="input" type="text" id="username" placeholder="E.g denisIv" name="username" />

		{#if form?.username}
			<p class="error">Required</p>
		{/if}

		<label for="password">Password</label>
		<input class="input" type="password" placeholder="password" id="password" name="password" />
		{#if form?.password}
			<p class="error">Required</p>
		{/if}

		<div class="submit">
			<button type="submit">Login</button>
		</div>
	</form>
</article>

<style>
	.header {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin: 10px;
		width: 500px;
	}
	.submit {
		margin: 10px 0;
	}
</style>
