import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export type BlogNames = {
  title: string
  id: string
}

export async function GET() {
  try {
    // this route will return how many blog posts there are, and the title of the blog post
    // const kv = createClient({
    //   url: process.env.KV_REST_API_URL as string,
    //   token: process.env.KV_REST_API_TOKEN as string,
    // })
    const blogs = await kv.get('blog')
    return NextResponse.json({ status: 'success', blogs })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ status: 'error' })
  }
}
