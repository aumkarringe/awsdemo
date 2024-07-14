/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/settings/setup/components/SetupCheckList/SetupCheckList.jsx":
/*!***************************************************************************!*\
  !*** ./admin/settings/setup/components/SetupCheckList/SetupCheckList.jsx ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var metabase_admin_upsells__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/admin/upsells */ "./admin/upsells/index.ts");
/* harmony import */ var metabase_components_LoadingAndErrorWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/components/LoadingAndErrorWrapper */ "./components/LoadingAndErrorWrapper/index.jsx");
/* harmony import */ var metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/css/core/index.css */ "./css/core/index.css");
/* harmony import */ var metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/lib/colors */ "./lib/colors/index.ts");
/* harmony import */ var metabase_lib_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/lib/dom */ "./lib/dom.js");
/* harmony import */ var metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! metabase/selectors/settings */ "./selectors/settings.ts");
/* harmony import */ var metabase_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! metabase/services */ "./services.js");
/* harmony import */ var metabase_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! metabase/ui */ "./ui/index.ts");
/* harmony import */ var _SetupCheckList_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SetupCheckList.styled */ "./admin/settings/setup/components/SetupCheckList/SetupCheckList.styled.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

/* eslint-disable react/prop-types */
















const TaskList = _ref => {
  let {
    tasks
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("ol", {
    children: tasks.map((task, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
      className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].mb2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(Task, {
        ...task
      })
    }, index))
  });
};
_c = TaskList;
const TaskSectionHeader = _ref2 => {
  let {
    name
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h4", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].textMedium, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].textBold, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].textUppercase, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].pb2),
    children: name
  });
};
_c2 = TaskSectionHeader;
const TaskSection = _ref3 => {
  let {
    name,
    tasks
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].mb4,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TaskSectionHeader, {
      name: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TaskList, {
      tasks: tasks
    })]
  });
};
_c3 = TaskSection;
const TaskTitle = _ref4 => {
  let {
    title,
    titleClassName
  } = _ref4;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h3", {
    className: titleClassName,
    children: title
  });
};
_c4 = TaskTitle;
const TaskDescription = _ref5 => {
  let {
    description
  } = _ref5;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].m0, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].mt1),
    children: description
  });
};
_c5 = TaskDescription;
const CompletionBadge = _ref6 => {
  let {
    completed
  } = _ref6;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].mr2, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].flex, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].alignCenter, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].justifyCenter, metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].flexNoShrink),
    style: {
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: completed ? (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__.color)("success") : (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__.color)("text-light"),
      backgroundColor: completed ? (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__.color)("success") : (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__.color)("text-white"),
      width: 32,
      height: 32,
      borderRadius: 99
    },
    children: completed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_ui__WEBPACK_IMPORTED_MODULE_10__.Icon, {
      name: "check",
      color: (0,metabase_lib_colors__WEBPACK_IMPORTED_MODULE_6__.color)("text-white")
    })
  });
};
_c6 = CompletionBadge;
const Task = _ref7 => {
  let {
    title,
    description,
    completed,
    link
  } = _ref7;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(TaskLink, {
    link: link,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(CompletionBadge, {
      completed: completed
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TaskTitle, {
        title: title,
        titleClassName: completed ? metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].textSuccess : metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].textBrand
      }), !completed ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TaskDescription, {
        description: description
      }) : null]
    })]
  });
};
_c7 = Task;
const TaskLink = _ref8 => {
  let {
    link,
    children
  } = _ref8;
  return (0,metabase_lib_dom__WEBPACK_IMPORTED_MODULE_7__.isSameOrSiteUrlOrigin)(link) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SetupCheckList_styled__WEBPACK_IMPORTED_MODULE_11__.TaskRegularLink, {
    to: link,
    children: children
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SetupCheckList_styled__WEBPACK_IMPORTED_MODULE_11__.TaskExternalLink, {
    href: link,
    children: children
  });
};
_c8 = TaskLink;
class SetupCheckList extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tasks: null,
      error: null
    };
  }
  async componentDidMount() {
    try {
      const tasks = await metabase_services__WEBPACK_IMPORTED_MODULE_9__.SetupApi.admin_checklist();
      this.setState({
        tasks
      });
    } catch (e) {
      this.setState({
        error: e
      });
    }
  }
  render() {
    let tasks, nextTask;
    if (this.state.tasks) {
      tasks = this.state.tasks.map(section => ({
        ...section,
        tasks: section.tasks.filter(task => {
          if (task.is_next_step) {
            nextTask = task;
          }
          return !task.is_next_step;
        })
      }));
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(metabase_ui__WEBPACK_IMPORTED_MODULE_10__.Flex, {
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SetupCheckList_styled__WEBPACK_IMPORTED_MODULE_11__.SetupListRoot, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].px2,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
            children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Getting set up`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_5__["default"].mt1,
            children: ttag__WEBPACK_IMPORTED_MODULE_2__.t`A few things you can do to get the most out of DataLM.ai.`
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_components_LoadingAndErrorWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
            loading: !this.state.tasks,
            error: this.state.error,
            children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              style: {
                maxWidth: 468
              },
              children: [nextTask && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(TaskSection, {
                name: ttag__WEBPACK_IMPORTED_MODULE_2__.t`Recommended next step`,
                tasks: [nextTask]
              }), tasks.map((section, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(TaskSection, {
                ...section,
                key: index
              }))]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_ui__WEBPACK_IMPORTED_MODULE_10__.Box, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_admin_upsells__WEBPACK_IMPORTED_MODULE_3__.UpsellHosting, {
          source: "settings-setup-migrate_to_cloud"
        })
      })]
    });
  }
}
const mapStateToProps = state => ({
  isPaidPlan: (0,metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_8__.getIsPaidPlan)(state)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_13__.connect)(mapStateToProps)(SetupCheckList));
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__webpack_require__.$Refresh$.register(_c, "TaskList");
__webpack_require__.$Refresh$.register(_c2, "TaskSectionHeader");
__webpack_require__.$Refresh$.register(_c3, "TaskSection");
__webpack_require__.$Refresh$.register(_c4, "TaskTitle");
__webpack_require__.$Refresh$.register(_c5, "TaskDescription");
__webpack_require__.$Refresh$.register(_c6, "CompletionBadge");
__webpack_require__.$Refresh$.register(_c7, "Task");
__webpack_require__.$Refresh$.register(_c8, "TaskLink");

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
//# sourceMappingURL=app-main.c8999979e7e48dec6885.hot-update.js.map