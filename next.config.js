const nextConfig = {
  images: {
    unoptimized: true, // Required for image compatibility with next export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'siddesh-bagare-portfolio.s3.ap-south-1.amazonaws.com',
        pathname: '/**'
      }
    ]
  },
  trailingSlash: true, // Optional: useful for S3-style URLs
  output: 'export' // Required for next export
}

module.exports = nextConfig
