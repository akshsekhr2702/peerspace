/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images:{
        remotePatterns:[
            {
                hostname :"images.unsplash.com",
                protocol: 'http'
            },
        ],
        unoptimized: true
    }
    
};

export default nextConfig;
