import { c as create_ssr_component } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""} <div class="text-column" data-svelte-h="svelte-1lt1uvq"><h1>About this app</h1> <p>This is a <a href="https://kit.svelte.dev" target="_blank">SvelteKit</a> app.
	</p><br> <p>The page you&#39;re looking at is <b>purely static HTML</b>, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p><br></div>`;
});
export {
  Page as default
};
