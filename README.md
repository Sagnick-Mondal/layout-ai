<div align="center">

<img src="https://img.shields.io/badge/LayoutAI-2.0-blue?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMiIgeT0iMiIgcng9IjIiLz48cGF0aCBkPSJNNyA3aDEwTTcgMTJoMTBNNyAxN2g0Ii8+PC9zdmc+" alt="LayoutAI" />

# LayoutAI

**AI-powered interior design platform — from floor plan to photorealistic 3D render in seconds.**

[![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Puter.js](https://img.shields.io/badge/Puter.js-2.x-8B5CF6?style=flat-square)](https://puter.com)
[![Stripe](https://img.shields.io/badge/Stripe-Integrated-635BFF?style=flat-square&logo=stripe&logoColor=white)](https://stripe.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo**](https://github.com/Sagnick-Mondal/layout-ai) · [**Report a Bug**](https://github.com/Sagnick-Mondal/layout-ai/issues) · [**Request a Feature**](https://github.com/Sagnick-Mondal/layout-ai/issues)

</div>

---

## 📸 Overview

LayoutAI transforms a 2D architectural floor plan into a **photorealistic, top-down 3D render** using Google's Gemini AI — in under 10 seconds. Designed for architects, interior designers, and real estate developers who need to visualize spaces fast.

- Upload a JPG/PNG floor plan
- AI strips annotations and generates a clean orthographic 3D render
- Compare the before and after with a drag slider
- Export and share with clients — all in one workflow

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI Rendering** | Powered by `gemini-2.5-flash-image-preview` — photorealistic 3D output from any 2D floor plan |
| 🔄 **Before / After Slider** | Interactive `react-compare-slider` to compare source and generated renders side-by-side |
| 💾 **Persistent Projects** | Projects saved to Puter cloud KV + hosted file storage, with localStorage fallback |
| 🔐 **Puter Authentication** | One-click sign-in via Puter OAuth — no passwords needed |
| 💳 **Stripe Billing** | Free, Solo ($19/mo), Team ($79/mo), and Enterprise plans with Stripe Payment Links |
| 📊 **Plan + Usage Tracking** | Per-user render limits enforced via Puter KV (`plan:{uuid}`, `usage:{uuid}`) |
| 📤 **One-Click Export** | Download AI renders as PNG directly from the visualizer |
| 🌐 **Puter Static Hosting** | Source and rendered images are auto-uploaded to user-scoped Puter hosting subdomains |
| 📱 **Responsive Design** | Fully responsive layout across desktop, tablet, and mobile |
| ⚡ **Framer Motion** | Smooth page transitions and animated UI elements throughout |

---

## 🏗️ Project Structure

```
layoutai/
├── app/
│   ├── routes/
│   │   ├── home.tsx           # Landing page — upload, projects grid
│   │   ├── about.tsx          # About page — features, contact form
│   │   ├── pricing.tsx        # Pricing page — plans, FAQ, Stripe links
│   │   ├── visualizer.$id.tsx # AI render editor — generate, compare, export
│   │   └── success.tsx        # Post-payment success — syncs plan to Puter KV
│   ├── routes.ts              # React Router v7 route config
│   └── root.tsx               # App shell — auth context provider
│
├── components/
│   ├── Navbar.tsx             # Auth-aware nav with sign-in/out
│   ├── Footer.tsx             # Footer with product + company links
│   ├── PricingCard.tsx        # Reusable plan card with Stripe CTA
│   ├── FeatureCard.tsx        # Feature highlight cards (About page)
│   ├── Testimonials.tsx       # Auto-scrolling testimonials carousel
│   ├── Upload.tsx             # Drag-and-drop file upload component
│   └── ui/
│       └── Button.tsx         # Polymorphic button with variants
│
├── lib/
│   ├── ai.action.ts           # Gemini AI image generation wrapper
│   ├── plan.ts                # Plan limits, usage tracking, canUseFeature()
│   ├── puter.action.ts        # createProject, getProjects, getProjectById
│   ├── puter.hosting.ts       # Auto-hosting config + image upload to Puter CDN
│   ├── constants.ts           # AI prompt, storage paths, timing constants
│   └── utils.ts               # URL helpers, blob utilities, slug generation
│
├── type.d.ts                  # Global TypeScript interfaces (DesignItem, AuthContext…)
├── Dockerfile                 # Multi-stage production Docker build
├── vite.config.ts             # Vite + React Router + Tailwind config
└── react-router.config.ts     # SSR config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 20
- **npm** ≥ 10
- A [Puter](https://puter.com) account (free, for auth + cloud storage)
- A [Stripe](https://dashboard.stripe.com) account (for payment links, optional)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Sagnick-Mondal/layout-ai.git
cd layout-ai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Optional — if not set, the app falls back to puter.kv for local storage
VITE_PUTER_WORKER_URL=https://your-puter-worker.example.com
```

> **Note:** Without `VITE_PUTER_WORKER_URL`, LayoutAI automatically switches to a `puter.kv` local storage fallback so it works fully offline from a backend worker.

### Development

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

### Production Build

```bash
npm run build
npm run start
```

---

## 🐳 Docker Deployment

LayoutAI ships with a production-optimised multi-stage Dockerfile:

```bash
# Build the image
docker build -t layoutai .

# Run the container
docker run -p 3000:3000 -e VITE_PUTER_WORKER_URL=https://your-worker.com layoutai
```

The Dockerfile uses a 4-stage build:
1. **dev deps** — installs all dependencies
2. **prod deps** — installs only production dependencies
3. **build** — compiles the React Router SSR bundle
4. **runtime** — minimal `node:20-alpine` image with only the build output

---

## 🧠 How the AI Rendering Works

1. The user uploads a floor plan image (JPG/PNG)
2. The image is converted to a Base64 data URL
3. LayoutAI calls `puter.ai.txt2img()` with the `gemini-2.5-flash-image-preview` model
4. A detailed system prompt instructs Gemini to:
   - Remove all text/annotations from the plan
   - Preserve exact geometry (walls, rooms, doors, windows)
   - Apply photorealistic materials and daylight lighting
   - Output a strict orthographic top-down view at 1024×1024
5. The resulting render is uploaded to the user's Puter hosting subdomain and saved to their project

---

## 💳 Pricing & Plans

| Plan | Price | Renders/Month | Key Features |
|---|---|---|---|
| **Free** | Free | 3 | 720p export, 5 basic styles |
| **Solo** | $19/mo | 50 | 4K export, 50+ styles, dashboard, compare |
| **Team** | $79/mo | 300 | Everything in Solo + collaboration (10 seats), custom styles |
| **Enterprise** | Custom | Unlimited | Unlimited renders, SLA, on-premise option |

Payment is processed via **Stripe Payment Links**. After a successful payment, the plan is synced to the user's Puter KV store under the key `plan:{user.uuid}` and enforced client-side via `lib/plan.ts`.

---

## 🔐 Authentication

Authentication is handled entirely by [Puter.js](https://docs.puter.com/). No passwords, no JWT setup — users sign in with their Puter account via a popup modal.

```ts
// Sign in
await puter.auth.signIn();

// Get current user (note: use user.uuid, NOT user.id)
const user = await puter.auth.getUser();
console.log(user.uuid); // ✅ correct unique identifier
```

The auth state is managed in the root layout and distributed throughout the app via React Router's `useOutletContext<AuthContext>()`.

---

## 🗂️ Data Storage Architecture

LayoutAI uses a dual-storage approach:

```
┌──────────────────────────────────────────────────────┐
│                    puter.kv (cloud)                  │
│  plan:{user.uuid}      → "solo" | "team" | "free"   │
│  usage:{user.uuid}     → 42  (render count)          │
│  layoutai_project_{id} → { ...DesignItem }           │
│  layoutai_hosting_cfg  → { subdomain: "xyz" }        │
└──────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────┐
│                 puter.hosting (CDN)                  │
│  projects/{id}/source.jpg   → public image URL       │
│  projects/{id}/rendered.png → public image URL       │
└──────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────┐
│               localStorage (client cache)            │
│  plan → "solo"   (fast read, synced after login)     │
└──────────────────────────────────────────────────────┘
```

When `VITE_PUTER_WORKER_URL` is not set, all project CRUD falls back to `puter.kv` automatically.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React Router v7](https://reactrouter.com) (SSR mode) |
| **Language** | TypeScript 5 |
| **Bundler** | Vite 8 |
| **Styling** | Tailwind CSS v4 + Vanilla CSS |
| **Animation** | Framer Motion |
| **AI** | Puter.js → Google Gemini 2.5 Flash (image generation) |
| **Auth & Storage** | [Puter.js](https://puter.com) (KV, hosting, filesystem, auth) |
| **Payments** | [Stripe](https://stripe.com) Payment Links |
| **Icons** | Lucide React + React Icons |
| **Image Compare** | react-compare-slider |
| **Deployment** | Docker (multi-stage), Node.js 20 Alpine |

---

## 📡 Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Upload floor plan, view project history |
| `/about` | About | Features overview and contact form |
| `/pricing` | Pricing | Plan comparison and Stripe checkout |
| `/visualizer/:id` | Visualizer | AI render editor, compare, export |
| `/success?plan=solo` | Success | Post-payment plan sync to Puter KV |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feat/my-feature`
3. **Commit** your changes: `git commit -m "feat: add my feature"`
4. **Push** the branch: `git push origin feat/my-feature`
5. **Open** a Pull Request

Please follow the existing commit message convention (`feat:`, `fix:`, `chore:`, etc.).

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Sagnick Mondal**

[![GitHub](https://img.shields.io/badge/GitHub-Sagnick--Mondal-181717?style=flat-square&logo=github)](https://github.com/Sagnick-Mondal)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sagnick_Mondal-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/sagnick-mondal-12487234a/)

---

<div align="center">
  <sub>Built with ❤️ using React Router, Puter.js, and Google Gemini</sub>
</div>
