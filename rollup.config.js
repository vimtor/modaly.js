import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: {
        name: 'modaly',
        file: 'dist/modaly.min.js',
        format: 'umd',
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
        process.env.NODE_ENV === 'production' && uglify(),
    ],
};
