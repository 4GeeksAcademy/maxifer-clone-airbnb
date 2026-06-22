import type { AmenityIcon } from "@/components/room-detail-data";

const iconByAmenity: Record<AmenityIcon, React.ReactNode> = {
  wifi: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 7.5a11 11 0 0 1 14 0" />
      <path d="M5.7 10.2a7.5 7.5 0 0 1 8.6 0" />
      <path d="M8.5 13a3.4 3.4 0 0 1 3 0" />
      <circle cx="10" cy="15.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  kitchen: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M6 2v5" />
      <path d="M8.5 2v5" />
      <path d="M6 4.5h2.5" />
      <path d="M7.2 7v11" />
      <path d="M13.5 2c1.3 0 2.3 1 2.3 2.3V9h-2.3v9" />
    </svg>
  ),
  parking: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="2.5" width="10" height="15" rx="2" />
      <path d="M6.5 7h3a2 2 0 0 1 0 4h-3z" />
      <path d="M6.5 11v4" />
    </svg>
  ),
  workspace: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="2.5" y="4" width="15" height="9" rx="1.8" />
      <path d="M8 16h4" />
      <path d="M10 13v3" />
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 6.5c.8-1 2.4-1 3.2 0 .8 1 2.4 1 3.2 0 .8-1 2.4-1 3.2 0" />
      <path d="M3 10.5c1 .9 2.9.9 3.9 0s2.9-.9 3.9 0 2.9.9 3.9 0" />
      <path d="M3 14c1 .9 2.9.9 3.9 0s2.9-.9 3.9 0 2.9.9 3.9 0" />
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="3" y="4" width="14" height="10" rx="1.8" />
      <path d="M8 16h4" />
      <path d="M10 14v2" />
    </svg>
  ),
};

export const RoomAmenityIcon = ({ icon }: { icon: AmenityIcon }) => {
  return iconByAmenity[icon];
};
