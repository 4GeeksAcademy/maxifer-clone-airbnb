import { RoomAmenityIcon } from "@/components/features/room/RoomAmenityIcon";
import type { RoomDetail } from "@/components/features/room/roomDetailData";

export const RoomSummary = ({ room }: { room: RoomDetail }) => {
  const filledStars = Math.round(room.rating);

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Habitación destacada</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">{room.title}</h1>

      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-700 sm:text-base">
        <div className="flex items-center" aria-label={`Valoración ${room.rating.toFixed(2)} de 5`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={`star-${index}`}
              viewBox="0 0 20 20"
              className={`h-4 w-4 ${index < filledStars ? "text-zinc-900" : "text-zinc-300"}`}
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1.8l2.5 5.06 5.58.81-4.04 3.94.95 5.56L10 14.7l-4.99 2.47.95-5.56L1.92 7.67l5.58-.81L10 1.8z" />
            </svg>
          ))}
          <span className="ml-2 font-semibold text-zinc-900">{room.rating.toFixed(2)}</span>
        </div>

        <span aria-hidden="true" className="text-zinc-400">·</span>
        <p className="font-medium text-zinc-700">{room.reviewsCount} reseñas</p>

        <span aria-hidden="true" className="text-zinc-400">·</span>
        <p className="text-zinc-600">{room.location}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-zinc-700 sm:grid-cols-4">
        <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.guests} huéspedes</p>
        <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.bedrooms} habitaciones</p>
        <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.beds} camas</p>
        <p className="rounded-2xl bg-zinc-100 px-4 py-3">{room.baths} baños</p>
      </div>

      <p className="mt-6 text-base leading-relaxed text-zinc-700">{room.description}</p>

      <div className="mt-6 flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-4 sm:p-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 text-xl font-semibold text-zinc-700">
          {room.host.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-sm text-zinc-500">Anfitrión</p>
          <p className="text-lg font-semibold text-zinc-900">{room.host}</p>
          <p className="text-sm text-zinc-600">{room.hostYears} años como anfitrión</p>
        </div>
      </div>

      <section className="mt-6" aria-labelledby="services-title">
        <h2 id="services-title" className="text-xl font-semibold tracking-tight text-zinc-900">Servicios</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {room.amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-zinc-700"
            >
              <span className="text-zinc-700"><RoomAmenityIcon icon={amenity.icon} /></span>
              <span className="text-sm font-medium sm:text-base">{amenity.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
