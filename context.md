# Contexto del proyecto

## Nombre del proyecto

Clon de interfaz de Airbnb con Next.js y React.

## Objetivo

El objetivo de este proyecto es construir una réplica visual y funcional de tres vistas principales de una experiencia tipo Airbnb:

1. Página de inicio.
2. Página de catálogo o resultados de búsqueda.
3. Página de detalle de una habitación o alojamiento.

El foco está en practicar arquitectura de componentes, diseño mobile-first, navegación entre páginas y construcción de interfaces modernas usando Next.js, React, TypeScript y Tailwind CSS.

## Usuario objetivo

El usuario es una persona que busca un alojamiento temporal para viajar, descansar o trabajar desde otro lugar. Quiere explorar opciones de hospedaje, comparar precios, revisar información básica y entrar al detalle de una propiedad que le interese.

## Experiencia principal

El usuario debe poder:

* Ver una página inicial atractiva con barra de búsqueda, categorías y alojamientos destacados.
* Navegar hacia una página de resultados con una lista de alojamientos disponibles.
* Seleccionar un alojamiento y ver una página de detalle con imágenes, descripción, precio, ubicación, servicios y datos del anfitrión.
* Moverse entre las páginas sin recargar el navegador, usando la navegación propia de Next.js.

## Enfoque de diseño

La implementación será mobile-first. Primero se diseñará para un viewport de 375px y luego se adaptará a escritorio desde 768px.

La interfaz debe sentirse limpia, moderna y visual, tomando como referencia la experiencia de Airbnb: tarjetas con imágenes grandes, bordes redondeados, buena separación entre elementos, textos claros y jerarquía visual marcada.

## Páginas principales

### Home

La página de inicio debe presentar una experiencia simple para comenzar una búsqueda.

Componentes principales:

#### Especificación de componentes (basada en capturas desktop y mobile)

1. HomePage

Responsabilidad: componer toda la vista Home y coordinar variantes responsive.

Props:
* search: SearchState
* categories: CategoryItem[]
* sections: ListingSection[]
* navItems: BottomNavItem[]
* hostCtaLabel: string
* locale: string

2. HomeHeader

Responsabilidad: cabecera superior con marca y acciones globales.

Props:
* logoVariant: "full" | "icon"
* showHostCta: boolean
* hostCtaLabel: string
* actions: HeaderAction[]
* isMobile: boolean

3. SearchBar

Responsabilidad: entrada principal de búsqueda. En desktop se muestra como barra segmentada, en mobile como CTA compacta.

Props:
* variant: "desktop-segmented" | "mobile-compact"
* whereLabel: string
* wherePlaceholder: string
* whenLabel: string
* whenPlaceholder: string
* whoLabel: string
* whoPlaceholder: string
* onSearch: (query: SearchQuery) => void

4. CategoryTabs

Responsabilidad: navegación horizontal de categorías (Todo, Alojamientos, Experiencias, Servicios).

Props:
* items: CategoryItem[]
* activeId: string
* onSelect: (categoryId: string) => void
* showBottomBorder: boolean

5. ListingsSection

Responsabilidad: bloque de contenido con título, subtítulo opcional, carrusel y control de avance.

Props:
* title: string
* subtitle?: string
* listings: ListingCardData[]
* onNext: () => void
* onPrev?: () => void
* showControls: boolean

6. ListingsCarousel

Responsabilidad: lista horizontal de tarjetas.

Props:
* items: ListingCardData[]
* itemMinWidth: number
* gap: number
* snap: boolean

7. ListingCard

Responsabilidad: presentar cada alojamiento con imagen, etiqueta social, favorito y metadatos.

Props:
* id: string
* title: string
* imageUrl: string
* imageAlt: string
* socialLabel: string
* isFavorite: boolean
* pricePerStay: number
* nights: number
* rating: number
* currencySymbol: string
* onToggleFavorite: (id: string) => void
* onOpen: (id: string) => void

8. FavoriteButton

