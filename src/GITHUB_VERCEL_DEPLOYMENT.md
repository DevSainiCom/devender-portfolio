# 🚀 GitHub + Vercel Deployment Guide

## Overview

You'll push your portfolio code to GitHub, then Vercel automatically deploys it. Every time you update and push to GitHub, your live portfolio updates automatically.

---

## Prerequisites

✅ GitHub account created ([github.com](https://github.com))  
✅ Logged into Vercel via GitHub ([vercel.com](https://vercel.com))  
✅ Portfolio folder: `devender-portfolio`  
✅ Git installed (ships with most OS; check: `git --version`)  

---

## **PHASE 1: Create GitHub Repository (5 minutes)**

### Step 1A: Go to GitHub

Navigate to: https://github.com/new

### Step 1B: Fill in Repository Details

| Field | Value |
|-------|-------|
| **Repository name** | `devender-portfolio` |
| **Description** | Security Operations Leader & Architect - Portfolio |
| **Visibility** | Public |
| **.gitignore** | None (already have one) |
| **License** | None (optional) |

### Step 1C: Create Repository

Click the green **"Create repository"** button.

### Step 1D: Copy Your Repository URL

You'll see a page like:

```
Quick setup — if you've done this kind of thing before

https://github.com/YOUR_USERNAME/devender-portfolio.git
```

**Copy this URL** — you'll need it in the next phase.

---

## **PHASE 2: Push Code to GitHub (5 minutes)**

### Step 2A: Open PowerShell in Your Portfolio Folder

```powershell
cd C:\Users\YourName\Documents\devender-portfolio
# Verify you're in the right place
dir src
```

You should see: `data`, `app`, `components` folders.

### Step 2B: Initialize Git (Copy & Paste All At Once)

```powershell
git init; git add .; git commit -m "Initial commit: portfolio setup"; git branch -M main; git remote add origin https://github.com/YOUR_USERNAME/devender-portfolio.git; git push -u origin main
```

**BEFORE pasting:**
- Replace `YOUR_USERNAME` with your actual GitHub username
- Example: `https://github.com/devendersaini/devender-portfolio.git`

### Step 2C: What You Should See

```
Enumerating objects: 42, done.
Counting objects: 100% (42/42), done.
Delta compression using up to 8 threads
Compressing objects: 100% (38/38), done.
Writing objects: 100% (42/42), 156.23 KiB | 2.10 MiB/s, done.
Total 42 (delta 18), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (18/18), done.
To https://github.com/YOUR_USERNAME/devender-portfolio.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Success!** Your code is now on GitHub.

### Step 2D: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/devender-portfolio
2. You should see:
   - `src/` folder
   - `package.json`
   - `README.md`
   - `.gitignore`
   - All your files!

---

## **PHASE 3: Deploy via Vercel (5 minutes)**

### Step 3A: Go to Vercel Dashboard

Navigate to: https://vercel.com/dashboard

### Step 3B: Import Your Repository

1. Click **"Add New"** (top right)
2. Select **"Project"**
3. Under **"Import Git Repository"**, you'll see your GitHub repos
4. Find **`devender-portfolio`** and click it

### Step 3C: Configure Project

Vercel auto-detects Next.js. Verify:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js ✓ |
| **Root Directory** | ./ ✓ |
| **Build Command** | npm run build ✓ |
| **Output Directory** | .next ✓ |
| **Environment Variables** | (leave empty) |

Everything should be correct. Just click **"Deploy"**.

### Step 3D: Wait for Deployment

You'll see a progress screen:

```
✓ Building
✓ Optimizing
✓ Finalizing
```

This takes 1-2 minutes. Grab coffee ☕

### Step 3E: Get Your Live URL

Once complete, you'll see:

```
✅ Deployment Complete

🎉 https://devender-portfolio.vercel.app

Visit your deployed project at the link above.
```

**That URL is your live portfolio!** 🎊

---

## **PHASE 4: Update Your Portfolio (How to Make Changes)**

Now that it's live, here's how to update it:

### Make Changes Locally

Edit `src/data/portfolio.ts`:
- Add projects
- Update skills
- Modify certifications
- Change cover letter

### Push Changes to GitHub

```powershell
git add .
git commit -m "Update: Added new projects"
git push
```

### Auto-Deploy to Vercel

Vercel automatically detects the push and redeploys in ~30 seconds.

Your live site updates automatically! ✨

---

## **PHASE 5: Add Custom Domain (Optional)**

### Buy a Domain

From: Namecheap, GoDaddy, Vercel, Google Domains, etc.

**Suggestions:**
- `devender.dev` (~$12/year)
- `devender.me` (~$20/year)  
- `devendersecurity.com` (~$10/year)

### Connect to Vercel

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain
3. Follow Vercel's DNS instructions (usually 2-5 minutes)

Your portfolio will be at: `https://your-domain.com` 🎉

---

## **Troubleshooting**

### "Repository not found"
- Check your GitHub username spelling
- Make sure repo was created successfully
- Try creating a new repo with a different name

### "fatal: not a git repository"
- Make sure you're inside the `devender-portfolio` folder
- Run: `pwd` to check location
- Then run: `git init` first

### "rejected... main branch"
- Run: `git pull origin main --allow-unrelated-histories`
- Then: `git push -u origin main`

### Deployment stuck
- Go to Vercel Dashboard
- Click your project
- Check the "Deployment" tab for errors
- Usually just npm install issues — wait 2-3 min and redeploy

### Need to revert changes
```powershell
git log  # See commit history
git revert <commit_hash>  # Undo a commit
git push
```

---

## **Workflow Summary**

```
Local Changes
    ↓
git add . && git commit -m "message" && git push
    ↓
GitHub updated
    ↓
Vercel auto-detects push
    ↓
Rebuilds & redeploys (30-60 seconds)
    ↓
Live portfolio updated
```

---

## **Common Tasks**

### Add a new project
1. Edit `src/data/portfolio.ts`
2. Add entry to `projects` array
3. Run: `git add . && git commit -m "Add project" && git push`
4. Wait 30 seconds → live!

### Update cover letter
1. Edit `coverLetter` in `src/data/portfolio.ts`
2. Run: `git add . && git commit -m "Update cover letter" && git push`
3. Wait 30 seconds → live!

### Add testimonial (once you have one)
1. Add `testimonials` array to portfolio.ts
2. Create `Testimonials.tsx` component
3. Import in `app/page.tsx`
4. Push to GitHub
5. Auto-deployed!

---

## **Your Live Portfolio Checklist**

- ✅ GitHub repo created
- ✅ Code pushed to GitHub
- ✅ Connected to Vercel via GitHub
- ✅ Portfolio deployed and live
- ✅ Auto-deploys on every push
- ⬜ (Optional) Add custom domain
- ⬜ (Optional) Add testimonials
- ⬜ Share URL with recruiters

---

## **Next Steps**

1. **Right now**: Follow Phases 1-3 above
2. **After deploy**: Test the live site
3. **This week**: Share with recruiters
4. **Ongoing**: Update as you complete new projects

---

## **Need Help?**

- **Git errors**: https://docs.github.com/en/get-started
- **Vercel docs**: https://vercel.com/docs
- **Next.js docs**: https://nextjs.org/docs

---

**Estimated Time to Live**: 15 minutes total  
**Cost**: $0 (Vercel free + GitHub free)  
**Auto-updates**: Yes, every push to GitHub  

**You're ready to launch! 🚀**
