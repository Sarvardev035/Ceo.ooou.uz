/**
 * Single source of truth for everything shown on Ceo.ooou.uz.
 * Sources: GitHub profile README, LinkedIn profile, and sarvar's own notes.
 * Do not add certifications, awards or events that are not on LinkedIn or confirmed by sarvar.
 */

export const profile = {
  brand: "Ceo.ooou.uz",
  name: "Sarvarbek Sharipboyev",
  shortName: "Sarvar",
  title: "Founder & CEO of ooou.uz",
  roles: ["Full-Stack Engineer", "QA Engineer", "AI Engineer", "Product Builder"],
  location: "Tashkent, Uzbekistan",
  intro:
    "I build products end to end: from the first test case to production on AWS. Today I run ooou.uz and ship Bahola (SmartQR), a QR feedback system used by restaurants, hotels and clinics, with Claude and Antigravity as my AI pair engineers.",
  email: "sarvarsharipov1035@gmail.com",
  links: {
    github: "https://github.com/Sarvardev035",
    linkedin: "https://www.linkedin.com/in/sarvar-sharipov-4bb187332/",
    telegram: "https://t.me/go0fy",
    company: "https://ooou.uz",
  },
};

export const stats = [
  { value: 2023, suffix: "", label: "Writing code since" },
  { value: 4186, suffix: "", label: "LinkedIn followers" },
  { value: 10, suffix: "+", label: "Hackathons & competitions" },
  { value: 8, suffix: "", label: "Certifications" },
];

export const recruiterFacts = [
  ["Roles", "Full-Stack · QA Automation · AI Engineer"],
  ["Stack", "React, Next.js, TypeScript, Python, PostgreSQL, AWS"],
  ["Languages", "Uzbek (native), English (full professional), Russian (professional), German (elementary)"],
  ["Based in", "Tashkent · open to remote"],
  ["Open to", "Engineering roles, internships, partnerships"],
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Founder & CEO · Full-Stack, QA & AI Engineer",
    company: "ooou.uz · Bahola (SmartQR)",
    period: "2026 – Present",
    location: "Tashkent",
    current: true,
    points: [
      "Validated the idea with restaurant owners, then built and launched Bahola: QR feedback, Telegram alerts, cashback and multi-branch analytics. Officially deployed in October 2026 with paying customers.",
      "Own the whole stack alone: Next.js, Prisma, PostgreSQL (Supabase), AWS EC2, nginx, Cloudflare.",
      "Ship with Claude and Antigravity as AI pair engineers for planning, code, review, tests and AI receipt verification.",
    ],
    tags: ["Next.js", "Prisma", "AWS", "Claude", "Antigravity"],
  },
  {
    role: "Full-Stack QA Developer",
    company: "Uyqur Team",
    period: "May 2026 – Jun 2026",
    location: "On-site",
    points: [
      "Worked on-site as a full-stack QA developer, testing releases end to end and turning bugs into clear, reproducible reports.",
      "Shipped frontend and backend fixes alongside the team, closing the loop from bug report to deployed fix.",
    ],
    tags: ["QA", "Manual & automated testing", "React", "Node.js"],
  },
  {
    role: "Full-Stack QA Engineer",
    company: "Self-employed",
    period: "Jan 2024 – Present",
    location: "Remote",
    points: [
      "Built responsive, interactive web and mobile interfaces for clients, from requirements to delivery.",
      "Led a small development team and mentored junior developers on code quality.",
    ],
    tags: ["React", "JavaScript", "Python", "QA"],
  },
  {
    role: "Quality Assurance Specialist",
    company: "Upwork · Freelance",
    period: "Mar 2024 – Jul 2024",
    location: "United States · Remote",
    points: ["QA for e-commerce and software infrastructure projects for US clients."],
    tags: ["QA", "E-commerce", "Bug tracking"],
  },
];

