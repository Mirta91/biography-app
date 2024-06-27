import { c as create_ssr_component, e as escape, v as validate_component, f as each, b as add_attribute } from "../../../chunks/ssr.js";
import { A as AppImage } from "../../../chunks/AppImage.js";
const css = {
  code: ".tags.svelte-1uxvspe span.svelte-1uxvspe{border-radius:0.125rem;--tw-bg-opacity:1;background-color:rgb(255 62 0 / var(--tw-bg-opacity));padding:5px;font-size:0.75rem;line-height:1rem;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))\n}",
  map: '{"version":3,"file":"ProjectItem.svelte","sources":["ProjectItem.svelte"],"sourcesContent":["<script lang=\\"ts\\">import AppImage from \\"$lib/components/AppImage.svelte\\";\\nexport let title;\\nexport let links;\\nexport let image;\\nexport let icon;\\nexport let description;\\nexport let tags;\\n<\/script>\\r\\n\\r\\n<div class=\\"relative max-w-[304px]\\">\\r\\n\\r\\n        <h2 class=\\"text-svOrange text-center text-xl pb-2\\">{title}</h2>\\r\\n\\r\\n        <AppImage src=\\"{image}\\" alt=\\"alt - {title}\\" class=\\"h-44 w-full object-cover\\" />\\r\\n\\r\\n        {#if icon}\\r\\n            <AppImage src=\\"{icon}\\" alt=\\"icon\\" class=\\"w-10 h-10 absolute top-6 -left-3 z-10 rounded-full drop-shadow-lg\\" />\\r\\n        {/if}\\r\\n        <p class=\\"text-sm py-2\\">{@html description}</p> \\r\\n        \\r\\n        <div class=\\"flex flex-col gap-y-2\\">\\r\\n            {#each links as link}\\r\\n            \\r\\n                <a  \\r\\n                    href=\\"{link.url}\\"\\r\\n                    target=\\"_blank\\"\\r\\n                    class=\\"w-full inline-block  text-center bg-white text-svOrange transition-all duration-300 ease-in-out font-bold py-2 px-4\\">\\r\\n                        {link.name}\\r\\n                </a>\\r\\n            {/each}\\r\\n        </div>\\r\\n\\r\\n\\r\\n        <div class=\\"tags pt-2 flex flex-wrap gap-1\\">\\r\\n            {#each tags as tag}\\r\\n                {#if tag.name} <span class=\\"text-sm\\">{tag.name}</span> {/if}\\r\\n            {/each}\\r\\n        </div>\\r\\n\\r\\n\\r\\n</div>\\r\\n\\r\\n<style lang=\\"scss\\">.tags span {\\n    border-radius: 0.125rem;\\n    --tw-bg-opacity: 1;\\n    background-color: rgb(255 62 0 / var(--tw-bg-opacity));\\n    padding: 5px;\\n    font-size: 0.75rem;\\n    line-height: 1rem;\\n    text-transform: uppercase;\\n    --tw-text-opacity: 1;\\n    color: rgb(255 255 255 / var(--tw-text-opacity))\\n}</style>"],"names":[],"mappings":"AA0CmB,oBAAK,CAAC,mBAAK,CAC1B,aAAa,CAAE,QAAQ,CACvB,eAAe,CAAE,CAAC,CAClB,gBAAgB,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,eAAe,CAAC,CAAC,CACtD,OAAO,CAAE,GAAG,CACZ,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,SAAS,CACzB,iBAAiB,CAAE,CAAC,CACpB,KAAK,CAAE,IAAI,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,IAAI,iBAAiB,CAAC,CAAC;AACpD"}'
};
const ProjectItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { links } = $$props;
  let { image } = $$props;
  let { icon } = $$props;
  let { description } = $$props;
  let { tags } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css);
  return `<div class="relative max-w-[304px]"><h2 class="text-svOrange text-center text-xl pb-2">${escape(title)}</h2> ${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: image,
      alt: "alt - " + title,
      class: "h-44 w-full object-cover"
    },
    {},
    {}
  )} ${icon ? `${validate_component(AppImage, "AppImage").$$render(
    $$result,
    {
      src: icon,
      alt: "icon",
      class: "w-10 h-10 absolute top-6 -left-3 z-10 rounded-full drop-shadow-lg"
    },
    {},
    {}
  )}` : ``} <p class="text-sm py-2"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p> <div class="flex flex-col gap-y-2">${each(links, (link) => {
    return `<a${add_attribute("href", link.url, 0)} target="_blank" class="w-full inline-block text-center bg-white text-svOrange transition-all duration-300 ease-in-out font-bold py-2 px-4">${escape(link.name)} </a>`;
  })}</div> <div class="tags pt-2 flex flex-wrap gap-1 svelte-1uxvspe">${each(tags, (tag) => {
    return `${tag.name ? `<span class="text-sm svelte-1uxvspe">${escape(tag.name)}</span>` : ``}`;
  })}</div> </div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  return `<div class="container max-w-screen-md"><h3 class="text-left font-bold pb-5 text-xl" data-svelte-h="svelte-qzk7sw">💼 My projects</h3> <p data-svelte-h="svelte-llpf5i">Some of the projects I have worked on, spanning from tourism, digital platforms and sports to manufacturing. Each project reflects a unique blend of innovation and technology, tailored to meet specific industry needs and challenges.</p> <div class="flex flex-col items-center sm:items-start sm:grid sm:grid-cols-2 gap-8 mt-12">${each(projects, (project) => {
    return `${validate_component(ProjectItem, "Project").$$render(
      $$result,
      {
        image: project.image,
        title: project.name,
        links: project.links,
        description: project.description,
        icon: project.icon,
        tags: project.tags
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log({ data });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1k218nc_START -->${$$result.title = `<title>Projects</title>`, ""}<meta name="description" content="Mirta's projects"><!-- HEAD_svelte-1k218nc_END -->`, ""} <div class="app-projects mt-24">${validate_component(Projects, "Projects").$$render($$result, { projects: data?.projects }, {}, {})}</div>`;
});
export {
  Page as default
};
