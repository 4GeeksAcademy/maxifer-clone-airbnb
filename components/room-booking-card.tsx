import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface RoomBookingCardProps {
  pricePerNight: number;
  guests: number;
  selectedGuests: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  selectedNights: number;
  totalPrice: number;
  minGuests: number;
  maxGuests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
  onUpdateCheckInDate: (nextCheckInDate: Date | null) => void;
  onUpdateCheckOutDate: (nextCheckOutDate: Date | null) => void;
}

export const RoomBookingCard = ({
  pricePerNight,
  guests,
  selectedGuests,
  checkInDate,
  checkOutDate,
  selectedNights,
  totalPrice,
  minGuests,
  maxGuests,
  onDecreaseGuests,
  onIncreaseGuests,
  onUpdateCheckInDate,
  onUpdateCheckOutDate,
}: RoomBookingCardProps) => {
  const minimumCheckInDate = new Date();
  const minimumCheckOutDate = checkInDate ? new Date(checkInDate.getTime() + 1000 * 60 * 60 * 24) : new Date();

  return (
    <aside className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm sm:p-6" aria-label="Tarjeta de reserva">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-500">Precio por noche</p>
          <p className="text-3xl font-semibold tracking-tight text-zinc-950">US${pricePerNight}</p>
        </div>
        <p className="text-sm text-zinc-600">Capacidad máxima: {guests} huéspedes</p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3">
          <p className="text-sm font-medium text-zinc-600">Entrada</p>
          <DatePicker
            selected={checkInDate}
            onChange={onUpdateCheckInDate}
            minDate={minimumCheckInDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona fecha"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-900"
          />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white px-4 py-3">
          <p className="text-sm font-medium text-zinc-600">Salida</p>
          <DatePicker
            selected={checkOutDate}
            onChange={onUpdateCheckOutDate}
            minDate={minimumCheckOutDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecciona fecha"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-800 outline-none transition focus:border-zinc-900"
          />
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-500">
        {selectedNights > 0
          ? `${selectedNights} ${selectedNights === 1 ? "noche" : "noches"} seleccionadas`
          : "Selecciona entrada y salida para calcular el total"}
      </p>

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

      <div className="mt-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between text-sm text-zinc-600">
          <p>
            US${pricePerNight} x {selectedNights} {selectedNights === 1 ? "noche" : "noches"}
          </p>
          <p>US${selectedNights > 0 ? totalPrice : 0}</p>
        </div>
        <div className="mt-3 border-t border-zinc-200 pt-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-zinc-700">Total estimado</p>
            <p className="text-xl font-semibold tracking-tight text-zinc-950">US${selectedNights > 0 ? totalPrice : 0}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={selectedNights === 0}
        className="mt-5 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:bg-zinc-400"
      >
        Reservar ahora
      </button>
    </aside>
  );
};