Responsabilidad: control de favorito sobrepuesto en cada tarjeta.

Props:
* active: boolean
* onClick: () => void
* ariaLabel: string

9. SectionNavButton

Responsabilidad: botón circular de avance/retroceso para secciones.

Props:
* direction: "next" | "prev"
* onClick: () => void
* hiddenOnMobile: boolean

10. BottomMobileNav

Responsabilidad: navegación inferior fija solo en mobile (Explora, Favoritos, Iniciar sesión).

Props:
* items: BottomNavItem[]
* activeId: string
* onChange: (itemId: string) => void
* visibleFrom: "mobile"

#### Tipos de datos sugeridos

* SearchState: { where: string; when: string; who: string }
* SearchQuery: { where?: string; checkIn?: string; checkOut?: string; guests?: number }
* CategoryItem: { id: string; label: string; icon: string }
* HeaderAction: { id: string; icon: string; ariaLabel: string; onClick: () => void }
* ListingSection: { id: string; title: string; subtitle?: string; listings: ListingCardData[] }
* ListingCardData: { id: string; title: string; imageUrl: string; pricePerStay: number; nights: number; rating: number; socialLabel: string; isFavorite: boolean }
* BottomNavItem: { id: string; label: string; icon: string; href?: string }

#### Relación de layout en la página

##### Desktop (aprox. 1280px)

1. HomePage
2. HomeHeader (fila superior con logo a la izquierda, tabs centradas y acciones a la derecha)
3. SearchBar (debajo del header, centrada y con segmentos Dónde, Fechas, Quién)
4. Contenido principal en columna:
	 * ListingsSection: Alojamientos populares en Buenos Aires
	 * ListingsSection: Hoteles increíbles para tu próximo viaje
5. Cada ListingsSection contiene:
	 * encabezado (título, subtítulo opcional, botón de avance)
	 * ListingsCarousel con varias ListingCard visibles simultáneamente
6. BottomMobileNav no se renderiza en desktop

##### Mobile (aprox. 375px)

1. HomePage
2. SearchBar en modo compacto en la parte superior
3. CategoryTabs en scroll horizontal inmediatamente debajo
4. Contenido principal en columna:
	 * ListingsSection: Alojamientos populares en Buenos Aires
	 * ListingsSection: Hoteles increíbles para tu próximo viaje
5. Cada ListingsSection muestra menos tarjetas visibles y conserva scroll horizontal
6. BottomMobileNav fija al borde inferior de la pantalla

#### Jerarquía de composición

HomePage
* HomeHeader
* SearchBar
* CategoryTabs
* MainContent
	* ListingsSection (n veces)
		* SectionHeader
			* SectionNavButton
		* ListingsCarousel
			* ListingCard (n veces)
				* FavoriteButton
* BottomMobileNav (solo mobile)

La intención de esta vista es que el usuario pueda descubrir alojamientos rápidamente y acceder al catálogo.

### Catálogo / Resultados de búsqueda

La página de catálogo muestra una lista de alojamientos disponibles.

Componentes principales:

#### Especificación de componentes (basada en capturas desktop y mobile)

1. SearchResultsPage

Responsabilidad: componer toda la vista de resultados y coordinar el comportamiento responsive entre listado, mapa y navegación.

Props:
* search: SearchState
* results: SearchResultItem[]
* mapPins: MapPin[]
* infoBanner: InfoBannerData
* navItems: BottomNavItem[]
* filters: FilterAction[]
* selectedResultId?: string
* selectedPinId?: string
* isMapExpanded?: boolean

2. SearchResultsHeader

Responsabilidad: mostrar la barra superior de búsqueda con acciones contextuales. En mobile incluye volver y filtros; en desktop convive con branding y navegación global.

Props:
* search: SearchState
* variant: "mobile" | "desktop"
* onBack?: () => void
* onOpenSearch: () => void
* onOpenFilters: () => void
* headerActions?: HeaderAction[]
* showBrand?: boolean

3. SearchSummaryBar

