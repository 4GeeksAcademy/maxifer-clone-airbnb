import dynamic from "next/dynamic";

import { ListingCard } from "@/components/listing-card";
import type { ListingCardData } from "@/types/home";

const CatalogMap = dynamic(
  () => import("@/components/catalog-map").then((module) => module.CatalogMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center rounded-[20px] border border-dashed border-zinc-400 bg-zinc-100 text-sm font-medium text-zinc-500">
        Cargando mapa...
      </div>
    ),
  },
);

interface CatalogContentProps {
  listings: ListingCardData[];
}

export const CatalogContent = ({ listings }: CatalogContentProps) => {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <aside className="h-72 rounded-[28px] border border-zinc-300 bg-zinc-200/70 p-5 shadow-sm sm:h-80 lg:sticky lg:top-6 lg:h-[calc(100vh-7rem)]">
        <CatalogMap listings={listings} />
      </aside>
    </section>
  );
};
