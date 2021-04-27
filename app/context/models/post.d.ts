export interface Post {
    title: string
    excerpt: string
    coverImage: string
    date: date
    slug: string
    author: Author
    ogImage: OgImage

}

export interface Author {
    name: string
    picture: string
}

export interface OgImage {
    url: string
}
