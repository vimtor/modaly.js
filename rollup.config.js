import babel from 'rollup-plugin-babel';

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
    ],
};
