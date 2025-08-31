// pages/blog/[slug].tsx
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BlogPost, getBlogPost, getPublishedBlogPosts } from '../../lib/content-manager';

interface BlogPostProps {
  post: BlogPost | null;
  relatedPosts: BlogPost[];
}

const BlogPostPage: NextPage<BlogPostProps> = ({ post: initialPost, relatedPosts: initialRelatedPosts }) => {
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(initialPost);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>(initialRelatedPosts);

  // Update post data when content changes
  useEffect(() => {
    if (router.query.slug && typeof window !== 'undefined') {
      const slug = router.query.slug as string;
      const updatedPost = getBlogPost(slug);
      
      if (updatedPost && updatedPost.status === 'published') {
        setPost(updatedPost);
        
        // Update related posts
        const allPosts = getPublishedBlogPosts();
        const related = allPosts
          .filter((p) => p.category === updatedPost.category && p.id !== updatedPost.id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }

    // Listen for content updates
    const handleContentUpdate = () => {
      if (router.query.slug) {
        const slug = router.query.slug as string;
        const updatedPost = getBlogPost(slug);
        
        if (updatedPost && updatedPost.status === 'published') {
          setPost(updatedPost);
          
          const allPosts = getPublishedBlogPosts();
          const related = allPosts
            .filter((p) => p.category === updatedPost.category && p.id !== updatedPost.id)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      }
    };

    window.addEventListener('content-updated', handleContentUpdate);
    return () => window.removeEventListener('content-updated', handleContentUpdate);
  }, [router.query.slug]);

  if (router.isFallback) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
            <p className="text-stone-600">Loading post...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-stone-900 mb-4">Post Not Found</h1>
            <p className="text-stone-600 mb-8">The blog post you're looking for doesn't exist or has been unpublished.</p>
            <Link href="/blog" className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NextSeo
        title={`${post.title} - Balloon'd Blog`}
        description={post.excerpt}
        canonical={`https://balloond.com/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
          },
          images: [
            {
              url: `https://balloond.com${post.image}`,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }}
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm text-stone-500">
              <Link href="/" className="hover:text-rose-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-rose-500 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-stone-700">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-rose-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-block bg-rose-100 text-rose-600 text-sm px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-stone-600 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-stone-300 rounded-full flex items-center justify-center">
                  <span className="text-stone-600 font-medium text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-medium text-stone-900">{post.author}</div>
                  <div className="text-sm text-stone-500 flex items-center space-x-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="bg-stone-200 aspect-video rounded-lg flex items-center justify-center mb-8">
              <span className="text-6xl">📖</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg prose-stone max-w-none">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-stone-200">
                <h3 className="text-sm font-medium text-stone-700 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-stone-100 text-stone-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.authorBio && (
              <div className="mt-12 p-6 bg-stone-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-stone-600 font-medium">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-2">{post.author}</h3>
                    <p className="text-stone-600">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium text-stone-900 mb-4">Share this article</h3>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Share on Twitter
                </button>
                <button
                  onClick={() => {
                    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                    window.open(url, '_blank');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Share on Facebook
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-stone-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                    <article className="group cursor-pointer bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="bg-stone-200 aspect-video rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-4xl">📖</span>
                      </div>
                      <div className="space-y-3">
                        <span className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-semibold text-stone-900 group-hover:text-rose-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-stone-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
                          <span>{relatedPost.author}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">
                Enjoyed this article?
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Get our latest dating insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx global>{`
        .article-content h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1c1917;
        }
        
        .article-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1c1917;
        }
        
        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #44403c;
        }
        
        .article-content ul, .article-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .article-content li {
          margin-bottom: 0.5rem;
          color: #44403c;
        }
        
        .article-content blockquote {
          border-left: 4px solid #f43f5e;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #57534e;
          background: #fafaf9;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        
        .article-content strong {
          font-weight: 600;
          color: #1c1917;
        }
        
        .article-content em {
          font-style: italic;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get all published blog posts
  const posts = getPublishedBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);

  if (!post || post.status !== 'published') {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current post)
  const allPosts = getPublishedBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 60, // Revalidate every minute to pick up changes
  };
};

export default BlogPostPage;
