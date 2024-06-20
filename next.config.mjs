/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'us-east-1-shared-usea1-02.graphassets.com'
        ]
    },
    env: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    }
};

export default nextConfig;
