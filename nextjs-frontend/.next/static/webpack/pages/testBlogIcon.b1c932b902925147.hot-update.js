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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar testBlogIcon = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"container blogGrid content-end justify-between\",\n        children: posts.length > 0 && posts.map(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"blogOutline bg-slate-200 xl:left-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"blogOutline\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/2 lg:w-1/3 xl:w-1/4\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"A Test Image Should appear later:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 30\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-1/2 lg:w-2/3 xl:w-3/4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-medium font-Sora text-gray-900\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 23\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    children: \"Read Article\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 23\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this1)\n            }, _id, false, {\n                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                lineNumber: 30,\n                columnNumber: 15\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (testBlogIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QmxvZ0ljb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBRUU7QUFNUjtBQUVRO0FBQ2lCO0FBQ0Y7QUFDc0I7QUFDN0I7O0FBQ3ZDLFNBQVNVLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFO0lBQ3RCLE9BQU9KLHdEQUFlLENBQUNOLCtDQUFNLENBQUMsQ0FBQ1csS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBQztDQUM5QztBQUVELElBQU1FLFlBQVksR0FBRyxpQkFBZTtRQUFaQyxLQUFLLFVBQUxBLEtBQUs7OztJQUMzQixJQUEwQkwsR0FBcUIsR0FBckJBLDJFQUFtQixFQUFFLEVBQXZDTSxLQUFLLEdBQWFOLEdBQXFCLENBQXZDTSxLQUFLLEVBQUVDLE1BQU0sR0FBS1AsR0FBcUIsQ0FBaENPLE1BQU07SUFFckIscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFDLGdEQUFpRDtrQkFDNURKLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUMsSUFDZkwsS0FBSyxDQUFDTSxHQUFHLENBQ1A7Z0JBQUdDLEdBQUcsU0FBSEEsR0FBRyxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEVBQUUseUJBQUVDLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFLCtCQUFFQyxXQUFXLEVBQVhBLFdBQVcsNkJBQUcsRUFBRSxpQkFBRUMsU0FBUyxTQUFUQSxTQUFTO21CQUN4REYsSUFBSSxJQUNKRSxTQUFTLGtCQUNQLDhEQUFDQyxJQUFFO2dCQUFDUixTQUFTLEVBQUMsc0NBQXNDUzswQkFDbEQsNEVBQUNDLEtBQUc7b0JBQUNWLFNBQVMsRUFBQyxhQUFhOztzQ0FDeEIsOERBQUNVLEtBQUc7NEJBQUNWLFNBQVMsRUFBQyxtQ0FBbUM7O2dDQUsxQyxHQUFDOzhDQUFBLDhEQUFDVyxHQUFDOzhDQUFDLG1DQUFpQzs7Ozs7MENBQUk7Ozs7OztrQ0FDM0M7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNWLFNBQVMsRUFBQyxtQ0FBbUM7OzhDQUNoRCw4REFBQ1ksSUFBRTtvQ0FBQ1osU0FBUyxFQUFDLDZDQUE4Qzs4Q0FBRUksS0FBSzs7Ozs7MENBQU07OENBQ3pFLDhEQUFDUyxHQUFDOzhDQUFDLGNBQVk7Ozs7OzBDQUFJOzs7Ozs7a0NBQ2Y7Ozs7OzswQkFDRjtlQWIrQ1YsR0FBRzs7OztzQkFjdkQ7U0FDTixDQUNKOzs7OzthQUNBLENBQ0w7Q0FDSDtHQTdCS1IsWUFBWTs7UUFDVUosdUVBQW1COzs7O0FBd0MvQywrREFBZUksWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RCbG9nSWNvbi5qcz9hNWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VTcHJpbmcsXHJcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFyYWxsYXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9ibG9ncGFnZS5tb2R1bGUuY3NzJztcclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0QmxvZ0ljb24gPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyICBibG9nR3JpZCBjb250ZW50LWVuZCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAge3Bvc3RzLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICBwb3N0cy5tYXAoXHJcbiAgICAgICAgICAoeyBfaWQsIHRpdGxlID0gXCJcIiwgc2x1ZyA9IFwiXCIsIHB1Ymxpc2hlZEF0ID0gXCJcIiwgbWFpbkltYWdlIH0pID0+XHJcbiAgICAgICAgICAgIHNsdWcgJiZcclxuICAgICAgICAgICAgbWFpbkltYWdlICYmIChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmxvZ091dGxpbmUgYmctc2xhdGUtMjAwIHhsOmxlZnQtMS8yXCJrZXk9e19pZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dPdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0xLzIgbGc6dy0xLzMgeGw6dy0xLzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKG1haW5JbWFnZSkudXJsKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7dGl0bGV9J3MgcGljdHVyZWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPiAqL30gPHA+QSBUZXN0IEltYWdlIFNob3VsZCBhcHBlYXIgbGF0ZXI6PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMS8yIGxnOnctMi8zIHhsOnctMy80XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSAgZm9udC1Tb3JhIHRleHQtZ3JheS05MDBcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhPlJlYWQgQXJ0aWNsZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcclxuICAgICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcclxuICAgICAgYCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RCbG9nSWNvbjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGllbnQiLCJtb3Rpb24iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsIkltYWdlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUGFyYWxsYXgiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJ0ZXN0QmxvZ0ljb24iLCJwb3N0cyIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsImxpIiwia2V5IiwiZGl2IiwicCIsImgyIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});