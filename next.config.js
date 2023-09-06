/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JWT_SECRET_KEY: "123-xyz",
    JWT_EXPIRATION: "2h",
    JWT_ISSUER: "example123.com",
  },
};

module.exports = nextConfig;
