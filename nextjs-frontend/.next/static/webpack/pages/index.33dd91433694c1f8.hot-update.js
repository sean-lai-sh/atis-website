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

/***/ "./components/Parallax.js":
/*!********************************!*\
  !*** ./components/Parallax.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Parallax = function(param) {\n    var _speed = param.speed, speed = _speed === void 0 ? 20 : _speed;\n    _s();\n    //create the parallax effect\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useViewportScroll)().scrollYProgress;\n    var yValue = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        -100\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\components\\\\Parallax.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(Parallax, \"IkwJ00ynsKBYWDZh2gL1PlhI7FY=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform\n    ];\n});\n_c = Parallax;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Parallax);\nvar _c;\n$RefreshReg$(_c, \"Parallax\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcmFsbGF4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQU11QjtBQUNtQzs7QUFDMUQsSUFBTVEsUUFBUSxHQUFHLGdCQUFnQjt1QkFBZEMsS0FBSyxFQUFMQSxLQUFLLHVCQUFDLEVBQUU7O0lBQ3pCLDRCQUE0QjtJQUM1QixJQUFNLGVBQWlCLEdBQUtQLGdFQUFpQixFQUFFLENBQXZDUSxlQUFlO0lBQ3ZCLElBQU1DLE1BQU0sR0FBR1YsMkRBQVksQ0FBQ1MsZUFBZSxFQUFFO0FBQUMsU0FBQztBQUFFLFNBQUM7S0FBQyxFQUFFO0FBQUMsU0FBQztRQUFFLENBQUMsR0FBRztLQUFDLENBQUM7SUFJL0QscUJBQ0UsOERBQUNWLHFEQUFVO2tCQUNSYSxRQUFROzs7OzthQUNFLENBQ2I7Q0FDSDtHQVpLTCxRQUFROztRQUVnQk4sNERBQWlCO1FBQzlCRCx1REFBWTs7O0FBSHZCTyxLQUFBQSxRQUFRO0FBY2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhcmFsbGF4LmpzP2YwOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBtb3Rpb24sXHJcbiAgdXNlVHJhbnNmb3JtLFxyXG4gIHVzZVZpZXdwb3J0U2Nyb2xsLFxyXG4gIHVzZVNwcmluZyxcclxuICB1c2VSZWR1Y2VkTW90aW9uLFxyXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBQYXJhbGxheCA9ICh7c3BlZWQ9MjB9KSA9PiB7XHJcbiAgLy9jcmVhdGUgdGhlIHBhcmFsbGF4IGVmZmVjdFxyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xyXG4gIGNvbnN0IHlWYWx1ZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIC0xMDBdKTtcclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbW90aW9uLmRpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFyYWxsYXg7XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInVzZVNwcmluZyIsInVzZVJlZHVjZWRNb3Rpb24iLCJ1c2VTdGF0ZSIsInVzZUxheW91dEVmZmVjdCIsInVzZVJlZiIsIlBhcmFsbGF4Iiwic3BlZWQiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ5VmFsdWUiLCJkaXYiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Parallax.js\n");

/***/ })

});