import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Psychology Behind Voice-First Dating',
      excerpt: 'Discover why hearing someone\'s voice before seeing their photo creates deeper, more authentic connections.',
      author: 'Dr. Sarah Chen',
      date: 'December 18, 2024',
      readTime: '5 min read',
      category: 'Research',
      image: '/blog/voice-dating.jpg',
      featured: true
    },
    {
      id: 2,
      title: '10 Creative Ice Breakers That Actually Work',
      excerpt: 'Move beyond "Hey, what\'s up?" with these conversation starters that spark real dialogue.',
      author: 'Emma Rodriguez',
      date: 'December 15, 2024',
      readTime: '4 min read',
      category: 'Dating Tips',
      image: '/blog/ice-breakers.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Building Confidence in the Digital Dating World',
      excerpt: 'Expert tips for overcoming dating app anxiety and presenting your authentic self online.',
      author: 'Marcus Thompson',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'Wellness',
      image: '/blog/confidence.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'The Science of Meaningful Matches',
      excerpt: 'How our algorithm prioritizes compatibility factors that lead to lasting relationships.',
      author: 'Tech Team',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: '/blog/algorithm.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Success Stories: Real Love Found on Balloon\'d',
      excerpt: 'Meet couples who found lasting love through our platform and learn from their journeys.',
      author: 'Community Team',
      date: 'December 5, 2024',
      readTime: '8 min read',
      category: 'Success Stories',
      image: '/blog/success-stories.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Red Flags vs. Deal Breakers: Know the Difference',
      excerpt: 'Learn to identify warning signs and distinguish between minor concerns and serious issues.',
      author: 'Dr. Michael Park',
      date: 'December 1, 2024',
      readTime: '5 min read',
      category: 'Dating Safety',
      image: '/blog/red-flags.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'Dating Tips', 'Research', 'Technology', 'Success Stories', 'Wellness', 'Dating Safety'];
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <button className="bg-white text-rose-600 hover:bg-stone-50 px-6 py-2 rounded-full font-medium transition-colors">
                        Read More
                      </button>
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
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
                      <span className="text-sm text-stone-500">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-stone-100 hover:bg-stone-200 text-stone-700 px-8 py-3 rounded-full font-medium transition-colors">
                Load More Posts
              </button>
            </div>
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
    </>
  );
};

export default Blog;
