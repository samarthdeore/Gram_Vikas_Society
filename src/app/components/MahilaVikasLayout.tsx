import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { Scissors, Shirt, Users, Star, GraduationCap } from "lucide-react";

export function MahilaVikasLayout() {
  const data: PillarData = {
    titleStart: "Mahila",
    titleHighlight: "Vikas",
    subtitle: "Women Empowerment",
    heroImage: "/photos/15.jpg",
    heroIcon: Scissors,
    missionTitle: "Mission",
    missionValue: "1,00,000",
    missionSubtitle: "Women Empowered",
    sections: [
      {
        titleStart: "Economic",
        titleHighlight: "Empowerment",
        description: "Hon’ble Union Minister Shri. Pralhad Joshi Ji proposed Ramco Cements, Orient Cement, JK Cement, JSW Foundation, Hindalco, Tata Steel Foundation, My Home Group, NLC India Ltd. sponsored & GVS executed free vocational training to 11,726 women of Dharwad, Hubballi, Kundagol, Kalaghatagi, Navalagund and Shiggaon Talukas in Karnataka were trained for one month in Fashion Designing skills and were certified and given free sewing machines for their earnings.",
        layout: "style-3",
        images: [
          "/photos/13.jpg",
          "/photos/15.jpg"
        ],
        badge: {
          icon: Shirt,
          title: "Fashion Design",
          subtitle: "Free Sewing Machines Given"
        }
      },
      {
        titleStart: "URBAN SKILLING FOR",
        titleHighlight: "WOMEN ON FASHION DESIGNING",
        description: "TalentTree identified 260 women from the Dharwad region and 197 women from Gokak are trained in Fashion Design training for four months under NULM Program. All 457 women have been distributed with certificates and Sewing Machines at free of cost.",
        layout: "simple",
        images: [
           "/photos/20.jpg"
        ]
      },
      {
        titleStart: "Mission :",
        titleHighlight: "1,00,000",
        description: "GVS initiated 30 days of FREE TRAINING in FASHION DESIGN was launched at Hosur, Badami of Bagalkot Dist., which helped 30 women to get skilled and earn their livelihood.",
        layout: "style-1",
        images: [
          "/photos/22.jpg",
          "/photos/19.jpg",
          "/photos/21.jpg",
          "/photos/18.jpg"
        ]
      }
    ],
    milestones: [
      { end: 11726, label: "Women Trained", icon: Users },
      { end: 260, label: "Women Identified", icon: Star },
      { end: 197, label: "Women From Gokak", icon: Star },
      { end: 457, label: "Women Certified", icon: GraduationCap },
      { end: 30, label: "Days Free Training", icon: Scissors },
      { end: 30, label: "Women Skilled", icon: Users }
    ]
  };

  return <MasterPillarLayout data={data} />;
}