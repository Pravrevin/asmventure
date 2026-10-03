import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { POSTS } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'

function PostCard({ post }) {
  return (
    <Link to={`${PATHS.blog}/${post.slug}`} className="post">
      <div className="cover"><img src={post.image} alt="" loading="lazy" /></div>
      <div className="post-body">
        <div className="article-meta"><span>{post.tag}</span><span>{post.date}</span><span>{post.readTime}</span></div>
        <h3 className="post-title">{post.title}</h3>
        <p className="muted small">{post.excerpt}</p>
        <span className="post-link">Read story <ArrowUpRight size={15} /></span>
      </div>
    </Link>
  )
}

export default function Blog() {
  const { slug } = useParams()
  const post = slug ? POSTS.find((p) => p.slug === slug) : null

  if (slug && !post) {
    return (
      <>
        <PageHero eyebrow="Journal" title="Post not" accent="found" crumb="Journal" image="/images/stairs-training.jpg" />
        <section className="section container"><Link to={PATHS.blog} className="btn btn-ghost"><ArrowLeft size={16} /> Back to journal</Link></section>
      </>
    )
  }

  if (post) {
    const more = POSTS.filter((p) => p.slug !== post.slug)
    return (
      <>
        <PageHero eyebrow={post.tag} title={post.title} sub={post.excerpt} image={post.image} crumb="Journal" />
        <section className="article container">
          <div className="article-meta">
            <Link to={PATHS.blog} className="btn btn-ghost btn-sm"><ArrowLeft size={14} /> All stories</Link>
            <span>{post.date}</span><span><Clock3 size={14} /> {post.readTime}</span>
          </div>
          <div className="article-body">{post.content.map((p, i) => <p key={i}>{p}</p>)}</div>
        </section>
        <section className="section container">
          <div className="kicker">Keep reading</div>
          <div className="blog-grid two">
            {more.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero eyebrow="Journal" title="Stories from the" accent="road" sub="Updates, training advice and community stories from the ASM Ventures Marathon." image="/images/stairs-training.jpg" />
      <section className="section container">
        <div className="blog-grid">
          {POSTS.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  )
}
