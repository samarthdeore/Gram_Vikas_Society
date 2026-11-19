import { MasterPillarLayout, PillarData } from "./MasterPillarLayout";
import { TreePine, Droplets, HeartHandshake, Leaf, MapPin, Users, Sprout } from "lucide-react";

export function PrakrutiVikasLayout() {
  const data: PillarData = {
    titleStart: "Prakruti",
    titleHighlight: "Vikas",
    subtitle: "Environmental Sustainability & Green Initiatives",
    heroImage: "/photos/104.jpg",
    heroIcon: Sprout,
    missionTitle: "Mission",
    missionValue: "GREEN KARNATAKA",
    missionSubtitle: "Initiative",
    sections: [
      {
        titleStart: "The Project",
        titleHighlight: "Green",
        description: "GVS initiated City cleaning, planted 1320 Saplings and lake rejuvenation works in locations of Dharwad & Hubballi.",
        layout: "style-1",
        images: [
          "/photos/98.jpg",
          "/photos/99.jpg",
          "/photos/100.jpg",
          "/photos/101.jpg"
        ],
        badge: {
          icon: TreePine,
          title: "Green 2022",
          subtitle: "UKT Mangaluru with the Team of GVS planted 75 varieties of fruit bearing saplings in 75 locations across Karnataka."
        }
      },
      {
        titleStart: "Green",
        titleHighlight: "Project",
        description: "GVS initiated City cleaning, planted 1320 Saplings and lake rejuvenation works in locations of Dharwad & Hubballi.",
        layout: "style-2",
        images: [
          "/photos/104.jpg",
          "/photos/102.jpg",
          "/photos/103.jpg"
        ],
        location: "Dharwad & Hubballi"
      },
      {
        titleStart: "Go",
        titleHighlight: "Daana",
        description: "60 cows were donated to 60 families and cows were handed over to families by performing Go-pooja in the Dharwad Dist., in association with Shri Pralhad Joshi Ji Abhimani Balaga Team.",
        layout: "style-3",
        images: [
          "/photos/106.jpg",
          "/photos/105.jpg"
        ],
        badge: {
          icon: HeartHandshake,
          title: "Go Daana",
          subtitle: "60 Families Supported"
        }
      }
    ],
    milestones: [
      { end: 1320, label: "Saplings Planted", icon: Sprout },
      { end: 75, label: "Fruit Varieties", icon: Leaf },
      { end: 75, label: "Locations Covered", icon: MapPin },
      { end: null, textValue: "LAKE", label: "Rejuvenation Works", icon: Droplets },
      { end: 60, label: "Cows Donated", icon: HeartHandshake },
      { end: 60, label: "Families Supported", icon: Users }
    ]
  };

  return <MasterPillarLayout data={data} />;
}