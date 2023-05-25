{/*
import { kv } from '@vercel/kv'
import styles from './Blog.module.scss'
import Ad from 'components/Ad/Ad'

export type Blog = {
  id: string
  title: string
  content: string
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const blog = await kv
    .get<Blog[]>('blog')
    .then((res) => res?.filter((item) => item.id === id))

  return (
    <div className={styles.blogWrapper}>
      {blog?.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
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
*/}