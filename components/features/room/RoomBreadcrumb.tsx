import Link from "next/link";

export const RoomBreadcrumb = ({ title }: { title: string }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-zinc-500">
      <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">Inicio</Link>
      <span aria-hidden="true">/</span>
      <Link href="/catalog" className="font-medium text-zinc-700 transition hover:text-zinc-950">Catálogo</Link>
      <span aria-hidden="true">/</span>
      <span className="truncate text-zinc-500">{title}</span>
    </nav>
  );
};
