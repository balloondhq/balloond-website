// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create default admin user
  const adminPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || 'admin@balloond.com' },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || 'admin@balloond.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'ADMIN',
    },
  });

  // Create default site content
  const defaultContent = [
    {
      id: 'hero-headline',
      section: 'Homepage Hero',
      title: 'Main Headline',
      content: 'One pop away from what you\'ve been waiting for',
      published: true,
    },
    {
      id: 'hero-subtitle',
      section: 'Homepage Hero',
      title: 'Subtitle',
      content: 'Break through the noise of modern dating. Pop the balloon of small talk and endless swiping with authentic, fun connections.',
      published: true,
    },
    {
      id: 'about-mission',
      section: 'About Page',
      title: 'Mission Statement',
      content: 'Balloon\'d is built on the belief that anyone looking for love should be able to find it. We\'re changing the game by putting voice and personality first.',
      published: true,
    },
    {
      id: 'careers-intro',
      section: 'Careers Page',
      title: 'Page Introduction',
      content: 'Help us create a world where authentic connections flourish. We\'re building the future of dating, one meaningful match at a time.',
      published: true,
    },
  ];

  for (const content of defaultContent) {
    await prisma.siteContent.upsert({
      where: { id: content.id },
      update: {},
      create: {
        ...content,
        createdById: admin.id,
      },
    });
  }

  // Create sample blog posts
  const samplePosts = [
    {
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

        <p>Ready to pop the balloon of superficial swiping? Download Balloon'd today and discover the power of voice-first connections.</p>
      `,
      author: 'Dr. Sarah Chen',
      authorBio: 'Dr. Sarah Chen is a relationship psychology expert with over 15 years of experience studying human connections.',
      category: 'Research',
      tags: ['Psychology', 'Voice Dating', 'Relationships', 'Research'],
      featured: true,
      published: true,
      createdById: admin.id,
    },
    {
      slug: 'creative-ice-breakers-that-work',
      title: '10 Creative Ice Breakers That Actually Work',
      excerpt: 'Move beyond "Hey, what\'s up?" with these conversation starters that spark real dialogue.',
      content: `
        <p>We've all been there—staring at a blank message box, wondering how to start a conversation that doesn't sound like every other generic opener. The good news? Breaking the ice doesn't have to be complicated or cheesy.</p>

        <h2>Why Ice Breakers Matter</h2>
        <p>First impressions count, especially in digital dating. A thoughtful opening message shows that you've taken time to read someone's profile and are genuinely interested in getting to know them.</p>

        <p>Ready to put these ice breakers to work? Download Balloon'd and start making meaningful connections today!</p>
      `,
      author: 'Emma Rodriguez',
      authorBio: 'Emma Rodriguez is a dating coach and communication expert.',
      category: 'Dating Tips',
      tags: ['Dating Tips', 'Communication', 'Conversation'],
      featured: false,
      published: true,
      createdById: admin.id,
    },
  ];

  for (const post of samplePosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  // Create sample career positions
  const sampleCareers = [
    {
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
        'Experience with cloud platforms (AWS/GCP)',
      ],
      responsibilities: [
        'Develop and maintain our core dating platform',
        'Implement new features and improvements',
        'Optimize application performance and scalability',
        'Collaborate with design and product teams',
        'Mentor junior developers',
      ],
      published: true,
      createdById: admin.id,
    },
    {
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
        'Portfolio demonstrating mobile and web design',
      ],
      responsibilities: [
        'Design user interfaces for mobile and web applications',
        'Conduct user research and usability testing',
        'Create and maintain design systems',
        'Collaborate with engineering and product teams',
        'Present design concepts to stakeholders',
      ],
      published: true,
      createdById: admin.id,
    },
  ];

  for (const career of sampleCareers) {
    await prisma.career.create({
      data: career,
    });
  }

  console.log('✅ Database seeded successfully');
  console.log('👤 Admin user:', process.env.ADMIN_EMAIL || 'admin@balloond.com');
  console.log('🔑 Admin password:', process.env.ADMIN_PASSWORD || 'admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
