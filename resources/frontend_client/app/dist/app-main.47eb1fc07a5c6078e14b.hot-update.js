/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./nav/components/ProfileLink/ProfileLink.jsx":
/*!****************************************************!*\
  !*** ./nav/components/ProfileLink/ProfileLink.jsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "../../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "../../../node_modules/underscore/modules/index-all.js");
/* harmony import */ var metabase_admin_app_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/admin/app/selectors */ "./admin/app/selectors.ts");
/* harmony import */ var metabase_common_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/common/hooks */ "./common/hooks/index.ts");
/* harmony import */ var metabase_components_EntityMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/components/EntityMenu */ "./components/EntityMenu/index.jsx");
/* harmony import */ var metabase_components_LogoIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/components/LogoIcon */ "./components/LogoIcon/index.jsx");
/* harmony import */ var metabase_components_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! metabase/components/Modal */ "./components/Modal/index.tsx");
/* harmony import */ var metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! metabase/css/core/index.css */ "./css/core/index.css");
/* harmony import */ var metabase_lib_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! metabase/lib/colors */ "./lib/colors/index.ts");
/* harmony import */ var metabase_lib_formatting__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! metabase/lib/formatting */ "./lib/formatting.js");
/* harmony import */ var metabase_lib_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! metabase/lib/redux */ "./lib/redux/index.ts");
/* harmony import */ var metabase_lib_urls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! metabase/lib/urls */ "./lib/urls/index.ts");
/* harmony import */ var metabase_selectors_whitelabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! metabase/selectors/whitelabel */ "./selectors/whitelabel/index.ts");
/* harmony import */ var _useHelpLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useHelpLink */ "./nav/components/ProfileLink/useHelpLink.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();



















// generate the proper set of list items for the current user
// based on whether they're an admin or not


const mapStateToProps = state => ({
  adminItems: (0,metabase_admin_app_selectors__WEBPACK_IMPORTED_MODULE_4__.getAdminPaths)(state)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_17__.connect)(mapStateToProps)(ProfileLink));
function ProfileLink(_ref) {
  _s();
  let {
    adminItems,
    onLogout
  } = _ref;
  const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const version = (0,metabase_common_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting)("version");
  const applicationName = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(metabase_selectors_whitelabel__WEBPACK_IMPORTED_MODULE_14__.getApplicationName);
  const {
    tag,
    date,
    ...versionExtra
  } = version;
  const helpLink = (0,_useHelpLink__WEBPACK_IMPORTED_MODULE_15__.useHelpLink)();
  const openModal = modalName => {
    setModalOpen(modalName);
  };
  const closeModal = () => {
    setModalOpen(null);
  };
  const generateOptionsForUser = () => {
    const showAdminSettingsItem = adminItems?.length > 0;
    return [{
      title: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Account settings`,
      icon: null,
      link: metabase_lib_urls__WEBPACK_IMPORTED_MODULE_13__.accountSettings(),
      event: `Navbar;Profile Dropdown;Edit Profile`
    }, showAdminSettingsItem && {
      title: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Admin settings`,
      icon: null,
      link: "/admin",
      event: `Navbar;Profile Dropdown;Enter Admin`
    }, helpLink.visible && {
      title: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Help`,
      icon: null,
      link: helpLink.href,
      externalLink: true,
      event: `Navbar;Profile Dropdown;About ${tag}`
    }, {
      title: ttag__WEBPACK_IMPORTED_MODULE_2__.t`About ${applicationName}`,
      icon: null,
      action: () => openModal("about"),
      event: `Navbar;Profile Dropdown;About ${tag}`
    }, {
      title: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Sign out`,
      icon: null,
      action: () => onLogout(),
      event: `Navbar;Profile Dropdown;Logout`
    }].filter(Boolean);
  };

  // show trademark if application name is not whitelabeled
  const isWhiteLabeling = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(metabase_selectors_whitelabel__WEBPACK_IMPORTED_MODULE_14__.getIsWhiteLabeling);
  const showTrademark = !isWhiteLabeling;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(metabase_components_EntityMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tooltip: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Settings`,
      items: generateOptionsForUser(),
      triggerIcon: "gear",
      triggerProps: {
        color: (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_10__.color)("text-medium"),
        hover: {
          backgroundColor: (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_10__.color)("brand"),
          color: (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_10__.color)("text-white")
        }
      }
      // I've disabled this transition, since it results in the menu
      // sometimes not appearing until content finishes loading on complex
      // dashboards and questions #39303
      // TODO: Try to restore this transition once we upgrade to React 18 and can prioritize this update
      ,

      transitionDuration: 0
    }), modalOpen === "about" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(metabase_components_Modal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      small: true,
      onClose: closeModal,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].px4, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].pt4, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].pb2, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textCentered, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].relative),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textBrand, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].pb2),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(metabase_components_LogoIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {
            height: 48
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("h2", {
          style: {
            fontSize: "1.75em"
          },
          className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textDark,
          children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Thanks for using ${applicationName}!`
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].pt2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("h3", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textDark, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].mb1),
            children: [ttag__WEBPACK_IMPORTED_MODULE_2__.t`You're on version`, " ", tag]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p", {
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textMedium, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textBold),
            children: [ttag__WEBPACK_IMPORTED_MODULE_2__.t`Built on`, " ", date]
          }), !/^v\d+\.\d+\.\d+$/.test(tag) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            children: underscore__WEBPACK_IMPORTED_MODULE_3__["default"].map(versionExtra, (value, key) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("p", {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textMedium, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textBold),
              children: [(0,metabase_lib_formatting__WEBPACK_IMPORTED_MODULE_11__.capitalize)(key), ": ", value]
            }, key))
          })]
        })]
      }), showTrademark && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        style: {
          borderWidth: "2px"
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].p2, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].h5, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textCentered, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textMedium, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].borderTop),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
          className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].block,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_9__["default"].textBold,
            children: "DataLM.ai"
          }), " ", ttag__WEBPACK_IMPORTED_MODULE_2__.t`is a Trademark of`, " DataLM.ai, Inc"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
          children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`and is built with care by a team from all across this pale blue dot.`
        })]
      })]
    }) : null]
  });
}
_s(ProfileLink, "44FRbFZw1mU9gtTIn5rYaFKlcQs=", false, function () {
  return [metabase_common_hooks__WEBPACK_IMPORTED_MODULE_5__.useSetting, metabase_lib_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector, _useHelpLink__WEBPACK_IMPORTED_MODULE_15__.useHelpLink, metabase_lib_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector];
});
_c = ProfileLink;
ProfileLink.propTypes = {
  adminItems: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().array),
  onLogout: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func).isRequired
};
var _c;
__webpack_require__.$Refresh$.register(_c, "ProfileLink");

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
//# sourceMappingURL=app-main.47eb1fc07a5c6078e14b.hot-update.js.map