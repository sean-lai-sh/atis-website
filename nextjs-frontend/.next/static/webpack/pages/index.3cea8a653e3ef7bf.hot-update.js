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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar Index = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                    animate: {\n                        rotate: 360\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl md:text-6xl font-bold tracking-tighter leading-tight\",\n                        children: \"some text stuff\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to a blog!\"\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"content-center flex\",\n                children: posts.length > 0 && posts.map(function(param) {\n                    var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n                    return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                        className: \"bg-slate-100 text-center text-slate-900 p-4 w-60 h-60 rounded-lg m-4 group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: urlFor(mainImage).url(),\n                                className: \" rounded-sm outline-slate-200 outline-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 19\n                            }, _this1),\n                            \" \",\n                            new Date(publishedAt).toDateString(),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 19\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"p-2 bg-slate-200 rounded-lg relative hover:shadow-sm hover:shadow-gray-500 hover:background-opacity-50 group\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/post/[slug]\",\n                                    as: \"/post/\".concat(slug.current),\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"hover:opacity-100\",\n                                        children: \"Read Article \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 23\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 19\n                            }, _this1)\n                        ]\n                    }, _id, true, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/test\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Test\"\n                }, void 0, false, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/index.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBRUU7QUFDUTtBQUNEO0FBQ1A7QUFDaUI7QUFFaEQsU0FBU00sTUFBTSxDQUFDQyxNQUFNLEVBQUU7SUFDdEIsT0FBT0Ysd0RBQWUsQ0FBQ0osK0NBQU0sQ0FBQyxDQUFDTyxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBQ0QsSUFBTUUsS0FBSyxHQUFHLGlCQUFlO1FBQVpDLEtBQUssVUFBTEEsS0FBSzs7SUFDcEIscUJBQ0UsOERBQUNSLHFEQUFVO1FBQUNVLElBQUksRUFBRTtZQUFFQyxPQUFPLEVBQUUsQ0FBQztTQUFFOzswQkFFOUIsOERBQUNDLFNBQU87Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUM5Qiw0RUFBQ2IscURBQVU7b0JBQUNjLE9BQU8sRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7cUJBQUU7OEJBQ2xDLDRFQUFDQyxJQUFFO3dCQUFDSCxTQUFTLEVBQUMsK0RBQStEO2tDQUFDLGlCQUU5RTs7Ozs7NkJBQUs7Ozs7O3lCQUNNOzs7OztxQkFDTDswQkFFViw4REFBQ0csSUFBRTswQkFBQyxvQkFBa0I7Ozs7O3FCQUFLOzBCQUMzQiw4REFBQ0MsSUFBRTtnQkFBQ0osU0FBUyxFQUFDLHFCQUFxQjswQkFDaENMLEtBQUssQ0FBQ1UsTUFBTSxHQUFHLENBQUMsSUFDZlYsS0FBSyxDQUFDVyxHQUFHLENBQ1A7d0JBQUdDLEdBQUcsU0FBSEEsR0FBRyxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUseUJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRSxpQkFBRUMsU0FBUyxTQUFUQSxTQUFTOzJCQUN4REYsSUFBSSxJQUNKRSxTQUFTLGtCQUNQLDhEQUFDeEIscURBQVU7d0JBRVRhLFNBQVMsRUFBQyw0RUFBNEU7OzBDQUV0Riw4REFBQ1ksS0FBRztnQ0FDRkMsR0FBRyxFQUFFdEIsTUFBTSxDQUFDb0IsU0FBUyxDQUFDLENBQUNHLEdBQUcsRUFBRTtnQ0FDNUJkLFNBQVMsRUFBQyx5Q0FBeUM7Ozs7O3NDQUNuRDswQ0FDRiw4REFBQ2Ysa0RBQUk7Z0NBQ0g4QixJQUFJLEVBQUMsY0FBYztnQ0FDbkJDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYlAsSUFBSSxDQUFDUSxPQUFPLENBQUU7Z0NBQzNCQyxRQUFROzBDQUVSLDRFQUFDQyxHQUFDOzhDQUFFWCxLQUFLOzs7OzswQ0FBSzs7Ozs7c0NBQ1Q7NEJBQUMsR0FBRzs0QkFDVixJQUFJWSxJQUFJLENBQUNWLFdBQVcsQ0FBQyxDQUFDVyxZQUFZLEVBQUU7MENBQ3JDLDhEQUFDQyxJQUFFOzs7O3NDQUFHOzBDQUNOLDhEQUFDQyxHQUFDO2dDQUFDdkIsU0FBUyxFQUFDLDhHQUE4RzswQ0FDekgsNEVBQUNmLGtEQUFJO29DQUNIOEIsSUFBSSxFQUFDLGNBQWM7b0NBQ25CQyxFQUFFLEVBQUUsUUFBTyxDQUFlLE9BQWJQLElBQUksQ0FBQ1EsT0FBTyxDQUFFO29DQUMzQkMsUUFBUTs4Q0FFUiw0RUFBQ0MsR0FBQzt3Q0FBQ25CLFNBQVMsRUFBQyxtQkFBbUI7a0RBQUMsZUFBYTs7Ozs7OENBQUk7Ozs7OzBDQUM3Qzs7Ozs7c0NBQ0w7O3VCQXhCQ08sR0FBRzs7Ozs4QkF5Qkc7aUJBQ2QsQ0FDSjs7Ozs7cUJBQ0E7MEJBRUwsOERBQUN0QixrREFBSTtnQkFBQzhCLElBQUksRUFBQyxPQUFPOzBCQUNoQiw0RUFBQ0ksR0FBQzs4QkFBQyxNQUFJOzs7Ozt5QkFBSTs7Ozs7cUJBQ047Ozs7OzthQUNJLENBQ2I7Q0FDSDtBQXZES3pCLEtBQUFBLEtBQUs7O0FBb0VYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uL2NsaWVudFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGJsb2dJY29uIH0gZnJvbSBcIi4vYmxvZ0ljb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcblxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgIHsvKiBjcmVhdGUgYSBzZWN0aW9uIHdoZXJlIHRoZXJlIGlzIG9ubHkgdGV4dCBpbiB0aGUgY2VudGVyICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyByb3RhdGU6IDM2MCB9fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0ZXIgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgc29tZSB0ZXh0IHN0dWZmXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8aDE+V2VsY29tZSB0byBhIGJsb2chPC9oMT5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJjb250ZW50LWNlbnRlciBmbGV4XCI+XG4gICAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgcG9zdHMubWFwKFxuICAgICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxuICAgICAgICAgICAgICBzbHVnICYmXG4gICAgICAgICAgICAgIG1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17X2lkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctc2xhdGUtMTAwIHRleHQtY2VudGVyIHRleHQtc2xhdGUtOTAwIHAtNCB3LTYwIGgtNjAgcm91bmRlZC1sZyBtLTQgZ3JvdXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIHJvdW5kZWQtc20gb3V0bGluZS1zbGF0ZS0yMDAgb3V0bGluZS0yXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvW3NsdWddXCJcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMiBiZy1zbGF0ZS0yMDAgcm91bmRlZC1sZyByZWxhdGl2ZSBob3ZlcjpzaGFkb3ctc20gaG92ZXI6c2hhZG93LWdyYXktNTAwIGhvdmVyOmJhY2tncm91bmQtb3BhY2l0eS01MCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcG9zdC9bc2x1Z11cIlxuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaG92ZXI6b3BhY2l0eS0xMDBcIj5SZWFkIEFydGljbGUgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgIDwvdWw+XG5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdGVzdFwiPlxuICAgICAgICA8YT5UZXN0PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcbiAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY2xpZW50IiwibW90aW9uIiwiYmxvZ0ljb24iLCJJbWFnZSIsImltYWdlVXJsQnVpbGRlciIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwiSW5kZXgiLCJwb3N0cyIsImRpdiIsImV4aXQiLCJvcGFjaXR5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJyb3RhdGUiLCJoMSIsInVsIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzbHVnIiwicHVibGlzaGVkQXQiLCJtYWluSW1hZ2UiLCJpbWciLCJzcmMiLCJ1cmwiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwicGFzc0hyZWYiLCJhIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImJyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});