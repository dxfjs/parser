/**
 * A dxf tag type represetation
 */
export type token_t = {
    code: number;
    value: string;
    line: number;
};

export type tokens_t = token_t[];

export type matcher_t = (token: token_t) => boolean;

export type spec_t = {
    name: string;
    code: number;
    mandatory?: boolean;
};

export type specs_t = spec_t[];

export type SpecificationMap = Map<number, string>;

export type DxfObj = {
    [key: string]: any;
    unknowns?: tokens_t;
};
