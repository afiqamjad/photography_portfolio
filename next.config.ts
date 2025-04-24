import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      unoptimized: true,
      domains: ['res.cloudinary.com',
        'img.icons8.com', 
      ],
    },
};

export default nextConfig;
