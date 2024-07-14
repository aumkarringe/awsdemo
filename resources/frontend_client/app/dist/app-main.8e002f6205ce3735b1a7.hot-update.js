/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./query_builder/components/view/ViewHeader/components/ExploreResultsLink.tsx":
/*!************************************************************************************!*\
  !*** ./query_builder/components/view/ViewHeader/components/ExploreResultsLink.tsx ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

var _reportData_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreResultsLink: () => (/* binding */ ExploreResultsLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var metabase_core_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/core/components/Link */ "./core/components/Link/index.ts");
/* harmony import */ var metabase_query_builder_components_view_ViewButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/query_builder/components/view/ViewButton */ "./query_builder/components/view/ViewButton.tsx");
/* harmony import */ var metabase_lib_v1_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase-lib/v1/urls */ "../metabase-lib/v1/urls.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/lib/axios.js");
/* harmony import */ var _reportData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportData.json */ "./query_builder/components/view/ViewHeader/components/reportData.json");
/* harmony import */ var _LogoBase64__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LogoBase64 */ "./query_builder/components/view/ViewHeader/components/LogoBase64.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var console = __webpack_require__(/*! ../../../node_modules/console-browserify/index.js */ "../../../node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature(),
  _s2 = __webpack_require__.$Refresh$.signature();





 // Import Axios for making HTTP requests





