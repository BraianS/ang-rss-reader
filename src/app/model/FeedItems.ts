export class FeedItems {
    title?: string;
    link?: string;
    author?: string;
    categories?: string[] | any;
    pubDate?: Date;
    content?: string;
    expiryDate: Date;

    constructor(args: {
        title: string;
        link: string;
        author: string;
        description: string;
        categories: string[] | any;
        pubDate: Date;
        content: string;
        expiryDate:Date    
    }) {
        this.title = args.title;
        this.link = args.link;
        this.author = args.author || args['dc:creator'];
        this.categories = args.categories;
        this.pubDate = args.pubDate;
        this.content = args["content:encoded"] || args.content;
        this.expiryDate = new Date(new Date().getTime() + ( 30 * 24 * 60 * 60 * 1000));
    }
}