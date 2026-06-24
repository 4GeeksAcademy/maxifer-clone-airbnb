const iconBaseClass = "h-6 w-6";

const iconBaseProps = {
  "aria-hidden": true,
  className: iconBaseClass,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const iconByCategory: Record<string, React.ReactNode> = {
  playa: (
    <svg {...iconBaseProps}>
      <path d="M4 18h16" />
      <path d="M6 18c1.2-3 3.2-4.5 6-4.5S16.8 15 18 18" />
      <path d="M12 6v7.5" />
      <circle cx="18" cy="6" r="1.5" />
    </svg>
  ),
  mansiones: (
    <svg {...iconBaseProps}>
      <path d="M3 20h18" />
      <path d="M5 20V9l4 2V7l4 2 6-3v14" />
      <path d="M9 20v-4h4v4" />
    </svg>
  ),
  tendencias: (
    <svg {...iconBaseProps}>
      <path d="M4 17l5-5 4 3 7-8" />
      <path d="M14 7h6v6" />
    </svg>
  ),
  cabanas: (
    <svg {...iconBaseProps}>
      <path d="M4 20h16" />
      <path d="M6 20v-7l6-5 6 5v7" />
      <path d="M9 20v-4h6v4" />
    </svg>
  ),
  piscinas: (
    <svg {...iconBaseProps}>
      <path d="M4 16c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8" />
      <path d="M4 20c1.2 0 1.8-.8 3-.8s1.8.8 3 .8 1.8-.8 3-.8 1.8.8 3 .8 1.8-.8 3-.8" />
    </svg>
  ),
  campo: (
    <svg {...iconBaseProps}>
      <path d="M4 20h16" />
      <path d="M7 20v-6" />
      <path d="M17 20v-8" />
      <path d="M7 14c0-2.2 1.8-4 4-4s4 1.8 4 4" />
    </svg>
  ),
  diseno: (
    <svg {...iconBaseProps}>
      <path d="m12 4 7 4v8l-7 4-7-4V8l7-4Z" />
      <path d="m9 11 3-2 3 2-3 2-3-2Z" />
    </svg>
  ),
};

const defaultIcon = (
  <svg {...iconBaseProps}>
    <circle cx="12" cy="12" r="7" />
    <path d="m12 12 3.5-3.5" />
    <path d="M12 5v2" />
    <path d="M19 12h-2" />
    <path d="M12 19v-2" />
    <path d="M5 12h2" />
  </svg>
);

export const HomeCategoryIcon = ({ categoryId }: { categoryId: string }) => {
  return iconByCategory[categoryId] ?? defaultIcon;
};