const CardIdPopover = _ref => {
  _s();
  let {
    cardId,
    setCardId,
    handleDownload,
    handleClosePopup
  } = _ref;
  const [submitHovered, setSubmitHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [cancelHovered, setCancelHovered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "popup",
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "popup-inner",
      style: {
        background: 'linear-gradient(to bottom, var(--mb-color-navbar-bg), #38508C, #1A253B)',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#ecf0f1'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
        children: "Enter Card ID"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
        type: "text",
        value: cardId,
        onChange: e => setCardId(e.target.value),
        placeholder: "Card ID",
        style: {
          marginBottom: '20px',
          padding: '10px',
          width: '80%'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        style: {
          margin: '0 10px',
          padding: '10px 20px',
          color: submitHovered ? 'var(--mb-color-brand)' : 'white',
          // White text color or var(--mb-color-brand) on hover
          border: '2px solid var(--mb-color-brand)',
          // Border with mb-color-brand
          background: 'none',
          // Transparent background
          cursor: 'pointer' // Pointer cursor
        },

        onClick: handleDownload,
        onMouseEnter: () => setSubmitHovered(true),
        onMouseLeave: () => setSubmitHovered(false),
        children: "Submit"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        style: {
          margin: '0 10px',
          padding: '10px 20px',
          color: cancelHovered ? 'var(--mb-color-brand)' : 'white',
          // White text color or var(--mb-color-brand) on hover
          border: '2px solid var(--mb-color-brand)',
          // Border with mb-color-brand
          background: 'none',
          // Transparent background
          cursor: 'pointer' // Pointer cursor
        },

        onClick: handleClosePopup,
        onMouseEnter: () => setCancelHovered(true),
        onMouseLeave: () => setCancelHovered(false),
        children: "Cancel"
      })]
    })
  });
};
_s(CardIdPopover, "z3hs1rZIWIX97e2Ov9o7xcarzUM=");
_c = CardIdPopover;
function ExploreResultsLink(_ref2) {
  _s2();
  let {
    question
  } = _ref2;
  const [showPopup, setShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [cardId, setCardId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const query = question.isSaved() ? question.composeQuestionAdhoc() : undefined;
  const button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_query_builder_components_view_ViewButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: !query,
    medium: true,
    icon: "insight",
    labelBreakpoint: "sm",
    children: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Explore results`
  });
  const reportButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_query_builder_components_view_ViewButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    medium: true,
    icon: "insight",
    labelBreakpoint: "sm",
    onClick: () => setShowPopup(true),
    children: ttag__WEBPACK_IMPORTED_MODULE_1__.t`Report`
  });
  function generateReportHTML(jsonData) {
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>${jsonData.heading}</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            color: #ecf0f1;
            background-color: #0d0d1a;
          }
          h1 {
            color: #ecf0f1;
            font-size: 2.5em;
            border-bottom: 2px solid #2980b9;
            padding-bottom: 0.3em;
            margin-bottom: 0.5em;
          }
          h2 {
            color: #ecf0f1;
            font-size: 2em;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
          }
          p {
            color: #bdc3c7;
            font-size: 1.1em;
            line-height: 1.6em;
            margin-bottom: 1.2em;
          }
          ul {
            color: #bdc3c7;
            font-size: 1.1em;
            line-height: 1.6em;
            margin-bottom: 1.2em;
            list-style-type: square;
            padding-left: 20px;
          }
          .content {
            max-width: 800px;
            margin: 0 auto;
            background: #34495e;
            padding: 20px 30px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            border-radius: 8px;
          }
          @media (max-width: 600px) {
            body {
              padding: 10px;
            }
            .content {
              padding: 15px 20px;
            }
          }
          .top-left {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 145px;
            height: 60px;
          }
          .bottom-right {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 145px;
            height: 60px;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <img src="${_LogoBase64__WEBPACK_IMPORTED_MODULE_6__.LogoBase64}" class="top-left">
          <h1>${jsonData.heading}</h1>
    `;
    jsonData.sections.forEach(section => {
      htmlContent += `
        <h2>${section.subheading}</h2>
      `;
      section.paragraphs.forEach(paragraph => {
        htmlContent += `
          <p>${paragraph}</p>
        `;
      });
      if (section.insightsSummary) {
        htmlContent += `<h3>Insights Summary</h3><ul>`;
        section.insightsSummary.forEach(insight => {
          htmlContent += `<li>${insight}</li>`;
        });
        htmlContent += `</ul>`;
      }
      if (section.actionableInsights) {
        htmlContent += `<h3>Actionable Insights</h3><ul>`;
        section.actionableInsights.forEach(insight => {
          htmlContent += `<li>${insight}</li>`;
        });
        htmlContent += `</ul>`;
      }
      if (section.forecastSummary) {
        htmlContent += `
          <h3>Forecast Summary</h3>
          <p>${section.forecastSummary}</p>
        `;
      }
    });
    htmlContent += `
        </div>
        <img src="${_LogoBase64__WEBPACK_IMPORTED_MODULE_6__.LogoBase64}" class="bottom-right">
      </body>
      </html>
    `;
    return htmlContent;
  }
  const handleDownload = async () => {
    const payload = {
      card_id: cardId
    };
    try {
      // Make the HTTP POST request using Axios
      const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].post('url_endpoint_here',
      // Replace with your actual endpoint
      payload, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      // Process response if needed
      const data = response.data;

      // Generate the HTML content from the JSON data
      const htmlContent = generateReportHTML(/*#__PURE__*/ (_reportData_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_reportData_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_reportData_json__WEBPACK_IMPORTED_MODULE_5__, 2))));

      // Create a Blob object
      const blob = new Blob([htmlContent], {
        type: 'text/html'
      });

      // Create a URL for the Blob
      const downloadUrl = URL.createObjectURL(blob);

      // Create an anchor element and trigger the download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'report.html';
      a.click();

      // Release the URL object
      URL.revokeObjectURL(downloadUrl);

      // Close the popup
      setShowPopup(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error as needed
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [query ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_core_components_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      to: (0,metabase_lib_v1_urls__WEBPACK_IMPORTED_MODULE_4__.getUrl)(query.setDisplay("table").setSettings({})),
      children: button
    }) : button, reportButton, showPopup && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CardIdPopover, {
      cardId: cardId,
      setCardId: setCardId,
      handleDownload: handleDownload,
      handleClosePopup: handleClosePopup
    })]
  });
}
_s2(ExploreResultsLink, "ZzCcdL/SkZq/s30Wwi6P9bZk0OQ=");
_c2 = ExploreResultsLink;
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "CardIdPopover");
__webpack_require__.$Refresh$.register(_c2, "ExploreResultsLink");

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
//# sourceMappingURL=app-main.8e002f6205ce3735b1a7.hot-update.js.map