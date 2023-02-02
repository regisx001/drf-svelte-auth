<script lang="ts">
	import avatar from '$lib/images/pro.png';
	export let user: any;
	type Link = {
		link: string;
		name: string;
	};
	const links: Link[] = [
		{ name: 'Register', link: '/register' },
		{ name: 'Login', link: '/login' }
	];
</script>

<nav class="navigation">
	<div class="logo">
		<strong><a href="/">Brand</a></strong>
	</div>
	<div class="links">
		<!-- Logged in -->
		{#if user}
			<a href="/profile">
				<ul>
					<li><img src={avatar} class="avatar" alt="" /></li>
					<li><div>@username</div></li>
				</ul>
			</a>
		{:else}
			<!-- Not Logged in -->
			<ul>
				{#each links as link}
					<div class="cont">
						<li><a href={link.link}>{link.name}</a></li>
					</div>
				{/each}
			</ul>
		{/if}
	</div>
</nav>

<style>
	.logo {
		font-size: 2rem;
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.cont {
		display: flex;
		width: 100px;
		text-align: center;
		margin: 5px;
	}
	.cont:hover {
		border-radius: 1rem;
	}
	.avatar {
		margin: 0 10px;
		vertical-align: middle;
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
</style>
