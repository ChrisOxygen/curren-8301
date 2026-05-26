import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { PurchaseToast } from "@/components/purchase-toast";
import { PostHogClientProvider } from "@/components/providers/posthog-client";

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
      <head>
        <link
          rel="preload"
          href="/assets/black-gears-texture.jpeg"
          as="image"
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1373837287805564');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1373837287805564&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <PostHogClientProvider>
          {children}
          <Footer />
          <Toaster position="bottom-left" />
          <PurchaseToast />
        </PostHogClientProvider>
      </body>
    </html>
  );
}
