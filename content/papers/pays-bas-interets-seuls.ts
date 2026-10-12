import type { WorkingPaper } from "@/content/papers/types";

export const paysBasInteretsSeuls: WorkingPaper = {
  slug: "pays-bas-interets-seuls",
  kind: "working-paper",
  listKicker: "Note de recherche · comparaison",
  title: "Pays-Bas : comment encadrer un prêt à intérêts seuls sans ignorer le capital",
  lang: "fr",
  summary:
    "Les Pays-Bas ne testent pas les seuls intérêts. Ils calculent la capacité comme une annuité, tout en laissant le contrat à intérêts seuls. La fiscalité a changé le contrat, pas l’emploi de la liquidité.",
  currentVersionId: "2026-10-13",
  versions: [
    {
      id: "2026-10-12",
      published: "2026-10-12",
      status: "superseded",
      verdict:
        "Flux d’intérêts seuls compatible avec une capacité qui amortit pour de faux. Adoption française, accord du HCSF, financement et échelle de 500 à 700 Md€ non établis.",
      file: "content/papers/pays-bas-interets-seuls/v2026-10-12.md",
      sha256: "b0c9eadc100bbad2b9db1317ee7fd3faeaecd3b63df90452a74fca9a0e30ddce",
      note: "Suite de la note de standardisation. Ne copie pas les paramètres néerlandais dans le chemin de 700 Md€. Ne ferme ni EC-01 ni EC-05.",
    },
    {
      id: "2026-10-13",
      published: "2026-10-13",
      status: "frozen",
      verdict:
        "Flux d’intérêts seuls compatible avec une capacité qui amortit pour de faux. Adoption française, accord du HCSF, financement et échelle de 500 à 700 Md€ non établis.",
      file: "content/papers/pays-bas-interets-seuls/v2026-10-13.md",
      sha256: "0a2172c465574576d0c1b729689fc231580d5480a24d73042e53f9156fef860e",
      note: "Mêmes constats que 2026-10-12. Anglicismes retirés. Texte gelé. 700 Md€ inchangés.",
    },
  ],
  progress: [
    { id: "capacite", label: "Capacité notionnelle", state: "Règlement néerlandais, article 3" },
    { id: "part", label: "Part non amortissable", state: "Code de place, 50 % à l’octroi" },
    { id: "consolide", label: "Dette consolidée", state: "Règlement, 100 % de la valeur" },
    { id: "fiscal", label: "Déductibilité et usage des fonds", state: "Coût relevé ; placement non montré" },
    { id: "france", label: "Adoption en France", state: "Non établie" },
    { id: "chemin", label: "700 Md€", state: "Inchangés" },
  ],
  sources: [
    {
      id: "trhk",
      citation:
        "Tijdelijke regeling hypothecair krediet, BWBR0032503, texte en vigueur le 1er janvier 2026. Article 3 : charge d’annuité quelle que soit la forme. Article 5 : 100 % de la valeur, 106 % avec travaux d’énergie.",
      href: "https://wetten.overheid.nl/BWBR0032503/2026-01-01",
    },
    {
      id: "belastingdienst-plafond",
      citation:
        "Belastingdienst, limitation de la déduction du logement occupé dans la tranche supérieure à 37,56 % en 2026.",
      href: "https://www.belastingdienst.nl/wps/wcm/connect/nl/koopwoning/content/tariefsaanpassing-eigen-woning",
    },
    {
      id: "wet-ib",
      citation:
        "Wet inkomstenbelasting 2001, articles 3.119a et 10bis.1. Kamerstuk 33405, n° 3 : amortissement exigé pour la déductibilité des dettes nouvelles ; stock au 31 décembre 2012 maintenu.",
      href: "https://zoek.officielebekendmakingen.nl/kst-33405-3.html",
    },
    {
      id: "cpb-2024",
      citation:
        "CPB, Besparingen van Nederlandse huishoudens, 9 juillet 2024. La part des ménages qui remboursent passe de 25 % en 2007 à plus de 50 % en 2019. L’épargne supplémentaire est du remboursement.",
      href: "https://www.cpb.nl/besparingen-van-nederlandse-huishoudens",
    },
    {
      id: "esb-2018",
      citation:
        "Lennartz, Vrieselaar et Blanken, ESB, 24 septembre 2018. Enquête Nibud de janvier 2018 pour Rabobank : pas d’épargne supplémentaire hors du logement chez les propriétaires à intérêts seuls.",
      href: "https://esb.nu/sparen-door-woningeigenaren-met-een-aflossingsvrije-hypotheek/",
    },
    {
      id: "nhg-2026",
      citation:
        "NHG, Voorwaarden en normen 2026-1, C.6.7.1 : part à intérêts seuls limitée à la dette déjà qualifiée et à 50 % de la valeur.",
      href: "https://www.nhg.nl/media/gtaickpv/vn-nhg-2026.pdf",
    },
    {
      id: "note-standard",
      citation:
        "France 2040, standardiser un crédit adossé au logement, version 2026-10-13-2, texte gelé. Cette note en est la suite. Elle ne la corrige pas.",
      href: "/documents/standard-credit-logement/v/2026-10-13-2",
    },
    {
      id: "ec-01",
      citation:
        "France 2040, épreuve contradictoire EC-01. Le patrimoine agrégé n’est pas une capacité d’octroi. Cette note ne ferme pas l’épreuve.",
      href: "/documents/red-team-01",
    },
  ],
};
