/**
 * @fileoverview added by tsickle
 * Generated from: lib/init.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
import '@angular/localize/init';
import { ɵɵi18nPostprocess } from '@angular/core';
import { loadTranslations as _loadTranslations } from '@angular/localize';
import { _global } from './global';
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
export const $locl = (/**
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
export function loadTranslations(parsedTranslationBundle) {
    // Restore $localize
    _global.$localize = backUpLocalize;
    if ((parsedTranslationBundle === null || parsedTranslationBundle === void 0 ? void 0 : parsedTranslationBundle.translations) &&
        Object.keys(parsedTranslationBundle.translations).length) {
        _loadTranslations(parsedTranslationBundle.translations);
    }
    if (parsedTranslationBundle === null || parsedTranslationBundle === void 0 ? void 0 : parsedTranslationBundle.locale) {
        _global.$localize.locale = parsedTranslationBundle.locale;
    }
    isLoaded = true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bsb2NsL2NvcmUvIiwic291cmNlcyI6WyJsaWIvaW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLElBQUksaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7Ozs7Ozs7QUFZbkMsTUFBTSxPQUFPLEtBQUs7Ozs7O0FBQUcsVUFDbkIsWUFBa0MsRUFDbEMsR0FBRyxXQUEyQjtJQUU5QixPQUFPLElBQUksVUFBVSxDQUFDLFlBQVksRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQTs7O01BR0ssY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTOztBQUV4QyxPQUFPLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7SUFDdEIsUUFBUSxHQUFHLEtBQUs7QUFFcEIsTUFBTSxVQUFXLFNBQVEsTUFBTTs7Ozs7SUFJN0IsWUFDRSxZQUFrQyxFQUNsQyxHQUFHLFdBQTJCO1FBRTlCLEtBQUssRUFBRSxDQUFDO1FBTkYsVUFBSyxHQUFXLElBQUksQ0FBQztRQUNyQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQU0xQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsWUFBWSxFQUFFLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxNQUFXLEVBQUUsWUFBaUI7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsT0FBTyxtQkFBQSxJQUFJLEVBQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRjs7Ozs7O0lBbENDLGdDQUF5RTs7Ozs7SUFDekUsMkJBQTZCOzs7OztJQUM3QixpQ0FBNEI7Ozs7Ozs7Ozs7QUF3QzlCLE1BQU0sVUFBVSxnQkFBZ0IsQ0FDOUIsdUJBQWlEO0lBRWpELG9CQUFvQjtJQUNwQixPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztJQUNuQyxJQUNFLENBQUEsdUJBQXVCLGFBQXZCLHVCQUF1Qix1QkFBdkIsdUJBQXVCLENBQUUsWUFBWTtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFDeEQ7UUFDQSxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN6RDtJQUNELElBQUksdUJBQXVCLGFBQXZCLHVCQUF1Qix1QkFBdkIsdUJBQXVCLENBQUUsTUFBTSxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUF1QixDQUFDLE1BQU0sQ0FBQztLQUMzRDtJQUNELFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExvYWQgYCRsb2NhbGl6ZWAgb250byB0aGUgZ2xvYmFsIHNjb3BlIC0gdXNlZCBpZiBpMThuIHRhZ3MgYXBwZWFyIGluIEFuZ3VsYXIgdGVtcGxhdGVzLlxuaW1wb3J0ICdAYW5ndWxhci9sb2NhbGl6ZS9pbml0JztcbmltcG9ydCB7IMm1ybVpMThuUG9zdHByb2Nlc3MgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGxvYWRUcmFuc2xhdGlvbnMgYXMgX2xvYWRUcmFuc2xhdGlvbnMgfSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5pbXBvcnQgeyBQYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfZ2xvYmFsIH0gZnJvbSAnLi9nbG9iYWwnO1xuXG4vKipcbiAqIFRoZSAkbG9jbCBmdW5jdGlvbiBpcyBhbiBlbXVsYXRpb24gb2YgJGxvY2FsaXplIGJ1dCBpdCByZXR1cm5zIGEgYExvY2xTdHJpbmdgXG4gKiBpbnN0ZWFkIG9mIGEgcmVhbCBzdHJpbmcuIEEgYExvY2xTdHJpbmdgIGlzIG9ubHkgZXZhbHVhdGVkIHdoZW4gdGhlIHRlbXBsYXRlXG4gKiBpcyBjcmVhdGVkLCBub3QganVzdCB3aGVuIHRoZSBmaWxlIGNvbnRhaW5pbmcgdGhhdCB0ZW1wbGF0ZSBpcyBsb2FkZWQgYnkgdGhlXG4gKiBicm93c2VyIChhdCBib290c3RyYXApLiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuIGRlbGF5IGluaXRpYWxpemF0aW9uIG9mIHRoZVxuICogc3RyaW5nIHZhbHVlcyBhbmQgd2FpdCBmb3IgdGhlIHRyYW5zbGF0aW9ucyB0byBiZSBsb2FkZWQuXG4gKlxuICogQHBhcmFtIG1lc3NhZ2VQYXJ0c1xuICogQHBhcmFtIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBjb25zdCAkbG9jbCA9IGZ1bmN0aW9uKFxuICBtZXNzYWdlUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LFxuICAuLi5leHByZXNzaW9uczogcmVhZG9ubHkgYW55W11cbikge1xuICByZXR1cm4gbmV3IExvY2xTdHJpbmcobWVzc2FnZVBhcnRzLCAuLi5leHByZXNzaW9ucyk7XG59O1xuXG4vLyBrZWVwIGEgbG9jYWwgYmFja3VwIHRoZSBvZiB0aGUgcmVhbCAkbG9jYWxpemVcbmNvbnN0IGJhY2tVcExvY2FsaXplID0gX2dsb2JhbC4kbG9jYWxpemU7XG4vLyBvdmVycmlkZSAkbG9jYWxpemUgdW50aWwgZXZlcnl0aGluZyBpcyBsb2FkZWRcbl9nbG9iYWwuJGxvY2FsaXplID0gJGxvY2w7XG5sZXQgaXNMb2FkZWQgPSBmYWxzZTtcblxuY2xhc3MgTG9jbFN0cmluZyBleHRlbmRzIFN0cmluZyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5pdFBhcmFtczogW1RlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi4ocmVhZG9ubHkgYW55W10pXTtcbiAgcHJpdmF0ZSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSBwb3N0UHJvY2VzcyA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBtZXNzYWdlUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LFxuICAgIC4uLmV4cHJlc3Npb25zOiByZWFkb25seSBhbnlbXVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaW5pdFBhcmFtcyA9IFttZXNzYWdlUGFydHMsIC4uLmV4cHJlc3Npb25zXTtcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBpZiAoIWlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gYmFja1VwTG9jYWxpemUoLi4udGhpcy5pbml0UGFyYW1zKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IF9nbG9iYWwuJGxvY2FsaXplKC4uLnRoaXMuaW5pdFBhcmFtcyk7XG4gICAgaWYgKHRoaXMucG9zdFByb2Nlc3MpIHtcbiAgICAgIHRoaXMudmFsdWUgPSDJtcm1aTE4blBvc3Rwcm9jZXNzKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5wb3N0UHJvY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHJlcGxhY2Uoc2VhcmNoOiBhbnksIHJlcGxhY2VWYWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICB0aGlzLnBvc3RQcm9jZXNzID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcyBhcyBhbnk7XG4gIH1cblxuICB2YWx1ZU9mKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgfVxufVxuXG4vKipcbiAqIEZpbmlzaGVzIGluaXRpYWxpemF0aW9uIG9mICRsb2NhbGl6ZSwgbG9hZHMgdHJhbnNsYXRpb25zIGluIG1lbW9yeSBhbmQgc2V0c1xuICogdGhlIGBMT0NBTEVfSURgIHZhbHVlLlxuICogVXNlIHRoaXMgKipvbmx5KiogaWYgeW91J3JlIG5vdCB1c2luZyBhbnkgb2YgdGhlIHR3byBmdW5jdGlvbnNcbiAqIGBnZXRUcmFuc2xhdGlvbnNgIG9yIGBmZXRjaFRyYW5zbGF0aW9uc2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKFxuICBwYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZT86IFBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlXG4pIHtcbiAgLy8gUmVzdG9yZSAkbG9jYWxpemVcbiAgX2dsb2JhbC4kbG9jYWxpemUgPSBiYWNrVXBMb2NhbGl6ZTtcbiAgaWYgKFxuICAgIHBhcnNlZFRyYW5zbGF0aW9uQnVuZGxlPy50cmFuc2xhdGlvbnMgJiZcbiAgICBPYmplY3Qua2V5cyhwYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZS50cmFuc2xhdGlvbnMpLmxlbmd0aFxuICApIHtcbiAgICBfbG9hZFRyYW5zbGF0aW9ucyhwYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZS50cmFuc2xhdGlvbnMpO1xuICB9XG4gIGlmIChwYXJzZWRUcmFuc2xhdGlvbkJ1bmRsZT8ubG9jYWxlKSB7XG4gICAgX2dsb2JhbC4kbG9jYWxpemUubG9jYWxlID0gcGFyc2VkVHJhbnNsYXRpb25CdW5kbGUubG9jYWxlO1xuICB9XG4gIGlzTG9hZGVkID0gdHJ1ZTtcbn1cbiJdfQ==