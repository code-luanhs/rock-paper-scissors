<script lang="ts">
	import type { Choice } from '$lib/game/types';

	import rockIcon from '$lib/assets/images/icon-rock.svg';
	import paperIcon from '$lib/assets/images/icon-paper.svg';
	import scissorsIcon from '$lib/assets/images/icon-scissors.svg';

	let {
		choice,
		onSelect,
		interactive = true
	}: {
		choice: Choice;
		onSelect?: (choice: Choice) => void;
		interactive?: boolean;
	} = $props();

	const choices = {
		rock: {
			icon: rockIcon,
			style: 'bg-red-600 shadow-[0_7px_0_var(--color-red-800)]'
		},
		paper: {
			icon: paperIcon,
			style: 'bg-blue-500 shadow-[0_7px_0_var(--color-blue-700)]'
		},
		scissors: {
			icon: scissorsIcon,
			style: 'bg-gold-500 shadow-[0_7px_0_var(--color-gold-600)]'
		}
	} satisfies Record<
		Choice,
		{
			icon: string;
			style: string;
		}
	>;

	const currentChoice = $derived(choices[choice]);
	const shell = $derived([
		'flex size-32.5 items-center justify-center rounded-full p-4 sm:size-50 sm:p-6',
		interactive && 'cursor-pointer',
		currentChoice.style
	]);
</script>

{#snippet face()}
	<span
		class="flex size-full items-center justify-center rounded-full bg-gray-100 shadow-[inset_0_7px_0_#c8cbd6]"
	>
		<img src={currentChoice.icon} alt="" class="w-12 sm:w-18.75" />
	</span>
{/snippet}

{#if interactive}
	<button
		type="button"
		onclick={() => onSelect?.(choice)}
		aria-label={`Choose ${choice}`}
		class={shell}
	>
		{@render face()}
	</button>
{:else}
	<div class={shell}>
		{@render face()}
	</div>
{/if}
