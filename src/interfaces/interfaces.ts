
export interface DataInterface {
    skills: SkillsInterface;
    projects: ProjectInterface;
}

export interface SkillsInterface {
    level: number;  
    name: string;
    type: string;
}

export interface ProjectInterface {
    name: string;
    image: string;
    links: Array<{ name: string, url: string }>;
    description: string;
    icon: string;
    tags: Array<{ name: string, link: string }>;
}