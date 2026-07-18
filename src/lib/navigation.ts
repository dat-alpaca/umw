export interface NavItem {
    title: string;
    url: string;
    children?: NavItem[];
}

export const navigation: NavItem[] = [
    { "title": "Home", "url": "/" },
    { "title": "Application", "url": "/application", "children": [
        { "title": "Undergraduate", "url": "/application/1_ug" },
        { "title": "Special Training", "url": "/application/2_stc" },
        { "title": "College of Technology", "url": "/application/3_cot" },
        { "title": "Postgraduate", "url": "/application/4_pg" },
        { "title": "Professor Training", "url": "/application/5_spt" },
        { "title": "Culture and Japanese", "url": "/application/6_cjl" }
    ]},
    
    { "title": "Regions", "url": "/regions" },

    { "title": "Links", "url": "/links" },
    { "title": "Exams", "url": "/exams", "children": [
        { "title": "Undergraduate", "url": "/exams/1_ug" },
        { "title": "Special Training", "url": "/exams/2_stc" },
        { "title": "College of Technology", "url": "/exams/3_cot" },
    ]},
];
