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





const PopupContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  background-color: #ffffff;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333333;
`;
const FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  margin-bottom: 15px;
`;
const Label = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;
const Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].select`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;
const CheckboxLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].label`
  display: block;
  margin-bottom: 5px;
  font-weight: normal;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${props => props.cancel ? '#dc3545' : '#007bff'};
  color: #ffffff;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.cancel ? '#c82333' : '#0056b3'};
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;
const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 5px;
`;
const ChatWithAIPopup = _ref => {
  _s();
  let {
    onClose
  } = _ref;
  const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [selectedDatabase, setSelectedDatabase] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [databases, setDatabases] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showTable, setShowTable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showVisualization, setShowVisualization] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Function to fetch databases from backend
    const fetchDatabases = async () => {
      try {
        setLoading(true);
        const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/databases'); // Replace with your backend endpoint
        setDatabases(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching databases:', error);
        setLoading(false);
        // Handle error (e.g., show error message)
      }
    };

    fetchDatabases();
  }, []);
  const handleSendRequest = async e => {
    e.preventDefault();

    // Validate inputs
    if (!question || !selectedDatabase || !showTable && !showVisualization) {
      alert('Please fill in all fields and select at least one view option.');
      return;
    }
    try {
      // Example Axios POST request to send data to API
      const response = await axios__WEBPACK_IMPORTED_MODULE_3__["default"].post('/api/chat-with-ai', {
        question,
        database: selectedDatabase,
        showTable,
        showVisualization
      });

      // Handle success (e.g., close popup)
      onClose();
    } catch (error) {
      console.error('Error sending request:', error);
      // Handle error (e.g., show error message)
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(PopupContainer, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Title, {
      children: "Chat with AI"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
      onSubmit: handleSendRequest,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label, {
          children: "Enter your question:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Input, {
          type: "text",
          value: question,
          onChange: e => setQuestion(e.target.value),
          required: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Label, {
          children: "Select database:"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Select, {
          value: selectedDatabase,
          onChange: e => setSelectedDatabase(e.target.value),
          required: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: "",
            children: "Select a database"
          }), loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            disabled: true,
            children: "Loading..."
          }) : databases.map(db => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
            value: db.id,
            children: db.name
          }, db.id))]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CheckboxLabel, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            checked: showTable,
            onChange: e => setShowTable(e.target.checked)
          }), ' ', "Table"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(CheckboxLabel, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            checked: showVisualization,
            onChange: e => setShowVisualization(e.target.checked)
          }), ' ', "Visualization"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(FormGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
          type: "submit",
          children: "View Results"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, {
          type: "button",
          cancel: true,
          onClick: onClose,
          children: "Cancel"
        })]
      })]
    })]
  });
};
_s(ChatWithAIPopup, "+5AiTWYkDr+q/kUwnm8jQijncjY=");
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
//# sourceMappingURL=app-main.3ddb34a52379758fc89f.hot-update.js.map