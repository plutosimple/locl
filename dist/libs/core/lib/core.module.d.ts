import { ɵMessageId, ɵTargetMessage } from '@angular/localize';
export declare function parseTranslations(fileContent: string): ParsedTranslationBundle;
/**
 * Gets a translation file from a server using an XHR HTTP request
 * @param url
 * @param method the method used to get the translations, either `GET` or `POST`
 * @param headers an object containing a list of header/value to set for the XHR request
 * @param async defines if the XHR request should be async (default) or not
 */
export declare function getTranslations(url: any, method?: 'GET' | 'POST', headers?: {
    [key: string]: string;
}, async?: boolean): Promise<ParsedTranslationBundle>;
export interface ParsedTranslationBundle {
    locale: string;
    translations: Record<ɵMessageId, ɵTargetMessage>;
}
/**
 * Gets a translation file from a server using the fetch API
 * @param url
 * @param method the method used to get the translations, either `GET` or `POST`
 * @param headers an object containing a list of header/value to set for the XHR request
 */
export declare function fetchTranslations(url: string, method?: 'GET' | 'POST', headers?: {
    [key: string]: string;
}): Promise<ParsedTranslationBundle>;
/**
 * Returns the language code name from the browser, e.g. "fr"
 */
export declare function getBrowserLang(): string;
/**
 * Returns the culture language code name from the browser, e.g. "fr-FR"
 */
export declare function getBrowserCultureLang(): string;
