"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";
import { useOrderStore } from "@/store/order";
import { PRODUCT, WHATSAPP_LINK } from "@/constants/product";
import { COPY } from "@/constants/copy";
import { EVENTS } from "@/lib/posthog";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function GoldRule() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-brand-primary to-brand-primary" />
      <div className="size-2 rotate-45 bg-brand-primary shrink-0" />
      <div className="size-2 rotate-45 border border-brand-primary shrink-0" />
      <div className="size-2 rotate-45 bg-brand-primary shrink-0" />
      <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-brand-primary to-brand-primary" />
    </div>
  );
}

export default function ThankYou() {
  const firstName = useOrderStore((s) => s.firstName);
  const displayName = firstName || "Friend";
  const ph = usePostHog();

  useEffect(() => {
    ph?.capture(EVENTS.THANK_YOU_VIEWED, { has_first_name: !!firstName });
  }, [ph, firstName]);

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/imgi_6_imgi_301_a36e4d3995c65fe3576c2647a1c96ad29838997d_original-rfr7dcej5471yoos2xwgsvg1lvry4yfsz7sdrct8js.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/95" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 sm:px-8 py-10 flex flex-col gap-6">
        <GoldRule />

        {/* Heading */}
        <div className="flex flex-col gap-1">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-brand-primary leading-tight">
            Order Confirmed —<br />
            You&apos;re Our Lucky #{PRODUCT.LUCKY_NUMBER}!
          </h1>
          <p className="font-semibold text-lg sm:text-xl text-brand-primary-dark/90">
            Congratulations,{" "}
            <span className="text-brand-primary">{displayName}</span>!
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 text-foreground/80 text-base sm:text-lg leading-relaxed">
          <p>
            You&apos;re officially our{" "}
            <span className="text-brand-primary font-semibold">
              {PRODUCT.LUCKY_NUMBER}th customer today
            </span>{" "}
            — and {PRODUCT.LUCKY_NUMBER} has always been our lucky number. Since
            you hit that magic spot, we&apos;re throwing in an{" "}
            <strong className="text-foreground">extra free gift</strong> with
            your {PRODUCT.NAME} order.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <p className="text-black/80 text-base sm:text-lg ">
          Your package is ready — want it at your doorstep{" "}
          <span className="text-brand-primary font-semibold">
            before the day is over?
          </span>{" "}
          Tap below and we&apos;ll make it happen,{" "}
          <span className="text-brand-primary font-semibold">
            at no extra cost.
          </span>
        </p>
        <Link
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => ph?.capture(EVENTS.WHATSAPP_CTA_CLICKED)}
          className="whatsapp-pulse group relative overflow-hidden rounded flex items-center justify-center gap-4 bg-whatsapp px-6 py-6 text-white"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none" />
          <WhatsAppIcon className="size-10 sm:size-14 shrink-0" />
          <span className="font-heading capitalize font-bold text-xl sm:text-3xl leading-tight">
            {COPY.WHATSAPP_CTA_BUTTON}
          </span>
        </Link>

        <GoldRule />
      </div>
    </div>
  );
}
