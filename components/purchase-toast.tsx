"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";

const NAMES = [
  "Chidi",
  "Emeka",
  "Tunde",
  "Kemi",
  "Bola",
  "Amaka",
  "Seun",
  "Tobi",
  "Ngozi",
  "Femi",
  "Ada",
  "Uche",
  "Biodun",
  "Ifeanyi",
  "Yemi",
];
const CITIES = ["Lagos", "Abuja", "Port Harcourt"];

const ALLOWED_PATHS = ["/", "/checkout"];

const COPY_TEMPLATES = [
  (name: string, city: string) =>
    `${name} in ${city} just secured the last available set — don't miss yours!`,
  (name: string, city: string) =>
    `${name} from ${city} just claimed their Ruby Prestige Watch & Bracelet Set.`,
  (name: string, city: string) =>
    `${name} in ${city} just ordered — stock is running low today!`,
  (name: string, city: string) =>
    `${name} from ${city} just grabbed the Nibosi Ruby Prestige Set. Only a few left!`,
];

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTimeAgo(): string {
  const minutes = Math.floor(Math.random() * 5) + 1;
  return minutes === 1 ? "Just now" : `${minutes} mins ago`;
}

function firePurchaseToast() {
  const name = getRandomItem(NAMES);
  const city = getRandomItem(CITIES);
  const copy = getRandomItem(COPY_TEMPLATES)(name, city);
  const timeAgo = getTimeAgo();

  toast(
    <div className="flex items-center gap-3">
      <div className="relative size-14 shrink-0 overflow-hidden rounded">
        <Image
          src="/assets/imgi_6_imgi_301_a36e4d3995c65fe3576c2647a1c96ad29838997d_original-rfr7dcej5471yoos2xwgsvg1lvry4yfsz7sdrct8js.webp"
          alt="Nibosi Ruby Prestige"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <span
            style={{ color: "#de9749", fontWeight: 700, fontSize: "0.8rem" }}
          >
            Selling Fast!
          </span>
        </div>
        <span
          style={{ color: "#1b1c1d", fontSize: "0.78rem", lineHeight: "1.35" }}
        >
          {copy}
        </span>
        <span style={{ color: "#808080", fontSize: "0.7rem" }}>{timeAgo}</span>
      </div>
    </div>,
    {
      duration: 5000,
      closeButton: true,
      style: {
        background: "#f6efe7",
        border: "1px solid #86551e",
        color: "#1b1c1d",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 24px rgba(134,85,30,0.20)",
        padding: "0.75rem",
      },
    },
  );
}

export function PurchaseToast() {
  const pathname = usePathname();
  const isAllowedPath = ALLOWED_PATHS.includes(pathname);

  useEffect(() => {
    if (!isAllowedPath) return;

    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      firePurchaseToast();
      intervalId = setInterval(firePurchaseToast, 12000);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isAllowedPath]);

  return null;
}
