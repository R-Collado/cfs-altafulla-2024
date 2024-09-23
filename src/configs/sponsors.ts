import ilusion from "@/images/logos/ilusion.webp";
import donQuijote from "@/images/logos/don-quijote.webp";
import apolo from "@/images/logos/apolo.webp";

export interface Sponsor {
  name: string;
  logo: string;
  isMainSponsor: boolean;
}

export const sponsors: Sponsor[] = [
  {
    name: "Ilusion",
    logo: ilusion.src,
    isMainSponsor: true,
  },
  {
    name: "Don Quijote",
    logo: donQuijote.src,
    isMainSponsor: true,
  },
  {
    name: "Apolo",
    logo: apolo.src,
    isMainSponsor: true,
  },
];
