<script>
	import "../app.css";
	import Header from "./Header.svelte";
	import Firstpic from "./Firstpic.svelte"
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
	import Home from "./Home.svelte";
	import Service from "./Service.svelte"
	import scrollTo from "../lib/js/scroll.js"
	import { Drawer, initializeStores, getDrawerStore } from '@skeletonlabs/skeleton';
    import { isDrawerOpen } from "../lib/js/store"
	import balanceIcon from "../lib/images/balance.png"

	$: initializeStores()
	$: drawerStore = getDrawerStore()

	function scrollAndClose(eleid){
		drawerStore.close()
		isDrawerOpen.set(false)
		scrollTo(eleid)
	}

</script>

<svelte:head>
	<title>沈柏亘律師</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="h-screen app">
	<header class="mx-14 w-screen">
		<Drawer>
			<div class="topPadding"></div>
			<div class="grid grid-cols-1">
            	<button class="text-2xl h-24" on:click={() => scrollAndClose("home")}>關於我們</button>
				<hr>
				<button class="text-2xl h-24" on:click={() => scrollAndClose("about")}>律師介紹</button>
				<hr>
            	<button class="text-2xl h-24" on:click={() => scrollAndClose("service")}>服務項目</button>
				<hr>
            	<button class="text-2xl h-24" on:click={() => scrollAndClose("contact")}>聯絡我們</button>
				<hr>
			</div>
		</Drawer>
		<Header />
	</header>
	<main>
		<div class="topPadding"></div>
		<div class="mx-14 w-fit firstpic">
			<Firstpic />
		</div>
		<div id="home" class="mx-14 w-fit h-fit">
			<Home />
		</div>
		<div id="about" class="mx-14 w-fit h-fit">
			<About />
		</div>
		<div id="service" class="w-full h-fit">
			<Service />
		</div>
		<!-- <div id="experience" class="w-full info">
			<Experience />
		</div>
		<div id="paragraph" class="w-full info">
			<Paragraph />
		</div> -->
		<div id="contact" class="w-full info">
			<Contact />
		</div>
		<!-- <slot /> -->
	</main>

	<!-- <footer>
		Footer
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	header {
		background-color: white;
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
		/* height: 88%; */
	}

	.subhome {
		/* height: 58%; */
	}

	main {
		height: 100%;
	}

</style>
