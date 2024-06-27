import * as server from '../entries/pages/skills/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/skills/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.Byc_K9ft.js","_app/immutable/chunks/scheduler.CEXU2T_7.js","_app/immutable/chunks/index.Cooj-vt4.js","_app/immutable/chunks/each.BJaJESgy.js","_app/immutable/chunks/AppImage.DhIt1GW4.js"];
export const stylesheets = ["_app/immutable/assets/10.DqtLuw7U.css","_app/immutable/assets/AppPopover.BZw0a4tq.css"];
export const fonts = [];