Responsabilidad: resumir los criterios de búsqueda en una cápsula compacta.

Props:
* locationLabel: string
* dateLabel: string
* guestLabel: string
* leadingIcon?: string
* trailingActionIcon?: string
* onClick: () => void

4. ResultsShell

Responsabilidad: definir el contenedor principal de la página. En desktop organiza listado y mapa en dos columnas; en mobile apila mapa y panel de resultados.

Props:
* listPane: React.ReactNode
* mapPane: React.ReactNode
* mobileSheet: React.ReactNode
* layout: "mobile" | "desktop"

5. ResultsListPane

Responsabilidad: renderizar el bloque izquierdo de escritorio con el conteo de resultados, banner informativo y grilla de tarjetas.

Props:
* title: string
* totalCount: number
* banner: InfoBannerData
* results: SearchResultItem[]
* onToggleFavorite: (id: string) => void
* onSelectResult: (id: string) => void

6. ResultsMapPane

Responsabilidad: renderizar el mapa con marcadores de precio y controles de zoom. En desktop permanece visible; en mobile funciona como capa superior.

Props:
* center: MapViewport
* pins: MapPin[]
* selectedPinId?: string
* showZoomControls: boolean
* showExpandControl: boolean
* onSelectPin: (id: string) => void
* onZoomIn?: () => void
* onZoomOut?: () => void
* onExpand?: () => void

7. ResultsMobileSheet

Responsabilidad: panel inferior deslizable en mobile que muestra el banner, el carrusel/listado y el cambio entre mapa y lista.

Props:
* snap: "collapsed" | "half" | "expanded"
* dragHandleVisible: boolean
* banner: InfoBannerData
* results: SearchResultItem[]
* mapToggle: MapToggleAction
* onSnapChange?: (snap: string) => void

8. InfoBanner

Responsabilidad: comunicar mensajes de contexto como la inclusión de tarifas en el precio final.

Props:
* icon: string
* text: string
* tone?: "default" | "highlight"

9. ResultsGrid

Responsabilidad: distribuir resultados en desktop en una grilla de dos columnas y, en mobile, delegar a una lista/carrusel vertical de una sola tarjeta visible.

Props:
* items: SearchResultItem[]
* columns: 1 | 2
* gap: number
* selectedId?: string
* onSelect: (id: string) => void

10. SearchResultCard

Responsabilidad: presentar la información resumida de cada alojamiento con imagen principal, badges, favorito y precio.

Props:
* id: string
* title: string
* subtitle: string
* metaLine: string
* dateRangeLabel: string
* originalPrice?: PriceValue
* totalPrice: PriceValue
* installmentText?: string
* rating: number
* reviewCount: number
* imageUrls: string[]
* imageAlt: string
* badge?: ResultBadgeData
* isFavorite: boolean
* onToggleFavorite: (id: string) => void
* onOpen: (id: string) => void

11. ResultImageCarousel

Responsabilidad: mostrar la imagen principal del alojamiento con indicadores de paginación y controles opcionales.

Props:
* images: ResultImage[]
* activeIndex: number
* showDots: boolean
* onChange: (index: number) => void

12. ResultBadge

Responsabilidad: destacar atributos sociales o comerciales del alojamiento, como "Favorito entre huéspedes".

Props:
* label: string
* icon?: string
* tone?: "light" | "accent"

13. FavoriteButton

Responsabilidad: permitir marcar un alojamiento como favorito desde la tarjeta.

Props:
* active: boolean
* onClick: () => void
* ariaLabel: string

14. PriceRow

Responsabilidad: mostrar la relación entre precio original tachado, precio final destacado y texto complementario.

Props:
* originalPrice?: PriceValue
* finalPrice: PriceValue
* suffix: string
* installmentText?: string

15. MapPricePin

Responsabilidad: representar cada resultado sobre el mapa con una cápsula de precio.

Props:
* id: string
* label: string
* position: MapCoordinates
* active: boolean
* compact?: boolean
* onClick: (id: string) => void