export const education = [
  { school: "Amity University Tashkent", detail: "BSc, Full-Stack track · Grade 9/10", period: "Nov 2024 – May 2027" },
  { school: "Amity University Tashkent", detail: "Foundation year · CGPA 7.5/10", period: "Sep 2023 – May 2024" },
  { school: "Uzcard Academy", detail: "Payment systems & IT · 90/100", period: "Feb 2026 – Apr 2026" },
  { school: "Najot Ta'lim", detail: "Frontend development", period: "Sep 2023 – Nov 2024" },
];

export type Credential = {
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  note?: string;
};

export const certifications: Credential[] = [
  { name: "Selenium Basics", issuer: "Coursera", date: "Apr 2026", note: "Test automation, locators, automated test cases. ID NJ3MY90GXTST" },
  { name: "AWS Cloud Technical Essentials", issuer: "Amazon Web Services", date: "Mar 2026", note: "IAM, EC2, S3, Lambda, CloudWatch. ID OMVLD0YX6E2H" },
  { name: "Paynet Hackathon", issuer: "JSC Paynet", date: "Mar 2026", note: "Certificate of participation. ID 287903" },
  { name: "ISRC 2025", issuer: "Westford Global Education", date: "Jan 2026", note: "ID ISRF-1000000606" },
  { name: "5G Base Stations", issuer: "Huawei", date: "Nov 2025", note: "ID EGB20251123000267" },
  { name: "5G Network (gNodeB)", issuer: "Huawei", date: "Nov 2025", note: "5G New Radio. ID ICT20251115000898" },
  { name: "Cybersecurity", issuer: "Cyber", date: "Nov 2025", note: "Cybersecurity and cyberlaw" },
  { name: "UzCombinator", issuer: "UzCombinator", note: "AI-based card-less ATM access" },
];

export const awards: Credential[] = [
  { name: "Huawei 5G Competition", issuer: "Huawei", date: "Jan 2026", note: "Strong team result in a high-level competition on 5G network systems and online labs." },
  { name: "Mirzo Ulug'bek Vorislari Hackathon", issuer: "IT Park", date: "Feb 2026", note: "Selected participant with Amity University Tashkent." },
  { name: "Odoo ERP Hackathon 2025", issuer: "IT Park · PDP University · Odoo Partners", date: "Oct 2025", note: "Two-day hackathon building solutions on Odoo ERP." },
  { name: "Research article submitted", issuer: "Matrix Academic International Online Journal", date: "Dec 2025", note: "Under review." },
  { name: "Cyber Hygiene, OSINT & Social Engineering", issuer: "Team Europe Initiative on Digital Cooperativity in Central Asia", date: "Nov 2025" },
  { name: "Skillbox scholarship", issuer: "Skillbox", date: "Nov 2025", note: "$500 course access, via Uzcard." },
  { name: "Foundation Certificate", issuer: "Amity University", date: "Jan 2024" },
  { name: "JavaScript Expert", issuer: "Code with Mosh" },
  { name: "IELTS", issuer: "English proficiency", date: "2022" },
  { name: "CEFR", issuer: "English proficiency", date: "2022" },
];

export type Highlight = {
  name: string;
  detail: string;
  date?: string;
  tag: string;
  url?: string;
};

