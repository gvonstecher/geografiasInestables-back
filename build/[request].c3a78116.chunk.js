"use strict";
(self["webpackChunkback"] = self["webpackChunkback"] || []).push([[6750],{

/***/ 76566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_HomePage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabGroup.js
var TabGroup = __webpack_require__(82777);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(77296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Tabs/TabPanels.js
var TabPanels = __webpack_require__(42761);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Table.js
var Table = __webpack_require__(38939);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tbody.js
var Tbody = __webpack_require__(15234);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(95586);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Thead.js
var Thead = __webpack_require__(8060);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Tr.js
var Tr = __webpack_require__(79031);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Table/Cell.js
var Cell = __webpack_require__(37909);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/VisuallyHidden/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(63237);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Collection/CollectionTableHeader.js




const CollectionTableHeader = () => {
  return /* @__PURE__ */ react.createElement(Thead/* Thead */.h, null, /* @__PURE__ */ react.createElement(Tr.Tr, null, /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "INDEX")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "NAME")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "IN MEILISEARCH ?")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "INDEXING ?")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "INDEX NAME")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "DOCUMENTS")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "sigma" }, "HOOKS")), /* @__PURE__ */ react.createElement(Cell.Th, null, /* @__PURE__ */ react.createElement(VisuallyHidden/* VisuallyHidden */.T, null, "Actions"))));
};
/* harmony default export */ const Collection_CollectionTableHeader = ((0,react.memo)(CollectionTableHeader));

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/BaseCheckbox/BaseCheckbox.js + 2 modules
var BaseCheckbox = __webpack_require__(92155);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Collection/CollectionColumn.js







const CollectionColumn = ({
  entry,
  deleteCollection,
  addCollection,
  updateCollection
}) => {
  return /* @__PURE__ */ react.createElement(Tr.Tr, { key: entry.contentType }, /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(
    BaseCheckbox/* BaseCheckbox */.C,
    {
      "aria-label": `Select ${entry.collection}`,
      onValueChange: () => {
        if (entry.indexed)
          deleteCollection({ contentType: entry.contentType });
        else
          addCollection({ contentType: entry.contentType });
      },
      value: entry.indexed
    }
  )), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.collection)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.indexed ? "Yes" : "No")), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.isIndexing ? "Yes" : "No")), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.indexUid)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.numberOfDocuments, " / ", entry.numberOfEntries)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { textColor: "neutral800" }, entry.reloadNeeded)), /* @__PURE__ */ react.createElement(Cell.Td, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingLeft: 1 }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      onClick: () => updateCollection({ contentType: entry.contentType }),
      size: "S",
      variant: "secondary"
    },
    "Update"
  )))));
};
/* harmony default export */ const Collection_CollectionColumn = ((0,react.memo)(CollectionColumn));

// EXTERNAL MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/pluginId.js
var pluginId = __webpack_require__(80101);
var pluginId_default = /*#__PURE__*/__webpack_require__.n(pluginId);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/Hooks/useAlert.js

function useAlert() {
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const handleNotification = ({
    type = "info",
    message = "Something occured in Meilisearch",
    link,
    blockTransition = true
  }) => {
    toggleNotification({
      // required
      // type: 'info|success|warning',
      type,
      // required
      message: {
        id: "notification.meilisearch.message",
        defaultMessage: message
      },
      // optional
      link,
      // optional: default = false
      blockTransition,
      // optional
      onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true)
    });
  };
  return {
    handleNotification
  };
}
/* harmony default export */ const Hooks_useAlert = (useAlert);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/Hooks/useCollection.js




