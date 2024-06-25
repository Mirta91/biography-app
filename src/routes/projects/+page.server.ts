import { getCollection } from '$db/collections';   
import type { DataInterface } from "$interfaces/interfaces"; 


export async function load(request: Request): Promise<DataInterface> {   
    // get skip and limit from searchParams in request
    const url = new URL(request.url);
    let skip = Number(url.searchParams.get("skip")); 
	if(skip < 0) 
        skip = 0;

    // get repositories from MongoDB
    const skills = await getCollection("skills", skip * 2, 0);
    const projects = await getCollection("projects", skip * 2, 0);

	return { 
        skills: skills,
        projects: projects
    };
}