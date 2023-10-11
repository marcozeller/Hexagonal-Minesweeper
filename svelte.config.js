import adapter from '@sveltejs/adapter-static'; 


/** @type {import('@sveltejs/kit').Config} */
const config = {
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