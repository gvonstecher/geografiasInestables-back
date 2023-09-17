"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[5199],{54920:(L,o,e)=>{e.d(o,{R:()=>r});var t=e(60797),l=e(88767);function r(n={},d={}){const{id:a="",...s}=n,{get:g}=(0,t.kY)(),{data:i,isError:u,isLoading:P,refetch:D}=(0,l.useQuery)(["users",a,s],async()=>{const{data:{data:f}}=await g(`/admin/users/${a}`,{params:s});return f},d);let p=[];return a&&i?p=[i]:Array.isArray(i?.results)&&(p=i.results),{users:p,pagination:i?.pagination??null,isLoading:P,isError:u,refetch:D}}},71359:(L,o,e)=>{e.d(o,{Z:()=>u});var t=e(67294),l=e(50781),r=e(19442),n=e(60797),d=e(36002),a=e(45697),s=e.n(a),g=e(86896);const i=({displayedFilters:P})=>{const[D,p]=(0,t.useState)(!1),{formatMessage:f}=(0,g.Z)(),C=(0,t.useRef)(),R=()=>{p(O=>!O)};return t.createElement(t.Fragment,null,t.createElement(l.x,{paddingTop:1,paddingBottom:1},t.createElement(r.z,{variant:"tertiary",ref:C,startIcon:t.createElement(d.Z,null),onClick:R,size:"S"},f({id:"app.utils.filters",defaultMessage:"Filters"})),D&&t.createElement(n.J5,{displayedFilters:P,isVisible:D,onToggle:R,source:C})),t.createElement(n.W$,{filtersSchema:P}))};i.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const u=i},61611:(L,o,e)=>{e.d(o,{W:()=>pe,Z:()=>be});var t=e(67294),l=e(57713),r=e(79371),n=e(15483),d=e(26789),a=e(60797),s=e(80129),g=e.n(s),i=e(86896),u=e(88767),P=e(86706),D=e(16550),p=e(54920),f=e(80902),C=e(36364),R=e(71359),O=e(19442),b=e(46948),se=e(45697),E=e.n(se);const q=({onClick:c})=>{const{formatMessage:h}=(0,i.Z)();return t.createElement(O.z,{onClick:c,startIcon:t.createElement(b.Z,null),size:"S"},h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:E().func.isRequired};var ne=e(94487),Z=e(6090),G=e(62351),le=e(62779),F=e(78549),j=e(75878),ee=e(37527),M=e(50781),fe=e(36670),Me=e(34263),re=e(35209);const oe=({canDelete:c,headers:h,entriesToDelete:U,onClickDelete:k,onSelectRow:N,withMainAction:z,withBulkActions:W,rows:B})=>{const{push:A,location:{pathname:V}}=(0,D.k6)(),{formatMessage:T}=(0,i.Z)();return t.createElement(ne.p,null,B.map(m=>{const $=U.findIndex(S=>S===m.id)!==-1;return t.createElement(Z.Tr,{key:m.id,...(0,a.X7)({fn:()=>A(`${V}/${m.id}`),condition:W})},z&&t.createElement(G.Td,{...a.UW},t.createElement(le.C,{"aria-label":T({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.Pp)(m.firstname,m.lastname)}),checked:$,onChange:()=>{N({name:m.id,value:!$})}})),h.map(({key:S,cellFormatter:H,name:K,...Y})=>t.createElement(G.Td,{key:S},typeof H=="function"?H(m,{key:S,name:K,formatMessage:T,...Y}):t.createElement(F.Z,{textColor:"neutral800"},m[K]||"-"))),W&&t.createElement(G.Td,null,t.createElement(j.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>A(`${V}/${m.id}`),label:T({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.Pp)(m.firstname,m.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),c&&t.createElement(M.x,{paddingLeft:1,...a.UW},t.createElement(ee.h,{onClick:()=>k(m.id),label:T({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.Pp)(m.firstname,m.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:E().bool,entriesToDelete:E().array,headers:E().array.isRequired,onClickDelete:E().func,onSelectRow:E().func,rows:E().array,withBulkActions:E().bool,withMainAction:E().bool};const he=oe;var ve=e(60881),ye=e(18189),Pe=e(48683),me=e(9370),ie=e(61585),De=e(45124),Ce=e(82392),Ae=e(75071),Oe=e(41054),Te=e(30164),Le=e(85078),J=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ry().shape({firstname:J.Z_().trim().required(a.I0.required),lastname:J.Z_(),email:J.Z_().email(a.I0.email).required(a.I0.required),roles:J.IX().min(1,a.I0.required).required(a.I0.required)}),Be={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:c,onToggle:h})=>{const[U,k]=(0,t.useState)("create"),[N,z]=(0,t.useState)(!1),[W,B]=(0,t.useState)(null),{formatMessage:A}=(0,i.Z)(),V=(0,a.lm)(),{lockApp:T,unlockApp:m}=(0,a.o1)(),{post:$}=(0,a.kY)(),S=(0,f.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(y,x){return[...y,x]},defaultValue:[]}),H=(0,f.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(y,x){return{...y,...x}},defaultValue:ue}),K=(0,f.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),Y=(0,u.useMutation)(y=>$("/admin/users",y),{async onSuccess({data:y}){B(y.data.registrationToken),await c(),ae(),z(!1)},onError(y){throw z(!1),V({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),y},onSettled(){m()}}),w=A({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(y,{setErrors:x})=>{T(),z(!0);try{await Y.mutateAsync(y)}catch(X){m(),X?.response?.data?.error.message==="Email already taken"&&x({email:X.response.data.error.message})}},ae=()=>{v?k(v):h()},{buttonSubmitLabel:_,isDisabled:Q,next:v}=Be[U],Ze=U==="create"?t.createElement(O.z,{type:"submit",loading:N},A(_)):t.createElement(O.z,{type:"button",loading:N,onClick:h},A(_));return K?t.createElement(ve.P,{onClose:h,labelledBy:"title"},t.createElement(ye.x,null,t.createElement(Ce.O,{label:w},t.createElement(Ae.$,{isCurrent:!0},w))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:H,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:y,handleChange:x,values:X})=>t.createElement(a.l0,null,t.createElement(Pe.f,null,t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:6},U!=="create"&&t.createElement(K,{registrationToken:W}),t.createElement(M.x,null,t.createElement(F.Z,{variant:"beta",as:"h2"},A({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(me.r,{gap:5},Ue.map(ce=>ce.map(I=>t.createElement(ie.P,{key:I.name,...I.size},t.createElement(a.jm,{...I,disabled:Q,error:y[I.name],onChange:x,value:X[I.name]})))))))),t.createElement(M.x,null,t.createElement(F.Z,{variant:"beta",as:"h2"},A({id:"global.roles",defaultMessage:"User's role"})),t.createElement(M.x,{paddingTop:4},t.createElement(me.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:y.roles,onChange:x,value:X.roles})),S.map(ce=>ce.map(I=>t.createElement(ie.P,{key:I.name,...I.size},t.createElement(a.jm,{...I,disabled:Q,onChange:x,value:X[I.name]}))))))))),t.createElement(De.m,{startActions:t.createElement(O.z,{variant:"tertiary",onClick:h,type:"button"},A({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Ze})))):null};Ee.propTypes={onToggle:E().func.isRequired,onSuccess:E().func.isRequired};const Se=Ee,de=({pagination:c})=>t.createElement(M.x,{paddingTop:4},t.createElement(j.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:c})));de.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},de.propTypes={pagination:E().shape({page:E().number,pageCount:E().number,pageSize:E().number,total:E().number})};const xe=de,We=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ke=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:c},{formatMessage:h}){return t.createElement(F.Z,{textColor:"neutral800"},c.map(U=>h({id:`Settings.permissions.users.${U.code}`,defaultMessage:U.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:c},{formatMessage:h}){return t.createElement(j.k,null,t.createElement(a.qb,{isActive:c,variant:c?"success":"danger"}),t.createElement(F.Z,{textColor:"neutral800"},h({id:c?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:c?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:c}=(0,a.kY)(),{formatAPIError:h}=(0,a.So)(),[U,k]=(0,t.useState)(!1),N=(0,P.v9)(C._),{allowedActions:{canCreate:z,canDelete:W,canRead:B}}=(0,a.ss)(N.settings.users),A=(0,u.useQueryClient)(),V=(0,a.lm)(),{formatMessage:T}=(0,i.Z)(),{search:m}=(0,D.TH)();(0,a.go)();const{users:$,pagination:S,isError:H,isLoading:K,refetch:Y}=(0,p.R)(g().parse(m,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:B}),w=(0,f.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=Ke.map(v=>({...v,metadatas:{...v.metadatas,label:T(v.metadatas.label)}})),ae=T({id:"global.users",defaultMessage:"Users"}),_=()=>{k(v=>!v)},Q=(0,u.useMutation)(async v=>{await c("/admin/users/batch-delete",{ids:v})},{async onSuccess(){await Y(),await A.refetchQueries(ge)},onError(v){V({type:"warning",message:{id:"notification.error",message:h(v),defaultMessage:"An error occured"}})}});return w?t.createElement(l.o,{"aria-busy":K},t.createElement(a.SL,{name:"Users"}),t.createElement(r.T,{primaryAction:z&&t.createElement(w,{onClick:_}),title:ae,subtitle:T({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),B&&t.createElement(n.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:T({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(R.Z,{displayedFilters:We}))}),t.createElement(d.D,{canRead:B},!B&&t.createElement(a.ZF,null),H&&t.createElement("div",null,"TODO: An error occurred"),B&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:K,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:v=>Q.mutateAsync([v]),headers:te,rows:$,withBulkActions:!0,withMainAction:W},t.createElement(he,{canDelete:W,headers:te,rows:$,withBulkActions:!0,withMainAction:W})),S&&t.createElement(xe,{pagination:S}))),U&&t.createElement(Se,{onSuccess:async()=>{await Y(),await A.refetchQueries(ge)},onToggle:_})):null},be=()=>{const c=(0,f.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return c?t.createElement(c,null):null}},87901:(L,o,e)=>{e.r(o),e.d(o,{default:()=>s});var t=e(67294),l=e(60797),r=e(86706),n=e(36364),d=e(61611);const s=()=>{const g=(0,r.v9)(n._);return t.createElement(l.O4,{permissions:g.settings.users.main},t.createElement(d.Z,null))}},6324:(L,o,e)=>{e.d(o,{Z:()=>i});var t=e(67294),l=e(37527),r=e(60797),n=e(70780),d=e(45697),a=e.n(d),s=e(86896);const g=({children:u,target:P})=>{const D=(0,r.lm)(),{formatMessage:p}=(0,s.Z)(),{copy:f}=(0,r.VP)(),C=p({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),R=async()=>{await f(P)&&D({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(r.Y_,{endAction:t.createElement(l.h,{label:C,noBorder:!0,icon:t.createElement(n.Z,null),onClick:R}),title:P,titleEllipsis:!0,subtitle:u,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const i=g},30164:(L,o,e)=>{e.d(o,{A:()=>s});var t=e(67294),l=e(45697),r=e.n(l),n=e(86896),d=e(95651),a=e(6324);const s=({registrationToken:g})=>{const{formatMessage:i}=(0,n.Z)(),u=`${window.location.origin}${d.Z}auth/register?registrationToken=${g}`;return t.createElement(a.Z,{target:u},i({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:r().string}},85078:(L,o,e)=>{e.d(o,{Z:()=>R});var t=e(67294),l=e(50614),r=e(473),n=e(60797),d=e(64518),a=e(45697),s=e.n(a),g=e(86896),i=e(88767),u=e(88972);const P=(0,u.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,D=u.default.div`
  animation: ${P} 2s infinite linear;
