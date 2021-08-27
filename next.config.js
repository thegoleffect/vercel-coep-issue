module.exports = {
	target: "experimental-serverless-trace",
	distDir: "dist",
	webpack5: true,
	experimental: {
		reactRoot: "concurrent",
	},
	reactStrictMode: true,
	headers: () => {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{
						key: "Access-Control-Allow-Origin",
						value: process.env.APP_HOST || "*",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value:
							"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
					},
					{ key: "Cross-Origin-Resource-Policy", value: "cross-origin" },
					{ key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
					{ key: "Cross-Origin-Opener-Policy", value: "same-origin" },
				],
			},
		];
	},
};