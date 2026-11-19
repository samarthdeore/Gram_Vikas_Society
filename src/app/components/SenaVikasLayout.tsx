import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { Shield, Medal, Users, Sword, Crosshair } from "lucide-react";

export function SenaVikasLayout() {
  const data: PillarData = {
    titleStart: "Sena",
    titleHighlight: "Vikas",
    subtitle: "Defense & Pre-Recruitment Training",
    heroImage: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1920&fit=crop",
    heroIcon: Shield,
    missionTitle: "Mission",
    missionValue: "DEFENSE",
    missionSubtitle: "Training",
    sections: [
      {
        titleStart: "Pre-Recruitment",
        titleHighlight: "Training",
        description: "GVS organized a comprehensive 75 days Pre-recruitment training program for Army, Navy, Airforce and Paramilitary forces at Dharwad. 210 trainees from various districts participated in the rigorous physical and written exam preparation.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200&fit=crop",
          "https://images.unsplash.com/photo-1614742469651-419b4b0e5124?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=600&fit=crop",
          "https://images.unsplash.com/photo-1533036616428-1111005a9686?q=80&w=600&fit=crop"
        ],
        badge: {
          icon: Sword,
          title: "Rigorous Training",
          subtitle: "75 Days Comprehensive Program"
        }
      },
      {
        titleStart: "Brave Soldiers",
        titleHighlight: "Felicitation",
        description: "In a proud moment for the nation, 21 brave soldiers who successfully completed their training were felicitated. 33 war heroes who served the country were also honored for their ultimate sacrifice and dedication.",
        layout: "style-2",
        images: [
          "https://images.unsplash.com/photo-1614742469651-419b4b0e5124?q=80&w=1000&fit=crop",
          "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1000&fit=crop",
          "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=600&fit=crop"
        ],
        location: "Dharwad Region"
      }
    ],
    milestones: [
      { end: 75, label: "Days Training", icon: Shield },
      { end: 210, label: "Trainees", icon: Users },
      { end: 21, label: "Brave Soldiers", icon: Medal },
      { end: 1300, label: "Participants", icon: Users },
      { end: 33, label: "War Heroes", icon: Shield }
    ]
  };

  return <MasterPillarLayout data={data} />;
}