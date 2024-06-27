import * as server from '../entries/pages/projects/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/projects/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.C8jgaD40.js","_app/immutable/chunks/scheduler.CEXU2T_7.js","_app/immutable/chunks/index.Cooj-vt4.js","_app/immutable/chunks/each.BJaJESgy.js","_app/immutable/chunks/AppImage.DhIt1GW4.js"];
export const stylesheets = ["_app/immutable/assets/9.CMi-Ab7Y.css"];
export const fonts = [];
