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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), width = ref.width, height = ref.height;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, mainImage = post.mainImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    console.log(urlFor(mainImage));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        className: \" bg-slate-100 relative\",\n        exit: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 4\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"w-screen bg-slate-200 h-full bg-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imgBG\",\n                    style: {\n                        backgroundImage: urlFor(mainImage).url()\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2 w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).size(width, 200).url(),\n                                alt: \"\".concat(name, \"'s picture\"),\n                                className: \"h-auto\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-6 sm:mx-12\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Posted in\",\n                                        categories.map(function(category) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: category\n                                            }, category, false, {\n                                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, _this),\n                                authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"outline-6 outline-black outline-offest-4 float-left p-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: urlFor(authorImage).width(250).height(250).url(),\n                                            alt: \"\".concat(name, \"'s picture\"),\n                                            className: \"rounded-full bg-white outline-slate-100 outline-8\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \" text-xl font-medium\",\n                                            children: [\n                                                \"By \",\n                                                name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_8__.PortableText, {\n                            value: body,\n                            components: ptComponents,\n                            className: \"justify-text text-justify\"\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Post;\nPost.getLayout = function getLayout(Post1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NestedLayout, {\n                children: Post1\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n            lineNumber: 131,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/post/[slug].js\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JqQix1RUFBbUI7OztBQUR6Q2lCLEtBQUFBLElBQUk7QUFnR1ZBLElBQUksQ0FBQzRCLFNBQVMsR0FBRyxTQUFTQSxTQUFTLENBQUM1QixLQUFJLEVBQUU7SUFDeEMscUJBQ0UsOERBQUNVLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQ3ZCLDRFQUFDaEMsMERBQU07c0JBQ0wsNEVBQUNrRCxZQUFZOzBCQUFFN0IsS0FBSTs7Ozs7b0JBQWdCOzs7OztnQkFDNUI7Ozs7O1lBQ0wsQ0FDTjtDQUNILENBQUM7O0FBQ0YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcz8zNDVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XG5pbXBvcnQgeyBQb3J0YWJsZVRleHQgfSBmcm9tIFwiQHBvcnRhYmxldGV4dC9yZWFjdFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgcHRDb21wb25lbnRzID0ge1xuICB0eXBlczoge1xuICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCBcIiBcIn1cbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KFwibWF4XCIpLmF1dG8oXCJmb3JtYXRcIil9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICBjb25zdCB7XG4gICAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcbiAgICBjYXRlZ29yaWVzLFxuICAgIGF1dGhvckltYWdlLFxuICAgIG1haW5JbWFnZSxcbiAgICBib2R5ID0gW10sXG4gIH0gPSBwb3N0O1xuICBjb25zb2xlLmxvZyh1cmxGb3IobWFpbkltYWdlKSk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT1cIiBiZy1zbGF0ZS0xMDAgcmVsYXRpdmVcIlxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDQgfX1cbiAgICA+XG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ3LXNjcmVlbiBiZy1zbGF0ZS0yMDAgaC1mdWxsIGJnLWNlbnRlclwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQkdcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogdXJsRm9yKG1haW5JbWFnZSkudXJsKCkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nSGVhZGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAge21haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihtYWluSW1hZ2UpLnNpemUod2lkdGgsIDIwMCkudXJsKCl9XG4gICAgICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0b1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02IHNtOm14LTEyXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRsaW5lLTYgb3V0bGluZS1ibGFjayBvdXRsaW5lLW9mZmVzdC00IGZsb2F0LWxlZnQgcC0yXCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpLndpZHRoKDI1MCkuaGVpZ2h0KDI1MCkudXJsKCl9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9J3MgcGljdHVyZWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgb3V0bGluZS1zbGF0ZS0xMDAgb3V0bGluZS04XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+Qnkge25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBvcnRhYmxlVGV4dFxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgICBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LXRleHQgdGV4dC1qdXN0aWZ5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXG4gIFwiYXV0aG9ySW1hZ2VcIjogYXV0aG9yLT5pbWFnZSxcbiAgbWFpbkltYWdlLFxuXG4gIGJvZHlcbn1gO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7IHBhcmFtczogeyBzbHVnIH0gfSkpLFxuICAgIGZhbGxiYWNrOiB0cnVlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtcztcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0LFxuICAgIH0sXG4gIH07XG59XG5Qb3N0LmdldExheW91dCA9IGZ1bmN0aW9uIGdldExheW91dChQb3N0KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE5lc3RlZExheW91dD57UG9zdH08L05lc3RlZExheW91dD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiaW1hZ2VVcmxCdWlsZGVyIiwiUG9ydGFibGVUZXh0IiwiY2xpZW50IiwiTGF5b3V0IiwibW90aW9uIiwiTGluayIsIkltYWdlIiwidXNlV2luZG93RGltZW5zaW9ucyIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwicHRDb21wb25lbnRzIiwidHlwZXMiLCJ2YWx1ZSIsImFzc2V0IiwiX3JlZiIsImltZyIsImFsdCIsImxvYWRpbmciLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImZpdCIsImF1dG8iLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhdXRob3JJbWFnZSIsIm1haW5JbWFnZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZXhpdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXJ0aWNsZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidXJsIiwiaDEiLCJzaXplIiwic3BhbiIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJjb21wb25lbnRzIiwiZ2V0TGF5b3V0IiwiTmVzdGVkTGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});