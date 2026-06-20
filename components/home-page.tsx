"use client";

import { useEffect, useState } from "react";

import type { ListingCardData } from "@/types/home";

type CategoryItem = {
  id: string;
  label: string;
  icon: React.ComponentType;
};

const mockListings: ListingCardData[] = [
  {
    id: "palermo-loft",
    title: "Loft luminoso en Palermo",
    location: "Buenos Aires, Argentina",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 82,
    rating: 4.91,
    tag: "Favorito entre huéspedes",
    categoryId: "tendencias",
  },
  {
    id: "bariloche-cabin",
    title: "Cabaña con vista al lago",
    location: "Bariloche, Argentina",
    imageUrl:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 110,
    rating: 4.88,
    tag: "Escapada natural",
    categoryId: "cabanas",
  },
  {
    id: "mendoza-house",
    title: "Casa boutique entre viñedos",
    location: "Mendoza, Argentina",
    imageUrl:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 96,
    rating: 4.95,
    tag: "Ideal para desconectar",
    categoryId: "campo",
  },
  {
    id: "miami-studio",
    title: "Studio moderno cerca de la playa",
    location: "Miami, Estados Unidos",
    imageUrl:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 140,
    rating: 4.84,
    tag: "Viaje urbano",
    categoryId: "playa",
  },
  {
    id: "madrid-flat",
    title: "Piso acogedor en Malasaña",
    location: "Madrid, España",
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 118,
    rating: 4.9,
    tag: "Céntrico",
    categoryId: "diseno",
  },
  {
    id: "tulum-villa",
    title: "Villa tropical con piscina privada",
    location: "Tulum, México",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    pricePerNight: 175,
    rating: 4.97,
    tag: "Top rated",
    categoryId: "mansiones",
  },
];

function CategoryBaseIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function ExploreIcon() {
  return (
    <CategoryBaseIcon>
      <circle cx="12" cy="12" r="7" />
      <path d="m12 12 3.5-3.5" />
      <path d="M12 5v2" />
      <path d="M19 12h-2" />
      <path d="M12 19v-2" />
      <path d="M5 12h2" />
    </CategoryBaseIcon>
  );
}

function BeachIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M4 18h16" />
      <path d="M6 18c1.2-3 3.2-4.5 6-4.5S16.8 15 18 18" />
      <path d="M12 6v7.5" />
      <path d="M12 6c-1.2 0-2.3.4-3.2 1.1" />
      <path d="M12 6c1.2 0 2.3.4 3.2 1.1" />
      <circle cx="18" cy="6" r="1.5" />
    </CategoryBaseIcon>
  );
}

function MansionIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M3 20h18" />
      <path d="M5 20V9l4 2V7l4 2 6-3v14" />
      <path d="M9 20v-4h4v4" />
      <path d="M7.5 12.5h.01" />
      <path d="M12 12.5h.01" />
      <path d="M16.5 12.5h.01" />
    </CategoryBaseIcon>
  );
}

function TrendIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M4 17l5-5 4 3 7-8" />
      <path d="M14 7h6v6" />
    </CategoryBaseIcon>
  );
}

function CabinIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M4 20h16" />
      <path d="M6 20v-7l6-5 6 5v7" />
      <path d="M9 20v-4h6v4" />
      <path d="M8 10 12 6l4 4" />
    </CategoryBaseIcon>
  );
}

function PoolIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M4 16c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8" />
      <path d="M4 20c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8" />
      <path d="M8 13V6" />
      <path d="M8 6h5" />
      <path d="M13 6v3" />
    </CategoryBaseIcon>
  );
}

function CountrysideIcon() {
  return (
    <CategoryBaseIcon>
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M17 20v-8" />
      <path d="M7 14c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M17 12c-1.7 0-3-1.3-3-3 1.7 0 3 1.3 3 3Z" />
    </CategoryBaseIcon>
  );
}

function DesignIcon() {
  return (
    <CategoryBaseIcon>
      <path d="m12 4 7 4v8l-7 4-7-4V8l7-4Z" />
      <path d="m9 11 3-2 3 2-3 2-3-2Z" />
    </CategoryBaseIcon>
  );
}

const categories: CategoryItem[] = [
  { id: "explora", label: "Explora", icon: ExploreIcon },
  { id: "playa", label: "Playa", icon: BeachIcon },
  { id: "mansiones", label: "Mansiones", icon: MansionIcon },
  { id: "tendencias", label: "Tendencias", icon: TrendIcon },
  { id: "cabanas", label: "Cabañas", icon: CabinIcon },
  { id: "piscinas", label: "Piscinas", icon: PoolIcon },
  { id: "campo", label: "Campo", icon: CountrysideIcon },
  { id: "diseno", label: "Diseño", icon: DesignIcon },
];

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 text-zinc-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M12 3c2.7 2.4 4.2 5.6 4.2 9s-1.5 6.6-4.2 9c-2.7-2.4-4.2-5.6-4.2-9S9.3 5.4 12 3Z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3.25" />
      <path d="M6.5 19a6.5 6.5 0 0 1 11 0" />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${filled ? "text-amber-500" : "text-zinc-300"}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3.8 2.6 5.4 6 .9-4.3 4.2 1 5.9L12 17.4l-5.3 2.8 1-5.9-4.3-4.2 6-.9L12 3.8Z" />
    </svg>
  );
}

