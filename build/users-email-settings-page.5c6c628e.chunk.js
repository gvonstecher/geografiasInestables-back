"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[8418],{84210:(j,p,n)=>{n.r(p),n.d(p,{default:()=>le});var t=n(67294),l=n(46683),i=n(57713),r=n(79371),h=n(26789),e=n(60797),a=n(86896),u=n(88767),E=n(84419),m=n(99688),T=n(60881),c=n(18189),d=n(48683),g=n(9370),o=n(61585),s=n(20603),$=n(45124),v=n(19442),L=n(601),A=n(49873),z=n(41054),Z=n(45697),y=n.n(Z),C=n(87561);const J=C.Ry().shape({options:C.Ry().shape({from:C.Ry().shape({name:C.Z_().required(e.I0.required),email:C.Z_().email(e.I0.email).required(e.I0.required)}).required(),response_email:C.Z_().email(e.I0.email),object:C.Z_().required(e.I0.required),message:C.Z_().required(e.I0.required)}).required(e.I0.required)}),w=({template:f,onToggle:x,onSubmit:b})=>{const{formatMessage:M}=(0,a.Z)();return t.createElement(T.P,{onClose:x,labelledBy:`${M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,m.OB)(f.display),defaultMessage:f.display})}`},t.createElement(c.x,null,t.createElement(L.O,{label:`${M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${M({id:(0,m.OB)(f.display),defaultMessage:f.display})}`},t.createElement(A.$,null,M({id:(0,m.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),t.createElement(A.$,{isCurrent:!0},M({id:(0,m.OB)(f.display),defaultMessage:f.display})))),t.createElement(z.J9,{onSubmit:b,initialValues:f,validateOnChange:!1,validationSchema:J,enableReinitialize:!0},({errors:O,values:P,handleChange:R,isSubmitting:W})=>t.createElement(e.l0,null,t.createElement(d.f,null,t.createElement(g.r,{gap:5},t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:R,value:P.options.from.name,error:O?.options?.from?.name,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:R,value:P.options.from.email,error:O?.options?.from?.email,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:R,value:P.options.response_email,error:O?.options?.response_email,type:"text"})),t.createElement(o.P,{col:6,s:12},t.createElement(e.jm,{intlLabel:{id:(0,m.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:R,value:P.options.object,error:O?.options?.object,type:"text"})),t.createElement(o.P,{col:12,s:12},t.createElement(s.g,{label:M({id:(0,m.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:R,value:P.options.message,error:O?.options?.message&&M({id:O.options.message,defaultMessage:O.options.message})})))),t.createElement($.m,{startActions:t.createElement(v.z,{onClick:x,variant:"tertiary"},"Cancel"),endActions:t.createElement(v.z,{loading:W,type:"submit"},"Finish")}))))};w.propTypes={template:y().shape({display:y().string,icon:y().string,options:y().shape({from:y().shape({name:y().string,email:y().string}),message:y().string,object:y().string,response_email:y().string})}).isRequired,onSubmit:y().func.isRequired,onToggle:y().func.isRequired};const Y=w;var k=n(51541),q=n(42403),D=n(6090),B=n(62351),H=n(22996),I=n(78549),_=n(94487),F=n(80907),K=n(37527),ee=n(61378),N=n(36670),te=n(8675);const Q=({canUpdate:f,onEditClick:x})=>{const{formatMessage:b}=(0,a.Z)();return t.createElement(k.i,{colCount:3,rowCount:3},t.createElement(q.h,null,t.createElement(D.Tr,null,t.createElement(B.Th,{width:"1%"},t.createElement(H.T,null,b({id:(0,m.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),t.createElement(B.Th,null,t.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},b({id:(0,m.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),t.createElement(B.Th,{width:"1%"},t.createElement(H.T,null,b({id:(0,m.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),t.createElement(_.p,null,t.createElement(D.Tr,{...(0,e.X7)({fn:()=>x("reset_password")})},t.createElement(B.Td,null,t.createElement(F.J,null,t.createElement(ee.Z,{"aria-label":b({id:"global.reset-password",defaultMessage:"Reset password"})}))),t.createElement(B.Td,null,t.createElement(I.Z,null,b({id:"global.reset-password",defaultMessage:"Reset password"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>x("reset_password"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)}))),t.createElement(D.Tr,{...(0,e.X7)({fn:()=>x("email_confirmation")})},t.createElement(B.Td,null,t.createElement(F.J,null,t.createElement(te.Z,{"aria-label":b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),t.createElement(B.Td,null,t.createElement(I.Z,null,b({id:(0,m.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),t.createElement(B.Td,{...e.UW},t.createElement(K.h,{onClick:()=>x("email_confirmation"),label:b({id:(0,m.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:f&&t.createElement(N.Z,null)})))))};Q.propTypes={canUpdate:y().bool.isRequired,onEditClick:y().func.isRequired};const ae=Q,ne=async()=>{const{get:f}=(0,e.tg)(),{data:x}=await f("/users-permissions/email-templates");return x},se=f=>{const{put:x}=(0,e.tg)();return x("/users-permissions/email-templates",f)},ie=()=>t.createElement(e.O4,{permissions:E._.readEmailTemplates},t.createElement(oe,null)),oe=()=>{const{formatMessage:f}=(0,a.Z)(),{trackUsage:x}=(0,e.rS)(),{notifyStatus:b}=(0,l.G)(),M=(0,e.lm)(),{lockApp:O,unlockApp:P}=(0,e.o1)(),R=(0,t.useRef)(x),W=(0,u.useQueryClient)();(0,e.go)();const[re,de]=(0,t.useState)(!1),[V,me]=(0,t.useState)(null),{isLoading:ce,allowedActions:{canUpdate:he}}=(0,e.ss)({update:E._.updateEmailTemplates}),{status:ue,data:X}=(0,u.useQuery)("email-templates",()=>ne(),{onSuccess(){b(f({id:(0,m.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),pe=ce||ue!=="success",U=()=>{de(S=>!S)},ge=S=>{me(S),U()},G=(0,u.useMutation)(S=>se({"email-templates":S}),{async onSuccess(){await W.invalidateQueries("email-templates"),M({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),R.current("didEditEmailTemplates"),P(),U()},onError(){M({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P()},refetchActive:!0}),{isLoading:fe}=G,Ee=S=>{O(),R.current("willEditEmailTemplates");const $e={...X,[V]:S};G.mutate($e)};return pe?t.createElement(i.o,{"aria-busy":"true"},t.createElement(e.SL,{name:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(h.D,null,t.createElement(e.dO,null))):t.createElement(i.o,{"aria-busy":fe},t.createElement(e.SL,{name:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(r.T,{title:f({id:(0,m.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),t.createElement(h.D,null,t.createElement(ae,{onEditClick:ge,canUpdate:he}),re&&t.createElement(Y,{template:X[V],onToggle:U,onSubmit:Ee})))},le=ie},99688:(j,p,n)=>{n.d(p,{YX:()=>r,OB:()=>h.Z});var t=n(41609),l=n.n(t);const r=e=>Object.keys(e).reduce((a,u)=>{const E=e[u].controllers,m=Object.keys(E).reduce((T,c)=>(l()(E[c])||(T[c]=E[c]),T),{});return l()(m)||(a[u]={controllers:m}),a},{});var h=n(97961)},26789:(j,p,n)=>{n.d(p,{D:()=>i});var t=n(85893),l=n(50781);const i=({children:r})=>(0,t.jsx)(l.x,{paddingLeft:10,paddingRight:10,children:r})},79371:(j,p,n)=>{n.d(p,{T:()=>m});var t=n(85893),l=n(67294),i=n(88972);const r=d=>{const g=(0,l.useRef)(null),[o,s]=(0,l.useState)(!0),$=([v])=>{s(v.isIntersecting)};return(0,l.useEffect)(()=>{const v=g.current,L=new IntersectionObserver($,d);return v&&L.observe(g.current),()=>{v&&L.disconnect()}},[g,d]),[g,o]};var h=n(79698);const e=(d,g)=>{const o=(0,h.W)(g);(0,l.useLayoutEffect)(()=>{const s=new ResizeObserver(o);return Array.isArray(d)?d.forEach($=>{$.current&&s.observe($.current)}):d.current&&s.observe(d.current),()=>{s.disconnect()}},[d,o])};var a=n(50781),u=n(75878),E=n(78549);const m=d=>{const g=(0,l.useRef)(null),[o,s]=(0,l.useState)(null),[$,v]=r({root:null,rootMargin:"0px",threshold:0});return e($,()=>{$.current&&s($.current.getBoundingClientRect())}),(0,l.useEffect)(()=>{g.current&&s(g.current.getBoundingClientRect())},[g]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:o?.height},ref:$,children:v&&(0,t.jsx)(c,{ref:g,...d})}),!v&&(0,t.jsx)(c,{...d,sticky:!0,width:o?.width})]})};m.displayName="HeaderLayout";const T=(0,i.default)(a.x)`
  width: ${({width:d})=>d?`${d/16}rem`:void 0};
  z-index: ${({theme:d})=>d.zIndices[1]};
