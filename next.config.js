/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fastly.picsum.photos", "i.pravatar.cc"],
    loader: "custom",
  },
};

module.exports = nextConfig;
