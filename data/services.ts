import { Layout, Smartphone, Database, Zap } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
}

export const services: Service[] = [
  {
    id: "product-design",
    title: "Product Design",
    description: "End-to-end product design from discovery to delivery, focusing on user needs and business goals.",
    icon: Layout,
    features: ["User Research", "Wireframing", "Interactive Prototyping"]
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description: "Building scalable, accessible, and high-performance design systems for enterprise applications.",
    icon: Database,
    features: ["Component Libraries", "Documentation", "Token Management"]
  },
  {
    id: "mobile-ux",
    title: "Mobile UX",
    description: "Creating seamless mobile experiences that leverage platform-specific patterns and gestures.",
    icon: Smartphone,
    features: ["iOS & Android", "Gesture Design", "App Store Strategy"]
  },
  {
    id: "ai-interaction",
    title: "AI Interaction",
    description: "Designing the future of AI-driven interfaces with a focus on trust, clarity, and feedback loops.",
    icon: Zap,
    features: ["LLM Interfaces", "Predictive UX", "Agentic Workflows"]
  }
];
