<script lang="ts">
	import RegisterCard from '$lib/components/RegisterCard.svelte';

	import type { PageData, ActionData } from './$types';
	export let form: ActionData;
</script>

<RegisterCard {form} />

<style>
</style>