`,c=l.forwardRef(({navigationAction:d,primaryAction:g,secondaryAction:o,subtitle:s,title:$,sticky:v,width:L,...A},z)=>{const Z=typeof s=="string";return v?(0,t.jsx)(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:L,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{children:[d&&(0,t.jsx)(a.x,{paddingRight:3,children:d}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(E.Z,{variant:"beta",as:"h1",...A,children:$}),Z?(0,t.jsx)(E.Z,{variant:"pi",textColor:"neutral600",children:s}):s]}),o?(0,t.jsx)(a.x,{paddingLeft:4,children:o}):null]}),(0,t.jsx)(u.k,{children:g?(0,t.jsx)(a.x,{paddingLeft:2,children:g}):void 0})]})}):(0,t.jsxs)(a.x,{ref:z,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:d?6:8,background:"neutral100","data-strapi-header":!0,children:[d?(0,t.jsx)(a.x,{paddingBottom:2,children:d}):null,(0,t.jsxs)(u.k,{justifyContent:"space-between",children:[(0,t.jsxs)(u.k,{minWidth:0,children:[(0,t.jsx)(E.Z,{as:"h1",variant:"alpha",...A,children:$}),o?(0,t.jsx)(a.x,{paddingLeft:4,children:o}):null]}),g]}),Z?(0,t.jsx)(E.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:s}):s]})})},57713:(j,p,n)=>{n.d(p,{o:()=>h});var t=n(85893),l=n(88972),i=n(50781);const r=(0,l.default)(i.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,h=({labelledBy:e="main-content-title",...a})=>(0,t.jsx)(r,{"aria-labelledby":e,as:"main",id:"main-content",tabIndex:-1,...a})},30850:(j,p,n)=>{n.d(p,{x:()=>h});var t=n(88972),l=n(97991),i=n(61156);const r={color:!0,cursor:!0,height:!0,width:!0},h=t.default.div.withConfig({shouldForwardProp:(e,a)=>!r[e]&&a(e)})`
  // Font
  font-size: ${({fontSize:e,theme:a})=>(0,i.$)(a.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:a})=>(0,i.$)(e.colors,a,a)};
  color: ${({theme:e,color:a})=>(0,i.$)(e.colors,a,void 0)};

  // Spaces
  ${({theme:e,padding:a})=>(0,l.Z)("padding",a,e)}
  ${({theme:e,paddingTop:a})=>(0,l.Z)("padding-top",a,e)}
  ${({theme:e,paddingRight:a})=>(0,l.Z)("padding-right",a,e)}
  ${({theme:e,paddingBottom:a})=>(0,l.Z)("padding-bottom",a,e)}
  ${({theme:e,paddingLeft:a})=>(0,l.Z)("padding-left",a,e)}
  ${({theme:e,marginLeft:a})=>(0,l.Z)("margin-left",a,e)}
  ${({theme:e,marginRight:a})=>(0,l.Z)("margin-right",a,e)}
  ${({theme:e,marginTop:a})=>(0,l.Z)("margin-top",a,e)}
  ${({theme:e,marginBottom:a})=>(0,l.Z)("margin-bottom",a,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:a})=>a?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:a})=>a?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:a,borderRadius:u})=>a?e.borderRadius:u};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:a})=>(0,i.$)(a.colors,e,void 0)};
  border: ${({theme:e,borderColor:a,borderStyle:u,borderWidth:E})=>{if(a&&!u&&typeof E>"u")return`1px solid ${e.colors[a]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:a})=>(0,i.$)(e.shadows,a,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:a})=>e?e(a):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  right: ${({right:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  top: ${({top:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  bottom: ${({bottom:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-width: ${({minWidth:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  height: ${({height:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};
  min-height: ${({minHeight:e,theme:a})=>(0,i.$)(a.spaces,e,e)};

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
  line-height: ${({theme:e,lineHeight:a})=>(0,i.$)(e.lineHeights,a,a)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`},57638:(j,p,n)=>{n.d(p,{Z:()=>g});var t=n(88972);const l="alpha",i="beta",r="delta",h="epsilon",e="omega",a="pi",u="sigma",E=[l,i,r,h,e,a,u],m=({ellipsis:o=!1})=>o&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,T=({variant:o=e,theme:s})=>{switch(o){case l:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[5]};
        line-height: ${s.lineHeights[2]};
      `;case i:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[4]};
        line-height: ${s.lineHeights[1]};
      `;case r:return`
        font-weight: ${s.fontWeights.semiBold};
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[2]};
      `;case h:return`
        font-size: ${s.fontSizes[3]};
        line-height: ${s.lineHeights[6]};
      `;case e:return`
        font-size: ${s.fontSizes[2]};
        line-height: ${s.lineHeights[4]};
      `;case a:return`
        font-size: ${s.fontSizes[1]};
        line-height: ${s.lineHeights[3]};
      `;case u:return`
        font-weight: ${s.fontWeights.bold};
        font-size: ${s.fontSizes[0]};
        line-height: ${s.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${s.fontSizes[2]};
      `}};var c=n(61156);const d={fontSize:!0,fontWeight:!0},g=t.default.span.withConfig({shouldForwardProp:(o,s)=>!d[o]&&s(o)})`
  ${T}
  ${m}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:o,fontWeight:s})=>(0,c.$)(o.fontWeights,s,void 0)};
  font-size: ${({theme:o,fontSize:s})=>(0,c.$)(o.fontSizes,s,void 0)};
  line-height: ${({theme:o,lineHeight:s})=>(0,c.$)(o.lineHeights,s,s)};
  color: ${({theme:o,textColor:s})=>o.colors[s||"neutral800"]};
  text-align: ${({textAlign:o})=>o};
  text-decoration: ${({textDecoration:o})=>o};
  text-transform: ${({textTransform:o})=>o};
`},97991:(j,p,n)=>{n.d(p,{Z:()=>t});const t=(l,i,r)=>{if(!i)return;let h=Array.isArray(i)?i:[];if(!Array.isArray(i)&&typeof i=="object"&&(h=[i?.desktop,i?.tablet,i?.mobile]),h.length>0)return h.reduce((a,u,E)=>{if(u)switch(E){case 0:return`${a}${l}: ${r.spaces[u]};`;case 1:return`${a}${r.mediaQueries.tablet}{${l}: ${r.spaces[u]};}`;case 2:return`${a}${r.mediaQueries.mobile}{${l}: ${r.spaces[u]};}`;default:return a}return a},"");const e=r.spaces[i]||i;return`${l}: ${e};`}},61156:(j,p,n)=>{n.d(p,{$:()=>i});function t(r,h){return typeof r=="string"?!1:h in r}function l(r){return r&&typeof r=="object"&&!Array.isArray(r)}function i(r,h,e){return h&&t(r,h)?r[h]:e}},601:(j,p,n)=>{n.d(p,{O:()=>T});var t=n(85893),l=n(67294),i=n(88972),r=n(30850),h=n(57638);const e=()=>(0,t.jsx)(r.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral500",children:"/"})});e.displayName="Divider";var a=n(97991);const u={direction:!0},E=(0,i.default)(r.x).withConfig({shouldForwardProp:(c,d)=>!u[c]&&d(c)})`
  align-items: ${({alignItems:c="center"})=>c};
  display: ${({display:c="flex",inline:d})=>d?"inline-flex":c};
  flex-direction: ${({direction:c="row"})=>c};
  flex-shrink: ${({shrink:c})=>c};
  flex-wrap: ${({wrap:c})=>c};
  ${({gap:c,theme:d})=>(0,a.Z)("gap",c,d)};
  justify-content: ${({justifyContent:c})=>c};
`,m=(0,i.default)(E)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:c})=>`calc(-1*${c.spaces[2]})`};
  }
`,T=({label:c,children:d,...g})=>{const o=l.Children.toArray(d);return(0,t.jsx)(r.x,{"aria-label":c,...g,children:(0,t.jsx)(m,{as:"ol",children:l.Children.map(o,(s,$)=>{const v=o.length>1&&$+1<o.length;return(0,t.jsxs)(E,{inline:!0,as:"li",children:[s,v&&(0,t.jsx)(e,{})]})})})})};T.displayName="Breadcrumbs"},49873:(j,p,n)=>{n.d(p,{$:()=>r});var t=n(85893),l=n(30850),i=n(57638);const r=({children:h,isCurrent:e=!1,...a})=>(0,t.jsx)(l.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(i.Z,{variant:"pi",textColor:"neutral800",fontWeight:e?"bold":"normal","aria-current":e,...a,children:h})});r.displayName="Crumb"}}]);
