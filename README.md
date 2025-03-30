# PekkaAI - AI Tools Directory

PekkaAI is a comprehensive, modern directory platform designed to help users navigate the rapidly evolving landscape of artificial intelligence tools and resources. Our carefully curated collection makes it easy to discover, compare, and choose the perfect AI solutions for your specific needs. Whether you're a developer, designer, content creator, or business professional, PekkaAI provides detailed information, honest reviews, and practical insights to help you make informed decisions about which AI tools will best serve your workflow and objectives. With regular updates and a focus on user experience, we ensure you stay up-to-date with the latest and most effective AI technologies available.

## Features

- **Comprehensive AI Tool Directory**: Browse through a curated collection of AI tools across various categories
- **Smart Search**: Find tools by name, description, features, or category
- **Category Filtering**: Easily filter tools by category (Chatbots, Art & Design, Code & Development, etc.)
- **Pricing Information**: Clear indication of pricing models (Free, Freemium, Paid)
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Real-time Search**: Instant search results with detailed tool information
- **Security First**: Built with security best practices and modern web standards

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Images**: Next.js Image Optimization with Picsum Photos
- **TypeScript**: For type safety and better development experience

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pekkaai.git
   cd pekkaai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Deployment

### Option 1: Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Configure your project settings
   - Add your environment variables
   - Deploy!

3. **Domain Configuration**
   - In Vercel dashboard, go to your project settings
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions
   - Wait for SSL certificate to be issued

### Option 2: Netlify

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Deploy!

3. **Domain Setup**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain
   - Configure DNS settings
   - Enable HTTPS

### Option 3: AWS Amplify

1. **Prepare your project**
   ```bash
   npm run build
   ```

2. **Deploy on AWS Amplify**
   - Go to [AWS Amplify](https://aws.amazon.com/amplify)
   - Connect your GitHub repository
   - Configure build settings
   - Deploy!

3. **Domain Configuration**
   - In Amplify Console, go to "Domain Management"
   - Add your custom domain
   - Configure DNS settings
   - Enable SSL/TLS

## Security Features

- HTTPS enforcement with HSTS
- Secure headers configuration
- Protected environment variables
- Rate limiting support
- External link security attributes
- Image source restrictions
- XSS protection

## Project Structure

```
pekkaai/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable components
│   ├── data/            # Static data and configurations
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
├── .env.example         # Example environment variables
└── next.config.js       # Next.js configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

