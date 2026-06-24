import { ListingCard } from "@/components/shared/listing/ListingCard";
import type { ListingCardData } from "@/types/shared/Listing.types";

interface HomeListingsSectionProps {
  isLoading: boolean;
  searchText: string;
  visibleListings: ListingCardData[];
}

export const HomeListingsSection = ({ isLoading, searchText, visibleListings }: HomeListingsSectionProps) => {
  if (isLoading) {
    return (
      <section className="rounded-[28px] bg-white px-6 py-12 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 animate-spin items-center justify-center rounded-full border-4 border-zinc-200 border-t-[#ff385c]" />
        <h2 className="mt-4 text-xl font-semibold text-zinc-950">Cargando alojamientos</h2>
        <p className="mt-2 text-sm text-zinc-500">Estamos preparando la selección destacada para ti.</p>
      </section>
    );
  }

  if (visibleListings.length === 0) {
    return (
      <section className="rounded-[28px] border border-dashed border-zinc-300 bg-white px-6 py-12 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-zinc-950">
          No encontramos resultados para {searchText ? `“${searchText}”` : "los filtros seleccionados"}
        </h2>
        <p className="mt-2 text-sm text-zinc-500">Prueba con otra ciudad, destino o tipo de alojamiento.</p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {visibleListings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
};