16. MapLocationChip

Responsabilidad: marcar el punto geográfico actualmente enfocado con un chip de ubicación.

Props:
* label: string
* icon?: string
* position: MapCoordinates

17. MapControls

Responsabilidad: agrupar acciones del mapa como expandir, acercar y alejar.

Props:
* showExpand: boolean
* showZoom: boolean
* onExpand?: () => void
* onZoomIn?: () => void
* onZoomOut?: () => void

18. MapListToggleFab

Responsabilidad: botón flotante de mobile para cambiar entre vista de mapa y vista de lista.

Props:
* label: string
* icon: string
* activeView: "map" | "list"
* onToggle: () => void

19. BottomMobileNav

Responsabilidad: navegación inferior fija en mobile para explorar, favoritos e inicio de sesión.

Props:
* items: BottomNavItem[]
* activeId: string
* onChange: (itemId: string) => void

#### Tipos de datos sugeridos

* SearchState: { location: string; dateLabel: string; guestLabel: string }
* SearchResultItem: { id: string; title: string; subtitle: string; metaLine: string; dateRangeLabel: string; rating: number; reviewCount: number; imageUrls: string[]; badge?: ResultBadgeData; isFavorite: boolean; totalPrice: PriceValue; originalPrice?: PriceValue; installmentText?: string; pinLabel: string }
* ResultBadgeData: { label: string; icon?: string; tone?: "light" | "accent" }
* ResultImage: { url: string; alt: string }
* PriceValue: { amount: number; currencySymbol: string; formatted: string }
* InfoBannerData: { icon: string; text: string; tone?: "default" | "highlight" }
* FilterAction: { id: string; icon: string; label: string; onClick: () => void }
* MapPin: { id: string; label: string; coordinates: MapCoordinates; linkedResultId?: string; isSelected?: boolean }
* MapCoordinates: { lat: number; lng: number }
* MapViewport: { center: MapCoordinates; zoom: number }
* MapToggleAction: { label: string; icon: string; activeView: "map" | "list" }

#### Relación de layout en la página

##### Desktop (aprox. 1280px)

1. SearchResultsPage
2. SearchResultsHeader en la parte superior con marca, resumen de búsqueda centrado, filtros y acciones globales.
3. ResultsShell debajo del header ocupando casi todo el viewport.
4. ResultsShell divide el contenido en dos columnas:
	 * ResultsListPane a la izquierda, con ancho aproximado de 45% a 50%.
	 * ResultsMapPane a la derecha, con ancho aproximado de 50% a 55%.
5. ResultsListPane contiene en este orden:
	 * título o contador de resultados
	 * InfoBanner
	 * ResultsGrid en dos columnas
6. Cada SearchResultCard contiene:
	 * ResultImageCarousel en la parte superior
	 * ResultBadge y FavoriteButton superpuestos sobre la imagen
	 * bloque de texto con título, subtítulo, metadata y rating
	 * PriceRow al pie
7. ResultsMapPane contiene:
	 * mapa base ocupando toda la columna
	 * InfoBanner superpuesto cerca del borde superior
	 * múltiples MapPricePin distribuidos sobre el mapa
	 * MapLocationChip para la zona activa
	 * MapControls en la esquina superior derecha
8. BottomMobileNav no se renderiza en desktop.

##### Mobile (aprox. 375px)

1. SearchResultsPage
2. SearchResultsHeader fija arriba con botón de volver, SearchSummaryBar y acción de filtros.
3. ResultsShell apila el contenido:
	 * ResultsMapPane visible al fondo o en la mitad superior.
	 * ResultsMobileSheet superpuesta desde el borde inferior con esquinas redondeadas superiores.
4. ResultsMobileSheet contiene en este orden:
	 * handle visual de arrastre
	 * InfoBanner
	 * una sola SearchResultCard visible por vez o una lista vertical compacta
	 * MapListToggleFab anclado cerca del borde inferior del sheet
