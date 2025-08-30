// lib/content-manager.ts
export interface BlogPost {
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
  status: 'published' | 'draft';
}

export interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: 'active' | 'closed';
  datePosted: string;
}

export interface SiteContent {
  id: string;
  section: string;
  title: string;
  content: string;
  lastModified: string;
  status: 'published' | 'draft';
}

// Default data
const defaultBlogPosts: BlogPost[] = [
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

      <p>Ready to pop the balloon of superficial swiping? Download Balloon'd today and discover the power of voice-first connections.</p>
    `,
    author: 'Dr. Sarah Chen',
    authorBio: 'Dr. Sarah Chen is a relationship psychology expert with over 15 years of experience studying human connections and digital communication patterns.',
    authorAvatar: '/avatars/sarah-chen.jpg',
    date: '2024-12-18',
    readTime: '5 min read',
    category: 'Research',
    tags: ['Psychology', 'Voice Dating', 'Relationships', 'Research'],
    image: '/blog/voice-dating.jpg',
    featured: true,
    status: 'published'
  },
  {
    id: 2,
    slug: 'creative-ice-breakers-that-work',
    title: '10 Creative Ice Breakers That Actually Work',
    excerpt: 'Move beyond "Hey, what\'s up?" with these conversation starters that spark real dialogue.',
    content: `
      <p>We've all been there—staring at a blank message box, wondering how to start a conversation that doesn't sound like every other generic opener. The good news? Breaking the ice doesn't have to be complicated or cheesy. With the right approach, you can spark engaging conversations that lead to meaningful connections.</p>

      <h2>Why Ice Breakers Matter</h2>
      <p>First impressions count, especially in digital dating. A thoughtful opening message shows that you've taken time to read someone's profile and are genuinely interested in getting to know them.</p>

      <h2>10 Proven Ice Breakers</h2>
      
      <h3>1. The Genuine Compliment + Question</h3>
      <p><em>"I love that you volunteer at the animal shelter! What's the most memorable experience you've had there?"</em></p>
      <p>This approach shows you've read their profile while opening the door for storytelling.</p>

      <h3>2. The Hypothetical Scenario</h3>
      <p><em>"If you could have dinner with anyone, living or dead, who would it be and what would you ask them?"</em></p>
      <p>Hypotheticals reveal personality and values while keeping things playful.</p>

      <p>Ready to put these ice breakers to work? Download Balloon'd and start making meaningful connections today!</p>
    `,
    author: 'Emma Rodriguez',
    authorBio: 'Emma Rodriguez is a dating coach and communication expert who has helped thousands of people improve their dating confidence.',
    authorAvatar: '/avatars/emma-rodriguez.jpg',
    date: '2024-12-15',
    readTime: '4 min read',
    category: 'Dating Tips',
    tags: ['Dating Tips', 'Communication', 'Conversation'],
    image: '/blog/ice-breakers.jpg',
    featured: false,
    status: 'published'
  }
];

const defaultJobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / London',
    type: 'Full-time',
    description: 'Help us build the future of dating with cutting-edge technology. Join our engineering team to create scalable, user-friendly applications that connect people authentically.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with database design and optimization',
      'Strong problem-solving skills',
      'Experience with cloud platforms (AWS/GCP)'
    ],
    responsibilities: [
      'Develop and maintain our core dating platform',
      'Implement new features and improvements',
      'Optimize application performance and scalability',
      'Collaborate with design and product teams',
      'Mentor junior developers'
    ],
    status: 'active',
    datePosted: '2024-12-20'
  },
  {
    id: 2,
    title: 'Product Designer',
    department: 'Design',
    location: 'London / Remote',
    type: 'Full-time',
    description: 'Create beautiful, intuitive experiences for our users. Design the interfaces that help people make meaningful connections.',
    requirements: [
      '3+ years of product design experience',
      'Proficiency in Figma and design systems',
      'Strong understanding of UX principles',
      'Experience with user research and testing',
      'Portfolio demonstrating mobile and web design'
    ],
    responsibilities: [
      'Design user interfaces for mobile and web applications',
      'Conduct user research and usability testing',
      'Create and maintain design systems',
      'Collaborate with engineering and product teams',
      'Present design concepts to stakeholders'
    ],
    status: 'active',
    datePosted: '2024-12-19'
  },
  {
    id: 3,
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'London',
    type: 'Full-time',
    description: 'Drive user acquisition and brand awareness globally. Help spread the word about authentic, voice-first dating.',
    requirements: [
      '4+ years of digital marketing experience',
      'Experience with social media marketing',
      'Strong analytical and data interpretation skills',
      'Creative content creation abilities',
      'Experience with dating/lifestyle brands preferred'
    ],
    responsibilities: [
      'Develop and execute marketing strategies',
      'Manage social media presence and campaigns',
      'Create compelling content and campaigns',
      'Analyze marketing performance and optimize',
      'Collaborate with influencers and partners'
    ],
    status: 'active',
    datePosted: '2024-12-18'
  }
];

const defaultSiteContent: SiteContent[] = [
  {
    id: 'hero-headline',
    section: 'Homepage Hero',
    title: 'Main Headline',
    content: 'One pop away from what you\'ve been waiting for',
    lastModified: '2024-12-20',
    status: 'published'
  },
  {
    id: 'hero-subtitle',
    section: 'Homepage Hero',
    title: 'Subtitle',
    content: 'Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections.',
    lastModified: '2024-12-20',
    status: 'published'
  },
  {
    id: 'about-mission',
    section: 'About Page',
    title: 'Mission Statement',
    content: 'Balloon\'d is built on the belief that anyone looking for love should be able to find it. We\'re changing the game by putting voice and personality first.',
    lastModified: '2024-12-19',
    status: 'published'
  },
  {
    id: 'careers-intro',
    section: 'Careers Page',
    title: 'Page Introduction',
    content: 'Help us create a world where authentic connections flourish. We\'re building the future of dating, one meaningful match at a time.',
    lastModified: '2024-12-17',
    status: 'published'
  }
];

// Storage keys
const STORAGE_KEYS = {
  BLOG_POSTS: 'balloond_blog_posts',
  JOB_POSITIONS: 'balloond_job_positions',
  SITE_CONTENT: 'balloond_site_content'
};

// Utility functions for browser storage
export const isClient = typeof window !== 'undefined';

const getStorageData = <T>(key: string, defaultData: T[]): T[] => {
  if (!isClient) return defaultData;
  
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error(`Error reading from localStorage for key ${key}:`, error);
  }
  
  return defaultData;
};

const setStorageData = <T>(key: string, data: T[]): void => {
  if (!isClient) return;
  
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error writing to localStorage for key ${key}:`, error);
  }
};

