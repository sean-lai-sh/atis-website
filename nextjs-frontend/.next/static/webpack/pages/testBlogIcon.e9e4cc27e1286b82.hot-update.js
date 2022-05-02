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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _blogIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blogIcon */ \"./pages/blogIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_7___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar testBlogIcon = function(param2, param1) {\n    var posts = param2.posts, _maxContent = param1.maxContent, maxContent = _maxContent === void 0 ? 10 : _maxContent;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" grid container relative\",\n        children: posts.length > 0 && posts.map(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                whileHover: {\n                    scale: 1.1\n                },\n                onClick: function() {\n                    console.log(slug);\n                },\n                className: \"blogIcon group md:mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: urlFor(mainImage).url(),\n                        className: \" rounded-sm outline-slate-200 w-screen h-40 outline-2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/post/[slug]\",\n                        as: \"/post/\".concat(slug.current),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 42,\n                            columnNumber: 19\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this1),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: new Date(publishedAt).toDateString()\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                            whileHover: {\n                                scale: 1.05\n                            },\n                            className: \"group readArticle\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/post/[slug]\",\n                                as: \"/post/\".concat(slug.current),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"group-hover:opacity-100 text-blue-500 font-Sora font-medium\",\n                                    children: [\n                                        \"Read Article\",\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 23\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                            lineNumber: 46,\n                            columnNumber: 19\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this1)\n                ]\n            }, _id, true, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n                lineNumber: 29,\n                columnNumber: 15\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/testBlogIcon.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\nfunction createMaxListView(param, param3) {\n    var posts = param.posts, _maxContent = param3.maxContent, maxContent = _maxContent === void 0 ? 10 : _maxContent;\n    // Create a lists of posts that are less than or equal to maxContent\n    if (posts.length < maxContent) {\n        return posts;\n    }\n    var maxList = posts.slice(0, maxContent);\n    return maxList;\n}\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (testBlogIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JELG9FQUFvRTtJQUNwRSxJQUFJRCxLQUFLLENBQUNNLE1BQU0sR0FBR0wsVUFBVSxFQUFFO1FBQzdCLE9BQU9ELEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBTThCLE9BQU8sR0FBRzlCLEtBQUssQ0FBQytCLEtBQUssQ0FBQyxDQUFDLEVBQUU5QixVQUFVLENBQUM7SUFDMUMsT0FBTzZCLE9BQU8sQ0FBQztDQUNoQjs7QUFZRCwrREFBZS9CLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90ZXN0QmxvZ0ljb24uanM/YTVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQge1xuICBtb3Rpb24sXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxuICB1c2VUcmFuc2Zvcm0sXG4gIHVzZVNwcmluZyxcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IGJsb2dJY29uIH0gZnJvbSBcIi4vYmxvZ0ljb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcbmltcG9ydCBQYXJhbGxheCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXJhbGxheFwiO1xuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcbn1cblxuY29uc3QgdGVzdEJsb2dJY29uID0gKHsgcG9zdHMgfSwgeyBtYXhDb250ZW50ID0gMTAgfSkgPT4ge1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGdyaWQgY29udGFpbmVyIHJlbGF0aXZlXCI+XG4gICAgICB7cG9zdHMubGVuZ3RoID4gMCAmJlxuICAgICAgICBwb3N0cy5tYXAoXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxuICAgICAgICAgICAgc2x1ZyAmJlxuICAgICAgICAgICAgbWFpbkltYWdlICYmIChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e19pZH1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzbHVnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2dJY29uIGdyb3VwIG1kOm14LWF1dG9cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiByb3VuZGVkLXNtIG91dGxpbmUtc2xhdGUtMjAwIHctc2NyZWVuIGgtNDAgb3V0bGluZS0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIiBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGE+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICAgIDxwPntuZXcgRGF0ZShwdWJsaXNoZWRBdCkudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlYWRBcnRpY2xlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Bvc3QvW3NsdWddXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcz17YC9wb3N0LyR7c2x1Zy5jdXJyZW50fWB9XG4gICAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRleHQtYmx1ZS01MDAgZm9udC1Tb3JhIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFkIEFydGljbGV7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5mdW5jdGlvbiBjcmVhdGVNYXhMaXN0Vmlldyh7IHBvc3RzIH0sIHsgbWF4Q29udGVudCA9IDEwIH0pIHtcbiAgLy8gQ3JlYXRlIGEgbGlzdHMgb2YgcG9zdHMgdGhhdCBhcmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG1heENvbnRlbnRcbiAgaWYgKHBvc3RzLmxlbmd0aCA8IG1heENvbnRlbnQpIHtcbiAgICByZXR1cm4gcG9zdHM7XG4gIH1cbiAgY29uc3QgbWF4TGlzdCA9IHBvc3RzLnNsaWNlKDAsIG1heENvbnRlbnQpO1xuICByZXR1cm4gbWF4TGlzdDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxuICAgICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcbiAgICAgIGApO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgdGVzdEJsb2dJY29uO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGllbnQiLCJtb3Rpb24iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsImJsb2dJY29uIiwiSW1hZ2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJQYXJhbGxheCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInRlc3RCbG9nSWNvbiIsInBvc3RzIiwibWF4Q29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwiX2lkIiwidGl0bGUiLCJzbHVnIiwicHVibGlzaGVkQXQiLCJtYWluSW1hZ2UiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImltZyIsInNyYyIsInVybCIsImhyZWYiLCJhcyIsImN1cnJlbnQiLCJwYXNzSHJlZiIsImEiLCJwIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImNyZWF0ZU1heExpc3RWaWV3IiwibWF4TGlzdCIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});