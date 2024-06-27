import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.G-Tf2iY-.js","_app/immutable/chunks/scheduler.CEXU2T_7.js","_app/immutable/chunks/index.Cooj-vt4.js","_app/immutable/chunks/AppImage.DhIt1GW4.js","_app/immutable/chunks/index.Cu0gnyRr.js","_app/immutable/chunks/linkedin.C51HRsFc.js","_app/immutable/chunks/AppButton.DQkkps_W.js"];
export const stylesheets = ["_app/immutable/assets/AppPopover.BZw0a4tq.css"];
export const fonts = [];
