<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Firstpic from './Firstpic.svelte';
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Home from './Home.svelte';
	import Service from './Service.svelte';
	import scrollTo from '../lib/js/scroll.js';
	import { Drawer, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
	import { isDrawerOpen } from '../lib/js/store';
	import Footer from './Footer.svelte';

	$: initializeStores();
	$: drawerStore = getDrawerStore();

	function scrollAndClose(eleid) {
		drawerStore.close();
		isDrawerOpen.set(false);
		scrollTo(eleid);
	}
</script>

<svelte:head>
	<title>沈柏亘律師</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="app">
	<header class="w-screen">
		<Drawer>
			<div class="topPadding"></div>
			<div class="grid grid-cols-1">
				<button class="text-xl h-16" on:click={() => scrollAndClose('homeimg')}>關於正熹</button>
				<hr />
				<button class="text-xl h-16" on:click={() => scrollAndClose('about')}>主持律師</button>
				<hr />
				<button class="text-xl h-16" on:click={() => scrollAndClose('service')}>服務項目</button>
				<hr />
				<button class="text-xl h-16" on:click={() => scrollAndClose('contact')}>與本所聯絡</button>
				<hr />
			</div>
		</Drawer>
		<Header />
	</header>
	<main class="w-screen mt-24">
		<div class="topPadding"></div>
		<div id="homeimg" class="mx-4 lg:mx-14 w-fit firstpic info">
			<Firstpic />
		</div>
		<div id="home" class="mx-4 lg:mx-14 mt-4 lg:mt-0 w-fit h-fit">
			<Home />
		</div>
		<div id="about" class="mx-4 lg:mx-14 mt-4 lg:mt-16 w-fit h-fit info">
			<About />
		</div>
		<div id="service" class="mx-4 lg:mx-14 mt-16 lg:mt-16 w-fit h-fit info">
			<Service />
		</div>
		<div id="contact" class="px-4 lg:px-14 mt-4 lg:mt-16 w-full h-fit info">
			<Contact />
		</div>
		<footer class="w-screen">
			<Footer />
		</footer>
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: #efefef;
	}

	header {
		background-color: #efefef;
		/* background-color: white; */
		height: 12%;
		position: fixed;
	}

	.topPadding {
		height: 12%;
	}

	.firstpic {
		height: 30%;
	}

	.info {
		scroll-margin-top: 80px;
	}

	main {
		height: 100%;
	}
</style>
