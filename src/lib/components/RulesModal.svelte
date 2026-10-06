<script lang="ts">
	import rulesImage from '$lib/assets/images/image-rules.svg';
	import closeIcon from '$lib/assets/images/icon-close.svg';

	let dialog: HTMLDialogElement;
</script>

<div
	class="fixed right-auto bottom-10 left-1/2 z-10 -translate-1/2 sm:right-6 sm:bottom-6 sm:left-auto sm:translate-none"
>
	<button
		type="button"
		onclick={() => dialog.showModal()}
		class="rounded-xl border-2 border-white/50 px-8 py-2 tracking-widest uppercase">Rules</button
	>
</div>

<dialog
	bind:this={dialog}
	aria-labelledby="rules-title"
	class="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-white p-0 backdrop:bg-black/50 sm:m-auto sm:h-max sm:w-100 sm:max-w-[calc(100%-2rem)] sm:rounded-lg sm:p-8"
>
	<div class="grid h-full grid-rows-[auto_1fr_auto] px-8 pt-24 pb-16 sm:block sm:p-0">
		<header class="flex justify-center sm:mb-12 sm:items-center sm:justify-between">
			<h2 id="rules-title" class="text-[28px] leading-none font-bold text-navy-900">RULES</h2>

			<button
				type="button"
				onclick={() => dialog.close()}
				aria-label="Close rules"
				class="hidden cursor-pointer sm:block"
			>
				<img src={closeIcon} alt="" />
			</button>
		</header>

		<div class="flex items-center justify-center">
			<img src={rulesImage} alt="" class="block w-full max-w-76.25" />

			<ul class="sr-only">
				<li>Paper beats rock.</li>
				<li>Rock beats scissors.</li>
				<li>Scissors beats paper.</li>
			</ul>
		</div>

		<button
			type="button"
			onclick={() => dialog.close()}
			aria-label="Close rules"
			class="mx-auto cursor-pointer sm:hidden"
		>
			<img src={closeIcon} alt="" />
		</button>
	</div>
</dialog>
