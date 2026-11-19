import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { BookOpen, GraduationCap, Laptop, Paintbrush, LibraryBig, CheckCircle, User } from "lucide-react";

export function VidyaVikasLayout() {
  const data: PillarData = {
    titleStart: "Vidya",
    titleHighlight: "Vikas",
    subtitle: "Education & Infrastructure Development",
    heroImage: "/photos/24.jpg",
    heroIcon: BookOpen,
    missionTitle: "Mission",
    missionValue: "5,00,000",
    missionSubtitle: "Students",
    sections: [
      {
        titleStart: "Learning Made",
        titleHighlight: "Easy",
        description: "Imparted ancient techniques to increase the brain capacity of 2,21,237 students from 8th, 9th and 10th of Govt. High Schools of Karnataka in association with UKT, Mangaluru",
        layout: "simple",
        images: [
          "/photos/23.jpg"
        ]
      },
      {
        titleStart: "Summer",
        titleHighlight: "Camp",
        description: "UKT, Mangaluru in association with GVS presented 'OUT OF THE WORLD' summer camp for KIDS of Dharwad, Bengaluru & Mangaluru. 723 lovely kids along with caring parents took part.",
        layout: "style-3",
        images: [
          "/photos/25.jpg",
          "/photos/26.jpg"
        ],
        badge: {
          icon: User,
          title: "Summer Camp",
          subtitle: "723 Kids Participated"
        }
      },
      {
        titleStart: "Smart Classroom",
        titleHighlight: "Installations",
        description: "GVS implemented project of 48 smart classroom in Govt. High Schools and Govt. Colleges of Hubballi & Dharwad, under the support of CSR initiative from IOCL & NLC India Ltd.",
        layout: "style-2",
        images: [
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&fit=crop"
        ],
        location: "Govt. High Schools"
      },
      {
        titleStart: "Bannadarpane &",
        titleHighlight: "Infrastructure",
        description: "A massive initiative to paint 1,177 No.’s of Govt. Schools and Colleges of Dharwad Region in support of JSW Paints. Implemented infrastructure development of 1,631 Desk-cum-Benches to 92 schools under NTPC Ltd support.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1525926477800-7a04a5fb8274?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&fit=crop",
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&fit=crop"
        ],
        badge: {
          icon: Paintbrush,
          title: "Bannadarpane",
          subtitle: "1177 Schools Painted"
        }
      }
    ],
    milestones: [
      { end: 221237, label: "Students", icon: GraduationCap },
      { end: 723, label: "Kids Participated", icon: User },
      { end: 48, label: "Smart Classrooms", icon: Laptop },
      { end: 1177, label: "Institutions Painted", icon: Paintbrush },
      { end: 1631, label: "Desk-Cum-Benches", icon: LibraryBig },
      { end: 92, label: "Schools Supported", icon: CheckCircle }
    ]
  };

  return <MasterPillarLayout data={data} />;
}