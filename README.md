# Tech-sess Website

A modern, responsive personal brand website for Hassan Shahid, focused on empowering diversity in tech through advocacy, education, and strategic partnerships.

## 🚀 Live Demo

**Development Server:** `http://localhost:3000`  
**Live Production:** https://techsess-website-q6h8rpwjf-habibshahid2013s-projects.vercel.app  
**GitHub Repository:** [https://github.com/habibshahid2013/techsess-website](https://github.com/habibshahid2013/techsess-website)

## 🎯 Project Overview

Tech-sess is a personal brand website designed to:
- Establish Hassan as a leading voice in tech diversity advocacy
- Build a community of diverse tech professionals
- Enable consultation bookings and service inquiries
- Showcase educational programs and partnership opportunities

## ✨ Features

### ✅ Completed
- **Modern Design System** - Custom electric blue theme with professional typography
- **Responsive Homepage** - Mobile-first design with smooth animations
- **Interactive Components** - Animated stats, hover effects, and scroll-triggered animations
- **SEO Optimized** - Proper metadata, Open Graph, and Twitter cards
- **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- **Performance** - Optimized images, lazy loading, and fast load times

### 🏗️ Homepage Sections
1. **Hero Section** - Compelling introduction with clear CTAs
2. **Stats Section** - Animated counters showing impact metrics
3. **Mission Section** - Personal story and brand mission
4. **Services Preview** - Overview of consulting and educational offerings
5. **Community CTA** - Email signup with success animations

### 🎨 Design System
- **Colors:** Electric Blue (#007BFF), Deep Charcoal (#111111), Accent Yellow (#FFD700)
- **Typography:** Poppins (headings), Inter (body text)
- **Animations:** Framer Motion with scroll-triggered effects
- **Components:** shadcn/ui with custom styling

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom Design Tokens
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Backend:** Firebase (planned)
- **Deployment:** Vercel (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/habibshahid2013/techsess-website.git
   cd techsess-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
techsess-website/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout with Navbar/Footer
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── home/              # Homepage sections
│   │   ├── layout/            # Navbar, Footer
│   │   ├── shared/            # Reusable components
│   │   └── ui/                # shadcn/ui components
│   ├── lib/                   # Utilities and configs
│   └── content/               # Static content
├── styles/
│   └── design-tokens.css      # Custom CSS variables
└── public/                    # Static assets
```

## 🎨 Customization

### Design Tokens
All colors, typography, and spacing are defined in `styles/design-tokens.css`:

```css
:root {
  --electric-blue: #007BFF;
  --deep-charcoal: #111111;
  --accent-yellow: #FFD700;
  /* ... more tokens */
}
```

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` with your content
3. Update navigation in `src/components/layout/Navbar.tsx`

## 📋 Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and design system
- [x] Homepage with all sections
- [x] Responsive design and animations
- [x] SEO optimization

### Phase 2: Content & Pages 🚧
- [ ] About page with personal story
- [ ] Services page with detailed offerings
- [ ] Community page with signup form
- [ ] Book Consultation page
- [ ] Contact page

### Phase 3: Backend & Forms 🚧
- [ ] Firebase integration
- [ ] Email subscription API
- [ ] Contact form handling
- [ ] Consultation booking system

### Phase 4: Deployment & Launch 🚧
- [ ] Vercel deployment
- [ ] Custom domain setup
- [ ] Analytics integration
- [ ] Performance optimization

## 🤝 Contributing

This is a personal brand website, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary to Hassan Shahid / Tech-sess.

## 📞 Contact

**Hassan Shahid**  
- Website: [techsess.com](https://techsess.com) (coming soon)
- Email: hassan@techsess.com
- LinkedIn: [linkedin.com/in/hassanshahid](https://linkedin.com/in/hassanshahid)

---

**Built with ❤️ for diversity in tech**