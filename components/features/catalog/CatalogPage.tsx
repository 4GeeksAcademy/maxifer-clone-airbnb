"use client";

import { useState } from "react";

import { catalogListings } from "@/components/features/catalog/catalogData";
import { CatalogContent } from "@/components/features/catalog/CatalogContent";
import { CatalogHeader } from "@/components/features/catalog/CatalogHeader";

type SortOrder = "asc" | "desc";

export const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const sortedResults = [...catalogListings].sort((a, b) =>
    sortOrder === "asc" ? a.pricePerNight - b.pricePerNight : b.pricePerNight - a.pricePerNight,
  );

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <CatalogHeader
          resultsCount={sortedResults.length}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
        />
        <CatalogContent listings={sortedResults} />
      </div>
    </main>
  );
};
