/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.jhoniipia.com'
            },
            {
                protocol:'https',
                hostname:'tailus.io'
            },
        ]
    }
};

export default nextConfig;
