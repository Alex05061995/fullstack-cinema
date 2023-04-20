export interface ILink {
    _id: string;
    link: string;
    title: string;
}

export interface ICOntentList {
    name: string;
    links: ILink[];
}