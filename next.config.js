/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // External dependencies fix for specific modules
    config.externals.push("pino-pretty", "lokijs", "encoding"); // https://github.com/WalletConnect/walletconnect-monorepo/issues/1908

    // Handling SVG files with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.minato-yellowflash.com",  // Use your secure API domain
        port: "",                                // No need to specify port for HTTPS (443 by default)
        pathname: "/**",                         // Match all paths for the API
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,  // Temporarily ignoring ESLint issues during builds
  },
  typescript: {
    ignoreBuildErrors: true,   // Temporarily ignoring TypeScript errors during builds
  },
  reactStrictMode: false,      // Disabling React strict mode for now
};

module.exports = nextConfig;
