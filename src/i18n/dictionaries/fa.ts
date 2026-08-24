import type { Dictionary } from "../types";

const fa: Dictionary = {
  meta: {
    title: "آیسا لطفی | توسعه‌دهنده فول‌استک وب و موبایل",
    description:
      "توسعه‌دهنده فول‌استک وب و موبایل؛ ساخت محصولات مدرن و مقیاس‌پذیر از رابط کاربری تا بک‌اند با React، Next.js، React Native، Node.js و PostgreSQL. تمرکز روی کارایی، معماری تمیز و تجربه‌کاربری دقیق.",
    keywords:
      "توسعه‌دهنده فول‌استک, برنامه‌نویس وب, توسعه‌دهنده موبایل, React, Next.js, NestJS, React Native, TypeScript, PostgreSQL, آیسا لطفی",
  },

  nav: {
    work: "نمونه‌کارها",
    experience: "تجربه کاری",
    skills: "مهارت‌ها",
    about: "درباره من",
    contact: "تماس",
    name: "آیسا لطفی",
    toggleMenu: "باز و بسته کردن منو",
    resume: "رزومه",
  },

  common: {
    skipToContent: "پرش به محتوا",
    liveSite: "مشاهده سایت",
    github: "گیت‌هاب",
    caseStudy: "مطالعه موردی",
    featured: "ویژه",
  },

  hero: {
    badge: "آماده همکاری",
    name: "آیسا لطفی",
    role: "توسعه‌دهنده فول‌استک وب و موبایل",
    tagline:
      "محصول‌های وب و موبایل مدرن و مقیاس‌پذیر را از رابط کاربری تا بک‌اند می‌سازم؛ با تمرکز ویژه بر کارایی، معماری تمیز و تجربه‌کاربری دقیق.",
    ctaWork: "مشاهده نمونه‌کارها",
    ctaContact: "تماس با من",
    socialsLabel: "من را در بیابید",
    facts: [
      { value: "وب + موبایل", label: "پلتفرم‌های محصول" },
      { value: "۱ سال", label: "کارآموزی حرفه‌ای" },
      { value: "همدان، ایران", label: "UTC+3:30 · دورکاری" },
    ],
  },

  projects: {
    sectionLabel: "نمونه‌کارهای منتخب",
    headline1: "پروژه‌های",
    headline2: "شاخص.",
    description:
      "محصول‌های واقعی و پروژه‌های شخصی متمرکز — از وب‌سایت‌های کارفرمایان تا اپلیکیشن‌های فول‌استک.",
    outcomesLabel: "دستاوردها",
  },

  experience: {
    sectionLabel: "تجربه حرفه‌ای",
    headline1: "مسیر",
    headline2: "حرفه‌ای من.",
    description:
      "تجربه عملی ساخت نرم‌افزار واقعی در محیط حرفه‌ای.",
    items: [
      {
        role: "کارآموز توسعه فول‌استک",
        company: "شبکه آوین رادین",
        organization: "پارک علم و فناوری همدان",
        website: { href: "https://avinradin.com/", label: "وب‌سایت شرکت" },
        period: "۱ سال",
        description:
          "یک سال کارآموزی حرفه‌ای در حوزه توسعه فول‌استک وب؛ مشارکت در تولید نرم‌افزار واقعی در لایه‌های رابط کاربری، منطق برنامه و داده.",
      },
      {
        role: "توسعه‌دهنده وب مستقل",
        company: "فریلنس",
        period: "۲۰۲۵ — اکنون",
        description:
          "پروژه‌های کارفرمایی و شخصی به صورت کامل. طراحی، پیاده‌سازی و راه‌اندازی وب‌سایت رسمی سنگ صدف با Next.js و Tailwind CSS.",
      },
    ],
  },

  skills: {
    sectionLabel: "مهارت‌های فنی",
    headline1: "ابزارهایی که با آن‌ها",
    headline2: "می‌سازم.",
    description:
      "مروری بر تکنولوژی‌ها و اصولی که در توسعه وب، بک‌اند و موبایل با آن‌ها کار می‌کنم.",
    coreLabel: "استک اصلی",
    coreStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "React Native",
      "PostgreSQL",
      "Docker",
    ],
    categories: [
      {
        key: "frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "طراحی واکنش‌گرا",
          "رابط‌های راست‌به‌چپ",
          "معماری کامپوننت‌محور",
        ],
      },
      {
        key: "backend",
        items: [
          "Node.js",
          "NestJS",
          "REST API",
          "Supabase",
          "احراز هویت",
          "سطح دسترسی",
          "یکپارچه‌سازی API",
          "توابع Serverless",
          "Edge Functions",
        ],
      },
      {
        key: "database",
        items: [
          "PostgreSQL",
          "SQLite",
          "SQL",
          "طراحی پایگاه داده",
          "مدل‌سازی داده",
          "ذخیره‌سازی محلی داده",
        ],
      },
      {
        key: "mobile",
        items: [
          "React Native",
          "Expo",
          "Expo Router",
          "توسعه اندروید",
          "رابط‌های موبایل واکنش‌گرا",
          "اپلیکیشن‌های آفلاین-اول",
        ],
      },
      {
        key: "devops",
        items: [
          "Docker",
          "Git",
          "GitHub",
          "Vercel",
          "Supabase CLI",
          "فرایند استقرار",
          "مدیریت Environment",
        ],
      },
      {
        key: "design",
        items: [
          "Figma",
          "طراحی رابط کاربری",
          "طراحی تجربه کاربری",
          "دیزاین سیستم",
          "وایرفریم",
          "پروتوتایپ",
          "تفکر محصول",
        ],
      },
      {
        key: "practices",
        items: [
          "دیباگ",
          "بهینه‌سازی کارایی",
          "اصول SEO",
          "دسترس‌پذیری",
          "کد تمیز",
          "کامپوننت‌های قابل استفاده مجدد",
          "کنترل نسخه",
        ],
      },
    ],
  },

  about: {
    sectionLabel: "درباره من",
    headline: "از رابط کاربری تا پایگاه داده، لایه به لایه.",
    subheadline: "توسعه‌دهنده فول‌استک وب و موبایل",
    bio: [
      "من آیسا لطفی هستم، توسعه‌دهنده فول‌استک وب و موبایل. محصول‌ها را از رابط کاربری تا منطق برنامه، بک‌اند، پایگاه داده و استقرار پیش می‌برم و برایم مهم است که این لایه‌ها چطور با هم کار می‌کنند.",
      "تمرکز من بر کاربردپذیری، کارایی و معماری تمیز است: کدی که نگهداری‌اش ساده باشد، رابطی که سریع حس شود و محصولی که یک مسئله واقعی را حل کند نه اینکه فقط امکانات را نمایش دهد.",
      "در کنار یک سال تجربه کارآموزی حرفه‌ای، مهندسی کامپیوتر می‌خوانم و مدام می‌سازم؛ پروژه‌های کارفرمایی، محصول‌های شخصی و بهبود مستمر ابزارهای خودم.",
    ],
    quote: "~ مهندسی ساده و صادقانه.",
    disciplines: {
      title: "زمینه‌های همکاری",
      items: [
        "اپلیکیشن‌های وب",
        "اپلیکیشن‌های موبایل",
        "REST API و بک‌اند",
        "پایگاه داده",
        "پیاده‌سازی رابط کاربری",
        "استقرار و دیپلوی",
      ],
    },
    principles: {
      title: "اصل‌های کاری",
      items: [
        "شفافیت اول — کد خوانا و تخمین صادقانه.",
        "کارایی یک قابلیت است، نه یک فکر آخرِ کار.",
        "قبل از نوشتن کد، مسئله را بفهم.",
      ],
    },
  },

  contact: {
    headline1: "بیایید چیز بزرگی",
    headline2: "بسازیم.",
    badge: "آماده همکاری",
    description:
      "برای همکاری تمام‌وقت، پروژه‌های فریلنس یا هر همکاری دیگر — از طریق ایمیل یا فرم زیر در ارتباط باشید. معمولاً کمتر از ۲۴ ساعت پاسخ می‌دهم.",
    formTitle: "ارسال پیام",
    fields: {
      name: "نام شما",
      email: "ایمیل شما",
      message: "پیام شما",
    },
    placeholders: {
      name: "اسم شما چیست؟",
      email: "نشانی ایمیل",
      message: "درباره پروژه یا موقعیت شغلی بنویسید...",
    },
    submit: "ارسال پیام",
    sending: "در حال ارسال...",
    sent: "پیام با موفقیت ارسال شد!",
    error: "خطایی رخ داد. دوباره تلاش کنید.",
    info: {
      connect: "ارتباط",
      studio: "اطلاعات",
      location: "موقعیت",
      timezone: "منطقه زمانی",
      response: "زمان پاسخ",
      languages: "زبان‌ها",
    },
    details: {
      location: "همدان، ایران",
      timezone: "UTC+3:30 (IRST)",
      response: "کمتر از ۲۴ ساعت",
      languages: "FA · EN · DE",
    },
    social: {
      github: "گیت‌هاب",
      linkedin: "لینکدین",
      email: "hello@aisalotfi.ir",
    },
    resumeCta: "مشاهده رزومه",
    closingLine: "یک پیام کافی است تا چیزی بزرگ شروع شود.",
  },

  caseStudy: {
    backToProjects: "بازگشت به نمونه‌کارها",
    overviewLabel: "نگاه کلی",
    problemLabel: "مسئله",
    solutionLabel: "راه‌حل",
    responsibilitiesLabel: "نقش من",
    techStackLabel: "تکنولوژی‌ها",
    challengesLabel: "چالش‌ها",
    outcomeLabel: "نتیجه",
    lessonsLabel: "درس‌های آموخته",
  },

  notFound: {
    title: "صفحه پیدا نشد",
    description: "صفحه‌ای که دنبالش هستید وجود ندارد یا جابه‌جا شده است.",
    cta: "بازگشت به خانه",
  },

  resumePage: {
    meta: {
      title: "رزومه",
      description:
        "رزومه آیسا لطفی — توسعه‌دهنده فول‌استک وب و موبایل (React، Next.js، NestJS، React Native، PostgreSQL).",
    },
    introduction:
      "توسعه‌دهنده فول‌استک وب و موبایل. یک سال کارآموزی حرفه‌ای به همراه پروژه‌های مستقل کارفرمایی — ساخت اپلیکیشن‌های مدرن از رابط کاربری تا بک‌اند و استقرار.",
    backToHome: "بازگشت به خانه",
    educationTitle: "تحصیلات",
    projectsTitle: "پروژه‌ها",
    experienceTitle: "تجربه کاری",
    skillsTitle: "مهارت‌ها",
    skillCategories: [
      {
        key: "frontend",
        items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        key: "backend",
        items: ["Node.js", "NestJS", "REST API", "Supabase", "احراز هویت"],
      },
      {
        key: "database",
        items: ["PostgreSQL", "SQLite", "SQL", "مدل‌سازی داده"],
      },
      {
        key: "mobile",
        items: ["React Native", "Expo", "Expo Router"],
      },
      {
        key: "devops",
        items: ["Docker", "Git", "GitHub", "Vercel"],
      },
    ],
    education: {
      degree: "کارشناسی مهندسی کامپیوتر",
      school: "همدان",
      year: "۲۰۲۲ — اکنون",
    },
    projects: [
      { name: "سنگ صدف — وب‌سایت رسمی شرکت", tech: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "فروشگاه اینترنتی", tech: ["React", "Node.js"] },
      { name: "داشبورد مدیریتی", tech: ["React", "TypeScript"] },
    ],
    experience: [
      {
        role: "کارآموز توسعه فول‌استک",
        company: "شبکه آوین رادین — پارک علم و فناوری همدان",
        period: "۱ سال",
        description: "توسعه فول‌استک وب در لایه‌های رابط کاربری، منطق برنامه و داده.",
      },
      {
        role: "توسعه‌دهنده وب مستقل",
        company: "فریلنس",
        period: "۲۰۲۵ — اکنون",
        description: "پروژه‌های کارفرمایی و شخصی، از جمله وب‌سایت رسمی سنگ صدف.",
      },
    ],
    downloadPdf: "دانلود PDF انگلیسی",
    downloadNote: "این صفحه را از مرورگر پرینت کنید یا به صورت PDF ذخیره کنید.",
  },

  footer: {
    crafted: "طراحی و توسعه توسط آیسا لطفی",
    allRights: "همه حقوق محفوظ است",
    navigate: "دسترسی سریع",
    elsewhere: "شبکه‌ها",
  },
};

export default fa;
