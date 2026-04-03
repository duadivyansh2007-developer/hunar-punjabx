# HUNAR Punjab Local Development & GitHub Guide

## 🚀 How to Run the Project Locally

You will need two separate terminal windows for this project.

### 1. Start the Backend
Open a terminal in the `g:\antigravity\hackathon\backend` folder and run:
`npm run dev` (or `node server.js` if nodemon isn't setup)

### 2. Start the Frontend
Open a terminal in the `g:\antigravity\hackathon\frontend` folder and run:
`npm run dev`

Open your browser to `http://localhost:3000`.

---

## 🐙 How to Push to an Alternate GitHub Account (Beginner Friendly)

Since you want to push this hackathon project to a **different GitHub account**, the easiest way without messing up your global SSH settings is by using a **Personal Access Token (PAT)**.

### Step 1: Generate a Token on your New GitHub Account
1. Log in to your alternate GitHub account.
2. Go to **Settings** -> **Developer settings** (at the bottom) -> **Personal access tokens** -> **Tokens (classic)**.
3. Click **Generate new token (classic)**. Give it a name (e.g. "Hackathon Token"), set expiration, and check the `repo` scope box.
4. Click **Generate token** and **COPY it immediately** (you won't see it again).

### Step 2: Create a New Repo on GitHub
1. Create a new repository on your new GitHub account. Name it `hunar-punjab`. Leave it completely empty (do not add a README, gitignore, or license yet).

### Step 3: Push using your Token
Open a terminal in the `g:\antigravity\hackathon` root folder, and run these commands one by one:

```bash
git init
git add .
git commit -m "Initial commit for HUNAR Punjab Hackathon Core"

# This forces Git to ask for credentials instead of using your cached default ones.
git remote add origin https://<YOUR_NEW_GITHUB_USERNAME>:<YOUR_COPIED_TOKEN>@github.com/<YOUR_NEW_GITHUB_USERNAME>/hunar-punjab.git

git branch -M main
git push -u origin main
```

**Note:** Replace `<YOUR_NEW_GITHUB_USERNAME>` and `<YOUR_COPIED_TOKEN>` with your actual new username and the token you just copied.

You are all set for the hackathon! Good luck! 🏆
