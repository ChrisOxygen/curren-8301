import CountdownTimer from "@/components/countdown-timer";
import PricingCTA from "@/components/ui/pricing-cta";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="section-y-p relative overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: "url('/assets/black-gears-texture.jpeg')",
      }}
    >
      <div className="absolute opacity-90 inset-0 pointer-events-none bg-[#010000] z-1" />
      <div className="absolute inset-0 bg-background [clip-path:polygon(0_51%,100%_69%,100%_100%,0%_100%)] z-2" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex items-center flex-col gap-8">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline font-semibold text-center text-brand-primary">
          {PRODUCT.HEADLINE}
        </h1>
        <p className="max-w-3xl text-background text-base sm:text-xl md:text-2xl font-semibold italic text-center">
          {PRODUCT.SUBTITLE}
        </p>
        <CountdownTimer />
        <PricingCTA variant="hero" />
        <Image
          alt={PRODUCT.NAME}
          src={PRODUCT_IMAGES.HERO}
          width={2000}
          height={2000}
          className="rounded aspect-square sm:aspect-video object-cover"
        />
      </div>
    </section>
  );
}
