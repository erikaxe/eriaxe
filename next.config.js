const nextConfig = {
    // If route is not found, redirect to home page
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "/",
            },
        ];
    },
};

module.exports = nextConfig;
