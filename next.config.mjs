/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/AlanU21.github.io/' : './',
    trailingSlash: true,
};

export default nextConfig;