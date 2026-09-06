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
  street: "Main Entrance, El-Tagamoa El-Khames",
  city: "New Cairo, Cairo Governorate",
  country: "Egypt",

  lat: 29.98758,
  lon: 31.44182,

  gettingHere: [
    {
      t: "By car",
      d: "Enter via the main entrance on El-Tagamoa El-Khames. Visitor parking is on campus — bring your student ID or your registration confirmation for the gate.",
    },
    {
      t: "By GUC bus",
      d: "All regular GUC bus lines run to campus on event days. Check the university bus schedule for your line.",
    },
    {
      t: "On the day",
      d: "Check-in is at the venue entrance from 09:00. Look for the Qiskit Fall Fest signage and the Qubit team.",
    },
  ],
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

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${pin}`;
export const largerMapUrl = `https://www.google.com/maps/search/?api=1&query=${pin}`;
