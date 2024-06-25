export interface ProjectInterface {
    name: string;
    image: string;
    links: Array<{ name: string, url: string }>;
    description: string;
    icon: string;
    tags: Array<{ name: string, link: string }>;
}

export interface DataInterface {
    skills: JSON;
    projects: JSON;
}