import postcss from 'rollup-plugin-postcss';
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
        postcss({
            extensions: ['.css'],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        process.env.NODE_ENV === 'production' && uglify(),
        bundleSize(),
    ],
};
