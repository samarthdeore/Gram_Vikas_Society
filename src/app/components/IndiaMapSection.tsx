import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';

interface StateData {
  name: string;
  villages?: number;
  programs?: number;
}

const stateData: Record<string, StateData> = {
  Karnataka: { name: 'Karnataka', villages: 450, programs: 8 },
  Kerala: { name: 'Kerala', villages: 120, programs: 3 },
  'Andhra Pradesh': { name: 'Andhra Pradesh', villages: 200, programs: 5 },
  Telangana: { name: 'Telangana', villages: 180, programs: 4 },
  Maharashtra: { name: 'Maharashtra', villages: 350, programs: 7 },
  Gujarat: { name: 'Gujarat', villages: 280, programs: 6 },
  Rajasthan: { name: 'Rajasthan', villages: 220, programs: 5 },
  Punjab: { name: 'Punjab', villages: 150, programs: 4 },
  Jharkhand: { name: 'Jharkhand', villages: 190, programs: 4 },
  Odisha: { name: 'Odisha', villages: 240, programs: 5 },
  'West Bengal': { name: 'West Bengal', villages: 310, programs: 6 },
};

const highlightedStates = Object.keys(stateData);

export function IndiaMapSection() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const getStateFill = (stateName: string) => {
    if (!highlightedStates.includes(stateName)) {
      return 'rgba(255, 255, 255, 0.1)';
    }
    if (selectedState === stateName) {
      return 'var(--glow-deep)';
    }
    if (hoveredState === stateName) {
      return 'var(--glow-bright)';
    }
    return 'var(--glow-light)';
  };

  return (
    null
  );
}
