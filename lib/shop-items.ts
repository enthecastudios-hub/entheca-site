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
  { slug: "item-one", title: "Item One", price: "$5", description: "Short description of what this includes.", longDescription: "Full details about what Item One actually contains, once you decide.", art: "art-a", images: [] },
  { slug: "item-two", title: "Item Two", price: "$12", description: "Short description of what this includes.", longDescription: "Full details about what Item Two actually contains, once you decide.", art: "art-b", images: [] },
  { slug: "item-three", title: "Item Three", price: "$20", description: "Short description of what this includes.", longDescription: "Full details about what Item Three actually contains, once you decide.", art: "art-c", images: [] },
  { slug: "item-four", title: "Item Four", price: "$8", description: "Short description of what this includes.", longDescription: "Full details about what Item Four actually contains, once you decide.", art: "art-a", images: [] },
];