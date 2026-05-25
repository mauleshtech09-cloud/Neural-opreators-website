<<<<<<< HEAD
# NovaBuilds Agency Portfolio

A modern, high-converting portfolio website for a student-run digital service brand specializing in AI Automation and Website Development Services.

## Features
- **Frontend**: React + Vite SPA with fully responsive routing.
- **Design System**: Global custom Vanilla CSS focusing on 'Agency/SaaS' design elements (glassmorphism, clean typography, smooth transitions).
- **Lightweight Backend**: Express Node.js server that stores leads from contact forms in-memory/JSON.
- **Service Stack Display**: Multi-tier pricing tables and a dynamic project viewing structure.

## Project Structure
```
project-root/
│
├── frontend/             # React + Vite Application
│   ├── public/
│   ├── src/
│   │   ├── components/   # Shareable UI components
│   │   ├── pages/        # Views for router
│   │   ├── styles/       # Vanilla CSS styling logic
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│
├── backend/              # Node.js + Express Backend
│   ├── data/             # Local lead storage
│   ├── server.js         # API endpoint and controller logic
│   └── package.json
```

## Setup Instructions

### 1. Backend Setup
\`\`\`bash
cd backend
npm install
npm start
\`\`\`
The backend server runs via port 5000: `http://localhost:5000`

### 2. Frontend Setup
In a new terminal window:
\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`
The frontend will run by default on port 5173.

## Usage
- Navigating the robust site using standard links (`/about`, `/services`, `/projects`, `/pricing`)
- On the `/pricing` page, you can test the **Contact Lead System**, which automatically transmits inquiry data to the backend API.
=======
# Neural-opreators-website
AI automation agency portfolio
>>>>>>> 855ba47ea7724a637dd81077072ce9322f1c1781
