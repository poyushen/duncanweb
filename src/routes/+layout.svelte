<script>
	import "../app.css";
	import Header from "./Header.svelte";
	import Firstpic from "./Firstpic.svelte"
	import About from "./About.svelte";
	import Contact from "./Contact.svelte";
	import Home from "./Home.svelte";
	import Service from "./Service.svelte"
</script>

<svelte:head>
	<title>沈柏亘律師</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="h-screen app">
	<header class="w-screen">
		<Header />
	</header>
	<main>
		<div class="topPadding"></div>
		<div class="mx-14 w-fit firstpic">
			<Firstpic />
		</div>
		<div id="home" class="mx-14 w-fit subhome">
			<Home />
		</div>
		<div id="about" class="mx-14 w-fit info">
			<About />
		</div>
		<div id="service" class="w-full info">
			<Service />
		</div>
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
		height: 88%;
	}

	.subhome {
		height: 58%;
	}

	main {
		height: 100%;
	}

</style>