`,p=()=>t.createElement(D,null,t.createElement(d.Z,null)),f=async()=>{const{get:O}=(0,n.tg)(),{data:b}=await O("/admin/roles");return b.data},C=({disabled:O,error:b,onChange:se,value:E})=>{const{status:q,data:ne}=(0,i.useQuery)(["roles"],f,{staleTime:5e4}),{formatMessage:Z}=(0,g.Z)(),G=b?Z({id:b,defaultMessage:b}):"",le=Z({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),F=Z({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),j=Z({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(p,null):void 0;return t.createElement(l.P,{id:"roles",disabled:O,error:G,hint:F,label:le,name:"roles",onChange:M=>{se({target:{name:"roles",value:M}})},placeholder:j,multi:!0,startIcon:ee,value:E.map(M=>M.toString()),withTags:!0,required:!0},(ne||[]).map(M=>t.createElement(r.W,{key:M.id,value:M.id.toString()},Z({id:`global.${M.code}`,defaultMessage:M.name}))))};C.defaultProps={disabled:!1,error:void 0},C.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const R=C},15483:(L,o,e)=>{e.d(o,{Z:()=>r});var t=e(85893),l=e(75878);const r=({startActions:n,endActions:d})=>!n&&!d?null:(0,t.jsxs)(l.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(l.k,{gap:2,wrap:"wrap",children:n}),(0,t.jsx)(l.k,{gap:2,shrink:0,wrap:"wrap",children:d})]})},46948:(L,o,e)=>{e.d(o,{Z:()=>r});var t=e(85893);const l=n=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...n,children:[(0,t.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,t.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),r=l},82392:(L,o,e)=>{e.d(o,{O:()=>i});var t=e(85893),l=e(67294),r=e(88972),n=e(16607),d=e(10574);const a=()=>(0,t.jsx)(n.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,t.jsx)(d.Z,{variant:"pi",textColor:"neutral500",children:"/"})});a.displayName="Divider";var s=e(96987);const g=(0,r.default)(s.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:u})=>`calc(-1*${u.spaces[2]})`};
  }
`,i=({label:u,children:P,...D})=>{const p=l.Children.toArray(P);return(0,t.jsx)(n.x,{"aria-label":u,...D,children:(0,t.jsx)(g,{as:"ol",children:l.Children.map(p,(f,C)=>{const R=p.length>1&&C+1<p.length;return(0,t.jsxs)(s.k,{inline:!0,as:"li",children:[f,R&&(0,t.jsx)(a,{})]})})})})};i.displayName="Breadcrumbs"},75071:(L,o,e)=>{e.d(o,{$:()=>n});var t=e(85893),l=e(16607),r=e(10574);const n=({children:d,isCurrent:a=!1,...s})=>(0,t.jsx)(l.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"neutral800",fontWeight:a?"bold":"normal","aria-current":a,...s,children:d})});n.displayName="Crumb"}}]);