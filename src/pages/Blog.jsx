import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock3 } from 'lucide-react'
import { PATHS } from '../lib/paths.js'
import { POSTS } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'

function Cover({ post, big }) {
  return (
    <div className={`cover tone-${post.tone}${big ? ' big' : ''}`} aria-hidden="true">
      <span className="display">{post.tag}</span>
    </div>
  )
}

export default function Blog() {
  const { slug } = useParams()
  const post = slug ? POSTS.find((p) => p.slug === slug) : null

  if (slug && !post) {
    return (
      <>
        <PageHero eyebrow="Journal" title="Post not" accent="found" ghost="404" />
        <section className="section container"><Link to={PATHS.blog} className="btn btn-ghost"><ArrowLeft size={16} /> Back to journal</Link></section>
      </>
    )
  }

  if (post) {
    const more = POSTS.filter((p) => p.slug !== post.slug)
    return (
      <>
        <section className="article container">
          <Link to={PATHS.blog} className="btn btn-ghost btn-sm"><ArrowLeft size={14} /> All stories</Link>
          <div className="article-meta"><span className="pill">{post.tag}</span><span>{post.date}</span><span><Clock3 size={14} /> {post.readTime}</span></div>
          <h1 className="display article-title">{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <Cover post={post} big />
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
      <PageHero eyebrow="Journal" title="Stories from the" accent="road" sub="Updates, training advice and community stories from the ASM Ventures Marathon." ghost="JOURNAL" />
      <section className="section container">
        <div className="blog-grid">
          {POSTS.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </>
  )
}

function PostCard({ post }) {
  return (
    <Link to={`${PATHS.blog}/${post.slug}`} className="post">
      <Cover post={post} />
      <div className="post-body">
        <div className="article-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
        <h3 className="display h3">{post.title}</h3>
        <p className="muted small">{post.excerpt}</p>
        <span className="post-link">Read story <ArrowUpRight size={16} /></span>
      </div>
    </Link>
  )
}
