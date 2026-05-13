# Personal Portfolio & CV Website

A modern, dark-themed portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and SEO optimization.

## ✨ Features

- ✅ **Multi-page routing** with smooth transitions
- ✅ **Dark minimal design** with professional aesthetics
- ✅ **Responsive mobile-first layout**
- ✅ **Smooth animations** using Framer Motion
- ✅ **SEO optimized** with meta tags and structured data
- ✅ **Contact form** with email integration ready
- ✅ **Project showcase** with filtering
- ✅ **Experience timeline**
- ✅ **Skills breakdown** by pillar
- ✅ **CV download** functionality
- ✅ **Fast performance** (Lighthouse 90+)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolioWebsite
```

2. **Install dependencies**
```bash
npm install
```

3. **Copy environment variables**
```bash
cp .env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolioWebsite/
├── app/
│   ├── layout.tsx           # Root layout with navbar/footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── api/
│   │   └── contact/         # Contact form API
│   ├── skills/page.tsx      # Skills page
│   ├── experience/page.tsx  # Experience timeline
│   ├── projects/page.tsx    # Projects showcase
│   └── contact/page.tsx     # Contact form
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   └── About.tsx            # About section
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS config
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## 🎨 Customization

### 1. **Update Your Information**

#### Navbar & Footer
- Edit [`components/Navbar.tsx`](components/Navbar.tsx#L19) to change logo/initials
- Update social links in [`components/Footer.tsx`](components/Footer.tsx#L8)

#### Content Pages
- **Hero**: Modify typewriter words in [`components/Hero.tsx`](components/Hero.tsx#L5)
- **About**: Update bio and stats in [`components/About.tsx`](components/About.tsx#L26)
- **Skills**: Edit skill categories in [`app/skills/page.tsx`](app/skills/page.tsx#L8)
- **Experience**: Add your work history in [`app/experience/page.tsx`](app/experience/page.tsx#L7)
- **Projects**: Update project details in [`app/projects/page.tsx`](app/projects/page.tsx#L5)
- **Contact**: Update contact info in [`app/contact/page.tsx`](app/contact/page.tsx#L65)

### 2. **Theme Customization**

Edit colors in [`tailwind.config.js`](tailwind.config.js#L6):
```javascript
colors: {
  accent: '#3b82f6',        // Change primary accent color
  'accent-cyan': '#06b6d4',
  'accent-green': '#10b981',
}
```

Options:
- Electric Blue: `#3b82f6`
- Cyan: `#06b6d4`
- Green: `#10b981`

### 3. **Add Your CV**

1. Place your CV PDF in `public/cv.pdf`
2. Update the download link in [`components/Navbar.tsx`](components/Navbar.tsx#L58):
```tsx
<motion.a href="/cv.pdf" download>
```

### 4. **Set Up Email (Contact Form)**

Choose one service:

#### Option A: Resend (Recommended)
```bash
npm install resend
```

1. Get API key from [resend.com](https://resend.com)
2. Add to `.env.local`:
```
NEXT_PUBLIC_RESEND_API_KEY=your_key_here
```

3. Update [`app/api/contact/route.ts`](app/api/contact/route.ts):
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()
  
  const { data, error } = await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: 'your@email.com',
    subject: `New message from ${name}`,
    html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
  })
  
  return NextResponse.json({ success: !error })
}
```

#### Option B: EmailJS
```bash
npm install @emailjs/browser
```

1. Set up account at [emailjs.com](https://emailjs.com)
2. Get credentials and add to `.env.local`
3. Update contact form in [`app/contact/page.tsx`](app/contact/page.tsx)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. **Connect GitHub repository**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import project from GitHub
   - Add environment variables
   - Deploy with one click

### Deploy to Other Platforms

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./next
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔧 Configuration

### SEO Settings

Edit metadata in [`app/layout.tsx`](app/layout.tsx#L7):
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your professional description',
  metadataBase: new URL('https://yourdomain.com'),
}
```

### Analytics

Already integrated with Vercel Analytics. Configure in [`app/layout.tsx`](app/layout.tsx#L38).

## 🎯 Performance Tips

- ✅ Images: Use Next.js `Image` component for optimization
- ✅ Lazy loading: Already configured for sections
- ✅ Font optimization: Uses system fonts
- ✅ Code splitting: Automatic with Next.js

Target: **Lighthouse 90+**

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework & routing |
| **React 18** | UI library |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **TypeScript** | Type safety |
| **Vercel** | Hosting & analytics |
| **Resend/EmailJS** | Email delivery |

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit pull requests.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## ❓ Troubleshooting

### Contact form not working?
- Check `.env.local` has correct API keys
- Verify email service credentials
- Check browser console for errors

### Build fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styles not loading?
```bash
npm install -D tailwindcss
npm run dev
```

## 🎓 Next Steps

1. ✅ Customize content with your information
2. ✅ Set up email functionality
3. ✅ Add your CV file
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel
6. ✅ Monitor with Vercel Analytics
7. ✅ Get feedback and iterate

---

**Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
