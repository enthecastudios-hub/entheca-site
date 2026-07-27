export interface ShopItem {
  slug: string;
  title: string;
  price: string;
  description: string;
  longDescription: string;
  art: "art-a" | "art-b" | "art-c";
  images: string[];
}

export const shopItems: ShopItem[] = [
  { slug: "posture-based-combat-system", title: "Posture Based Combat System", price: "$50", description: "An in depth combat system based on parrying.", longDescription: "A comprehensive combat system that emphasizes the importance of posture, stamina and technique. Including multiple custom animations, models and", art: "art-a", images: ["/PBCS_Banner.png"] },
  { slug: "item-two", title: "Item Two", price: "$12", description: "Short description of what this includes.", longDescription: "Full details about what Item Two actually contains, once you decide.", art: "art-b", images: [] },
  { slug: "item-three", title: "Item Three", price: "$20", description: "Short description of what this includes.", longDescription: "Full details about what Item Three actually contains, once you decide.", art: "art-c", images: [] },
  { slug: "item-four", title: "Item Four", price: "$8", description: "Short description of what this includes.", longDescription: "Full details about what Item Four actually contains, once you decide.", art: "art-a", images: [] },
];