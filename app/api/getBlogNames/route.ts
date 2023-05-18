import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function POST() {
  const allBlogs = await kv.get('blog')
  return NextResponse.json(allBlogs)
}