const hookingTextRendering = ({ indexed, listened }) => {
  if (indexed && !listened)
    return "Reload needed";
  if (!indexed && listened)
    return "Reload needed";
  if (indexed && listened)
    return "Hooked";
  if (!indexed && !listened)
    return "/";
};
function useCollection() {
  const [collections, setCollections] = (0,react.useState)([]);
  const [refetchIndex, setRefetchIndex] = (0,react.useState)(true);
  const [reloadNeeded, setReloadNeeded] = (0,react.useState)(false);
  const [realTimeReports, setRealTimeReports] = (0,react.useState)(false);
  const { handleNotification } = Hooks_useAlert();
  const refetchCollection = () => setRefetchIndex((prevRefetchIndex) => !prevRefetchIndex);
  const fetchCollections = async () => {
    const { data, error } = await (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/content-type/`, {
      method: "GET"
    });
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      const collections2 = data.contentTypes.map((collection) => {
        collection["reloadNeeded"] = hookingTextRendering({
          indexed: collection.indexed,
          listened: collection.listened
        });
        return collection;
      });
      const reload = collections2.find(
        (col) => col.reloadNeeded === "Reload needed"
      );
      const isIndexing = collections2.find((col) => col.isIndexing === true);
      if (!isIndexing)
        setRealTimeReports(false);
      else
        setRealTimeReports(true);
      if (reload) {
        setReloadNeeded(true);
      } else
        setReloadNeeded(false);
      setCollections(collections2);
    }
  };
  const deleteCollection = async ({ contentType }) => {
    const { error } = await (0,helper_plugin_esm/* request */.WY)(
      `/${(pluginId_default())}/content-type/${contentType}`,
      {
        method: "DELETE"
      }
    );
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      refetchCollection();
      handleNotification({
        type: "success",
        message: "Request to delete content-type is successful",
        blockTransition: false
      });
    }
  };
  const addCollection = async ({ contentType }) => {
    const { error } = await (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/content-type`, {
      method: "POST",
      body: {
        contentType
      }
    });
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      refetchCollection();
      handleNotification({
        type: "success",
        message: "Request to add a content-type is successful",
        blockTransition: false
      });
    }
  };
  const updateCollection = async ({ contentType }) => {
    const { error } = await (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/content-type`, {
      method: "PUT",
      body: {
        contentType
      }
    });
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      refetchCollection();
      handleNotification({
        type: "success",
        message: "Request to update content-type is successful",
        blockTransition: false
      });
    }
  };
  (0,react.useEffect)(() => {
    fetchCollections();
  }, [refetchIndex]);
  (0,react.useEffect)(() => {
    let interval;
    if (realTimeReports) {
      interval = setInterval(() => {
        refetchCollection();
      }, 1e3);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [realTimeReports]);
  return {
    collections,
    deleteCollection,
    addCollection,
    updateCollection,
    reloadNeeded,
    refetchCollection,
    handleNotification
  };
}
/* harmony default export */ const Hooks_useCollection = (useCollection);

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Collection/CollectionTable.js









const Collection = () => {
  const {
    collections,
    deleteCollection,
    addCollection,
    updateCollection,
    reloadNeeded,
    refetchCollection
  } = Hooks_useCollection();
  const {
    lockAppWithAutoreload,
    unlockAppWithAutoreload
  } = (0,helper_plugin_esm/* useAutoReloadOverlayBlocker */.Vu)();
  const [reload, setReload] = (0,react.useState)(false);
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const reloadServer = async () => {
    try {
      lockAppWithAutoreload();
      await (0,helper_plugin_esm/* request */.WY)(
        `/${(pluginId_default())}/reload`,
        {
          method: "GET"
        },
        true
      );
      setReload(false);
    } catch (err) {
      console.error(err);
    } finally {
      unlockAppWithAutoreload();
      refetchCollection();
    }
  };
  (0,react.useEffect)(() => {
    if (reload)
      reloadServer();
  }, [reload]);
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(Table/* Table */.i, { colCount: COL_COUNT, rowCount: ROW_COUNT }, /* @__PURE__ */ react.createElement(Collection_CollectionTableHeader, null), /* @__PURE__ */ react.createElement(Tbody/* Tbody */.p, null, collections.map((collection) => /* @__PURE__ */ react.createElement(
    Collection_CollectionColumn,
    {
      key: collection.collection,
      entry: collection,
      deleteCollection,
      addCollection,
      updateCollection
    }
  )))), reloadNeeded && /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 5 }, /* @__PURE__ */ react.createElement(Button/* Button */.z, { onClick: () => setReload(true) }, "Reload server")));
};
/* harmony default export */ const CollectionTable = ((0,react.memo)(Collection));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Collection/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/Hooks/useCredential.js




function useCredential() {
  const [credentials, setCredentials] = (0,react.useState)({
    host: "",
    apiKey: "",
    ApiKeyIsFromConfigFile: true,
    HostIsFromConfigFile: true
  });
  const [refetchIndex, setRefetchIndex] = (0,react.useState)(true);
  const [host, setHost] = (0,react.useState)("");
  const [apiKey, setApiKey] = (0,react.useState)("");
  const { handleNotification } = Hooks_useAlert();
  const refetchCredentials = () => setRefetchIndex((prevRefetchIndex) => !prevRefetchIndex);
  const updateCredentials = async () => {
    const { error } = await (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/credential`, {
      method: "POST",
      body: {
        apiKey,
        host
      }
    });
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      refetchCredentials();
      handleNotification({
        type: "success",
        message: "Credentials sucessfully updated!",
        blockTransition: false
      });
    }
  };
  const fetchCredentials = async () => {
    const { data, error } = await (0,helper_plugin_esm/* request */.WY)(`/${(pluginId_default())}/credential`, {
      method: "GET"
    });
    if (error) {
      handleNotification({
        type: "warning",
        message: error.message,
        link: error.link
      });
    } else {
      setCredentials(data);
      setHost(data.host);
      setApiKey(data.apiKey);
    }
  };
  (0,react.useEffect)(() => {
    fetchCredentials();
  }, [refetchIndex]);
  return {
    credentials,
    updateCredentials,
    setHost,
    setApiKey,
    host,
    apiKey
  };
}
/* harmony default export */ const Hooks_useCredential = ((/* unused pure expression or super */ null && (useCredential)));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Settings/Credentials.js






