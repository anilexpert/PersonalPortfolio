export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "ehr-dashboard",
    title: "EHR SaaS Platform",
    category: "Enterprise UX",
    image: "/thumb1.png",
    description: "Redesigned behavioral health system focusing on clinician efficiency and patient outcomes.",
    results: "+35% efficiency",
    tags: ["UX Research", "Design System", "Product Strategy"]
  },
  {
    slug: "ai-analytics",
    title: "AI Analytics Dashboard",
    category: "AI UX",
    image: "/thumb2.png",
    description: "Data-driven insights platform for real-time monitoring of predictive models.",
    results: "+42% engagement",
    tags: ["AI Interaction", "Data Viz", "Dashboard"]
  },
  {
    slug: "fintech-app",
    title: "Neobank Mobile Experience",
    category: "Fintech",
    image: "/thumb1.png",
    description: "End-to-end design for a next-gen digital banking app targeting Gen Z.",
    results: "4.9/5 App Store",
    tags: ["Mobile UX", "Motion Design", "Visual Design"]
  }
];
