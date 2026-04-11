/**
 * Données des projets affichés sur le site.
 * Modifiez ce fichier pour ajouter, modifier ou supprimer des projets.
 */

export interface Project {
  id: number;
  name: string;
  year: string;
  gradient: string;
  /** Image sous `/public` (ex. `/images/projets/nom.png`) — optionnel */
  image?: string;
  /** URL du projet (optionnel) */
  href?: string;
  /** Courte description (optionnel) */
  description?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "BBL Barber",
    year: "2025",
    gradient: "linear-gradient(180deg, #D4E157 0%, #26A69A 100%)",
    image: "/images/projets/bblbarber.png",
    href: "https://bblbarber.fr/",
  },
  {
    id: 2,
    name: "JPME",
    year: "2024",
    gradient: "linear-gradient(180deg, #FFE0B2 0%, #E53935 100%)",
  },
  {
    id: 3,
    name: "Assa Abloy",
    year: "2023",
    gradient: "linear-gradient(180deg, #B3E5FC 0%, #5C6BC0 100%)",
  },
  {
    id: 4,
    name: "Boté Kréyol",
    year: "2024",
    gradient: "linear-gradient(180deg, #E1BEE7 0%, #7B1FA2 100%)",
    href: "https://botekreyol.fr/",
  },
  {
    id: 5,
    name: "Boté Kréyol",
    year: "2023",
    gradient: "linear-gradient(180deg, #E1BEE7 0%, #7B1FA2 100%)",
    href: "https://botekreyol.fr/",
  },
];
