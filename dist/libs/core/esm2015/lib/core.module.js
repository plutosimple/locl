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
export function getTranslations(url, method = 'GET', headers = {}, async = true) {
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
export function fetchTranslations(url, method = 'GET', headers = {}) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbG9jbC9jb3JlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUUxQyxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFdBQW1COztRQUVmLElBQTZCO0lBRWpDLDhCQUE4QjtJQUM5QixJQUNFLGVBQWUsQ0FBQyxJQUFJLENBQ2xCLFdBQVc7U0FDUixPQUFPLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDO1NBQ2hDLE9BQU8sQ0FDTixrRUFBa0UsRUFDbEUsR0FBRyxDQUNKO1NBQ0EsT0FBTyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUN2QyxFQUNEO1FBQ0EsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDaEM7U0FBTTtRQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztLQUM1RTtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsR0FBRyxFQUNILFNBQXlCLEtBQUssRUFDOUIsVUFBcUMsRUFBRSxFQUN2QyxLQUFLLEdBQUcsSUFBSTtJQUVaLE9BQU8sSUFBSSxPQUFPOzs7OztJQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztjQUMvQixHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUU7UUFFaEMsR0FBRyxDQUFDLE1BQU07OztRQUFHO1lBQ1gsSUFBSTs7c0JBQ0ksR0FBRyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQy9DLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDZDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUFFRixHQUFHLENBQUMsT0FBTzs7O1FBQUc7WUFDWixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQSxDQUFDO1FBRUYsR0FBRyxDQUFDLFNBQVM7OztRQUFHO1lBQ2QsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUEsQ0FBQztRQUVGLEdBQUcsQ0FBQyxPQUFPOzs7UUFBRztZQUNaLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUFBLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUNqQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUN4QyxDQUFDO1FBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNiLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7OztBQUVELDZDQUdDOzs7SUFGQyx5Q0FBZTs7SUFDZiwrQ0FBaUQ7Ozs7Ozs7OztBQVNuRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLEdBQVcsRUFDWCxTQUF5QixLQUFLLEVBQzlCLFVBQXFDLEVBQUU7SUFFdkMsT0FBTyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDO1NBQ25DLElBQUk7Ozs7SUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQztTQUNqQyxJQUFJOzs7O0lBQUMsQ0FBQyxRQUFnQixFQUFFLEVBQUU7O2NBQ25CLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDdkMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUMsQ0FBQztBQUNQLENBQUM7Ozs7O0FBS0QsTUFBTSxVQUFVLGNBQWM7SUFDNUIsSUFDRSxPQUFPLE1BQU0sS0FBSyxXQUFXO1FBQzdCLE9BQU8sTUFBTSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQ3ZDO1FBQ0EsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8scUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQzs7Ozs7QUFLRCxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLElBQ0UsT0FBTyxNQUFNLEtBQUssV0FBVztRQUM3QixPQUFPLE1BQU0sQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUN2QztRQUNBLE9BQU8sRUFBRSxDQUFDO0tBQ1g7O1FBRUcsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTO1FBQ2pELENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLElBQUk7SUFDUixrQkFBa0I7UUFDaEIsa0JBQWtCO1lBQ2xCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUN6QixDQUFDLG1CQUFBLE1BQU0sQ0FBQyxTQUFTLEVBQU8sQ0FBQyxDQUFDLGVBQWU7WUFDekMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsU0FBUyxFQUFPLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFFekMsT0FBTyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQy9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyDJtU1lc3NhZ2VJZCwgybVUYXJnZXRNZXNzYWdlIH0gZnJvbSAnQGFuZ3VsYXIvbG9jYWxpemUnO1xuaW1wb3J0IHsgbG9hZFRyYW5zbGF0aW9ucyB9IGZyb20gJy4vaW5pdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRyYW5zbGF0aW9ucyhcbiAgZmlsZUNvbnRlbnQ6IHN0cmluZ1xuKTogUGFyc2VkVHJhbnNsYXRpb25CdW5kbGUge1xuICBsZXQgZGF0YTogUGFyc2VkVHJhbnNsYXRpb25CdW5kbGU7XG5cbiAgLy8gVGVzdCBpZiB0aGUgY29udGVudCBpcyBqc29uXG4gIGlmIChcbiAgICAvXltcXF0sOnt9XFxzXSokLy50ZXN0KFxuICAgICAgZmlsZUNvbnRlbnRcbiAgICAgICAgLnJlcGxhY2UoL1xcXFxbXCJcXFxcXFwvYmZucnR1XS9nLCAnQCcpXG4gICAgICAgIC5yZXBsYWNlKFxuICAgICAgICAgIC9cIlteXCJcXFxcXFxuXFxyXSpcInx0cnVlfGZhbHNlfG51bGx8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8vZyxcbiAgICAgICAgICAnXSdcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZSgvKD86Xnw6fCwpKD86XFxzKlxcWykrL2csICcnKVxuICAgIClcbiAgKSB7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZmlsZUNvbnRlbnQpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBKU09OIHRyYW5zbGF0aW9uIGZpbGVzIGFyZSBzdXBwb3J0ZWQgYXQgdGhlIG1vbWVudCcpO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldHMgYSB0cmFuc2xhdGlvbiBmaWxlIGZyb20gYSBzZXJ2ZXIgdXNpbmcgYW4gWEhSIEhUVFAgcmVxdWVzdFxuICogQHBhcmFtIHVybFxuICogQHBhcmFtIG1ldGhvZCB0aGUgbWV0aG9kIHVzZWQgdG8gZ2V0IHRoZSB0cmFuc2xhdGlvbnMsIGVpdGhlciBgR0VUYCBvciBgUE9TVGBcbiAqIEBwYXJhbSBoZWFkZXJzIGFuIG9iamVjdCBjb250YWluaW5nIGEgbGlzdCBvZiBoZWFkZXIvdmFsdWUgdG8gc2V0IGZvciB0aGUgWEhSIHJlcXVlc3RcbiAqIEBwYXJhbSBhc3luYyBkZWZpbmVzIGlmIHRoZSBYSFIgcmVxdWVzdCBzaG91bGQgYmUgYXN5bmMgKGRlZmF1bHQpIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb25zKFxuICB1cmwsXG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgPSAnR0VUJyxcbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9LFxuICBhc3luYyA9IHRydWVcbik6IFByb21pc2U8UGFyc2VkVHJhbnNsYXRpb25CdW5kbGU+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHBhcnNlVHJhbnNsYXRpb25zKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICBsb2FkVHJhbnNsYXRpb25zKHJlcyk7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICB9O1xuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVqZWN0KG5ldyBFcnJvcignTmV0d29yayByZXF1ZXN0IHRpbWVvdXQnKSk7XG4gICAgfTtcblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdOZXR3b3JrIHJlcXVlc3QgYWJvcnRlZCcpKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoaGVhZGVycykuZm9yRWFjaChrZXkgPT5cbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgaGVhZGVyc1trZXldKVxuICAgICk7XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jKTtcbiAgICB4aHIuc2VuZCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICB0cmFuc2xhdGlvbnM6IFJlY29yZDzJtU1lc3NhZ2VJZCwgybVUYXJnZXRNZXNzYWdlPjtcbn1cblxuLyoqXG4gKiBHZXRzIGEgdHJhbnNsYXRpb24gZmlsZSBmcm9tIGEgc2VydmVyIHVzaW5nIHRoZSBmZXRjaCBBUElcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSBtZXRob2QgdGhlIG1ldGhvZCB1c2VkIHRvIGdldCB0aGUgdHJhbnNsYXRpb25zLCBlaXRoZXIgYEdFVGAgb3IgYFBPU1RgXG4gKiBAcGFyYW0gaGVhZGVycyBhbiBvYmplY3QgY29udGFpbmluZyBhIGxpc3Qgb2YgaGVhZGVyL3ZhbHVlIHRvIHNldCBmb3IgdGhlIFhIUiByZXF1ZXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFRyYW5zbGF0aW9ucyhcbiAgdXJsOiBzdHJpbmcsXG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgPSAnR0VUJyxcbiAgaGVhZGVyczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG4pOiBQcm9taXNlPFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlPiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHsgbWV0aG9kLCBoZWFkZXJzIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgIC50aGVuKChyZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXJzZVRyYW5zbGF0aW9ucyhyZXNwb25zZSk7XG4gICAgICBsb2FkVHJhbnNsYXRpb25zKHJlcyk7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhbmd1YWdlIGNvZGUgbmFtZSBmcm9tIHRoZSBicm93c2VyLCBlLmcuIFwiZnJcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBnZXRCcm93c2VyQ3VsdHVyZUxhbmcoKS5zcGxpdCgnLScpWzBdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1bHR1cmUgbGFuZ3VhZ2UgY29kZSBuYW1lIGZyb20gdGhlIGJyb3dzZXIsIGUuZy4gXCJmci1GUlwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcm93c2VyQ3VsdHVyZUxhbmcoKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnXG4gICkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGxldCBicm93c2VyQ3VsdHVyZUxhbmcgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlc1xuICAgID8gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZXNbMF1cbiAgICA6IG51bGw7XG4gIGJyb3dzZXJDdWx0dXJlTGFuZyA9XG4gICAgYnJvd3NlckN1bHR1cmVMYW5nIHx8XG4gICAgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSB8fFxuICAgICh3aW5kb3cubmF2aWdhdG9yIGFzIGFueSkuYnJvd3Nlckxhbmd1YWdlIHx8XG4gICAgKHdpbmRvdy5uYXZpZ2F0b3IgYXMgYW55KS51c2VyTGFuZ3VhZ2U7XG5cbiAgcmV0dXJuIGJyb3dzZXJDdWx0dXJlTGFuZy5yZXBsYWNlKC9fL2csICctJyk7XG59XG4iXX0=