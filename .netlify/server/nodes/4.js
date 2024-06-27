import * as server from '../entries/pages/(playground)/pokemon/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(playground)/pokemon/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(playground)/pokemon/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.gQeISkJs.js","_app/immutable/chunks/scheduler.CEXU2T_7.js","_app/immutable/chunks/index.Cooj-vt4.js","_app/immutable/chunks/each.BJaJESgy.js"];
export const stylesheets = [];
export const fonts = [];
