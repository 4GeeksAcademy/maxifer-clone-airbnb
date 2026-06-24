import Link from "next/link";

interface HomeSearchBarProps {
  searchText: string;
  catalogHref: string;
  onSearchChange: (value: string) => void;
}

export const HomeSearchBar = ({ searchText, catalogHref, onSearchChange }: HomeSearchBarProps) => {
  return (
    <div className="flex w-full items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#ff385c] focus-within:ring-4 focus-within:ring-[#ff385c]/10 lg:mx-auto lg:max-w-xl">
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
      <input
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Busca por destino, ciudad o tipo de estancia"
        className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
        aria-label="Buscar alojamientos"
      />
      <Link
        href={catalogHref}
        className="rounded-full bg-[#ff385c] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e53054]"
      >
        Buscar
      </Link>
    </div>
  );
};
