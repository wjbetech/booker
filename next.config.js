/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
			},
			{
				protocol: "https",
				hostname: "images.gr-assets.com",
			},
		],
	},
};
