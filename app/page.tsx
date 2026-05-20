import dynamic from "next/dynamic";
import ScrollHeaderCTA from "@/components/sections/scroll-header-cta";
import Hero from "@/components/sections/hero";

const ProductDetails = dynamic(
  () => import("@/components/sections/product-details")
);
const ProductBenefits = dynamic(
  () => import("@/components/sections/product-benefits")
);
const ProductPricing = dynamic(
  () => import("@/components/sections/product-pricing")
);
const Testimonials = dynamic(
  () => import("@/components/sections/testimonials")
);
const Guarantee = dynamic(() => import("@/components/sections/guarantee"));
const FAQ = dynamic(() => import("@/components/sections/faq"));
const PayOnDelivery = dynamic(
  () => import("@/components/sections/pay-on-delivery")
);

export default function LandingPage() {
  return (
    <main>
      <ScrollHeaderCTA />
      <Hero />
      <ProductDetails />
      <ProductBenefits />
      <ProductPricing />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <PayOnDelivery />
    </main>
  );
}
