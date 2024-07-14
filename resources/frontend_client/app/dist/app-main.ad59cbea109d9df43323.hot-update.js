/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./components/NewItemMenu/NewItemMenu.tsx":
/*!************************************************!*\
  !*** ./components/NewItemMenu/NewItemMenu.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var metabase_components_EntityMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/components/EntityMenu */ "./components/EntityMenu/index.jsx");
/* harmony import */ var metabase_lib_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/lib/redux */ "./lib/redux/index.ts");
/* harmony import */ var metabase_lib_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/lib/urls */ "./lib/urls/index.ts");
/* harmony import */ var metabase_redux_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/redux/ui */ "./redux/ui.ts");
/* harmony import */ var metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/selectors/settings */ "./selectors/settings.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();








const NewItemMenu = _ref => {
  _s();
  let {
    className,
    collectionId,
    trigger,
    triggerIcon,
    triggerTooltip,
    hasModels,
    hasDataAccess,
    hasNativeWrite,
    hasDatabaseWithJsonEngine,
    hasDatabaseWithActionsEnabled,
    onCloseNavbar
  } = _ref;
  const dispatch = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const lastUsedDatabaseId = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => (0,metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_6__.getSetting)(state, "last-used-native-database-id"));
  const menuItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const items = [];
    items.push({
      title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Chat with AI`,
      icon: "chat",
      action: handleOpenChatModal
    });
    if (hasDataAccess) {
      items.push({
        title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Question`,
        icon: "insight",
        link: metabase_lib_urls__WEBPACK_IMPORTED_MODULE_4__.newQuestion({
          mode: "notebook",
          creationType: "custom_question",
          collectionId,
          cardType: "question"
        }),
        onClose: onCloseNavbar
      });
    }
    if (hasNativeWrite) {
      items.push({
        title: hasDatabaseWithJsonEngine ? ttag__WEBPACK_IMPORTED_MODULE_1__.t`Native query` : ttag__WEBPACK_IMPORTED_MODULE_1__.t`SQL query`,
        icon: "sql",
        link: metabase_lib_urls__WEBPACK_IMPORTED_MODULE_4__.newQuestion({
          type: "native",
          creationType: "native_question",
          collectionId,
          cardType: "question",
          databaseId: lastUsedDatabaseId || undefined
        }),
        onClose: onCloseNavbar
      });
    }
    items.push({
      title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Dashboard`,
      icon: "dashboard",
      action: () => dispatch((0,metabase_redux_ui__WEBPACK_IMPORTED_MODULE_5__.setOpenModal)("dashboard"))
    }, {
      title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Collection`,
      icon: "folder",
      action: () => dispatch((0,metabase_redux_ui__WEBPACK_IMPORTED_MODULE_5__.setOpenModal)("collection"))
    });
    if (hasNativeWrite) {
      const collectionQuery = collectionId ? `?collectionId=${collectionId}` : "";
      items.push({
        title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Model`,
        icon: "model",
        link: `/model/new${collectionQuery}`,
        onClose: onCloseNavbar
      });
    }
    if (hasModels && hasDatabaseWithActionsEnabled && hasNativeWrite) {
      items.push({
        title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Action`,
        icon: "bolt",
        action: () => dispatch((0,metabase_redux_ui__WEBPACK_IMPORTED_MODULE_5__.setOpenModal)("action"))
      });
    }
    if (hasDataAccess) {
      items.push({
        title: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Metric`,
        icon: "metric",
        link: metabase_lib_urls__WEBPACK_IMPORTED_MODULE_4__.newQuestion({
          mode: "query",
          cardType: "metric",
          collectionId
        }),
        onClose: onCloseNavbar
      });
    }
    return items;
  }, [hasDataAccess, hasNativeWrite, hasModels, hasDatabaseWithActionsEnabled, collectionId, onCloseNavbar, hasDatabaseWithJsonEngine, dispatch, lastUsedDatabaseId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_components_EntityMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    items: menuItems,
    trigger: trigger,
    triggerIcon: triggerIcon,
    tooltip: triggerTooltip
    // I've disabled this transition, since it results in the menu
    // sometimes not appearing until content finishes loading on complex
    // dashboards and questions #39303
    // TODO: Try to restore this transition once we upgrade to React 18 and can prioritize this update
    ,

    transitionDuration: 0
  });
};

// eslint-disable-next-line import/no-default-export -- deprecated usage
_s(NewItemMenu, "E4jqDED9YsQNrh42RsCnlWWSjrw=", false, function () {
  return [metabase_lib_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, metabase_lib_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});
_c = NewItemMenu;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewItemMenu);
function handleOpenChatModal() {
  throw new Error("Function not implemented.");
}
var _c;
__webpack_require__.$Refresh$.register(_c, "NewItemMenu");

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
//# sourceMappingURL=app-main.ad59cbea109d9df43323.hot-update.js.map