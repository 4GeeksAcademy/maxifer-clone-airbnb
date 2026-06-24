"use client";

import { useParams } from "next/navigation";

import { RoomBreadcrumb } from "@/components/features/room/RoomBreadcrumb";
import { RoomGallery } from "@/components/features/room/RoomGallery";
import { RoomInfoSection } from "@/components/features/room/RoomInfoSection";
import { RoomLoadingView } from "@/components/features/room/RoomLoadingView";
import { RoomNotFoundView } from "@/components/features/room/RoomNotFoundView";
import { useRoomDetailState } from "@/components/features/room/useRoomDetailState";

export const RoomDetailPage = () => {
  const params = useParams<{ id: string }>();
  const roomId = params?.id ?? "";
  const {
    room,
    isLoading,
    activePhoto,
    currentPhotoIndex,
    selectedGuests,
    checkInDate,
    checkOutDate,
    selectedNights,
    totalPrice,
    minGuests,
    maxGuests,
    previousPhoto,
    nextPhoto,
    decreaseGuests,
    increaseGuests,
    updateCheckInDate,
    updateCheckOutDate,
  } = useRoomDetailState(roomId);

  if (isLoading) {
    return <RoomLoadingView roomId={roomId} />;
  }

  if (!room) {
    return <RoomNotFoundView roomId={roomId} />;
  }

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-4 py-6 text-zinc-900 sm:px-6 lg:px-8">
      <article className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <RoomBreadcrumb title={room.title} />

        <RoomGallery
          room={room}
          activePhoto={activePhoto}
          currentPhotoIndex={currentPhotoIndex}
          onPrevious={previousPhoto}
          onNext={nextPhoto}
        />

        <RoomInfoSection
          room={room}
          selectedGuests={selectedGuests}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          selectedNights={selectedNights}
          totalPrice={totalPrice}
          minGuests={minGuests}
          maxGuests={maxGuests}
          onDecreaseGuests={decreaseGuests}
          onIncreaseGuests={increaseGuests}
          onUpdateCheckInDate={updateCheckInDate}
          onUpdateCheckOutDate={updateCheckOutDate}
        />
      </article>
    </main>
  );
};
