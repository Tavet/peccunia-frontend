export type Post = {
    title: string,
    excerpt: string,
    coverImage: string,
    date: date,
    slug: string,
    author: Author,
    ogImage: OgImage

}

export type Author = {
    name: string,
    picture: string
}

export type OgImage = {
    url: string
}
