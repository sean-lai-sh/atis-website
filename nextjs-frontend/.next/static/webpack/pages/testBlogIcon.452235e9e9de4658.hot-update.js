"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/testBlogIcon",{

/***/ "./pages/testBlogIcon.js":
/*!*******************************!*\
  !*** ./pages/testBlogIcon.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar testBlogIcon = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" grid container relative\",\n        children: posts.length > 0 && posts.map(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                whileHover: {\n                    scale: 1.1\n                },\n                onClick: function() {\n                    console.log(slug);\n                },\n                className: \"blogIcon group md:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(mainImage).url(),\n                        className: \" rounded-sm outline-slate-200 w-screen h-40 outline-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/post/[slug]\",\n                        as: \"/post/\".concat(slug.current),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this1),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: new Date(publishedAt).toDateString()\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            whileHover: {\n                                scale: 1.05\n                            },\n                            className: \"group readArticle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"group-hover:opacity-100 text-blue-500 font-Sora font-medium\",\n                                    children: [\n                                        \"Read Article\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 44,\n                            columnNumber: 19\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, _this1)\n                ]\n            }, _id, true, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                lineNumber: 27,\n                columnNumber: 15\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (testBlogIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QmxvZ0ljb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFFRTtBQU1SO0FBQ2U7QUFDUDtBQUNpQjtBQUNGO0FBQ3NCOztBQUNwRSxTQUFTVyxNQUFNLENBQUNDLE1BQU0sRUFBRTtJQUN0QixPQUFPSix3REFBZSxDQUFDUCwrQ0FBTSxDQUFDLENBQUNZLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUM7Q0FDOUM7QUFDRCxJQUFNRSxZQUFZLEdBQUcsaUJBQWU7UUFBWkMsS0FBSyxVQUFMQSxLQUFLOzs7SUFDM0IsSUFBMEJMLEdBQXFCLEdBQXJCQSwyRUFBbUIsRUFBRSxFQUF2Q00sS0FBSyxHQUFhTixHQUFxQixDQUF2Q00sS0FBSyxFQUFFQyxNQUFNLEdBQUtQLEdBQXFCLENBQWhDTyxNQUFNO0lBQ3JCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywwQkFBMEI7a0JBQ3RDSixLQUFLLENBQUNLLE1BQU0sR0FBRyxDQUFDLElBQ2ZMLEtBQUssQ0FBQ00sR0FBRyxDQUNQO2dCQUFHQyxHQUFHLFNBQUhBLEdBQUcsaUJBQUVDLEtBQUssRUFBTEEsS0FBSyx1QkFBRyxFQUFFLHlCQUFFQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsRUFBRSwrQkFBRUMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLEVBQUUsaUJBQUVDLFNBQVMsU0FBVEEsU0FBUzttQkFDeERGLElBQUksSUFDSkUsU0FBUyxrQkFDUCw4REFBQ3hCLHFEQUFVO2dCQUVUeUIsVUFBVSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsR0FBRztpQkFBRTtnQkFDMUJDLE9BQU8sRUFBRSxXQUFNO29CQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDLENBQUM7aUJBQ25CO2dCQUNETCxTQUFTLEVBQUMsMkJBQTJCOztrQ0FFckMsOERBQUNhLEtBQUc7d0JBQ0ZDLEdBQUcsRUFBRXRCLE1BQU0sQ0FBQ2UsU0FBUyxDQUFDLENBQUNRLEdBQUcsRUFBRTt3QkFDNUJmLFNBQVMsRUFBQyx1REFBdUQ7Ozs7OzhCQUNqRTtrQ0FDRiw4REFBQ25CLGtEQUFJO3dCQUFDbUMsSUFBSSxFQUFDLGNBQWM7d0JBQUNDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYlosSUFBSSxDQUFDYSxPQUFPLENBQUU7d0JBQUVDLFFBQVE7a0NBQzdELDRFQUFDQyxHQUFDO3NDQUFFaEIsS0FBSzs7Ozs7a0NBQUs7Ozs7OzhCQUNUO29CQUFDLEdBQUc7a0NBQ1gsOERBQUNpQixHQUFDO2tDQUFFLElBQUlDLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQyxDQUFDaUIsWUFBWSxFQUFFOzs7Ozs4QkFBSztrQ0FDN0MsOERBQUN4QixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsRUFBRTtrQ0FDZiw0RUFBQ2pCLHFEQUFVOzRCQUNUeUIsVUFBVSxFQUFFO2dDQUFFQyxLQUFLLEVBQUUsSUFBSTs2QkFBRTs0QkFDM0JULFNBQVMsRUFBQyxtQkFBbUI7c0NBRTdCLDRFQUFDbkIsa0RBQUk7Z0NBQ0htQyxJQUFJLEVBQUMsY0FBYztnQ0FDbkJDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYlosSUFBSSxDQUFDYSxPQUFPLENBQUU7Z0NBQzNCQyxRQUFROzBDQUVSLDRFQUFDQyxHQUFDO29DQUFDcEIsU0FBUyxFQUFDLDZEQUE2RDs7d0NBQUMsY0FDN0Q7d0NBQUMsR0FBRzs7Ozs7OzBDQUNkOzs7OztzQ0FDQzs7Ozs7a0NBQ0k7Ozs7OzhCQUNUOztlQTlCREcsR0FBRzs7OztzQkErQkc7U0FDZCxDQUNKOzs7OzthQUNDLENBQ047Q0FDSDtHQTlDS1IsWUFBWTs7UUFDVUosdUVBQW1COzs7O0FBNEQvQywrREFBZUksWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RCbG9nSWNvbi5qcz9hNWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB7XG4gIG1vdGlvbixcbiAgdXNlVmlld3BvcnRTY3JvbGwsXG4gIHVzZVRyYW5zZm9ybSxcbiAgdXNlU3ByaW5nLFxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgYmxvZ0ljb24gfSBmcm9tIFwiLi9ibG9nSWNvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xuaW1wb3J0IFBhcmFsbGF4IGZyb20gXCIuLi9jb21wb25lbnRzL1BhcmFsbGF4XCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2VXaW5kb3dEaW1lbnNpb25zXCI7XG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuY29uc3QgdGVzdEJsb2dJY29uID0gKHsgcG9zdHMgfSkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncmlkIGNvbnRhaW5lciByZWxhdGl2ZVwiPlxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgcG9zdHMubWFwKFxuICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgcHVibGlzaGVkQXQgPSBcIlwiLCBtYWluSW1hZ2UgfSkgPT5cbiAgICAgICAgICAgIHNsdWcgJiZcbiAgICAgICAgICAgIG1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAga2V5PXtfaWR9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2x1Zyk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9nSWNvbiBncm91cCBtZDpteC1hdXRvXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkudXJsKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgcm91bmRlZC1zbSBvdXRsaW5lLXNsYXRlLTIwMCB3LXNjcmVlbiBoLTQwIG91dGxpbmUtMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICA8cD57bmV3IERhdGUocHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wNSB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWFkQXJ0aWNsZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wb3N0L1tzbHVnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfVxuICAgICAgICAgICAgICAgICAgICAgIHBhc3NIcmVmXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0ZXh0LWJsdWUtNTAwIGZvbnQtU29yYSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCBBcnRpY2xle1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuLy8gZnVuY3Rpb24gY3JlYXRlTWF4TGlzdFZpZXcoKSB7XG4vLyAgIHJldHVybiAxO1xuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgY2xpZW50LmZldGNoKGdyb3FgXG4gICAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxuICAgICAgYCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzLFxuICAgIH0sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCB0ZXN0QmxvZ0ljb247XG4iXSwibmFtZXMiOlsiTGluayIsImNsaWVudCIsIm1vdGlvbiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlU3ByaW5nIiwiYmxvZ0ljb24iLCJJbWFnZSIsImltYWdlVXJsQnVpbGRlciIsIlBhcmFsbGF4IiwidXNlV2luZG93RGltZW5zaW9ucyIsInVybEZvciIsInNvdXJjZSIsImltYWdlIiwidGVzdEJsb2dJY29uIiwicG9zdHMiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibWFpbkltYWdlIiwid2hpbGVIb3ZlciIsInNjYWxlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJpbWciLCJzcmMiLCJ1cmwiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwicGFzc0hyZWYiLCJhIiwicCIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});