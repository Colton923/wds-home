import { kv } from '@vercel/kv'
import styles from './Blog.module.scss'
import Ad from 'components/Ad/Ad'

export type Blog = {
  id: string
  title: string
  content: string
}

// wait kv.set('blog', [
//   {
//     id: '1',
//     title: 'Top 5 Most Effective New Business Ideas',
//     content: `
//       <h2>Top 5 Most Effective New Business Ideas</h2>
//       <p>Are you an aspiring entrepreneur looking for fresh business ideas that can make a significant impact? In this blog post, we'll explore the top 5 most effective new business ideas that have the potential to thrive in today's competitive market.</p>
//       <h2>1. E-commerce Subscription Box Service</h2>
//       <p>An e-commerce subscription box service involves curating and delivering personalized products or experiences to customers on a recurring basis. This business idea has gained popularity due to its convenience and surprise element. You can choose a specific niche or target a particular audience segment to create a successful subscription box service. Examples include subscription boxes for beauty products, snacks, books, or even pet supplies. By offering unique and curated items, you can attract customers looking for convenience, personalization, and discovery.</p>
//       <h2>2. Virtual Reality (VR) Arcade</h2>
//       <p>With the advancements in virtual reality (VR) technology, opening a VR arcade can be a highly engaging and profitable venture. A VR arcade allows customers to experience immersive virtual reality environments and play multiplayer games. By offering a wide range of VR experiences, from thrilling adventures to educational simulations, you can attract gamers, VR enthusiasts, and individuals looking for unique entertainment experiences. Creating a captivating environment with state-of-the-art VR equipment can enhance the overall customer experience and set your VR arcade apart.</p>
//       <h2>3. Sustainable Products and Services</h2>
//       <p>The increasing awareness and concern for environmental sustainability have opened up opportunities for businesses that focus on sustainable products and services. This business idea involves offering eco-friendly alternatives to conventional products or providing sustainable solutions. Examples include organic and eco-friendly clothing lines, renewable energy products, zero-waste packaging solutions, or even sustainable consulting services. By catering to the growing demand for environmentally conscious options, you can attract customers who prioritize sustainability and contribute to a greener future.</p>
//       <h2>4. Digital Marketing Agency</h2>
//       <p>In the digital age, busi

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
