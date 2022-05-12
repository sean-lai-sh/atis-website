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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cursor.module.scss */ \"./components/Cursor/Cursor.module.scss\");\n/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Cursor = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    }), mPos = ref[0], setMPos = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var mouseMove = function(event) {\n            setMPos({\n                x: event.clientX,\n                y: event.clientY\n            });\n        };\n        window.addEventListener(\"mousemove\", mouseMove);\n        return function() {\n            window.removeEventListener(\"mousemove\", mouseMove);\n        };\n    }, []);\n    var variants = {\n        default: {\n            x: mPos.x - 20,\n            y: mPos.y - 20\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: (_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().app__outercursor),\n        variants: variants,\n        animate: \"default\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\components\\\\Cursor\\\\Cursor.js\",\n            lineNumber: 29,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\components\\\\Cursor\\\\Cursor.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Cursor, \"POAwvpvRv4y61DO7o01uh7fdZ9Y=\");\n_c = Cursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\nvar _c;\n$RefreshReg$(_c, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDTDtBQUNIOztBQUN0QyxJQUFNSyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBd0JILEdBR3RCLEdBSHNCQSwrQ0FBUSxDQUFDO1FBQy9CSSxDQUFDLEVBQUUsQ0FBQztRQUNKQyxDQUFDLEVBQUUsQ0FBQztLQUNMLENBQUMsRUFQSixJQUlhLEdBQWFMLEdBR3RCLEdBSFMsRUFKYixPQUlzQixHQUFJQSxHQUd0QixHQUhrQjtJQUlwQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVMsU0FBUyxHQUFHLFNBQUNDLEtBQUssRUFBSTtZQUMxQkYsT0FBTyxDQUFDO2dCQUNOSCxDQUFDLEVBQUVLLEtBQUssQ0FBQ0MsT0FBTztnQkFDaEJMLENBQUMsRUFBRUksS0FBSyxDQUFDRSxPQUFPO2FBQ2pCLENBQUM7U0FDSDtRQUNEQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsRUFBRUwsU0FBUyxDQUFDO1FBQy9DLE9BQU8sV0FBTTtZQUNYSSxNQUFNLENBQUNFLG1CQUFtQixDQUFDLFdBQVcsRUFBRU4sU0FBUyxDQUFDO1NBQ25EO0tBQ0YsRUFBQyxFQUFFLENBQUM7SUFDTCxJQUFNTyxRQUFRLEdBQUc7UUFDZkMsT0FBTyxFQUFDO1lBQ05aLENBQUMsRUFBQ0UsSUFBSSxDQUFDRixDQUFDLEdBQUMsRUFBRTtZQUNYQyxDQUFDLEVBQUNDLElBQUksQ0FBQ0QsQ0FBQyxHQUFDLEVBQUU7U0FDWjtLQUNGO0lBQ0QscUJBQ0UsOERBQUNILHFEQUFVO1FBQUNnQixTQUFTLEVBQUVqQiw2RUFBdUI7UUFBRWMsUUFBUSxFQUFFQSxRQUFRO1FBQUVLLE9BQU8sRUFBQyxTQUFTO2tCQUNqRiw0RUFBQ0gsS0FBRzs7OztpQkFFRTs7Ozs7YUFDRyxDQUNkO0NBQ0Y7R0E5QktkLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQWdDWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0N1cnNvci9DdXJzb3IuanM/MmVkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXJzb3IubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmNvbnN0IEN1cnNvciA9ICgpID0+IHtcclxuICBjb25zdCBbbVBvcywgc2V0TVBvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB4OiAwLFxyXG4gICAgeTogMCxcclxuICB9KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtb3VzZU1vdmUgPSAoZXZlbnQpID0+e1xyXG4gICAgICBzZXRNUG9zKHtcclxuICAgICAgICB4OiBldmVudC5jbGllbnRYLFxyXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFksXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2VNb3ZlKVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSlcclxuICAgIH1cclxuICB9LFtdKVxyXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgZGVmYXVsdDp7XHJcbiAgICAgIHg6bVBvcy54LTIwLFxyXG4gICAgICB5Om1Qb3MueS0yMCxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcF9fb3V0ZXJjdXJzb3J9IHZhcmlhbnRzPXt2YXJpYW50c30gYW5pbWF0ZT0nZGVmYXVsdCc+XHJcbiAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXJzb3IiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIm1vdGlvbiIsIkN1cnNvciIsIngiLCJ5IiwibVBvcyIsInNldE1Qb3MiLCJtb3VzZU1vdmUiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ2YXJpYW50cyIsImRlZmF1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJhcHBfX291dGVyY3Vyc29yIiwiYW5pbWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Cursor/Cursor.js\n");

/***/ })

});