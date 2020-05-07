import '@angular/localize/init';
import { ParsedTranslationBundle } from './interfaces';
/**
 * The $locl function is an emulation of $localize but it returns a `LoclString`
 * instead of a real string. A `LoclString` is only evaluated when the template
 * is created, not just when the file containing that template is loaded by the
 * browser (at bootstrap). This means that we can delay initialization of the
 * string values and wait for the translations to be loaded.
 *
 * @param messageParts
 * @param expressions
 */
export declare const $locl: (messageParts: TemplateStringsArray, ...expressions: readonly any[]) => LoclString;
declare class LoclString extends String {
    private readonly initParams;
    private value;
    private postProcess;
    constructor(messageParts: TemplateStringsArray, ...expressions: readonly any[]);
    toString(): string;
    replace(search: any, replaceValue: any): string;
    valueOf(): string;
}
/**
 * Finishes initialization of $localize, loads translations in memory and sets
 * the `LOCALE_ID` value.
 * Use this **only** if you're not using any of the two functions
 * `getTranslations` or `fetchTranslations`.
 */
export declare function loadTranslations(parsedTranslationBundle?: ParsedTranslationBundle): void;
export {};
