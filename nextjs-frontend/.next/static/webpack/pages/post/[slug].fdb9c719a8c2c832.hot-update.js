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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @portabletext/react */ \"./node_modules/@portabletext/react/dist/react-portable-text.mjs\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nvar ptComponents = {\n    types: {\n        image: function(param) {\n            var value = param.value;\n            var ref;\n            if (!(value === null || value === void 0 ? void 0 : (ref = value.asset) === null || ref === void 0 ? void 0 : ref._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this);\n        }\n    }\n};\nvar Post = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), height = ref.height, width = ref.width;\n    var _title = post.title, title = _title === void 0 ? \"Missing title\" : _title, _name = post.name, name = _name === void 0 ? \"Missing name\" : _name, categories = post.categories, authorImage = post.authorImage, mainImage = post.mainImage, _body = post.body, body = _body === void 0 ? [] : _body;\n    console.log(urlFor(mainImage));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n        className: \" w-screen bg-slate-200 h-fit bg-fixed bg-center bg-repeat-y top-0 left-0\",\n        exit: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 4\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"imgBG\",\n                    style: {\n                        backgroundImage: urlFor(mainImage).url()\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this),\n                        mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).size(width, 200).url(),\n                                alt: \"\".concat(name, \"'s picture\"),\n                                className: \"\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-6 sm:mx-12 mt-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        \"Posted in\",\n                                        categories.map(function(category) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: category\n                                            }, category, false, {\n                                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, _this1);\n                                        })\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, _this),\n                                authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"outline-6 outline-black outline-offest-4 float-left p-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: urlFor(authorImage).width(250).height(250).url(),\n                                            alt: \"\".concat(name, \"'s picture\"),\n                                            className: \"rounded-full bg-white outline-slate-100 outline-8\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \" text-xl font-medium\",\n                                            children: [\n                                                \"By \",\n                                                name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_8__.PortableText, {\n                            value: body,\n                            components: ptComponents,\n                            className: \"justify-text text-justify font-Arimo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, _this);\n};\n_s(Post, \"XpgRJzjrHc1aRykyQ2CxmQZ+KAU=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Post;\nPost.getLayout = function getLayout(Post1) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NestedLayout, {\n                children: Post1\n            }, void 0, false, {\n                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n                lineNumber: 132,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n            lineNumber: 131,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\post\\\\[slug].js\",\n        lineNumber: 130,\n        columnNumber: 5\n    }, this);\n};\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmpCLHVFQUFtQjs7O0FBRHpDaUIsS0FBQUEsSUFBSTtBQWdHVkEsSUFBSSxDQUFDNEIsU0FBUyxHQUFHLFNBQVNBLFNBQVMsQ0FBQzVCLEtBQUksRUFBRTtJQUN4QyxxQkFDRSw4REFBQ1UsS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtrQkFDdkIsNEVBQUNoQywwREFBTTtzQkFDTCw0RUFBQ2tELFlBQVk7MEJBQUU3QixLQUFJOzs7OztvQkFBZ0I7Ozs7O2dCQUM1Qjs7Ozs7WUFDTCxDQUNOO0NBQ0gsQ0FBQzs7QUFDRiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCB7IFBvcnRhYmxlVGV4dCB9IGZyb20gXCJAcG9ydGFibGV0ZXh0L3JlYWN0XCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgcHRDb21wb25lbnRzID0ge1xyXG4gIHR5cGVzOiB7XHJcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xyXG4gICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgXCIgXCJ9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoXCJtYXhcIikuYXV0byhcImZvcm1hdFwiKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gIGNvbnN0IHtcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIGNhdGVnb3JpZXMsXHJcbiAgICBhdXRob3JJbWFnZSxcclxuICAgIG1haW5JbWFnZSxcclxuICAgIGJvZHkgPSBbXSxcclxuICB9ID0gcG9zdDtcclxuICBjb25zb2xlLmxvZyh1cmxGb3IobWFpbkltYWdlKSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cIiB3LXNjcmVlbiBiZy1zbGF0ZS0yMDAgaC1maXQgIGJnLWZpeGVkIGJnLWNlbnRlciBiZy1yZXBlYXQteSB0b3AtMCBsZWZ0LTBcIlxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XHJcbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDQgfX1cclxuICAgID5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW1nQkdcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiB1cmxGb3IobWFpbkltYWdlKS51cmwoKSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nSGVhZGVyXCI+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICB7bWFpbkltYWdlICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yXCI+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS5zaXplKHdpZHRoLCAyMDApLnVybCgpfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgJHtuYW1lfSdzIHBpY3R1cmVgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC02IHNtOm14LTEyIG10LTNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yaWVzICYmIChcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIFBvc3RlZCBpblxyXG4gICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHthdXRob3JJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRsaW5lLTYgb3V0bGluZS1ibGFjayBvdXRsaW5lLW9mZmVzdC00IGZsb2F0LWxlZnQgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKS53aWR0aCgyNTApLmhlaWdodCgyNTApLnVybCgpfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9J3MgcGljdHVyZWB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBvdXRsaW5lLXNsYXRlLTEwMCBvdXRsaW5lLThcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8UG9ydGFibGVUZXh0XHJcbiAgICAgICAgICAgIHZhbHVlPXtib2R5fVxyXG4gICAgICAgICAgICBjb21wb25lbnRzPXtwdENvbXBvbmVudHN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktdGV4dCB0ZXh0LWp1c3RpZnkgZm9udC1Bcmltb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgbWFpbkltYWdlLFxyXG5cclxuICBib2R5XHJcbn1gO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcclxuICApO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSksXHJcbiAgICBmYWxsYmFjazogdHJ1ZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblBvc3QuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gZ2V0TGF5b3V0KFBvc3QpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxOZXN0ZWRMYXlvdXQ+e1Bvc3R9PC9OZXN0ZWRMYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsIlBvcnRhYmxlVGV4dCIsImNsaWVudCIsIkxheW91dCIsIm1vdGlvbiIsIkxpbmsiLCJJbWFnZSIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInB0Q29tcG9uZW50cyIsInR5cGVzIiwidmFsdWUiLCJhc3NldCIsIl9yZWYiLCJpbWciLCJhbHQiLCJsb2FkaW5nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJmaXQiLCJhdXRvIiwiUG9zdCIsInBvc3QiLCJ0aXRsZSIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYXV0aG9ySW1hZ2UiLCJtYWluSW1hZ2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImV4aXQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImFydGljbGUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInVybCIsImgxIiwic2l6ZSIsInNwYW4iLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiY29tcG9uZW50cyIsImdldExheW91dCIsIk5lc3RlZExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ })

});