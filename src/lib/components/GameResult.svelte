<script lang="ts">
	import { scale } from 'svelte/transition';
	import ChoiceButton from './ChoiceButton.svelte';
	import type { Choice, GameResult as GameResultType, GameStatus } from '$lib/game/types';

	let {
		status,
		playerChoice,
		houseChoice,
		result,
		onPlayAgain
	}: {
		status: GameStatus;
		playerChoice: Choice | null;
		houseChoice: Choice | null;
		result: GameResultType | null;
		onPlayAgain: () => void;
	} = $props();

	const resultText = $derived(
		result === 'win' ? 'YOU WIN' : result === 'lose' ? 'YOU LOSE' : 'YOU DRAW'
	);

	const playerWon = $derived(status === 'result' && result === 'win');
	const houseWon = $derived(status === 'result' && result === 'lose');
</script>

<div
	class={[
		'mx-auto mt-12 grid w-full items-center justify-items-center px-6 sm:mt-20',
		status === 'result'
			? 'max-w-[900px] grid-cols-2 gap-x-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-x-12'
			: 'max-w-[700px] grid-cols-2 gap-x-6 sm:gap-x-20'
	]}
>
	<!-- Player -->
	<div class="flex flex-col items-center gap-6 sm:gap-12">
		<h2
			class="order-2 text-sm font-bold tracking-[0.15em] whitespace-nowrap text-white sm:order-1 sm:text-xl"
		>
			YOU PICKED
		</h2>

		{#if playerChoice}
			<div
				in:scale={{ start: 0.8, duration: 400 }}
				class="relative order-1 flex items-center justify-center sm:order-2"
			>
				{#if playerWon}
					<div
						in:scale={{ start: 0.7, duration: 700 }}
						class="pointer-events-none absolute size-65 rounded-full bg-white/2 sm:size-125"
					></div>

					<div
						in:scale={{ start: 0.7, duration: 600 }}
						class="pointer-events-none absolute size-52.5 rounded-full bg-white/3 sm:size-100"
					></div>

					<div
						in:scale={{ start: 0.7, duration: 500 }}
						class="pointer-events-none absolute size-42.5 rounded-full bg-white/4 sm:size-75"
					></div>
				{/if}

				<div class="relative z-10">
					<ChoiceButton choice={playerChoice} interactive={false} />
				</div>
			</div>
		{/if}
	</div>

	<!-- Result -->
	{#if status === 'result' && result}
		<div
			in:scale={{ start: 0, duration: 500 }}
			class="relative z-20 col-span-2 row-start-2 mt-16 flex flex-col items-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:mt-0"
		>
			<h2 class="text-5xl font-bold whitespace-nowrap text-white">
				{resultText}
			</h2>

			<button
				type="button"
				onclick={onPlayAgain}
				class="mt-5 min-w-55 cursor-pointer rounded-lg bg-white px-8 py-4 font-semibold tracking-[0.15em] text-navy-900"
			>
				PLAY AGAIN
			</button>
		</div>
	{/if}

	<!-- House -->
	<div class="flex flex-col items-center gap-6 sm:gap-12">
		<h2
			class="order-2 text-sm font-bold tracking-[0.15em] whitespace-nowrap text-white sm:order-1 sm:text-xl"
		>
			THE HOUSE PICKED
		</h2>

		{#if houseChoice}
			<div in:scale={{ start: 0, duration: 600 }} class="order-1 sm:order-2">
				<div class="relative flex items-center justify-center">
					{#if houseWon}
						<div
							in:scale={{ start: 0.7, duration: 700 }}
							class="pointer-events-none absolute size-65 rounded-full bg-white/2 sm:size-125"
						></div>

						<div
							in:scale={{ start: 0.7, duration: 600 }}
							class="pointer-events-none absolute size-52.5 rounded-full bg-white/3 sm:size-100"
						></div>

						<div
							in:scale={{ start: 0.7, duration: 500 }}
							class="pointer-events-none absolute size-42.5 rounded-full bg-white/4 sm:size-75"
						></div>
					{/if}

					<div class="relative z-10">
						<ChoiceButton choice={houseChoice} interactive={false} />
					</div>
				</div>
			</div>
		{:else}
			<div class="order-1 size-32.5 rounded-full bg-black/10 sm:order-2 sm:size-50"></div>
		{/if}
	</div>
</div>
