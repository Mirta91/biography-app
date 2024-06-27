import { g as getCollection } from "../../../chunks/collections.js";
async function load(request) {
  const url = new URL(request.url);
  let skip = Number(url.searchParams.get("skip"));
  if (skip < 0)
    skip = 0;
  const skills = await getCollection("skills", skip * 2, 0);
  const projects = await getCollection("projects", skip * 2, 0);
  return {
    skills,
    projects
  };
}
export {
  load
};
