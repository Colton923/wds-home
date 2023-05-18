'use client'

import { useState, useEffect } from 'react'
import styles from 'styles/Home.module.scss'

type BlogNames = {
  id: string
  title: string
}

const Blog = () => {
  const [blog, setBlog] = useState<BlogNames[]>([])
  useEffect(() => {
    fetch('/api/getBlogNames', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((res) => {
        setBlog(res)
      })
  }, [])

  if (!blog) return <div>loading...</div>
  return (
    <div className={styles.blog}>
      <div className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>Blog</h1>
        </div>
        <div className={styles.blogBody}>
          {blog.map((blogName: BlogNames) => {
            return (
              <div className={styles.blogItem} key={blogName.id}>
                <h2 className={styles.blogItemTitle}>{blogName.title}</h2>
                <a href={`/${blogName.id}`}>Click here to read more</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
