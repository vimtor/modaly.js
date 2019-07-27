import css from 'rollup-plugin-css-only';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import bundleSize from 'rollup-plugin-bundle-size';

export default {
    input: 'src/index.js',
    output: {
        name: 'Modaly',
        file: 'dist/modaly.min.js',
        format: 'umd',
    },
    plugins: [
        css({ output: 'dist/style.css' }),
        babel({
            exclude: 'node_modules/**',
        }),
        process.env.NODE_ENV === 'production' && uglify(),
        bundleSize(),
    ],
};
