export const PRODUCT = {
  NAME: "Cureen Meridian Bronze",
  WATCH_NAME: "Curren Meridian Bronze Leather watch",
  WATCH_TAGLINE: "Precision timekeeping with sophisticated design",
  BRACELET_NAME: "Titan's Edge Premium Leather Bracelet",
  BRACELET_DESCRIPTION:
    "Titan’s Edge, a bold multi-strand bracelet that merges raw natural beauty with refined craftsmanship",
  HEADLINE: "Elevate Every Moment with Curren Meridian Bronze",
  SUBTITLE: "(The Premium Watch & Bracelet Set That Defines Your Style)",
  TAGLINE: "The Perfect Combination for the Modern Professional",
  PAY_ON_DELIVERY_SUBTITLE:
    "Ready to make your statement with the Curren Meridian Bronze Leather watch watch? We deliver right to your doorstep in Lagos, Abuja, and port harcourt. You only pay when your presidential timepiece arrives safely in your hands",
  LUCKY_NUMBER: 7,
  DELIVERY_REGION: "Lagos State and Port Harcourt",
  WHATSAPP_NUMBER: "2348023101492",
  WHATSAPP_MESSAGE:
    "Hi! I just placed an order for the Curren Meridian Bronze Leather watch watch set and I'm ready for delivery today!",
} as const;

export const WHATSAPP_LINK = `https://wa.me/${PRODUCT.WHATSAPP_NUMBER}?text=${encodeURIComponent(PRODUCT.WHATSAPP_MESSAGE)}`;

export const PRODUCT_IMAGES = {
  HERO: "/assets/imgi_5_imgi_169_H193c8b4533374a7896fd8aebd7a318b4q-1024x767.webp",
  WATCH_GALLERY: [
    "/assets/imgi_6_imgi_301_a36e4d3995c65fe3576c2647a1c96ad29838997d_original-rfr7dcej5471yoos2xwgsvg1lvry4yfsz7sdrct8js.webp",
    "/assets/imgi_7_imgi_289_e1465d94-4b38-430d-b86b-701405904dc6_1.7ba72b4b33b56b2e443d3caa17f47734-rfr7drfy6grn4g2xn4ehwrnf41ptk43ida85fs6xs8.jpeg",
    "/assets/imgi_31_imgi_304_61xCLk3pHcL._AC_.webp",
  ],
  WATCH_PRICING:
    "/assets/imgi_5_imgi_169_H193c8b4533374a7896fd8aebd7a318b4q-1024x767.webp",
  BRACELET: "/assets/imgi_9_imgi_455_Hbc082f6efd864ba4976c84c79d1d0922v.webp",
} as const;
