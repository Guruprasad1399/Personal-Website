/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pdfkit"],
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