5. BottomMobileNav queda fija al borde inferior de la pantalla y convive visualmente con el sheet.
6. Cuando el sheet se colapsa, el mapa gana protagonismo; cuando se expande, la tarjeta domina la pantalla.

#### Jerarquía de composición

SearchResultsPage
* SearchResultsHeader
	 * SearchSummaryBar
* ResultsShell
	 * ResultsListPane (desktop)
	 	 * InfoBanner
	 	 * ResultsGrid
	 	 	 * SearchResultCard (n veces)
	 	 	 	 * ResultImageCarousel
	 	 	 	 * ResultBadge
	 	 	 	 * FavoriteButton
	 	 	 	 * PriceRow
	 * ResultsMapPane
	 	 * InfoBanner
	 	 * MapPricePin (n veces)
	 	 * MapLocationChip
	 	 * MapControls
	 * ResultsMobileSheet (mobile)
	 	 * InfoBanner
	 	 * SearchResultCard
	 	 * MapListToggleFab
* BottomMobileNav (solo mobile)

La intención de esta vista es permitir que el usuario compare opciones antes de elegir una.

### Detalle de habitación

La página de detalle muestra información completa de un alojamiento seleccionado.

Componentes principales:

#### Especificación de componentes (basada en capturas desktop y mobile)

1. RoomDetailPage

Responsabilidad: componer toda la vista de detalle, resolver la variante responsive y coordinar la información principal del alojamiento, galería y reserva.

Props:
* room: RoomDetailData
* gallery: GalleryImage[]
* booking: BookingPanelData
* stats: RoomStatItem[]
* headerSearch: DetailSearchSummary
* actions: DetailAction[]
* mobileOverlayActions: OverlayAction[]
* isFavorite: boolean
* onBack?: () => void
* onShare: () => void
* onToggleFavorite: () => void
* onReserve: () => void
* onOpenGallery?: () => void

2. DetailTopNav

Responsabilidad: cabecera superior. En desktop incluye branding, buscador resumido y acciones globales; en mobile se reemplaza por controles flotantes sobre la imagen.

Props:
* variant: "desktop" | "mobile-overlay"
* search: DetailSearchSummary
* overlayActions?: OverlayAction[]
* showBrand?: boolean
* onBack?: () => void

3. DetailSearchPill

Responsabilidad: mostrar el resumen compacto de búsqueda en la cabecera desktop.

Props:
* locationLabel: string
* dateLabel: string
* guestLabel: string
* leadingIcon?: string
* onClick?: () => void

4. DetailTitleBar

Responsabilidad: presentar el título del alojamiento y las acciones secundarias de compartir y guardar en desktop.

Props:
* title: string
* actions: DetailAction[]

5. DetailActionGroup

Responsabilidad: agrupar acciones de bajo nivel como compartir y guardar con icono y texto.

Props:
* items: DetailAction[]
* align: "start" | "end"

6. DetailGallery

Responsabilidad: renderizar la galería principal. En desktop usa mosaico de cinco imágenes; en mobile muestra una sola imagen hero con contador.

Props:
* images: GalleryImage[]
* variant: "desktop-grid" | "mobile-hero"
* totalCount: number
* currentIndex?: number
* onOpenGallery?: () => void
* onChangeImage?: (index: number) => void

7. GalleryGrid

Responsabilidad: distribuir las imágenes en desktop con una imagen principal grande a la izquierda y una grilla de cuatro miniaturas a la derecha.

Props:
* primaryImage: GalleryImage
* secondaryImages: GalleryImage[]
* showAllPhotosLabel: string
* onShowAllPhotos: () => void

8. MobileHeroGallery

Responsabilidad: mostrar la imagen principal en mobile con controles flotantes y contador de fotos.

Props:
* image: GalleryImage
* totalCount: number
* currentIndex: number
* overlayActions: OverlayAction[]
* onBack?: () => void
* onOpenGallery?: () => void

9. ImageCounterBadge

