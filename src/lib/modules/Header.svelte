<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import AppLink from '../components/AppLink.svelte';
	import AppImage from '../components/AppImage.svelte';
</script>

<header class="flex justify-between absolute z-10 top-0 left-0 right-0 mx-auto w-full">
	<div class="w-12 h-12">
		<a href="https://kit.svelte.dev" target="_blank">
			<AppImage src={logo} alt="SvelteKit" style="width: 2em; height: 2em; object-fit: contain;"/>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<AppLink text="Home" href="/"/>
			</li>
			<!-- <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<AppLink text="About" href="/about"/>
			</li> -->
			<li aria-current={$page.url.pathname === '/about-me' ? 'page' : undefined}>
				<AppLink text="About" href="/about-me"/>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<AppLink text="Projects" href="/projects"/>
			</li>
			<li aria-current={$page.url.pathname === '/pokemon' ? 'page' : undefined}>
				<AppLink text="Pokemons" href="/pokemon"/>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit" target="_blank">
			<AppImage src={github} alt="GitHub" style="width: 2em; height: 2em; object-fit: contain;"/>
		</a>
	</div>
</header>

<style>

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

</style>
