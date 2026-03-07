export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  images: string[];
  client: string;
  date: string;
  url: string;
  description: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "Food Delivery App",
    category: "mobile",
    images: [
      "/portfolio/food-mobile-1.png",
      "/portfolio/food-mobile-2.png",
    ],
    client: "Startup Kitchen",
    date: "2023",
    url: "https://example.com",
    description:
      "A modern mobile-first food delivery application built with performance and UX in mind. Real-time order tracking, seamless checkout flow, and clean UI optimized for conversion.",
  },
  {
    id: 2,
    title: "Hotel Admin Dashboard",
    category: "web",
    images: [
      "/portfolio/hotel-admin-1.png",
      "/portfolio/hotel-admin-2.png",
      "/portfolio/hotel-admin-3.png",
    ],
    client: "Luxury Stay Group",
    date: "2022",
    url: "https://example.com",
    description:
      "Comprehensive admin dashboard for hotel management. Includes booking analytics, staff control, reporting system, and dynamic room availability management.",
  },
  {
    id: 3,
    title: "Industrial B2B Platform",
    category: "web",
    images: [
      "/portfolio/industrial-1.png",
      "/portfolio/industrial-2.png",
    ],
    client: "Global Industrial Co.",
    date: "2024",
    url: "https://example.com",
    description:
      "Enterprise-level B2B platform designed for industrial suppliers. Focused on scalable architecture, role-based permissions, and optimized procurement workflow.",
  },
  {
    id: 4,
    title: "AI-Powered Chat Application",
    category: "web",
    images: [
      "/portfolio/chatApp-1.png",
      "/portfolio/chatApp-2.png",
      "/portfolio/chatApp-3.png",
    ],
    client: "Internal SaaS Automation Project",
    date: "2023",
    url: "https://example.com",
    description:
      "A modern chat application integrated with OpenAI API, designed to provide real-time intelligent responses. The app supports natural language conversations, email drafting, and code generation within a clean, dark-themed UI.",
  },
  {
    id: 5,
    title: "MODA – Linen Tiered Sundress Product",
    category: "web",
    images: [
      "/portfolio/wear-1.png",
      "/portfolio/wear-2.png",
    ],
    client: "MODA – Women’s Contemporary Fashion Brand (E-commerce Retail)",
    date: "2025",
    url: "https://example.com",
    description:
      "Developed a responsive e-commerce product detail page with dynamic product gallery, size selection, and cart functionality. Focused on clean UI architecture, component reusability, and performance optimization for seamless user experience.",
  },
  {
    id: 6,
    title: "AI Resume Analyzer – ATS Optimization Platform",
    category: "web",
    images: [
      "/portfolio/resume-1.png",
      "/portfolio/resume-2.png",
    ],
    client: "CareerTech Startup",
    date: "2025",
    url: "https://example.com",
    description:
      "Developed a full-stack AI-powered web application that analyzes resumes against job descriptions using NLP and keyword matching. The platform generates match scores, skill gap insights, and actionable improvement suggestions through OpenAI API integration.",
  },
];