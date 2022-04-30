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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, mainImage = post.mainImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    console.log(urlFor(mainImage));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        className: \" bg-slate-100 relative\",\n        exit: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 4\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"p-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imgBG\",\n                    style: {\n                        backgroundImage: urlFor(mainImage).url()\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).url(),\n                                alt: \"\".concat(name, \"'s picture\")\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-6 sm:mx-12 pb-40\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"py-2 text-xl font-medium\",\n                            children: [\n                                \"By \",\n                                name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, _this),\n                        categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"Posted in\",\n                                categories.map(function(category) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: category\n                                    }, category, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, _this1);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, _this),\n                        authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(authorImage).width(500).height(500).url(),\n                                alt: \"\".concat(name, \"'s picture\")\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_7__.PortableText, {\n                            value: body,\n                            components: ptComponents\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this);\n};\n_c = Post;\nPost.getLayout = function getLayout(Post1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NestedLayout, {\n                children: Post1\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLDBCQUEwQjs7Z0NBQUMsS0FBRztnQ0FBQ1IsSUFBSTs7Ozs7O2lDQUFRO3dCQUMxREMsVUFBVSxrQkFDVCw4REFBQ2tCLE1BQUk7O2dDQUFDLFdBRUo7Z0NBQUNsQixVQUFVLENBQUNtQixHQUFHLENBQUMsU0FBQ0MsUUFBUTt5REFDdkIsOERBQUNDLElBQUU7a0RBQWlCRCxRQUFRO3VDQUFuQkEsUUFBUTs7Ozs4Q0FBaUI7aUNBQ25DLENBQUM7Ozs7OztpQ0FDRzt3QkFFUm5CLFdBQVcsa0JBQ1YsOERBQUNLLEtBQUc7c0NBQ0YsNEVBQUNsQixLQUFHO2dDQUNGRyxHQUFHLEVBQUVYLE1BQU0sQ0FBQ3FCLFdBQVcsQ0FBQyxDQUFDVCxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ3VCLEdBQUcsRUFBRTtnQ0FDckQzQixHQUFHLEVBQUUsRUFBQyxDQUFPLE1BQVUsQ0FBZlUsSUFBSSxFQUFDLFlBQVUsQ0FBQzs7Ozs7cUNBQ3hCOzs7OztpQ0FDRTtzQ0FFUiw4REFBQ3pCLDZEQUFZOzRCQUFDVyxLQUFLLEVBQUVrQixJQUFJOzRCQUFFbUIsVUFBVSxFQUFFdkMsWUFBWTs7Ozs7aUNBQUk7Ozs7Ozt5QkFDbkQ7Ozs7OztpQkFDRTs7Ozs7YUFDQyxDQUNiO0NBQ0g7QUFwREthLEtBQUFBLElBQUk7QUFvRlZBLElBQUksQ0FBQzJCLFNBQVMsR0FBRyxTQUFTQSxTQUFTLENBQUMzQixLQUFJLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQ3ZCLDRFQUFDL0IsMERBQU07c0JBQ0wsNEVBQUNnRCxZQUFZOzBCQUFFNUIsS0FBSTs7Ozs7b0JBQWdCOzs7OztnQkFDNUI7Ozs7O1lBQ0wsQ0FDTjtDQUNILENBQUM7O0FBQ0YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuXG5jb25zdCBwdENvbXBvbmVudHMgPSB7XG4gIHR5cGVzOiB7XG4gICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbiAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8IFwiIFwifVxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBhdXRob3JJbWFnZSxcbiAgICBtYWluSW1hZ2UsXG4gICAgYm9keSA9IFtdLFxuICB9ID0gcG9zdDtcbiAgY29uc29sZS5sb2codXJsRm9yKG1haW5JbWFnZSkpO1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBjbGFzc05hbWU9XCIgYmctc2xhdGUtMTAwIHJlbGF0aXZlXCJcbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiA0IH19XG4gICAgPlxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbWdCR1wiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiB1cmxGb3IobWFpbkltYWdlKS51cmwoKSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImJsb2dIZWFkZXJcIj57dGl0bGV9PC9oMT5cbiAgICAgICAgICB7bWFpbkltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX0gYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNiBzbTpteC0xMiBwYi00MFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTIgdGV4dC14bCBmb250LW1lZGl1bVwiPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSkud2lkdGgoNTAwKS5oZWlnaHQoNTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9J3MgcGljdHVyZWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e2JvZHl9IGNvbXBvbmVudHM9e3B0Q29tcG9uZW50c30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FydGljbGU+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlLFxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXG4gIG1haW5JbWFnZSxcblxuICBib2R5XG59YDtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMubWFwKChzbHVnKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXM7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnksIHsgc2x1ZyB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICB9LFxuICB9O1xufVxuUG9zdC5nZXRMYXlvdXQgPSBmdW5jdGlvbiBnZXRMYXlvdXQoUG9zdCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxOZXN0ZWRMYXlvdXQ+e1Bvc3R9PC9OZXN0ZWRMYXlvdXQ+XG4gICAgICA8L0xheW91dD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsIlBvcnRhYmxlVGV4dCIsImNsaWVudCIsIkxheW91dCIsIm1vdGlvbiIsIkxpbmsiLCJJbWFnZSIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXJ0aWNsZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwiaDEiLCJzcGFuIiwibWFwIiwiY2F0ZWdvcnkiLCJsaSIsImNvbXBvbmVudHMiLCJnZXRMYXlvdXQiLCJOZXN0ZWRMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});