import Image from "next/image";
import Link from "next/link";

import type { ListingCardData } from "@/types/home";

const StarIcon = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      className={`h-4 w-4 ${filled ? "text-amber-500" : "text-zinc-300"}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3.8 2.6 5.4 6 .9-4.3 4.2 1 5.9L12 17.4l-5.3 2.8 1-5.9-4.3-4.2 6-.9L12 3.8Z" />
    </svg>
  );
};

const RatingStars = ({ rating }: { rating: number }) => {
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} filled={index < filledStars} />
      ))}
    </div>
  );
};

interface ListingCardProps {
  listing: ListingCardData;
}

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link
      href={`/rooms/${listing.id}`}
      className="block rounded-[28px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff385c] focus-visible:ring-offset-2"
      aria-label={`Ver detalle de ${listing.title}`}
    >
      <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
        <div
          className="relative flex aspect-[4/3] items-end justify-between bg-[linear-gradient(135deg,#ffe7ec_0%,#ffd3c6_45%,#f5f5f4_100%)] bg-cover bg-center p-5"
        >
          <Image
            src={listing.imageUrl}
            alt={`Imagen de ${listing.title}`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,231,236,0.8)_0%,rgba(255,211,198,0.75)_45%,rgba(245,245,244,0.65)_100%)]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">Foto referencial</p>
            <p className="mt-2 max-w-40 text-sm text-zinc-800">{listing.location}</p>
          </div>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700">
            {listing.tag}
          </span>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-lg font-semibold text-zinc-950">{listing.title}</h2>
            <p className="text-sm font-semibold text-zinc-700">{listing.rating.toFixed(2)}</p>
          </div>

          <div className="flex items-center justify-between gap-4">
            <p className="text-xl font-semibold text-zinc-950">
              US${listing.pricePerNight}
              <span className="text-sm font-normal text-zinc-500"> / noche</span>
            </p>
            <RatingStars rating={listing.rating} />
          </div>
        </div>
      </article>
    </Link>
  );
};