"use client";

import { useEffect, useState } from "react";

import { homeCategories, homeListings } from "@/components/features/home/homeData";
import { HomeCategoriesNav } from "@/components/features/home/HomeCategoriesNav";
import { HomeHeader } from "@/components/features/home/HomeHeader";
import { HomeListingsSection } from "@/components/features/home/HomeListingsSection";
import type { ListingCardData } from "@/types/shared/Listing.types";

export const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [activeCategory, setActiveCategory] = useState(homeCategories[0]?.id ?? "explora");
  const [listings, setListings] = useState<ListingCardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setListings(homeListings);
      setIsLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  const normalizedSearch = searchText.trim().toLowerCase();
  const catalogHref = normalizedSearch ? `/catalog?search=${encodeURIComponent(searchText.trim())}` : "/catalog";
  const visibleListings = listings.filter((listing) => {
    const matchesCategory = activeCategory === "explora" || listing.categoryId === activeCategory;
    const searchableText = `${listing.title} ${listing.location} ${listing.tag}`.toLowerCase();
    const matchesSearch = normalizedSearch ? searchableText.includes(normalizedSearch) : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-zinc-950">
      <HomeHeader searchText={searchText} catalogHref={catalogHref} onSearchChange={setSearchText} />
      <HomeCategoriesNav
        categories={homeCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Explora</p>
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

        <HomeListingsSection
          isLoading={isLoading}
          searchText={searchText}
          visibleListings={visibleListings}
        />
      </main>
    </div>
  );
};
