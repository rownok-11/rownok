# GitHub এ আপলোড করার সম্পূর্ণ গাইড

## পূর্ব প্রস্তুতি

### ১. Git ইনস্টল করুন
যদি আপনার কম্পিউটারে Git ইনস্টল না থাকে, তাহলে এখান থেকে ডাউনলোড করুন:
- **Windows**: https://git-scm.com/download/win
- **Mac**: https://git-scm.com/download/mac
- **Linux**: `sudo apt-get install git` (Ubuntu/Debian)

### ২. GitHub অ্যাকাউন্ট তৈরি করুন
যদি আপনার GitHub অ্যাকাউন্ট না থাকে:
1. https://github.com এ যান
2. "Sign up" বাটনে ক্লিক করুন
3. আপনার তথ্য দিয়ে অ্যাকাউন্ট তৈরি করুন

## GitHub এ রিপোজিটরি তৈরি করুন

### ধাপ ১: নতুন রিপোজিটরি তৈরি
1. GitHub এ লগইন করুন
2. উপরের ডান কোণে "+" আইকনে ক্লিক করুন
3. "New repository" সিলেক্ট করুন
4. Repository এর নাম দিন (উদাহরণ: `portfolio-website`)
5. Description যোগ করুন (ঐচ্ছিক)
6. **Public** বা **Private** সিলেক্ট করুন
7. "Create repository" বাটনে ক্লিক করুন

## প্রজেক্ট আপলোড করার পদ্ধতি

### পদ্ধতি ১: Terminal/Command Prompt ব্যবহার করে

#### ধাপ ১: প্রজেক্ট ফোল্ডারে যান
```bash
cd /path/to/your/project
```

#### ধাপ ২: Git Initialize করুন
```bash
git init
```

#### ধাপ ৩: Git Config সেটআপ (প্রথমবার)
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

#### ধাপ ৪: সব ফাইল Add করুন
```bash
git add .
```

#### ধাপ ৫: প্রথম Commit করুন
```bash
git commit -m "Initial commit: Portfolio website"
```

#### ধাপ ৬: GitHub Repository এর সাথে Connect করুন
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
```

**নোট:** `YOUR-USERNAME` এবং `YOUR-REPOSITORY-NAME` আপনার সঠিক তথ্য দিয়ে প্রতিস্থাপন করুন।

#### ধাপ ৭: Main Branch এ Push করুন
```bash
git branch -M main
git push -u origin main
```

যদি পাসওয়ার্ড চায়, তাহলে GitHub Personal Access Token ব্যবহার করুন (নিচে দেখুন)।

### পদ্ধতি ২: GitHub Desktop ব্যবহার করে (সহজ)

#### ধাপ ১: GitHub Desktop ইনস্টল করুন
- https://desktop.github.com/ থেকে ডাউনলোড করুন
- ইনস্টল করে GitHub দিয়ে লগইন করুন

#### ধাপ ২: Repository যোগ করুন
1. "File" > "Add Local Repository" ক্লিক করুন
2. আপনার প্রজেক্ট ফোল্ডার সিলেক্ট করুন
3. "create a repository" লিংকে ক্লিক করুন
4. "Create Repository" বাটনে ক্লিক করুন

#### ধাপ ৩: Commit করুন
1. বাম পাশের সব পরিবর্তন চেক করুন
2. নিচে Commit message লিখুন (উদাহরণ: "Initial commit")
3. "Commit to main" বাটনে ক্লিক করুন

#### ধাপ ৪: GitHub এ Publish করুন
1. উপরে "Publish repository" বাটনে ক্লিক করুন
2. Repository এর নাম কনফার্ম করুন
3. "Keep this code private" চেক/আনচেক করুন
4. "Publish Repository" ক্লিক করুন

## Personal Access Token তৈরি করুন (যদি প্রয়োজন হয়)

### ধাপ ১: GitHub Settings এ যান
1. GitHub এ লগইন করুন
2. উপরের ডান কোণে প্রোফাইল ছবিতে ক্লিক করুন
3. "Settings" সিলেক্ট করুন

### ধাপ ২: Developer Settings
1. বাম সাইডবারে নিচে "Developer settings" ক্লিক করুন
2. "Personal access tokens" > "Tokens (classic)" ক্লিক করুন
3. "Generate new token" > "Generate new token (classic)" ক্লিক করুন

### ধাপ ৩: Token তৈরি করুন
1. Note দিন (উদাহরণ: "Portfolio Upload")
2. Expiration সিলেক্ট করুন (উদাহরণ: 90 days)
3. **repo** checkbox টিক দিন
4. নিচে "Generate token" বাটনে ক্লিক করুন
5. **Token টি কপি করে নিরাপদ জায়গায় সেভ করুন** (আবার দেখা যাবে না!)

### ধাপ ৪: Token ব্যবহার করুন
যখন Git পাসওয়ার্ড চাইবে, তখন আপনার GitHub পাসওয়ার্ডের পরিবর্তে এই Token ব্যবহার করুন।

## পরবর্তী আপডেট আপলোড করা

যখন আপনি কোড পরিবর্তন করবেন এবং আবার আপলোড করতে চাইবেন:

```bash
# সব পরিবর্তন Add করুন
git add .

