/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/timeline",
        destination: "/#journey",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
