/**
 * Compétences affichées sur la page About.
 * Modifiez ce fichier pour ajouter, modifier ou supprimer des compétences.
 */

export interface Skill {
  id: number;
  name: string;
  /** Chemin vers l'image (ex: /images/skills/web-design.jpg) ou gradient CSS */
  image?: string;
  /** Dégradé CSS si pas d'image */
  gradient?: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "Web Design",
    gradient: "linear-gradient(135deg, #27272A 0%, #52525B 50%, #F64617 100%)",
  },
  {
    id: 2,
    name: "App Design",
    gradient: "linear-gradient(135deg, #27272A 0%, #F64617 100%)",
  },
  {
    id: 3,
    name: "Branding",
    gradient: "linear-gradient(135deg, #F64617 0%, #FFFFFF 50%, #27272A 100%)",
  },
  {
    id: 4,
    name: "Graphics Design",
    gradient: "linear-gradient(135deg, #F4F4F5 0%, #E5E5E5 50%, #F64617 30%)",
  },
];
