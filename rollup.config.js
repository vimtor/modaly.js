import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import cssnano from 'cssnano';

export default {
    input: 'src/index.js',
    output: [
        {
            name: 'Modaly',
            file: 'dist/modaly.min.js',
            format: 'umd',
        },
        {
            file: 'dist/modaly.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        postcss({
            plugins: [cssnano()],
            extensions: ['.css'],
        }),
        babel({
            exclude: ['node_modules/**', 'tests/**'],
        }),
        terser(),
        bundleSize(),
    ],
};
