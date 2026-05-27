# Dailytech 🌌

Dailytech is a modern platform designing intuitive, beautiful, and deeply personal AI companions and utilities that elevate everyday life—from personal styling and wardrobe organization to spatial design and circadian schedule mapping.

Our mission is **AI in service of human calm**: building specialized, high-aesthetic utilities that respect your cognitive space and personal data privacy.

---

## 🚀 Products Ecosystem

1. **Mirre App (Launched)**: A mobile-first fashion styling and Virtual Try-On (VTO) commerce platform. Users browse brand catalogs and virtually try garments on a neural-rendered digital likeness.
2. **Loomin (Upcoming)**: A circadian-aligned digital wardrobe manager that curates daily outfits matching local forecasts, schedules, and individual energy profiles.
3. **Cura (Upcoming)**: An AI spatial and interior designer. Snap a photo of any space or corner, apply an aesthetic profile (e.g. *Japandi Cozy* or *Warm Minimalist*), and instantly explore shoppable design transformations.
4. **Kairos (Upcoming)**: A cognitive circadian calendar engine that schedules your deep creative focus blocks and rest windows around your biological peak efficiency hours.

---

## 🛠 Repository Architecture

Dailytech is structured as an **npm workspaces monorepo** to separate client logic and API services cleanly:

```
dailytech/
├── packages/
│   ├── web/        # Vite + React (TypeScript) SPA Client
│   └── backend/    # NestJS REST API Server (stubbed skeleton)
├── docs/
│   └── adr/        # Architecture Decision Records
├── CONTEXT.md      # Domain vocabulary glossary
└── package.json    # Monorepo workspaces settings
```

### Technology Stack
- **Frontend**: React 18, Vite, TypeScript, React Router v6, Lucide Icons, and Vanilla CSS.
- **Backend**: NestJS, TypeScript, Express.
- **Styling**: Native CSS custom properties, glassmorphism templates, and responsive layouts.
- **Modals**: Native HTML5 `<dialog>` elements for accessibility and performance.

---

## 💻 Local Setup & Development

Follow these steps to run the Dailytech ecosystem on your local machine:

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### 1. Install Dependencies
Run this command at the root of the project to install packages and configure symlinks for both the frontend and backend workspaces:
```bash
npm install
```

### 2. Run the Frontend Client
Start the Vite development server for the React app:
```bash
npm run dev:web
```
- Open [http://localhost:5173/](http://localhost:5173/) (or the port indicated in your console) to view the application.

### 3. Run the Backend API (Optional)
To spin up the NestJS API server:
```bash
npm run dev:backend
```
- The backend serves a status check API at `http://localhost:3000/status`.

### 4. Build for Production
To bundle and typecheck the React application for deployment:
```bash
npm run build:web
```
The compiled assets will be placed inside `packages/web/dist/`.

---

## 🌐 Deployment to Vercel

The frontend is ready to deploy directly via the Vercel GitHub integration:
1. Connect your GitHub repository to Vercel.
2. Select **Vite** as the framework preset.
3. Set the **Root Directory** to `packages/web`.
4. Ensure the **Build Command** is set to `npm run build` and **Output Directory** is set to `dist`.

---

## 🔒 Data Privacy & Sovereignty
Dailytech defaults to a **local-first** approach. In its current phase, all personal configurations, outfit creations, design layouts, and contact messages remain securely within your browser's local storage (`localStorage`). No tracking scripts, cookies, or remote database synchronization exist without your explicit consent.
