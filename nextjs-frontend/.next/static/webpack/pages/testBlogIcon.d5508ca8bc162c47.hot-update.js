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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar testBlogIcon = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"container blogGrid content-end justify-between\",\n        children: posts.length > 0 && posts.map(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"flex flex-wrap items-center mt-3 text-sm sm:mt-0 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/blog/[slug]\",\n                    as: \"/blog/\".concat(slug.current),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex flex-wrap items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 lg:w-1/3 xl:w-1/4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    className: \"w-full\",\n                                    src: urlFor(mainImage).url(),\n                                    alt: \"\".concat(title, \"'s picture\")\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 23\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 32,\n                                columnNumber: 21\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full md:w-1/2 lg:w-2/3 xl:w-3/4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-gray-900\",\n                                        children: title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 23\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700\",\n                                        children: publishedAt\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 23\n                                    }, _this1)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                        lineNumber: 31,\n                        columnNumber: 19\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, _this1)\n            }, _id, false, {\n                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                lineNumber: 29,\n                columnNumber: 15\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (testBlogIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QmxvZ0ljb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBRUU7QUFNUjtBQUVRO0FBQ2lCO0FBQ0Y7QUFDc0I7O0FBQ3BFLFNBQVNVLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO0lBQ3RCLE9BQU9KLHdEQUFlLENBQUNOLCtDQUFNLENBQUMsQ0FBQ1csS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBQztDQUM5QztBQUVELElBQU1FLFlBQVksR0FBRyxpQkFBZTtRQUFaQyxLQUFLLFVBQUxBLEtBQUs7OztJQUMzQixJQUEwQkwsR0FBcUIsR0FBckJBLDJFQUFtQixFQUFFLEVBQXZDTSxLQUFLLEdBQWFOLEdBQXFCLENBQXZDTSxLQUFLLEVBQUVDLE1BQU0sR0FBS1AsR0FBcUIsQ0FBaENPLE1BQU07SUFFckIscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLGdEQUFnRDtrQkFDM0RKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsSUFDZkwsS0FBSyxDQUFDTSxHQUFHLENBQ1A7Z0JBQUdDLEdBQUcsU0FBSEEsR0FBRyxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUseUJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRSxpQkFBRUMsU0FBUyxTQUFUQSxTQUFTO21CQUN4REYsSUFBSSxJQUNKRSxTQUFTLGtCQUNQLDhEQUFDQyxJQUFFO2dCQUFDUixTQUFTLEVBQUMsbURBQW1EUzswQkFDL0QsNEVBQUMzQixrREFBSTtvQkFBQzRCLElBQUksRUFBQyxjQUFjO29CQUFDQyxFQUFFLEVBQUUsUUFBTyxDQUFlLE9BQWJOLElBQUksQ0FBQ08sT0FBTyxDQUFFOzhCQUNuRCw0RUFBQ0MsR0FBQzt3QkFBQ2IsU0FBUyxFQUFDLDZCQUE2Qjs7MENBQ3hDLDhEQUFDYyxLQUFHO2dDQUFDZCxTQUFTLEVBQUMsbUNBQW1DOzBDQUNoRCw0RUFBQ1osbURBQUs7b0NBQ0pZLFNBQVMsRUFBQyxRQUFRO29DQUNsQmUsR0FBRyxFQUFFdkIsTUFBTSxDQUFDZSxTQUFTLENBQUMsQ0FBQ1MsR0FBRyxFQUFFO29DQUM1QkMsR0FBRyxFQUFFLEVBQUMsQ0FBUSxNQUFVLENBQWhCYixLQUFLLEVBQUMsWUFBVSxDQUFDOzs7OzswQ0FDekI7Ozs7O3NDQUNFOzBDQUNOLDhEQUFDVSxLQUFHO2dDQUFDZCxTQUFTLEVBQUMsbUNBQW1DOztrREFDaEQsOERBQUNrQixJQUFFO3dDQUFDbEIsU0FBUyxFQUFDLGlDQUFpQztrREFBRUksS0FBSzs7Ozs7OENBQU07a0RBQzVELDhEQUFDZSxHQUFDO3dDQUFDbkIsU0FBUyxFQUFDLGVBQWU7a0RBQUVNLFdBQVc7Ozs7OzhDQUFLOzs7Ozs7c0NBQzFDOzs7Ozs7OEJBQ0o7Ozs7OzBCQUNDO2VBZjZESCxHQUFHOzs7O3NCQWdCcEU7U0FDTixDQUNKOzs7OzthQUNBLENBQ0w7Q0FDSDtHQS9CS1IsWUFBWTs7UUFDVUosdUVBQW1COzs7O0FBMEMvQywrREFBZUksWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RCbG9nSWNvbi5qcz9hNWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VTcHJpbmcsXHJcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFyYWxsYXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IHRlc3RCbG9nSWNvbiA9ICh7IHBvc3RzIH0pID0+IHtcclxuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJjb250YWluZXIgYmxvZ0dyaWQgY29udGVudC1lbmQganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgIHtwb3N0cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgcG9zdHMubWFwKFxyXG4gICAgICAgICAgKHsgX2lkLCB0aXRsZSA9IFwiXCIsIHNsdWcgPSBcIlwiLCBwdWJsaXNoZWRBdCA9IFwiXCIsIG1haW5JbWFnZSB9KSA9PlxyXG4gICAgICAgICAgICBzbHVnICYmXHJcbiAgICAgICAgICAgIG1haW5JbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBtdC0zIHRleHQtc20gc206bXQtMCBcImtleT17X2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZy9bc2x1Z11cIiBhcz17YC9ibG9nLyR7c2x1Zy5jdXJyZW50fWB9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTEvMiBsZzp3LTEvMyB4bDp3LTEvNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkudXJsKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dGl0bGV9J3MgcGljdHVyZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIGxnOnctMi8zIHhsOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPntwdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChncm9xYFxyXG4gICAgICAgICpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgcHVibGlzaGVkQXQgPCBub3coKV0gfCBvcmRlcihwdWJsaXNoZWRBdCBkZXNjKVxyXG4gICAgICBgKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgdGVzdEJsb2dJY29uO1xyXG4iXSwibmFtZXMiOlsiTGluayIsImNsaWVudCIsIm1vdGlvbiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlU3ByaW5nIiwiSW1hZ2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJQYXJhbGxheCIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZSIsInRlc3RCbG9nSWNvbiIsInBvc3RzIiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsImNsYXNzTmFtZSIsImxlbmd0aCIsIm1hcCIsIl9pZCIsInRpdGxlIiwic2x1ZyIsInB1Ymxpc2hlZEF0IiwibWFpbkltYWdlIiwibGkiLCJrZXkiLCJocmVmIiwiYXMiLCJjdXJyZW50IiwiYSIsImRpdiIsInNyYyIsInVybCIsImFsdCIsImgyIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});