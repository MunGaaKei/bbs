import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const dir = (p) => path.resolve(__dirname, p);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": dir("src"),
			"@c": dir("src/components"),
			"@p": dir("src/pages"),
			"@u": dir("src/utils"),
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://localhost:8001/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
			"/public": {
				target: "http://localhost:8001/public/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/public/, ""),
			},
		},
	},
});
