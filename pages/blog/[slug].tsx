// pages/blog/[slug].tsx
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

interface BlogPostProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

// Mock blog posts data (in a real app, this would come from a CMS or database)
const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'psychology-behind-voice-first-dating',
    title: 'The Psychology Behind Voice-First Dating',
    excerpt: 'Discover why hearing someone\'s voice before seeing their photo creates deeper, more authentic connections.',
    content: `
      <p>In the world of digital dating, we've become accustomed to making split-second decisions based on photos. But what if there was a better way to form genuine connections? At Balloon'd, we believe that voice-first dating represents a revolutionary approach to finding meaningful relationships.</p>

      <h2>The Science of Voice Connection</h2>
      <p>Research from leading psychology institutions shows that the human voice carries significantly more emotional information than visual cues alone. When we hear someone speak, our brains process not just the words, but also:</p>
      
      <ul>
        <li>Emotional undertones and authenticity</li>
        <li>Personality traits and confidence levels</li>
        <li>Cultural background and communication style</li>
        <li>Energy and enthusiasm</li>
      </ul>

      <p>Dr. Judith Karp from the University of California found that 38% of communication effectiveness comes from tone of voice, compared to just 7% from actual words and 55% from body language. In a digital dating context, this means voice becomes our primary gateway to understanding someone's true personality.</p>

      <h2>Breaking Down Visual Bias</h2>
      <p>Traditional dating apps have created a culture of instant visual judgments. Studies show that users spend an average of just 90 seconds looking at a profile before making a decision. This rapid-fire approach often leads to:</p>

      <blockquote>
        <p>"When we remove the immediate visual component, people are forced to connect on a deeper level. They listen more intently, ask better questions, and form connections based on personality compatibility rather than physical attraction alone." - Dr. Sarah Chen, Relationship Psychology Expert</p>
      </blockquote>

      <h2>The Balloon'd Difference</h2>
      <p>Our voice-first approach encourages users to:</p>
      
      <ol>
        <li><strong>Listen actively:</strong> Pay attention to what someone is actually saying</li>
        <li><strong>Ask meaningful questions:</strong> Dive deeper than surface-level topics</li>
        <li><strong>Express authenticity:</strong> Be genuine without the pressure of visual perfection</li>
        <li><strong>Build anticipation:</strong> Create excitement for eventual face-to-face meetings</li>
      </ol>

      <p>The results speak for themselves. Our internal data shows that connections made through voice-first interactions have a 73% higher chance of leading to meaningful, long-term relationships compared to traditional photo-based matching.</p>

      <h2>Making Voice-First Work for You</h2>
      <p>Ready to try voice-first dating? Here are some tips to make the most of your experience:</p>

      <ul>
        <li><strong>Speak naturally:</strong> Don't try to change your voice or accent</li>
        <li><strong>Share stories:</strong> Use anecdotes to reveal your personality</li>
        <li><strong>Ask follow-up questions:</strong> Show genuine interest in responses</li>
        <li><strong>Be patient:</strong> Allow conversations to develop organically</li>
      </ul>

      <p>Voice-first dating isn't just a trend—it's a return to the fundamentals of human connection. By prioritizing conversation and personality over appearance, we're helping people find relationships built on genuine compatibility and mutual understanding.</p>

      <p>Ready to pop the balloon of superficial swiping? Download Balloon'd today and discover the power of voice-first connections.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'Dr. Sarah Chen is a relationship psychology expert with over 15 years of experience studying human connections and digital communication patterns.',
    authorAvatar: '/avatars/sarah-chen.jpg',
    date: 'December 18, 2024',
    readTime: '5 min read',
    category: 'Research',
    tags: ['Psychology', 'Voice Dating', 'Relationships', 'Research'],
    image: '/blog/voice-dating.jpg',
    featured: true
  },
  {
    id: 2,
    slug: 'creative-ice-breakers-that-work',
    title: '10 Creative Ice Breakers That Actually Work',
    excerpt: 'Move beyond "Hey, what\'s up?" with these conversation starters that spark real dialogue.',
    content: `
      <p>We've all been there—staring at a blank message box, wondering how to start a conversation that doesn't sound like every other generic opener. The good news? Breaking the ice doesn't have to be complicated or cheesy. With the right approach, you can spark engaging conversations that lead to meaningful connections.</p>

      <h2>Why Ice Breakers Matter</h2>
      <p>First impressions count, especially in digital dating. A thoughtful opening message shows that you've taken time to read someone's profile and are genuinely interested in getting to know them. It sets the tone for the entire conversation and demonstrates your communication skills from the start.</p>

      <h2>10 Proven Ice Breakers</h2>
      
      <h3>1. The Genuine Compliment + Question</h3>
      <p><em>"I love that you volunteer at the animal shelter! What's the most memorable experience you've had there?"</em></p>
      <p>This approach shows you've read their profile while opening the door for storytelling.</p>

      <h3>2. The Hypothetical Scenario</h3>
      <p><em>"If you could have dinner with anyone, living or dead, who would it be and what would you ask them?"</em></p>
      <p>Hypotheticals reveal personality and values while keeping things playful.</p>

      <h3>3. The Shared Interest Deep Dive</h3>
      <p><em>"I saw you're into hiking! Have you done any of the trails around [local area]? I'm always looking for new spots to explore."</em></p>
      <p>Perfect for finding common ground and potential date activities.</p>

      <h3>4. The Creative Would-You-Rather</h3>
      <p><em>"Would you rather have the ability to speak all languages or play every musical instrument? (I'm team languages myself!)"</em></p>
      <p>These questions are fun and reveal preferences and reasoning.</p>

      <h3>5. The Travel Memory Trigger</h3>
      <p><em>"Your photo from Italy looks amazing! What was the highlight of that trip?"</em></p>
      <p>Travel stories are usually positive and give insight into their adventures.</p>

      <h3>6. The Food Connection</h3>
      <p><em>"I see you're a coffee enthusiast! What's your go-to order, and have you found any hidden gem cafes lately?"</em></p>
      <p>Food and drinks are universal conversation starters with built-in date potential.</p>

      <h3>7. The Childhood Curiosity</h3>
      <p><em>"What did you want to be when you grew up? Did you end up anywhere close to that dream?"</em></p>
      <p>This reveals childhood personality and current life satisfaction.</p>

      <h3>8. The Skills Showcase</h3>
      <p><em>"I noticed you're into rock climbing—that's so cool! How did you get started, and what's been your biggest climbing challenge?"</em></p>
      <p>Shows genuine interest in their hobbies and achievements.</p>

      <h3>9. The Pop Culture Connection</h3>
      <p><em>"I saw you mentioned loving sci-fi movies. Have you watched [recent movie]? I'm always looking for good recommendations!"</em></p>
      <p>Great for finding shared interests and future conversation topics.</p>

      <h3>10. The Thoughtful Observation</h3>
      <p><em>"Your profile shows someone who values creativity and adventure. What's something creative you've done recently that you're proud of?"</em></p>
      <p>Demonstrates that you've thoughtfully considered their overall profile.</p>

      <h2>Ice Breakers to Avoid</h2>
      <ul>
        <li><strong>"Hey" or "Hi"</strong> - Too generic and puts all the work on them</li>
        <li><strong>Physical compliments only</strong> - Can come across as superficial</li>
        <li><strong>Copy-paste messages</strong> - People can tell when you're not being genuine</li>
        <li><strong>Overly sexual innuendos</strong> - Keep first messages appropriate</li>
        <li><strong>Negative or controversial topics</strong> - Save heavy discussions for later</li>
      </ul>

      <h2>The Follow-Up Formula</h2>
      <p>A great ice breaker is just the beginning. Here's how to keep the conversation flowing:</p>
      
      <ol>
        <li><strong>Listen actively</strong> to their responses</li>
        <li><strong>Ask follow-up questions</strong> that show you're engaged</li>
        <li><strong>Share related experiences</strong> from your own life</li>
        <li><strong>Build on common interests</strong> you discover</li>
        <li><strong>Suggest meeting in person</strong> when the timing feels right</li>
      </ol>

      <h2>Practice Makes Perfect</h2>
      <p>Remember, the best ice breaker is one that feels authentic to you. These examples are starting points—adapt them to match your personality and the person you're messaging. The goal isn't to be perfect; it's to be genuine and start a real conversation.</p>

      <p>Ready to put these ice breakers to work? Download Balloon'd and start making meaningful connections today!</p>
    `,
    author: 'Emma Rodriguez',
    authorBio: 'Emma Rodriguez is a dating coach and communication expert who has helped thousands of people improve their dating confidence and conversation skills.',
    authorAvatar: '/avatars/emma-rodriguez.jpg',
    date: 'December 15, 2024',
    readTime: '4 min read',
    category: 'Dating Tips',
    tags: ['Dating Tips', 'Communication', 'Conversation', 'Ice Breakers'],
    image: '/blog/ice-breakers.jpg',
    featured: false
  }
];

const BlogPostPage: NextPage<BlogPostProps> = ({ post, relatedPosts }) => {
  const router = useRouter();

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
            <p className="text-stone-600 mb-8">The blog post you're looking for doesn't exist.</p>
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

            {/* Author Bio */}
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

            {/* Share Buttons */}
            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium text-stone-900 mb-4">Share this article</h3>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Share on Twitter
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Share on Facebook
                </button>
                <button className="bg-stone-600 hover:bg-stone-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
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
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600, // Revalidate every hour
  };
};

export default BlogPostPage;