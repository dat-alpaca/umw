export interface NavItem {
    title: string;
    url: string;
    children?: NavItem[];
}

export const navigation: NavItem[] = [
    { "title": "Home", "url": "/" },
    { "title": "Scholarships", "url": "/scholarship", "children": [
        { "title": "Undergraduate", "url": "/scholarship/1_ug" },
        { "title": "Special Training", "url": "/scholarship/2_stc" },
        { "title": "College of Technology", "url": "/scholarship/3_cot" },
        { "title": "Postgraduate", "url": "/scholarship/4_pg" },
        { "title": "Professor Training", "url": "/scholarship/5_spt" },
        { "title": "Culture and Japanese", "url": "/scholarship/6_cjl" }
    ]},
    
    { "title": "Regions", "url": "/regions" },
    
    { "title": "Links", "url": "/links" },
    { "title": "Exams", "url": "/exams", "children": [
        { "title": "Undergraduate", "url": "/exams/1_ug" },
        { "title": "Special Training", "url": "/exams/2_stc" },
        { "title": "College of Technology", "url": "/exams/3_cot" },
    ]},
    
    { "title": "Interview", "url": "/interview" },
];
