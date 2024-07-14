/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./nav/components/AdminNavbar/AdminNavbar.tsx":
/*!****************************************************!*\
  !*** ./nav/components/AdminNavbar/AdminNavbar.tsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNavbar: () => (/* binding */ AdminNavbar)
/* harmony export */ });
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mantine/hooks */ "../../../node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var metabase_components_LogoIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/components/LogoIcon */ "./components/LogoIcon/index.jsx");
/* harmony import */ var metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/css/core/index.css */ "./css/core/index.css");
/* harmony import */ var metabase_lib_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/lib/redux */ "./lib/redux/index.ts");
/* harmony import */ var metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/selectors/settings */ "./selectors/settings.ts");
/* harmony import */ var metabase_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/ui */ "./ui/index.ts");
/* harmony import */ var _StoreLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StoreLink */ "./nav/components/StoreLink/index.ts");
/* harmony import */ var _AdminNavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AdminNavItem */ "./nav/components/AdminNavbar/AdminNavItem.tsx");
/* harmony import */ var _AdminNavbar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AdminNavbar.module.css */ "./nav/components/AdminNavbar/AdminNavbar.module.css");
/* harmony import */ var _AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AdminNavbar.styled */ "./nav/components/AdminNavbar/AdminNavbar.styled.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();















const AdminNavbar = _ref => {
  _s();
  let {
    path: currentPath,
    adminPaths
  } = _ref;
  const isPaidPlain = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_6__.getIsPaidPlan);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminNavbarRoot, {
    "data-element-id": "navbar-root",
    "aria-label": ttag__WEBPACK_IMPORTED_MODULE_2__.t`Navigation bar`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminLogoLink, {
      to: "/admin",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminLogoContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_components_LogoIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_4__["default"].textBrand, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_4__["default"].my2),
          dark: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminLogoText, {
          children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`DataLM.ai Admin`
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(MobileNavbar, {
      adminPaths: adminPaths,
      currentPath: currentPath
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.MobileHide, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminNavbarItems, {
        children: adminPaths.map(_ref2 => {
          let {
            name,
            key,
            path
          } = _ref2;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavItem__WEBPACK_IMPORTED_MODULE_9__.AdminNavItem, {
            name: name,
            path: path,
            currentPath: currentPath
          }, key);
        })
      }), !isPaidPlain && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_StoreLink__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminExitLink, {
        to: "/",
        "data-testid": "exit-admin",
        children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Exit admin`
      })]
    })]
  });
};
_s(AdminNavbar, "LaeHgnWgvE9VMsyI+rbXX0dLMVE=", false, function () {
  return [metabase_lib_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});
_c = AdminNavbar;
const MobileNavbar = _ref3 => {
  _s2();
  let {
    adminPaths,
    currentPath
  } = _ref3;
  const [mobileNavOpen, setMobileNavOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_13__.useClickOutside)(() => setMobileNavOpen(false));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminMobileNavbar, {
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
      onClick: () => setMobileNavOpen(prev => !prev),
      variant: "subtle",
      p: "0.25rem",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        name: "burger",
        size: 32,
        className: _AdminNavbar_module_css__WEBPACK_IMPORTED_MODULE_10__["default"].MobileHamburgerIcon
      })
    }), mobileNavOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminMobileNavBarItems, {
      "aria-label": ttag__WEBPACK_IMPORTED_MODULE_2__.t`Navigation links`,
      children: [adminPaths.map(_ref4 => {
        let {
          name,
          key,
          path
        } = _ref4;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavItem__WEBPACK_IMPORTED_MODULE_9__.AdminNavItem, {
          name: name,
          path: path,
          currentPath: currentPath
        }, key);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AdminNavbar_styled__WEBPACK_IMPORTED_MODULE_11__.AdminExitLink, {
        to: "/",
        children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Exit admin`
      })]
    })]
  });
};
_s2(MobileNavbar, "tjxBkz1FRy9Sib/P06bB6nbQd4s=", false, function () {
  return [_mantine_hooks__WEBPACK_IMPORTED_MODULE_13__.useClickOutside];
});
_c2 = MobileNavbar;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AdminNavbar");
__webpack_require__.$Refresh$.register(_c2, "MobileNavbar");

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
//# sourceMappingURL=app-main.09c88d2bb81c0fba14f1.hot-update.js.map