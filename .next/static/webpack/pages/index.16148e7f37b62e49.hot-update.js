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

/***/ "./utils/countDownTimer.js":
/*!*********************************!*\
  !*** ./utils/countDownTimer.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getRemainingTime; }\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getRemainingDays = function(nowDayjs, timestampDayjs) {\n    var days = timestampDayjs.diff(nowDayjs, \"days\");\n    return days.toString();\n};\nvar addZeros = function(time, minLength) {\n    var timeString = time.toString();\n    if (timeString.length >= minLength) return timeString;\n    return \"0\".repeat(minLength - timeString.length) + timeString;\n};\nvar getRemainingSeconds = function(nowDayjs, timestampDayjs) {\n    var seconds = timestampDayjs.diff(nowDayjs, \"seconds\") % 60;\n    return addZeros(seconds, 2);\n};\nvar getRemainingMinutes = function(nowDayjs, timestampDayjs) {\n    var minutes = timestampDayjs.diff(nowDayjs, \"minutes\") % 60;\n    return addZeros(minutes, 2);\n};\nvar getRemainingHours = function(nowDayjs, timestampDayjs) {\n    var hours = timestampDayjs.diff(nowDayjs, \"hours\") % 24;\n    return addZeros(hours, 2);\n};\nfunction getRemainingTime(timestamp) {\n    var timestampDayjs = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timestamp);\n    var nowDayjs = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();\n    if (timestampDayjs.isBefore(nowDayjs)) {\n        return {\n            seconds: \"10\",\n            minutes: \"00\",\n            hours: \"00\",\n            days: \"00\"\n        };\n    }\n    return {\n        seconds: getRemainingSeconds(nowDayjs, timestampDayjs),\n        minutes: getRemainingMinutes(nowDayjs, timestampDayjs),\n        hours: getRemainingHours(nowDayjs, timestampDayjs),\n        days: getRemainingDays(nowDayjs, timestampDayjs)\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb3VudERvd25UaW1lci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFFMUIsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBQ0MsUUFBUSxFQUFFQyxjQUFjLEVBQUs7SUFDckQsSUFBTUMsSUFBSSxHQUFHRCxjQUFjLENBQUNFLElBQUksQ0FBQ0gsUUFBUSxFQUFFLE1BQU0sQ0FBQztJQUNsRCxPQUFPRSxJQUFJLENBQUNFLFFBQVEsRUFBRSxDQUFDO0FBQ3pCLENBQUM7QUFFRCxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsSUFBSSxFQUFFQyxTQUFTLEVBQUs7SUFDcEMsSUFBTUMsVUFBVSxHQUFHRixJQUFJLENBQUNGLFFBQVEsRUFBRTtJQUNsQyxJQUFJSSxVQUFVLENBQUNDLE1BQU0sSUFBSUYsU0FBUyxFQUFFLE9BQU9DLFVBQVUsQ0FBQztJQUN0RCxPQUFPLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDSCxTQUFTLEdBQUdDLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDLEdBQUdELFVBQVUsQ0FBQztBQUNoRSxDQUFDO0FBRUQsSUFBTUcsbUJBQW1CLEdBQUcsU0FBQ1gsUUFBUSxFQUFFQyxjQUFjLEVBQUs7SUFDeEQsSUFBTVcsT0FBTyxHQUFHWCxjQUFjLENBQUNFLElBQUksQ0FBQ0gsUUFBUSxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUU7SUFDN0QsT0FBT0ssUUFBUSxDQUFDTyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUIsQ0FBQztBQUNELElBQU1DLG1CQUFtQixHQUFHLFNBQUNiLFFBQVEsRUFBRUMsY0FBYyxFQUFLO0lBQ3hELElBQU1hLE9BQU8sR0FBR2IsY0FBYyxDQUFDRSxJQUFJLENBQUNILFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFO0lBQzdELE9BQU9LLFFBQVEsQ0FBQ1MsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFDRCxJQUFNQyxpQkFBaUIsR0FBRyxTQUFDZixRQUFRLEVBQUVDLGNBQWMsRUFBSztJQUN0RCxJQUFNZSxLQUFLLEdBQUdmLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDSCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtJQUN6RCxPQUFPSyxRQUFRLENBQUNXLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBRWMsU0FBU0MsZ0JBQWdCLENBQUNDLFNBQVMsRUFBRTtJQUNsRCxJQUFNakIsY0FBYyxHQUFHSCw0Q0FBSyxDQUFDb0IsU0FBUyxDQUFDO0lBQ3ZDLElBQU1sQixRQUFRLEdBQUdGLDRDQUFLLEVBQUU7SUFDeEIsSUFBSUcsY0FBYyxDQUFDa0IsUUFBUSxDQUFDbkIsUUFBUSxDQUFDLEVBQUU7UUFDckMsT0FBTztZQUNMWSxPQUFPLEVBQUUsSUFBSTtZQUNiRSxPQUFPLEVBQUUsSUFBSTtZQUNiRSxLQUFLLEVBQUUsSUFBSTtZQUNYZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUM7SUFDSixDQUFDO0lBQ0QsT0FBTztRQUNMVSxPQUFPLEVBQUVELG1CQUFtQixDQUFDWCxRQUFRLEVBQUVDLGNBQWMsQ0FBQztRQUN0RGEsT0FBTyxFQUFFRCxtQkFBbUIsQ0FBQ2IsUUFBUSxFQUFFQyxjQUFjLENBQUM7UUFDdERlLEtBQUssRUFBRUQsaUJBQWlCLENBQUNmLFFBQVEsRUFBRUMsY0FBYyxDQUFDO1FBQ2xEQyxJQUFJLEVBQUVILGdCQUFnQixDQUFDQyxRQUFRLEVBQUVDLGNBQWMsQ0FBQztLQUNqRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jb3VudERvd25UaW1lci5qcz9jYzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuXHJcbmNvbnN0IGdldFJlbWFpbmluZ0RheXMgPSAobm93RGF5anMsIHRpbWVzdGFtcERheWpzKSA9PiB7XHJcbiAgY29uc3QgZGF5cyA9IHRpbWVzdGFtcERheWpzLmRpZmYobm93RGF5anMsIFwiZGF5c1wiKTtcclxuICByZXR1cm4gZGF5cy50b1N0cmluZygpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkWmVyb3MgPSAodGltZSwgbWluTGVuZ3RoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0cmluZyA9IHRpbWUudG9TdHJpbmcoKTtcclxuICBpZiAodGltZVN0cmluZy5sZW5ndGggPj0gbWluTGVuZ3RoKSByZXR1cm4gdGltZVN0cmluZztcclxuICByZXR1cm4gXCIwXCIucmVwZWF0KG1pbkxlbmd0aCAtIHRpbWVTdHJpbmcubGVuZ3RoKSArIHRpbWVTdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZW1haW5pbmdTZWNvbmRzID0gKG5vd0RheWpzLCB0aW1lc3RhbXBEYXlqcykgPT4ge1xyXG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lc3RhbXBEYXlqcy5kaWZmKG5vd0RheWpzLCBcInNlY29uZHNcIikgJSA2MDtcclxuICByZXR1cm4gYWRkWmVyb3Moc2Vjb25kcywgMik7XHJcbn07XHJcbmNvbnN0IGdldFJlbWFpbmluZ01pbnV0ZXMgPSAobm93RGF5anMsIHRpbWVzdGFtcERheWpzKSA9PiB7XHJcbiAgY29uc3QgbWludXRlcyA9IHRpbWVzdGFtcERheWpzLmRpZmYobm93RGF5anMsIFwibWludXRlc1wiKSAlIDYwO1xyXG4gIHJldHVybiBhZGRaZXJvcyhtaW51dGVzLCAyKTtcclxufTtcclxuY29uc3QgZ2V0UmVtYWluaW5nSG91cnMgPSAobm93RGF5anMsIHRpbWVzdGFtcERheWpzKSA9PiB7XHJcbiAgY29uc3QgaG91cnMgPSB0aW1lc3RhbXBEYXlqcy5kaWZmKG5vd0RheWpzLCBcImhvdXJzXCIpICUgMjQ7XHJcbiAgcmV0dXJuIGFkZFplcm9zKGhvdXJzLCAyKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJlbWFpbmluZ1RpbWUodGltZXN0YW1wKSB7XHJcbiAgY29uc3QgdGltZXN0YW1wRGF5anMgPSBkYXlqcyh0aW1lc3RhbXApO1xyXG4gIGNvbnN0IG5vd0RheWpzID0gZGF5anMoKTtcclxuICBpZiAodGltZXN0YW1wRGF5anMuaXNCZWZvcmUobm93RGF5anMpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWNvbmRzOiBcIjEwXCIsXHJcbiAgICAgIG1pbnV0ZXM6IFwiMDBcIixcclxuICAgICAgaG91cnM6IFwiMDBcIixcclxuICAgICAgZGF5czogXCIwMFwiLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlY29uZHM6IGdldFJlbWFpbmluZ1NlY29uZHMobm93RGF5anMsIHRpbWVzdGFtcERheWpzKSxcclxuICAgIG1pbnV0ZXM6IGdldFJlbWFpbmluZ01pbnV0ZXMobm93RGF5anMsIHRpbWVzdGFtcERheWpzKSxcclxuICAgIGhvdXJzOiBnZXRSZW1haW5pbmdIb3Vycyhub3dEYXlqcywgdGltZXN0YW1wRGF5anMpLFxyXG4gICAgZGF5czogZ2V0UmVtYWluaW5nRGF5cyhub3dEYXlqcywgdGltZXN0YW1wRGF5anMpLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbImRheWpzIiwiZ2V0UmVtYWluaW5nRGF5cyIsIm5vd0RheWpzIiwidGltZXN0YW1wRGF5anMiLCJkYXlzIiwiZGlmZiIsInRvU3RyaW5nIiwiYWRkWmVyb3MiLCJ0aW1lIiwibWluTGVuZ3RoIiwidGltZVN0cmluZyIsImxlbmd0aCIsInJlcGVhdCIsImdldFJlbWFpbmluZ1NlY29uZHMiLCJzZWNvbmRzIiwiZ2V0UmVtYWluaW5nTWludXRlcyIsIm1pbnV0ZXMiLCJnZXRSZW1haW5pbmdIb3VycyIsImhvdXJzIiwiZ2V0UmVtYWluaW5nVGltZSIsInRpbWVzdGFtcCIsImlzQmVmb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/countDownTimer.js\n"));

/***/ })

});