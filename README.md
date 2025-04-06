# Junaid Irfan's Portfolio Site

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my skills, projects, and professional experience.

## 🚀 Live Demo

Visit the live site: [portfolio.10poundingpotatoes.org](https://portfolio.10poundingpotatoes.org)

## ✨ Features

- Responsive Design: Optimized for all device sizes
- Static Site Generation: Fast loading times and optimal performance
- Component-Based Architecture: Modular and maintainable code structure
- Modern UI: Clean and professional design with smooth animations
- SEO Optimized: Pre-configured metadata for search engine visibility

## 🛠️ Tech Stack

- Framework: Next.js 15
- Styling: Tailwind CSS
- Typography: Geist Font
- Icons: React Icons
- UI Components: Custom components built with Radix UI
- Animations: Framer Motion
- Form Handling: EmailJS

## 📋 Sections

- Hero: Introduction and call-to-action
- About: Personal bio and professional summary
- Skills: Technical competencies and tools
- Infrastructure: Technical infrastructure knowledge
- Projects: Showcase of recent work with descriptions and links
- Experience: Professional work history and achievements
- Education: Academic background and certifications
- Contact: Form for reaching out and connection options
- Footer: Social links and additional navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/junaydirfan/portfolio.git
cd portfolio
```
2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
4. Open http://localhost:3000 in your browser.

## 🏗️ Building for Production
```bash
npm run build
# or
yarn build
```
This generates a static export in the `/out` directory.

## 🌐 Deployment
### Self-Hosting on Proxmox
1. Set up a VM or LXC container with Debian/Ubuntu
2. Install Nginx:
```bash
sudo apt update && sudo apt install -y nginx
```
3. Configure Nginx:
```nginx
server {
       listen 80;
       server_name portfolio.yourdomain.com;
       root /var/www/portfolio;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
   }
```
4. Transfer files:
```bash
scp -r out/* user@server:/var/www/portfolio/
```
5. Set permissions:
```bash
sudo chmod -R 755 /var/www/portfolio
sudo chown -R www-data:www-data /var/www/portfolio
```
6. Set up SSL (recommended):
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d portfolio.yourdomain.com
```

### GitHub Actions CI/CD
```yaml
# .github/workflows/deploy.yml
name: Deploy Portfolio
on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy to server
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          source: "out/*"
          target: "/var/www/portfolio"
          strip_components: 1
```
This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
Junaid Irfan - junaid.irfan@hotmail.com
Project Link: github.com/junaydirfan/portfolio
