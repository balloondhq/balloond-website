# Balloon'd Website

A modern, responsive marketing website for Balloon'd - the dating app that helps you "Pop into Something Real".

## Features

- 🎨 Modern design with Hinge-style layout and Balloon'd branding
- 📱 Fully responsive (mobile-first approach)
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Styled with Tailwind CSS
- 🔍 SEO optimized with meta tags, sitemap, and robots.txt
- ♿ Accessible with semantic HTML and alt text
- 🚀 Ready for Vercel/Render deployment

## Design System

### Colors
- **Background**: Off-white bone/cream (`#fdfdf9`)
- **Primary**: Ruby burgundy (`#8A1C32`)
- **Accent**: Gold gradient (`#FFD700` → `#DAA520`)

### Typography
- Clean, modern sans-serif fonts
- Proper heading hierarchy for accessibility

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

## Project Structure

```
├── components/          # Reusable React components
│   ├── Hero.tsx        # Hero section with app badges
│   ├── Features.tsx    # Three-column features section
│   ├── Mood.tsx        # Dating mood section
│   ├── Premium.tsx     # Premium upsell section
│   ├── Footer.tsx      # Footer with links and social
│   └── Meta.tsx        # SEO meta tags component
├── pages/              # Next.js pages
│   ├── index.tsx       # Main landing page
│   ├── _app.tsx        # App wrapper
│   └── _document.tsx   # Document structure
├── public/             # Static assets
│   ├── appstore-badge.svg
│   ├── googleplay-badge.svg
│   ├── logo.svg
│   ├── hero.svg
│   ├── premium.svg
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── styles/             # CSS files
    ├── globals.css     # Global styles
    └── tailwind.css    # Tailwind imports
```

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Update `next.config.js` if needed for custom domains

### Render
1. Connect repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm start`

## Customization

### Replacing Images
Replace the SVG placeholders in `/public/` with your actual assets:
- `hero.svg` - Hero section phone mockup
- `premium.svg` - Premium section golden balloons
- `logo.svg` - Balloon'd logo
- App store badges are already styled and ready to use

### Content Updates
- Update text content in component files
- Modify colors in `tailwind.config.js`
- Add new sections by creating components and importing them in `pages/index.tsx`

## Performance

The website is optimized for performance with:
- Next.js Image optimization
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle
- Semantic HTML for better SEO
- Proper meta tags and structured data

Target Lighthouse score: 90+

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)  
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

© 2025 Balloon'd. All rights reserved.
