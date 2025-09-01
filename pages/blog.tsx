// pages/blog.tsx
import type { NextPage, GetServerSideProps } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { prisma } from '../lib/prisma';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  readTime: string;
  category: string;
  featured: boolean;
}

interface BlogProps {
  posts: BlogPost[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Dating Tips', 'Research', 'Technology', 'Success Stories', 'Wellness', 'Dating Safety'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  
  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <NextSeo
        title="Blog - Balloon'd"
        description="Dating advice, relationship tips, and insights from the Balloon'd team. Learn how to build meaningful connections in the modern dating world."
        canonical="https://balloond.com/blog"
      />
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-rose-50 to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-stone-900 mb-6">
              The Balloon'd Blog
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Dating advice, relationship insights, and stories from our community. 
              Learn how to build authentic connections in the modern dating world.
            </p>
            <div className="inline-flex items-center space-x-2 text-rose-600 font-medium">
              <span>💝</span>
              <span>New posts every week</span>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 text-white">
                    <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
                      Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-rose-100 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-rose-100">
                        <span>{featuredPost.author}</span>
                        <span>•</span>
                        <span>{new Date(featuredPost.createdAt).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <button className="bg-white text-rose-600 hover:bg-stone-50 px-6 py-2 rounded-full font-medium transition-colors">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-rose-400 flex items-center justify-center p-8">
                    <div className="text-6xl">🎈</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-stone-50 border-b border-stone-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-rose-500 text-white' 
                      : 'bg-white text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {regularPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-stone-900 mb-2">No posts found</h3>
                <p className="text-stone-600">
                  {selectedCategory === 'All' 
                    ? 'No blog posts have been published yet.' 
                    : `No posts found in the "${selectedCategory}" category.`}
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <article className="group cursor-pointer">
                      <div className="bg-stone-200 aspect-video rounded-lg mb-4 flex items-center justify-center group-hover:bg-stone-300 transition-colors">
                        <span className="text-4xl">📖</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-stone-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-stone-900 group-hover:text-rose-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-stone-600 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                          <span className="text-sm text-stone-500">{post.author}</span>
                          <span className="text-sm text-stone-500">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-stone-900 mb-4">
                Never Miss a Post
              </h2>
              <p className="text-lg text-stone-600 mb-8">
                Get our latest dating insights and relationship advice delivered to your inbox.
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
              <p className="text-sm text-stone-500 mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      <style jsx global>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        author: true,
        createdAt: true,
        readTime: true,
        category: true,
        featured: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return {
      props: {
        posts: posts.map(post => ({
          ...post,
          createdAt: post.createdAt.toISOString(),
        })),
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Blog;
