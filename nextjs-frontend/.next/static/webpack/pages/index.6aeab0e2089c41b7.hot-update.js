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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    animate: {\n                        rotate: 360\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl md:text-6xl font-bold tracking-tighter leading-tight\",\n                        children: \"some text stuff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                styles: {},\n                className: \" bg-center justify-center relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: posts.length > 0 && posts.map(function(param) {\n                        var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt;\n                        return slug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-slate-100 text-center text-slate-900 p-4 w-36 h-36 rounded-lg m-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/post/[slug]\",\n                                    as: \"/post/\".concat(slug.current),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 23\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, _this1),\n                                \" \",\n                                \"(\",\n                                new Date(publishedAt).toDateString(),\n                                \")\"\n                            ]\n                        }, _id, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 19\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/test\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Test\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBRUU7QUFDUTtBQUNEO0FBQ1A7QUFDaUI7QUFFaEQsU0FBU00sTUFBTSxDQUFDQyxNQUFNLEVBQUU7SUFDdEIsT0FBT0Ysd0RBQWUsQ0FBQ0osK0NBQU0sQ0FBQyxDQUFDTyxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBQ0QsSUFBTUUsS0FBSyxHQUFHLGlCQUFlO1FBQVpDLEtBQUssVUFBTEEsS0FBSzs7SUFDcEIscUJBQ0UsOERBQUNSLHFEQUFVO1FBQUNVLElBQUksRUFBRTtZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFOzswQkFFOUIsOERBQUNDLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUM5Qiw0RUFBQ2IscURBQVU7b0JBQUNjLE9BQU8sRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7cUJBQUU7OEJBQ2xDLDRFQUFDQyxJQUFFO3dCQUFDSCxTQUFTLEVBQUMsK0RBQStEO2tDQUFDLGlCQUU5RTs7Ozs7NkJBQUs7Ozs7O3lCQUNNOzs7OztxQkFDTDswQkFFViw4REFBQ0csSUFBRTswQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzBCQUMzQiw4REFBQ0MsT0FBSztnQkFBQ0MsTUFBTSxFQUFFLEVBQUU7Z0JBQUVMLFNBQVMsRUFBQyxvQ0FBb0M7MEJBQy9ELDRFQUFDTSxPQUFLOzhCQUNIWCxLQUFLLENBQUNZLE1BQU0sR0FBRyxDQUFDLElBQ2ZaLEtBQUssQ0FBQ2EsR0FBRyxDQUNQOzRCQUFHQyxHQUFHLFNBQUhBLEdBQUcsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLHlCQUFFQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsRUFBRSwrQkFBRUMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLEVBQUU7K0JBQzdDRCxJQUFJLGtCQUNGLDhEQUFDRSxJQUFFOzRCQUVEYixTQUFTLEVBQUMsc0VBQXNFOzs4Q0FFaEYsOERBQUNmLGtEQUFJO29DQUFDNkIsSUFBSSxFQUFDLGNBQWM7b0NBQUNDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYkosSUFBSSxDQUFDSyxPQUFPLENBQUU7OENBQ25ELDRFQUFDQyxHQUFDO2tEQUFFUCxLQUFLOzs7Ozs4Q0FBSzs7Ozs7MENBQ1Q7Z0NBQUMsR0FBRztnQ0FBQyxHQUNYO2dDQUFDLElBQUlRLElBQUksQ0FBQ04sV0FBVyxDQUFDLENBQUNPLFlBQVksRUFBRTtnQ0FBQyxHQUN6Qzs7MkJBUE9WLEdBQUc7Ozs7a0NBT0w7cUJBQ04sQ0FDSjs7Ozs7eUJBQ0c7Ozs7O3FCQUNGOzBCQUNSLDhEQUFDeEIsa0RBQUk7Z0JBQUM2QixJQUFJLEVBQUMsT0FBTzswQkFDaEIsNEVBQUNHLEdBQUM7OEJBQUMsTUFBSTs7Ozs7eUJBQUk7Ozs7O3FCQUNOOzs7Ozs7YUFDSSxDQUNiO0NBQ0g7QUFyQ0t2QixLQUFBQSxLQUFLOztBQWtEWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBibG9nSWNvbiB9IGZyb20gXCIuL2Jsb2dJY29uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5cbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XG59XG5jb25zdCBJbmRleCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgICB7LyogY3JlYXRlIGEgc2VjdGlvbiB3aGVyZSB0aGVyZSBpcyBvbmx5IHRleHQgaW4gdGhlIGNlbnRlciAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e3sgcm90YXRlOiAzNjAgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgIHNvbWUgdGV4dCBzdHVmZlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGgxPldlbGNvbWUgdG8gYSBibG9nITwvaDE+XG4gICAgICA8dGFibGUgc3R5bGVzPXt7fX0gY2xhc3NOYW1lPVwiIGJnLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIHBvc3RzLm1hcChcbiAgICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIgfSkgPT5cbiAgICAgICAgICAgICAgICBzbHVnICYmIChcbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHRleHQtY2VudGVyIHRleHQtc2xhdGUtOTAwIHAtNCB3LTM2IGgtMzYgcm91bmRlZC1sZyBtLTRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAoe25ldyBEYXRlKHB1Ymxpc2hlZEF0KS50b0RhdGVTdHJpbmcoKX0pXG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgPExpbmsgaHJlZj1cIi90ZXN0XCI+XG4gICAgICAgIDxhPlRlc3Q8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBwdWJsaXNoZWRBdCA8IG5vdygpXSB8IG9yZGVyKHB1Ymxpc2hlZEF0IGRlc2MpXG4gICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGllbnQiLCJtb3Rpb24iLCJibG9nSWNvbiIsIkltYWdlIiwiaW1hZ2VVcmxCdWlsZGVyIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJJbmRleCIsInBvc3RzIiwiZGl2IiwiZXhpdCIsIm9wYWNpdHkiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYW5pbWF0ZSIsInJvdGF0ZSIsImgxIiwidGFibGUiLCJzdHlsZXMiLCJ0Ym9keSIsImxlbmd0aCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwidHIiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwiYSIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});