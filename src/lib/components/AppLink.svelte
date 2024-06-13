<script>

    export let text; 
    export let href = "#"; 

</script>

<a href="{href}">{text}</a>

<style>
    a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

    a:hover {
		color: var(--color-theme-1);
	}

</style>