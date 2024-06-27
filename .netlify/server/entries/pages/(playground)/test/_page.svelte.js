import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { C as Counter } from "../../../../chunks/Counter.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-gbi83v">Hello!</h1> <div class="mx-auto">${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
