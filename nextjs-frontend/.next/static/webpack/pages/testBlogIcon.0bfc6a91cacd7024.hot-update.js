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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Parallax */ \"./components/Parallax.js\");\n/* harmony import */ var _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/useWindowDimensions */ \"./components/useWindowDimensions.js\");\n/* harmony import */ var _styles_blogpage_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/blogpage.module.css */ \"./styles/blogpage.module.css\");\n/* harmony import */ var _styles_blogpage_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_blogpage_module_css__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).image(source);\n}\nvar testBlogIcon = function(param1) {\n    var posts = param1.posts;\n    var _this1 = _this;\n    _s();\n    var ref = (0,_components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), width = ref.width, height = ref.height;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"container blogGrid content-end justify-between\",\n        children: posts.length > 0 && posts.map(function(param) {\n            var _id = param._id, _title = param.title, title = _title === void 0 ? \"\" : _title, _slug = param.slug, slug = _slug === void 0 ? \"\" : _slug, _publishedAt = param.publishedAt, publishedAt = _publishedAt === void 0 ? \"\" : _publishedAt, mainImage = param.mainImage;\n            return slug && mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"bg-slate-200 xl:left-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/post/[slug]\",\n                    as: \"/post/\".concat(slug.current),\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"innerBlog\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"articleImg\",\n                                src: urlFor(mainImage).url()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" articleTitle\",\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 36,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" articleTitle date\",\n                                children: \"March 12 2022\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: (_styles_blogpage_module_css__WEBPACK_IMPORTED_MODULE_7___default().goToBlog),\n                                children: \"Read Article\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this1)\n            }, _id, false, {\n                fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n                lineNumber: 30,\n                columnNumber: 15\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\pages\\\\testBlogIcon.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(testBlogIcon, \"hZg34DXQMoj2f5F9O/uvYVrpq/c=\", false, function() {\n    return [\n        _components_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (testBlogIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0QmxvZ0ljb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFFRTtBQU1SO0FBRVE7QUFDaUI7QUFDRjtBQUNzQjtBQUNqQjs7QUFDbkQsU0FBU1csTUFBTSxDQUFDQyxNQUFNLEVBQUU7SUFDdEIsT0FBT0wsd0RBQWUsQ0FBQ04sK0NBQU0sQ0FBQyxDQUFDWSxLQUFLLENBQUNELE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBRUQsSUFBTUUsWUFBWSxHQUFHLGlCQUFlO1FBQVpDLEtBQUssVUFBTEEsS0FBSzs7O0lBQzNCLElBQTBCTixHQUFxQixHQUFyQkEsMkVBQW1CLEVBQUUsRUFBdkNPLEtBQUssR0FBYVAsR0FBcUIsQ0FBdkNPLEtBQUssRUFBRUMsTUFBTSxHQUFLUixHQUFxQixDQUFoQ1EsTUFBTTtJQUVyQixxQkFDRSw4REFBQ0MsSUFBRTtRQUFDQyxTQUFTLEVBQUMsZ0RBQWdEO2tCQUMzREosS0FBSyxDQUFDSyxNQUFNLEdBQUcsQ0FBQyxJQUNmTCxLQUFLLENBQUNNLEdBQUcsQ0FDUDtnQkFBR0MsR0FBRyxTQUFIQSxHQUFHLGlCQUFFQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsRUFBRSx5QkFBRUMsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLEVBQUUsK0JBQUVDLFdBQVcsRUFBWEEsV0FBVyw2QkFBRyxFQUFFLGlCQUFFQyxTQUFTLFNBQVRBLFNBQVM7bUJBQ3hERixJQUFJLElBQ0pFLFNBQVMsa0JBQ1AsOERBQUNDLElBQUU7Z0JBQUNSLFNBQVMsRUFBQywwQkFBMEJTOzBCQUN0Qyw0RUFBQzVCLGtEQUFJO29CQUFDNkIsSUFBSSxFQUFDLGNBQWM7b0JBQ3JCQyxFQUFFLEVBQUUsUUFBTyxDQUFlLE9BQWJOLElBQUksQ0FBQ08sT0FBTyxDQUFFO29CQUMzQkMsUUFBUTs4QkFDWiw0RUFBQ0MsS0FBRzt3QkFBQ2QsU0FBUyxFQUFDLFdBQVc7OzBDQUMxQiw4REFBQ2UsS0FBRztnQ0FBQ2YsU0FBUyxFQUFDLFlBQVk7Z0NBQUNnQixHQUFHLEVBQUV4QixNQUFNLENBQUNlLFNBQVMsQ0FBQyxDQUFDVSxHQUFHLEVBQUU7Ozs7O3NDQUFHOzBDQUMzRCw4REFBQ0MsR0FBQztnQ0FBQ2xCLFNBQVMsRUFBRSxlQUFlOzBDQUFFSSxLQUFLOzs7OztzQ0FBSzswQ0FDekMsOERBQUNjLEdBQUM7Z0NBQUNsQixTQUFTLEVBQUMsb0JBQW9COzBDQUFDLGVBQWE7Ozs7O3NDQUFJOzBDQUNuRCw4REFBQ21CLEdBQUM7Z0NBQUNuQixTQUFTLEVBQUVULDZFQUFlOzBDQUFFLGNBQVk7Ozs7O3NDQUFJOzs7Ozs7OEJBQ3pDOzs7OzswQkFBTztlQVQ4QlksR0FBRzs7OztzQkFVM0M7U0FDTixDQUNKOzs7OzthQUNBLENBQ0w7Q0FDSDtHQXpCS1IsWUFBWTs7UUFDVUwsdUVBQW1COzs7O0FBb0MvQywrREFBZUssWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RCbG9nSWNvbi5qcz9hNWY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XHJcbmltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VTcHJpbmcsXHJcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFyYWxsYXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ibG9ncGFnZS5tb2R1bGUuY3NzJztcclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCB0ZXN0QmxvZ0ljb24gPSAoeyBwb3N0cyB9KSA9PiB7XHJcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFpbmVyIGJsb2dHcmlkIGNvbnRlbnQtZW5kIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICB7cG9zdHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHBvc3RzLm1hcChcclxuICAgICAgICAgICh7IF9pZCwgdGl0bGUgPSBcIlwiLCBzbHVnID0gXCJcIiwgcHVibGlzaGVkQXQgPSBcIlwiLCBtYWluSW1hZ2UgfSkgPT5cclxuICAgICAgICAgICAgc2x1ZyAmJlxyXG4gICAgICAgICAgICBtYWluSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy1zbGF0ZS0yMDAgeGw6bGVmdC0xLzJcImtleT17X2lkfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9bc2x1Z11cIlxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgL3Bvc3QvJHtzbHVnLmN1cnJlbnR9YH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbm5lckJsb2cnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnRpY2xlSW1nXCIgc3JjPXt1cmxGb3IobWFpbkltYWdlKS51cmwoKX0vPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSBcIiBhcnRpY2xlVGl0bGVcIj57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiIGFydGljbGVUaXRsZSBkYXRlXCI+TWFyY2ggMTIgMjAyMjwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmdvVG9CbG9nfT5SZWFkIEFydGljbGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj48L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goZ3JvcWBcclxuICAgICAgICAqW190eXBlID09IFwicG9zdFwiICYmIHB1Ymxpc2hlZEF0IDwgbm93KCldIHwgb3JkZXIocHVibGlzaGVkQXQgZGVzYylcclxuICAgICAgYCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHRlc3RCbG9nSWNvbjtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJjbGllbnQiLCJtb3Rpb24iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVRyYW5zZm9ybSIsInVzZVNwcmluZyIsIkltYWdlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiUGFyYWxsYXgiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwic3R5bGVzIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJ0ZXN0QmxvZ0ljb24iLCJwb3N0cyIsIndpZHRoIiwiaGVpZ2h0IiwidWwiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJwdWJsaXNoZWRBdCIsIm1haW5JbWFnZSIsImxpIiwia2V5IiwiaHJlZiIsImFzIiwiY3VycmVudCIsInBhc3NIcmVmIiwiZGl2IiwiaW1nIiwic3JjIiwidXJsIiwicCIsImEiLCJnb1RvQmxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/testBlogIcon.js\n");

/***/ })

});