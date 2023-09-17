"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[349],{26259:(P,m,t)=>{t.r(m),t.d(m,{default:()=>X});var e=t(67294),s=t(60797),d=t(86706),g=t(36364),u=t(75878),E=t(28809),h=t(51541),y=t(62009),T=t(42403),o=t(6090),a=t(62351),i=t(78549),A=t(22996),B=t(94487),Z=t(37527),D=t(12978),R=t(36670),U=t(34263),Q=t(86896),F=t(88767),K=t(16550),N=t(88972),V=t(92686),H=t(7761),L=t(43390),p=t(38705),c=t(86978),Y=t(36530);const z=(0,N.default)(s.rU)`
  align-items: center;
  height: ${(0,s.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:l})=>`${l.spaces[2]}}`};
  width: ${(0,s.Q1)(32)};

  svg {
    height: ${(0,s.Q1)(12)};
    width: ${(0,s.Q1)(12)};

    path {
      fill: ${({theme:l})=>l.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.neutral800};
      }
    }
  }
`;function G(){const{formatMessage:l}=(0,Q.Z)(),{push:x}=(0,K.k6)(),{collectionTypes:J,singleTypes:b,isLoading:q}=(0,V.G)(),{meta:f,workflows:S,isLoading:C,refetch:_}=(0,Y.n)(),[$,M]=e.useState(null),[ee,w]=e.useState(!1),{del:te}=(0,s.kY)(),{formatAPIError:le}=(0,s.So)(),j=(0,s.lm)(),{getFeature:ne,isLoading:I}=(0,H.q5)(),{trackUsage:O}=(0,s.rS)(),se=(0,d.v9)(g._),{allowedActions:{canCreate:W,canDelete:oe}}=(0,s.ss)(se.settings["review-workflows"]),r=ne("review-workflows"),{mutateAsync:ae,isLoading:ie}=(0,F.useMutation)(async({workflowId:n,stages:v})=>{const{data:{data:k}}=await te(`/admin/review-workflows/workflows/${n}`,{data:v});return k},{onSuccess(){j({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),re=n=>[...J,...b].find(k=>k.uid===n).info.displayName,de=n=>{M(n)},ce=()=>{M(null)},fe=async()=>{try{const n=await ae({workflowId:$});return await _(),M(null),n}catch(n){return j({type:"warning",message:le(n)}),null}};return e.useEffect(()=>{!C&&!I&&r?.[c.Ef]&&f?.workflowCount>parseInt(r[c.Ef],10)&&w(!0)},[I,C,r,f?.workflowCount,f.workflowsTotal]),e.createElement(e.Fragment,null,e.createElement(L.h4,{primaryAction:W&&e.createElement(s.Qj,{startIcon:e.createElement(D.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:n=>{r?.[c.Ef]&&f?.workflowCount>=parseInt(r[c.Ef],10)?(n.preventDefault(),w(!0)):O("willCreateWorkflow")}},l({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:l({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:l({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.createElement(L.fC,null,C||q?e.createElement(u.k,{justifyContent:"center"},e.createElement(E.a,null,l({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):e.createElement(h.i,{colCount:3,footer:W&&e.createElement(y.c,{icon:e.createElement(D.Z,null),onClick:()=>{r?.[c.Ef]&&f?.workflowCount>=parseInt(r[c.Ef],10)?w(!0):(x("/settings/review-workflows/create"),O("willCreateWorkflow"))}},l({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},e.createElement(T.h,null,e.createElement(o.Tr,null,e.createElement(a.Th,null,e.createElement(i.Z,{variant:"sigma"},l({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),e.createElement(a.Th,null,e.createElement(i.Z,{variant:"sigma"},l({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),e.createElement(a.Th,null,e.createElement(i.Z,{variant:"sigma"},l({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),e.createElement(a.Th,null,e.createElement(A.T,null,l({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),e.createElement(B.p,null,S.map(n=>e.createElement(o.Tr,{...(0,s.X7)({fn(v){v.target.nodeName!=="BUTTON"&&x(`/settings/review-workflows/${n.id}`)}}),key:`workflow-${n.id}`},e.createElement(a.Td,{width:(0,s.Q1)(250)},e.createElement(i.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},n.name)),e.createElement(a.Td,null,e.createElement(i.Z,{textColor:"neutral800"},n.stages.length)),e.createElement(a.Td,null,e.createElement(i.Z,{textColor:"neutral800"},(n?.contentTypes??[]).map(re).join(", "))),e.createElement(a.Td,null,e.createElement(u.k,{alignItems:"center",justifyContent:"end"},e.createElement(z,{to:`/settings/review-workflows/${n.id}`,"aria-label":l({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:n.name})},e.createElement(R.Z,null)),S.length>1&&oe&&e.createElement(Z.h,{"aria-label":l({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:e.createElement(U.Z,null),noBorder:!0,onClick:()=>{de(n.id)}}))))))),e.createElement(s.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ie,isOpen:!!$,onToggleDialog:ce,onConfirm:fe}),e.createElement(p.fC,{isOpen:ee,onClose:()=>w(!1)},e.createElement(p.Dx,null,l({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(p.uT,null,l({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function X(){const l=(0,d.v9)(g._);return e.createElement(s.O4,{permissions:l.settings["review-workflows"].main},e.createElement(G,null))}},62009:(P,m,t)=>{t.d(m,{c:()=>T});var e=t(85893),s=t(88972),d=t(50781),g=t(81984),u=t(75878),E=t(78549);const h=(0,s.default)(d.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,y=(0,s.default)(d.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,T=({children:o,icon:a,...i})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(g.i,{}),(0,e.jsx)(y,{as:"button",background:"primary100",padding:5,...i,children:(0,e.jsxs)(u.k,{children:[(0,e.jsx)(h,{"aria-hidden":!0,background:"primary200",children:a}),(0,e.jsx)(d.x,{paddingLeft:3,children:(0,e.jsx)(E.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
