/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./components/NewItemMenu/ChatWithAIPopup.jsx":
/*!****************************************************!*\
  !*** ./components/NewItemMenu/ChatWithAIPopup.jsx ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/lib/axios.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var console = __webpack_require__(/*! ../../../node_modules/console-browserify/index.js */ "../../../node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();





const ChatWithAIPopupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  // ... (styles remain unchanged)
`;
const ChatWithAIPopup = _ref => {
  _s();
  let {
    onClose,
    items,
    selectedItem,
    onClick
  } = _ref;
  const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [viewTable, setViewTable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [viewVisualization, setViewVisualization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [apiResults, setApiResults] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const tableApiUrl = "https://h44jxk3hxe.execute-api.us-east-1.amazonaws.com/dev/generate_sql";
  const visualizationApiUrl = "https://uhwye4890j.execute-api.us-east-1.amazonaws.com/dev/generate_visual";
  const handleSubmit = async () => {
    if (!question || !selectedItem || !viewTable && !viewVisualization) {
      setError("Please fill in all fields and select at least one view option.");
      return;
    }
    setError("");
    setLoading(true);
    const apiCalls = [];
    if (viewTable) {
      apiCalls.push(axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(tableApiUrl, {
        user_query: question
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }));
    }
    if (viewVisualization) {
      apiCalls.push(axios__WEBPACK_IMPORTED_MODULE_3__["default"].post(visualizationApiUrl, {
        user_query: question
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }));
    }
    try {
      const responses = await Promise.all(apiCalls);
      setLoading(false);
      responses.forEach(response => {
        const result = response.data;
        console.log('Result', result);
        const cardUrl = result.card_url;
        if (cardUrl) {
          window.open(cardUrl, '_blank');
        } else {
          console.error("card_url not found in the response");
        }
      });
      setApiResults(responses.map(response => response.data));
      onClose(); // Close the modal after successful submission
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };
  const sendDBIndex = async item => {
    let indexValue = "";
    switch (item.name) {
      case "automotive":
        indexValue = "llm_vector_db_metadata_indx2";
        break;
      case "Sample Database":
        indexValue = "llm_vector_db_metadata_indx1";
        break;
      case "Chinook":
        indexValue = "llm_vector_db_metadata_indx3";
        break;
      default:
        indexValue = "llm_vector_db_default_index";
        break;
    }
    const payload = {
      name: "INDEX",
      value: indexValue
    };
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('https://ki1asceryj.execute-api.us-east-1.amazonaws.com/dev/update-parameter', payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log('DBIndex API response:', response.data);
    } catch (error) {
      console.error('Error sending DBIndex to API:', error);
    }
  };
  const handleItemClick = async item => {
    const payload = {
      name: "METABASE_DATABASE_NAME",
      value: item.name
    };
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('https://ki1asceryj.execute-api.us-east-1.amazonaws.com/dev/update-parameter', payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log('API response:', response.data);
      await sendDBIndex(item);
      onClick(item);
    } catch (error) {
      console.error('Error sending item to API:', error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ChatWithAIPopupWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      children: "Chat with AI"
    }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "error",
      children: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        htmlFor: "question",
        children: "Enter your question:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "text",
        id: "question",
        value: question,
        onChange: e => setQuestion(e.target.value)
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        children: "Select Database:"
      }), items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => handleItemClick(item),
          style: {
            fontWeight: selectedItem && selectedItem.id === item.id ? 'bold' : 'normal'
          },
          children: item.name
        })
      }, item.id))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        children: "How do you want to view your data?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "checkboxes",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            id: "viewTable",
            checked: viewTable,
            onChange: e => setViewTable(e.target.checked)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            htmlFor: "viewTable",
            children: "Table"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            id: "viewVisualization",
            checked: viewVisualization,
            onChange: e => setViewVisualization(e.target.checked)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
            htmlFor: "viewVisualization",
            children: "Visualization"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "form-group buttons",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: handleSubmit,
        disabled: loading,
        children: loading ? "Loading..." : "View Results"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        onClick: onClose,
        children: "Cancel"
      })]
    })]
  });
};
_s(ChatWithAIPopup, "BSOqZCMvIi+mdlG1e1aTCcjT5uE=");
_c = ChatWithAIPopup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatWithAIPopup);
var _c;
__webpack_require__.$Refresh$.register(_c, "ChatWithAIPopup");

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
//# sourceMappingURL=app-main.a5d69bc5d930da7a0e9a.hot-update.js.map