Responsabilidad: mostrar el índice actual de la galería sobre la imagen en mobile.

Props:
* current: number
* total: number

10. DetailContentShell

Responsabilidad: organizar el contenido principal. En desktop divide información y reserva en dos columnas; en mobile colapsa la información dentro de una tarjeta inferior.

Props:
* mainContent: React.ReactNode
* asideContent?: React.ReactNode
* mobileBottomCard?: React.ReactNode
* layout: "desktop" | "mobile"

11. StaySummaryBlock

Responsabilidad: mostrar la información esencial del alojamiento debajo de la galería o dentro de la tarjeta mobile.

Props:
* title: string
* subtitle: string
* metaLine: string

12. SocialProofStrip

Responsabilidad: resumir señales de confianza y popularidad, como favorito entre huéspedes, rating y cantidad de reseñas.

Props:
* items: SocialProofItem[]
* layout: "desktop-card" | "mobile-inline"

13. SocialProofBadge

Responsabilidad: destacar una mención editorial o social, por ejemplo "Favorito entre huéspedes".

Props:
* label: string
* icon?: string
* tone?: "light" | "accent"

14. RatingSummary

Responsabilidad: mostrar rating promedio, estrellas visuales y total de reseñas.

Props:
* rating: number
* reviewCount: number
* starCountVisible?: number

15. PriceInsightBanner

Responsabilidad: comunicar una ventaja comercial contextual, como que el precio está por debajo del promedio reciente.

Props:
* icon: string
* text: string
* tone?: "success" | "default"

16. BookingSidebarCard

Responsabilidad: bloque de reserva en desktop con precio, fechas, CTA principal y resumen financiero.

Props:
* booking: BookingPanelData
* onReserve: () => void
* sticky?: boolean

17. BookingPriceRow

Responsabilidad: mostrar el precio anterior tachado, el precio actual destacado y el contexto de la estancia.

Props:
* originalPrice?: PriceValue
* currentPrice: PriceValue
* stayLabel: string

18. ReserveButton

Responsabilidad: CTA primaria para iniciar la reserva.

Props:
* label: string
* onClick: () => void
* fullWidth?: boolean
* size?: "md" | "lg"

19. InstallmentBadge

Responsabilidad: mostrar financiación o cuotas debajo del resumen de precio.

Props:
* label: string
* tone?: "muted" | "highlight"

20. MobileBookingBar

Responsabilidad: barra fija inferior en mobile con resumen de precio y CTA de reserva.

Props:
* price: PriceValue
* originalPrice?: PriceValue
* stayLabel: string
* installmentLabel?: string
* ctaLabel: string
* onReserve: () => void

#### Tipos de datos sugeridos

* RoomDetailData: { id: string; title: string; subtitle: string; locationLabel: string; metaLine: string; isFavorite: boolean }
* GalleryImage: { id: string; url: string; alt: string; emphasis?: "primary" | "secondary" }
* BookingPanelData: { originalPrice?: PriceValue; currentPrice: PriceValue; stayLabel: string; installmentLabel?: string; ctaLabel: string; priceInsight?: InsightMessage }
* PriceValue: { amount: number; currencySymbol: string; formatted: string }
* InsightMessage: { icon: string; text: string; tone?: "success" | "default" }
* RoomStatItem: { id: string; label: string; value?: string; icon?: string }
* SocialProofItem: { id: string; type: "badge" | "rating" | "reviews" | "editorial"; label?: string; value?: string | number; icon?: string }
* DetailSearchSummary: { locationLabel: string; dateLabel: string; guestLabel: string }
* DetailAction: { id: string; label: string; icon: string; onClick: () => void }
* OverlayAction: { id: string; icon: string; ariaLabel: string; onClick: () => void }

#### Relación de layout en la página

##### Desktop (aprox. 1280px)

