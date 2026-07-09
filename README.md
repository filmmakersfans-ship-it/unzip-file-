# Railway Test Site

A minimal Node.js + Express website template for testing GitHub → Railway deployment.

## What's inside
- `server.js` — Express server that serves the `public` folder and listens on Railway's `PORT`
- `public/index.html` — A simple styled homepage
- `package.json` — Declares the `start` script Railway will run

## How to deploy

1. **Push this folder to a new GitHub repo**
   ```bash
   cd railway-test-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Create a Railway project**
   - Go to [railway.com](https://railway.com) and log in
   - Click **New Project** → **Deploy from GitHub repo**
   - Select the repo you just pushed
   - Authorize Railway to access your GitHub account/repo if prompted

3. **Let Railway build it**
   - Railway detects `package.json` and automatically runs `npm install` then `npm start`
   - No extra configuration needed — it reads the `PORT` env var automatically

4. **Get your live URL**
   - Once deployed, go to the service → **Settings** → **Networking** → **Generate Domain**
   - Open the generated URL — you should see the "It's alive! 🚀" page

5. **Test auto-redeploy**
   - Edit `public/index.html` locally
   - Commit and push to GitHub
   - Railway will automatically detect the push and redeploy
