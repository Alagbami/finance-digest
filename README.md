# Finance Digest

A responsive, Figma‑driven “Finance Digest” web application built with Next.js and React Query. It fetches general market news from the Finnhub API and displays it in a mobile‑first, pixel‑perfect layout matching the recruiter’s Rubik‑based Figma design.

---

## 🚀 Project Overview

- **Live Preview**: _Not deployed yet_  
- **Deadline**: 16 July 2025  
- **Role**: Senior Frontend Engineer assessment for Maon Technology Ltd  
- **Duration**: 8 hours allotted  

---

## 📑 Features

- **API‑driven news feed**  
  - Fetches “general” category via Finnhub’s `/news?category=general` endpoint  
  - Displays thumbnail, source, formatted date, and headline  
  - Clickable cards open the original article in a new tab  

- **Figma‑perfect UI**  
  - Mobile‑first horizontal cards (96×96 px thumbnail) with Rubik font  
  - Dark‑mode palette (`#0E0D13`, gray‑300/400 meta text, white headlines)  
  - Rounded corners (12 px), consistent 12 px padding, 4 px micro‑spacing  
  - Hover lift & shadow feedback for desktop  

- **Responsive design**  
  - 1‑column on mobile, 2‑columns at ≥640 px, 4columns at ≥1024 px  
  - Grid and flex layouts adapt seamlessly  

- **Robust UX**  
  - Loading spinner during fetch  
  - Graceful error state with retry button  
  - Placeholder when thumbnail is missing  

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript  
- **Styling**: Tailwind CSS (extended via `tailwind.config.js`)  
- **Data Fetching**: Axios + React Query (`@tanstack/react-query`)  
- **Fonts**: Rubik via `next/font/google`  
- **Date Formatting**: date‑fns  
- **Testing**: Jest + ts‑jest + React Testing Library + jest‑dom  
- **Env Management**: `.env.local` exposes `NEXT_PUBLIC_FINNHUB_API_KEY`  

---

## 🔧 Setup & Running Locally

1. Clone repo and install dependencies:  
   ```bash
   git clone <your-repo-url> finance-digest
   cd finance-digest
   npm install


Create a .env.local in project root with:

bash
Copy
Edit
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here
Run the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view.

✅ Testing
Run unit tests in watch mode:

bash
Copy
Edit
npm test
Coverage:

Hook: useMarketNews tested for loading & data states via Jest mocks

Component: NewsItem tested for image/no‑image rendering and correct props

📐 Design Tokens
Token	Value
Border radius	12px (rounded-[12px])
Card padding	p-3 mobile / p-4 desktop
Thumbnail size	96×96 px mobile, full × 179 px desktop
Font family	Rubik (400, 500, 600, 700)
Meta text size	text-[10px]
Headline size	text-[14px]
Colors	#0E0D13 bg, gray‑300/400, white

📂 Code Structure
graphql
.
├── app/
│   ├── layout.tsx             # Server layout (header & global font)
│   ├── page.tsx               # Client HomePage wrapped in ReactQueryProvider
│   ├── globals.css            # Tailwind + base styles
├── components/
│   ├── NewsList.tsx           # Client list container
│   ├── NewsItem.tsx           # Pixel‑perfect card component
│   ├── LoadingState.tsx       # Spinner component
│   ├── ErrorState.tsx         # Error / retry component
│   └── ReactQueryProvider.tsx # QueryClientProvider wrapper
├── utils/
│   ├── api.ts                 # Axios instance & fetchMarketNews helper
│   └── hooks.ts               # `useMarketNews` React Query hook
├── .env.local                 # API key (gitignored)
├── tailwind.config.js         # Custom font & theme extensions
├── jest.config.js             # Testing config (ts‑jest + jsdom)
└── jest.setup.js              # jest‑dom setup
🔭 Next Steps & Extras
Unit/integration tests: Expand coverage to include NewsList, error paths.

Pagination: Implement minId‑based “load more” or infinite scroll.

Accessibility: Add ARIA labels, focus states, and more semantic HTML.

Deployment: Host on Vercel for live demo link.

Thank you for reviewing! I look forward to your feedback.
— Abiodun Adeleke