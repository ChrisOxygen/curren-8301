import { PRODUCT } from "@/constants/product";

export const PRICING = {
  ORIGINAL: 88500,
  OFFER: 70000,
  SAVINGS: 18500,
  WATCH: 70000,
  BRACELET: 17500,
  DELIVERY: 6000,
} as const;

export function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString()}`;
}

export const LINE_ITEMS = [
  { label: PRODUCT.WATCH_NAME, price: PRICING.WATCH },
  { label: PRODUCT.BRACELET_NAME, price: PRICING.BRACELET },
  {
    label: `Delivery in ${PRODUCT.DELIVERY_REGION} (FREE)`,
    price: PRICING.DELIVERY,
  },
];
