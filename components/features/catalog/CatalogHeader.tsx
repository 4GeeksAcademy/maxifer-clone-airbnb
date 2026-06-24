import Link from "next/link";

type SortOrder = "asc" | "desc";

interface CatalogHeaderProps {
  resultsCount: number;
  sortOrder: SortOrder;
  onSortOrderChange: (value: SortOrder) => void;
}

export const CatalogHeader = ({ resultsCount, sortOrder, onSortOrderChange }: CatalogHeaderProps) => {
  return (
    <>
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">Resultados de búsqueda</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              {resultsCount} alojamientos encontrados
            </h1>
          </div>

          <label className="flex items-center gap-3 self-start rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 sm:self-auto">
            <span className="font-medium">Ordenar por precio</span>
            <select
              value={sortOrder}
              onChange={(event) => onSortOrderChange(event.target.value as SortOrder)}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-800 outline-none"
              aria-label="Ordenar resultados por precio"
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </label>
        </div>
      </section>
    </>
  );
};
