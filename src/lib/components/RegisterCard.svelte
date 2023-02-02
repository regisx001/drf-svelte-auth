<script lang="ts">
</script>

<article class="login">
	<div class="header"><h1>Register</h1></div>
	<form action="." method="post">
		<label for="email">Email</label>
		<input
			class="input"
			type="text"
			id="email"
			name="email"
			required
			placeholder="E.g example@gmail.com"
		/>

		<label for="password">Password</label>
		<input
			class="input"
			type="password"
			id="password"
			name="password"
			placeholder="password"
			required
		/>

		<label for="confirmPassword">Confirm Password</label>
		<input
			class="input"
			type="password"
			id="confirmPassword"
			placeholder="confirm password"
			name="confirmPassword"
			required
		/>

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
</style>
