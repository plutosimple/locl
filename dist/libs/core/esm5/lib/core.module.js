/**
 * @fileoverview added by tsickle
 * Generated from: lib/core.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { loadTranslations } from './init';
/**
 * @param {?} fileContent
 * @return {?}
 */
export function parseTranslations(fileContent) {
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
export function getTranslations(url, method, headers, async) {
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
export function ParsedTranslationBundle() { }
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
export function fetchTranslations(url, method, headers) {
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
export function getBrowserLang() {
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
export function getBrowserCultureLang() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG9jbC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUUxQyxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFdBQW1COztRQUVmLElBQTZCO0lBRWpDLDhCQUE4QjtJQUM5QixJQUNFLGVBQWUsQ0FBQyxJQUFJLENBQ2xCLFdBQVc7U0FDUixPQUFPLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDO1NBQ2hDLE9BQU8sQ0FDTixrRUFBa0UsRUFDbEUsR0FBRyxDQUNKO1NBQ0EsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUN2QyxFQUNEO1FBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztLQUM1RTtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsR0FBRyxFQUNILE1BQThCLEVBQzlCLE9BQXVDLEVBQ3ZDLEtBQVk7SUFGWix1QkFBQSxFQUFBLGNBQThCO0lBQzlCLHdCQUFBLEVBQUEsWUFBdUM7SUFDdkMsc0JBQUEsRUFBQSxZQUFZO0lBRVosT0FBTyxJQUFJLE9BQU87Ozs7O0lBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTs7WUFDM0IsR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFO1FBRWhDLEdBQUcsQ0FBQyxNQUFNOzs7UUFBRztZQUNYLElBQUk7O29CQUNJLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcs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c0NvbnRlbnQiOlsiaW1wb3J0IHsgybVNZXNzYWdlSWQsIMm1VGFyZ2V0TWVzc2FnZSB9IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcbmltcG9ydCB7IGxvYWRUcmFuc2xhdGlvbnMgfSBmcm9tICcuL2luaXQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUcmFuc2xhdGlvbnMoXG4gIGZpbGVDb250ZW50OiBzdHJpbmdcbik6IFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlIHtcbiAgbGV0IGRhdGE6IFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlO1xuXG4gIC8vIFRlc3QgaWYgdGhlIGNvbnRlbnQgaXMganNvblxuICBpZiAoXG4gICAgL15bXFxdLDp7fVxcc10qJC8udGVzdChcbiAgICAgIGZpbGVDb250ZW50XG4gICAgICAgIC5yZXBsYWNlKC9cXFxcW1wiXFxcXFxcL2JmbnJ0dV0vZywgJ0AnKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICAvXCJbXlwiXFxcXFxcblxccl0qXCJ8dHJ1ZXxmYWxzZXxudWxsfC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/L2csXG4gICAgICAgICAgJ10nXG4gICAgICAgIClcbiAgICAgICAgLnJlcGxhY2UoLyg/Ol58OnwsKSg/OlxccypcXFspKy9nLCAnJylcbiAgICApXG4gICkge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKGZpbGVDb250ZW50KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgSlNPTiB0cmFuc2xhdGlvbiBmaWxlcyBhcmUgc3VwcG9ydGVkIGF0IHRoZSBtb21lbnQnKTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBHZXRzIGEgdHJhbnNsYXRpb24gZmlsZSBmcm9tIGEgc2VydmVyIHVzaW5nIGFuIFhIUiBIVFRQIHJlcXVlc3RcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSBtZXRob2QgdGhlIG1ldGhvZCB1c2VkIHRvIGdldCB0aGUgdHJhbnNsYXRpb25zLCBlaXRoZXIgYEdFVGAgb3IgYFBPU1RgXG4gKiBAcGFyYW0gaGVhZGVycyBhbiBvYmplY3QgY29udGFpbmluZyBhIGxpc3Qgb2YgaGVhZGVyL3ZhbHVlIHRvIHNldCBmb3IgdGhlIFhIUiByZXF1ZXN0XG4gKiBAcGFyYW0gYXN5bmMgZGVmaW5lcyBpZiB0aGUgWEhSIHJlcXVlc3Qgc2hvdWxkIGJlIGFzeW5jIChkZWZhdWx0KSBvciBub3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9ucyhcbiAgdXJsLFxuICBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnID0gJ0dFVCcsXG4gIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fSxcbiAgYXN5bmMgPSB0cnVlXG4pOiBQcm9taXNlPFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBwYXJzZVRyYW5zbGF0aW9ucyh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgbG9hZFRyYW5zbGF0aW9ucyhyZXMpO1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgfTtcblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCB0aW1lb3V0JykpO1xuICAgIH07XG5cbiAgICB4aHIub25hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignTmV0d29yayByZXF1ZXN0IGFib3J0ZWQnKSk7XG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKGhlYWRlcnMpLmZvckVhY2goa2V5ID0+XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgICApO1xuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCBhc3luYyk7XG4gICAgeGhyLnNlbmQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUge1xuICBsb2NhbGU6IHN0cmluZztcbiAgdHJhbnNsYXRpb25zOiBSZWNvcmQ8ybVNZXNzYWdlSWQsIMm1VGFyZ2V0TWVzc2FnZT47XG59XG5cbi8qKlxuICogR2V0cyBhIHRyYW5zbGF0aW9uIGZpbGUgZnJvbSBhIHNlcnZlciB1c2luZyB0aGUgZmV0Y2ggQVBJXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gbWV0aG9kIHRoZSBtZXRob2QgdXNlZCB0byBnZXQgdGhlIHRyYW5zbGF0aW9ucywgZWl0aGVyIGBHRVRgIG9yIGBQT1NUYFxuICogQHBhcmFtIGhlYWRlcnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBsaXN0IG9mIGhlYWRlci92YWx1ZSB0byBzZXQgZm9yIHRoZSBYSFIgcmVxdWVzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUcmFuc2xhdGlvbnMoXG4gIHVybDogc3RyaW5nLFxuICBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnID0gJ0dFVCcsXG4gIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuKTogUHJvbWlzZTxQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7IG1ldGhvZCwgaGVhZGVycyB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbigocmVzcG9uc2U6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGFyc2VUcmFuc2xhdGlvbnMocmVzcG9uc2UpO1xuICAgICAgbG9hZFRyYW5zbGF0aW9ucyhyZXMpO1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYW5ndWFnZSBjb2RlIG5hbWUgZnJvbSB0aGUgYnJvd3NlciwgZS5nLiBcImZyXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJyb3dzZXJMYW5nKCk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gZ2V0QnJvd3NlckN1bHR1cmVMYW5nKCkuc3BsaXQoJy0nKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdWx0dXJlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZnItRlJcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlckN1bHR1cmVMYW5nKCk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiB3aW5kb3cubmF2aWdhdG9yID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBsZXQgYnJvd3NlckN1bHR1cmVMYW5nID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNcbiAgICA/IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdXG4gICAgOiBudWxsO1xuICBicm93c2VyQ3VsdHVyZUxhbmcgPVxuICAgIGJyb3dzZXJDdWx0dXJlTGFuZyB8fFxuICAgIHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UgfHxcbiAgICAod2luZG93Lm5hdmlnYXRvciBhcyBhbnkpLmJyb3dzZXJMYW5ndWFnZSB8fFxuICAgICh3aW5kb3cubmF2aWdhdG9yIGFzIGFueSkudXNlckxhbmd1YWdlO1xuXG4gIHJldHVybiBicm93c2VyQ3VsdHVyZUxhbmcucmVwbGFjZSgvXy9nLCAnLScpO1xufVxuIl19