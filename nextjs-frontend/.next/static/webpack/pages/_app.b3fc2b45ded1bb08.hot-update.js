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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HeaderComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponent */ \"./components/HeaderComponent.js\");\n/* harmony import */ var _FooterComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterComponent */ \"./components/FooterComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cursor */ \"./components/Cursor/index.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"default\"), innermouseState = ref[0], setinnerMouseState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"default\"), outermouseState = ref1[0], setouterMouseState = ref1[1];\n    var outermouseVariants = {\n        default: {\n            scale: 1\n        }\n    };\n    var innermouseVariants = {\n        default: {\n            scale: 0\n        },\n        clicked: {\n            scale: 4,\n            transition: {\n                duration: 0.2,\n                ease: \"easeInOut\"\n            }\n        },\n        hovering: {\n            scale: [\n                0,\n                1.1,\n                0,\n                2\n            ],\n            backgroundColor: \"hsla(292, 100%, 100%, 0.18)\",\n            transition: {\n                repeat: Infinity,\n                duration: 2\n            }\n        }\n    };\n    var mouseHoverNav = function() {\n        setinnerMouseState(\"hovering\");\n    };\n    var mouseOffhoverNav = function() {\n        setinnerMouseState(\"default\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cursor__WEBPACK_IMPORTED_MODULE_4__.Cursor, {\n                innerVariants: innermouseVariants,\n                innercursorVariants: innermouseState\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onEnter: mouseHoverNav,\n                onLeave: mouseOffhoverNav\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, children.route, true, {\n        fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Layout.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n};\n_s(Layout, \"K+qLCnB3L8TC3iDZcnKFXOCavzY=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQWdEO0FBQ0E7QUFDUTtBQUNaO0FBQ1g7QUFDYTs7QUFDL0IsU0FBU08sTUFBTSxDQUFDLEtBQVksRUFBRTtRQUFkLFFBQVUsR0FBVixLQUFZLENBQVZDLFFBQVE7O0lBQ3ZDLElBQThDSCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQyxTQUFTLENBQUMsRUFQbkUsZUFPd0IsR0FBd0JBLEdBQW1CLEdBQTNDLEVBUHhCLGtCQU80QyxHQUFJQSxHQUFtQixHQUF2QjtJQUMxQyxJQUE4Q0EsSUFBbUIsR0FBbkJBLCtDQUFRLENBQUMsU0FBUyxDQUFDLEVBUm5FLGVBUXdCLEdBQXdCQSxJQUFtQixHQUEzQyxFQVJ4QixrQkFRNEMsR0FBSUEsSUFBbUIsR0FBdkI7SUFDMUMsSUFBTVEsa0JBQWtCLEdBQUc7UUFDekJDLE9BQU8sRUFBRTtZQUNQQyxLQUFLLEVBQUUsQ0FBQztTQUNUO0tBRUY7SUFDRCxJQUFNQyxrQkFBa0IsR0FBRztRQUN6QkYsT0FBTyxFQUFFO1lBQ1BDLEtBQUssRUFBRSxDQUFDO1NBRVQ7UUFDREUsT0FBTyxFQUFDO1lBQ05GLEtBQUssRUFBRSxDQUFDO1lBRVJHLFVBQVUsRUFBRTtnQkFDVkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2JDLElBQUksRUFBRSxXQUFXO2FBQ2xCO1NBRUY7UUFDREMsUUFBUSxFQUFHO1lBQ1ROLEtBQUssRUFBRTtBQUFDLGlCQUFDO0FBQUMsbUJBQUc7QUFBQyxpQkFBQztBQUFDLGlCQUFDO2FBQUM7WUFDbEJPLGVBQWUsRUFBRSw2QkFBNkI7WUFDOUNKLFVBQVUsRUFBQztnQkFDVEssTUFBTSxFQUFDQyxRQUFRO2dCQUNmTCxRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0Y7S0FDRjtJQUNELElBQU1NLGFBQWEsR0FBRyxXQUFNO1FBQzFCZixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNoQztJQUNELElBQU1nQixnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCaEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDL0I7SUFDRCxxQkFDRSw4REFBQ2lCLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7OzBCQUNsQiw4REFBQ3RCLHNEQUFNO2dCQUFDdUIsYUFBYSxFQUFFYixrQkFBa0I7Z0JBQUVjLG1CQUFtQixFQUFFckIsZUFBZTs7Ozs7b0JBQUc7MEJBQ2xGLDhEQUFDVCx3REFBZTtnQkFBQytCLE9BQU8sRUFBRU4sYUFBYTtnQkFBRU8sT0FBTyxFQUFFTixnQkFBZ0I7Ozs7O29CQUFHOzBCQUNqRSw4REFBQ08sTUFBSTtnQkFBQ0wsU0FBUyxFQUFDLEVBQUU7MEJBQUVwQixRQUFROzs7OztvQkFBUTswQkFDeEMsOERBQUNQLHdEQUFlOzs7O29CQUFHOztPQUpLTyxRQUFRLENBQUMwQixLQUFLOzs7O1lBS2xDLENBQ047Q0FDSDtHQTlDdUIzQixNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL0hlYWRlckNvbXBvbmVudFwiO1xuaW1wb3J0IEZvb3RlckNvbXBvbmVudCBmcm9tIFwiLi9Gb290ZXJDb21wb25lbnRcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IExheW91dEdyb3VwIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDdXJzb3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DdXJzb3JcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2lubmVybW91c2VTdGF0ZSwgc2V0aW5uZXJNb3VzZVN0YXRlXSA9IHVzZVN0YXRlKCdkZWZhdWx0Jyk7XG4gIGNvbnN0IFtvdXRlcm1vdXNlU3RhdGUsIHNldG91dGVyTW91c2VTdGF0ZV0gPSB1c2VTdGF0ZSgnZGVmYXVsdCcpO1xuICBjb25zdCBvdXRlcm1vdXNlVmFyaWFudHMgPSB7XG4gICAgZGVmYXVsdDoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgfSxcblxuICB9XG4gIGNvbnN0IGlubmVybW91c2VWYXJpYW50cyA9IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBzY2FsZTogMCxcbiAgICAgIFxuICAgIH0sXG4gICAgY2xpY2tlZDp7XG4gICAgICBzY2FsZTogNCxcbiAgICAgIFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXG4gICAgICB9XG4gICAgICBcbiAgICB9LFxuICAgIGhvdmVyaW5nIDoge1xuICAgICAgc2NhbGU6IFswLDEuMSwwLDJdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcImhzbGEoMjkyLCAxMDAlLCAxMDAlLCAwLjE4KVwiLFxuICAgICAgdHJhbnNpdGlvbjp7XG4gICAgICAgIHJlcGVhdDpJbmZpbml0eSxcbiAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IG1vdXNlSG92ZXJOYXYgPSAoKSA9PiB7XG4gICAgc2V0aW5uZXJNb3VzZVN0YXRlKCdob3ZlcmluZycpO1xuICB9XG4gIGNvbnN0IG1vdXNlT2ZmaG92ZXJOYXYgPSAoKSA9PiB7XG4gICAgc2V0aW5uZXJNb3VzZVN0YXRlKCdkZWZhdWx0Jyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiIGtleT17Y2hpbGRyZW4ucm91dGV9PlxuICAgICAgPEN1cnNvciBpbm5lclZhcmlhbnRzPXtpbm5lcm1vdXNlVmFyaWFudHN9IGlubmVyY3Vyc29yVmFyaWFudHM9e2lubmVybW91c2VTdGF0ZX0vPlxuICAgICAgPEhlYWRlckNvbXBvbmVudCBvbkVudGVyPXttb3VzZUhvdmVyTmF2fSBvbkxlYXZlPXttb3VzZU9mZmhvdmVyTmF2fS8+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXJDb21wb25lbnQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXJDb21wb25lbnQiLCJGb290ZXJDb21wb25lbnQiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJMYXlvdXRHcm91cCIsInVzZVN0YXRlIiwiQ3Vyc29yIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJpbm5lcm1vdXNlU3RhdGUiLCJzZXRpbm5lck1vdXNlU3RhdGUiLCJvdXRlcm1vdXNlU3RhdGUiLCJzZXRvdXRlck1vdXNlU3RhdGUiLCJvdXRlcm1vdXNlVmFyaWFudHMiLCJkZWZhdWx0Iiwic2NhbGUiLCJpbm5lcm1vdXNlVmFyaWFudHMiLCJjbGlja2VkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImhvdmVyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicmVwZWF0IiwiSW5maW5pdHkiLCJtb3VzZUhvdmVyTmF2IiwibW91c2VPZmZob3Zlck5hdiIsImRpdiIsImNsYXNzTmFtZSIsImlubmVyVmFyaWFudHMiLCJpbm5lcmN1cnNvclZhcmlhbnRzIiwib25FbnRlciIsIm9uTGVhdmUiLCJtYWluIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ })

});