import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
/* empty css                                                   */
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="min-h-[80vh] mt-24">${slots.default ? slots.default({}) : ``}</main> `;
});
export {
  Layout as default
};
