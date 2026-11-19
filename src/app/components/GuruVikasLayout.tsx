import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { BookOpen, MonitorPlay, Users, GraduationCap, School } from "lucide-react";

export function GuruVikasLayout() {
  const data: PillarData = {
    titleStart: "Guru",
    titleHighlight: "Vikas",
    subtitle: "Teacher Empowerment & Training",
    heroImage: "/photos/35.jpg",
    heroIcon: BookOpen,
    missionTitle: "Mission",
    missionValue: "1,00,000",
    missionSubtitle: "Teachers",
    sections: [
      {
        titleStart: "Capacity Building",
        titleHighlight: "Program",
        description: "GVS organised Capacity Building Program to 50 Govt. School Teachers on Smart Board Training and innovative methods in teaching under NEP at Dharwad.",
        layout: "style-3",
        images: [
          "/photos/32.jpg",
          "/photos/33.jpg"
        ],
        badge: {
          icon: MonitorPlay,
          title: "Smart Class",
          subtitle: "50 Govt Teachers Trained"
        }
      },
      {
        titleStart: "Training Of Trainers",
        titleHighlight: "Program",
        description: "Training of Trainers in association with Schneider Electric India Foundation (SEIF) trained 78 Training Officers and JTOs, Trainers from 11 training centers / Govt. ITI Colleges at Bengaluru.",
        layout: "simple",
        images: [
          "/photos/34.jpg"
        ]
      },
      {
        titleStart: "Gurubhyo -",
        titleHighlight: "Namaha",
        description: "18,870 Head Masters, Science and Mathematics Teachers from Government and Aided Schools have been trained from over 16 Districts of Karnataka under ToT followed Students training of over 2,21,237 across schools.",
        layout: "style-1",
        images: [
          "/photos/35.jpg",
          "/photos/36.jpg",
          "/photos/37.jpg",
          "/photos/35.jpg"
        ]
      }
    ],
    milestones: [
      { end: 100000, label: "Teachers Mission", icon: GraduationCap },
      { end: 50, label: "Govt School Teachers", icon: School },
      { end: 78, label: "Training Officers", icon: Users },
      { end: 11, label: "Training Centers", icon: BookOpen },
      { end: 18870, label: "Teachers Trained", icon: GraduationCap },
      { end: 221237, label: "Students Reached", icon: Users }
    ]
  };

  return <MasterPillarLayout data={data} />;
}