<script lang="ts">
	let { score }: { score: number } = $props();
</script>

<div
	class="flex w-24 shrink-0 flex-col justify-center self-stretch rounded-2xl bg-white p-4 text-center sm:w-32"
>
	<span class="text-xs leading-none tracking-widest text-blue-700 sm:text-sm">Score</span>
	<strong class="text-4xl text-gray-600 sm:text-5xl">{score}</strong>
</div>
