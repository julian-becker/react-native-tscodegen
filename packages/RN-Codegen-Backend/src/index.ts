// tslint:disable:no-unsafe-any
// tslint:disable:no-require-imports

import { SchemaType } from '../../RN-TSCodegen/src/CodegenSchema';

// Manually strong-typed from \react-native\packages\react-native-codegen\src\generators\RNCodegen.js

export type Options = Readonly<{
    libraryName: string;
    schema: SchemaType;
    outputDirectory: string;
    moduleSpecName: string;
}>;

export type Generators =
    | 'descriptors'
    | 'events'
    | 'props'
    | 'tests'
    | 'shadow-nodes'
    | 'modules'
    ;

export type Config = Readonly<{
    generators: Generators[];
    test?: boolean;
}>;

type GeneratePrototype = (options: Options, config: Config) => boolean;

export const generate = <GeneratePrototype>(require('./lib/rncodegen/src/generators/RNCodegen.js').generate);