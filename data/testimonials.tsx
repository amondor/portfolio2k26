/**
 * Témoignages affichés sur le site (page d'accueil et page About).
 * Modifiez ce fichier pour ajouter, modifier ou supprimer des témoignages.
 */

export interface Testimonial {
  id: number;
  rating: string;
  quote: string;
  /** Afficher une silhouette au lieu d'une photo */
  isSilhouette?: boolean;
  /** Chemin vers la photo (ex: /images/testimonials/avatar.jpg) */
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: "5.0",
    quote:
      "Andrew truly understood my vision and turned it into impactful designs, the results went beyond my expectations!",
    isSilhouette: false,
  },
  {
    id: 2,
    rating: "5.0",
    quote:
      "Andrew truly understood my vision and turned it into impactful designs, the results went beyond my expectations!",
    isSilhouette: true,
  },
  {
    id: 3,
    rating: "4.6",
    quote:
      "As a small business owner, I appreciated how stress-free Andrew made the process.",
    isSilhouette: true,
  },
  {
    id: 4,
    rating: "4.9",
    quote:
      "As a small business owner, the process felt effortless thanks to Andrew's clear guidance & excellent communication.",
    isSilhouette: true,
  },
];
