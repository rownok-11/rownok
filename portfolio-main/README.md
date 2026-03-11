# Raisul Islam Rownok - Cybersecurity Portfolio

A modern, responsive personal portfolio website with a cybersecurity theme featuring dark hacker aesthetics and red Matrix-style animations.

## Features

### 🎨 Design
- Dark theme with black background
- Red Matrix rain animation
- Neon green and cyber blue accents
- Cyberpunk UI with glow effects
- Smooth animations and transitions
- Fully responsive (Mobile, Tablet, Desktop)

### 📱 Sections
1. **Hero Section** - Animated typing text with name and titles
2. **About Me** - Professional background and expertise
3. **Skills** - Animated skill bars showing proficiency levels
4. **Projects** - Grid layout showcasing portfolio projects
5. **Blog** - Blog posts with images and descriptions
6. **Cyber Threat Map** - Real-time visualization of cyber threats
7. **Contact** - Contact form and social media links
8. **Admin Dashboard** - Secure admin panel for content management

### 🔐 Admin Panel
- Secure login system with hashed credentials
- Add/Edit/Delete projects
- Add/Edit/Delete blog posts
- Manage website content
- Dark theme interface

#### Admin Access
- **Navigation**: Click the red **ADMIN** button in the top navigation bar
- **Direct URL**: `/admin`
- **Username**: `ri_rownok`
- **Password**: `15481@#Raisulislamrownok`

> **Note**: Admin credentials are hashed and NOT stored in plain text in the source code for security.

### 🛠️ Technologies Used
- React 18.3.1
- TypeScript
- Tailwind CSS v4
- Motion (Framer Motion)
- React Router DOM
- Sonner (Toast notifications)
- Lucide React (Icons)

## Getting Started

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm run dev
```

### Build
```bash
pnpm run build
```

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── MatrixBackground.tsx    # Red Matrix animation
│   │   ├── Navigation.tsx          # Top navigation bar
│   │   ├── Hero.tsx                # Hero section
│   │   ├── About.tsx               # About section
│   │   ├── Skills.tsx              # Skills section
│   │   ├── Projects.tsx            # Projects section
│   │   ├── Blog.tsx                # Blog section
│   │   ├── CyberThreatMap.tsx      # Threat visualization
│   │   ├── Contact.tsx             # Contact form
│   │   ├── Footer.tsx              # Footer section
│   │   ├── ScrollToTop.tsx         # Scroll to top button
│   │   ├── AdminLogin.tsx          # Admin login
│   │   ├── AdminDashboard.tsx      # Admin panel
│   │   └── TypingText.tsx          # Typing animation
│   ├── utils/
│   │   └── auth.ts                 # Authentication logic
│   └── App.tsx                     # Main app component
└── styles/
    ├── theme.css                   # Cybersecurity theme colors
    ├── custom.css                  # Custom animations and effects
    └── index.css                   # Main styles

```

## Features Details

### Matrix Background
- Red cascading characters (Japanese katakana and alphanumeric)
- Continuous animation
- Low opacity overlay for readability

### Typing Animation
- Multiple rotating titles
- Smooth character-by-character animation
- Auto-deleting and retyping

### Cyber Threat Map
- **Kaspersky Real-time Cyberthreat Map** embedded
- Live global cyber attack data
- Interactive world map visualization
- Real DDoS attacks, malware detection, and threat monitoring
- Fully responsive iframe embed

### Admin Dashboard
- Session-based authentication
- LocalStorage for data persistence
- CRUD operations for projects and blogs
- Image URL management
- Secure credential hashing

## Contact Information
- **Name**: Raisul Islam Rownok
- **Email**: raisulislamrownok7@gmail.com
- **Instagram**: [@ri_rownok](https://www.instagram.com/ri_rownok?igsh=MXZ5Nmg5ZG8yN2tycQ==)

## Deployment

### Option 1: Vercel (Recommended - Easiest)
1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Select your repository
6. Click "Deploy"
7. Your site will be live in minutes!

### Option 2: Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Click "Add new site" > "Import an existing project"
5. Select your repository
6. Build command: `pnpm run build`
7. Publish directory: `dist`
8. Click "Deploy site"

### Option 3: GitHub Pages
See [GITHUB_UPLOAD.md](./GITHUB_UPLOAD.md) for detailed instructions in Bengali.

## How to Upload to GitHub

### Quick Start
```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add remote repository (replace YOUR-USERNAME and YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Detailed Instructions
- **English**: See GitHub documentation
- **বাংলা (Bengali)**: See [GITHUB_UPLOAD.md](./GITHUB_UPLOAD.md) for complete step-by-step guide
- **Website Guide**: See [BENGALI_GUIDE.md](./BENGALI_GUIDE.md) for website usage instructions in Bengali

## Important Files
- `GITHUB_UPLOAD.md` - Complete GitHub upload guide in Bengali
- `BENGALI_GUIDE.md` - Website usage guide in Bengali
- `.gitignore` - Files to exclude from Git (already configured)

## Security Note
The admin authentication uses a simple hashing function for credential storage. For production use, implement proper backend authentication with secure password hashing (bcrypt, argon2) and JWT tokens.

## Support
- **Email**: raisulislamrownok7@gmail.com
- **Instagram**: [@ri_rownok](https://www.instagram.com/ri_rownok)

## License
© 2026 Raisul Islam Rownok. All rights reserved.
