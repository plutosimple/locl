(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/localize/init'), require('@angular/core'), require('@angular/localize')) :
    typeof define === 'function' && define.amd ? define('@locl/core', ['exports', '@angular/localize/init', '@angular/core', '@angular/localize'], factory) :
    (global = global || self, factory((global.locl = global.locl || {}, global.locl.core = {}), global.ng.localize.init, global.ng.core, global.ng.localize));
}(this, (function (exports, init, core, localize) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var __globalThis = typeof globalThis !== 'undefined' && globalThis;
    /** @type {?} */
    var __window = typeof window !== 'undefined' && window;
    /** @type {?} */
    var __self = typeof self !== 'undefined' &&
        typeof WorkerGlobalScope !== 'undefined' &&
        self instanceof WorkerGlobalScope &&
        self;
    // Always use __globalThis if available; this is the spec-defined global variable across all
    // environments.
    // Then fallback to __global first; in Node tests both __global and __window may be defined.
    /** @type {?} */
    var _global = __globalThis || __window || __self;

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
    var $locl = (/**
     * @param {?} messageParts
     * @param {...?} expressions
     * @return {?}
     */
    function (messageParts) {
        var expressions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expressions[_i - 1] = arguments[_i];
        }
        return new (LoclString.bind.apply(LoclString, __spread([void 0, messageParts], expressions)))();
    });
    // keep a local backup the of the real $localize
    /** @type {?} */
    var backUpLocalize = _global.$localize;
    // override $localize until everything is loaded
    _global.$localize = $locl;
    /** @type {?} */
    var isLoaded = false;
    var LoclString = /** @class */ (function (_super) {
        __extends(LoclString, _super);
        function LoclString(messageParts) {
            var expressions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                expressions[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this) || this;
            _this.value = null;
            _this.postProcess = false;
            _this.initParams = __spread([messageParts], expressions);
            return _this;
        }
        /**
         * @return {?}
         */
        LoclString.prototype.toString = /**
         * @return {?}
         */
        function () {
            if (this.value) {
                return this.value;
            }
            if (!isLoaded) {
                return backUpLocalize.apply(void 0, __spread(this.initParams));
            }
            this.value = _global.$localize.apply(_global, __spread(this.initParams));
            if (this.postProcess) {
                this.value = core.ɵɵi18nPostprocess(this.value);
                this.postProcess = false;
            }
            return this.value;
        };
        /**
         * @param {?} search
         * @param {?} replaceValue
         * @return {?}
         */
        LoclString.prototype.replace = /**
         * @param {?} search
         * @param {?} replaceValue
         * @return {?}
         */
        function (search, replaceValue) {
            this.postProcess = true;
            return (/** @type {?} */ (this));
        };
        /**
         * @return {?}
         */
        LoclString.prototype.valueOf = /**
         * @return {?}
         */
        function () {
            return this.toString();
        };
        return LoclString;
    }(String));
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
            localize.loadTranslations(parsedTranslationBundle.translations);
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
        var data;
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
    function getTranslations(url, method, headers, async) {
        if (method === void 0) { method = 'GET'; }
        if (headers === void 0) { headers = {}; }
        if (async === void 0) { async = true; }
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var xhr = new XMLHttpRequest();
            xhr.onload = (/**
             * @return {?}
             */
            function () {
                try {
                    /** @type {?} */
                    var res = parseTranslations(xhr.responseText);
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
            function (key) {
                return xhr.setRequestHeader(key, headers[key]);
            }));
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
    function fetchTranslations(url, method, headers) {
        if (method === void 0) { method = 'GET'; }
        if (headers === void 0) { headers = {}; }
        return fetch(url, { method: method, headers: headers })
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return response.text(); }))
            .then((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var res = parseTranslations(response);
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
        var browserCultureLang = window.navigator.languages
            ? window.navigator.languages[0]
            : null;
        browserCultureLang =
            browserCultureLang ||
                window.navigator.language ||
                ((/** @type {?} */ (window.navigator))).browserLanguage ||
                ((/** @type {?} */ (window.navigator))).userLanguage;
        return browserCultureLang.replace(/_/g, '-');
    }

    exports.$locl = $locl;
    exports.fetchTranslations = fetchTranslations;
    exports.getBrowserCultureLang = getBrowserCultureLang;
    exports.getBrowserLang = getBrowserLang;
    exports.getTranslations = getTranslations;
    exports.loadTranslations = loadTranslations;
    exports.parseTranslations = parseTranslations;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=locl-core.umd.js.map
