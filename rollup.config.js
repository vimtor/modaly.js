import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import bundleSize from 'rollup-plugin-bundle-size';
import cssnano from 'cssnano';

const production = process.env.NODE_ENV === 'production';

export default {
    input: 'src/index.js',
    output: [
        {
            name: 'Modaly',
            file: 'dist/modaly.min.js',
            format: 'umd',
        },
        {
            name: 'Modaly',
            file: 'tests/example/modaly.min.js',
            format: 'umd',
        },
    ],
    plugins: [
        postcss({
            plugins: [production && cssnano()],
            extensions: ['.css'],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        production && uglify(),
        bundleSize(),
    ],
};
