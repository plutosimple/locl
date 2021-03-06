import '@angular/localize/init';
import { ɵɵi18nPostprocess } from '@angular/core';
import { loadTranslations as loadTranslations$1 } from '@angular/localize';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/global.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// **********************************************************************************************
// This code to access the global object is mostly copied from `packages/core/src/util/global.ts`
const __globalThis = typeof globalThis !== 'undefined' && globalThis;
/** @type {?} */
const __window = typeof window !== 'undefined' && window;
/** @type {?} */
const __self = typeof self !== 'undefined' &&
    typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope &&
    self;
// Always use __globalThis if available; this is the spec-defined global variable across all
// environments.
// Then fallback to __global first; in Node tests both __global and __window may be defined.
/** @type {?} */
const _global = __globalThis || __window || __self;

/**
 * @fileoverview added by tsickle
 * Generated from: lib/init.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The $locl function is an emulation of $localize but it returns a `LoclString`
 * instead of a real string. A `LoclString` is only evaluated when the template
 * is created, not just when the file containing that template is loaded by the
 * browser (at bootstrap). This means that we can delay initialization of the
 * string values and wait for the translations to be loaded.
 *
 * \@param messageParts
 * \@param expressions
 * @type {?}
 */
const $locl = (/**
 * @param {?} messageParts
 * @param {...?} expressions
 * @return {?}
 */
function (messageParts, ...expressions) {
    return new LoclString(messageParts, ...expressions);
});
// keep a local backup the of the real $localize
/** @type {?} */
const backUpLocalize = _global.$localize;
// override $localize until everything is loaded
_global.$localize = $locl;
/** @type {?} */
let isLoaded = false;
class LoclString extends String {
    /**
     * @param {?} messageParts
     * @param {...?} expressions
     */
    constructor(messageParts, ...expressions) {
        super();
        this.value = null;
        this.postProcess = false;
        this.initParams = [messageParts, ...expressions];
    }
    /**
     * @return {?}
     */
    toString() {
        if (this.value) {
            return this.value;
        }
        if (!isLoaded) {
            return backUpLocalize(...this.initParams);
        }
        this.value = _global.$localize(...this.initParams);
        if (this.postProcess) {
            this.value = ɵɵi18nPostprocess(this.value);
            this.postProcess = false;
        }
        return this.value;
    }
    /**
     * @param {?} search
     * @param {?} replaceValue
     * @return {?}
     */
    replace(search, replaceValue) {
        this.postProcess = true;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    valueOf() {
        return this.toString();
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoclString.prototype.initParams;
    /**
     * @type {?}
     * @private
     */
    LoclString.prototype.value;
    /**
     * @type {?}
     * @private
     */
    LoclString.prototype.postProcess;
}
/**
 * Finishes initialization of $localize, loads translations in memory and sets
 * the `LOCALE_ID` value.
 * Use this **only** if you're not using any of the two functions
 * `getTranslations` or `fetchTranslations`.
 * @param {?=} parsedTranslationBundle
 * @return {?}
 */
function loadTranslations(parsedTranslationBundle) {
    // Restore $localize
    _global.$localize = backUpLocalize;
    if ((parsedTranslationBundle === null || parsedTranslationBundle === void 0 ? void 0 : parsedTranslationBundle.translations) &&
        Object.keys(parsedTranslationBundle.translations).length) {
        loadTranslations$1(parsedTranslationBundle.translations);
    }
    if (parsedTranslationBundle === null || parsedTranslationBundle === void 0 ? void 0 : parsedTranslationBundle.locale) {
        _global.$localize.locale = parsedTranslationBundle.locale;
    }
    isLoaded = true;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} fileContent
 * @return {?}
 */
function parseTranslations(fileContent) {
    /** @type {?} */
    let data;
    // Test if the content is json
    if (/^[\],:{}\s]*$/.test(fileContent
        .replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        data = JSON.parse(fileContent);
    }
    else {
        throw new Error('Only JSON translation files are supported at the moment');
    }
    return data;
}
/**
 * Gets a translation file from a server using an XHR HTTP request
 * @param {?} url
 * @param {?=} method the method used to get the translations, either `GET` or `POST`
 * @param {?=} headers an object containing a list of header/value to set for the XHR request
 * @param {?=} async defines if the XHR request should be async (default) or not
 * @return {?}
 */
function getTranslations(url, method = 'GET', headers = {}, async = true) {
    return new Promise((/**
     * @param {?} resolve
     * @param {?} reject
     * @return {?}
     */
    (resolve, reject) => {
        /** @type {?} */
        const xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            try {
                /** @type {?} */
                const res = parseTranslations(xhr.responseText);
                loadTranslations(res);
                resolve(res);
            }
            catch (e) {
                reject(e);
            }
        });
        xhr.onerror = (/**
         * @return {?}
         */
        function () {
            reject(new Error('Network request failed'));
        });
        xhr.ontimeout = (/**
         * @return {?}
         */
        function () {
            reject(new Error('Network request timeout'));
        });
        xhr.onabort = (/**
         * @return {?}
         */
        function () {
            reject(new Error('Network request aborted'));
        });
        Object.keys(headers).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => xhr.setRequestHeader(key, headers[key])));
        xhr.open(method, url, async);
        xhr.send();
    }));
}
/**
 * @record
 */
function ParsedTranslationBundle() { }
if (false) {
    /** @type {?} */
    ParsedTranslationBundle.prototype.locale;
    /** @type {?} */
    ParsedTranslationBundle.prototype.translations;
}
/**
 * Gets a translation file from a server using the fetch API
 * @param {?} url
 * @param {?=} method the method used to get the translations, either `GET` or `POST`
 * @param {?=} headers an object containing a list of header/value to set for the XHR request
 * @return {?}
 */
function fetchTranslations(url, method = 'GET', headers = {}) {
    return fetch(url, { method, headers })
        .then((/**
     * @param {?} response
     * @return {?}
     */
    response => response.text()))
        .then((/**
     * @param {?} response
     * @return {?}
     */
    (response) => {
        /** @type {?} */
        const res = parseTranslations(response);
        loadTranslations(res);
        return res;
    }));
}
/**
 * Returns the language code name from the browser, e.g. "fr"
 * @return {?}
 */
function getBrowserLang() {
    if (typeof window === 'undefined' ||
        typeof window.navigator === 'undefined') {
        return '';
    }
    return getBrowserCultureLang().split('-')[0];
}
/**
 * Returns the culture language code name from the browser, e.g. "fr-FR"
 * @return {?}
 */
function getBrowserCultureLang() {
    if (typeof window === 'undefined' ||
        typeof window.navigator === 'undefined') {
        return '';
    }
    /** @type {?} */
    let browserCultureLang = window.navigator.languages
        ? window.navigator.languages[0]
        : null;
    browserCultureLang =
        browserCultureLang ||
            window.navigator.language ||
            ((/** @type {?} */ (window.navigator))).browserLanguage ||
            ((/** @type {?} */ (window.navigator))).userLanguage;
    return browserCultureLang.replace(/_/g, '-');
}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: locl-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { $locl, fetchTranslations, getBrowserCultureLang, getBrowserLang, getTranslations, loadTranslations, parseTranslations };
//# sourceMappingURL=locl-core.js.map
