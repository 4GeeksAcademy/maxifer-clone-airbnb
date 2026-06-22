import { RoomBookingCard } from "@/components/room-booking-card";
import { RoomSummary } from "@/components/room-summary";
import type { RoomDetail } from "@/components/room-detail-data";

interface RoomInfoSectionProps {
  room: RoomDetail;
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

export const RoomInfoSection = ({
  room,
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
}: RoomInfoSectionProps) => {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <RoomSummary room={room} />
      <RoomBookingCard
        pricePerNight={room.pricePerNight}
        guests={room.guests}
        selectedGuests={selectedGuests}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        selectedNights={selectedNights}
        totalPrice={totalPrice}
        minGuests={minGuests}
        maxGuests={maxGuests}
        onDecreaseGuests={onDecreaseGuests}
        onIncreaseGuests={onIncreaseGuests}
        onUpdateCheckInDate={onUpdateCheckInDate}
        onUpdateCheckOutDate={onUpdateCheckOutDate}
      />
    </section>
  );
};
