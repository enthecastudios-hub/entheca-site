export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: string;
  art: "art-a" | "art-b" | "art-c";
  images: string[];
  externalUrl?: string;
  featured?: boolean;
  buttonLabel?: string;
  buttonDisabled?: boolean;
}

export const projects: Project[] = [
  { slug: "iter-noctis", title: "Iter Noctis", tagline: "Dishonored in death, a pathlees soul not worthy of an afterlife seeks escape from the eternal commute.", description: "A longer description of the project. Talk about the mechanics, the inspiration, and what state it is currently in.", status: "wishlit now", art: "art-a", images: ["/IterNoctis.JPG"], externalUrl: "https://store.steampowered.com/app/4796910/Iter_Noctis/", featured: true, buttonLabel: "Wishlist now"},
  { slug: "thundersturck", title: "THUNDERSTRUCK", tagline: "Experience awakening in the engine.", description: "After a thunder strike, an unreal engine 5 mannequin comes to life and tries to escape.", status: "Winner of Gorka Games Game Jam", art: "art-b", images: ["/THUNDERSTRUCK.png"], buttonLabel: "Play demo", externalUrl: "https://enthecastudios.itch.io/thunderstruck"},
  { slug: "nevermeadow", title: "Nevermeadow", tagline: "To live without death is to defy the order of life.", description: "Explore the ruins of a forgotten kingdom in search for your niece. A final good deed in a life with few.", status: "in development", art: "art-c", images: ["/Nevermeadow.JPG"], buttonLabel: "Not available",},
  { slug: "blogbook", title: "BlogBook", tagline: "The new app for students", description: "The campus social network for students.", status: "Active development", art: "art-a", images: ["/BlogBookLogo2.png"], buttonLabel: "Not available", buttonDisabled: true},
];