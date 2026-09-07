export const siteConfig = {
  name: "Ashirvada Kalyana Mantapa",
  shortName: "Ashirvada",
  phoneDisplay: "+91-XXXXXXXXXX",
  phoneHref: "tel:+91XXXXXXXXXX",
  whatsappHref: "https://wa.me/91XXXXXXXXXX",
  email: "contact@ashirvada.example.com",
  address: "Sindagi, Karnataka, India",
  mapsQuery: "16.9196207,76.2185894",
} as const;

// Prefix for assets when the site is served from a subpath
// (e.g. GitHub Pages project sites). Mirrors NEXT_BASE_PATH.
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${publicBasePath}${path}`;
}
