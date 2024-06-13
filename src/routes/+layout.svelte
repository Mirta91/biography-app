<script>
	import Footer from '../lib/modules/Footer.svelte';
	import Header from '../lib/modules/Header.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="app flex flex-col min-h-[100vh]">
	<Header />

	<main class="flex flex-col p-4 w-full mx-auto box-border">
		<slot />
	</main>

	<Footer/>
</div>
