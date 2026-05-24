export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string;
  tags: string[];
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "spendora",
    title: "AI-POWERED SMART EXPENSE ECOSYSTEM",
    category: "Spendora™",
    image: "/images/spendora.png",
    description: "Intelligent expense tracking and financial management powered by AI.",
    results: "+35% Savings Accuracy",
    tags: ["Fintech", "AI UX", "Mobile Design"],
    accentColor: "#00DA99" // Mint
  },
  {
    slug: "carenova",
    title: "FACILITY & COMPLIANCE MANAGEMENT PLATFORM",
    category: "Carenova™",
    image: "/images/carevanata.png",
    description: "Comprehensive enterprise platform for facility operations and compliance tracking.",
    results: "100% Compliance Rate",
    tags: ["Enterprise SaaS", "Workflow", "Dashboard"],
    accentColor: "#0D63CC" // Blue
  },
  {
    slug: "oasispad",
    title: "SMART KNOWLEDGE & PRODUCTIVITY WORKSPACE",
    category: "OasisPad™",
    image: "/images/oasispad.png",
    description: "Next-gen workspace for knowledge management and team collaboration.",
    results: "40% Productivity Boost",
    tags: ["Productivity", "SaaS", "UX Design"],
    accentColor: "#8B5CF6" // Purple
  },
  {
    slug: "ticketstack-retail",
    title: "RETAIL TICKETING EXPERIENCE REDESIGN",
    category: "TicketStack™",
    image: "/images/ticketstack.png",
    description: "Modernizing the retail ticketing process with an intuitive digital ecosystem.",
    results: "50% Faster Transactions",
    tags: ["Retail UX", "System Design"],
    accentColor: "#F43F5E" // Rose/Pink
  },
  {
    slug: "marketvisionai-intelligence",
    title: "AI-POWERED MARKET INTELLIGENCE PLATFORM",
    category: "MarketVisionAI™",
    image: "/images/marketvisionai.png",
    description: "Real-time market insights and predictive analytics for strategic decision making.",
    results: "Validated Market Trends",
    tags: ["AI Platform", "Data Viz"],
    accentColor: "#F59E0B" // Amber
  },
  {
    slug: "carevation-healthcare",
    title: "SMART CAREGIVING & COORDINATION PLATFORM",
    category: "Carevation™",
    image: "/images/pulse-grid.png",
    description: "Streamlining care coordination and patient monitoring for healthcare teams.",
    results: "+60% Care Efficiency",
    tags: ["Healthcare", "UX Strategy"],
    accentColor: "#10B981" // Emerald
  },
  {
    slug: "mri-logic-validation",
    title: "AI-ASSISTED MEDICAL DEVICE VALIDATION TOOL",
    category: "MRI Logic™",
    image: "/images/pulse-grid.png",
    description: "Cutting-edge AI tool for validating complex medical device data and compliance.",
    results: "99.9% Accuracy",
    tags: ["Healthcare", "AI", "Medical Tech"],
    accentColor: "#06B6D4" // Cyan
  },
  {
    slug: "supercampus",
    title: "DIGITAL LEARNING & ADMINISTRATION ECOSYSTEM",
    category: "SuperCampus™",
    image: "/images/spendora.png",
    description: "All-in-one platform for educational administration and digital learning workflows.",
    results: "Empowering 10k+ Students",
    tags: ["EdTech", "SaaS", "Admin UX"],
    accentColor: "#6366F1" // Indigo
  }
];
