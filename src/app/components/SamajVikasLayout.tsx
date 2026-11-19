import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { Home, Heart, Users, Sun } from "lucide-react";

export function SamajVikasLayout() {
  const data: PillarData = {
    titleStart: "Samaj",
    titleHighlight: "Vikas",
    subtitle: "Community & Social Development",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&fit=crop",
    heroIcon: Home,
    missionTitle: "Mission",
    missionValue: "COMMUNITY",
    missionSubtitle: "Development",
    sections: [
      {
        titleStart: "Social",
        titleHighlight: "Harmony",
        description: "Fostering social harmony and rural development by executing holistic community programs that provide essential infrastructure, health camps, and social awareness to the most remote villages.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&fit=crop",
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1593113580332-ceb4b8a4f109?q=80&w=600&fit=crop",
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&fit=crop"
        ],
        badge: {
          icon: Heart,
          title: "Rural Outreach",
          subtitle: "Transforming 100+ Villages"
        }
      },
      {
        titleStart: "Health &",
        titleHighlight: "Wellbeing",
        description: "Conducted large-scale medical camps, providing free checkups, eye care, and essential medicines to thousands of underprivileged individuals in association with leading medical institutions.",
        layout: "style-3",
        images: [
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&fit=crop",
          "https://images.unsplash.com/photo-1593113580332-ceb4b8a4f109?q=80&w=1000&fit=crop"
        ],
        badge: {
          icon: Sun,
          title: "Medical Camps",
          subtitle: "Free Healthcare Access"
        }
      }
    ],
    milestones: [
      { end: 100, label: "Villages Transformed", icon: Home },
      { end: 25000, label: "Patients Treated", icon: Heart },
      { end: 50, label: "Medical Camps", icon: Sun },
      { end: 15000, label: "Families Impacted", icon: Users }
    ]
  };

  return <MasterPillarLayout data={data} />;
}