1. RoomDetailPage
2. DetailTopNav en la parte superior con logo a la izquierda, DetailSearchPill centrado y acciones globales a la derecha.
3. DetailTitleBar debajo del header, alineado al mismo ancho del contenido principal.
4. DetailGallery inmediatamente debajo del título usando la variante desktop-grid.
5. DetailContentShell organiza el contenido en dos columnas:
	 * columna principal izquierda, más ancha, para StaySummaryBlock y SocialProofStrip.
	 * columna lateral derecha para PriceInsightBanner y BookingSidebarCard.
6. StaySummaryBlock aparece primero en la columna izquierda y resume tipo de alojamiento, ubicación y capacidad.
7. SocialProofStrip se renderiza debajo del resumen como una tarjeta horizontal con divisores internos.
8. PriceInsightBanner aparece encima del bloque de reserva como mensaje contextual.
9. BookingSidebarCard se mantiene visualmente separado del contenido principal y actúa como módulo sticky.

##### Mobile (aprox. 375px)

1. RoomDetailPage
2. MobileHeroGallery ocupa el primer pliegue con la imagen principal a pantalla casi completa.
3. Los controles de navegación y acciones se superponen sobre la imagen:
	 * botón de volver a la izquierda.
	 * compartir y favorito a la derecha.
	 * ImageCounterBadge en la esquina inferior derecha.
4. DetailContentShell usa la variante mobile y renderiza una tarjeta inferior superpuesta con bordes redondeados superiores.
5. Dentro de esa tarjeta se apilan en este orden:
	 * StaySummaryBlock
	 * SocialProofStrip en variante mobile-inline
6. MobileBookingBar queda fija al borde inferior de la pantalla, separada visualmente de la tarjeta de contenido.
7. En mobile no se muestra la cabecera global desktop ni la galería mosaico.

#### Jerarquía de composición

RoomDetailPage
* DetailTopNav (desktop)
	 * DetailSearchPill
* DetailGallery
	 * GalleryGrid (desktop)
	 * MobileHeroGallery (mobile)
	 	 * ImageCounterBadge
* DetailTitleBar (desktop)
	 * DetailActionGroup
* DetailContentShell
	 * MainContent
	 	 * StaySummaryBlock
	 	 * SocialProofStrip
	 	 	 * SocialProofBadge
	 	 	 * RatingSummary
	 * AsideContent (desktop)
	 	 * PriceInsightBanner
	 	 * BookingSidebarCard
	 	 	 * BookingPriceRow
	 	 	 * ReserveButton
	 	 	 * InstallmentBadge
	 * MobileBottomCard (mobile)
	 	 * StaySummaryBlock
	 	 * SocialProofStrip
* MobileBookingBar (solo mobile)

#### Alcance observado en las capturas

Esta especificación cubre exclusivamente la parte visible en las capturas: cabecera, galería, resumen superior, bloque de prueba social y módulo de precio/reserva. No incluye secciones no visibles más abajo, como amenities, descripción larga, mapa interno o información del anfitrión.

La intención de esta vista es que el usuario evalúe si ese alojamiento es adecuado para su viaje.

## Componentes reutilizables

La aplicación debe estar organizada con componentes pequeños y enfocados. 

Cada componente debe tener una responsabilidad clara y recibir datos por props cuando sea necesario.

## Datos necesarios

Cada alojamiento puede necesitar datos como:

* id
* título
* ubicación
* descripción breve
* descripción completa
* imágenes
* precio por noche
* rating
* cantidad de reseñas
* anfitrión
* servicios
* categoría
* cantidad de huéspedes
* habitaciones
* camas
* baños

Durante esta etapa se pueden usar datos mockeados en archivos locales.

## Navegación

La navegación debe permitir moverse entre:

* `/`
* `/search`
* `/rooms/[id]`

La navegación debe funcionar sin recargar el navegador, usando `Link` de Next.js.


## Resultado esperado

El resultado final será un prototipo navegable de tres vistas inspirado en Airbnb, construido con componentes reutilizables de React y una estructura clara de Next.js. El proyecto debe demostrar comprensión de diseño responsive, composición de componentes y navegación entre páginas.
