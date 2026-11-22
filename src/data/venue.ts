/**
 * Venue + map. Coordinates are the GUC main campus in New Cairo; the map
 * embed is OpenStreetMap so the page needs no API key and sets no
 * third-party ad cookies on visitors.
 */
export const venue = {
  name: "German University in Cairo",

  /**
   * Path to the official GUC logo, once you have it.
   *
   * Drop the file in `public/` (e.g. `public/guc-logo.svg`) and set this to
   * "/guc-logo.svg". While it is null the site renders a typographic GUC
   * lockup instead — deliberately, so the page never ships a broken image
   * or a guessed-at approximation of the university's real mark.
   */
  logoSrc: null as string | null,

  short: "GUC",
  building: "TBA — building and hall confirmed closer to the event",
  street: "El-Tagamoa El-Khames — Gate 1 entrance",
  city: "New Cairo, Cairo Governorate",
  country: "Egypt",

  lat: 29.98758,
  lon: 31.44182,

  /** Every attendee, GUC or external, enters here. */
  gate: "Gate 1",

  /**
   * Mwasalat Misr (public bus) details, as supplied by the committee. The
   * station and both lines are stated by the organisers and have not been
   * checked against Mwasalat Misr's own route data.
   */
  mowasalat: {
    station: "The Mwasalat Misr bus station is right in front of the university gates.",
    stationAr: "محطة الأتوبيس قدّام باب الجامعة مباشرة، في التجمع الثالث.",
    lines: [
      {
        code: "NC10",
        route: "Ramsis / Qatamya to the 3rd Settlement",
        routeAr: "من رمسيس / القطامية إلى التجمع الثالث",
      },
      {
        code: "NC1",
        route: "Qatamya / 1st Settlement",
        routeAr: "من القطامية / التجمع الأول",
      },
    ],
    note: "Both lines have an official, direct stop exactly at the GUC.",
  },
} as const;

/**
 * Google Maps embed.
 *
 * Defaults to the keyless `output=embed` form, which needs no setup and no
 * billing account. Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to switch to the
 * official Maps Embed API instead — that is the supported, documented
 * endpoint, and worth doing before the site goes public.
 */
const GOOGLE_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

/** Pin at the exact campus coordinates, labelled with the venue name. */
const pin = `${venue.lat},${venue.lon}`;

export const mapEmbedSrc = GOOGLE_KEY
  ? `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_KEY}&q=${encodeURIComponent(
      pin
    )}&zoom=16&maptype=roadmap`
  : `https://maps.google.com/maps?q=${encodeURIComponent(
      `${pin} (${venue.name})`
    )}&z=16&hl=en&output=embed`;

/**
 * The shared Google Maps pin for Gate 1, where every attendee enters. Both
 * buttons open it directly so people navigate to the gate, not the campus
 * centre the embed above is framed on.
 */
export const gateMapUrl = "https://maps.app.goo.gl/a6CCvqLiAaHfDezh8";
export const directionsUrl = gateMapUrl;
export const largerMapUrl = gateMapUrl;
