export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export const EVENTS = {
  CTA_CLICKED: "cta_clicked",
  FAQ_OPENED: "faq_opened",
  FAQ_CLOSED: "faq_closed",
  CHECKOUT_STARTED: "checkout_started",
  CHECKOUT_QUANTITY_SELECTED: "checkout_quantity_selected",
  CHECKOUT_SUBMITTED: "checkout_submitted",
  CHECKOUT_SUCCESS: "checkout_success",
  CHECKOUT_ERROR: "checkout_error",
  CHECKOUT_DUPLICATE_SKIPPED: "checkout_duplicate_skipped",
  THANK_YOU_VIEWED: "thank_you_viewed",
  WHATSAPP_CTA_CLICKED: "whatsapp_cta_clicked",
} as const;
