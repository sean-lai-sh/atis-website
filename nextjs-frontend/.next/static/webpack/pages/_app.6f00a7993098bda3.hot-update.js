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

/***/ "./components/Cursor/Cursor.js":
/*!*************************************!*\
  !*** ./components/Cursor/Cursor.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cursor.module.scss */ \"./components/Cursor/Cursor.module.scss\");\n/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Cursor = function(param) {\n    var innerVariants = param.innerVariants, innercursorVariants = param.innercursorVariants, outerVariants = param.outerVariants, outercursorVariants = param.outercursorVariants;\n    _s();\n    var cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    //track the position on the screen\n    //update every frame\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        document.addEventListener(\"mousemove\", function(event) {\n            var clientX = event.clientX, clientY = event.clientY;\n            if (clientX != null && clientY != null) {\n                var mouseX = clientX - cursorRef.current.clientWidth / 2;\n                var mouseY = clientY - cursorRef.current.clientHeight / 2;\n                cursorRef.current.style.transform = \"translate3d(\".concat(mouseX, \"px, \").concat(mouseY, \"px,0)\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_2___default().app__outercursor),\n        ref: cursorRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: (_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_2___default().app__outercursor),\n            variants: innerVariants,\n            transition: {\n                duration: 0.2,\n                type: \"spring\",\n                damping: 20\n            },\n            animate: innercursorVariants\n        }, void 0, false, {\n            fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Cursor/Cursor.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/seanlai/atis-website/nextjs-frontend/components/Cursor/Cursor.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Cursor, \"BAOXNtFTrLv46f15Gc0vVLC8KO4=\");\n_c = Cursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\nvar _c;\n$RefreshReg$(_c, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBc0Q7QUFDYjtBQUNNOztBQUMvQyxJQUFNTyxNQUFNLEdBQUcsZ0JBQTJFO1FBQXpFQyxhQUFhLFNBQWJBLGFBQWEsRUFBQ0MsbUJBQW1CLFNBQW5CQSxtQkFBbUIsRUFBQ0MsYUFBYSxTQUFiQSxhQUFhLEVBQUNDLG1CQUFtQixTQUFuQkEsbUJBQW1COztJQUVsRixJQUFNQyxTQUFTLEdBQUdULDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzlCLGtDQUFrQztJQUVsQyxvQkFBb0I7SUFDcEJGLGdEQUFTLENBQUMsV0FBSTtRQUVaWSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxTQUFDQyxLQUFLLEVBQUc7WUFDOUMsSUFBT0MsT0FBTyxHQUFhRCxLQUFLLENBQXpCQyxPQUFPLEVBQUVDLE9BQU8sR0FBSUYsS0FBSyxDQUFoQkUsT0FBTztZQUN2QixJQUFLRCxPQUFPLElBQUksSUFBSSxJQUFJQyxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUN6QyxJQUFNQyxNQUFNLEdBQUdGLE9BQU8sR0FBR0osU0FBUyxDQUFDTyxPQUFPLENBQUNDLFdBQVcsR0FBRyxDQUFDO2dCQUMxRCxJQUFNQyxNQUFNLEdBQUdKLE9BQU8sR0FBR0wsU0FBUyxDQUFDTyxPQUFPLENBQUNHLFlBQVksR0FBRyxDQUFDO2dCQUMzRFYsU0FBUyxDQUFDTyxPQUFPLENBQUNJLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLGNBQWEsQ0FBZUgsTUFBTSxDQUFuQkgsTUFBTSxFQUFDLE1BQUksQ0FBUyxPQUFLLENBQVpHLE1BQU0sRUFBQyxPQUFLLENBQUM7YUFDNUU7U0FDRixDQUFDO0tBRUgsRUFBQyxFQUFFLENBQUM7SUFDTCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUV0Qiw2RUFBdUI7UUFBRXdCLEdBQUcsRUFBRWhCLFNBQVM7a0JBQ3JELDRFQUFDTixxREFBVTtZQUNUb0IsU0FBUyxFQUFFdEIsNkVBQXVCO1lBQ2xDeUIsUUFBUSxFQUFFckIsYUFBYTtZQUN2QnNCLFVBQVUsRUFBRTtnQkFFUkMsUUFBUSxFQUFFLEdBQUc7Z0JBQ2JDLElBQUksRUFBRSxRQUFRO2dCQUNkQyxPQUFPLEVBQUUsRUFBRTthQUdkO1lBQ0Q1QixPQUFPLEVBQUVJLG1CQUFtQjs7Ozs7aUJBRTVCOzs7OzthQUNFLENBQ1A7Q0FDRjtHQXBDS0YsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBc0NaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3Vyc29yL0N1cnNvci5qcz8yZWRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0LHVzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1cnNvci5tb2R1bGUuc2NzcydcbmltcG9ydCB7IGFuaW1hdGUsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5jb25zdCBDdXJzb3IgPSAoe2lubmVyVmFyaWFudHMsaW5uZXJjdXJzb3JWYXJpYW50cyxvdXRlclZhcmlhbnRzLG91dGVyY3Vyc29yVmFyaWFudHN9KSA9PiB7XG5cbiAgY29uc3QgY3Vyc29yUmVmID0gdXNlUmVmKG51bGwpXG4gIC8vdHJhY2sgdGhlIHBvc2l0aW9uIG9uIHRoZSBzY3JlZW5cbiAgXG4gIC8vdXBkYXRlIGV2ZXJ5IGZyYW1lXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCk9PntcbiAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50XG4gICAgICBpZiAoIGNsaWVudFggIT0gbnVsbCAmJiBjbGllbnRZICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IG1vdXNlWCA9IGNsaWVudFggLSBjdXJzb3JSZWYuY3VycmVudC5jbGllbnRXaWR0aCAvIDJcbiAgICAgIGNvbnN0IG1vdXNlWSA9IGNsaWVudFkgLSBjdXJzb3JSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgLyAyXG4gICAgICBjdXJzb3JSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHttb3VzZVh9cHgsICR7bW91c2VZfXB4LDApYFxuICAgICAgfVxuICAgIH0pXG4gICAgXG4gIH0sW10pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHBfX291dGVyY3Vyc29yfSByZWY9e2N1cnNvclJlZn0+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hcHBfX291dGVyY3Vyc29yfVxuICAgICAgICB2YXJpYW50cz17aW5uZXJWYXJpYW50c31cbiAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgIFxuICAgICAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICAgICAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgICAgICAgZGFtcGluZzogMjBcbiAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIH19XG4gICAgICAgIGFuaW1hdGU9e2lubmVyY3Vyc29yVmFyaWFudHN9XG5cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJzdHlsZXMiLCJhbmltYXRlIiwibW90aW9uIiwiQ3Vyc29yIiwiaW5uZXJWYXJpYW50cyIsImlubmVyY3Vyc29yVmFyaWFudHMiLCJvdXRlclZhcmlhbnRzIiwib3V0ZXJjdXJzb3JWYXJpYW50cyIsImN1cnNvclJlZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJtb3VzZVgiLCJjdXJyZW50IiwiY2xpZW50V2lkdGgiLCJtb3VzZVkiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsImFwcF9fb3V0ZXJjdXJzb3IiLCJyZWYiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInR5cGUiLCJkYW1waW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Cursor/Cursor.js\n");

/***/ })

});