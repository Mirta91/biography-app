<script>
	import Footer from '$lib/modules/Footer.svelte';
	import Header from '$lib/modules/Header.svelte';
	import '../app.css'; //tailwind import
	import './styles.css'; //to delete
	import "$lib/scss/main.scss"; //app main scss 
</script>

<div class="app flex flex-col min-h-screen">
	<Header />

	<main class="min-h-[90vh]">
		<slot />
	</main>

	<Footer/>
</div>
