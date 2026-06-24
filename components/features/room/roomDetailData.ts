export type AmenityIcon = "wifi" | "kitchen" | "parking" | "workspace" | "pool" | "tv";

export type RoomAmenity = {
  id: string;
  label: string;
  icon: AmenityIcon;
};

export type RoomDetail = {
  id: string;
  title: string;
  location: string;
  description: string;
  host: string;
  hostYears: number;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: RoomAmenity[];
};

export const roomPhotoPlaceholders = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
];

export const roomsById: Record<string, RoomDetail> = {
  "palermo-loft": {
    id: "palermo-loft",
    title: "Loft luminoso en Palermo",
    location: "Buenos Aires, Argentina",
    description:
      "Un loft moderno y cómodo, ideal para disfrutar la ciudad a pie. Tiene cocina equipada, buena luz natural y acceso rápido a cafés y parques.",
    host: "Marina",
    hostYears: 5,
    pricePerNight: 82,
    rating: 4.91,
    reviewsCount: 128,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "workspace", label: "Zona de trabajo", icon: "workspace" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "tv", label: "Smart TV", icon: "tv" },
    ],
  },
  "bariloche-cabin": {
    id: "bariloche-cabin",
    title: "Cabaña con vista al lago",
    location: "Bariloche, Argentina",
    description:
      "Refugio cálido entre montañas con una vista abierta al lago. Perfecto para una escapada de descanso con naturaleza alrededor.",
    host: "Nicolás",
    hostYears: 7,
    pricePerNight: 110,
    rating: 4.88,
    reviewsCount: 94,
    guests: 4,
    bedrooms: 2,
    beds: 3,
    baths: 1,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "parking", label: "Estacionamiento", icon: "parking" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "pool", label: "Jacuzzi exterior", icon: "pool" },
    ],
  },
  "mendoza-house": {
    id: "mendoza-house",
    title: "Casa boutique entre viñedos",
    location: "Mendoza, Argentina",
    description:
      "Casa elegante con patio y parrilla rodeada de viñedos. Una opción excelente para desconectar y recorrer bodegas.",
    host: "Lucía",
    hostYears: 6,
    pricePerNight: 96,
    rating: 4.95,
    reviewsCount: 156,
    guests: 5,
    bedrooms: 2,
    beds: 3,
    baths: 2,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "workspace", label: "Zona de trabajo", icon: "workspace" },
      { id: "parking", label: "Estacionamiento", icon: "parking" },
      { id: "tv", label: "TV en sala", icon: "tv" },
    ],
  },
  "miami-studio": {
    id: "miami-studio",
    title: "Studio moderno cerca de la playa",
    location: "Miami, Estados Unidos",
    description:
      "Studio renovado con estilo contemporáneo, a pocos minutos de la playa y con acceso rápido a zonas gastronómicas y de ocio.",
    host: "Sofía",
    hostYears: 4,
    pricePerNight: 140,
    rating: 4.84,
    reviewsCount: 102,
    guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "tv", label: "TV en habitación", icon: "tv" },
      { id: "parking", label: "Estacionamiento", icon: "parking" },
    ],
  },
  "madrid-flat": {
    id: "madrid-flat",
    title: "Piso acogedor en Malasaña",
    location: "Madrid, España",
    description:
      "Apartamento cálido en uno de los barrios más vibrantes de Madrid, ideal para recorrer la ciudad caminando y disfrutar de su vida cultural.",
    host: "Javier",
    hostYears: 8,
    pricePerNight: 118,
    rating: 4.9,
    reviewsCount: 137,
    guests: 3,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "workspace", label: "Zona de trabajo", icon: "workspace" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "tv", label: "Smart TV", icon: "tv" },
    ],
  },
  "tulum-villa": {
    id: "tulum-villa",
    title: "Villa tropical con piscina privada",
    location: "Tulum, México",
    description:
      "Villa amplia rodeada de vegetación con piscina privada y espacios abiertos. Perfecta para una escapada relajante en clima cálido.",
    host: "Camila",
    hostYears: 6,
    pricePerNight: 175,
    rating: 4.97,
    reviewsCount: 89,
    guests: 6,
    bedrooms: 3,
    beds: 4,
    baths: 2,
    amenities: [
      { id: "wifi", label: "Wifi", icon: "wifi" },
      { id: "pool", label: "Piscina privada", icon: "pool" },
      { id: "kitchen", label: "Cocina equipada", icon: "kitchen" },
      { id: "parking", label: "Estacionamiento", icon: "parking" },
      { id: "workspace", label: "Zona de trabajo", icon: "workspace" },
    ],
  },
};
