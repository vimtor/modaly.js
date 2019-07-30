import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';
import license from 'rollup-plugin-license';
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
        license({
            banner: `modaly.js v<%= pkg.version %>
            (c) 2019 <%= pkg.author %>
            Released under the MIT License.`,
        }),
        bundleSize(),
    ],
};
