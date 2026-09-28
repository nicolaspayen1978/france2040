import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modèle France 2040 — v0.1",
  description:
    "Tableur exploratoire du 28 septembre 2026. Les hypothèses sont modifiables. Ce n’est pas une prévision.",
};

export default function ModelPage() {
  return (
    <article className="pact">
      <p className="kicker">Document de travail · 28 septembre 2026</p>
      <h1>Modèle France 2040</h1>
      <p className="lede">Version v0.1. Exploratoire. Les hypothèses sont modifiables.</p>
      <div className="version-box">
        <p>Modèle v0.1 — 28 septembre 2026</p>
        <p>
          Ce tableur sert à rendre les hypothèses explicites. Ce n’est pas une prévision, ni une
          recommandation. Le scénario de 700 Md€ y est une hypothèse saisie, pas un résultat.
        </p>
      </div>
      <p>
        L’identité de calcul est : croissance du PIB nominal = croissance réelle sous-jacente +
        impulsion réelle attribuée au Pacte + déflateur du PIB. Le Pacte Spread est la croissance
        du PIB nominal moins la croissance nominale de la dépense publique.
      </p>
      <p>
        Le ratio de dette publique de cette version est illustratif : la dette nominale y est tenue
        constante. Il devra être remplacé par un compte complet du solde primaire et des intérêts.
      </p>
      <p>
        La part de dépense intérieure de 65 % et l’impulsion de 0,35 par euro, dans cette version,
        sont des saisies. Leur produit n’est pas une estimation du passage du crédit au PIB. La
        feuille « Conversion probes » pose trois sondes, 25 %, 50 % et 75 %, sur la part du crédit
        qui deviendrait une dépense supplémentaire. Aucune n’est un cas central. Sur 700 Md€, ces
        sondes font 175, 350 et 525 Md€ de dépense. Elles ne mesurent pas le PIB français. La part
        de cette dépense qui s’adresse à la production française, et le taux de transmission
        minimum, n’y sont pas remplis. Le critère de succès n’est pas encore défini.
      </p>
      <ul className="downloads">
        <li>
          <a href="/sources/modele-france-2040-v0.1.xlsx">Télécharger le tableur</a>
        </li>
      </ul>
    </article>
  );
}
