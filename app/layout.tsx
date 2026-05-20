import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { PurchaseToast } from "@/components/purchase-toast";

const PostHogProvider = dynamic(
  () =>
    import("@/components/providers/posthog-provider").then(
      (m) => m.PostHogProvider
    ),
  { ssr: false }
);

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curren Meridian Bronze | Premium Watch & Bracelet Set",
  description:
    "Elevate every moment with the Curren Meridian Bronze Leather Watch and Titan's Edge Premium Leather Bracelet. Swiss-inspired precision, premium quality. Free delivery in Lagos. Pay on delivery.",
  icons: {
    icon: "/assets/white-on-black-bg-icon.png",
    apple: "/assets/white-on-black-bg-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <PostHogProvider>
          {children}
          <Footer />
          <Toaster position="bottom-left" />
          <PurchaseToast />
        </PostHogProvider>
      </body>
    </html>
  );
}
