import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { HandHeart, Users, Flame, Globe, Pin } from "lucide-react";

export function YuvaVikasLayout() {
  const data: PillarData = {
    titleStart: "Yuva",
    titleHighlight: "Vikas",
    subtitle: "Youth Empowerment & Leadership",
    heroImage: "/photos/3.jpg",
    heroIcon: HandHeart,
    missionTitle: "Mission",
    missionValue: "YOUTH",
    missionSubtitle: "Leadership",
    sections: [
      {
        titleStart: "e-VIDYUT ",
        titleHighlight: "TRAINING PROGRAM",
        description: "e-Vidyut Electrician Program is of 90 days duration at an absolute FREE-of-COST at Kaushalya Kutir, Dharwad. Similarly, SEIF has 357 skilling centers in 18 states and extensively mission 1,00,000 youths of India annually, through 500+ industry skill partners & employers in India.",
        layout: "style-1",
        images: [
          "/photos/1.jpg",
          "/photos/2.jpg",
          "/photos/5.jpg",
          "/photos/4.jpg"
        ],
        badge: {
          icon: Users,
          title: "e-VIDYUT TRAINING PROGRAM",
          subtitle: "Inspiring the Next Generation"
        }
      },
      {
        titleStart: "CUSTOMER RELATIONSHIP",
        titleHighlight: "MANAGEMENT (CRM) TRAINING",
        description: "Tata Hitachi sponsored GVS implemented free CRM Training for 30 women along with Free Tab and Job placement",
        layout: "style-2",
        images: [
          "/photos/7.jpg",
          "/photos/8.jpg",
          "/photos/6.jpg"
        ],
        location: "Karnataka Statewide"
      }
      
    ],
    milestones: [
      { end: 50000, label: "Youth Engaged", icon: Users },
      { end: 120, label: "Workshops Conducted", icon: Globe },
      { end: 45, label: "Cities Covered", icon: Pin },
      { end: 100, label: "Mentors Active", icon: Flame }
    ]
  };

  return <MasterPillarLayout data={data} />;
}