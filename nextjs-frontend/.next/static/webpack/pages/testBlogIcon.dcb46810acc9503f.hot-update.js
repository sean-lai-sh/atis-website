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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ testBlogIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar __N_SSG = true;\nfunction testBlogIcon(param1) {\n    var posts = param1.posts;\n    var _this = this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" grid container relative\",\n        children: posts.length > 0 && posts.forEach(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                whileHover: {\n                    scale: 1.1\n                },\n                onClick: function() {\n                    console.log(slug);\n                },\n                className: \"blogIcon group md:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(mainImage).url(),\n                        className: \" rounded-sm outline-slate-200 outline-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/post/[slug]\",\n                        as: \"/post/\".concat(slug.current),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 40,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this),\n                    \" \",\n                    width > 700 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: new Date(publishedAt).toDateString()\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 42,\n                        columnNumber: 33\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            whileHover: {\n                                scale: 1.05\n                            },\n                            className: \"group readArticle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"group-hover:opacity-100 text-blue-500 font-Sora font-medium\",\n                                    children: [\n                                        \"Read Article\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 23\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 44,\n                            columnNumber: 19\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, _id, true, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                lineNumber: 27,\n                columnNumber: 15\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QmxvZ0ljb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFFRTtBQU1SO0FBQ2U7QUFDUDtBQUNpQjtBQUNGO0FBQ3NCOztBQUNwRSxTQUFTVyxNQUFNLENBQUNDLE1BQU0sRUFBRTtJQUN0QixPQUFPSix3REFBZSxDQUFDUCwrQ0FBTSxDQUFDLENBQUNZLEtBQUssQ0FBQ0QsTUFBTSxDQUFDLENBQUM7Q0FDOUM7O0FBQ2MsU0FBU0UsWUFBWSxDQUFDLE1BQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxNQUFTLENBQVBDLEtBQUs7OztJQUMxQyxJQUEwQkwsR0FBcUIsR0FBckJBLDJFQUFtQixFQUFFLEVBQXZDTSxLQUFLLEdBQWFOLEdBQXFCLENBQXZDTSxLQUFLLEVBQUVDLE1BQU0sR0FBS1AsR0FBcUIsQ0FBaENPLE1BQU07SUFDckIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDBCQUEwQjtrQkFDdENKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsSUFDZkwsS0FBSyxDQUFDTSxPQUFPLENBQ1g7Z0JBQUdDLEdBQUcsU0FBSEEsR0FBRyxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUseUJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRSxpQkFBRUMsU0FBUyxTQUFUQSxTQUFTO21CQUN4REYsSUFBSSxJQUNKRSxTQUFTLGtCQUNQLDhEQUFDeEIscURBQVU7Z0JBRVR5QixVQUFVLEVBQUU7b0JBQUVDLEtBQUssRUFBRSxHQUFHO2lCQUFFO2dCQUMxQkMsT0FBTyxFQUFFLFdBQU07b0JBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxJQUFJLENBQUMsQ0FBQztpQkFDbkI7Z0JBQ0RMLFNBQVMsRUFBQywyQkFBMkI7O2tDQUVyQyw4REFBQ2EsS0FBRzt3QkFDRkMsR0FBRyxFQUFFdEIsTUFBTSxDQUFDZSxTQUFTLENBQUMsQ0FBQ1EsR0FBRyxFQUFFO3dCQUM1QmYsU0FBUyxFQUFDLHlDQUF5Qzs7Ozs7NkJBQ25EO2tDQUNGLDhEQUFDbkIsa0RBQUk7d0JBQUNtQyxJQUFJLEVBQUMsY0FBYzt3QkFBQ0MsRUFBRSxFQUFFLFFBQU8sQ0FBZSxPQUFiWixJQUFJLENBQUNhLE9BQU8sQ0FBRTt3QkFBRUMsUUFBUTtrQ0FDN0QsNEVBQUNDLEdBQUM7c0NBQUVoQixLQUFLOzs7OztpQ0FBSzs7Ozs7NkJBQ1Q7b0JBQUMsR0FBRztvQkFDVlAsS0FBSyxHQUFHLEdBQUcsa0JBQUksOERBQUN3QixHQUFDO2tDQUFFLElBQUlDLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQyxDQUFDaUIsWUFBWSxFQUFFOzs7Ozs2QkFBSztrQ0FDN0QsOERBQUN4QixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsRUFBRTtrQ0FDZiw0RUFBQ2pCLHFEQUFVOzRCQUNUeUIsVUFBVSxFQUFFO2dDQUFFQyxLQUFLLEVBQUUsSUFBSTs2QkFBRTs0QkFDM0JULFNBQVMsRUFBQyxtQkFBbUI7c0NBRTdCLDRFQUFDbkIsa0RBQUk7Z0NBQ0htQyxJQUFJLEVBQUMsY0FBYztnQ0FDbkJDLEVBQUUsRUFBRSxRQUFPLENBQWUsT0FBYlosSUFBSSxDQUFDYSxPQUFPLENBQUU7Z0NBQzNCQyxRQUFROzBDQUVSLDRFQUFDQyxHQUFDO29DQUFDcEIsU0FBUyxFQUFDLDZEQUE2RDs7d0NBQUMsY0FDN0Q7d0NBQUMsR0FBRzs7Ozs7O3lDQUNkOzs7OztxQ0FDQzs7Ozs7aUNBQ0k7Ozs7OzZCQUNUOztlQTlCREcsR0FBRzs7OztxQkErQkc7U0FDZCxDQUNKOzs7OztZQUNDLENBQ047Q0FDSDtHQTlDdUJSLFlBQVk7O1FBQ1JKLHVFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0QmxvZ0ljb24uanM/YTVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxuICB1c2VUcmFuc2Zvcm0sXG4gIHVzZVNwcmluZyxcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGJsb2dJY29uIH0gZnJvbSBcIi4vYmxvZ0ljb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJhbGxheFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RCbG9nSWNvbih7IHBvc3RzIH0pIHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZ3JpZCBjb250YWluZXIgcmVsYXRpdmVcIj5cbiAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXG4gICAgICAgIHBvc3RzLmZvckVhY2goXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJlxuICAgICAgICAgICAgbWFpbkltYWdlICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbHVnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2dJY29uIGdyb3VwIG1kOm14LWF1dG9cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLXNtIG91dGxpbmUtc2xhdGUtMjAwIG91dGxpbmUtMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3NsdWcuY3VycmVudH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPnt0aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgICB7d2lkdGggPiA3MDAgJiYgPHA+e25ldyBEYXRlKHB1Ymxpc2hlZEF0KS50b0RhdGVTdHJpbmcoKX08L3A+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlYWRBcnRpY2xlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvW3NsdWddXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9XG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRleHQtYmx1ZS01MDAgZm9udC1Tb3JhIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGllbnQiLCJtb3Rpb24iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsImJsb2dJY29uIiwiSW1hZ2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJQYXJhbGxheCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInRlc3RCbG9nSWNvbiIsInBvc3RzIiwid2lkdGgiLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJmb3JFYWNoIiwiX2lkIiwidGl0bGUiLCJzbHVnIiwicHVibGlzaGVkQXQiLCJtYWluSW1hZ2UiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImltZyIsInNyYyIsInVybCIsImhyZWYiLCJhcyIsImN1cnJlbnQiLCJwYXNzSHJlZiIsImEiLCJwIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});