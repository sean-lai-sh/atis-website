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

/***/ "./pages/blogIcon.js":
/*!***************************!*\
  !*** ./pages/blogIcon.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blogIcon\": function() { return /* binding */ blogIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\nfunction urlFor(source) {\n    return imageUrlBuilder(client).image(source);\n}\nfunction blogIcon(param) {\n    var posts = param.posts;\n    var _posts = this.posts, _id = _posts._id, title = _posts.title, slug = _posts.slug, mainImage = _posts.mainImage, body = _posts.body, author = _posts.author, categories = _posts.categories;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-slate-100 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                    className: \"w-screen bg-slate-500\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: urlFor(mainImage).height(200).width(200).url()\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"blogHeader\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: new Date(publishedAt).toDateString()\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 23,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2 w-full\"\n                        }, void 0, false, {\n                            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/website/nextjs-frontend/pages/blogIcon.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nSWNvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1QztBQUNTO0FBQ0o7QUFDYjtBQUUvQixTQUFTSSxNQUFNLENBQUNDLE1BQU0sRUFBRTtJQUN0QixPQUFPQyxlQUFlLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFDO0NBQzlDO0FBQ00sU0FBU0ksUUFBUSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDOUIsSUFBa0UsTUFBVSxHQUFWLElBQUksQ0FBQ0EsS0FBSyxFQUFwRUMsR0FBRyxHQUF1RCxNQUFVLENBQXBFQSxHQUFHLEVBQUVDLEtBQUssR0FBZ0QsTUFBVSxDQUEvREEsS0FBSyxFQUFFQyxJQUFJLEdBQTBDLE1BQVUsQ0FBeERBLElBQUksRUFBRUMsU0FBUyxHQUErQixNQUFVLENBQWxEQSxTQUFTLEVBQUVDLElBQUksR0FBeUIsTUFBVSxDQUF2Q0EsSUFBSSxFQUFFQyxNQUFNLEdBQWlCLE1BQVUsQ0FBakNBLE1BQU0sRUFBRUMsVUFBVSxHQUFLLE1BQVUsQ0FBekJBLFVBQVU7SUFDN0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFVBQVU7a0JBQ3ZCLDRFQUFDbkIscURBQVU7WUFDVG9CLE9BQU8sRUFBRTtnQkFBRUMsT0FBTyxFQUFFLENBQUM7YUFBRTtZQUN2QkMsT0FBTyxFQUFFO2dCQUFFRCxPQUFPLEVBQUUsQ0FBQzthQUFFO1lBQ3ZCRSxJQUFJLEVBQUU7Z0JBQUVGLE9BQU8sRUFBRSxDQUFDO2FBQUU7WUFDcEJHLFVBQVUsRUFBRTtnQkFBRUMsUUFBUSxFQUFFLEdBQUc7YUFBRTtzQkFFN0IsNEVBQUNQLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1QkFBdUI7MEJBQ3BDLDRFQUFDTyxTQUFPO29CQUFDUCxTQUFTLEVBQUMsdUJBQXVCOztzQ0FDeEMsOERBQUNoQixtREFBSzs0QkFBQ3dCLEdBQUcsRUFBRXZCLE1BQU0sQ0FBQ1UsU0FBUyxDQUFDLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUU7Ozs7O2dDQUFJO3NDQUM5RCw4REFBQ0MsSUFBRTs0QkFBQ1osU0FBUyxFQUFDLFlBQVk7c0NBQUVQLEtBQUs7Ozs7O2dDQUFNO3NDQUN2Qyw4REFBQ29CLEdBQUM7c0NBQUUsSUFBSUMsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQ0MsWUFBWSxFQUFFOzs7OztnQ0FBSztzQ0FDN0MsOERBQUNqQixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsYUFBYTs7Ozs7Z0NBQU87Ozs7Ozt3QkFDM0I7Ozs7O29CQUNOOzs7OztnQkFDSzs7Ozs7WUFDVCxDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ0ljb24uanM/MDA2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IExheW91dEdyb3VwIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJsb2dJY29uKHsgcG9zdHMgfSkge1xuICBjb25zdCB7IF9pZCwgdGl0bGUsIHNsdWcsIG1haW5JbWFnZSwgYm9keSwgYXV0aG9yLCBjYXRlZ29yaWVzIH0gPSB0aGlzLnBvc3RzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXNsYXRlLTEwMCByZWxhdGl2ZVwiPlxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInctc2NyZWVuIGJnLXNsYXRlLTUwMFwiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17dXJsRm9yKG1haW5JbWFnZSkuaGVpZ2h0KDIwMCkud2lkdGgoMjAwKS51cmwoKX0gLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nSGVhZGVyXCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cD57bmV3IERhdGUocHVibGlzaGVkQXQpLnRvRGF0ZVN0cmluZygpfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiB3LWZ1bGxcIj48L2Rpdj5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkxheW91dEdyb3VwIiwiSW1hZ2UiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWFnZVVybEJ1aWxkZXIiLCJjbGllbnQiLCJpbWFnZSIsImJsb2dJY29uIiwicG9zdHMiLCJfaWQiLCJ0aXRsZSIsInNsdWciLCJtYWluSW1hZ2UiLCJib2R5IiwiYXV0aG9yIiwiY2F0ZWdvcmllcyIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhcnRpY2xlIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1cmwiLCJoMSIsInAiLCJEYXRlIiwicHVibGlzaGVkQXQiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogIcon.js\n");

/***/ })

});