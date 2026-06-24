export const HomeUserActions = () => {
  return (
    <div className="flex items-center justify-end gap-3">
      <button
        type="button"
        className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 md:inline-flex"
      >
        Hazte anfitrión
      </button>
      <button
        type="button"
        aria-label="Idioma"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-zinc-700 transition hover:bg-zinc-100"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3c2.7 2.4 4.2 5.6 4.2 9s-1.5 6.6-4.2 9c-2.7-2.4-4.2-5.6-4.2-9S9.3 5.4 12 3Z" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Menú de usuario"
        className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-3 py-2 shadow-sm transition hover:shadow"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600">
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="3.25" />
            <path d="M6.5 19a6.5 6.5 0 0 1 11 0" />
          </svg>
        </span>
      </button>
    </div>
  );
};
