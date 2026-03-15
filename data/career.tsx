/**
 * Historique de carrière affiché sur la page About.
 * Modifiez ce fichier pour ajouter, modifier ou supprimer des expériences.
 */

export interface CareerEntry {
  id: number;
  role: string;
  company: string;
  /** Couleur du logo (ex: #27272A, #7B1FA2, #5C6BC0, #F64617) */
  logoColor: string;
  /** Initiale ou emoji pour le logo (optionnel) */
  logoLetter?: string;
  /** Période (ex: "2025 - Now", "2024 - 2025") */
  period: string;
}

export const careerEntries: CareerEntry[] = [
  {
    id: 1,
    role: "Design Director",
    company: "Solvix",
    logoColor: "#27272A",
    logoLetter: "S",
    period: "2025 - Now",
  },
  {
    id: 2,
    role: "Sr. Product Designer",
    company: "Coreva",
    logoColor: "#7B1FA2",
    logoLetter: "C",
    period: "2024 - 2025",
  },
  {
    id: 3,
    role: "Product Designer",
    company: "Belvo",
    logoColor: "#5C6BC0",
    logoLetter: "B",
    period: "2015 - 2024",
  },
  {
    id: 4,
    role: "UI/UX Designer",
    company: "Arvion",
    logoColor: "#F64617",
    logoLetter: "A",
    period: "2012 - 2015",
  },
];
