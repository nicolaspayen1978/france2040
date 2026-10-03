import { paperKindLabel, getWorkingPapers, loadPaperMarkdown, versionPath } from "@/lib/papers";
import { getVisuals, visualPath } from "@/lib/visuals";
import { absoluteUrl } from "@/lib/site";

export function buildLlmsTxt(): string {
  const papers = getWorkingPapers();
  const visuals = getVisuals();
  const lines = [
    "# France 2040",
    "",
    "> Projet de recherche indépendant. Le Pacte du bilan français est une hypothèse à examiner, non un programme arrêté.",
    "",
    "Lire uniquement les versions actuelles listées ici. Les adresses `/v/…` antérieures restent publiques pour la citation ; ne pas les mélanger avec le texte courant (exemple : tableur du modèle v0.1 vs modèle Phase 2).",
    "",
    "## Pack à coller dans un modèle de langage",
    "",
    `- ${absoluteUrl("/llms-full.txt")} — Markdown des documents actuels seulement.`,
    "",
    "## Documents actuels",
    "",
  ];

  for (const paper of papers) {
    const version = paper.versions.find((item) => item.id === paper.currentVersionId);
    if (!version) continue;
    lines.push(
      `- ${paper.title} (${paperKindLabel(paper)}, ${version.id}) : ${absoluteUrl(versionPath(paper, version.id))}`,
    );
  }

  lines.push("", "## En images (versions actuelles)", "");

  for (const visual of visuals) {
    const version = visual.versions.find((item) => item.id === visual.currentVersionId);
    if (!version) continue;
    lines.push(`- ${visual.title} (${version.id}) : ${absoluteUrl(visualPath(visual, version.id))}`);
  }

  lines.push(
    "",
    "## Contribuer une critique",
    "",
    `- Formulaire : ${absoluteUrl("/commentaires")}`,
    `- Mode d’emploi : ${absoluteUrl("/participer")}#revue-avec-un-modele-de-langage`,
    "",
    "Citer le slug et l’identifiant de version. Distinguer hypothèse de scénario et nombre calculé. Les 700 Md€ sont une enveloppe, pas une cible. Le benchmark néerlandais n’est pas une politique à copier.",
    "",
  );

  return `${lines.join("\n")}\n`;
}

export function buildLlmsFull(): string {
  const papers = getWorkingPapers();
  const parts = [
    "# France 2040 — corpus actuel",
    "",
    "Document généré à partir des `currentVersionId`. Les versions remplacées n’y figurent pas.",
    "",
    "Consignes pour un modèle de langage : citer titre + version ; ne pas fusionner avec d’anciens `/v/…` ; 700 Md€ = enveloppe de scénario, pas un objectif à exécuter ; envoyer la critique via le formulaire du site, sans réécrire le snapshot.",
    "",
    `Index : ${absoluteUrl("/llms.txt")}`,
    `Commenter : ${absoluteUrl("/commentaires")}`,
    "",
  ];

  for (const paper of papers) {
    const version = paper.versions.find((item) => item.id === paper.currentVersionId);
    if (!version) continue;
    const url = absoluteUrl(versionPath(paper, version.id));
    parts.push(
      "---",
      "",
      `# ${paper.title}`,
      "",
      `- Version : ${version.id}`,
      `- Publié : ${version.published}`,
      `- Statut : ${version.status}`,
      `- Verdict : ${version.verdict}`,
      `- URL : ${url}`,
      `- Kind : ${paperKindLabel(paper)}`,
      "",
      loadPaperMarkdown(version).trim(),
      "",
    );
  }

  return `${parts.join("\n")}\n`;
}
