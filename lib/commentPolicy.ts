export const COMMENT_RULES_VERSION = "2026-10-07";
export const COMMENT_PRIVACY_EMAIL = "support@france2040.eu";
export const COMMENT_DATA_CONTROLLER = "Nicolas Payen, agissant via NPE Holding B.V.";

const DAY = 24 * 60 * 60;

export const COMMENT_RETENTION_SECONDS = {
  unverified: 2 * DAY,
  pending: 90 * DAY,
  accepted: 3 * 365 * DAY,
  rejected: 90 * DAY,
} as const;
