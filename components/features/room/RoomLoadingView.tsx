import Link from "next/link";

export const RoomLoadingView = ({ roomId }: { roomId: string }) => {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <nav aria-label="Navegación de retorno" className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="font-medium text-zinc-700 transition hover:text-zinc-950">Inicio</Link>
          <span aria-hidden="true">/</span>
          <Link href="/catalog" className="font-medium text-zinc-700 transition hover:text-zinc-950">Catálogo</Link>
        </nav>
        <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">Cargando habitación</p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-800 sm:text-3xl">Preparando el detalle de tu estadía...</h1>
          <p className="text-zinc-500">Estamos buscando la información de la habitación {roomId}.</p>
        </div>
      </div>
    </main>
  );
};
