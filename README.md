<div align="center">
  <h1>🏆 HUNAR Punjab</h1>
  <p><b>State-Grade AI-Powered Placement & Workforce Ecosystem</b></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
  [![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
</div>

---

## 🌍 Live Links
- **Live Application:** [HUNAR Punjab on Vercel](https://hunar-punjabx-px3e.vercel.app/)
- **API Health Check:** [Backend Server](https://hunar-punjabx.vercel.app/api/health)

---

## 💡 The Problem & Our Solution

The skill gap and placement management challenge in Punjab requires a modernized, autonomous solution. Traditional job boards are passive and fail to provide actionable intelligence for institutes or the government.

**HUNAR Punjab** solves this by unifying all stakeholders on a single, AI-driven platform. We provide dynamic, real-time dashboards for **Students, Institutes, Companies, and Government Admins**, replacing standard static forms with live telemetry, AI applicant matching, and actionable readiness forecasts.

---

## 🚀 Key Features

Our platform is divided into four hyper-responsive, interactive dashboards:

### 👨‍🎓 Student Portal
- **App-like Navigation:** Instantly switch between Job listings, Institutes, and Analytics without page reloads.
- **AI Career Suggestions:** Live telemetry tracking skill gaps, suggesting tailored learning paths (e.g. "You need React skills for 40% of upcoming jobs").
- **Application Tracker:** Visual kanban-style application tracker for applied jobs.

### 🏢 Company Placement Portal
- **AI Applicant Matching:** Automatic ranking and highlighting of verified candidates based on skill match percentages.
- **Visual Hiring Pipeline:** Real-time visibility into Applied, Shortlisted, and Interview stages.

### 🏫 Institute Command Center
- **Batch Health Score:** Tracking the overall "AI Readiness" of passing batches.
- **Departmental Heatmaps:** Density maps of skills per IT/Tech department helping guide internal curriculum focus.

### 🏛️ Admin / Government Dashboard
- **Interactive State Map:** Performance overviews of multiple districts (e.g. Lahore Central vs. Faisalabad).
- **Skill Gap Forecasting:** Predictive text alerts (e.g. warning of upcoming labor shortages in the textile sector).
- **Low Performance Alerts:** Automated flagging of institutes needing budget allocation or curriculum audits.

---

## 🛠️ The Tech Stack

- **Frontend:** Next.js 14+ (App Router), React, Lucide Icons, Recharts (Analytics Data Visualization), Vanilla CSS (Glassmorphism & Gradients).
- **Backend:** Node.js, Express.js, Mongoose.
- **Database:** MongoDB Atlas (Cloud).
- **State Management & UI:** Advanced React `useState` / `useEffect` implementations with custom Toast notification systems.
- **Deployment:** Vercel (both Frontend and Serverless Backend functions).

---

## 💻 Local Setup & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/duadivyansh2007-developer/hunar-punjabx.git
cd hunar-punjab
```

### 2. Start the Backend API
Navigate to the backend directory, install packages, and boot the server:
```bash
cd backend
npm install
npm run dev
```
*(The backend needs a `.env` with `MONGO_URI` and `JWT_SECRET` to fully function.)*

### 3. Start the Frontend Application
Open a **new terminal window**, navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000) to view the application!

---

## 🤖 Context-Aware AI Chatbot Integration
Across all dashboards, we have integrated a floating **AI Chatbot Modal**. This isn't just a dummy chat window; it dynamically adjusts its context based on the logged-in user's role (Student, Admin, Company, Institute), demonstrating an advanced architectural awareness of user state.

> **Built with ❤️ for the Hackathon by Divyansh.**
