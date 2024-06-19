<script>
	import Footer from '../lib/modules/Footer.svelte';
	import Header from '../lib/modules/Header.svelte';
	import '../app.css'; //tailwind import
	import './styles.css'; //to delete
	import "../lib/scss/main.scss"; //app main scss
</script>

<div class="app flex flex-col min-h-[100vh]">
	<Header />

	<main class="flex flex-col w-full mx-auto box-border">
		<slot />
	</main>

	<Footer/>
</div>
