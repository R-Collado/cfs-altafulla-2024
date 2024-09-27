import ilusion from "@/images/logos/ilusion.webp";
import donQuijote from "@/images/logos/don-quijote.webp";
import apolo from "@/images/logos/apolo.webp";
import trattoria from "@/images/logos/trattoria.png";

import altafun from "@/images/logos/altafun.png";
import altalegal from "@/images/logos/altalegal.png";
import barnaluminis from "@/images/logos/barnaluminis.png";
import bruixot from "@/images/logos/bruixot.png";
import casas from "@/images/logos/casas.png";
import leon from "@/images/logos/leon.png";
import llenyes from "@/images/logos/llenyes.png";
import lluna from "@/images/logos/lluna.png";
import lolaBistro from "@/images/logos/lola-bistro.png";
import nogues from "@/images/logos/nogues.png";
import pinturas from "@/images/logos/pinturas.png";
import pirata from "@/images/logos/pirata.png";
import ramona from "@/images/logos/ramona.png";
import siOSi from "@/images/logos/si-o-si.png";
import tMax from "@/images/logos/t-max.png";
import toque from "@/images/logos/toque.png";
import viavins from "@/images/logos/viavins.png";
import vitali from "@/images/logos/vitali.png";

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
  {
    name: "Trattoria",
    logo: trattoria.src,
    isMainSponsor: true,
  },
  {
    name: "Altafun",
    logo: altafun.src,
    isMainSponsor: false,
  },
  {
    name: "Altalegal",
    logo: altalegal.src,
    isMainSponsor: false,
  },
  {
    name: "Barnaluminis",
    logo: barnaluminis.src,
    isMainSponsor: false,
  },
  {
    name: "Bruixot",
    logo: bruixot.src,
    isMainSponsor: false,
  },
  {
    name: "Casas",
    logo: casas.src,
    isMainSponsor: false,
  },
  {
    name: "Leon",
    logo: leon.src,
    isMainSponsor: false,
  },
  {
    name: "Llenyes",
    logo: llenyes.src,
    isMainSponsor: false,
  },
  {
    name: "Super Lluna",
    logo: lluna.src,
    isMainSponsor: false,
  },
  {
    name: "Lola Bistro",
    logo: lolaBistro.src,
    isMainSponsor: false,
  },
  {
    name: "Nogues",
    logo: nogues.src,
    isMainSponsor: false,
  },
  {
    name: "Pinturas Sanchez",
    logo: pinturas.src,
    isMainSponsor: false,
  },
  {
    name: "Taberna Pirata",
    logo: pirata.src,
    isMainSponsor: false,
  },
  {
    name: "Ramona",
    logo: ramona.src,
    isMainSponsor: false,
  },
  {
    name: "Si o Si",
    logo: siOSi.src,
    isMainSponsor: false,
  },
  {
    name: "T-Max",
    logo: tMax.src,
    isMainSponsor: false,
  },
  {
    name: "Toque",
    logo: toque.src,
    isMainSponsor: false,
  },
  {
    name: "Viavins",
    logo: viavins.src,
    isMainSponsor: false,
  },
  {
    name: "Vitali",
    logo: vitali.src,
    isMainSponsor: false,
  },
];
