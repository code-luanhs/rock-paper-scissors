<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	import Header from '$lib/components/Header.svelte';
	import GameBoard from '$lib/components/GameBoard.svelte';
	import GameResult from '$lib/components/GameResult.svelte';
	import RulesModal from '$lib/components/RulesModal.svelte';

	import { getGameResult, getHouseChoice } from '$lib/game/game';
	import type { Choice, GameResult as GameResultType, GameStatus } from '$lib/game/types';

	let status = $state<GameStatus>('choosing');

	let playerChoice = $state<Choice | null>(null);
	let houseChoice = $state<Choice | null>(null);
	let result = $state<GameResultType | null>(null);

	let score = $state(0);

	const screen = $derived(status === 'choosing' ? 'board' : 'result');

	async function handleSelect(choice: Choice) {
		playerChoice = choice;
		status = 'waiting';

		await delay(900);

		const selectedHouseChoice = getHouseChoice();
		houseChoice = selectedHouseChoice;
		status = 'reveal';

		await delay(800);

		const gameResult = getGameResult(choice, selectedHouseChoice);
		result = gameResult;

		if (gameResult === 'win') {
			score += 1;
		}

		if (gameResult === 'lose' && score > 0) {
			score -= 1;
		}

		status = 'result';
	}

	function handlePlayAgain() {
		playerChoice = null;
		houseChoice = null;
		result = null;

		status = 'choosing';
	}

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
</script>

<Header {score} />

<main class="relative mx-auto mt-12 min-h-[430px] w-full overflow-x-clip sm:mt-16 sm:min-h-[500px]">
	{#key screen}
		<div
			in:scale={{
				start: 0.95,
				duration: 500,
				easing: cubicOut
			}}
			out:scale={{
				start: 0.95,
				duration: 300,
				easing: cubicOut
			}}
			class="absolute inset-0"
		>
			{#if status === 'choosing'}
				<GameBoard onSelect={handleSelect} />
			{:else}
				<GameResult {status} {playerChoice} {houseChoice} {result} onPlayAgain={handlePlayAgain} />
			{/if}
		</div>
	{/key}
</main>

<RulesModal />