function RatingStars({ rating }: { rating: number }) {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} filled={index < filledStars} />
      ))}
    </div>
  );
}

export function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "explora");
  const [listings, setListings] = useState<ListingCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(mockListings);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchText(value);
  };

  const normalizedSearch = searchText.trim().toLowerCase();
  const visibleListings = listings.filter((listing) => {
    const matchesCategory = activeCategory === "explora" || listing.categoryId === activeCategory;
    const searchableText = `${listing.title} ${listing.location} ${listing.tag}`.toLowerCase();
    const matchesSearch = normalizedSearch ? searchableText.includes(normalizedSearch) : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-950">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff385c] text-lg font-bold text-white shadow-sm">
                N
              </div>
              <div>
                <p className="text-lg font-semibold tracking-tight text-[#ff385c]">
                  Nómade
                </p>
                <p className="text-sm text-zinc-500">Encuentra tu próxima estadía</p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 md:inline-flex"
              >
                Hazte anfitrión
              </button>
              <button
                type="button"
                aria-label="Idioma"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-zinc-700 transition hover:bg-zinc-100"
              >
                <GlobeIcon />
              </button>
              <button
                type="button"
                aria-label="Menú de usuario"
                className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm transition hover:shadow"
              >
                <MenuIcon />
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
                  <UserIcon />
                </span>
              </button>
            </div>
          </div>

          <label className="flex w-full items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#ff385c] focus-within:ring-4 focus-within:ring-[#ff385c]/10 lg:mx-auto lg:max-w-xl">
            <SearchIcon />
            <input
              type="search"
              value={searchText}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Busca por destino, ciudad o tipo de estancia"
              className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              aria-label="Buscar alojamientos"
            />
          </label>

          <nav
            aria-label="Filtros por categoría"
            className="-mx-4 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            <div className="flex w-max min-w-max items-center gap-6 lg:mx-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`group flex min-w-16 flex-col items-center gap-2 border-b-2 px-1 pb-3 pt-1 text-xs font-medium transition ${
                      isActive
                        ? "border-zinc-950 text-zinc-950"
                        : "border-transparent text-zinc-400 hover:border-zinc-300 hover:text-zinc-700"
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon />
                    <span className="whitespace-nowrap text-[0.8rem]">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Explora
          </p>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Alojamientos para cualquier estilo de viaje
              </h1>
              <p className="mt-2 max-w-2xl text-base text-zinc-500">
                Explora tarjetas cargadas al montar la página y filtra resultados en tiempo real.
              </p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-sm text-zinc-500 shadow-sm">
              {isLoading ? "Cargando alojamientos..." : `${visibleListings.length} espacios disponibles`}
            </div>
          </div>
        </section>

        {isLoading ? (
          <section className="rounded-[28px] bg-white px-6 py-12 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-zinc-200 border-t-[#ff385c]" />
            <h2 className="mt-4 text-xl font-semibold text-zinc-950">Cargando alojamientos</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Estamos preparando la selección destacada para ti.
            </p>
          </section>
        ) : (
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleListings.map((listing) => (
              <article
                key={listing.id}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="flex aspect-[4/3] items-end justify-between bg-[linear-gradient(135deg,#ffe7ec_0%,#ffd3c6_45%,#f5f5f4_100%)] p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Foto referencial
                    </p>
                    <p className="mt-2 max-w-40 text-sm text-zinc-700">{listing.location}</p>
                  </div>
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {listing.tag}
                  </span>
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-semibold text-zinc-950">{listing.title}</h2>
                    <p className="text-sm font-semibold text-zinc-700">{listing.rating.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xl font-semibold text-zinc-950">
                      US${listing.pricePerNight}
                      <span className="text-sm font-normal text-zinc-500"> / noche</span>
                    </p>
                    <RatingStars rating={listing.rating} />
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {!isLoading && visibleListings.length === 0 ? (
          <section className="rounded-[28px] border border-dashed border-zinc-300 bg-white px-6 py-12 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-950">
              No encontramos resultados para {searchText ? `“${searchText}”` : "los filtros seleccionados"}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Prueba con otra ciudad, destino o tipo de alojamiento.
            </p>
          </section>
        ) : null}
      </main>
    </div>
  );
}