"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[3677],{4186:(T,o,t)=>{t.r(o),t.d(o,{default:()=>B});var e=t(67294),n=t(60797),r=t(64593),i=t(86896),m=t(86706),E=t(36364),a=t(46683),d=t(45349),P=t(57713),p=t(79371),C=t(26789),x=t(51541),L=t(42403),h=t(6090),u=t(62351),g=t(78549),A=t(94487),I=t(88767);const O=l=>{const s=(0,n.lm)(),{get:c}=(0,n.kY)();return(0,I.useQuery)(["plugins"],async()=>{const{data:f}=await c("/admin/plugins");return f},{onSuccess(){l&&l()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},D=()=>{const{formatMessage:l}=(0,i.Z)(),{notifyStatus:s}=(0,a.G)();(0,n.go)();const c=l({id:"global.plugins",defaultMessage:"Plugins"}),f=()=>{s(l({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:c}))},{status:M,data:y}=O(f);return M!=="success"&&M!=="error"?e.createElement(d.A,null,e.createElement(P.o,{"aria-busy":!0},e.createElement(n.dO,null))):e.createElement(d.A,null,e.createElement(P.o,null,e.createElement(p.T,{title:c,subtitle:l({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(C.D,null,e.createElement(x.i,{colCount:2,rowCount:y?.plugins?.length??0+1},e.createElement(L.h,null,e.createElement(h.Tr,null,e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.name",defaultMessage:"Name"}))),e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},l({id:"global.description",defaultMessage:"description"}))))),e.createElement(A.p,null,y.plugins.map(({name:v,displayName:N,description:Z})=>e.createElement(h.Tr,{key:v},e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},l({id:`global.plugins.${v}`,defaultMessage:N}))),e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800"},l({id:`global.plugins.${v}.description`,defaultMessage:Z}))))))))))},B=()=>{const{formatMessage:l}=(0,i.Z)(),s=(0,m.v9)(E._);return e.createElement(n.O4,{permissions:s.marketplace.main},e.createElement(r.q,{title:l({id:"global.plugins",defaultMessage:"Plugins"})}),e.createElement(D,null))}},45349:(T,o,t)=>{t.d(o,{A:()=>E});var e=t(85893),n=t(88972),r=t(50781);const i=(0,n.default)(r.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,n.default)(r.x)`
  overflow-x: hidden;
`,E=({sideNav:a,children:d})=>(0,e.jsxs)(i,{hasSideNav:!!a,children:[a,(0,e.jsx)(m,{paddingBottom:10,children:d})]})}}]);