// Blog Posts Management
export const getBlogPosts = (): BlogPost[] => {
  return getStorageData(STORAGE_KEYS.BLOG_POSTS, defaultBlogPosts);
};

export const setBlogPosts = (posts: BlogPost[]): void => {
  setStorageData(STORAGE_KEYS.BLOG_POSTS, posts);
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug);
};

export const addBlogPost = (post: Omit<BlogPost, 'id'>): BlogPost => {
  const posts = getBlogPosts();
  const newId = Math.max(...posts.map(p => p.id), 0) + 1;
  const newPost = { ...post, id: newId };
  const updatedPosts = [...posts, newPost];
  setBlogPosts(updatedPosts);
  return newPost;
};

export const updateBlogPost = (id: number, updates: Partial<BlogPost>): BlogPost | null => {
  const posts = getBlogPosts();
  const index = posts.findIndex(post => post.id === id);
  
  if (index === -1) return null;
  
  const updatedPost = { ...posts[index], ...updates };
  const updatedPosts = [...posts];
  updatedPosts[index] = updatedPost;
  setBlogPosts(updatedPosts);
  return updatedPost;
};

export const deleteBlogPost = (id: number): boolean => {
  const posts = getBlogPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length === posts.length) return false;
  
  setBlogPosts(filteredPosts);
  return true;
};