const Credentials = () => {
  const {
    host,
    apiKey,
    credentials,
    setHost,
    setApiKey,
    updateCredentials
  } = useCredential();
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 2 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      placeholder: "Host",
      label: "Meilisearch Host",
      name: "host",
      hint: "The host on which your Meilisearch is running",
      value: host,
      onChange: (e) => setHost(e.target.value),
      disabled: credentials.HostIsFromConfigFile
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 2 }, /* @__PURE__ */ react.createElement(
    TextInput/* TextInput */.o,
    {
      placeholder: "API key",
      label: "Meilisearch API Key",
      name: "apiKey",
      hint: "A valid API key with enough permission to create indexes (or the master key).",
      onChange: (e) => setApiKey(e.target.value),
      value: apiKey,
      disabled: credentials.ApiKeyIsFromConfigFile,
      "aria-label": "Password",
      type: "password"
    }
  )), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 1, paddingLeft: 2 }, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", style: { color: "red" } }, "Do not use this API key on your front-end as it has too much rights. Instead, use the public key available using", " ", /* @__PURE__ */ react.createElement("a", { href: "https://docs.meilisearch.com/reference/api/keys.html#get-keys" }, "the key route"), ".")), /* @__PURE__ */ react.createElement(Box/* Box */.x, { paddingTop: 2, paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }, /* @__PURE__ */ react.createElement(
    Button/* Button */.z,
    {
      variant: "secondary",
      onClick: () => updateCredentials(),
      disabled: credentials.ApiKeyIsFromConfigFile && credentials.HostIsFromConfigFile
    },
    "Save"
  )));
};
/* harmony default export */ const Settings_Credentials = ((0,react.memo)(Credentials));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Settings/Settings.js



