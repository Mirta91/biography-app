import { n as noop, j as identity, k as assign, c as create_ssr_component, o as onDestroy, e as escape, l as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import { A as AppImage } from "../../chunks/AppImage.js";
/* empty css                                                    */
import { A as AppButton } from "../../chunks/AppButton.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function backInOut(t) {
  const s = 1.70158 * 1.525;
  if ((t *= 2) < 1)
    return 0.5 * (t * t * ((s + 1) * t - s));
  return 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
}
function backIn(t) {
  const s = 1.70158;
  return t * t * ((s + 1) * t - s);
}
function backOut(t) {
  const s = 1.70158;
  return --t * t * ((s + 1) * t + s) + 1;
}
function bounceOut(t) {
  const a = 4 / 11;
  const b = 8 / 11;
  const c = 9 / 10;
  const ca = 4356 / 361;
  const cb = 35442 / 1805;
  const cc = 16061 / 1805;
  const t2 = t * t;
  return t < a ? 7.5625 * t2 : t < b ? 9.075 * t2 - 9.9 * t + 3.4 : t < c ? ca * t2 - cb * t + cc : 10.8 * t * t - 20.52 * t + 10.72;
}
function bounceInOut(t) {
  return t < 0.5 ? 0.5 * (1 - bounceOut(1 - t * 2)) : 0.5 * bounceOut(t * 2 - 1) + 0.5;
}
function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}
function circInOut(t) {
  if ((t *= 2) < 1)
    return -0.5 * (Math.sqrt(1 - t * t) - 1);
  return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}
function circIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function circOut(t) {
  return Math.sqrt(1 - --t * t);
}
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function cubicIn(t) {
  return t * t * t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function elasticInOut(t) {
  return t < 0.5 ? 0.5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1;
}
function elasticIn(t) {
  return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1));
}
function elasticOut(t) {
  return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1;
}
function expoInOut(t) {
  return t === 0 || t === 1 ? t : t < 0.5 ? 0.5 * Math.pow(2, 20 * t - 10) : -0.5 * Math.pow(2, 10 - t * 20) + 1;
}
function expoIn(t) {
  return t === 0 ? t : Math.pow(2, 10 * (t - 1));
}
function expoOut(t) {
  return t === 1 ? t : 1 - Math.pow(2, -10 * t);
}
function quadInOut(t) {
  t /= 0.5;
  if (t < 1)
    return 0.5 * t * t;
  t--;
  return -0.5 * (t * (t - 2) - 1);
}
function quadIn(t) {
  return t * t;
}
function quadOut(t) {
  return -t * (t - 2);
}
function quartInOut(t) {
  return t < 0.5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1;
}
function quartIn(t) {
  return Math.pow(t, 4);
}
function quartOut(t) {
  return Math.pow(t - 1, 3) * (1 - t) + 1;
}
function quintInOut(t) {
  if ((t *= 2) < 1)
    return 0.5 * t * t * t * t * t;
  return 0.5 * ((t -= 2) * t * t * t * t + 2);
}
function quintIn(t) {
  return t * t * t * t * t;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineInOut(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
const easingFns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  backIn,
  backInOut,
  backOut,
  bounceIn,
  bounceInOut,
  bounceOut,
  circIn,
  circInOut,
  circOut,
  cubicIn,
  cubicInOut,
  cubicOut,
  elasticIn,
  elasticInOut,
  elasticOut,
  expoIn,
  expoInOut,
  expoOut,
  linear: identity,
  quadIn,
  quadInOut,
  quadOut,
  quartIn,
  quartInOut,
  quartOut,
  quintIn,
  quintInOut,
  quintOut,
  sineIn,
  sineInOut,
  sineOut
}, Symbol.toStringTag, { value: "Module" }));
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$1 = {
  code: ".cursor.svelte-1phll3j{display:inline-block;width:6px;height:1.8rem;background:red;animation:svelte-1phll3j-blink 0.8s infinite}@keyframes svelte-1phll3j-blink{0%{background:transparent}40%{background:#ff3e00}to{background:#ff3e00}}",
  map: '{"version":3,"file":"AppTypewriter.svelte","sources":["AppTypewriter.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onDestroy } from \\"svelte\\";\\nimport { tweened } from \\"svelte/motion\\";\\nimport * as easingFns from \\"svelte/easing\\";\\nconst names = Object.keys(easingFns).filter(\\n  (n) => ![\\"default\\", \\"__moduleExports\\"].includes(n)\\n);\\nlet positionStore;\\nlet position = 0;\\nlet cleanup = null;\\nexport let text = \\"\\";\\nexport let duration = 3e3;\\nlet cssClass;\\nexport { cssClass as class };\\nonDestroy(() => {\\n  if (cleanup)\\n    cleanup();\\n});\\n$:\\n  easing = easingFns[\\"circInOut\\"];\\n$: {\\n  if (cleanup)\\n    cleanup();\\n  positionStore = tweened(0, { easing, duration });\\n  cleanup = positionStore.subscribe((val) => position = val);\\n  positionStore.set(text.length);\\n}\\n<\/script> \\r\\n\\r\\n <span class=\\"{cssClass}\\">\\r\\n    {@html text.substr(0, position)}<span class=\\"cursor\\"></span>\\r\\n</span>\\r\\n\\r\\n\\r\\n\\r\\n<style>\\r\\n    .cursor {\\r\\n\\t\\tdisplay: inline-block;\\r\\n\\t\\twidth: 6px;\\r\\n\\t\\theight: 1.8rem;\\r\\n\\t\\tbackground: red;\\r\\n\\t\\tanimation: blink 0.8s infinite;\\r\\n\\t}\\r\\n\\r\\n    @keyframes blink {\\r\\n\\t\\t0% {\\r\\n\\t\\t\\tbackground: transparent;\\r\\n\\t\\t}\\r\\n\\t\\t40% {\\r\\n\\t\\t\\tbackground: #ff3e00;\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\tbackground: #ff3e00;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n</style>"],"names":[],"mappings":"AAmCI,sBAAQ,CACV,OAAO,CAAE,YAAY,CACrB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,MAAM,CACd,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,oBAAK,CAAC,IAAI,CAAC,QACvB,CAEG,WAAW,oBAAM,CACnB,EAAG,CACF,UAAU,CAAE,WACb,CACA,GAAI,CACH,UAAU,CAAE,OACb,CACA,EAAG,CACF,UAAU,CAAE,OACb,CACD"}'
};
const AppTypewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let easing;
  Object.keys(easingFns).filter((n) => !["default", "__moduleExports"].includes(n));
  let positionStore;
  let position = 0;
  let cleanup = null;
  let { text = "" } = $$props;
  let { duration = 3e3 } = $$props;
  let { class: cssClass } = $$props;
  onDestroy(() => {
    if (cleanup)
      cleanup();
  });
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.class === void 0 && $$bindings.class && cssClass !== void 0)
    $$bindings.class(cssClass);
  $$result.css.add(css$1);
  easing = circInOut;
  {
    {
      if (cleanup)
        cleanup();
      positionStore = tweened(0, { easing, duration });
      cleanup = positionStore.subscribe((val) => position = val);
      positionStore.set(text.length);
    }
  }
  return `<span class="${escape(null_to_empty(cssClass), true) + " svelte-1phll3j"}"><!-- HTML_TAG_START -->${text.substr(0, position)}<!-- HTML_TAG_END --><span class="cursor svelte-1phll3j"></span> </span>`;
});
const background = "/_app/immutable/assets/bckg-code-1.C51qPf48.jpg";
const css = {
  code: "@keyframes svelte-14lxb74-blink{0%{background:transparent}40%{background:#ff3e00}to{background:#ff3e00}}",
  map: '{"version":3,"file":"AboutHeader.svelte","sources":["AboutHeader.svelte"],"sourcesContent":["<script lang=\\"ts\\">import AppImage from \\"$lib/components/AppImage.svelte\\";\\nimport AppTypewriter from \\"$lib/components/AppTypewriter.svelte\\";\\nimport background from \\"$lib/images/bckg-code-1.jpg\\";\\nimport mirta from \\"$lib/images/mirta.jpeg\\";\\nimport stack from \\"$lib/images/stack.png\\";\\nimport github from \\"$lib/images/github-circle.svg\\";\\nimport linkedin from \\"$lib/images/linkedin.svg\\";\\nimport { onMount } from \\"svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nlet visible = false;\\nonMount(async () => {\\n  visible = true;\\n});\\n<\/script>\\r\\n\\r\\n<div class=\\"w-full h-[60vh] bg-black relative\\">\\r\\n    <!-- <div class=\\"bckg-img w-full h-full object-cover\\"></div> -->\\r\\n    <AppImage src={background} alt=\\"background\\" class=\\"w-full h-full object-cover opacity-80 blur-[2px]\\"/>\\r\\n    {#if visible}\\r\\n    <div transition:fade={{ delay: 500, duration: 500 }} class=\\"max-w-screen-md absolute w-full h-full left-0 right-0 top-0 mx-auto flex flex-col md:flex-row justify-center items-center gap-7 md:gap-16\\">\\r\\n        <AppImage src={mirta} alt=\\"mirta\\" class=\\"w-32 h-32 md:w-64 md:h-64 rounded-full border-4 border-white\\"/>\\r\\n        <div class=\\"text-white md:min-w-[302px]\\">\\r\\n            <h1 class=\\"text-center md:text-left rainbow-text\\">\\r\\n\\t\\t\\t\\t<AppTypewriter text=\\"Mirta Štefanac\\" class=\\"\\"></AppTypewriter>\\r\\n\\t\\t\\t</h1>       \\r\\n            <h2 transition:fade={{ delay: 2800, duration: 500 }}>\\r\\n\\t\\t\\t\\tWeb developer\\r\\n\\t\\t\\t</h2>\\r\\n\\t\\t\\t<div transition:fade={{ delay: 2800, duration: 500 }} class=\\"flex row gap-2 justify-start items-center mt-2\\">\\r\\n\\t\\t\\t\\t<a href=\\"https://stackoverflow.com/users/4038579/mirta\\" target=\\"_blank\\">\\r\\n\\t\\t\\t\\t\\t<AppImage src={stack} class=\\"w-6 h-6 p-1\\" alt=\\"stack overflow\\" />\\r\\n\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\r\\n\\t\\t\\t\\t<a href=\\"https://github.com/Mirta91\\" class=\\"rounded-full\\" target=\\"_blank\\">\\r\\n\\t\\t\\t\\t\\t<AppImage src={github} class=\\"w-6 h-6  rounded-full\\" alt=\\"github\\" />\\r\\n\\t\\t\\t\\t</a>\\r\\n\\t\\t\\t\\r\\n\\t\\t\\t\\t<a href=\\"https://www.linkedin.com/in/mirtastefanac/\\" target=\\"_blank\\">\\r\\n\\t\\t\\t\\t\\t<AppImage src={linkedin} class=\\"w-6 h-6 p-1 b\\" alt=\\"linkedin\\" />\\r\\n\\t\\t\\t\\t</a>\\r\\n\\r\\n\\t\\t\\t</div>\\r\\n        </div>\\r\\n\\t\\t\\r\\n    </div>\\r\\n    {/if}\\r\\n\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n    @keyframes blink {\\r\\n\\t\\t0% {\\r\\n\\t\\t\\tbackground: transparent;\\r\\n\\t\\t}\\r\\n\\t\\t40% {\\r\\n\\t\\t\\tbackground: #ff3e00;\\r\\n\\t\\t}\\r\\n\\t\\tto {\\r\\n\\t\\t\\tbackground: #ff3e00;\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\r\\n</style>"],"names":[],"mappings":"AAkDI,WAAW,oBAAM,CACnB,EAAG,CACF,UAAU,CAAE,WACb,CACA,GAAI,CACH,UAAU,CAAE,OACb,CACA,EAAG,CACF,UAAU,CAAE,OACb,CACD"}'
};
const AboutHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-full h-[60vh] bg-black relative"> ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: background,
      alt: "background",
      class: "w-full h-full object-cover opacity-80 blur-[2px]"
    },
    {},
    {}
  )} ${``} </div>`;
});
const AboutIntro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let introText = `<p class="font-bold">My name is <span class="rainbow-text">Mirta</span>, I'm a web developer, concentrated on <u>front-end technologies</u> based in Valencia, Spain. I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>`;
  let showIntroText = false;
  setTimeout(
    () => {
      showIntroText = true;
    },
    1500
  );
  return `<div class="container py-10 max-w-screen-md"><div class="pt-6 pb-10 min-h-[220px]">${showIntroText ? `<h3 class="text-xl pb-2 font-bold" data-svelte-h="svelte-1m7h23r">👩‍💻 About me</h3> ${validate_component(AppTypewriter, "AppTypewriter").$$render(
    $$result,
    {
      text: introText,
      duration: 3e3,
      class: ""
    },
    {},
    {}
  )} <span>${validate_component(AppButton, "AppButton").$$render(
    $$result,
    {
      text: "Show full bio",
      class: "inline relative bottom-1 text-svOrange border-b border-svOrange hover:bg-svOrange hover:text-white"
    },
    {},
    {}
  )}</span>` : ``}</div> <div class="${"overflow-hidden flex flex-col gap-y-5 transition-all duration-300 ease-in-out " + escape(
    "max-h-0 opacity-0 overflow-hidden",
    true
  )}">${``}</div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-cavjp7_START -->${$$result.title = `<title>Welcome</title>`, ""}<meta name="description" content="Mirta's bio web app"><!-- HEAD_svelte-cavjp7_END -->`, ""} ${validate_component(AboutHeader, "AboutHeader").$$render($$result, {}, {}, {})} ${validate_component(AboutIntro, "AboutIntro").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
