# Personal Website - Guruprasad Venkatraman

A modern, responsive personal portfolio website showcasing my work as a Software Engineer and AI Innovator.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for fast loading
- **GitHub Integration**: Real-time GitHub stats and project showcase
- **Professional Content**: Work experience, skills, and project portfolio
- **AI Chatbot**: Interactive AI assistant powered by OpenAI GPT-3.5-turbo

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Library**: Material-UI (MUI)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 🏃‍♂️ Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🤖 AI Chatbot Configuration

The website includes an interactive AI chatbot powered by **OpenAI's GPT-3.5-turbo** (not Claude/Anthropic).

### Setup:

1. Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=your_openai_api_key_here
# Optional: specify a different OpenAI model (default: gpt-3.5-turbo)
OPENAI_MODEL=gpt-3.5-turbo
```

2. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### Available Models:

You can change the model by setting the `OPENAI_MODEL` environment variable:
- `gpt-3.5-turbo` (default) - Fast and cost-effective
- `gpt-4` - More capable but slower and more expensive
- `gpt-4-turbo` - Latest GPT-4 with improved performance

**Note**: This chatbot uses OpenAI models, not Claude/Anthropic. To use Claude instead, you would need to:
1. Install the Anthropic SDK: `npm install @anthropic-ai/sdk`
2. Update `/app/api/chat/route.ts` to use Anthropic's API
3. Configure `ANTHROPIC_API_KEY` in your environment variables

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── DynamicHeroSection.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ThemeRegistry/   # MUI theme configuration
├── page.tsx            # Main homepage
├── layout.tsx          # Root layout
└── globals.css         # Global styles
```

## 🚀 Deployment

This website is optimized for deployment on Vercel:

```bash
npm run build
```

The site is production-ready with all optimizations enabled.
