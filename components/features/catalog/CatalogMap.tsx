"use client";

import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import type { ListingCardData } from "@/types/shared/Listing.types";

interface CatalogMapProps {
  listings: ListingCardData[];
}

const defaultCenter: [number, number] = [-34.6037, -58.3816];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const CatalogMap = ({ listings }: CatalogMapProps) => {
  const listingsWithCoords = listings.filter(
    (listing): listing is ListingCardData & { latitude: number; longitude: number } =>
      typeof listing.latitude === "number" && typeof listing.longitude === "number",
  );

  const mapCenter: [number, number] = listingsWithCoords.length
    ? [listingsWithCoords[0].latitude, listingsWithCoords[0].longitude]
    : defaultCenter;

  return (
    <MapContainer
      center={mapCenter}
      zoom={3}
      scrollWheelZoom
      className="h-full w-full rounded-[20px]"
      aria-label="Mapa de alojamientos"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {listingsWithCoords.map((listing) => (
        <Marker key={listing.id} position={[listing.latitude, listing.longitude]} icon={markerIcon}>
          <Popup>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-zinc-900">{listing.title}</p>
              <p className="text-xs text-zinc-700">{listing.location}</p>
              <p className="text-xs font-medium text-zinc-900">US${listing.pricePerNight} por noche</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
