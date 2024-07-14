/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/upsells/components/UpsellCard.tsx":
/*!*************************************************!*\
  !*** ./admin/upsells/components/UpsellCard.tsx ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpsellCard: () => (/* binding */ UpsellCard),
/* harmony export */   _UpsellCard: () => (/* binding */ _UpsellCard)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ "../../../node_modules/react-use/esm/useMount.js");
/* harmony import */ var _UpsellWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpsellWrapper */ "./admin/upsells/components/UpsellWrapper.tsx");
/* harmony import */ var _Upsells_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Upsells.styled */ "./admin/upsells/components/Upsells.styled.tsx");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics */ "./admin/upsells/components/analytics.ts");
/* harmony import */ var _use_upsell_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-upsell-link */ "./admin/upsells/components/use-upsell-link.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






const _UpsellCard = _ref => {
  _s();
  let {
    title,
    buttonText,
    buttonLink,
    campaign,
    source,
    illustrationSrc,
    children
  } = _ref;
  const url = (0,_use_upsell_link__WEBPACK_IMPORTED_MODULE_3__.useUpsellLink)({
    url: buttonLink,
    campaign,
    source
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    (0,_analytics__WEBPACK_IMPORTED_MODULE_2__.trackUpsellViewed)({
      source,
      campaign
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Upsells_styled__WEBPACK_IMPORTED_MODULE_1__.UpsellCardComponent, {
    "data-testid": "upsell-card"
  });
};
_s(_UpsellCard, "tXYWOIlZxm1N06ZZF19OuHDp6qo=", false, function () {
  return [_use_upsell_link__WEBPACK_IMPORTED_MODULE_3__.useUpsellLink, react_use__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
const UpsellCard = (0,_UpsellWrapper__WEBPACK_IMPORTED_MODULE_0__.UpsellWrapper)(_UpsellCard);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});
//# sourceMappingURL=app-main.59a4ed5181a810b462f5.hot-update.js.map