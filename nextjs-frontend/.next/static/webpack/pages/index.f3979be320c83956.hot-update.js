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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    animate: {\n                        rotate: 360\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl md:text-6xl font-bold tracking-tighter leading-tight\",\n                        children: \"some text stuff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"content-center flex\",\n                children: posts.length > 0 && posts.map(function(param) {\n                    var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n                    return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        onClick: function() {\n                            console.log(slug);\n                        },\n                        className: \"blogIcon group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).url(),\n                                className: \" rounded-sm outline-slate-200 outline-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 19\n                            }, _this1),\n                            \" \",\n                            new Date(publishedAt).toDateString(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                whileHover: {\n                                    scale: 1.1\n                                },\n                                className: \"p-2 bg-slate-200 rounded-lg hover:shadow-sm hover:shadow-gray-400 hover:bg-opacity-50 group duration-300 align-bottom bottom-0 hover:outline-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/post/[slug]\",\n                                    as: \"/post/\".concat(slug.current),\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"hover:opacity-100 text-blue-500 font-Sora font-medium\",\n                                        children: [\n                                            \"Read Article\",\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 23\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 19\n                            }, _this1)\n                        ]\n                    }, _id, true, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/test\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Test\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7cUJBQ047Ozs7OzthQUNJLENBQ2I7Q0FDSDtBQWhFSzlCLEtBQUFBLEtBQUs7O0FBNkVYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGJsb2dJY29uIH0gZnJvbSBcIi4vYmxvZ0ljb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgIHsvKiBjcmVhdGUgYSBzZWN0aW9uIHdoZXJlIHRoZXJlIGlzIG9ubHkgdGV4dCBpbiB0aGUgY2VudGVyICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyByb3RhdGU6IDM2MCB9fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgc29tZSB0ZXh0IHN0dWZmXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8aDE+V2VsY29tZSB0byBhIGJsb2chPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciBmbGV4XCI+XG4gICAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcG9zdHMubWFwKFxuICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxuICAgICAgICAgICAgICBzbHVnICYmXG4gICAgICAgICAgICAgIG1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsdWcpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2dJY29uIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLXNtIG91dGxpbmUtc2xhdGUtMjAwIG91dGxpbmUtMlwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0L1tzbHVnXVwiXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH1cbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICB7bmV3IERhdGUocHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJnLXNsYXRlLTIwMCByb3VuZGVkLWxnIGhvdmVyOnNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctZ3JheS00MDAgaG92ZXI6Ymctb3BhY2l0eS01MCBncm91cCBkdXJhdGlvbi0zMDAgYWxpZ24tYm90dG9tIGJvdHRvbS0wIGhvdmVyOm91dGxpbmUtOFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0L1tzbHVnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJob3ZlcjpvcGFjaXR5LTEwMCB0ZXh0LWJsdWUtNTAwIGZvbnQtU29yYSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBBcnRpY2xle1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8TGluayBocmVmPVwiL3Rlc3RcIj5cbiAgICAgICAgPGE+VGVzdDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICBgKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsiTGluayIsImNsaWVudCIsIm1vdGlvbiIsImJsb2dJY29uIiwiSW1hZ2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIkluZGV4IiwicG9zdHMiLCJkaXYiLCJleGl0Iiwib3BhY2l0eSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhbmltYXRlIiwicm90YXRlIiwiaDEiLCJ1bCIsImxlbmd0aCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibWFpbkltYWdlIiwid2hpbGVIb3ZlciIsInNjYWxlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJpbWciLCJzcmMiLCJ1cmwiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwicGFzc0hyZWYiLCJhIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});