import { RoomBookingCard } from "@/components/room-booking-card";
import { RoomSummary } from "@/components/room-summary";
import type { RoomDetail } from "@/components/room-detail-data";

interface RoomInfoSectionProps {
  room: RoomDetail;
  selectedGuests: number;
  minGuests: number;
  maxGuests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

export const RoomInfoSection = ({
  room,
  selectedGuests,
  minGuests,
  maxGuests,
  onDecreaseGuests,
  onIncreaseGuests,
}: RoomInfoSectionProps) => {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <RoomSummary room={room} />
      <RoomBookingCard
        pricePerNight={room.pricePerNight}
        guests={room.guests}
        selectedGuests={selectedGuests}
        minGuests={minGuests}
        maxGuests={maxGuests}
        onDecreaseGuests={onDecreaseGuests}
        onIncreaseGuests={onIncreaseGuests}
      />
    </section>
  );
};
