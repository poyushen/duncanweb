<script>
	import scrollTo from '../lib/js/scroll';
	import logo from '../lib/images/logo.png';
	import menupic from '../lib/images/menu.png';
	import { draw } from 'svelte/transition';
	import { isDrawerOpen } from '../lib/js/store';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	$: outerHeight = 0;
	$: innerHeight = 0;
	$: outerWidth = 0;
	$: innerWidth = 0;

	$: drawerStore = getDrawerStore();

	function clickDrawer(isDrawerOpenValue) {
		console.log(drawerStore);
		isDrawerOpen.set(!isDrawerOpenValue);
		if ($isDrawerOpen) {
			const menuDrawerSettings = {
				position: 'right',
				bgDrawer: 'bg-[#FFFFFF]',
				width: 'w-4/5',
				height: 'h-full',
				zIndex: 'z-10'
			};
			drawerStore.open(menuDrawerSettings);
		} else {
			drawerStore.close();
		}
	}
</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div class="flex h-full font-noto mx-4lg:mx-14">
	<div class="flex h-full w-full lg:w-1/4 items-center z-50">
		<img class="ml-4 lg:ml-16 h-3/5" src={logo} alt="logo" />
	</div>
	<div class="lg:w-full h-full z-50 mr-16">
		<div class="grid grid-cols-1 h-full">
			{#if outerWidth > 1024}
				<div class="flex flex-row-reverse text-xl items-center font-semibold tracking-widest menu">
					<button class="btn ml-6 invisible md:visible" on:click={() => scrollTo('contact')}
						>與本所聯絡</button
					>
					<button class="btn ml-6 invisible md:visible" on:click={() => scrollTo('service')}
						>服務項目</button
					>
					<button class="btn ml-6 invisible md:visible" on:click={() => scrollTo('about')}
						>主持律師</button
					>
					<button class="btn ml-6 invisible md:visible" on:click={() => scrollTo('homeimg')}
						>關於正熹</button
					>
				</div>
			{:else}
				<button
					class="flex flex-row-reverse visible items-center"
					on:click={() => clickDrawer($isDrawerOpen)}
				>
					<img class="h-8 lg:h-10 menupic" src={menupic} alt="menu" />
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	.menu {
		/* color: #86bbd8; */
		color: #487b9e;
	}

	.en_name {
		font-size: 10px;
	}

	.btn {
		background: transparent;
		border: none;
		display: block;
		outline: none;
		position: relative;
		transition: 0.3s;
		padding: 10px;
	}

	.btn::before {
		content: '';
		border-bottom: 2px solid #487b9e;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 0;
		transition: 0.3s;
	}

	.btn:hover::before {
		width: 70%;
		padding: 0;
	}

	.btn:hover {
		color: #487b9e;
	}

	.menupic {
		opacity: 0.7;
	}
</style>
