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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var _post1_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post1.mdx */ \"./pages/posts/post1.mdx\");\n/* harmony import */ var _post2_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post2.mdx */ \"./pages/posts/post2.mdx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/workspaces/stackblitz-new-portfolio/pages/posts/index.js\";\n\n\n\n\nfunction index() {\n  var _this = this;\n\n  var articles = [{\n    id: 1,\n    title: 'belk-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 2,\n    title: 'tumareliye-freelance-project',\n    description: 'description'\n  }, {\n    id: 3,\n    title: 'iterateux-website-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 4,\n    title: 'fitly-app-update-case-study',\n    description: 'description'\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"m-20\",\n    children: articles && articles.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        to: \"../posts/\".concat(item.title),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"font-bold text-3xl\",\n          children: item.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"text-2xs\",\n          children: item.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, this);\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTRyxLQUFULEdBQWlCO0VBQUE7O0VBQzlCLElBQU1DLFFBQVEsR0FBRyxDQUNmO0lBQ0VDLEVBQUUsRUFBRSxDQUROO0lBRUVDLEtBQUssRUFBRSwwQkFGVDtJQUdFQyxXQUFXLEVBQUU7RUFIZixDQURlLEVBTWY7SUFDRUYsRUFBRSxFQUFFLENBRE47SUFFRUMsS0FBSyxFQUFFLDhCQUZUO0lBR0VDLFdBQVcsRUFBRTtFQUhmLENBTmUsRUFXZjtJQUNFRixFQUFFLEVBQUUsQ0FETjtJQUVFQyxLQUFLLEVBQUUsdUNBRlQ7SUFHRUMsV0FBVyxFQUFFO0VBSGYsQ0FYZSxFQWdCZjtJQUNFRixFQUFFLEVBQUUsQ0FETjtJQUVFQyxLQUFLLEVBQUUsNkJBRlQ7SUFHRUMsV0FBVyxFQUFFO0VBSGYsQ0FoQmUsQ0FBakI7RUFzQkEsb0JBQ0U7SUFBSyxTQUFTLEVBQUMsTUFBZjtJQUFBLFVBQ0dILFFBQVEsSUFDUEEsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO01BQ3JCLG9CQUNFLDhEQUFDLGtEQUFEO1FBQU0sRUFBRSxxQkFBY0EsSUFBSSxDQUFDSCxLQUFuQixDQUFSO1FBQUEsd0JBQ0U7VUFBSyxTQUFTLEVBQUMsb0JBQWY7VUFBQSxVQUFxQ0csSUFBSSxDQUFDSDtRQUExQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFFRTtVQUFLLFNBQVMsRUFBQyxVQUFmO1VBQUEsVUFBMkJHLElBQUksQ0FBQ0Y7UUFBaEM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUZGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQURGO0lBTUQsQ0FQRDtFQUZKO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFERjtBQWVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3RzL2luZGV4LmpzPzNiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QxIGZyb20gJy4vcG9zdDEubWR4JztcclxuaW1wb3J0IFBvc3QyIGZyb20gJy4vcG9zdDIubWR4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgY29uc3QgYXJ0aWNsZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0aXRsZTogJ2JlbGstcmVkZXNpZ24tY2FzZS1zdHVkeScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRpdGxlOiAndHVtYXJlbGl5ZS1mcmVlbGFuY2UtcHJvamVjdCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHRpdGxlOiAnaXRlcmF0ZXV4LXdlYnNpdGUtcmVkZXNpZ24tY2FzZS1zdHVkeScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRpdGxlOiAnZml0bHktYXBwLXVwZGF0ZS1jYXNlLXN0dWR5JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtLTIwJz5cclxuICAgICAge2FydGljbGVzICYmXHJcbiAgICAgICAgYXJ0aWNsZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TGluayB0bz17YC4uL3Bvc3RzLyR7aXRlbS50aXRsZX1gfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeHNcIj57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgey8qIDxQb3N0MSAvPlxyXG4gICAgICA8UG9zdDIgLz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQb3N0MSIsIlBvc3QyIiwiTGluayIsImluZGV4IiwiYXJ0aWNsZXMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/index.js\n"));

/***/ })

});