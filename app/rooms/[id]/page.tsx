"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type RoomDetail = {
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
  amenities: { id: string; label: string; icon: "wifi" | "kitchen" | "parking" | "workspace" | "pool" | "tv" }[];
};

const roomsById: Record<string, RoomDetail> = {
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

const photoPlaceholders = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
];

const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const roomId = params?.id ?? "";

  const [resolvedRoom, setResolvedRoom] = useState<{
    requestedId: string;
    room: RoomDetail | null;
  } | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedGuests, setSelectedGuests] = useState(1);

  const room =
    resolvedRoom && resolvedRoom.requestedId === roomId ? resolvedRoom.room : null;
  const isLoading = !resolvedRoom || resolvedRoom.requestedId !== roomId;

  const activePhoto = useMemo(
    () => photoPlaceholders[currentPhotoIndex] ?? photoPlaceholders[0],
    [currentPhotoIndex],
  );

  const filledStars = room ? Math.round(room.rating) : 0;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setResolvedRoom({ requestedId: roomId, room: roomsById[roomId] ?? null });
      setCurrentPhotoIndex(0);
      setSelectedGuests(1);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  const handlePreviousPhoto = () => {
    setCurrentPhotoIndex((previous) =>
      previous === 0 ? photoPlaceholders.length - 1 : previous - 1,
    );
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((previous) =>
      previous === photoPlaceholders.length - 1 ? 0 : previous + 1,
    );
  };

  const minGuests = 1;
  const maxGuests = room?.guests ?? 1;

  const handleDecreaseGuests = () => {
    setSelectedGuests((previous) => (previous > minGuests ? previous - 1 : previous));
  };

  const handleIncreaseGuests = () => {
    setSelectedGuests((previous) => (previous < maxGuests ? previous + 1 : previous));
  };

  const renderAmenityIcon = (icon: RoomDetail["amenities"][number]["icon"]) => {
    if (icon === "wifi") {
      return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M3 7.5a11 11 0 0 1 14 0" />
          <path d="M5.7 10.2a7.5 7.5 0 0 1 8.6 0" />
          <path d="M8.5 13a3.4 3.4 0 0 1 3 0" />
          <circle cx="10" cy="15.6" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    }

    if (icon === "kitchen") {
      return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M6 2v5" />
          <path d="M8.5 2v5" />
          <path d="M6 4.5h2.5" />
          <path d="M7.2 7v11" />
          <path d="M13.5 2c1.3 0 2.3 1 2.3 2.3V9h-2.3v9" />
        </svg>
      );
    }

    if (icon === "parking") {
      return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="3" y="2.5" width="10" height="15" rx="2" />
          <path d="M6.5 7h3a2 2 0 0 1 0 4h-3z" />
          <path d="M6.5 11v4" />
        </svg>
      );
    }

    if (icon === "workspace") {
      return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <rect x="2.5" y="4" width="15" height="9" rx="1.8" />
          <path d="M8 16h4" />
          <path d="M10 13v3" />
        </svg>
      );
    }

    if (icon === "pool") {
      return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M4 6.5c.8-1 2.4-1 3.2 0 .8 1 2.4 1 3.2 0 .8-1 2.4-1 3.2 0" />
          <path d="M3 10.5c1 .9 2.9.9 3.9 0s2.9-.9 3.9 0 2.9.9 3.9 0" />
          <path d="M3 14c1 .9 2.9.9 3.9 0s2.9-.9 3.9 0 2.9.9 3.9 0" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="4" width="14" height="10" rx="1.8" />
        <path d="M8 16h4" />
        <path d="M10 14v2" />
      </svg>
    );
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <nav aria-label="Navegación de retorno" className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/catalog" className="font-medium text-zinc-700 transition hover:text-zinc-950">
              Catálogo
            </Link>
          </nav>
          <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              Cargando habitación
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl">
              Preparando el detalle de tu estadía...
            </h1>
            <p className="text-zinc-500">Estamos buscando la información de la habitación {roomId}.</p>
          </div>
        </div>
      </main>
    );
  }

  if (!room) {
    return (
      <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
          <nav aria-label="Navegación de retorno" className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
            <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">
              Inicio
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/catalog" className="font-medium text-zinc-700 transition hover:text-zinc-950">
              Catálogo
            </Link>
          </nav>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
              No encontrada
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Esta habitación no existe
            </h1>
            <p className="mt-2 text-zinc-600">
              No encontramos resultados para el id solicitado: <span className="font-semibold">{roomId}</span>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <article className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/catalog" className="font-medium text-zinc-700 transition hover:text-zinc-950">
            Catálogo
          </Link>
          <span aria-hidden="true">/</span>
          <span className="truncate text-zinc-500">{room.title}</span>
        </nav>

        <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <div className="relative aspect-[16/10] w-full bg-zinc-200 sm:aspect-[16/8]">
            <Image
              src={activePhoto}
              alt={`Foto ${currentPhotoIndex + 1} de la habitación ${room.title}`}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/45 via-zinc-900/5 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
              <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700 sm:text-sm">
                Foto {currentPhotoIndex + 1} de {photoPlaceholders.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePreviousPhoto}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow transition hover:bg-zinc-100"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-zinc-700"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Habitación destacada
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {room.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-700 sm:text-base">
            <div className="flex items-center" aria-label={`Valoración ${room.rating.toFixed(2)} de 5`}>
              {Array.from({ length: 5 }).map((_, index) => {
                const isFilled = index < filledStars;

                return (
                  <svg
                    key={`star-${index}`}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${isFilled ? "text-zinc-900" : "text-zinc-300"}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 1.8l2.5 5.06 5.58.81-4.04 3.94.95 5.56L10 14.7l-4.99 2.47.95-5.56L1.92 7.67l5.58-.81L10 1.8z" />
                  </svg>
                );
              })}
              <span className="ml-2 font-semibold text-zinc-900">{room.rating.toFixed(2)}</span>
            </div>

            <span aria-hidden="true" className="text-zinc-400">
              ·
            </span>
            <p className="font-medium text-zinc-700">{room.reviewsCount} reseñas</p>

            <span aria-hidden="true" className="text-zinc-400">
              ·
            </span>
            <p className="text-zinc-600">{room.location}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-700 sm:grid-cols-4">
            <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.guests} huéspedes</p>
            <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.bedrooms} habitaciones</p>
            <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.beds} camas</p>
            <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.baths} baños</p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-zinc-700">{room.description}</p>

          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-xl font-semibold text-zinc-700">
              {room.host.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-sm text-zinc-500">Anfitrión</p>
              <p className="text-lg font-semibold text-zinc-900">{room.host}</p>
              <p className="text-sm text-zinc-600">{room.hostYears} años como anfitrión</p>
            </div>
          </div>

          <section className="mt-6" aria-labelledby="services-title">
            <h2 id="services-title" className="text-xl font-semibold tracking-tight text-zinc-900">
              Servicios
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {room.amenities.map((amenity) => (
                <div
                  key={amenity.id}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-700"
                >
                  <span className="text-zinc-700">{renderAmenityIcon(amenity.icon)}</span>
                  <span className="text-sm font-medium sm:text-base">{amenity.label}</span>
                </div>
              ))}
            </div>
          </section>

          <aside className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6" aria-label="Tarjeta de reserva">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-500">Precio por noche</p>
                <p className="text-3xl font-semibold tracking-tight text-zinc-950">US${room.pricePerNight}</p>
              </div>
              <p className="text-sm text-zinc-600">Capacidad máxima: {room.guests} huéspedes</p>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3">
              <p className="text-sm font-medium text-zinc-600">Huéspedes</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDecreaseGuests}
                  disabled={selectedGuests <= minGuests}
                  className="h-10 w-10 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Reducir huéspedes"
                >
                  -
                </button>
                <p className="text-lg font-semibold text-zinc-900">
                  {selectedGuests} {selectedGuests === 1 ? "huésped" : "huéspedes"}
                </p>
                <button
                  type="button"
                  onClick={handleIncreaseGuests}
                  disabled={selectedGuests >= maxGuests}
                  className="h-10 w-10 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Aumentar huéspedes"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              Reservar ahora
            </button>
          </aside>
        </section>
      </article>
    </main>
  );
};

export default RoomDetailPage;