// Job Positions Management
export const getJobPositions = (): JobPosition[] => {
  return getStorageData(STORAGE_KEYS.JOB_POSITIONS, defaultJobPositions);
};

export const setJobPositions = (positions: JobPosition[]): void => {
  setStorageData(STORAGE_KEYS.JOB_POSITIONS, positions);
};

export const getJobPosition = (id: number): JobPosition | undefined => {
  const positions = getJobPositions();
  return positions.find(position => position.id === id);
};

export const addJobPosition = (position: Omit<JobPosition, 'id'>): JobPosition => {
  const positions = getJobPositions();
  const newId = Math.max(...positions.map(p => p.id), 0) + 1;
  const newPosition = { ...position, id: newId };
  const updatedPositions = [...positions, newPosition];
  setJobPositions(updatedPositions);
  return newPosition;
};

export const updateJobPosition = (id: number, updates: Partial<JobPosition>): JobPosition | null => {
  const positions = getJobPositions();
  const index = positions.findIndex(position => position.id === id);
  
  if (index === -1) return null;
  
  const updatedPosition = { ...positions[index], ...updates };
  const updatedPositions = [...positions];
  updatedPositions[index] = updatedPosition;
  setJobPositions(updatedPositions);
  return updatedPosition;
};

export const deleteJobPosition = (id: number): boolean => {
  const positions = getJobPositions();
  const filteredPositions = positions.filter(position => position.id !== id);
  
  if (filteredPositions.length === positions.length) return false;
  
  setJobPositions(filteredPositions);
  return true;
};

// Site Content Management
export const getSiteContent = (): SiteContent[] => {
  return getStorageData(STORAGE_KEYS.SITE_CONTENT, defaultSiteContent);
};

export const setSiteContent = (content: SiteContent[]): void => {
  setStorageData(STORAGE_KEYS.SITE_CONTENT, content);
};

export const getSiteContentById = (id: string): SiteContent | undefined => {
  const content = getSiteContent();
  return content.find(item => item.id === id);
};

export const updateSiteContent = (id: string, updates: Partial<SiteContent>): SiteContent | null => {
  const content = getSiteContent();
  const index = content.findIndex(item => item.id === id);
  
  if (index === -1) return null;
  
  const updatedItem = { 
    ...content[index], 
    ...updates,
    lastModified: new Date().toISOString().split('T')[0]
  };
  const updatedContent = [...content];
  updatedContent[index] = updatedItem;
  setSiteContent(updatedContent);
  return updatedItem;
};

export const addSiteContent = (content: Omit<SiteContent, 'lastModified'>): SiteContent => {
  const allContent = getSiteContent();
  const newContent = { 
    ...content, 
    lastModified: new Date().toISOString().split('T')[0]
  };
  const updatedContent = [...allContent, newContent];
  setSiteContent(updatedContent);
  return newContent;
};

// Utility functions for getting published content
export const getPublishedBlogPosts = (): BlogPost[] => {
  return getBlogPosts().filter(post => post.status === 'published');
};

export const getActiveBlogPosts = (): BlogPost[] => {
  return getBlogPosts().filter(post => post.status === 'published');
};

export const getActiveJobPositions = (): JobPosition[] => {
  return getJobPositions().filter(position => position.status === 'active');
};

export const getPublishedSiteContent = (): SiteContent[] => {
  return getSiteContent().filter(content => content.status === 'published');
};

// Initialize default data if storage is empty
export const initializeDefaultData = (): void => {
  if (!isClient) return;
  
  // Initialize blog posts if not exists
  if (!localStorage.getItem(STORAGE_KEYS.BLOG_POSTS)) {
    setBlogPosts(defaultBlogPosts);
  }
  
  // Initialize job positions if not exists
  if (!localStorage.getItem(STORAGE_KEYS.JOB_POSITIONS)) {
    setJobPositions(defaultJobPositions);
  }
  
  // Initialize site content if not exists
  if (!localStorage.getItem(STORAGE_KEYS.SITE_CONTENT)) {
    setSiteContent(defaultSiteContent);
  }
};
