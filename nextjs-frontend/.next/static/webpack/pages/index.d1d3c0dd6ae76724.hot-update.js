"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/blogIcon.js":
/*!***************************!*\
  !*** ./pages/blogIcon.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogIcon\": function() { return /* binding */ blogIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nfunction urlFor(source) {\n    return imageUrlBuilder(client).image(source);\n}\nfunction blogIcon(param) {\n    var posts = param.posts;\n    var _id = posts._id, title = posts.title, slug = posts.slug, mainImage = posts.mainImage, body = posts.body, author = posts.author, categories = posts.categories;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-100 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"w-screen bg-slate-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: urlFor(mainImage).height(200).width(200).url()\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: new Date(publishedAt).toDateString()\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2 w-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nSWNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNTO0FBQ0o7QUFDYjtBQUUvQixTQUFTSSxNQUFNLENBQUNDLE1BQU0sRUFBRTtJQUN0QixPQUFPQyxlQUFlLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBQ00sU0FBU0ksUUFBUSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDOUIsSUFBUUMsR0FBRyxHQUF1REQsS0FBSyxDQUEvREMsR0FBRyxFQUFFQyxLQUFLLEdBQWdERixLQUFLLENBQTFERSxLQUFLLEVBQUVDLElBQUksR0FBMENILEtBQUssQ0FBbkRHLElBQUksRUFBRUMsU0FBUyxHQUErQkosS0FBSyxDQUE3Q0ksU0FBUyxFQUFFQyxJQUFJLEdBQXlCTCxLQUFLLENBQWxDSyxJQUFJLEVBQUVDLE1BQU0sR0FBaUJOLEtBQUssQ0FBNUJNLE1BQU0sRUFBRUMsVUFBVSxHQUFLUCxLQUFLLENBQXBCTyxVQUFVO0lBQzdELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUN2Qiw0RUFBQ25CLHFEQUFVO1lBQ1RvQixPQUFPLEVBQUU7Z0JBQUVDLE9BQU8sRUFBRSxDQUFDO2FBQUU7WUFDdkJDLE9BQU8sRUFBRTtnQkFBRUQsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUN2QkUsSUFBSSxFQUFFO2dCQUFFRixPQUFPLEVBQUUsQ0FBQzthQUFFO1lBQ3BCRyxVQUFVLEVBQUU7Z0JBQUVDLFFBQVEsRUFBRSxHQUFHO2FBQUU7c0JBRTdCLDRFQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsdUJBQXVCOzBCQUNwQyw0RUFBQ08sU0FBTztvQkFBQ1AsU0FBUyxFQUFDLHVCQUF1Qjs7c0NBQ3hDLDhEQUFDaEIsbURBQUs7NEJBQUN3QixHQUFHLEVBQUV2QixNQUFNLENBQUNVLFNBQVMsQ0FBQyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxFQUFFOzs7OztnQ0FBSTtzQ0FDOUQsOERBQUNDLElBQUU7NEJBQUNaLFNBQVMsRUFBQyxZQUFZO3NDQUFFUCxLQUFLOzs7OztnQ0FBTTtzQ0FDdkMsOERBQUNvQixHQUFDO3NDQUFFLElBQUlDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUNDLFlBQVksRUFBRTs7Ozs7Z0NBQUs7c0NBQzdDLDhEQUFDakIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGFBQWE7Ozs7O2dDQUFPOzs7Ozs7d0JBQzNCOzs7OztvQkFDTjs7Ozs7Z0JBQ0s7Ozs7O1lBQ1QsQ0FDTjtDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dJY29uLmpzPzAwNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBMYXlvdXRHcm91cCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBibG9nSWNvbih7IHBvc3RzIH0pIHtcbiAgY29uc3QgeyBfaWQsIHRpdGxlLCBzbHVnLCBtYWluSW1hZ2UsIGJvZHksIGF1dGhvciwgY2F0ZWdvcmllcyB9ID0gcG9zdHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwidy1zY3JlZW4gYmctc2xhdGUtNTAwXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1cmxGb3IobWFpbkltYWdlKS5oZWlnaHQoMjAwKS53aWR0aCgyMDApLnVybCgpfSAvPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2dIZWFkZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIHctZnVsbFwiPjwvZGl2PlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiTGF5b3V0R3JvdXAiLCJJbWFnZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsImltYWdlIiwiYmxvZ0ljb24iLCJwb3N0cyIsIl9pZCIsInRpdGxlIiwic2x1ZyIsIm1haW5JbWFnZSIsImJvZHkiLCJhdXRob3IiLCJjYXRlZ29yaWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImFydGljbGUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsInVybCIsImgxIiwicCIsIkRhdGUiLCJwdWJsaXNoZWRBdCIsInRvRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogIcon.js\n");

/***/ })

});