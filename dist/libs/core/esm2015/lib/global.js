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
export const _global = __globalThis || __window || __self;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGxvY2wvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFlTSxZQUFZLEdBQUcsT0FBTyxVQUFVLEtBQUssV0FBVyxJQUFJLFVBQVU7O01BQzlELFFBQVEsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksTUFBTTs7TUFDbEQsTUFBTSxHQUNWLE9BQU8sSUFBSSxLQUFLLFdBQVc7SUFDM0IsT0FBTyxpQkFBaUIsS0FBSyxXQUFXO0lBQ3hDLElBQUksWUFBWSxpQkFBaUI7SUFDakMsSUFBSTs7Ozs7QUFJTixNQUFNLE9BQU8sT0FBTyxHQUFRLFlBQVksSUFBSSxRQUFRLElBQUksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBjb2RlIHRvIGFjY2VzcyB0aGUgZ2xvYmFsIG9iamVjdCBpcyBtb3N0bHkgY29waWVkIGZyb20gYHBhY2thZ2VzL2NvcmUvc3JjL3V0aWwvZ2xvYmFsLnRzYFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBXb3JrZXJHbG9iYWxTY29wZTogYW55O1xufVxuXG5jb25zdCBfX2dsb2JhbFRoaXMgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcztcbmNvbnN0IF9fd2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93O1xuY29uc3QgX19zZWxmID1cbiAgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlICYmXG4gIHNlbGY7XG4vLyBBbHdheXMgdXNlIF9fZ2xvYmFsVGhpcyBpZiBhdmFpbGFibGU7IHRoaXMgaXMgdGhlIHNwZWMtZGVmaW5lZCBnbG9iYWwgdmFyaWFibGUgYWNyb3NzIGFsbFxuLy8gZW52aXJvbm1lbnRzLlxuLy8gVGhlbiBmYWxsYmFjayB0byBfX2dsb2JhbCBmaXJzdDsgaW4gTm9kZSB0ZXN0cyBib3RoIF9fZ2xvYmFsIGFuZCBfX3dpbmRvdyBtYXkgYmUgZGVmaW5lZC5cbmV4cG9ydCBjb25zdCBfZ2xvYmFsOiBhbnkgPSBfX2dsb2JhbFRoaXMgfHwgX193aW5kb3cgfHwgX19zZWxmO1xuIl19