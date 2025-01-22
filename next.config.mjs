/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // untuk membuka akses menggunakan gambar dari source online
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
