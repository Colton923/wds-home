import type { BlogNames } from 'app/api/blogCount/route'
import styles from 'styles/Home.module.scss'

async function getBlogNames() {
  const response = await fetch(
    process.env.NEXT_PUBLIC_ENV === 'development'
      ? 'http://localhost:3000/api/blogCount'
      : 'https://webdevelopersolutions.com/api/blogCount',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  try {
    return await response.json()
  } catch (error) {
    throw new Error('JSON parsing error')
  }
}

export default async function Blog() {
  const blogNamesData = getBlogNames()
  const [blogNames] = await Promise.all([blogNamesData])

  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Blog</h1>
        </div>
        <div className={styles.blogBody}>
          {blogNames.blogNames.map((blogName: BlogNames) => {
            if (blogName === undefined) return <></>
            return (
              <div className={styles.blogItem} key={blogName.id}>
                <h2 className={styles.blogItemTitle}>{blogName.title}</h2>
                <a href={`/blog/${blogName.id}`}>Click here to read more</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