# Commit করুন
git commit -m "Update: Added new features"

# Push করুন
git push origin main
```

## GitHub Pages এ Deploy করা (ওয়েবসাইট লাইভ করা)

### ধাপ ১: Build করুন
```bash
pnpm run build
```

### ধাপ ২: GitHub Pages Enable করুন
1. GitHub repository পেজে যান
2. "Settings" ট্যাবে ক্লিক করুন
3. বাম সাইডবারে "Pages" ক্লিক করুন
4. Source এ "Deploy from a branch" সিলেক্ট করুন
5. Branch এ "main" এবং folder এ "/root" বা "/docs" সিলেক্ট করুন
6. "Save" ক্লিক করুন

### পদ্ধতি ২: Vercel ব্যবহার করে (সবচেয়ে সহজ)

#### ধাপ ১: Vercel এ যান
1. https://vercel.com এ যান
2. GitHub দিয়ে সাইন আপ করুন

#### ধাপ ২: Deploy করুন
1. "New Project" ক্লিক করুন
2. আপনার GitHub repository সিলেক্ট করুন
3. "Deploy" বাটনে ক্লিক করুন
4. কয়েক মিনিট অপেক্ষা করুন
5. আপনার সাইট লাইভ হয়ে যাবে!

### পদ্ধতি ৩: Netlify ব্যবহার করে

#### ধাপ ১: Netlify এ যান
1. https://netlify.com এ যান
2. GitHub দিয়ে সাইন আপ করুন

#### ধাপ ২: Deploy করুন
1. "Add new site" > "Import an existing project" ক্লিক করুন
2. "Deploy with GitHub" সিলেক্ট করুন
3. আপনার repository সিলেক্ট করুন
4. Build command: `pnpm run build`
5. Publish directory: `dist`
6. "Deploy site" ক্লিক করুন

## সমস্যা সমাধান

### সমস্যা: "Permission denied"
**সমাধান:** Personal Access Token ব্যবহার করুন (উপরে দেখুন)

### সমস্যা: "fatal: remote origin already exists"
**সমাধান:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
```

### সমস্যা: "Updates were rejected"
**সমাধান:**
```bash
git pull origin main --rebase
git push origin main
```

### সমস্যা: Large files (node_modules)
**সমাধান:** `.gitignore` ফাইল তৈরি করুন:
```
node_modules/
dist/
.env
*.log
.DS_Store
```

## গুরুত্বপূর্ণ টিপস

1. **কখনও node_modules আপলোড করবেন না** - `.gitignore` ফাইলে যোগ করুন
2. **API Keys বা পাসওয়ার্ড আপলোড করবেন না** - `.env` ফাইল `.gitignore` এ রাখুন
3. **নিয়মিত Commit করুন** - ছোট ছোট পরিবর্তনের জন্য
4. **Meaningful Commit Messages লিখুন** - যেমন "Added contact form" বা "Fixed navigation bug"
5. **README.md ফাইল রাখুন** - প্রজেক্টের বিবরণ দিয়ে

## যোগাযোগ

যদি কোন সমস্যা হয়, আমাকে জানান:
- Email: raisulislamrownok7@gmail.com
- Instagram: @ri_rownok

---

**সফলতা কামনা করছি! 🚀**
