<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { page } from '$app/stores';
	import '@picocss/pico';
</script>

<header>
	<Navbar user={$page.data.user} />
</header>

<main>
	<slot />
</main>

<style>
	:global(main) {
		margin: 0 10%;
	}
</style>
