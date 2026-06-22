"use client";

import Link from "next/link";
import { useState } from "react";

import { ListingCard } from "@/components/listing-card";
import type { ListingCardData } from "@/types/home";

type SortOrder = "asc" | "desc";

const catalogListings: ListingCardData[] = [
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

export const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedResults = [...catalogListings].sort((a, b) =>
    sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
  );

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <nav aria-label="Navegación principal" className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">
            Inicio
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-zinc-500">Catálogo</span>
        </nav>

        <section className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
                Resultados de búsqueda
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                {sortedResults.length} alojamientos encontrados
              </h1>
            </div>

            <label className="flex items-center gap-3 self-start rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 sm:self-auto">
              <span className="font-medium">Ordenar por precio</span>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-800 outline-none"
                aria-label="Ordenar resultados por precio"
              >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </label>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {sortedResults.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>

          <aside className="h-72 rounded-[28px] border border-zinc-300 bg-zinc-200/70 p-5 shadow-sm sm:h-80 lg:sticky lg:top-6 lg:h-[calc(100vh-7rem)]">
            <div className="flex h-full items-center justify-center rounded-[20px] border border-dashed border-zinc-400 bg-zinc-100 text-3xl font-semibold tracking-wide text-zinc-500">
              Mapa
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};
