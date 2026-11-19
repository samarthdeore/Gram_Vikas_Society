import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Monitor, 
  Paintbrush, 
  Armchair,
  Target
} from "lucide-react";
import { MasterPillarLayout, PillarData } from "../components/MasterPillarLayout";

export function VidyaVikasPage() {
  const data: PillarData = {
    titleStart: "VIDYA",
    titleHighlight: "VIKAS",
    subtitle: "Education Development & Student Empowerment",
    heroImage: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzY2hvb2wlMjBzdHVkZW50cyUyMGVkdWNhdGlvbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzc5OTQ2MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    heroIcon: BookOpen,
    missionTitle: "Mission",
    missionValue: "5,00,000",
    missionSubtitle: "Students",
    sections: [
      {
        titleStart: "LEARNING MADE EASY WITH",
        titleHighlight: "POSITIVE ENERGY",
        description: "Imparted ancient techniques to increase the brain capacity of 2,21,237 students from 8th, 9th and 10th of Govt. High Schools of Karnataka in association with UKT, Mangaluru.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        badge: {
          icon: Target,
          title: "Mission",
          subtitle: "5,00,000 Students"
        }
      },
      {
        titleStart: "SUMMER",
        titleHighlight: "CAMP",
        description: "UKT, Mangaluru in association with GVS presented “OUT OF THE WORLD” summer camp for KIDS of Dharwad, Bengaluru & Mangaluru. 723 lovely kids along with caring parents took part.",
        layout: "style-2",
        images: [
          "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1667386427340-ea2cbca9ad01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1588072432904-843af37f03ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        location: "Dharwad, Bengaluru & Mangaluru"
      },
      {
        titleStart: "SMART CLASSROOM",
        titleHighlight: "INSTALLATIONS",
        description: "GVS implemented project of 48 smart classrooms in Govt. High Schools and Govt. Colleges of Hubballi & Dharwad, under the support of CSR initiative from IOCL & NLC India Ltd.",
        layout: "style-3",
        images: [
          "https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ]
      },
      {
        titleStart: "BANNADARPANE",
        titleHighlight: "",
        description: "A School and College Paint Project. A massive initiative to paint 1,177 No.’s of Govt. Schools and Colleges of Dharwad Region in support of JSW Paints is initiated under the guidance of Hon’ble Union Minister Shri. Pralhad Joshi Ji.",
        layout: "style-1",
        images: [
          "https://images.unsplash.com/photo-1632494057327-c492dccde461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1663549662588-a3c62ff48a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1587135374648-7518dc14b7ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1519406596751-0a3ccc4937fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ]
      },
      {
        titleStart: "DESK-CUM-BENCH",
        titleHighlight: "PROJECT",
        description: "GVS implemented an infrastructure development project of 1,631 Desk-cum-Benches to 92 schools in Dharwad region under the support of NTPC Ltd.",
        layout: "style-2",
        images: [
          "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1604134967494-8a9ed3adea0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
        ],
        location: "Dharwad Region"
      }
    ],
    milestonesTitle: "PROJECT MILESTONES",
    milestonesSubtitle: "Transforming our communities through measurable impact.",
    milestones: [
      {
        label: "Mission Students",
        end: 500000,
        icon: Target
      },
      {
        label: "Students Reached",
        end: 221237,
        icon: GraduationCap
      },
      {
        label: "Smart Classrooms",
        end: 48,
        icon: Monitor
      },
      {
        label: "Schools & Colleges Painted",
        end: 1177,
        icon: Paintbrush
      },
      {
        label: "Desk-Cum-Benches Distributed",
        end: 1631,
        icon: Armchair
      },
      {
        label: "Schools Supported",
        end: 92,
        icon: BookOpen
      },
      {
        label: "Summer Camp Participants",
        end: 723,
        icon: Users
      }
    ]
  };

  return <MasterPillarLayout data={data} />;
}
