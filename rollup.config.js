import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import del from 'del';

function folderDelete(folders) {
    return {
        name: 'folder-delete',
        buildEnd() {
            del.sync(folders, {});
        },
    };
}

const tsconfigBuild = {
    compilerOptions: {
        module: 'esnext',
        target: 'esnext',
        rootDir: './src',
        declaration: true,
        declarationDir: './lib/types',
        esModuleInterop: true,
        strict: true,
        skipLibCheck: true,
        noUnusedLocals: true,
    },
    include: ['./src'],
};

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'lib/esm/index.js',
                name: 'Parser',
                format: 'es',
            },
            {
                file: 'lib/index.js',
                name: 'Parser',
                format: 'cjs',
            },
        ],
        plugins: [
            typescript({
                tsconfigDefaults: tsconfigBuild,
                useTsconfigDeclarationDir: true,
            }),
        ],
    },
    {
        input: './lib/types/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: 'es' }],
        plugins: [folderDelete(['./lib/types']), dts()],
    },
];
