import { c as create_ssr_component, v as validate_component, e as escape } from "./ssr.js";
import { A as AppButton } from "./AppButton.js";
import { w as writable } from "./index.js";
const count = writable(0);
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countVal;
  count.subscribe((value) => {
    countVal = value;
  });
  return `<div class="flex gap-4">${validate_component(AppButton, "AppButton").$$render(
    $$result,
    {
      text: "-",
      class: "bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all"
    },
    {},
    {}
  )} <p class="text-3xl min-w-10 text-svOrange text-center flex items-center justify-center">${escape(countVal)}</p> ${validate_component(AppButton, "AppButton").$$render(
    $$result,
    {
      text: "+",
      class: "bg-transparent hover:bg-svOrange font-semibold hover:text-white py-2 px-4 border border-svOrange hover:border-transparent rounded transition-all"
    },
    {},
    {}
  )}</div> ${validate_component(AppButton, "AppButton").$$render(
    $$result,
    {
      text: "Reset",
      class: "bg-svOrange  font-semibold text-white py-2 px-4 border border-svOrange hover:border-svOrange rounded transition-all min-w-40 mt-3"
    },
    {},
    {}
  )}`;
});
export {
  Counter as C
};
