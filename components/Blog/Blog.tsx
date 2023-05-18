import type { BlogNames } from 'app/api/blogCount/route'
import styles from 'styles/Home.module.scss'

export async function generateStaticParams() {
  const response = await fetch('https://webdevelopersolutions.com/api/blogCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.status !== 200) {
    return { blogs: [] }
  }
  return await response.json()
}

export default async function Blog({ blogs }: { blogs: { blogs: BlogNames[] } }) {
  const blogNames = blogs

  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Blog</h1>
        </div>
        <div className={styles.blogBody}>
          {blogNames.blogs.map((blogName: BlogNames) => {
            return (
              <div className={styles.blogItem} key={blogName.id}>
                <h2 className={styles.blogItemTitle}>{blogName.title}</h2>
                <a href={`https://webdevelopersolutions.com/${blogName.id}`}>
                  Click here to read more
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
