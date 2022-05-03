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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Parallax = function(param) {\n    var children = param.children, _offset = param.offset, offset = _offset === void 0 ? 50 : _offset, _damping = param.damping, damping = _damping === void 0 ? 90 : _damping;\n    _s();\n    //create the parallax effect\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useViewportScroll)().scrollYProgress;\n    var y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        offset\n    ]);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), height = ref1[0], setHeight = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), width = ref2[0], setWidth = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), top = ref3[0], setTop = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), left = ref4[0], setLeft = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), opacity = ref5[0], setOpacity = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scale = ref6[0], setScale = ref6[1];\n    var spring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring)({\n        y: y,\n        damping: damping,\n        onRest: function() {\n            setHeight(ref.current.offsetHeight);\n            setWidth(ref.current.offsetWidth);\n            setTop(ref.current.offsetTop);\n            setLeft(ref.current.offsetLeft);\n            setOpacity(1);\n            setScale(1);\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function() {\n        if ((0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useReducedMotion)()) {\n            setHeight(ref.current.offsetHeight);\n            setWidth(ref.current.offsetWidth);\n            setTop(ref.current.offsetTop);\n            setLeft(ref.current.offsetLeft);\n            setOpacity(1);\n            setScale(1);\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        ref: ref,\n        style: {\n            y: y\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding-Projects\\\\atis-website\\\\nextjs-frontend\\\\components\\\\Parallax.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Parallax, \"Qy9idmxxOJvLqatZY33K1EGqohU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useSpring\n    ];\n});\n_c = Parallax;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Parallax);\nvar _c;\n$RefreshReg$(_c, \"Parallax\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQzFCLHFEQUFVO1FBQUNjLEdBQUcsRUFBRUEsR0FBRztRQUFFcUIsS0FBSyxFQUFFO1lBQUV0QixDQUFDLEVBQURBLENBQUM7U0FBRTtrQkFDL0JKLFFBQVE7Ozs7O2FBQ0UsQ0FDYjtDQUNIO0dBM0NLRCxRQUFROztRQUVnQk4sNERBQWlCO1FBQ25DRCx1REFBWTtRQVNQRSxvREFBUzs7O0FBWnBCSyxLQUFBQSxRQUFRO0FBNkNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXJhbGxheC5qcz9mMDkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgbW90aW9uLFxyXG4gIHVzZVRyYW5zZm9ybSxcclxuICB1c2VWaWV3cG9ydFNjcm9sbCxcclxuICB1c2VTcHJpbmcsXHJcbiAgdXNlUmVkdWNlZE1vdGlvbixcclxufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTGF5b3V0RWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgUGFyYWxsYXggPSAoeyBjaGlsZHJlbiwgb2Zmc2V0ID0gNTAsIGRhbXBpbmcgPSA5MCB9KSA9PiB7XHJcbiAgLy9jcmVhdGUgdGhlIHBhcmFsbGF4IGVmZmVjdFxyXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xyXG4gIGNvbnN0IHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCBvZmZzZXRdKTtcclxuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG9wLCBzZXRUb3BdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2xlZnQsIHNldExlZnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW29wYWNpdHksIHNldE9wYWNpdHldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3Qgc3ByaW5nID0gdXNlU3ByaW5nKHtcclxuICAgIHksXHJcbiAgICBkYW1waW5nLFxyXG4gICAgb25SZXN0OiAoKSA9PiB7XHJcbiAgICAgIHNldEhlaWdodChyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICBzZXRXaWR0aChyZWYuY3VycmVudC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgIHNldFRvcChyZWYuY3VycmVudC5vZmZzZXRUb3ApO1xyXG4gICAgICBzZXRMZWZ0KHJlZi5jdXJyZW50Lm9mZnNldExlZnQpO1xyXG4gICAgICBzZXRPcGFjaXR5KDEpO1xyXG4gICAgICBzZXRTY2FsZSgxKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlUmVkdWNlZE1vdGlvbigpKSB7XHJcbiAgICAgIHNldEhlaWdodChyZWYuY3VycmVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICBzZXRXaWR0aChyZWYuY3VycmVudC5vZmZzZXRXaWR0aCk7XHJcbiAgICAgIHNldFRvcChyZWYuY3VycmVudC5vZmZzZXRUb3ApO1xyXG4gICAgICBzZXRMZWZ0KHJlZi5jdXJyZW50Lm9mZnNldExlZnQpO1xyXG4gICAgICBzZXRPcGFjaXR5KDEpO1xyXG4gICAgICBzZXRTY2FsZSgxKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIFxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdiByZWY9e3JlZn0gc3R5bGU9e3sgeSB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJhbGxheDtcclxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZVRyYW5zZm9ybSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwidXNlU3ByaW5nIiwidXNlUmVkdWNlZE1vdGlvbiIsInVzZVN0YXRlIiwidXNlTGF5b3V0RWZmZWN0IiwidXNlUmVmIiwiUGFyYWxsYXgiLCJjaGlsZHJlbiIsIm9mZnNldCIsImRhbXBpbmciLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ5IiwicmVmIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0Iiwid2lkdGgiLCJzZXRXaWR0aCIsInRvcCIsInNldFRvcCIsImxlZnQiLCJzZXRMZWZ0Iiwib3BhY2l0eSIsInNldE9wYWNpdHkiLCJzY2FsZSIsInNldFNjYWxlIiwic3ByaW5nIiwib25SZXN0IiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsImRpdiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Parallax.js\n");

/***/ })

});