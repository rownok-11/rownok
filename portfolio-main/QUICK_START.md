# দ্রুত শুরু করুন (Quick Start Guide)

## ১. প্রজেক্ট সেটআপ

### প্রথম বার (First Time Setup)
```bash
# Dependencies ইনস্টল করুন
pnpm install
```

### ওয়েবসাইট চালু করুন (Start Website)
```bash
# ডেভেলপমেন্ট সার্ভার চালু করুন
pnpm run dev
```

ব্রাউজারে খুলুন: **http://localhost:5173**

## ২. অ্যাডমিন প্যানেল ব্যবহার

### লগইন করুন:
1. ওয়েবসাইটের উপরের ডান কোণে **লাল ADMIN বাটন** এ ক্লিক করুন
2. অথবা সরাসরি যান: **http://localhost:5173/admin**

### লগইন তথ্য:
```
Username: ri_rownok
Password: 15481@#Raisulislamrownok
```

### অ্যাডমিন প্যানেল থেকে:
- ✅ নতুন প্রজেক্ট যোগ করুন
- ✅ প্রজেক্ট এডিট/ডিলিট করুন
- ✅ নতুন ব্লগ পোস্ট লিখুন
- ✅ ব্লগ এডিট/ডিলিট করুন

## ৩. GitHub এ আপলোড করুন

### সংক্ষিপ্ত পদ্ধতি:
```bash
# Git repository তৈরি করুন
git init

# সব ফাইল যোগ করুন
git add .

# Commit করুন
git commit -m "Initial commit"

# GitHub repository এর সাথে connect করুন (আপনার তথ্য দিয়ে পরিবর্তন করুন)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push করুন
git branch -M main
git push -u origin main
```

### বিস্তারিত নির্দেশনা:
📄 দেখুন: **GITHUB_UPLOAD.md**

## ৪. লাইভ ওয়েবসাইট ডিপ্লয় করুন

### সবচেয়ে সহজ পদ্ধতি - Vercel:

1. **GitHub এ কোড আপলোড করুন** (উপরের ধাপ ৩ দেখুন)

2. **Vercel এ যান**
   - https://vercel.com
   - "Sign up with GitHub" ক্লিক করুন

3. **ডিপ্লয় করুন**
   - "New Project" ক্লিক করুন
   - আপনার repository সিলেক্ট করুন
   - "Deploy" ক্লিক করুন
   - ⏳ ২-৩ মিনিট অপেক্ষা করুন
   - ✅ আপনার সাইট লাইভ!

4. **আপনার লাইভ URL পাবেন**
   - উদাহরণ: `https://your-portfolio.vercel.app`

### Netlify ব্যবহার করতে চাইলে:
📄 দেখুন: **GITHUB_UPLOAD.md** (বিস্তারিত)

## ৫. ওয়েবসাইট কাস্টমাইজ করুন

### নিজের তথ্য পরিবর্তন করতে:

সব তথ্য অ্যাডমিন প্যানেল থেকে পরিবর্তন করতে পারবেন!

অথবা কোড এডিট করতে চাইলে:
- `src/app/App.tsx` - মূল অ্যাপ কম্পোনেন্ট
- `src/app/components/` - সব সেকশন এখানে

## ৬. প্রয়োজনীয় লিংক

- 📧 **Email**: raisulislamrownok7@gmail.com
- 📱 **Instagram**: [@ri_rownok](https://www.instagram.com/ri_rownok)

## ৭. সাহায্য প্রয়োজন?

### পুরো গাইড পড়ুন:
- 🇧🇩 **বাংলায় ওয়েবসাইট গাইড**: `BENGALI_GUIDE.md`
- 🇧🇩 **GitHub আপলোড গাইড**: `GITHUB_UPLOAD.md`
- 🇺🇸 **English README**: `README.md`

## সফল হোক আপনার পোর্টফোলিও! 🚀
