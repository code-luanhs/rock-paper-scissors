<script lang="ts">
	import type { Choice } from '$lib/game/types';

	import triangle from '$lib/assets/images/bg-triangle.svg';
	import ChoiceButton from './ChoiceButton.svelte';

	let {
		onSelect
	}: {
		onSelect: (choice: Choice) => void;
	} = $props();
</script>

<div class="relative mx-auto h-75 w-82.5 sm:h-107.5 sm:w-120">
	<img
		src={triangle}
		alt=""
		class="absolute top-15 left-1/2 w-52.5 -translate-x-1/2 sm:top-22.5 sm:w-77.5"
	/>

	<div class="absolute top-0 left-0">
		<ChoiceButton choice="paper" {onSelect} />
	</div>

	<div class="absolute top-0 right-0">
		<ChoiceButton choice="scissors" {onSelect} />
	</div>

	<div class="absolute bottom-0 left-1/2 -translate-x-1/2">
		<ChoiceButton choice="rock" {onSelect} />
	</div>
</div>
