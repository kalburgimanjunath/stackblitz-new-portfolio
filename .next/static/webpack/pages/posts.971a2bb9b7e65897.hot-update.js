"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var _post1_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post1.mdx */ \"./pages/posts/post1.mdx\");\n/* harmony import */ var _post2_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post2.mdx */ \"./pages/posts/post2.mdx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/workspaces/stackblitz-new-portfolio/pages/posts/index.js\";\n\n\n\n\nfunction index() {\n  var _this = this;\n\n  var articles = [{\n    id: 1,\n    title: 'belk-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 2,\n    title: 'tumareliye-freelance-project',\n    description: 'description'\n  }, {\n    id: 3,\n    title: 'iterateux-website-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 4,\n    title: 'fitly-app-update-case-study',\n    description: 'description'\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"m-20\",\n    children: articles && articles.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        to: \"../posts/\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"font-bold text-3xl\",\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"text-2xs\",\n          children: item.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTRyxLQUFULEdBQWlCO0VBQUE7O0VBQzlCLElBQU1DLFFBQVEsR0FBRyxDQUNmO0lBQ0VDLEVBQUUsRUFBRSxDQUROO0lBRUVDLEtBQUssRUFBRSwwQkFGVDtJQUdFQyxXQUFXLEVBQUU7RUFIZixDQURlLEVBTWY7SUFDRUYsRUFBRSxFQUFFLENBRE47SUFFRUMsS0FBSyxFQUFFLDhCQUZUO0lBR0VDLFdBQVcsRUFBRTtFQUhmLENBTmUsRUFXZjtJQUNFRixFQUFFLEVBQUUsQ0FETjtJQUVFQyxLQUFLLEVBQUUsdUNBRlQ7SUFHRUMsV0FBVyxFQUFFO0VBSGYsQ0FYZSxFQWdCZjtJQUNFRixFQUFFLEVBQUUsQ0FETjtJQUVFQyxLQUFLLEVBQUUsNkJBRlQ7SUFHRUMsV0FBVyxFQUFFO0VBSGYsQ0FoQmUsQ0FBakI7RUFzQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsTUFBZjtJQUFBLFVBQ0dILFFBQVEsSUFDUEEsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO01BQ3JCLG9CQUNFLDhEQUFDLGtEQUFEO1FBQU0sRUFBRSxFQUFDLFdBQVQ7UUFBQSx3QkFDRTtVQUFLLFNBQVMsRUFBQyxvQkFBZjtVQUFBLFVBQXFDQSxJQUFJLENBQUNIO1FBQTFDO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERixlQUVFO1VBQUssU0FBUyxFQUFDLFVBQWY7VUFBQSxVQUEyQkcsSUFBSSxDQUFDRjtRQUFoQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBRkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREY7SUFNRCxDQVBEO0VBRko7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBZUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanM/M2IxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdDEgZnJvbSAnLi9wb3N0MS5tZHgnO1xyXG5pbXBvcnQgUG9zdDIgZnJvbSAnLi9wb3N0Mi5tZHgnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICBjb25zdCBhcnRpY2xlcyA9IFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIHRpdGxlOiAnYmVsay1yZWRlc2lnbi1jYXNlLXN0dWR5JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgdGl0bGU6ICd0dW1hcmVsaXllLWZyZWVsYW5jZS1wcm9qZWN0JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgdGl0bGU6ICdpdGVyYXRldXgtd2Vic2l0ZS1yZWRlc2lnbi1jYXNlLXN0dWR5JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNCxcclxuICAgICAgdGl0bGU6ICdmaXRseS1hcHAtdXBkYXRlLWNhc2Utc3R1ZHknLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J20tMjAnPlxyXG4gICAgICB7YXJ0aWNsZXMgJiZcclxuICAgICAgICBhcnRpY2xlcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiLi4vcG9zdHMvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj57aXRlbS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhzXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIHsvKiA8UG9zdDEgLz5cclxuICAgICAgPFBvc3QyIC8+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUG9zdDEiLCJQb3N0MiIsIkxpbmsiLCJpbmRleCIsImFydGljbGVzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});