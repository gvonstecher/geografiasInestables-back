(self.webpackChunkback=self.webpackChunkback||[]).push([[2282],{8884:(p,m,t)=>{"use strict";t.r(m),t.d(m,{ProvidersPage:()=>le,default:()=>Ae});var a=t(67294),o=t(46683),r=t(45349),s=t(57713),l=t(79371),e=t(26789),n=t(51541),c=t(42403),f=t(6090),x=t(62351),v=t(78549),u=t(22996),h=t(94487),$=t(37527),i=t(60797),d=t(36670),E=t(18721),O=t.n(E),w=t(11700),W=t.n(w),H=t(86896),F=t(88767),he=t(60881),me=t(18189),ge=t(48683),fe=t(75878),pe=t(9370),ve=t(61585),be=t(45124),ne=t(19442),xe=t(601),ye=t(49873),$e=t(41054),Ee=t(45697),g=t.n(Ee),Pe=t(58885),Me=t(28469);const X=({description:y,disabled:B,intlLabel:L,error:A,name:T,onChange:S,placeholder:j,providerToEditName:U,type:z,value:P})=>{const{formatMessage:R}=(0,H.Z)(),D=T==="noName"?`${window.strapi.backendURL}/api/connect/${U}/callback`:P,I=R({id:L.id,defaultMessage:L.defaultMessage},{provider:U,...L.values}),Z=y?R({id:y.id,defaultMessage:y.defaultMessage},{provider:U,...y.values}):"";if(z==="bool")return a.createElement(Pe.s,{"aria-label":T,checked:P,disabled:B,hint:Z,label:I,name:T,offLabel:R({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:R({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:_=>{S({target:{name:T,value:_.target.checked}})}});const q=j?R({id:j.id,defaultMessage:j.defaultMessage},{...j.values}):"",N=A?R({id:A,defaultMessage:A}):"";return a.createElement(Me.o,{"aria-label":T,disabled:B,error:N,label:I,name:T,onChange:S,placeholder:q,type:z,value:D})};X.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},X.propTypes={description:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}),disabled:g().bool,error:g().string,intlLabel:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}).isRequired,name:g().string.isRequired,onChange:g().func.isRequired,placeholder:g().shape({id:g().string.isRequired,defaultMessage:g().string.isRequired,values:g().object}),providerToEditName:g().string.isRequired,type:g().string.isRequired,value:g().oneOfType([g().bool,g().string])};const Be=X,V=({headerBreadcrumbs:y,initialData:B,isSubmiting:L,layout:A,isOpen:T,onSubmit:S,onToggle:j,providerToEditName:U})=>{const{formatMessage:z}=(0,H.Z)();return T?a.createElement(he.P,{onClose:j,labelledBy:"title"},a.createElement(me.x,null,a.createElement(xe.O,{label:y.join(", ")},y.map((P,R,D)=>a.createElement(ye.$,{isCurrent:R===D.length-1,key:P},P)))),a.createElement($e.J9,{onSubmit:P=>S(P),initialValues:B,validationSchema:A.schema,validateOnChange:!1},({errors:P,handleChange:R,values:D})=>a.createElement(i.l0,null,a.createElement(ge.f,null,a.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:1},a.createElement(pe.r,{gap:5},A.form.map(I=>I.map(Z=>a.createElement(ve.P,{key:Z.name,col:Z.size,xs:12},a.createElement(Be,{...Z,error:P[Z.name],onChange:R,value:D[Z.name],providerToEditName:U}))))))),a.createElement(be.m,{startActions:a.createElement(ne.z,{variant:"tertiary",onClick:j,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:a.createElement(ne.z,{type:"submit",loading:L},z({id:"global.save",defaultMessage:"Save"}))})))):null};V.defaultProps={initialData:null,providerToEditName:null},V.propTypes={headerBreadcrumbs:g().arrayOf(g().string).isRequired,initialData:g().object,layout:g().shape({form:g().arrayOf(g().array),schema:g().object}).isRequired,isOpen:g().bool.isRequired,isSubmiting:g().bool.isRequired,onSubmit:g().func.isRequired,onToggle:g().func.isRequired,providerToEditName:g().string};const Ce=V;var ae=t(84419),M=t(99688);const Oe=async y=>{try{const{get:B}=(0,i.tg)(),{data:L}=await B("/users-permissions/providers");return L}catch{throw y({type:"warning",message:{id:"notification.error"}}),new Error("error")}},Te=y=>{const{put:B}=(0,i.tg)();return B("/users-permissions/providers",y)};var Le=t(89734),je=t.n(Le);const Re=y=>je()(Object.keys(y).reduce((B,L)=>{const{icon:A,enabled:T,subdomain:S}=y[L],j=A==="envelope"?["fas","envelope"]:["fab",A];return S!==void 0?B.push({name:L,icon:j,enabled:T,subdomain:S}):B.push({name:L,icon:j,enabled:T}),B},[]),"name");var b=t(87561);const re={id:(0,M.OB)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},se={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},G={id:(0,M.OB)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},J={id:(0,M.OB)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},ie={id:(0,M.OB)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},oe={id:(0,M.OB)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},K={id:(0,M.OB)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},de={id:(0,M.OB)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},Y={email:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required)})},providers:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required),key:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),secret:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),callback:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()})})},providersWithSubdomain:{form:[[{intlLabel:J,name:"enabled",type:"bool",description:G,size:6,validations:{required:!0}}],[{intlLabel:ie,name:"key",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:de,name:"secret",type:"text",placeholder:K,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,M.OB)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:K,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,M.OB)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,M.OB)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:re,placeholder:se,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:oe,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:b.Ry().shape({enabled:b.Xg().required(i.I0.required),key:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),secret:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),subdomain:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()}),callback:b.Z_().when("enabled",{is:!0,then:b.Z_().required(i.I0.required),otherwise:b.Z_()})})}},le=()=>{const{formatMessage:y}=(0,H.Z)();(0,i.go)();const{notifyStatus:B}=(0,o.G)(),L=(0,F.useQueryClient)(),{trackUsage:A}=(0,i.rS)(),T=(0,a.useRef)(A),[S,j]=(0,a.useState)(!1),[U,z]=(0,a.useState)(!1),[P,R]=(0,a.useState)(null),D=(0,i.lm)(),{lockApp:I,unlockApp:Z}=(0,i.o1)(),{isLoading:q,allowedActions:{canUpdate:N}}=(0,i.ss)({update:ae._.updateProviders}),{isLoading:_,data:k,isFetching:Ze}=(0,F.useQuery)("get-providers",()=>Oe(D),{onSuccess(){B(y({id:(0,M.OB)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),Se=_||Ze,ze=(0,F.useMutation)(Te,{async onSuccess(){await L.invalidateQueries("get-providers"),D({type:"info",message:{id:(0,M.OB)("notification.success.submit")}}),T.current("didEditAuthenticationProvider"),z(!1),ee(),Z()},onError(){D({type:"warning",message:{id:"notification.error"}}),Z(),z(!1)},refetchActive:!1}),Q=(0,a.useMemo)(()=>Re(k),[k]),De=Q.length,ue=(0,a.useMemo)(()=>{if(!P)return!1;const C=Q.find(te=>te.name===P);return O()(C,"subdomain")},[Q,P]),we=y({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"}),Ue=(0,a.useMemo)(()=>P==="email"?Y.email:ue?Y.providersWithSubdomain:Y.providers,[P,ue]),ee=()=>{j(C=>!C)},ce=C=>{N&&(R(C.name),ee())},We=async C=>{z(!0),I(),T.current("willEditAuthenticationProvider");const te={...k,[P]:C};ze.mutate({providers:te})};return a.createElement(r.A,null,a.createElement(i.SL,{name:we}),a.createElement(s.o,null,a.createElement(l.T,{title:y({id:(0,M.OB)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Se||q?a.createElement(i.dO,null):a.createElement(e.D,null,a.createElement(n.i,{colCount:3,rowCount:De+1},a.createElement(c.h,null,a.createElement(f.Tr,null,a.createElement(x.Th,null,a.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},y({id:"global.name",defaultMessage:"Name"}))),a.createElement(x.Th,null,a.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},y({id:(0,M.OB)("Providers.status"),defaultMessage:"Status"}))),a.createElement(x.Th,null,a.createElement(v.Z,{variant:"sigma"},a.createElement(u.T,null,y({id:"global.settings",defaultMessage:"Settings"})))))),a.createElement(h.p,null,Q.map(C=>a.createElement(f.Tr,{key:C.name,...(0,i.X7)({fn:()=>ce(C),condition:N})},a.createElement(x.Td,{width:"45%"},a.createElement(v.Z,{fontWeight:"semiBold",textColor:"neutral800"},C.name)),a.createElement(x.Td,{width:"65%"},a.createElement(v.Z,{textColor:C.enabled?"success600":"danger600","data-testid":`enable-${C.name}`},C.enabled?y({id:"global.enabled",defaultMessage:"Enabled"}):y({id:"global.disabled",defaultMessage:"Disabled"}))),a.createElement(x.Td,{...i.UW},N&&a.createElement($.h,{onClick:()=>ce(C),noBorder:!0,icon:a.createElement(d.Z,null),label:"Edit"})))))))),a.createElement(Ce,{initialData:k[P],isOpen:S,isSubmiting:U,layout:Ue,headerBreadcrumbs:[y({id:(0,M.OB)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),W()(P)],onToggle:ee,onSubmit:We,providerToEditName:P}))},Ae=()=>a.createElement(i.O4,{permissions:ae._.readProviders},a.createElement(le,null))},99688:(p,m,t)=>{"use strict";t.d(m,{YX:()=>s,OB:()=>l.Z});var a=t(41609),o=t.n(a);const s=e=>Object.keys(e).reduce((n,c)=>{const f=e[c].controllers,x=Object.keys(f).reduce((v,u)=>(o()(f[u])||(v[u]=f[u]),v),{});return o()(x)||(n[c]={controllers:x}),n},{});var l=t(97961)},89881:(p,m,t)=>{var a=t(47816),o=t(99291),r=o(a);p.exports=r},69199:(p,m,t)=>{var a=t(89881),o=t(98612);function r(s,l){var e=-1,n=o(s)?Array(s.length):[];return a(s,function(c,f,x){n[++e]=l(c,f,x)}),n}p.exports=r},82689:(p,m,t)=>{var a=t(29932),o=t(97786),r=t(67206),s=t(69199),l=t(71131),e=t(7518),n=t(85022),c=t(6557),f=t(1469);function x(v,u,h){u.length?u=a(u,function(d){return f(d)?function(E){return o(E,d.length===1?d[0]:d)}:d}):u=[c];var $=-1;u=a(u,e(r));var i=s(v,function(d,E,O){var w=a(u,function(W){return W(d)});return{criteria:w,index:++$,value:d}});return l(i,function(d,E){return n(d,E,h)})}p.exports=x},71131:p=>{function m(t,a){var o=t.length;for(t.sort(a);o--;)t[o]=t[o].value;return t}p.exports=m},26393:(p,m,t)=>{var a=t(33448);function o(r,s){if(r!==s){var l=r!==void 0,e=r===null,n=r===r,c=a(r),f=s!==void 0,x=s===null,v=s===s,u=a(s);if(!x&&!u&&!c&&r>s||c&&f&&v&&!x&&!u||e&&f&&v||!l&&v||!n)return 1;if(!e&&!c&&!u&&r<s||u&&l&&n&&!e&&!c||x&&l&&n||!f&&n||!v)return-1}return 0}p.exports=o},85022:(p,m,t)=>{var a=t(26393);function o(r,s,l){for(var e=-1,n=r.criteria,c=s.criteria,f=n.length,x=l.length;++e<f;){var v=a(n[e],c[e]);if(v){if(e>=x)return v;var u=l[e];return v*(u=="desc"?-1:1)}}return r.index-s.index}p.exports=o},99291:(p,m,t)=>{var a=t(98612);function o(r,s){return function(l,e){if(l==null)return l;if(!a(l))return r(l,e);for(var n=l.length,c=s?n:-1,f=Object(l);(s?c--:++c<n)&&e(f[c],c,f)!==!1;);return l}}p.exports=o},89734:(p,m,t)=>{var a=t(21078),o=t(82689),r=t(5976),s=t(16612),l=r(function(e,n){if(e==null)return[];var c=n.length;return c>1&&s(e,n[0],n[1])?n=[]:c>2&&s(n[0],n[1],n[2])&&(n=[n[0]]),o(e,a(n,1),[])});p.exports=l},26789:(p,m,t)=>{"use strict";t.d(m,{D:()=>r});var a=t(85893),o=t(50781);const r=({children:s})=>(0,a.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:s})},79371:(p,m,t)=>{"use strict";t.d(m,{T:()=>x});var a=t(85893),o=t(67294),r=t(88972);const s=h=>{const $=(0,o.useRef)(null),[i,d]=(0,o.useState)(!0),E=([O])=>{d(O.isIntersecting)};return(0,o.useEffect)(()=>{const O=$.current,w=new IntersectionObserver(E,h);return O&&w.observe($.current),()=>{O&&w.disconnect()}},[$,h]),[$,i]};var l=t(79698);const e=(h,$)=>{const i=(0,l.W)($);(0,o.useLayoutEffect)(()=>{const d=new ResizeObserver(i);return Array.isArray(h)?h.forEach(E=>{E.current&&d.observe(E.current)}):h.current&&d.observe(h.current),()=>{d.disconnect()}},[h,i])};var n=t(50781),c=t(75878),f=t(78549);const x=h=>{const $=(0,o.useRef)(null),[i,d]=(0,o.useState)(null),[E,O]=s({root:null,rootMargin:"0px",threshold:0});return e(E,()=>{E.current&&d(E.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{$.current&&d($.current.getBoundingClientRect())},[$]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:i?.height},ref:E,children:O&&(0,a.jsx)(u,{ref:$,...h})}),!O&&(0,a.jsx)(u,{...h,sticky:!0,width:i?.width})]})};x.displayName="HeaderLayout";const v=(0,r.default)(n.x)`
  width: ${({width:h})=>h?`${h/16}rem`:void 0};
  z-index: ${({theme:h})=>h.zIndices[1]};
`,u=o.forwardRef(({navigationAction:h,primaryAction:$,secondaryAction:i,subtitle:d,title:E,sticky:O,width:w,...W},H)=>{const F=typeof d=="string";return O?(0,a.jsx)(v,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:w,"data-strapi-header-sticky":!0,children:(0,a.jsxs)(c.k,{justifyContent:"space-between",children:[(0,a.jsxs)(c.k,{children:[h&&(0,a.jsx)(n.x,{paddingRight:3,children:h}),(0,a.jsxs)(n.x,{children:[(0,a.jsx)(f.Z,{variant:"beta",as:"h1",...W,children:E}),F?(0,a.jsx)(f.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),i?(0,a.jsx)(n.x,{paddingLeft:4,children:i}):null]}),(0,a.jsx)(c.k,{children:$?(0,a.jsx)(n.x,{paddingLeft:2,children:$}):void 0})]})}):(0,a.jsxs)(n.x,{ref:H,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:h?6:8,background:"neutral100","data-strapi-header":!0,children:[h?(0,a.jsx)(n.x,{paddingBottom:2,children:h}):null,(0,a.jsxs)(c.k,{justifyContent:"space-between",children:[(0,a.jsxs)(c.k,{minWidth:0,children:[(0,a.jsx)(f.Z,{as:"h1",variant:"alpha",...W,children:E}),i?(0,a.jsx)(n.x,{paddingLeft:4,children:i}):null]}),$]}),F?(0,a.jsx)(f.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},45349:(p,m,t)=>{"use strict";t.d(m,{A:()=>e});var a=t(85893),o=t(88972),r=t(50781);const s=(0,o.default)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:n})=>n?"auto 1fr":"1fr"};
`,l=(0,o.default)(r.x)`
  overflow-x: hidden;
`,e=({sideNav:n,children:c})=>(0,a.jsxs)(s,{hasSideNav:!!n,children:[n,(0,a.jsx)(l,{paddingBottom:10,children:c})]})},57713:(p,m,t)=>{"use strict";t.d(m,{o:()=>l});var a=t(85893),o=t(88972),r=t(50781);const s=(0,o.default)(r.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:e="main-content-title",...n})=>(0,a.jsx)(s,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...n})},30850:(p,m,t)=>{"use strict";t.d(m,{x:()=>l});var a=t(88972),o=t(97991),r=t(61156);const s={color:!0,cursor:!0,height:!0,width:!0},l=a.default.div.withConfig({shouldForwardProp:(e,n)=>!s[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>(0,r.$)(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>(0,r.$)(e.colors,n,n)};
  color: ${({theme:e,color:n})=>(0,r.$)(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>(0,o.Z)("padding",n,e)}
  ${({theme:e,paddingTop:n})=>(0,o.Z)("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>(0,o.Z)("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>(0,o.Z)("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>(0,o.Z)("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>(0,o.Z)("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>(0,o.Z)("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>(0,o.Z)("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>(0,o.Z)("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:c})=>n?e.borderRadius:c};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>(0,r.$)(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:c,borderWidth:f})=>{if(n&&!c&&typeof f>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>(0,r.$)(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>(0,r.$)(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>(0,r.$)(n.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:n})=>(0,r.$)(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},57638:(p,m,t)=>{"use strict";t.d(m,{Z:()=>$});var a=t(88972);const o="alpha",r="beta",s="delta",l="epsilon",e="omega",n="pi",c="sigma",f=[o,r,s,l,e,n,c],x=({ellipsis:i=!1})=>i&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,v=({variant:i=e,theme:d})=>{switch(i){case o:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[5]};
        line-height: ${d.lineHeights[2]};
      `;case r:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[4]};
        line-height: ${d.lineHeights[1]};
      `;case s:return`
        font-weight: ${d.fontWeights.semiBold};
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[2]};
      `;case l:return`
        font-size: ${d.fontSizes[3]};
        line-height: ${d.lineHeights[6]};
      `;case e:return`
        font-size: ${d.fontSizes[2]};
        line-height: ${d.lineHeights[4]};
      `;case n:return`
        font-size: ${d.fontSizes[1]};
        line-height: ${d.lineHeights[3]};
      `;case c:return`
        font-weight: ${d.fontWeights.bold};
        font-size: ${d.fontSizes[0]};
        line-height: ${d.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${d.fontSizes[2]};
      `}};var u=t(61156);const h={fontSize:!0,fontWeight:!0},$=a.default.span.withConfig({shouldForwardProp:(i,d)=>!h[i]&&d(i)})`
  ${v}
  ${x}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:i,fontWeight:d})=>(0,u.$)(i.fontWeights,d,void 0)};
  font-size: ${({theme:i,fontSize:d})=>(0,u.$)(i.fontSizes,d,void 0)};
  line-height: ${({theme:i,lineHeight:d})=>(0,u.$)(i.lineHeights,d,d)};
  color: ${({theme:i,textColor:d})=>i.colors[d||"neutral800"]};
  text-align: ${({textAlign:i})=>i};
  text-decoration: ${({textDecoration:i})=>i};
  text-transform: ${({textTransform:i})=>i};
`},97991:(p,m,t)=>{"use strict";t.d(m,{Z:()=>a});const a=(o,r,s)=>{if(!r)return;let l=Array.isArray(r)?r:[];if(!Array.isArray(r)&&typeof r=="object"&&(l=[r?.desktop,r?.tablet,r?.mobile]),l.length>0)return l.reduce((n,c,f)=>{if(c)switch(f){case 0:return`${n}${o}: ${s.spaces[c]};`;case 1:return`${n}${s.mediaQueries.tablet}{${o}: ${s.spaces[c]};}`;case 2:return`${n}${s.mediaQueries.mobile}{${o}: ${s.spaces[c]};}`;default:return n}return n},"");const e=s.spaces[r]||r;return`${o}: ${e};`}},61156:(p,m,t)=>{"use strict";t.d(m,{$:()=>r});function a(s,l){return typeof s=="string"?!1:l in s}function o(s){return s&&typeof s=="object"&&!Array.isArray(s)}function r(s,l,e){return l&&a(s,l)?s[l]:e}},601:(p,m,t)=>{"use strict";t.d(m,{O:()=>v});var a=t(85893),o=t(67294),r=t(88972),s=t(30850),l=t(57638);const e=()=>(0,a.jsx)(s.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,a.jsx)(l.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var n=t(97991);const c={direction:!0},f=(0,r.default)(s.x).withConfig({shouldForwardProp:(u,h)=>!c[u]&&h(u)})`
  align-items: ${({alignItems:u="center"})=>u};
  display: ${({display:u="flex",inline:h})=>h?"inline-flex":u};
  flex-direction: ${({direction:u="row"})=>u};
  flex-shrink: ${({shrink:u})=>u};
  flex-wrap: ${({wrap:u})=>u};
  ${({gap:u,theme:h})=>(0,n.Z)("gap",u,h)};
  justify-content: ${({justifyContent:u})=>u};
`,x=(0,r.default)(f)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,v=({label:u,children:h,...$})=>{const i=o.Children.toArray(h);return(0,a.jsx)(s.x,{"aria-label":u,...$,children:(0,a.jsx)(x,{as:"ol",children:o.Children.map(i,(d,E)=>{const O=i.length>1&&E+1<i.length;return(0,a.jsxs)(f,{inline:!0,as:"li",children:[d,O&&(0,a.jsx)(e,{})]})})})})};v.displayName="Breadcrumbs"},49873:(p,m,t)=>{"use strict";t.d(m,{$:()=>s});var a=t(85893),o=t(30850),r=t(57638);const s=({children:l,isCurrent:e=!1,...n})=>(0,a.jsx)(o.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,a.jsx)(r.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...n,children:l})});s.displayName="Crumb"}}]);