export const hackathons: Highlight[] = [
  {
    name: "Agrobank AI 500 Hackathon",
    detail: "1,000+ teams. Built two AI products: Face ID card-less cash withdrawal and a sign-language accessibility app.",
    tag: "AI · Fintech",
  },
  {
    name: "Central Bank of Uzbekistan Hackathon",
    detail: "Team Amity Juniors. Personal finance MVP with multi-account dashboard, debt tracking and AI expense categorization.",
    date: "Mar 2026",
    tag: "Fintech",
  },
  {
    name: "Paynet Hackathon 2026",
    detail: "Solved real fintech business cases and pitched on stage among 40 teams.",
    date: "Feb 2026",
    tag: "Fintech",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7432491040873443328/",
  },
  {
    name: "AI Sign Language Hackathon",
    detail: "3 days, real-time speech ↔ sign language translation prototype. Became Voxly AI.",
    date: "Feb 2026",
    tag: "AI · Accessibility",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7429211100715409409/",
  },
  {
    name: "Huawei 5G Competition",
    detail: "Network Digital Power competition. Team secured a strong position while preparing for HCIA 5G.",
    date: "2025 – 2026",
    tag: "Networks",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7420501965882724353/",
  },
  {
    name: "Odoo ERP Hackathon",
    detail: "Two-day ERP hackathon by IT Park, PDP University and Odoo Partners.",
    date: "Oct 2025",
    tag: "ERP",
  },
  {
    name: "ICPC & Huawei ICT Competition",
    detail: "International programming and ICT competitions. Algorithms under time pressure.",
    tag: "Competition",
  },
  {
    name: "Startup track · Yoshlar Ventures",
    detail: "Startup reached the top 10% of about 1,500 teams. Member of Yoshlar Ventures.",
    tag: "Startup",
  },
];

export const events: Highlight[] = [
  { name: "Google for Developers", detail: "Attended to meet developers and learn about the latest Google tech.", date: "Oct 2026", tag: "Conference" },
  { name: "Bahola public launch", detail: "Officially deployed Bahola at ooou.uz with a free trial for venues.", date: "Oct 2026", tag: "Launch", url: "https://ooou.uz" },
  { name: "Bahola customer research", detail: "Asked restaurant owners about feedback, pricing and cashback to validate demand before building.", date: "Sep 2026", tag: "Research" },
  { name: "Amity International IDEATHON 2026", detail: "Helped promote Amity's international ideathon for school students.", date: "Apr 2026", tag: "Community" },
  { name: "Uzcard Academy", detail: "Payment systems, PM, HR, PR and cybersecurity training. Graduated with 90/100.", date: "Feb – Apr 2026", tag: "Training" },
];

export const stack = [
  "Next.js", "React", "TypeScript", "JavaScript", "Python", "Node.js", "Prisma", "PostgreSQL",
  "Supabase", "AWS", "Cloudflare", "nginx", "Tailwind", "Three.js", "PyTorch", "Selenium",
  "QA Automation", "Prompt Engineering", "Claude", "Antigravity", "C++", "Git",
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Fineco (Inteullpo)",
    description: "AI finance platform that analyzes spending behavior and gives budgeting and investment recommendations.",
    tags: ["Full-Stack", "AI", "Fintech"],
    demo: "https://www.inteullpo.online/login",
  },
  {
    name: "Project Task Manager",
    description: "Task and project management frontend built with React and a mock API.",
    tags: ["React", "Frontend"],
  },
  {
    name: "Click internship store",
    description: "E-commerce storefront built as a real exam project for Click.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sarvardev035/onlinestore-click-intern",
    demo: "https://sarvardev035.github.io/onlinestore-click-intern",
  },
  {
    name: "Jayhun Restoran website",
    description: "Website for Jayhun Restoran, the first paying Bahola customer.",
    tags: ["Next.js", "Client work"],
    github: "https://github.com/Sarvardev035/Jayhunweb",
  },
  {
    name: "Earth Real-Time Rotation",
    description: "3D model of the Earth, Moon and stars showing rotation angle and speed in real time.",
    tags: ["Three.js", "WebGL"],
    github: "https://github.com/Sarvardev035/Earthe-model-real-time-rotation",
  },
  {
    name: "Admin Dashboard",
    description: "Admin dashboard with analytics, data tables and a responsive UI.",
    tags: ["TypeScript", "Dashboard"],
    github: "https://github.com/Sarvardev035/Admin-dashboard",
    demo: "https://sarvardev035.github.io/Admin-dashboard",
  },
];
