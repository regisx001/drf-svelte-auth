<script lang="ts">
</script>

<article class="login">
	<div class="header"><h1>Login</h1></div>
	<form action="." method="post">
		<label for="email">Email</label>
		<input
			class="input"
			type="text"
			id="email"
			placeholder="E.g example@gmail.com"
			name="email"
			required
		/>

		<label for="password">Password</label>
		<input
			class="input"
			type="password"
			placeholder="password"
			id="password"
			name="password"
			required
		/>

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