const Settings = () => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 5 }, /* @__PURE__ */ react.createElement(Settings_Credentials, null));
};
/* harmony default export */ const Settings_Settings = ((0,react.memo)(Settings));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/Settings/index.js


;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/PluginTabs/index.js





const PluginTabs = () => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { padding: 8, margin: 10, background: "neutral" }, /* @__PURE__ */ react.createElement(TabGroup/* TabGroup */.v, { label: "Some stuff for the label", id: "tabs" }, /* @__PURE__ */ react.createElement(Tabs/* Tabs */.m, null, /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, "Collections"), /* @__PURE__ */ react.createElement(Tabs/* Tab */.O, null, "Settings")), /* @__PURE__ */ react.createElement(TabPanels/* TabPanels */.n, null, /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(CollectionTable, null))), /* @__PURE__ */ react.createElement(TabPanels/* TabPanel */.x, null, /* @__PURE__ */ react.createElement(Box/* Box */.x, { color: "neutral800", padding: 4, background: "neutral0" }, /* @__PURE__ */ react.createElement(Settings_Settings, null))))));
};
/* harmony default export */ const containers_PluginTabs = ((0,react.memo)(PluginTabs));

// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/ArrowLeft.js
var ArrowLeft = __webpack_require__(67109);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Link/Link.js
var Link = __webpack_require__(23620);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/PluginHeader/index.js





const PluginHeader = () => {
  return /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral100" }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* BaseHeaderLayout */.A,
    {
      navigationAction: /* @__PURE__ */ react.createElement(Link/* Link */.r, { startIcon: /* @__PURE__ */ react.createElement(ArrowLeft/* default */.Z, null), to: "/" }, "Go back"),
      title: "Meilisearch",
      subtitle: "strapi-plugin-meilisearch",
      as: "h2"
    }
  ));
};
/* harmony default export */ const containers_PluginHeader = ((0,react.memo)(PluginHeader));

;// CONCATENATED MODULE: ./node_modules/strapi-plugin-meilisearch/admin/src/containers/HomePage/index.js



const HomePage = () => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(containers_PluginHeader, null), /* @__PURE__ */ react.createElement(containers_PluginTabs, null));
};
/* harmony default export */ const containers_HomePage = ((0,react.memo)(HomePage));


/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ p),
  T: () => (/* binding */ HeaderLayout_b)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 23620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ z)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _strapi_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17772);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73727);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88972);
/* harmony import */ var _themes_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15585);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41580);








const x = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({ disabled: r }) => r ? "none" : void 0};
  color: ${({ disabled: r, theme: o }) => r ? o.colors.neutral600 : o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10 / 16}rem;
  }

  ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({ theme: r }) => r.colors.primary500};
  }

  &:active {
    color: ${({ theme: r }) => r.colors.primary700};
  }

  ${_themes_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .buttonFocusStyle */ .BF};
`, t = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_5__/* .Box */ .x))`
  display: flex;
`, z = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ children: r, href: o, to: i, disabled: n = !1, startIcon: a, endIcon: l, ...c }, d) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(x, { as: i && !n ? react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .NavLink */ .OL : "a", target: o ? "_blank" : void 0, rel: o ? "noreferrer noopener" : void 0, to: n ? void 0 : i, href: n ? "#" : o, disabled: n, ref: d, ...c, children: [a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, { as: "span", "aria-hidden": !0, paddingRight: 2, children: a }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, { children: r }), l && !o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, { as: "span", "aria-hidden": !0, paddingLeft: 2, children: l }), o && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(t, { as: "span", "aria-hidden": !0, paddingLeft: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_strapi_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}) })] }));



/***/ }),

/***/ 67109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const e = (r) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", fill: "none", viewBox: "0 0 24 24", ...r, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  "path",
  {
    fill: "#212134",
    d: "M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"
  }
) }), a = e;



/***/ })

}]);