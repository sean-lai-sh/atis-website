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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-5xl md:text-6xl font-bold tracking-tighter leading-tight\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            posts.length > 0 && posts.map(function(param) {\n                var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt;\n                return slug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/post/[slug]\",\n                            as: \"/post/\".concat(slug.current),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 19\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, _this1),\n                        \" \",\n                        \"(\",\n                        new Date(publishedAt).toDateString(),\n                        \")\"\n                    ]\n                }, _id, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 15\n                }, _this1);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/test\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Test\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBR1U7QUFDdkMsSUFBTUUsS0FBSyxHQUFHLGlCQUFlO1FBQVpDLEtBQUssVUFBTEEsS0FBSzs7SUFDcEIscUJBQ0UsOERBQUNGLHFEQUFVO1FBQUNJLElBQUksRUFBRTtZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFOzswQkFFOUIsOERBQUNDLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUM5Qiw0RUFBQ0MsSUFBRTtvQkFBQ0QsU0FBUyxFQUFDLCtEQUErRDs7Ozs7eUJBQU07Ozs7O3FCQUMzRTswQkFFViw4REFBQ0MsSUFBRTswQkFBQyxvQkFBa0I7Ozs7O3FCQUFLO1lBQzFCTixLQUFLLENBQUNPLE1BQU0sR0FBRyxDQUFDLElBQ2ZQLEtBQUssQ0FBQ1EsR0FBRyxDQUNQO29CQUFHQyxHQUFHLFNBQUhBLEdBQUcsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLHlCQUFFQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsRUFBRSwrQkFBRUMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLEVBQUU7dUJBQzdDRCxJQUFJLGtCQUNGLDhEQUFDRSxJQUFFOztzQ0FDRCw4REFBQ2hCLGtEQUFJOzRCQUFDaUIsSUFBSSxFQUFDLGNBQWM7NEJBQUNDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYkosSUFBSSxDQUFDSyxPQUFPLENBQUU7c0NBQ25ELDRFQUFDQyxHQUFDOzBDQUFFUCxLQUFLOzs7OztzQ0FBSzs7Ozs7a0NBQ1Q7d0JBQUMsR0FBRzt3QkFBQyxHQUNYO3dCQUFDLElBQUlRLElBQUksQ0FBQ04sV0FBVyxDQUFDLENBQUNPLFlBQVksRUFBRTt3QkFBQyxHQUN6Qzs7bUJBTFNWLEdBQUc7Ozs7MEJBS1A7YUFDTixDQUNKOzBCQUNILDhEQUFDWixrREFBSTtnQkFBQ2lCLElBQUksRUFBQyxPQUFPOzBCQUNoQiw0RUFBQ0csR0FBQzs4QkFBQyxNQUFJOzs7Ozt5QkFBSTs7Ozs7cUJBQ047Ozs7OzthQUNJLENBQ2I7Q0FDSDtBQTFCS2xCLEtBQUFBLEtBQUs7O0FBdUNYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgIHsvKiBjcmVhdGUgYSBzZWN0aW9uIHdoZXJlIHRoZXJlIGlzIG9ubHkgdGV4dCBpbiB0aGUgY2VudGVyICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHRcIj48L2gxPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8aDE+V2VsY29tZSB0byBhIGJsb2chPC9oMT5cbiAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgIHBvc3RzLm1hcChcbiAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gXCJcIiwgc2x1ZyA9IFwiXCIsIHB1Ymxpc2hlZEF0ID0gXCJcIiB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e19pZH0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tzbHVnXVwiIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH0+XG4gICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgKHtuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9KVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPExpbmsgaHJlZj1cIi90ZXN0XCI+XG4gICAgICAgIDxhPlRlc3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBwdWJsaXNoZWRBdCA8IG5vdygpXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpXG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJtb3Rpb24iLCJJbmRleCIsInBvc3RzIiwiZGl2IiwiZXhpdCIsIm9wYWNpdHkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJwdWJsaXNoZWRBdCIsImxpIiwiaHJlZiIsImFzIiwiY3VycmVudCIsImEiLCJEYXRlIiwidG9EYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});