<script lang="ts">
	import Score from './Score.svelte';

	let { score }: { score: number } = $props();
</script>

<header class="px-6 pt-10 pb-16">
	<div
		class="mx-auto flex w-full max-w-181 items-center justify-between gap-4 rounded-2xl border-2 border-white/50 px-6 py-4 uppercase"
	>
		<h1 class="flex flex-col *:text-2xl *:leading-6 sm:*:text-4xl sm:*:leading-8">
			<span>Rock</span>
			<span>Paper</span>
			<span>Scissors</span>
		</h1>

		<Score {score} />
	</div>
</header>
