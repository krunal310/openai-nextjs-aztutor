"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fchat_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fchat_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/chat.js
var chat_namespaceObject = {};
__webpack_require__.r(chat_namespaceObject);
__webpack_require__.d(chat_namespaceObject, {
  "default": () => (chat)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(305);
;// CONCATENATED MODULE: ./pages/api/chat.js
/* harmony default export */ const chat = (async (req, res)=>{
    if (req.method === "POST") {
        try {
            const azureFunctionRes = await fetch(process.env.AZURE_FUNCTION_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: req.body.text
                })
            });
            const data = await azureFunctionRes.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({
                error: "Error communicating with Azure function"
            });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fchat&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fchat.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fchat_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fchat_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(chat_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(chat_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/chat",
        pathname: "/api/chat",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: chat_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(946)));
module.exports = __webpack_exports__;

})();