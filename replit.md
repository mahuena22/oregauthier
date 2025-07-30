# ORE IBOUKOUN GAUTHIER Portfolio

## Overview

This is a French-language professional portfolio website for ORE IBOUKOUN GAUTHIER, showcasing fashion and event management projects. The website is built as a static site using HTML, CSS, and JavaScript with modern web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Static HTML/CSS/JavaScript website
- **Styling Framework**: Tailwind CSS (via CDN)
- **Font System**: Google Fonts (Inter font family) + Font Awesome icons
- **Language**: French (fr locale)
- **Design Pattern**: Multi-page static site with shared styling and navigation

### Page Structure
- **Main Page**: `index.html` - Portfolio homepage with navigation
- **Project Pages**: Individual HTML files for each project showcase
  - `africa-awards.html` - Africa Fashion Awards project
  - `model-academy.html` - Model Academy Management project  
  - `royal-fashion.html` - Royal Fashion Event project

## Key Components

### Navigation System
- Fixed header with backdrop blur effect
- Responsive navigation with mobile menu support
- Smooth scroll functionality for internal navigation
- Consistent branding across all pages

### Styling System
- **Color Scheme**: Navy (#0B1A2F) as primary brand color
- **Typography**: Inter font family with multiple weights (300-700)
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Animations**: Custom fade-in animations and smooth transitions

### JavaScript Functionality
- Mobile menu toggle functionality
- Smooth scrolling for anchor links
- Header background changes on scroll
- Navigation link active states

## Data Flow

This is a static website with no backend or database. All content is embedded directly in the HTML files. Navigation between pages uses standard HTTP requests to load new HTML documents.

### Content Structure
- Portfolio information embedded in HTML
- Project details contained in individual page files
- Shared styling and navigation components across pages
- No dynamic content loading or state management required

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` - CSS framework
- **Google Fonts**: Inter font family and Font Awesome icons
- **Font Awesome**: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

### Browser Requirements
- Modern browser support for CSS Grid, Flexbox, and ES6 JavaScript
- Support for CSS custom properties and backdrop-filter

## Deployment Strategy

### Static Site Hosting
This portfolio is designed for static site hosting platforms such as:
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

### File Organization
- All assets (HTML, CSS, JS) are self-contained
- No build process required
- Direct deployment of source files
- CDN dependencies reduce bundle size

### Performance Considerations
- External CDN usage for major dependencies
- Minimal custom CSS and JavaScript
- Optimized for fast loading and good SEO
- Responsive images and modern CSS techniques

### Browser Compatibility
- Modern browser support required for backdrop-filter and CSS Grid
- Graceful degradation for older browsers
- Mobile-responsive design principles