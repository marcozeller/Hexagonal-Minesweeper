import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';


/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
        }),
        paths: {
            // change below to your repo name
            base: process.argv.includes('dev') ? '' : '/Hexagonal-Minesweeper',
        },
    }
};

export default config;