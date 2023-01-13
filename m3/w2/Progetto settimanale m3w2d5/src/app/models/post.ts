export interface Post{
    id:number,
    title:string,
    body:string,
    active:boolean,
    type: 'news' | 'politics' | 'education',
    author: string
}
