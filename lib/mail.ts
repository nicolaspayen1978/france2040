import { Resend } from "resend";
import { absoluteUrl } from "@/lib/site";

function resendFrom(): string | null {
  const explicit = process.env.RESEND_FROM?.trim();
  if (explicit) return explicit;

  const domain = process.env.RESEND_EMAIL_DOMAIN?.trim().replace(/^@/, "");
  if (!domain) return null;
  return `France 2040 <noreply@${domain}>`;
}

export function isMailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY?.trim() && resendFrom());
}

function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) throw new Error("RESEND_API_KEY manquant.");
  return new Resend(apiKey);
}

function fromAddress(): string {
  const from = resendFrom();
  if (!from) throw new Error("RESEND_FROM ou RESEND_EMAIL_DOMAIN manquant.");
  return from;
}

export async function sendCommentVerificationEmail(input: {
  to: string;
  firstName: string;
  token: string;
}): Promise<void> {
  const verifyUrl = absoluteUrl(`/commentaires/verifier?token=${encodeURIComponent(input.token)}`);
  const resend = getResend();

  const { error } = await resend.emails.send({
    from: fromAddress(),
    to: input.to,
    subject: "Confirmez votre commentaire — France 2040",
    text: [
      `Bonjour ${input.firstName},`,
      "",
      "Merci pour votre commentaire sur France 2040.",
      "Pour qu’il entre en file de modération, confirmez votre adresse e-mail en ouvrant ce lien :",
      "",
      verifyUrl,
      "",
      "Ce lien expire sous 48 heures. Si vous n’êtes pas à l’origine de cette demande, ignorez ce message.",
      "",
      "— France 2040",
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Échec d’envoi du message de confirmation.");
  }
}
