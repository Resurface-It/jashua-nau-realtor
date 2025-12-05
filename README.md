# J.NAU REAL ESTATE - Eugene & Springfield Realtor Website

A high-converting, SEO-optimized Next.js 14 realtor website for J.NAU REAL ESTATE serving Eugene, Springfield, and Lane County, Oregon.

## Features

- **SEO Optimized**: Comprehensive metadata, schema markup, and local SEO optimization
- **Local Content**: Detailed city and neighborhood pages for Eugene and Springfield
- **Lead Capture**: Multiple lead forms for contact, home valuation, and newsletter
- **Performance**: Optimized for Core Web Vitals with Next.js Image optimization
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Semantic HTML, ARIA labels, and keyboard navigation support

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel or any Node.js hosting

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
/app
  /(routes)          # All page routes
  /api               # API routes for forms
  layout.tsx         # Root layout
  globals.css        # Global styles
/components
  /ui                # Reusable UI components
  /seo               # SEO components (schema markup)
/lib
  neighborhoods.ts   # Neighborhood data
/data
  leads.json        # Contact form submissions
  valuations.json   # Home valuation requests
  newsletter.json   # Newsletter signups
```

## Pages

- `/` - Homepage
- `/buy` - Buyer guide
- `/sell` - Seller guide
- `/about` - About page
- `/contact` - Contact page
- `/home-valuation` - Home valuation landing page
- `/resources` - Blog/guides index
- `/resources/[slug]` - Individual articles
- `/testimonials` - Client testimonials
- `/faq` - FAQ page
- `/eugene-real-estate` - Eugene city page
- `/springfield-real-estate` - Springfield city page
- `/eugene/[neighborhood]` - Eugene neighborhood pages
- `/springfield/[neighborhood]` - Springfield neighborhood pages

## API Routes

- `/api/lead` - Contact form submissions
- `/api/valuation` - Home valuation requests
- `/api/newsletter` - Newsletter signups

All form submissions are saved to JSON files in `/data` and include TODO comments for integrating with CRM or email services.

## Contact Information

- **Phone**: (541) 852-2328
- **Email**: Jnaureg@gmail.com
- **Instagram**: @joshua_nau
- **Brokerage**: eXp Realty

## Notes

- All images use placeholder URLs from Unsplash. Replace with actual images.
- Form submissions are saved to JSON files. Integrate with your CRM or email service.
- Office address is a placeholder. Update with actual address.
- Logo is text-based. Replace with image logo if desired.

## License

Private project for J.NAU REAL ESTATE.

