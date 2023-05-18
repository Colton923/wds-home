import { kv } from '@vercel/kv'
import styles from './Blog.module.scss'
import Ad from 'components/Ad/Ad'

export type Blog = {
  id: string
  title: string
  content: string
}

async function getBlogs(id: string) {
  const blog = await kv
    .get<Blog[]>('blog')
    .then((res) => res?.filter((item) => item.id === id))

  if (blog === undefined) return []

  return blog
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const blogData = getBlogs(id)
  const [blog] = await Promise.all([blogData])

  return (
    <div className={styles.blogWrapper}>
      {blog.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          {/* item.content is all tag wrapped html items. */}
          <div
            className={styles.contentWrapper}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      ))}
      <Ad />
    </div>
  )
}
