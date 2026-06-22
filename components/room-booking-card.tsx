interface RoomBookingCardProps {
  pricePerNight: number;
  guests: number;
  selectedGuests: number;
  minGuests: number;
  maxGuests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

export const RoomBookingCard = ({
  pricePerNight,
  guests,
  selectedGuests,
  minGuests,
  maxGuests,
  onDecreaseGuests,
  onIncreaseGuests,
}: RoomBookingCardProps) => {
  return (
    <aside className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6" aria-label="Tarjeta de reserva">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">Precio por noche</p>
          <p className="text-3xl font-semibold tracking-tight text-zinc-950">US${pricePerNight}</p>
        </div>
        <p className="text-sm text-zinc-600">Capacidad máxima: {guests} huéspedes</p>
      </div>

      <div className="mt-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3">
        <p className="text-sm font-medium text-zinc-600">Huéspedes</p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onDecreaseGuests}
            disabled={selectedGuests <= minGuests}
            className="h-10 w-10 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Reducir huéspedes"
          >
            -
          </button>
          <p className="text-lg font-semibold text-zinc-900">
            {selectedGuests} {selectedGuests === 1 ? "huésped" : "huéspedes"}
          </p>
          <button
            type="button"
            onClick={onIncreaseGuests}
            disabled={selectedGuests >= maxGuests}
            className="h-10 w-10 rounded-full border border-zinc-300 text-lg font-semibold text-zinc-700 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Aumentar huéspedes"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
      >
        Reservar ahora
      </button>
    </aside>
  );
};
