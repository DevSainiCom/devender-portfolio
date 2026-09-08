# Devender Kumar - Portfolio Website

A modern, visually striking portfolio website built with Next.js, React, and Tailwind CSS showcasing security operations leadership, cyber defense expertise, and 12+ years of professional experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git (optional, for version control)

### Installation

1. **Install Dependencies**
```powershell
npm install
```

2. **Run Development Server**
```powershell
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production
```powershell
npm run build; npm start
```

## 📦 Deployment to Vercel (No GitHub Required)

### Option 1: Using Vercel CLI (Recommended - Live This Week)

1. **Install Vercel CLI**
```powershell
npm install -g vercel
```

2. **Login to Vercel**
```powershell
vercel login
```

3. **Deploy**
```powershell
vercel
```

4. **Follow the prompts:**
   - Project name: `devender-portfolio` (or your choice)
   - Framework preset: `Next.js`
   - Root directory: `.` (current directory)
   - Build command: `npm run build`
   - Output directory: `.next`

That's it! Your portfolio will be live within seconds at a Vercel URL.

### Option 2: GitHub + Vercel Integration (More Control)

1. Create a GitHub repository and push your code
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository
4. Click "Deploy"
5. Vercel auto-deploys every time you push to main

### Option 3: Manual Upload via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Select "Other" → Upload your project folder
3. Click Deploy

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.ts` to customize:

- **Personal Info**: Name, email, phone, location
- **Experience**: Add/modify work history
- **Projects**: Update projects by company
- **Skills**: Add technical skills and expertise
- **Certifications**: List your credentials
- **Cover Letter**: Customize your message

### Dark/Light Mode

The portfolio automatically detects system preference and includes a toggle button in the navigation.

## 📱 Features

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
✅ **Dark Mode** - Automatic dark theme with toggle
✅ **Interactive Timeline** - Expandable work experience
✅ **Project Filtering** - Filter projects by company
✅ **Skills Matrix** - Organized by category and proficiency
✅ **Smooth Animations** - Fade-in and slide-up effects
✅ **Copy to Clipboard** - Copy cover letter with one click
✅ **SEO Ready** - Meta tags and structured data
✅ **Performance** - Optimized for speed (Lighthouse 90+)

## 📂 Project Structure

```
devender-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main page
│   │   ├── layout.tsx         # Root layout & navigation
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Timeline.tsx       # Experience timeline
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Skills matrix
│   │   ├── Certifications.tsx # Certs & education
│   │   ├── CoverLetter.tsx    # Cover letter
│   │   └── Contact.tsx        # Contact section
│   └── data/
│       └── portfolio.ts       # All portfolio data
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── postcss.config.js
```

## 🔧 Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **TypeScript**: For type safety
- **Deployment**: Vercel

## 📊 Sections

1. **Hero** - Eye-catching introduction with your headline
2. **Experience** - Expandable timeline of work history
3. **Projects** - Featured projects with company filtering
4. **Skills** - Expertise matrix by domain
5. **Certifications** - Professional credentials and education
6. **Cover Letter** - Professional statement with copy-to-clipboard
7. **Contact** - Email, phone, location, and social links

## 🎯 Next Steps

1. **Deploy to Vercel** (CLI method - 2 minutes)
2. **Customize Data** - Edit `src/data/portfolio.ts` with your details
3. **Add Testimonials** (Optional) - Uncomment section in Contact component
4. **Custom Domain** - Add your domain in Vercel dashboard
5. **Track Analytics** (Optional) - Integrate Google Analytics

## 📝 Tips for Success

- Keep sections concise but impactful
- Use metrics and numbers where possible
- Update projects with quantifiable achievements
- Include specific technologies and tools
- Keep cover letter professional but personable
- Test on mobile before sharing

## 🆘 Troubleshooting

**Port 3000 already in use:**
```powershell
npm run dev -- -p 3001
```

**Build errors:**
```powershell
rm -r node_modules; npm install; npm run build
```

**Vercel login issues:**
```powershell
vercel logout; vercel login
```

## 📞 Support

For Vercel deployment help: [vercel.com/docs](https://vercel.com/docs)
For Next.js questions: [nextjs.org/docs](https://nextjs.org/docs)

---

**Last Updated**: September 2025
**Status**: Ready for Production
**Live Date Target**: This Week ✅
