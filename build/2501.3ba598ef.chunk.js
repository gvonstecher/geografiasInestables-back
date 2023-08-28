"use strict";
(self["webpackChunkback"] = self["webpackChunkback"] || []).push([[2501],{

/***/ 7761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  pl: () => (/* reexport */ hooks_useAuthProviders),
  aY: () => (/* reexport */ hooks_useLicenseLimitNotification),
  q5: () => (/* reexport */ useLicenseLimits/* useLicenseLimits */.q)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(95586);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/reducer.js

const initialState = {
  data: [],
  isLoading: true
};
const reducer = (state, action) => (0,immer_esm/* default */.ZP)(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.data = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useAuthProviders_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/index.js



const useAuthProviders = ({ ssoEnabled }) => {
  const [state, dispatch] = (0,react.useReducer)(useAuthProviders_reducer, initialState);
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  (0,react.useEffect)(() => {
    const fetchAuthProviders = async () => {
      try {
        if (!ssoEnabled) {
          dispatch({
            type: "GET_DATA_SUCCEEDED",
            data: []
          });
          return;
        }
        const { data } = await get("/admin/providers");
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "GET_DATA_ERROR"
        });
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    };
    fetchAuthProviders();
  }, [get, ssoEnabled, toggleNotification]);
  return state;
};
/* harmony default export */ const hooks_useAuthProviders = (useAuthProviders);

// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(14293);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js + 1 modules
var useLicenseLimits = __webpack_require__(71926);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimitNotification/index.js






const STORAGE_KEY_PREFIX = "strapi-notification-seat-limit";
const BILLING_STRAPI_CLOUD_URL = "https://cloud.strapi.io/profile/billing";
const BILLING_SELF_HOSTED_URL = "https://strapi.io/billing/request-seats";
const useLicenseLimitNotification = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  let { license, isError, isLoading } = (0,useLicenseLimits/* useLicenseLimits */.q)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { pathname } = (0,react_router/* useLocation */.TH)();
  const { enforcementUserCount, permittedSeats, licenseLimitStatus, isHostedOnStrapiCloud } = license;
  (0,react.useEffect)(() => {
    if (isError || isLoading) {
      return;
    }
    const shouldDisplayNotification = !isNil_default()(permittedSeats) && !window.sessionStorage.getItem(`${STORAGE_KEY_PREFIX}-${pathname}`) && (licenseLimitStatus === "AT_LIMIT" || licenseLimitStatus === "OVER_LIMIT");
    let notificationType;
    if (licenseLimitStatus === "OVER_LIMIT") {
      notificationType = "warning";
    } else if (licenseLimitStatus === "AT_LIMIT") {
      notificationType = "softWarning";
    }
    if (shouldDisplayNotification) {
      toggleNotification({
        type: notificationType,
        message: formatMessage(
          {
            id: "notification.ee.warning.over-.message",
            defaultMessage: "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."
          },
          { licenseLimitStatus }
        ),
        title: formatMessage(
          {
            id: "notification.ee.warning.at-seat-limit.title",
            defaultMessage: "{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"
          },
          {
            licenseLimitStatus,
            enforcementUserCount,
            permittedSeats
          }
        ),
        link: {
          url: isHostedOnStrapiCloud ? BILLING_STRAPI_CLOUD_URL : BILLING_SELF_HOSTED_URL,
          label: formatMessage(
            {
              id: "notification.ee.warning.seat-limit.link",
              defaultMessage: "{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"
            },
            { isHostedOnStrapiCloud }
          )
        },
        blockTransition: true,
        onClose() {
          window.sessionStorage.setItem(`${STORAGE_KEY_PREFIX}-${pathname}`, true);
        }
      });
    }
  }, [
    toggleNotification,
    license,
    pathname,
    formatMessage,
    isLoading,
    permittedSeats,
    licenseLimitStatus,
    enforcementUserCount,
    isHostedOnStrapiCloud,
    isError
  ]);
};
/* harmony default export */ const hooks_useLicenseLimitNotification = (useLicenseLimitNotification);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/index.js





/***/ }),

/***/ 71926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* reexport */ useLicenseLimits)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(95586);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var es = __webpack_require__(88767);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/useLicenseLimits.js



