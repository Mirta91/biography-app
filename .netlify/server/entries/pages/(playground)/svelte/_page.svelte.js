import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component, f as each } from "../../../../chunks/ssr.js";
import { C as Counter } from "../../../../chunks/Counter.js";
import { A as AppButton } from "../../../../chunks/AppButton.js";
const welcome = "/_app/immutable/assets/svelte-welcome.0pIiHnVF.webp";
const welcome_fallback = "/_app/immutable/assets/svelte-welcome.VNiyy3gC.png";
const css = {
  code: "section.svelte-19xx0bt.svelte-19xx0bt{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}h1.svelte-19xx0bt.svelte-19xx0bt{width:100%}.welcome.svelte-19xx0bt.svelte-19xx0bt{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-19xx0bt img.svelte-19xx0bt{position:absolute;width:100%;height:100%;top:0;display:block}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Counter from \\"$lib/modules/Counter.svelte\\";\\nimport welcome from \\"$lib/images/svelte-welcome.webp\\";\\nimport welcome_fallback from \\"$lib/images/svelte-welcome.png\\";\\nimport AppButton from \\"$lib/components/AppButton.svelte\\";\\nlet appName = \\"SvelteKit App\\";\\nlet textColor = \\"text-black\\";\\nlet show = false;\\nlet users = [\\n  { name: \\"Marko\\" },\\n  { name: \\"Luka\\" },\\n  { name: \\"Ana\\" }\\n];\\nlet firstName = \\"\\", lastName = \\"\\";\\n$:\\n  fullName = firstName + \\" \\" + lastName;\\n$:\\n  user = \\"\\";\\nconst toggle = () => {\\n  textColor = textColor === \\"text-black\\" ? \\"text-svOrange\\" : \\"text-black\\";\\n  3;\\n};\\nconst addUser = (newUser) => {\\n  if (newUser) {\\n    users = [...users, {\\n      name: newUser\\n    }];\\n    user = \\"\\";\\n  }\\n};\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Home</title>\\n\\t<meta name=\\"description\\" content=\\"Svelte demo app\\" />\\n</svelte:head>\\n\\n<section>\\n\\t<!-- <img src={svelteAwesome} alt=\\"svelteAwesome\\" class=\\"max-w-64\\" /> -->\\n\\t<span class=\\"welcome mt-20\\">\\n\\n\\t\\t<picture>\\n\\t\\t\\t<source srcset={welcome} type=\\"image/webp\\" />\\n\\t\\t\\t<img src={welcome_fallback} alt=\\"Welcome\\" />\\n\\t\\t</picture>\\n\\t</span>\\n\\n\\t<h1 class=\\"-m-16\\">\\n\\t\\t<span class=\\"{textColor} font-mono\\">to the {appName} playground</span> \\n\\t</h1>\\n\\t\\n\\t<br><br><br>\\n\\n\\t{#if show}\\n\\t\\t<span> This text is initaly hidden! </span>\\n\\t{:else}\\n\\t\\t<span>Something is hidden here...</span>\\n\\t{/if}\\n\\n\\t<div class=\\"flex gap-2\\">\\n\\t\\t<AppButton \\n\\t\\t\\ton:click|once=\\"{() => textColor = 'text-svOrange'}\\" \\n\\t\\t\\tclass=\\"btn-orange\\" \\n\\t\\t\\ttext=\\"Change text color once\\">\\n\\t\\t</AppButton>\\n\\n\\t\\t<AppButton \\n\\t\\t\\ton:click={() => toggle()} \\n\\t\\t\\tclass=\\"btn-orange\\">\\n\\t\\t\\t<span class=\\"!text-white\\">Toggle me</span>\\n\\t\\t</AppButton>\\n\\t</div>\\n\\n\\t<br>\\n\\t<h2 class=\\"text-lg font-bold underline\\">Loop me up!</h2>\\n\\t\\n\\t{#each users as user}\\n\\t\\t{user.name}<br>\\n\\t{/each}\\n\\n\\t<input \\n\\t\\tbind:value={user} \\n\\t\\tclass=\\"border rounded-md border-svOrange p-2\\" />\\n\\t<br>\\n\\n\\t<AppButton \\n\\t\\ton:click={() => addUser(user)} \\n\\t\\tclass=\\"btn-orange\\">\\n\\t\\t<span class=\\"!text-white\\">Add one more!</span>\\n\\t</AppButton>\\n\\n\\t<br>\\n\\t<h2 class=\\"text-lg font-bold underline\\">Reactivityyyy</h2>\\n\\t<p> Full name is {fullName}</p><br>\\n\\t<div class=\\"flex gap-4\\">\\n\\t\\t<input bind:value={firstName} class=\\"border rounded-md border-svOrange p-2\\"/>\\n\\t\\t<input bind:value={lastName} class=\\"border rounded-md border-svOrange p-2\\"/>\\n\\t</div>\\n\\t<br>\\n\\t<h2 class=\\"text-lg font-bold underline\\">Store</h2>\\n\\t<br>\\n\\t<p>This counter component is using a <b>svelte/store</b> to update the value.</p>\\n\\t<p>If you go to a <a href=\\"/test\\"> /test </a>route you will see that the counter is changed there too</p><br>\\n\\t<Counter />\\n\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex: 0.6;\\n\\t}\\n\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.welcome {\\n\\t\\tdisplay: block;\\n\\t\\tposition: relative;\\n\\t\\twidth: 100%;\\n\\t\\theight: 0;\\n\\t\\tpadding: 0 0 calc(100% * 495 / 2048) 0;\\n\\t}\\n\\n\\t.welcome img {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\ttop: 0;\\n\\t\\tdisplay: block;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA2GC,qCAAQ,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,IAAI,CAAE,GACP,CAEA,gCAAG,CACF,KAAK,CAAE,IACR,CAEA,sCAAS,CACR,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CACtC,CAEA,uBAAQ,CAAC,kBAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,KACV"}`
};
let appName = "SvelteKit App";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fullName;
  let user;
  let textColor = "text-black";
  let users = [{ name: "Marko" }, { name: "Luka" }, { name: "Ana" }];
  let firstName = "", lastName = "";
  $$result.css.add(css);
  fullName = firstName + " " + lastName;
  user = "";
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="Svelte demo app"><!-- HEAD_svelte-t32ptj_END -->`, ""} <section class="svelte-19xx0bt"> <span class="welcome mt-20 svelte-19xx0bt" data-svelte-h="svelte-1dca1ut"><picture><source${add_attribute("srcset", welcome, 0)} type="image/webp"> <img${add_attribute("src", welcome_fallback, 0)} alt="Welcome" class="svelte-19xx0bt"></picture></span> <h1 class="-m-16 svelte-19xx0bt"><span class="${escape(textColor, true) + " font-mono svelte-19xx0bt"}">to the ${escape(appName)} playground</span></h1> <br><br><br> ${`<span data-svelte-h="svelte-hvce1i">Something is hidden here...</span>`} <div class="flex gap-2">${validate_component(AppButton, "AppButton").$$render(
    $$result,
    {
      class: "btn-orange",
      text: "Change text color once"
    },
    {},
    {}
  )} ${validate_component(AppButton, "AppButton").$$render($$result, { class: "btn-orange" }, {}, {
    default: () => {
      return `<span class="!text-white" data-svelte-h="svelte-s6ja4v">Toggle me</span>`;
    }
  })}</div> <br> <h2 class="text-lg font-bold underline" data-svelte-h="svelte-1c8mw9l">Loop me up!</h2> ${each(users, (user2) => {
    return `${escape(user2.name)}<br>`;
  })} <input class="border rounded-md border-svOrange p-2"${add_attribute("value", user, 0)}> <br> ${validate_component(AppButton, "AppButton").$$render($$result, { class: "btn-orange" }, {}, {
    default: () => {
      return `<span class="!text-white" data-svelte-h="svelte-1fnshu4">Add one more!</span>`;
    }
  })} <br> <h2 class="text-lg font-bold underline" data-svelte-h="svelte-18neq7e">Reactivityyyy</h2> <p>Full name is ${escape(fullName)}</p><br> <div class="flex gap-4"><input class="border rounded-md border-svOrange p-2"${add_attribute("value", firstName, 0)}> <input class="border rounded-md border-svOrange p-2"${add_attribute("value", lastName, 0)}></div> <br> <h2 class="text-lg font-bold underline" data-svelte-h="svelte-nustfy">Store</h2> <br> <p data-svelte-h="svelte-11vaz9c">This counter component is using a <b>svelte/store</b> to update the value.</p> <p data-svelte-h="svelte-bcewfq">If you go to a <a href="/test">/test </a>route you will see that the counter is changed there too</p><br> ${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
