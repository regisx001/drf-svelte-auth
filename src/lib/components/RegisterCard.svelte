<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: any;
</script>

<article class="login">
	<div class="header"><h1>Register</h1></div>
	<form action="?/register" method="post" use:enhance>
		<label for="username">Username</label>
		<input class="input" type="text" id="username" name="username" placeholder="E.g denisIv" />
		{#if form?.username}
			<p class="error">required</p>
		{/if}

		<label for="password">Password</label>
		<input class="input" type="password" id="password" name="password" placeholder="password" />
		{#if form?.password}
			<p class="error">required</p>
		{/if}

		<label for="confirmPassword">Confirm Password</label>
		<input
			class="input"
			type="password"
			id="confirmPassword"
			placeholder="confirm password"
			name="confirmPassword"
		/>
		{#if form?.confirmPassword}
			<p class="error">Password Do not match</p>
		{/if}

		<div class="submit">
			<button type="submit">Register</button>
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
	.error {
		font-size: 15px;
		color: red;
	}
</style>
