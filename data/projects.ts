export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string;
  tags: string[];
  accentColor: string;
  industryBadge?: string;
  problemStatement?: string;
  impactMetrics?: string[];
}

export const projects: Project[] = [
  {
    slug: "carenova",
    title: "FACILITY & COMPLIANCE MANAGEMENT PLATFORM",
    category: "Carenova",
    image: "/images/Carenova-Card-Folio.png",
    description: "Comprehensive enterprise platform for facility operations and compliance tracking.",
    results: "100% Compliance Rate",
    tags: ["Healthcare", "Enterprise SaaS", "Enterprise UX", "Dashboard UX", "Workflow Design", "Design System"],
    accentColor: "#0D63CC", // Blue
    industryBadge: "Enterprise Healthcare SaaS",
    problemStatement: "Simplifying compliance and operations across multi-facility healthcare organizations.",
    impactMetrics: ["Multi-role ecosystem", "Enterprise workflows", "Compliance automation"]
  },
  {
    slug: "marketvisionai",
    title: "AI-POWERED MARKET INTELLIGENCE PLATFORM",
    category: "MarketVisionAI",
    image: "/images/MarketVision-Card-Folio.png",
    description: "Real-time market insights and predictive analytics for strategic decision making.",
    results: "Validated Market Trends",
    tags: ["AI Products", "AI UX", "Analytics", "Dashboard UX", "Data Visualization"],
    accentColor: "#F59E0B", // Amber
    industryBadge: "AI + Analytics",
    problemStatement: "Providing actionable market intelligence through predictive AI models.",
    impactMetrics: ["Real-time data viz", "Predictive modeling", "Strategic insights"]
  },
  {
    slug: "spendora",
    title: "AI-POWERED SMART EXPENSE ECOSYSTEM",
    category: "Spendora",
    image: "/images/Spendora-Card-Folio.png",
    description: "Intelligent expense tracking and financial management powered by AI.",
    results: "+35% Savings Accuracy",
    tags: ["FinTech", "AI Products", "AI SaaS", "Product Strategy", "Dashboard UX"],
    accentColor: "#00DA99", // Mint
    industryBadge: "AI + FinTech SaaS",
    problemStatement: "Helping users gain financial clarity through AI-powered expense intelligence.",
    impactMetrics: ["Reduced workflow complexity", "Improved operational visibility", "Scalable design system"]
  },
  {
    slug: "oasispad",
    title: "SMART KNOWLEDGE & PRODUCTIVITY WORKSPACE",
    category: "OasisPad",
    image: "/images/OasisPad-Card-Folio.png",
    description: "Next-gen workspace for knowledge management and team collaboration.",
    results: "40% Productivity Boost",
    tags: ["Healthcare", "Healthcare SaaS", "Productivity", "UX Design"],
    accentColor: "#8B5CF6", // Purple
    industryBadge: "Healthcare SaaS",
    problemStatement: "Enhancing knowledge management and team collaboration in healthcare settings.",
    impactMetrics: ["Team collaboration", "Knowledge sharing", "Productivity tracking"]
  },
  {
    slug: "ticketstack",
    title: "RETAIL TICKETING EXPERIENCE REDESIGN",
    category: "TicketStack",
    image: "/images/TicketStack-Card-Folio.png",
    description: "Modernizing the retail ticketing process with an intuitive digital ecosystem.",
    results: "50% Faster Transactions",
    tags: ["Enterprise SaaS", "Retail UX", "System Design"],
    accentColor: "#F43F5E", // Rose/Pink
    industryBadge: "Enterprise Retail SaaS",
    problemStatement: "Streamlining retail ticketing operations through centralized workflow management.",
    impactMetrics: ["Centralized workflow", "Faster transactions", "Role-based access"]
  },
  {
    slug: "supercampus",
    title: "DIGITAL LEARNING & ADMINISTRATION ECOSYSTEM",
    category: "SuperCampus",
    image: "/images/SuperCampus-Card-Folio.png",
    description: "All-in-one platform for educational administration and digital learning workflows.",
    results: "Empowering 10k+ Students",
    tags: ["EdTech", "SaaS", "Admin UX"],
    accentColor: "#6366F1", // Indigo
    industryBadge: "EdTech Platform",
    problemStatement: "Unifying administrative and learning processes into a single ecosystem.",
    impactMetrics: ["10k+ Student capacity", "Admin dashboards", "Digital learning flows"]
  },
  {
    slug: "scanovahealth",
    title: "SMART MEDICAL IMAGING PLATFORM",
    category: "ScanovaHealth",
    image: "/images/ScanovaHealth-Card-Folio.png",
    description: "Advanced interface for analyzing and managing MRI data workflows.",
    results: "99.9% Accuracy",
    tags: ["Healthcare", "Mobile Apps", "Medical Tech"],
    accentColor: "#14B8A6", // Teal
    industryBadge: "Healthcare Mobile",
    problemStatement: "Simplifying complex medical imaging analysis on mobile platforms.",
    impactMetrics: ["High accuracy analysis", "Mobile accessibility", "Secure data handling"]
  },
  {
    slug: "kinora",
    title: "SMART CAREGIVING & COORDINATION PLATFORM",
    category: "Kinora",
    image: "/images/Kinora-Card-Folio.png",
    description: "Streamlining care coordination and patient monitoring for healthcare teams.",
    results: "+60% Care Efficiency",
    tags: ["Healthcare", "Mobile Apps", "UX Strategy"],
    accentColor: "#00DA99", // Mint
    industryBadge: "Mobile Care Platform",
    problemStatement: "Improving caregiving coordination through real-time mobile tools.",
    impactMetrics: ["Real-time monitoring", "Care coordination", "Mobile workflow"]
  }
];
