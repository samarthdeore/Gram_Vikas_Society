import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

import { MahilaVikasLayout } from "../components/MahilaVikasLayout";
import { GuruVikasLayout } from "../components/GuruVikasLayout";
import { VidyaVikasLayout } from "../components/VidyaVikasLayout";
import { SenaVikasLayout } from "../components/SenaVikasLayout";
import { UdyamVikasLayout } from "../components/UdyamVikasLayout";
import { PrakrutiVikasLayout } from "../components/PrakrutiVikasLayout";
import { YuvaVikasLayout } from "../components/YuvaVikasLayout";
import { SamajVikasLayout } from "../components/SamajVikasLayout";

export function ProgramPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (id === 'mahila-vikas') return <MahilaVikasLayout />;
  if (id === 'guru-vikas') return <GuruVikasLayout />;
  if (id === 'vidya-vikas') return <VidyaVikasLayout />;
  if (id === 'sena-vikas') return <SenaVikasLayout />;
  if (id === 'udyam-vikas') return <UdyamVikasLayout />;
  if (id === 'prakruti-vikas') return <PrakrutiVikasLayout />;
  if (id === 'yuva-vikas') return <YuvaVikasLayout />;
  if (id === 'samaj-vikas') return <SamajVikasLayout />;

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#FFFDF8]">
      <h2 className="text-3xl font-bold mb-4 text-[#1E3F20]">Pillar not found</h2>
      <button onClick={() => navigate('/#pillars')} className="text-[#1E3F20] hover:underline flex items-center gap-2">
        <ArrowLeft size={20} /> Back to Pillars
      </button>
    </div>
  );
}