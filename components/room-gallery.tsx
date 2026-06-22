import Image from "next/image";

import { roomPhotoPlaceholders, type RoomDetail } from "@/components/room-detail-data";

interface RoomGalleryProps {
  room: RoomDetail;
  activePhoto: string;
  currentPhotoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const RoomGallery = ({ room, activePhoto, currentPhotoIndex, onPrevious, onNext }: RoomGalleryProps) => {
  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] w-full bg-zinc-200 sm:aspect-[16/8]">
        <Image
          src={activePhoto}
          alt={`Foto ${currentPhotoIndex + 1} de la habitación ${room.title}`}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/45 via-zinc-900/5 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
          <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700 sm:text-sm">
            Foto {currentPhotoIndex + 1} de {roomPhotoPlaceholders.length}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevious}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow transition hover:bg-zinc-100"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-zinc-700"
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
