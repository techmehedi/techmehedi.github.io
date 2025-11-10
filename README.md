# Mehedi Hasan - Portfolio Website

A modern, award-winning portfolio website built with Next.js 14, TypeScript, and modern design principles inspired by Awwwards, Dark.design, and Shots.so.

## Features

- 🎨 Modern dark theme design
- 🚀 Next.js 14 with App Router
- 📱 Fully responsive
- ⚡ Optimized performance
- 🎭 Smooth animations with GSAP
- 🎨 3D effects with Three.js
- 📧 Contact form with EmailJS
- 🔒 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Animations:** GSAP with ScrollTrigger
- **3D Graphics:** Three.js
- **Email:** EmailJS
- **Icons:** Font Awesome

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx       # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── Projects.tsx        # Projects section
│   ├── Education.tsx       # Education section
│   ├── Experience.tsx      # Experience section
│   ├── Skills.tsx          # Skills section
│   ├── Activities.tsx    # Activities section
│   ├── Footer.tsx         # Footer component
│   ├── ContactModal.tsx   # Contact modal
│   └── BackgroundEffects.tsx # 3D background
├── lib/
│   ├── types.ts           # TypeScript types
│   ├── data.ts            # Data constants
│   ├── animations.ts      # Animation utilities
│   └── emailjs.ts         # EmailJS setup
└── public/
    └── assets/            # Static assets
```

## Configuration

### EmailJS Setup

The contact form uses EmailJS. Update the service ID, template ID, and public key in `components/ContactModal.tsx`:

```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  e.currentTarget,
  'YOUR_PUBLIC_KEY'
)
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## License

Copyright © 2025 Mehedi Hasan
