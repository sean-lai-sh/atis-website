"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent */ \"./components/HeaderComponent.js\");\n/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterComponent */ \"./components/FooterComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"default\"), mouseState = ref[0], setMouseState = ref[1];\n    var mouseVariants = {\n        default: {\n            scale: 0\n        },\n        clicked: {\n            scale: 0.9,\n            transition: {\n                duration: 0.2,\n                ease: \"easeInOut\"\n            }\n        },\n        hovering: {\n            scale: [\n                0.9,\n                1\n            ]\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_4__.Cursor, {\n                innerVariants: mouseVariants,\n                innercursorVariants: mouseState\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, children.route, true, {\n        fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Layout, \"k6fh490nmtMLF4gqpb9qS3Pbpp0=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ0E7QUFDUTtBQUNaO0FBQ1g7QUFDYTs7QUFDL0IsU0FBU08sTUFBTSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ3ZDLElBQW9DSCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQyxTQUFTLENBQUMsRUFQekQsVUFPbUIsR0FBbUJBLEdBQW1CLEdBQXRDLEVBUG5CLGFBT2tDLEdBQUlBLEdBQW1CLEdBQXZCO0lBQ2hDLElBQU1NLGFBQWEsR0FBRztRQUNwQkMsT0FBTyxFQUFFO1lBQ1BDLEtBQUssRUFBRSxDQUFDO1NBRVQ7UUFDREMsT0FBTyxFQUFDO1lBQ05ELEtBQUssRUFBRSxHQUFHO1lBQ1ZFLFVBQVUsRUFBRTtnQkFDVkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2JDLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBQ0Y7UUFDREMsUUFBUSxFQUFHO1lBQ1RMLEtBQUssRUFBRTtBQUFDLG1CQUFHO0FBQUMsaUJBQUM7YUFBQztTQUNmO0tBQ0Y7SUFDRCxxQkFDRSw4REFBQ00sS0FBRztRQUFDQyxTQUFTLEVBQUMsS0FBSzs7MEJBQ2xCLDhEQUFDZCxzREFBTTtnQkFBQ2UsYUFBYSxFQUFFVixhQUFhO2dCQUFFVyxtQkFBbUIsRUFBRWIsVUFBVTs7Ozs7b0JBQUc7MEJBQ3hFLDhEQUFDVCx3REFBZTs7OztvQkFBRzswQkFFZiw4REFBQ3VCLE1BQUk7Z0JBQUNILFNBQVMsRUFBQyxFQUFFOzBCQUFFWixRQUFROzs7OztvQkFBUTswQkFFeEMsOERBQUNQLHdEQUFlOzs7O29CQUFHOztPQU5LTyxRQUFRLENBQUNnQixLQUFLOzs7O1lBT2xDLENBQ047Q0FDSDtHQTVCdUJqQixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL0hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9Gb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IExheW91dEdyb3VwIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXJzb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW21vdXNlU3RhdGUsIHNldE1vdXNlU3RhdGVdID0gdXNlU3RhdGUoJ2RlZmF1bHQnKTtcbiAgY29uc3QgbW91c2VWYXJpYW50cyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIFxuICAgIH0sXG4gICAgY2xpY2tlZDp7XG4gICAgICBzY2FsZTogMC45LFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBob3ZlcmluZyA6IHtcbiAgICAgIHNjYWxlOiBbMC45LDFdLFxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCIga2V5PXtjaGlsZHJlbi5yb3V0ZX0+XG4gICAgICA8Q3Vyc29yIGlubmVyVmFyaWFudHM9e21vdXNlVmFyaWFudHN9IGlubmVyY3Vyc29yVmFyaWFudHM9e21vdXNlU3RhdGV9Lz5cbiAgICAgIDxIZWFkZXJDb21wb25lbnQgLz5cblxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPntjaGlsZHJlbn08L21haW4+XG4gICAgICBcbiAgICAgIDxGb290ZXJDb21wb25lbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXJDb21wb25lbnQiLCJGb290ZXJDb21wb25lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJMYXlvdXRHcm91cCIsInVzZVN0YXRlIiwiQ3Vyc29yIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJtb3VzZVN0YXRlIiwic2V0TW91c2VTdGF0ZSIsIm1vdXNlVmFyaWFudHMiLCJkZWZhdWx0Iiwic2NhbGUiLCJjbGlja2VkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImhvdmVyaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5uZXJWYXJpYW50cyIsImlubmVyY3Vyc29yVmFyaWFudHMiLCJtYWluIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});