function useLicenseLimits({ enabled } = { enabled: true }) {
  const { get } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const { data, isError, isLoading } = (0,es.useQuery)(
    ["ee", "license-limit-info"],
    async () => {
      const {
        data: { data: data2 }
      } = await get("/admin/license-limit-information");
      return data2;
    },
    {
      enabled
    }
  );
  const license = data ?? {};
  const getFeature = react.useCallback(
    (name) => {
      const feature = (license?.features ?? []).find((feature2) => feature2.name === name);
      return feature?.options ?? {};
    },
    [license?.features]
  );
  return { license, getFeature, isError, isLoading };
}

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useLicenseLimits/index.js



/***/ }),

/***/ 80090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11047);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84495);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75515);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11276);
/* harmony import */ var _strapi_design_system__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67819);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86896);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88972);






const SSOButton = styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.a`
  width: ${136 / 16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48 / 16}rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({ theme }) => theme.colors.neutral600};
`;
const SSOProvidersWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_strapi_design_system__WEBPACK_IMPORTED_MODULE_2__/* .Flex */ .k))`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({ theme }) => theme.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
`;
const SSOProviderButton = ({ provider }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u, { label: provider.displayName }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { href: `${window.strapi.backendURL}/admin/connect/${provider.uid}` }, provider.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: provider.icon, "aria-hidden": true, alt: "", height: "32px" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_4__/* .Typography */ .Z, null, provider.displayName)));
};
SSOProviderButton.propTypes = {
  provider: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
    displayName: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,
    uid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired
  }).isRequired
};
const SSOProviders = ({ providers, displayAllProviders }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
  if (displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .r, { gap: 4 }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))));
  }
  if (providers.length > 2 && !displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_7__/* .Grid */ .r, { gap: 4 }, providers.slice(0, 2).map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system__WEBPACK_IMPORTED_MODULE_8__/* .GridItem */ .P, { col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system__WEBPACK_IMPORTED_MODULE_3__/* .Tooltip */ .u,
      {
        label: formatMessage({
          id: "global.see-more"
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .Link */ .rU, to: "/auth/providers" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": true }, "\u2022\u2022\u2022"))
    )));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProvidersWrapper, { justifyContent: "center" }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { key: provider.uid, provider })));
};
SSOProviders.defaultProps = {
  displayAllProviders: true
};
SSOProviders.propTypes = {
  providers: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)).isRequired,
  displayAllProviders: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSOProviders);


/***/ }),

/***/ 52501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FORMS: () => (/* binding */ FORMS)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Divider/Divider.js
var Divider = __webpack_require__(70004);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(77197);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(95586);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(68890);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(50745);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/index.js + 3 modules
var hooks = __webpack_require__(7761);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/SSOProviders.js
var SSOProviders = __webpack_require__(80090);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/index.js










const DividerFull = (0,styled_components_browser_esm/* default */.ZP)((0,Divider/* Divider */.i))`
  flex: 1;
`;
const Providers = () => {
  const ssoEnabled = window.strapi.features.isEnabled(window.strapi.features.SSO);
  const { push } = (0,react_router/* useHistory */.k6)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { isLoading, data: providers } = (0,hooks/* useAuthProviders */.pl)({ ssoEnabled });
  const handleClick = () => {
    push("/auth/login");
  };
  if (!ssoEnabled || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react.createElement(react_router/* Redirect */.l_, { to: "/auth/login" });
  }
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.ZP, null, /* @__PURE__ */ react.createElement(Main/* Main */.o, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.bU, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.sg, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.Z, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { as: "h1", variant: "alpha" }, formatMessage({ id: "Auth.form.welcome.title" }))), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.subtitle" })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 7 }, isLoading ? /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({ id: "Auth.login.sso.loading" }))) : /* @__PURE__ */ react.createElement(SSOProviders/* default */.Z, { providers }), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(DividerFull, null), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "or" }))), /* @__PURE__ */ react.createElement(DividerFull, null)), /* @__PURE__ */ react.createElement(Button/* Button */.z, { fullWidth: true, size: "L", onClick: handleClick }, formatMessage({ id: "Auth.form.button.login.strapi" })))), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(helper_plugin_esm/* Link */.rU, { to: "/auth/forgot-password" }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi" }, formatMessage({ id: "Auth.link.forgot-password" })))))));
};
/* harmony default export */ const components_Providers = (Providers);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/constants.js

const FORMS = {
  providers: {
    Component: components_Providers,
    endPoint: null,
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: null,
    inputsPrefix: ""
  }
};


/***/ })

}]);