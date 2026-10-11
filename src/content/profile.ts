// All portfolio text lives here. Edit this file to update the website.
// To add a photo: put the image in /public (e.g. /public/manju.jpg) and set photo: "/manju.jpg".
const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;

export const profile = {
  name: "Manjunatha A",
  title: "MBA — Finance & Operations",
  tagline: "Aspiring Finance Manager turning numbers into clear decisions and smooth operations.",
  photo: "/manjunatha.jpg" as string,
  resume: "/Manjunatha_A_Resume.pdf",
  phone: "9606785344",
  email: "manjunathmanju4832@gmail.com",
  linkedin: "https://www.linkedin.com/",
  location: "Bengaluru, India",
  stats: [
    { value: "8.21", label: "B.Com SGPA" },
    { value: "2027", label: "MBA batch" },
    { value: "4", label: "Certifications" },
  ],
  summary:
    "Results-driven MBA student specializing in Finance and Operations with strong knowledge in financial accounting, budgeting, business strategy, and operational management. Proven ability to support business growth through financial analysis, project coordination, and market research gained through academic projects and practical exposure. Adept at problem-solving, data-driven decision-making, and team collaboration.",
  education: [
    { degree: "MBA — Finance and Operations", school: "Presidency University, Bangalore", period: "2025 – 2027", score: "CGPA 6.89" },
    { degree: "B.Com", school: "Sir M.V. Govt. Arts & Commerce College, Kuvempu University", period: "2022 – 2025", score: "SGPA 8.21" },
  ],
  experience: [
    {
      role: "Operations Intern",
      company: "Mitra Softwares, Shivamogga",
      link: "https://mitrasoftwares.in/",
      period: "July – August 2026",
      points: [
        "Gained practical exposure to workflow management and ERP-based data processing",
        "Assisted in ID card designing and data processing activities",
        "Developed an understanding of daily operational processes, task coordination and workflow execution",
        "Gained practical knowledge of data handling, process monitoring and maintaining work accuracy",
      ],
    },
  ],
  competencies: [
    { title: "Financial Analysis & Budgeting", text: "Analyzing financial data, preparing reports and supporting decision-making using MS Excel." },
    { title: "Operations & Process Coordination", text: "Understanding business operations, workflow management and coordinating teams for smooth execution." },
    { title: "Communication & Collaboration", text: "Strong interpersonal and presentation skills in team-oriented environments." },
  ],
  tools: ["MS Excel", "MS PowerPoint", "Digital Marketing Tools", "Wix (Web Development)"],
  softSkills: ["Communication", "Team Player", "Interpersonal Skills", "Time Management", "Adaptability"],
  projects: [
    {
      title: "An Empirical Study on Online Scams in India",
      org: "Research Project · Kuvempu University",
      link: drive("1tQso0utu9S4FyF5prn_OEKaWcXYxdD62"),
      points: [
        "Conducted a project on online scams and digital fraud awareness in India",
        "Analyzed common cyber fraud methods and preventive measures",
        "Presented findings and recommendations for safer digital transactions",
      ],
    },
    {
      title: "PureGhee — E-commerce Website for an Organic Ghee Brand",
      org: "Web Development & Digital Marketing · Wix",
      link: "https://manjunathmanju4832.wixsite.com/organicpureghee",
      points: [
        "Designed and built an online store on Wix for a small-batch desi cow ghee brand, positioned as \"Nature's Liquid Gold\"",
        "Set up a product catalogue with categories (Vedic A2 Ghee, Herbal Infusions, Wellness Blends), pricing and a best-sellers showcase",
        "Communicated the brand story through content on traditional Bilona churning, ethical sourcing and lab-tested quality",
        "Added customer testimonials, a blog and social media links to build trust and engagement with health-conscious buyers",
      ],
    },
  ],
  certifications: [
    { name: "BUS301: Human Resource Management", issuer: "Saylor.org University", year: "2026", link: drive("1IeJuOoIZu_hz4NPykW2_mRPYlrU-9M4m") },
    { name: "National Service Scheme (NSS)", issuer: "NSS", year: "2024 – 2025", link: drive("15cDtznkzYEAyzulzWwowc57ia_vAg1KD") },
    { name: "AI-Powered Shopping Ads Certificate", issuer: "Google", year: "2026", link: drive("1f9Kvkk79W03xptGhLc98lC9oBLPkZufz") },
    { name: "Operations & Data Management Internship", issuer: "Mitra Softwares, Shivamogga", year: "2026", link: drive("1UIHWGdz29irTGxGHa3uUzD8hFzczIJFo") },
  ],
  achievements: [
    "Participated in NSS activities and community service programs in and around Bhadravathi, contributing to social awareness, teamwork and volunteer initiatives.",
    "Successfully coordinated team activities and contributed to effective event management during college programs.",
  ],
};
