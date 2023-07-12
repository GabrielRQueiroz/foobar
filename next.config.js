/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
   },
	env: {
		NEXT_PUBLIC_API_URL: process.env.API_URL,
	},
}

module.exports = nextConfig
