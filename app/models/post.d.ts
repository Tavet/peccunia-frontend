export type Post = {
    title: string,
    excerpt: string,
    coverImage: string,
    date: date,
    slug: string,
    author: Author,
    ogImage: OgImage

}

type Author = {
    name: string,
    picture: string
}

type OgImage = {
    url: string
}
