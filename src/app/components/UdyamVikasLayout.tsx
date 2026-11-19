import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { Briefcase, Users, Building, GraduationCap, ArrowUpRight } from "lucide-react";

export function UdyamVikasLayout() {
  const data: PillarData = {
    titleStart: "Udyam",
    titleHighlight: "Vikas",
    subtitle: "Skill And Job Fairs",
    heroImage: "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1920&fit=crop",
    heroIcon: Briefcase,
    missionTitle: "Mission",
    missionValue: "CAREERS",
    missionSubtitle: "Empowerment",
    sections: [
      {
        titleStart: "Ballari Skill",
        titleHighlight: "And Job Fair",
        description: "Ballari skill and Job fair : 3rd to 5th March, 2017. 36,105 candidates attended and 9,769 candidates were spot offered.",
        layout: "style-3",
        images: [
          "https://images.unsplash.com/photo-1618758993113-2447833402d6?q=80&w=1000&fit=crop",
          "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=1000&fit=crop"
        ],
        badge: {
          icon: Users,
          title: "36,105",
          subtitle: "Candidates Attended"
        }
      },
      {
        titleStart: "Mysuru Skill",
        titleHighlight: "& Job Fair",
        description: "Mysuru Skill & Job Fair : 3rd to 5th March, 2018. 16,176 candidates attended and 4,932 candidates were spot offered.",
        layout: "style-3",
        images: [
          "https://images.unsplash.com/photo-1559223669-d7bb31d71f26?q=80&w=1000&fit=crop",
          "https://images.unsplash.com/photo-1713001075225-8c490e800e29?q=80&w=1000&fit=crop"
        ],
        badge: {
          icon: Building,
          title: "16,176",
          subtitle: "Candidates Attended"
        }
      },
      {
        titleStart: "Bengaluru Skill",
        titleHighlight: "& Job Fair",
        description: "Bengaluru Skill & Job Fair : 29th and 30th September, 2019. 14,153 candidates attended and 4,265 candidates were spot offered.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&fit=crop",
          "https://images.unsplash.com/photo-1534161197248-bae0085acec9?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1618758993113-2447833402d6?q=80&w=600&fit=crop",
          "https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=600&fit=crop"
        ],
        badge: {
          icon: ArrowUpRight,
          title: "14,153",
          subtitle: "Candidates Attended"
        }
      }
    ],
    milestones: [
      { end: 36105, label: "Ballari Candidates", icon: Users },
      { end: 9769, label: "Ballari Spot Offers", icon: Briefcase },
      { end: 16176, label: "Mysuru Candidates", icon: Users },
      { end: 4932, label: "Mysuru Spot Offers", icon: Briefcase },
      { end: 14153, label: "Bengaluru Candidates", icon: Users },
      { end: 4265, label: "Bengaluru Spot Offers", icon: Briefcase }
    ]
  };

  return <MasterPillarLayout data={data} />;
}