<script lang="ts">
	import LoginCard from '$lib/components/LoginCard.svelte';

	import type { PageData, ActionData } from './$types';
	export let form: ActionData;
</script>

<LoginCard {form} />

<style>
</style>
