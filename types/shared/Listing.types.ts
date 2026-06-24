export interface HomeLink {
  href: string;
  label: string;
  variant: "primary" | "secondary";
  target?: "_blank";
  rel?: string;
}

export interface HomeResourceLink {
  href: string;
  label: string;
}

export interface ListingCardData {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  tag: string;
  categoryId: string;
  latitude?: number;
  longitude?: number;
}