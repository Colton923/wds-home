import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'
import type { Blog } from 'app/blog/[id]/page'

export type BlogNames = {
  title: string
  id: string
}

export async function GET() {
  try {
    // this route will return how many blog posts there are, and the title of the blog post

    const blogs: Blog[] = (await kv.get('blog')) || []
    const blogNames = blogs.map((blog) => {
      return { title: blog.title, id: blog.id }
    })

    return NextResponse.json({ status: 'success', blogNames })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 'error' })
  }
}
