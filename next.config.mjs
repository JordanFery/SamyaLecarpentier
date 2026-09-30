/**
 * French URLs are localised (/fr/projets, /fr/a-propos) while the file-system
 * routes keep one neutral name (work, about). Rewrites map the public URL to the
 * route; redirects keep a single canonical URL per page.
 */
const localisedSegments = [
  { fr: "projets", route: "work" },
  { fr: "a-propos", route: "about" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return {
      beforeFiles: localisedSegments.map(({ fr, route }) => ({
        source: `/fr/${fr}/:path*`,
        destination: `/fr/${route}/:path*`,
      })),
    };
  },
  async redirects() {
    return [
      ...localisedSegments.map(({ fr, route }) => ({
        source: `/fr/${route}/:path*`,
        destination: `/fr/${fr}/:path*`,
        permanent: true,
      })),
      { source: "/en/projects/:path*", destination: "/en/work/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
