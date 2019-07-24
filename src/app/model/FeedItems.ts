export class FeedItems {
    title?: string;
    link?: string;
    author?: string;
    categories?: string[] | any;
    pubDate?: Date;
    content?: string;
    expiryDate: Date;
    thumbnail?: string;

    constructor(args: {
        title: string;
        link: string;
        author: string;
        categories: string[] | any;
        pubDate: Date;
        content: string;
        expiryDate: Date;
        thumbnail?: string;
    }) {
        this.title = args.title;
        this.link = args.link;
        this.author = args.author;
        this.categories = args.categories;
        this.pubDate = args.pubDate;
        this.content = args.content;
        this.expiryDate = args.expiryDate;
        this.thumbnail = args.thumbnail
    }
}