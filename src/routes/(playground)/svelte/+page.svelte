<script lang="ts">
	import Counter from '$lib/modules/Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import svelteAwesome from '$lib/images/awesome-svelte.svg';
	import AppButton from '$lib/components/AppButton.svelte';

	let appName = "SvelteKit App"
	let textColor = 'text-black';
	let show = false;
	let users = [
		{ name: "Marko" },
		{ name: "Luka" },
		{ name: "Ana" }
	]
	let firstName = "", lastName = "";
	//Any top-level statement can be made reactive by prefixing it with the $:
	//Reactive statements run after other script code and before the component markup is rendered, whenever the values that they depend on have changed.
	$: fullName = firstName + " "+ lastName;
	$: user = "";

	const toggle = () => {
		textColor = textColor === 'text-black' ? 'text-svOrange' : 'text-black';
		show = !show;
	}

	const addUser = (newUser: string) => {
		if(newUser){
			users = [...users, {
				name: newUser
			}];	
			user = '';
		}
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <img src={svelteAwesome} alt="svelteAwesome" class="max-w-64" /> -->
	<span class="welcome mt-20">

		<picture>
			<source srcset={welcome} type="image/webp" />
			<img src={welcome_fallback} alt="Welcome" />
		</picture>
	</span>

	<h1 class="-m-16">
		<span class="{textColor} font-mono">to the {appName} playground</span> 
	</h1>
	
	<br><br><br>

	{#if show}
		<span> This text is initaly hidden! </span>
	{:else}
		<span>Something is hidden here...</span>
	{/if}

	<div class="flex gap-2">
		<AppButton 
			on:click|once="{() => textColor = 'text-svOrange'}" 
			class="btn-orange" 
			text="Change text color once">
		</AppButton>

		<AppButton 
			on:click={() => toggle()} 
			class="btn-orange">
			<span class="!text-white">Toggle me</span>
		</AppButton>
	</div>

	<br>
	<h2 class="text-lg font-bold underline">Loop me up!</h2>
	
	{#each users as user}
		{user.name}<br>
	{/each}

	<input 
		bind:value={user} 
		class="border rounded-md border-svOrange p-2" />
	<br>

	<AppButton 
		on:click={() => addUser(user)} 
		class="btn-orange">
		<span class="!text-white">Add one more!</span>
	</AppButton>

	<br>
	<h2 class="text-lg font-bold underline">Reactivityyyy</h2>
	<p> Full name is {fullName}</p><br>
	<div class="flex gap-4">
		<input bind:value={firstName} class="border rounded-md border-svOrange p-2"/>
		<input bind:value={lastName} class="border rounded-md border-svOrange p-2"/>
	</div>
	<br>
	<h2 class="text-lg font-bold underline">Store</h2>
	<br>
	<p>This counter component is using a <b>svelte/store</b> to update the value.</p>
	<p>If you go to a <a href="/test"> /test </a>route you will see that the counter is changed there too</p><br>
	<Counter />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
