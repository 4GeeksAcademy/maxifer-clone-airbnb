"use client";

import { useEffect, useMemo, useState } from "react";

import { roomPhotoPlaceholders, roomsById, type RoomDetail } from "@/components/room-detail-data";

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(12, 0, 0, 0);
  return normalized;
};

const calculateNights = (checkInDate: Date | null, checkOutDate: Date | null) => {
  if (!checkInDate || !checkOutDate) {
    return 0;
  }

  const normalizedCheckIn = normalizeDate(checkInDate).getTime();
  const normalizedCheckOut = normalizeDate(checkOutDate).getTime();
  const millisecondsPerNight = 1000 * 60 * 60 * 24;

  return Math.max(0, Math.round((normalizedCheckOut - normalizedCheckIn) / millisecondsPerNight));
};

export const useRoomDetailState = (roomId: string) => {
  const [resolvedRoom, setResolvedRoom] = useState<{ requestedId: string; room: RoomDetail | null } | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  const room = resolvedRoom && resolvedRoom.requestedId === roomId ? resolvedRoom.room : null;
  const isLoading = !resolvedRoom || resolvedRoom.requestedId !== roomId;

  const activePhoto = useMemo(
    () => roomPhotoPlaceholders[currentPhotoIndex] ?? roomPhotoPlaceholders[0],
    [currentPhotoIndex],
  );

  const selectedNights = useMemo(() => calculateNights(checkInDate, checkOutDate), [checkInDate, checkOutDate]);

  const totalPrice = useMemo(() => {
    if (!room || selectedNights === 0) {
      return 0;
    }

    return room.pricePerNight * selectedNights;
  }, [room, selectedNights]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const today = normalizeDate(new Date());
      const defaultCheckOutDate = new Date(today);
      defaultCheckOutDate.setDate(today.getDate() + 2);

      setResolvedRoom({ requestedId: roomId, room: roomsById[roomId] ?? null });
      setCurrentPhotoIndex(0);
      setSelectedGuests(1);
      setCheckInDate(today);
      setCheckOutDate(defaultCheckOutDate);
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

  const updateCheckInDate = (nextCheckInDate: Date | null) => {
    setCheckInDate(nextCheckInDate);

    if (!nextCheckInDate) {
      setCheckOutDate(null);
      return;
    }

    setCheckOutDate((previousCheckOutDate) => {
      if (!previousCheckOutDate) {
        const suggestedCheckOut = new Date(nextCheckInDate);
        suggestedCheckOut.setDate(nextCheckInDate.getDate() + 1);
        return suggestedCheckOut;
      }

      return previousCheckOutDate > nextCheckInDate ? previousCheckOutDate : null;
    });
  };

  const updateCheckOutDate = (nextCheckOutDate: Date | null) => {
    setCheckOutDate(nextCheckOutDate);
  };

  return {
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
  };
};
