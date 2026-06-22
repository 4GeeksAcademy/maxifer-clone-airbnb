"use client";

import { useEffect, useMemo, useState } from "react";

import { roomPhotoPlaceholders, roomsById, type RoomDetail } from "@/components/room-detail-data";

export const useRoomDetailState = (roomId: string) => {
  const [resolvedRoom, setResolvedRoom] = useState<{ requestedId: string; room: RoomDetail | null } | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedGuests, setSelectedGuests] = useState(1);

  const room = resolvedRoom && resolvedRoom.requestedId === roomId ? resolvedRoom.room : null;
  const isLoading = !resolvedRoom || resolvedRoom.requestedId !== roomId;

  const activePhoto = useMemo(
    () => roomPhotoPlaceholders[currentPhotoIndex] ?? roomPhotoPlaceholders[0],
    [currentPhotoIndex],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setResolvedRoom({ requestedId: roomId, room: roomsById[roomId] ?? null });
      setCurrentPhotoIndex(0);
      setSelectedGuests(1);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [roomId]);

  const previousPhoto = () => {
    setCurrentPhotoIndex((previous) => (previous === 0 ? roomPhotoPlaceholders.length - 1 : previous - 1));
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((previous) => (previous === roomPhotoPlaceholders.length - 1 ? 0 : previous + 1));
  };

  const minGuests = 1;
  const maxGuests = room?.guests ?? 1;

  const decreaseGuests = () => {
    setSelectedGuests((previous) => (previous > minGuests ? previous - 1 : previous));
  };

  const increaseGuests = () => {
    setSelectedGuests((previous) => (previous < maxGuests ? previous + 1 : previous));
  };

  return {
    room,
    isLoading,
    activePhoto,
    currentPhotoIndex,
    selectedGuests,
    minGuests,
    maxGuests,
    previousPhoto,
    nextPhoto,
    decreaseGuests,
    increaseGuests,
  };
};
