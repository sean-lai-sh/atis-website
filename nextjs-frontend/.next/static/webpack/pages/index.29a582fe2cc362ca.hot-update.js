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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Parallax__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                offset: 100,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"text-center h-screen align-center justify-center bg-slate-700 opacity-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        animate: {\n                            rotate: 360\n                        },\n                        layout: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl md:text-6xl font-bold tracking-tighter leading-tight\",\n                            children: \"Content Title #1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex container relative\",\n                children: posts.length > 0 && posts.map(function(param) {\n                    var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n                    return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        whileHover: {\n                            scale: 1.1\n                        },\n                        onClick: function() {\n                            console.log(slug);\n                        },\n                        className: \"blogIcon group mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).url(),\n                                className: \" rounded-sm outline-slate-200 outline-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 19\n                            }, _this1),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: new Date(publishedAt).toDateString()\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    whileHover: {\n                                        scale: 1.05\n                                    },\n                                    className: \"group readArticle\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/post/[slug]\",\n                                        as: \"/post/\".concat(slug.current),\n                                        passHref: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"group-hover:opacity-100 text-blue-500 font-Sora font-medium\",\n                                            children: [\n                                                \"Read Article\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 25\n                                        }, _this1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 23\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 19\n                            }, _this1)\n                        ]\n                    }, _id, true, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/test\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Test\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3VCQWxDRE8sR0FBRzs7Ozs4QkFtQ0c7aUJBQ2QsQ0FDSjs7Ozs7cUJBQ0M7MEJBRU4sOERBQUMzQixrREFBSTtnQkFBQ3dDLElBQUksRUFBQyxPQUFPOzBCQUNoQiw0RUFBQ0ksR0FBQzs4QkFBQyxNQUFJOzs7Ozt5QkFBSTs7Ozs7cUJBQ047Ozs7OzthQUNJLENBQ2I7Q0FDSDtBQWxFSy9CLEtBQUFBLEtBQUs7O0FBK0VYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgbW90aW9uLFxuICB1c2VWaWV3cG9ydFNjcm9sbCxcbiAgdXNlVHJhbnNmb3JtLFxuICB1c2VTcHJpbmcsXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBibG9nSWNvbiB9IGZyb20gXCIuL2Jsb2dJY29uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFyYWxsYXhcIjtcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XG59XG5jb25zdCBJbmRleCA9ICh7IHBvc3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgICB7LyogY3JlYXRlIGEgc2VjdGlvbiB3aGVyZSB0aGVyZSBpcyBvbmx5IHRleHQgaW4gdGhlIGNlbnRlciAqL31cbiAgICAgIDxQYXJhbGxheCBvZmZzZXQ9ezEwMH0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGgtc2NyZWVuIGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1zbGF0ZS03MDAgb3BhY2l0eS01MFwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e3sgcm90YXRlOiAzNjAgfX0gbGF5b3V0PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgQ29udGVudCBUaXRsZSAjMVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8aDE+V2VsY29tZSB0byBhIGJsb2chPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcG9zdHMubWFwKFxuICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxuICAgICAgICAgICAgICBzbHVnICYmXG4gICAgICAgICAgICAgIG1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNsdWcpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2dJY29uIGdyb3VwIG14LWF1dG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtc20gb3V0bGluZS1zbGF0ZS0yMDAgb3V0bGluZS0yXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvW3NsdWddXCJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxwPntuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVhZEFydGljbGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdC9bc2x1Z11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0ZXh0LWJsdWUtNTAwIGZvbnQtU29yYSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdGVzdFwiPlxuICAgICAgICA8YT5UZXN0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY2xpZW50IiwibW90aW9uIiwidXNlVmlld3BvcnRTY3JvbGwiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTcHJpbmciLCJibG9nSWNvbiIsIkltYWdlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUGFyYWxsYXgiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsIkluZGV4IiwicG9zdHMiLCJkaXYiLCJleGl0Iiwib3BhY2l0eSIsIm9mZnNldCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJhbmltYXRlIiwicm90YXRlIiwibGF5b3V0IiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiaW1nIiwic3JjIiwidXJsIiwiaHJlZiIsImFzIiwiY3VycmVudCIsInBhc3NIcmVmIiwiYSIsInAiLCJEYXRlIiwidG9EYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});