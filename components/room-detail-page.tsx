"use client";

import { useParams } from "next/navigation";

import { RoomBreadcrumb } from "@/components/room-breadcrumb";
import { RoomGallery } from "@/components/room-gallery";
import { RoomInfoSection } from "@/components/room-info-section";
import { RoomLoadingView } from "@/components/room-loading-view";
import { RoomNotFoundView } from "@/components/room-not-found-view";
import { useRoomDetailState } from "@/components/use-room-detail-state";

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
