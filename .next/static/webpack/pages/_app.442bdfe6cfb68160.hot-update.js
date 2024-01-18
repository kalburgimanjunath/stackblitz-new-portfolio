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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/workspaces/stackblitz-new-portfolio/components/Header.js\";\n\n\nfunction Header() {\n  var _this = this;\n\n  var menus = [{\n    title: 'Contact',\n    link: 'contact'\n  }, {\n    title: 'About',\n    link: 'about'\n  }, {\n    title: 'Work',\n    link: 'projects'\n  }, {\n    title: 'Articles',\n    link: 'posts'\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"flex fixed top-0 bg-white shadow-lg\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: \"/\",\n      className: \"text-blue-300 font-regular p-5  w-full\",\n      children: \"Manjunath Kalburgi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"flex justify-end w-full\",\n      children: menus && menus.map(function (item) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n          href: \"{item.link}\",\n          className: \"text-blue-300 font-regular hover:text-blue-500 p-5 hover:rounded-lg hover:bg-pink-300 hover:text-white \",\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 15\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDZSxTQUFTQyxNQUFULEdBQWtCO0VBQUE7O0VBQy9CLElBQU1DLEtBQUssR0FBRyxDQUNaO0lBQUVDLEtBQUssRUFBRSxTQUFUO0lBQW9CQyxJQUFJLEVBQUU7RUFBMUIsQ0FEWSxFQUVaO0lBQUVELEtBQUssRUFBRSxPQUFUO0lBQWtCQyxJQUFJLEVBQUU7RUFBeEIsQ0FGWSxFQUdaO0lBQUVELEtBQUssRUFBRSxNQUFUO0lBQWlCQyxJQUFJLEVBQUU7RUFBdkIsQ0FIWSxFQUlaO0lBQUVELEtBQUssRUFBRSxVQUFUO0lBQXFCQyxJQUFJLEVBQUU7RUFBM0IsQ0FKWSxDQUFkO0VBT0Esb0JBQ0U7SUFBSyxTQUFTLEVBQUMscUNBQWY7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUFNLElBQUksS0FBVjtNQUFpQixTQUFTLEVBQUMsd0NBQTNCO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFJRTtNQUFLLFNBQVMsRUFBQyx5QkFBZjtNQUFBLFVBQ0dGLEtBQUssSUFDSkEsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO1FBQ2xCLG9CQUNFLDhEQUFDLGtEQUFEO1VBQ0UsSUFBSSxlQUROO1VBRUUsU0FBUyxFQUFDLHlHQUZaO1VBQUEsVUFJR0EsSUFBSSxDQUFDSDtRQUpSO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERjtNQVFELENBVEQ7SUFGSjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSkY7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREY7QUFvQkQ7S0E1QnVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBtZW51cyA9IFtcclxuICAgIHsgdGl0bGU6ICdDb250YWN0JywgbGluazogJ2NvbnRhY3QnIH0sXHJcbiAgICB7IHRpdGxlOiAnQWJvdXQnLCBsaW5rOiAnYWJvdXQnIH0sXHJcbiAgICB7IHRpdGxlOiAnV29yaycsIGxpbms6ICdwcm9qZWN0cycgfSxcclxuICAgIHsgdGl0bGU6ICdBcnRpY2xlcycsIGxpbms6ICdwb3N0cycgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZpeGVkIHRvcC0wIGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICA8TGluayBocmVmPXtgL2B9IGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgZm9udC1yZWd1bGFyIHAtNSAgdy1mdWxsXCI+XHJcbiAgICAgICAgTWFuanVuYXRoIEthbGJ1cmdpXHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIHctZnVsbFwiPlxyXG4gICAgICAgIHttZW51cyAmJlxyXG4gICAgICAgICAgbWVudXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2B7aXRlbS5saW5rfWB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIGZvbnQtcmVndWxhciBob3Zlcjp0ZXh0LWJsdWUtNTAwIHAtNSBob3Zlcjpyb3VuZGVkLWxnIGhvdmVyOmJnLXBpbmstMzAwIGhvdmVyOnRleHQtd2hpdGUgXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSGVhZGVyIiwibWVudXMiLCJ0aXRsZSIsImxpbmsiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});