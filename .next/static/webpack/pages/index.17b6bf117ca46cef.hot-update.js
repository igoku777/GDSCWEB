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

/***/ "./components/Hero/CounterContainer.jsx":
/*!**********************************************!*\
  !*** ./components/Hero/CounterContainer.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_countDownTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/countDownTimer */ \"./utils/countDownTimer.js\");\n/* harmony import */ var _CounterAtom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CounterAtom */ \"./components/Hero/CounterAtom.jsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar CounterContainer = function(param) {\n    var countDownLimit = param.countDownLimit;\n    _s();\n    var defaultRemainingTime = {\n        days: \"0=10\",\n        hours: \"00\",\n        minutes: \"00\",\n        seconds: \"00\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultRemainingTime), remainingTime = ref[0], setRemainingTime = ref[1];\n    var updateRemainingTime = function(countdown) {\n        setRemainingTime((0,_utils_countDownTimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(countdown));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var timer = setInterval(function() {\n            updateRemainingTime(countDownLimit);\n        }, 1000);\n        return function() {\n            return clearInterval(timer);\n        };\n    }, [\n        countDownLimit\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center grow mt-12 lg:mt-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center gap-12 lg:gap-8 lg:flex-row 2xl:gap-24\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CounterAtom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    time: \"Days\",\n                    timeleft: remainingTime.days\n                }, void 0, false, {\n                    fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CounterAtom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    time: \"Hrs\",\n                    timeleft: remainingTime.hours\n                }, void 0, false, {\n                    fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CounterAtom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    time: \"Mins\",\n                    timeleft: remainingTime.minutes\n                }, void 0, false, {\n                    fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CounterAtom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    time: \"Secs\",\n                    isHidden: true,\n                    timeleft: remainingTime.seconds\n                }, void 0, false, {\n                    fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"E:\\\\GDSCWEB\\\\components\\\\Hero\\\\CounterContainer.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(CounterContainer, \"b7xgVqAU1A/UJFjtPVpqOIR3BPs=\");\n_c = CounterContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CounterContainer);\nvar _c;\n$RefreshReg$(_c, \"CounterContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8vQ291bnRlckNvbnRhaW5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBNEM7QUFDYTtBQUNqQjtBQUN4QyxJQUFNSSxnQkFBZ0IsR0FBRyxnQkFBd0I7UUFBckJDLGNBQWMsU0FBZEEsY0FBYzs7SUFDdEMsSUFBTUMsb0JBQW9CLEdBQUc7UUFDekJDLElBQUksRUFBRSxNQUFNO1FBQ1pDLEtBQUssRUFBRSxJQUFJO1FBQ1hDLE9BQU8sRUFBRSxJQUFJO1FBQ2JDLE9BQU8sRUFBRSxJQUFJO0tBQ2hCO0lBQ0QsSUFBMENWLEdBQThCLEdBQTlCQSwrQ0FBUSxDQUFDTSxvQkFBb0IsQ0FBQyxFQUFqRUssYUFBYSxHQUFzQlgsR0FBOEIsR0FBcEQsRUFBRVksZ0JBQWdCLEdBQUlaLEdBQThCLEdBQWxDO0lBQ3RDLElBQU1hLG1CQUFtQixHQUFHLFNBQUNDLFNBQVMsRUFBSztRQUN2Q0YsZ0JBQWdCLENBQUNWLGlFQUFnQixDQUFDWSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0RiLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1jLEtBQUssR0FBR0MsV0FBVyxDQUFDLFdBQU07WUFDNUJILG1CQUFtQixDQUFDUixjQUFjLENBQUM7UUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztRQUVSLE9BQU87bUJBQU1ZLGFBQWEsQ0FBQ0YsS0FBSyxDQUFDO1NBQUE7SUFDckMsQ0FBQyxFQUFFO1FBQUNWLGNBQWM7S0FBQyxDQUFDO0lBQ3RCLHFCQUNFLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7a0JBQ3JELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywwREFBMEQ7OzhCQUN2RSw4REFBQ2hCLG9EQUFXO29CQUFDaUIsSUFBSSxFQUFDLE1BQU07b0JBQUNDLFFBQVEsRUFBRVYsYUFBYSxDQUFDSixJQUFJOzs7Ozt5QkFBRzs4QkFDeEQsOERBQUNKLG9EQUFXO29CQUFDaUIsSUFBSSxFQUFDLEtBQUs7b0JBQUNDLFFBQVEsRUFBRVYsYUFBYSxDQUFDSCxLQUFLOzs7Ozt5QkFBRzs4QkFDeEQsOERBQUNMLG9EQUFXO29CQUFDaUIsSUFBSSxFQUFDLE1BQU07b0JBQUNDLFFBQVEsRUFBRVYsYUFBYSxDQUFDRixPQUFPOzs7Ozt5QkFBRzs4QkFDM0QsOERBQUNOLG9EQUFXO29CQUFDaUIsSUFBSSxFQUFDLE1BQU07b0JBQUNFLFFBQVEsRUFBRSxJQUFJO29CQUFFRCxRQUFRLEVBQUVWLGFBQWEsQ0FBQ0QsT0FBTzs7Ozs7eUJBQUc7Ozs7OztpQkFDdkU7Ozs7O2FBQ0YsQ0FDTjtBQUNKLENBQUM7R0E1QktOLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBOEJ0QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvL0NvdW50ZXJDb250YWluZXIuanN4PzA4ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdldFJlbWFpbmluZ1RpbWUgZnJvbSAnLi4vLi4vdXRpbHMvY291bnREb3duVGltZXInXHJcbmltcG9ydCBDb3VudGVyQXRvbSBmcm9tIFwiLi9Db3VudGVyQXRvbVwiO1xyXG5jb25zdCBDb3VudGVyQ29udGFpbmVyID0gKHsgY291bnREb3duTGltaXQgfSkgPT4ge1xyXG4gICAgY29uc3QgZGVmYXVsdFJlbWFpbmluZ1RpbWUgPSB7XHJcbiAgICAgICAgZGF5czogJzA9MTAnLFxyXG4gICAgICAgIGhvdXJzOiAnMDAnLFxyXG4gICAgICAgIG1pbnV0ZXM6ICcwMCcsXHJcbiAgICAgICAgc2Vjb25kczogJzAwJyxcclxuICAgIH1cclxuICAgIGNvbnN0IFtyZW1haW5pbmdUaW1lLCBzZXRSZW1haW5pbmdUaW1lXSA9IHVzZVN0YXRlKGRlZmF1bHRSZW1haW5pbmdUaW1lKVxyXG4gICAgY29uc3QgdXBkYXRlUmVtYWluaW5nVGltZSA9IChjb3VudGRvd24pID0+IHtcclxuICAgICAgICBzZXRSZW1haW5pbmdUaW1lKGdldFJlbWFpbmluZ1RpbWUoY291bnRkb3duKSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVJlbWFpbmluZ1RpbWUoY291bnREb3duTGltaXQpXHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpXHJcbiAgICB9LCBbY291bnREb3duTGltaXRdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgZ3JvdyBtdC0xMiBsZzptdC0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEyIGxnOmdhcC04IGxnOmZsZXgtcm93IDJ4bDpnYXAtMjRcIj5cclxuICAgICAgICA8Q291bnRlckF0b20gdGltZT1cIkRheXNcIiB0aW1lbGVmdD17cmVtYWluaW5nVGltZS5kYXlzfS8+XHJcbiAgICAgICAgPENvdW50ZXJBdG9tIHRpbWU9XCJIcnNcIiB0aW1lbGVmdD17cmVtYWluaW5nVGltZS5ob3Vyc30vPlxyXG4gICAgICAgIDxDb3VudGVyQXRvbSB0aW1lPVwiTWluc1wiIHRpbWVsZWZ0PXtyZW1haW5pbmdUaW1lLm1pbnV0ZXN9Lz5cclxuICAgICAgICA8Q291bnRlckF0b20gdGltZT1cIlNlY3NcIiBpc0hpZGRlbj17dHJ1ZX0gdGltZWxlZnQ9e3JlbWFpbmluZ1RpbWUuc2Vjb25kc30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyQ29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRSZW1haW5pbmdUaW1lIiwiQ291bnRlckF0b20iLCJDb3VudGVyQ29udGFpbmVyIiwiY291bnREb3duTGltaXQiLCJkZWZhdWx0UmVtYWluaW5nVGltZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwicmVtYWluaW5nVGltZSIsInNldFJlbWFpbmluZ1RpbWUiLCJ1cGRhdGVSZW1haW5pbmdUaW1lIiwiY291bnRkb3duIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aW1lIiwidGltZWxlZnQiLCJpc0hpZGRlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero/CounterContainer.jsx\n"));

/***/ })

});