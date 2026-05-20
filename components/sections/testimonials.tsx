import Image from "next/image";
import PricingTotals from "@/components/ui/pricing-totals";

const TESTIMONIAL_IMAGES = [
  {
    src: "/assets/testimonials/imgi_35_WhatsApp-Image-2025-12-06-at-14.32.24_ba1e6614.webp",
    alt: "Testimonial from Chioma",
  },
  {
    src: "/assets/testimonials/imgi_36_WhatsApp-Image-2025-12-06-at-14.26.03_6c913a27.webp",
    alt: "Testimonial from Adesua",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="section-y-p bg-brand-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-12 w-full max-w-3xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-primary-dark">
            Happy customers!!
          </h3>
          <div className="flex flex-col sm:flex-row w-full gap-4 justify-center items-center sm:items-stretch">
            {TESTIMONIAL_IMAGES.map(({ src, alt }) => (
              <Image
                key={src}
                alt={alt}
                src={src}
                width={1000}
                height={1000}
                className="w-full sm:w-1/2 sm:max-w-[300px] object-cover"
              />
            ))}
          </div>
          <PricingTotals location="testimonials" />
        </div>
      </div>
    </section>
  );
}
