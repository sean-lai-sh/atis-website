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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, mainImage = post.mainImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    console.log(mainImage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \" bg-slate-100 relative\",\n        exit: {\n            opacity: 0\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"p-2 text-5xl font-bold font-Sora antialiased text-center underline underline-offset-2\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this),\n                mainImage != null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    src: urlFor(mainImage)\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 48,\n                    columnNumber: 31\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-6 sm:mx-12 pb-40\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"py-2 text-xl font-medium\",\n                            children: [\n                                \"By \",\n                                name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                \"Posted in\",\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: category\n                                    }, category, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, _this1);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this),\n                        authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(authorImage).width(50).url(),\n                                alt: \"\".concat(name, \"'s picture\")\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_7__.PortableText, {\n                            value: body,\n                            components: ptComponents\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nPost.getLayout = function getLayout(Post1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NestedLayout, {\n                children: Post1\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 106,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUU7Z0NBQ3hDNUIsR0FBRyxFQUFFLEVBQUMsQ0FBTyxNQUFVLENBQWZVLElBQUksRUFBQyxZQUFVLENBQUM7Ozs7O3FDQUN4Qjs7Ozs7aUNBQ0U7c0NBRVIsOERBQUN6Qiw2REFBWTs0QkFBQ1csS0FBSyxFQUFFa0IsSUFBSTs0QkFBRWUsVUFBVSxFQUFFbkMsWUFBWTs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkQ7Ozs7OztpQkFDRTs7Ozs7YUFDQyxDQUNiO0NBQ0g7QUF4Q0thLEtBQUFBLElBQUk7QUF1RVZBLElBQUksQ0FBQ3VCLFNBQVMsR0FBRyxTQUFTQSxTQUFTLENBQUN2QixLQUFJLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQ3ZCLDRFQUFDL0IsMERBQU07c0JBQ0wsNEVBQUM0QyxZQUFZOzBCQUFFeEIsS0FBSTs7Ozs7b0JBQWdCOzs7OztnQkFDNUI7Ozs7O1lBQ0wsQ0FDTjtDQUNILENBQUM7O0FBQ0YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBtYWluSW1hZ2UsXG4gICAgYm9keSA9IFtdLFxuICB9ID0gcG9zdDtcbiAgY29uc29sZS5sb2cobWFpbkltYWdlKTtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCIgYmctc2xhdGUtMTAwIHJlbGF0aXZlXCIgZXhpdD17eyBvcGFjaXR5OiAwIH19PlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgdGV4dC01eGwgZm9udC1ib2xkIGZvbnQtU29yYSBhbnRpYWxpYXNlZCB0ZXh0LWNlbnRlciB1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC0yXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWFpbkltYWdlICE9IG51bGwgJiYgPEltYWdlIHNyYz17dXJsRm9yKG1haW5JbWFnZSl9IC8+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTYgc206bXgtMTIgcGItNDBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0yIHRleHQteGwgZm9udC1tZWRpdW1cIj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTApLnVybCgpfVxuICAgICAgICAgICAgICAgIGFsdD17YCR7bmFtZX0ncyBwaWN0dXJlYH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPFBvcnRhYmxlVGV4dCB2YWx1ZT17Ym9keX0gY29tcG9uZW50cz17cHRDb21wb25lbnRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgJ21haW5JbWFnZSc6IG1haW5JbWFnZS0+aW1hZ2UsXG4gIGJvZHlcbn1gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5Qb3N0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChQb3N0KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE5lc3RlZExheW91dD57UG9zdH08L05lc3RlZExheW91dD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwiTGF5b3V0IiwibW90aW9uIiwiTGluayIsIkltYWdlIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImF1dGhvckltYWdlIiwibWFpbkltYWdlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJleGl0Iiwib3BhY2l0eSIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJ1cmwiLCJjb21wb25lbnRzIiwiZ2V0TGF5b3V0IiwiTmVzdGVkTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});