"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var _project1_mdx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project1.mdx */ \"./pages/projects/project1.mdx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/workspaces/stackblitz-new-portfolio/pages/projects/[id].js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction index() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var title = router.query.title;\n  console.log(title);\n  var projects = [{\n    id: 1,\n    title: 'belk-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 2,\n    title: 'tumareliye-freelance-project',\n    description: 'description'\n  }, {\n    id: 3,\n    title: 'iterateux-website-redesign-case-study',\n    description: 'description'\n  }, {\n    id: 4,\n    title: 'fitly-app-update-case-study',\n    description: 'description'\n  }];\n  var filteredProject = projects && projects.filter(function (item) {\n    return item.title == title;\n  });\n  console.log(filteredProject);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: filteredProject && filteredProject.map(function (item) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 12\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, this);\n}\n\n_s(index, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ2UsU0FBU0UsS0FBVCxHQUFpQjtFQUFBOztFQUFBOztFQUM5QixJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQXhCO0VBQ0EsSUFBUUcsS0FBUixHQUFrQkQsTUFBTSxDQUFDRSxLQUF6QixDQUFRRCxLQUFSO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0VBQ0EsSUFBTUksUUFBUSxHQUFHLENBQ2Y7SUFDRUMsRUFBRSxFQUFFLENBRE47SUFFRUwsS0FBSyxFQUFFLDBCQUZUO0lBR0VNLFdBQVcsRUFBRTtFQUhmLENBRGUsRUFNZjtJQUNFRCxFQUFFLEVBQUUsQ0FETjtJQUVFTCxLQUFLLEVBQUUsOEJBRlQ7SUFHRU0sV0FBVyxFQUFFO0VBSGYsQ0FOZSxFQVdmO0lBQ0VELEVBQUUsRUFBRSxDQUROO0lBRUVMLEtBQUssRUFBRSx1Q0FGVDtJQUdFTSxXQUFXLEVBQUU7RUFIZixDQVhlLEVBZ0JmO0lBQ0VELEVBQUUsRUFBRSxDQUROO0lBRUVMLEtBQUssRUFBRSw2QkFGVDtJQUdFTSxXQUFXLEVBQUU7RUFIZixDQWhCZSxDQUFqQjtFQXNCQSxJQUFNQyxlQUFlLEdBQ25CSCxRQUFRLElBQ1JBLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixVQUFDQyxJQUFELEVBQVU7SUFDeEIsT0FBT0EsSUFBSSxDQUFDVCxLQUFMLElBQWNBLEtBQXJCO0VBQ0QsQ0FGRCxDQUZGO0VBS0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxlQUFaO0VBRUEsb0JBQU87SUFBQSxVQUFNQSxlQUFlLElBQUlBLGVBQWUsQ0FBQ0csR0FBaEIsQ0FBb0IsVUFBQUQsSUFBSSxFQUFFO01BQ3hELG9CQUFPO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FBUDtJQUFtQixDQURXO0VBQXpCO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFBUDtBQUVEOztHQW5DdUJYO1VBQ1BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzL1tpZF0uanM/MjVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdDEgZnJvbSAnLi9wcm9qZWN0MS5tZHgnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4KCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgdGl0bGUgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICB0aXRsZTogJ2JlbGstcmVkZXNpZ24tY2FzZS1zdHVkeScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIHRpdGxlOiAndHVtYXJlbGl5ZS1mcmVlbGFuY2UtcHJvamVjdCcsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIHRpdGxlOiAnaXRlcmF0ZXV4LXdlYnNpdGUtcmVkZXNpZ24tY2FzZS1zdHVkeScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIHRpdGxlOiAnZml0bHktYXBwLXVwZGF0ZS1jYXNlLXN0dWR5JyxcclxuICAgICAgZGVzY3JpcHRpb246ICdkZXNjcmlwdGlvbicsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0ID1cclxuICAgIHByb2plY3RzICYmXHJcbiAgICBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgcmV0dXJuIGl0ZW0udGl0bGUgPT0gdGl0bGU7XHJcbiAgICB9KTtcclxuICBjb25zb2xlLmxvZyhmaWx0ZXJlZFByb2plY3QpO1xyXG5cclxuICByZXR1cm4gPGRpdj57ZmlsdGVyZWRQcm9qZWN0ICYmIGZpbHRlcmVkUHJvamVjdC5tYXAoaXRlbT0+e1xyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+fSl9PC9kaXY+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm9qZWN0MSIsInVzZVJvdXRlciIsImluZGV4Iiwicm91dGVyIiwidGl0bGUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0cyIsImlkIiwiZGVzY3JpcHRpb24iLCJmaWx0ZXJlZFByb2plY3QiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n"));

/***/ })

});