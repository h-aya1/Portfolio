# Hayat - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and React Router. Features a clean, professional design with smooth animations and a mobile-first approach.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with a "strong, confident developer" vibe
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: One-page layout with smooth scroll navigation
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Contact Form**: Functional contact form (currently logs to console)
- **Professional Sections**: Hero, About, Projects, Experience, and Contact sections

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # React components
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Projects.tsx    # Projects grid
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer component
│   ├── data/               # Data files
│   │   ├── skills.js       # Skills and languages data
│   │   ├── projects.js     # Projects information
│   │   └── experience.js   # Work experience data
│   ├── routes/             # Route definitions
│   ├── app.css             # Global styles and Tailwind imports
│   └── root.tsx            # Root component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Sections Overview

### 1. Hero Section
- Personal introduction with name and title
- Professional tagline
- Call-to-action buttons
- Hero image placeholder (ready for professional photo)

### 2. About Me
- Professional bio
- Skills grid with icons and categories
- Language proficiency
- Clean, organized layout

### 3. Projects
- Grid layout showcasing 4 main projects
- Technology tags for each project
- Live demo and GitHub links
- Project status indicators

### 4. Experience
- Timeline layout for work experience
- Detailed role descriptions
- Company information and dates

### 5. Contact
- Contact information with icons
- Functional contact form
- Social media links
- Professional presentation

## 🎨 Customization

### Colors
The portfolio uses a blue-based color scheme that can be easily customized in the Tailwind classes:
- Primary: Blue (`blue-600`, `blue-700`)
- Secondary: Gray tones (`gray-50`, `gray-100`, `gray-900`)
- Accents: Various blue and gray shades

### Content
Update the data files in `app/data/` to customize:
- Skills and technologies
- Project information
- Work experience
- Personal information

### Styling
Modify component styles by updating Tailwind classes or adding custom CSS in `app/app.css`.

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

4. **Follow the prompts** to complete deployment

### Alternative Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload build files to S3 bucket
- **Custom Server**: Serve static files from any web server

## 🔧 Build Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server
npm run typecheck    # TypeScript type checking
```

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🎯 Performance Features

- Optimized images and assets
- Efficient CSS with Tailwind
- Smooth scrolling and animations
- Minimal JavaScript bundle
- Fast loading times

## 🔒 Security

- Form validation and sanitization
- Secure external links with `rel="noopener noreferrer"`
- No sensitive information exposed
- Ready for HTTPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please contact:
- Email: hayata.rezak@gmail.com
- GitHub: [h-aya1](https://github.com/h-aya1)

---

**Built with ❤️ using React, Tailwind CSS, and modern web technologies.**
