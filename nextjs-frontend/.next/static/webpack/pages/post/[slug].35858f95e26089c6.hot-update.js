"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, mainImage = post.mainImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    console.log(urlFor(mainImage));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \" bg-slate-100 relative\",\n        exit: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 4\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"w-screen bg-slate-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imgBG\",\n                    style: {\n                        backgroundImage: urlFor(mainImage).url()\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2 w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).url(),\n                                alt: \"\".concat(name, \"'s picture\"),\n                                height: \"100\",\n                                className: \"h-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-6 sm:mx-12 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"py-2 text-xl font-medium\",\n                                    children: [\n                                        \"By \",\n                                        name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this),\n                                categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Posted in\",\n                                        categories.map(function(category) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: category\n                                            }, category, false, {\n                                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                                lineNumber: 73,\n                                                columnNumber: 19\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, _this),\n                                authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"outline-6 outline-black outline-offest-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: urlFor(authorImage).width(250).height(250).url(),\n                                        alt: \"\".concat(name, \"'s picture\"),\n                                        className: \"rounded-full bg-white outline-slate-100 outline-8\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_7__.PortableText, {\n                            value: body,\n                            components: ptComponents\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nPost.getLayout = function getLayout(Post1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NestedLayout, {\n                children: Post1\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 128,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 127,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjs7Ozs7Z0JBQzVCOzs7OztZQUNMLENBQ047Q0FDSCxDQUFDOztBQUNGLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KFwibWF4XCIpLmF1dG8oXCJmb3JtYXRcIil9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxuICAgIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiLFxuICAgIGNhdGVnb3JpZXMsXG4gICAgYXV0aG9ySW1hZ2UsXG4gICAgbWFpbkltYWdlLFxuICAgIGJvZHkgPSBbXSxcbiAgfSA9IHBvc3Q7XG4gIGNvbnNvbGUubG9nKHVybEZvcihtYWluSW1hZ2UpKTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiIGJnLXNsYXRlLTEwMCByZWxhdGl2ZVwiXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogNCB9fVxuICAgID5cbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInctc2NyZWVuIGJnLXNsYXRlLTIwMFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQkdcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogdXJsRm9yKG1haW5JbWFnZSkudXJsKCkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nSGVhZGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAge21haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLnVybCgpfVxuICAgICAgICAgICAgICAgIGFsdD17YCR7bmFtZX0ncyBwaWN0dXJlYH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0b1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02IHNtOm14LTEyIFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0yIHRleHQteGwgZm9udC1tZWRpdW1cIj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0bGluZS02IG91dGxpbmUtYmxhY2sgb3V0bGluZS1vZmZlc3QtNFwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCgyNTApLmhlaWdodCgyNTApLnVybCgpfVxuICAgICAgICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLXdoaXRlIG91dGxpbmUtc2xhdGUtMTAwIG91dGxpbmUtOFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIG1haW5JbWFnZSxcblxuICBib2R5XG59YDtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuUG9zdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQoUG9zdCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxOZXN0ZWRMYXlvdXQ+e1Bvc3R9PC9OZXN0ZWRMYXlvdXQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsIlBvcnRhYmxlVGV4dCIsImNsaWVudCIsIkxheW91dCIsIm1vdGlvbiIsIkxpbmsiLCJJbWFnZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXJ0aWNsZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwiaDEiLCJzcGFuIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImNvbXBvbmVudHMiLCJnZXRMYXlvdXQiLCJOZXN0ZWRMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});