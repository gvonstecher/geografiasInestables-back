(self.webpackChunkback=self.webpackChunkback||[]).push([[2544],{4644:(Z,$,n)=>{"use strict";n.d($,{V:()=>A});var e=n(60797),f=n(88767);const A=(h={},M={})=>{const{id:b,...C}=h,{get:E}=(0,e.kY)();if(!b&&(M?.enabled===void 0||M?.enabled))throw new Error('"id" is a required argument');const{data:P,error:W,isError:r,isLoading:j,refetch:m}=(0,f.useQuery)(["roles",b,"permissions",C],async()=>{const{data:{data:S}}=await E(`/admin/roles/${b}/permissions`,{params:C});return S},M);return{permissions:P,error:W,isError:r,isLoading:j,refetch:m}}},51754:(Z,$,n)=>{"use strict";n.d($,{F:()=>h});var e=n(60797),f=n(86896),A=n(88767);const h=(M={},b={})=>{const{id:C="",...E}=M,{get:P}=(0,e.kY)(),{locale:W}=(0,f.Z)(),r=(0,e.Xe)(W,{sensitivity:"base"}),{data:j,error:m,isError:S,isLoading:N,refetch:g}=(0,A.useQuery)(["roles",C,E],async()=>{const{data:K}=await P(`/admin/roles/${C??""}`,{params:E});return K},b);let x=[];return C&&j?x=[j.data]:Array.isArray(j?.data)&&(x=j.data),{roles:x.sort((K,oe)=>r.compare(K.name,oe.name)),error:m,isError:S,isLoading:N,refetch:g}}},25545:(Z,$,n)=>{"use strict";n.r($),n.d($,{CreatePage:()=>Re,default:()=>Se});var e=n(67294),f=n(57713),A=n(79371),h=n(75878),M=n(19442),b=n(26789),C=n(50781),E=n(78549),P=n(9370),W=n(61585),r=n(28469),j=n(20603),m=n(60797),S=n(60793),N=n(66115),g=n(41054),x=n(41609),K=n.n(x),oe=n(86896),de=n(86706),ae=n(16550),R=n(88972),me=n(4644),w=n(36364),G=n(442),_=n(90065),Ce=n(87561);const xe=Ce.Ry().shape({name:Ce.Z_().required(m.I0.required),description:Ce.Z_().required(m.I0.required)}),re=R.default.div`
  border: 1px solid ${({theme:z})=>z.colors.primary200};
  background: ${({theme:z})=>z.colors.primary100};
  padding: ${({theme:z})=>`${z.spaces[2]} ${z.spaces[4]}`};
  color: ${({theme:z})=>z.colors.primary600};
  border-radius: ${({theme:z})=>z.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Re=()=>{const z=(0,ae.$B)("/settings/roles/duplicate/:id"),X=(0,m.lm)(),{lockApp:ne,unlockApp:Y}=(0,m.o1)(),{formatMessage:I}=(0,oe.Z)(),[Q,he]=(0,e.useState)(!1),{replace:pe}=(0,ae.k6)(),J=(0,e.useRef)(),{trackUsage:ce}=(0,m.rS)(),{post:ke,put:Be}=(0,m.kY)(),{params:Ee}=z??{},{isLoading:Fe,data:Le}=(0,_.d)(Ee?.id,{cacheTime:0}),{permissions:ye,isLoading:Me}=(0,me.V)({id:Ee?.id},{cacheTime:0,enabled:!!Ee?.id}),Ne=Ae=>{ne(),he(!0),Ee?.id?ce("willDuplicateRole"):ce("willCreateNewRole"),Promise.resolve(ke("/admin/roles",Ae)).then(async({data:ee})=>{const{permissionsToSend:ie}=J.current.getPermissions();return Ee?.id?ce("didDuplicateRole"):ce("didCreateNewRole"),ee.data.id&&!K()(ie)&&await Be(`/admin/roles/${ee.data.id}/permissions`,{permissions:ie}),ee}).then(ee=>{he(!1),X({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),pe(`/settings/roles/${ee.data.id}`)}).catch(ee=>{console.error(ee),he(!1),X({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y()})},Ue=`${I({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,N.Z)(new Date,"PPP")}`;return e.createElement(f.o,null,e.createElement(m.SL,{name:"Roles"}),e.createElement(g.J9,{initialValues:{name:"",description:Ue},onSubmit:Ne,validationSchema:xe,validateOnChange:!1},({handleSubmit:Ae,values:ee,errors:ie,handleReset:le,handleChange:ue})=>e.createElement(m.l0,{noValidate:!0},e.createElement(e.Fragment,null,e.createElement(A.T,{primaryAction:e.createElement(h.k,{gap:2},e.createElement(M.z,{variant:"secondary",onClick:()=>{le(),J.current.resetForm()},size:"L"},I({id:"app.components.Button.reset",defaultMessage:"Reset"})),e.createElement(M.z,{onClick:Ae,loading:Q,size:"L"},I({id:"global.save",defaultMessage:"Save"}))),title:I({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:I({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(m.rU,{startIcon:e.createElement(S.Z,null),to:"/settings/roles"},I({id:"global.back",defaultMessage:"Back"}))}),e.createElement(b.D,null,e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(C.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(h.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.k,{justifyContent:"space-between"},e.createElement(C.x,null,e.createElement(C.x,null,e.createElement(E.Z,{fontWeight:"bold"},I({id:"global.details",defaultMessage:"Details"}))),e.createElement(C.x,null,e.createElement(E.Z,{variant:"pi",textColor:"neutral600"},I({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(re,null,I({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0}))),e.createElement(P.r,{gap:4},e.createElement(W.P,{col:6},e.createElement(r.o,{name:"name",error:ie.name&&I({id:ie.name}),label:I({id:"global.name",defaultMessage:"Name"}),onChange:ue,required:!0,value:ee.name})),e.createElement(W.P,{col:6},e.createElement(j.g,{label:I({id:"global.description",defaultMessage:"Description"}),id:"description",error:ie.description&&I({id:ie.description}),onChange:ue},ee.description))))),!Fe&&!Me?e.createElement(C.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(G.Z,{isFormDisabled:!1,ref:J,permissions:ye,layout:Le})):e.createElement(C.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(m.dO,null))))))))};function Se(){const z=(0,de.v9)(w._);return e.createElement(m.O4,{permissions:z.settings.roles.create},e.createElement(Re,null))}},442:(Z,$,n)=>{"use strict";n.d($,{Z:()=>ts});var e=n(67294),f=n(20107),A=n(61738),h=n(54375),M=n(60797),b=n(18721),C=n.n(b),E=n(41609),P=n.n(E),W=n(45697),r=n.n(W),j=n(86896),m=n(50781),S=n(89734),N=n.n(S),g=n(88972),x=n(75878),K=n(62779),oe=n(84189),de=n(3340),ae=n(27361),R=n.n(ae),me=n(57557),w=n.n(me),G=n(92807),_=n(19442),Ce=n(80606);const be=g.default.div`
  position: relative;

  ${({hasConditions:t,disabled:s,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,xe=({onClick:t,className:s,hasConditions:a,variant:o})=>{const{formatMessage:i}=(0,j.Z)();return e.createElement(be,{hasConditions:a,className:s},e.createElement(_.z,{variant:o,startIcon:e.createElement(Ce.Z,null),onClick:t},i({id:"global.settings",defaultMessage:"Settings"})))};xe.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},xe.propTypes={onClick:r().func.isRequired,className:r().string,hasConditions:r().bool,variant:r().string};const re=(0,g.default)(xe)``;var Re=n(60881),Se=n(18189),z=n(48683),X=n(78549),ne=n(45124),Y=n(82392),I=n(75071),Q=n(18172),he=n(7739),pe=n.n(he),J=n(11700),ce=n.n(J),ke=n(31439);const Be=t=>Object.values(t).map(s=>Object.entries(s).filter(([,a])=>a).map(([a])=>a)).flat(),Ee=t=>t.reduce((s,[a,o])=>(s.push({label:ce()(a),children:o.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Fe=(t,s)=>t.map(([,a])=>a).flat().reduce((a,o)=>({[o.id]:s.includes(o.id),...a}),{}),Le=({arrayOfOptionsGroupedByCategory:t,isFormDisabled:s,isGrey:a,label:o,name:i,onChange:l,value:d})=>{const{formatMessage:c}=(0,j.Z)(),p=u=>{l(i,Fe(t,u))};return e.createElement(x.k,{as:"li",background:a?"neutral100":"neutral0",paddingBottom:3,paddingTop:3},e.createElement(x.k,{paddingLeft:6,style:{width:180}},e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},c({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"),e.createElement(X.Z,{variant:"sigma",title:o,textColor:"primary600",ellipsis:!0},c({id:`Settings.roles.form.permissions.${o.toLowerCase()}`,defaultMessage:o})),e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},"\xA0",c({id:"Settings.permissions.conditions.when",defaultMessage:"When"}))),e.createElement(m.x,{style:{maxWidth:430,width:"100%"}},e.createElement(ke.Q,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Be(d),options:Ee(t),disabled:s})))};Le.propTypes={arrayOfOptionsGroupedByCategory:r().array.isRequired,isFormDisabled:r().bool.isRequired,isGrey:r().bool.isRequired,label:r().string.isRequired,name:r().string.isRequired,value:r().object.isRequired,onChange:r().func.isRequired};const ye=Le,Me=(t,s)=>t.reduce((a,o)=>(a[o.id]=R()(s,o.id,!1),a),{}),Ne=(t,s)=>t.reduce((a,o)=>{const[i,l]=o,d=Me(l,s);return a[i]=d,a},{}),Ae=(t,s,a)=>t.reduce((o,i)=>{const l=R()(s,[...i.pathToConditionsObject,"conditions"],{}),d=Ne(a,l);return o[i.pathToConditionsObject.join("..")]=d,o},{}),ee=({actions:t,headerBreadCrumbs:s,isFormDisabled:a,onClosed:o,onToggle:i})=>{const{formatMessage:l}=(0,j.Z)(),{availableConditions:d,modifiedData:c,onChangeConditions:p}=(0,G.$_)(),u=(0,e.useMemo)(()=>Object.entries(pe()(d,"category")),[d]),y=t.filter(({isDisplayed:v,hasSomeActionsSelected:B,hasAllActionsSelected:L})=>v&&(B||L)),T=(0,e.useMemo)(()=>Ae(y,c,u),[y,c,u]),[D,V]=(0,e.useState)(T),k=(v,B)=>{V((0,Q.ZP)(L=>{L[v]||(L[v]={}),L[v].default||(L[v].default={}),L[v].default=B}))},O=()=>{const v=Object.entries(D).reduce((B,L)=>{const[F,te]=L,H=Object.values(te).reduce((q,U)=>({...q,...U}),{});return B[F]=H,B},{});p(v),i()};return e.createElement(Re.P,{labelledBy:"condition-modal-breadcrumbs",onClose:o},e.createElement(Se.x,null,e.createElement(Y.O,{id:"condition-modal-breadcrumbs",label:s.join(", ")},s.map((v,B,L)=>e.createElement(I.$,{isCurrent:B===L.length-1,key:v},ce()(l({id:v,defaultMessage:v})))))),e.createElement(z.f,null,y.length===0&&e.createElement(X.Z,null,l({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})),e.createElement("ul",null,y.map(({actionId:v,label:B,pathToConditionsObject:L},F)=>{const te=L.join("..");return e.createElement(ye,{key:v,arrayOfOptionsGroupedByCategory:u,label:B,isFormDisabled:a,isGrey:F%2===0,name:te,onChange:k,value:R()(D,te,{})})}))),e.createElement(ne.m,{startActions:e.createElement(_.z,{variant:"tertiary",onClick:i},l({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(_.z,{onClick:O},l({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"}))}))};ee.propTypes={actions:r().arrayOf(r().shape({actionId:r().string.isRequired,checkboxName:r().string,hasSomeActionsSelected:r().bool.isRequired,hasAllActionsSelected:r().bool,isDisplayed:r().bool.isRequired,label:r().string})).isRequired,headerBreadCrumbs:r().arrayOf(r().string).isRequired,isFormDisabled:r().bool.isRequired,onClosed:r().func.isRequired,onToggle:r().func.isRequired};const ie=ee,le=`${120/16}rem`,ue=`${200/16}rem`,Te=`${53/16}rem`,We=g.default.div`
  width: ${le};
`,at=(0,g.default)(x.k)`
  padding-right: ${({theme:t})=>t.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:t})=>t&&"cursor: pointer;"}
`,Ge=({children:t,isCollapsable:s,isActive:a,isFormDisabled:o,label:i,onChange:l,onClick:d,checkboxName:c,someChecked:p,value:u})=>{const{formatMessage:y}=(0,j.Z)();return e.createElement(x.k,{alignItems:"center",paddingLeft:6,style:{width:ue,flexShrink:0}},e.createElement(m.x,{paddingRight:2},e.createElement(K.C,{name:c,"aria-label":y({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:o,onValueChange:T=>l({target:{name:c,value:T}}),indeterminate:p,value:u})),e.createElement(at,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:d,"aria-expanded":a,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&d(),tabIndex:0,role:"button"}},e.createElement(X.Z,{fontWeight:a?"bold":"",textColor:a?"primary600":"neutral800",ellipsis:!0},ce()(i)),t))};Ge.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Ge.propTypes={checkboxName:r().string,children:r().node,label:r().string.isRequired,isCollapsable:r().bool,isFormDisabled:r().bool.isRequired,onChange:r().func,onClick:r().func.isRequired,someChecked:r().bool,value:r().bool,isActive:r().bool.isRequired};const rt=(0,e.memo)(Ge);var Wt=n(42348),Zt=n.n(Wt),Vt=n(13218),Pe=n.n(Vt);const it=t=>Pe()(t)?Zt()(Object.values(t).map(s=>Pe()(s)?it(s):s)):[],je=it,ze=t=>t?Object.keys(t).reduce((s,a)=>(a!=="conditions"&&(s[a]=t[a]),s),{}):null,Oe=t=>{const s=ze(t),a=je(s);if(!a.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const o=a.every(l=>l),i=a.some(l=>l)&&!o;return{hasAllActionsSelected:o,hasSomeActionsSelected:i}};var Kt=n(21514);const Ze=(0,g.default)(Kt.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:t})=>t?"180":"0"}deg);
  margin-left: ${({theme:t})=>t.spaces[2]};
`,Ve=t=>`
  ${X.Z} {
    color: ${t.colors.primary600};
    font-weight: ${t.fontWeights.bold}
  }
  ${Ze} {
    display: block;
    path {
      fill: ${t.colors.primary600}
    };
  }
`,Ut=(t,s,a)=>t.map(({actionId:o,isDisplayed:i,applyToProperties:l,label:d})=>{if(!i)return{actionId:o,hasSomeActionsSelected:!1,isDisplayed:i};const c=[...a.split(".."),o],p=P()(l)?[...c,"properties","enabled"]:c,u=p.join(".."),y=R()(s,[...c,"conditions"],null),T=je(y).some(O=>O);if(P()(l)){const O=R()(s,p,!1);return{actionId:o,checkboxName:u,hasAllActionsSelected:O,hasConditions:T,hasSomeActionsSelected:O,isDisplayed:i,isParentCheckbox:!1,label:d,pathToConditionsObject:c}}const D=R()(s,p,null),{hasAllActionsSelected:V,hasSomeActionsSelected:k}=Oe(D);return{actionId:o,checkboxName:u,hasAllActionsSelected:V,hasConditions:T,hasSomeActionsSelected:k,isDisplayed:i,isParentCheckbox:!0,label:d,pathToConditionsObject:c}}),Ye=(t,s)=>`
  ${lt} {
    background-color: ${t.colors.primary100};
    color: ${t.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${ct} {
    display: flex;
  }
  ${re} {
    display: block;
  }
  &:hover {
   ${Ve(t)}
  }

  &:focus-within {
    ${({theme:a,isActive:o})=>Ye(a,o)}
  }
  
`,lt=g.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Te};
  background-color: ${({isGrey:t,theme:s})=>t?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Ht=g.default.div`
  display: inline-flex;
  min-width: 100%;

  ${re} {
    display: none;
  }
  ${({isActive:t,theme:s})=>t&&Ye(s,t)}
  &:hover {
    ${({theme:t,isActive:s})=>Ye(t,s)}
  }
`,dt=(0,g.default)(x.k)`
  width: ${le};
  position: relative;
`,ct=(0,g.default)(m.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,ut=g.default.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:t})=>t.colors.primary600};
`,Gt=(0,g.default)(m.x)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,mt=({availableActions:t,isActive:s,isGrey:a,isFormDisabled:o,label:i,onClickToggle:l,pathToData:d})=>{const[c,p]=(0,e.useState)(!1),{formatMessage:u}=(0,j.Z)(),{modifiedData:y,onChangeParentCheckbox:T,onChangeSimpleCheckbox:D}=(0,G.$_)(),V=()=>{p(H=>!H)},k=()=>{p(!1)},O=R()(y,d.split(".."),{}),v=(0,e.useMemo)(()=>Object.keys(O).reduce((H,q)=>(H[q]=w()(O[q],"conditions"),H),{}),[O]),{hasAllActionsSelected:B,hasSomeActionsSelected:L}=Oe(v),F=(0,e.useMemo)(()=>Ut(t,y,d),[t,y,d]),te=F.some(({hasConditions:H})=>H);return e.createElement(Ht,{isActive:s},e.createElement(lt,{isGrey:a},e.createElement(rt,{isCollapsable:!0,isFormDisabled:o,label:i,checkboxName:d,onChange:T,onClick:l,someChecked:L,value:B,isActive:s},e.createElement(ct,{paddingLeft:2},s?e.createElement(oe.Z,null):e.createElement(de.Z,null))),e.createElement(x.k,{style:{flex:1}},F.map(({actionId:H,hasConditions:q,hasAllActionsSelected:U,hasSomeActionsSelected:fe,isDisplayed:Ie,isParentCheckbox:se,checkboxName:ve,label:Ke})=>Ie?se?e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(K.C,{disabled:o,name:ve,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${Ke} ${i}`}),onValueChange:$e=>{T({target:{name:ve,value:$e}})},indeterminate:fe,value:U})):e.createElement(dt,{key:H,justifyContent:"center",alignItems:"center"},q&&e.createElement(ut,null),e.createElement(K.C,{disabled:o,indeterminate:q,name:ve,onValueChange:$e=>{D({target:{name:ve,value:$e}})},value:U})):e.createElement(We,{key:H}))),c&&e.createElement(ie,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:F,isFormDisabled:o,onClosed:k,onToggle:V})),e.createElement(Gt,null,e.createElement(re,{onClick:V,hasConditions:te})))};mt.propTypes={availableActions:r().array.isRequired,isActive:r().bool.isRequired,isGrey:r().bool.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,onClickToggle:r().func.isRequired,pathToData:r().string.isRequired};const zt=mt,Yt=g.default.span`
  color: ${({theme:t})=>t.colors.danger700};
  padding-left: ${({theme:t})=>t.spaces[1]}px;
`,pt=()=>e.createElement(Yt,null,"*"),Xt=(t,s)=>t.map(a=>{const o=Array.isArray(a.subjects)&&a.subjects.indexOf(s)!==-1;return{...a,isDisplayed:o}}),wt=(0,g.default)(m.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t})=>t.colors.primary200};
    display: block;
  }
`,Qt=g.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:s})=>t.colors[s]};
  }
`,Xe=t=>e.createElement(wt,null,e.createElement(Qt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})));Xe.defaultProps={fill:"primary200"},Xe.propTypes={fill:r().string};const Jt=(0,e.memo)(Xe),gt=(0,g.default)(x.k)`
  width: ${le};
  position: relative;
`,qt=(0,g.default)(x.k)`
  height: ${Te};
`,_t=(0,g.default)(m.x)`
  padding-left: ${31/16}rem;
`,en=(0,g.default)(m.x)`
  border-left: ${({isVisible:t,theme:s})=>t?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,tn=(0,g.default)(x.k)`
  padding-left: ${({theme:t})=>t.spaces[4]};
  width: ${({level:t})=>145-t*36}px;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${Ze} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,nn=g.default.div`
  padding-top: ${({theme:t})=>t.spaces[2]};
  margin-top: ${({theme:t})=>t.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:t})=>t.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,we=({childrenForm:t,isFormDisabled:s,recursiveLevel:a,pathToDataFromActionRow:o,propertyActions:i,parentName:l,propertyName:d})=>{const{formatMessage:c}=(0,j.Z)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:y}=(0,G.$_)(),[T,D]=(0,e.useState)(null),V=O=>{D(v=>v===O?null:O)},k=(0,e.useMemo)(()=>T?t.find(({value:O})=>O===T):null,[T,t]);return e.createElement(_t,null,e.createElement(nn,null),t.map(({label:O,value:v,required:B,children:L},F)=>{const te=F+1<t.length,H=Array.isArray(L),q=T===v;return e.createElement(en,{key:v,isVisible:te},e.createElement(qt,null,e.createElement(Jt,{color:"primary200"}),e.createElement(x.k,{style:{flex:1}},e.createElement(tn,{level:a,isActive:q,isCollapsable:H},e.createElement(at,{alignItems:"center",isCollapsable:H,...H&&{onClick:()=>V(v),"aria-expanded":q,onKeyDown:({key:U})=>(U==="Enter"||U===" ")&&V(v),tabIndex:0,role:"button"},title:O},e.createElement(X.Z,{ellipsis:!0},ce()(O)),B&&e.createElement(pt,null),e.createElement(Ze,{$isActive:q}))),e.createElement(x.k,{style:{flex:1}},i.map(({actionId:U,label:fe,isActionRelatedToCurrentProperty:Ie})=>{if(!Ie)return e.createElement(We,{key:U});const se=[...o.split(".."),U,"properties",d,...l.split(".."),v],ve=R()(p,se,!1);if(!L)return e.createElement(gt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:s,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${fe}`}),onValueChange:De=>{y({target:{name:se.join(".."),value:De}})},value:ve}));const{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(gt,{key:fe,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{key:fe,disabled:s,name:se.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${l} ${O} ${fe}`}),onValueChange:De=>{u({target:{name:se.join(".."),value:De}})},value:Ke,indeterminate:$e}))})))),k&&q&&e.createElement(m.x,{paddingBottom:2},e.createElement(we,{isFormDisabled:s,parentName:`${l}..${v}`,pathToDataFromActionRow:o,propertyActions:i,propertyName:d,recursiveLevel:a+1,childrenForm:k.children})))}))};we.propTypes={childrenForm:r().array.isRequired,isFormDisabled:r().bool.isRequired,parentName:r().string.isRequired,pathToDataFromActionRow:r().string.isRequired,propertyActions:r().array.isRequired,propertyName:r().string.isRequired,recursiveLevel:r().number.isRequired};const sn=(0,e.memo)(we),on=t=>t.reduce((a,o)=>(o.isActionRelatedToCurrentProperty&&a.push(o.actionId),a),[]),an=(t,s,a,o,i)=>{const d=on(t).reduce((c,p)=>{const u=[...a.split(".."),p,"properties",o,i],y=R()(s,u,!1);return c[p]=y,c},{});return Oe(d)},ft=(0,g.default)(x.k)`
  width: ${le};
  position: relative;
`,rn=(0,g.default)(x.k)`
  height: ${Te};
  flex: 1;

  ${({isCollapsable:t,theme:s})=>t&&`
      ${Ze} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${Ve(s)}
      }
  `}
  ${({isActive:t,theme:s})=>t&&Ve(s)};
`,Qe=({childrenForm:t,label:s,isFormDisabled:a,name:o,required:i,pathToData:l,propertyActions:d,propertyName:c,isOdd:p})=>{const{formatMessage:u}=(0,j.Z)(),[y,T]=(0,e.useState)(null),{modifiedData:D,onChangeCollectionTypeLeftActionRowCheckbox:V,onChangeParentCheckbox:k,onChangeSimpleCheckbox:O}=(0,G.$_)(),v=y===o,B=(0,e.useMemo)(()=>Array.isArray(t)?t:[],[t]),L=B.length>0,F=(0,e.useCallback)(()=>{L&&T(U=>U===o?null:o)},[L,o]),te=({target:{value:U}})=>{V(l,c,o,U)},{hasAllActionsSelected:H,hasSomeActionsSelected:q}=(0,e.useMemo)(()=>an(d,D,l,c,o),[d,D,l,c,o]);return e.createElement(e.Fragment,null,e.createElement(rn,{alignItems:"center",isCollapsable:L,isActive:v,background:p?"neutral100":"neutral0"},e.createElement(x.k,null,e.createElement(rt,{onChange:te,onClick:F,isCollapsable:L,isFormDisabled:a,label:s,someChecked:q,value:H,isActive:v},i&&e.createElement(pt,null),e.createElement(Ze,{$isActive:v})),e.createElement(x.k,null,d.map(({label:U,isActionRelatedToCurrentProperty:fe,actionId:Ie})=>{if(!fe)return e.createElement(We,{key:U});const se=[...l.split(".."),Ie,"properties",c,o];if(!L){const De=R()(D,se,!1);return e.createElement(ft,{key:Ie,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:a,name:se.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),onValueChange:ns=>{O({target:{name:se.join(".."),value:ns}})},value:De}))}const ve=R()(D,se,{}),{hasAllActionsSelected:Ke,hasSomeActionsSelected:$e}=Oe(ve);return e.createElement(ft,{key:U,justifyContent:"center",alignItems:"center"},e.createElement(K.C,{disabled:a,name:se.join(".."),onValueChange:De=>{k({target:{name:se.join(".."),value:De}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${o} ${U}`}),value:Ke,indeterminate:$e}))})))),v&&e.createElement(sn,{childrenForm:B,isFormDisabled:a,parentName:o,pathToDataFromActionRow:l,propertyName:c,propertyActions:d,recursiveLevel:0}))};Qe.defaultProps={childrenForm:[],required:!1},Qe.propTypes={childrenForm:r().array,label:r().string.isRequired,isFormDisabled:r().bool.isRequired,name:r().string.isRequired,pathToData:r().string.isRequired,propertyActions:r().array.isRequired,propertyName:r().string.isRequired,required:r().bool,isOdd:r().bool.isRequired};const ln=(0,e.memo)(Qe),ht=(0,g.default)(x.k)`
  width: ${le};
  flex-shrink: 0;
`,dn=(0,g.default)(x.k)`
  width: ${ue};
  height: ${Te};
  flex-shrink: 0;
`,yt=({headers:t,label:s})=>{const{formatMessage:a}=(0,j.Z)(),o=a({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return e.createElement(x.k,null,e.createElement(dn,{alignItems:"center",paddingLeft:6},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},o)),t.map(i=>i.isActionRelatedToCurrentProperty?e.createElement(ht,{justifyContent:"center",key:i.label},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},a({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label}))):e.createElement(ht,{key:i.label})))};yt.propTypes={headers:r().arrayOf(r().shape({label:r().string.isRequired,isActionRelatedToCurrentProperty:r().bool.isRequired})).isRequired,label:r().string.isRequired};const cn=yt,un=(t,s)=>t.map(a=>{const o=Array.isArray(a.applyToProperties)&&a.applyToProperties.indexOf(s)!==-1&&a.isDisplayed;return{label:a.label,actionId:a.actionId,isActionRelatedToCurrentProperty:o}}),mn=g.default.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,Ct=({availableActions:t,childrenForm:s,isFormDisabled:a,label:o,pathToData:i,propertyName:l})=>{const d=(0,e.useMemo)(()=>un(t,l),[t,l]);return e.createElement(mn,null,e.createElement(cn,{label:o,headers:d}),e.createElement(m.x,null,s.map(({children:c,label:p,value:u,required:y},T)=>e.createElement(ln,{childrenForm:c,key:u,label:p,isFormDisabled:a,name:u,required:y,propertyActions:d,pathToData:i,propertyName:l,isOdd:T%2===0}))))};Ct.propTypes={childrenForm:r().array.isRequired,availableActions:r().array.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,pathToData:r().string.isRequired,propertyName:r().string.isRequired};const pn=Ct,gn=g.default.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:t,isActive:s})=>s&&`border: 1px solid ${t.colors.primary600};`}
`,Et=({allActions:t,contentTypeName:s,label:a,index:o,isActive:i,isFormDisabled:l,onClickToggleCollapse:d,pathToData:c,properties:p})=>{const u=(0,e.useCallback)(()=>{d(s)},[s,d]),y=(0,e.useMemo)(()=>Xt(t,s),[t,s]);return e.createElement(gn,{isActive:i},e.createElement(zt,{availableActions:y,isActive:i,isGrey:o%2===0,isFormDisabled:l,label:a,onClickToggle:u,pathToData:c}),i&&p.map(({label:T,value:D,children:V})=>e.createElement(pn,{availableActions:y,childrenForm:V,isFormDisabled:l,label:T,pathToData:c,propertyName:D,key:D})))};Et.propTypes={allActions:r().array.isRequired,contentTypeName:r().string.isRequired,index:r().number.isRequired,isActive:r().bool.isRequired,isFormDisabled:r().bool.isRequired,label:r().string.isRequired,onClickToggleCollapse:r().func.isRequired,pathToData:r().string.isRequired,properties:r().array.isRequired};const fn=Et,Je=({actions:t,isFormDisabled:s,pathToData:a,subjects:o})=>{const[i,l]=(0,e.useState)(null),d=c=>{l(i===c?null:c)};return o.map(({uid:c,label:p,properties:u},y)=>e.createElement(fn,{allActions:t,key:c,contentTypeName:c,label:p,isActive:i===c,isFormDisabled:s,index:y,onClickToggleCollapse:d,pathToData:`${a}..${c}`,properties:u}))};Je.defaultProps={actions:[],subjects:[]},Je.propTypes={actions:r().array.isRequired,isFormDisabled:r().bool.isRequired,pathToData:r().string.isRequired,subjects:r().arrayOf(r().shape({uid:r().string.isRequired,label:r().string.isRequired,properties:r().array.isRequired}))};const hn=(0,e.memo)(Je),yn=t=>t.filter(({subjects:s})=>s&&s.length),Cn=t=>t.map(({actionId:s})=>s),En=(t,s)=>t.reduce((a,o)=>(Object.keys(s).forEach(i=>{const l=R()(s,[i,o],{}),d={[i]:ze(l)};a[o]?a[o]={...a[o],...d}:a[o]=d}),a),{}),vn=(t,s)=>{const a=Cn(t),o=En(a,s);return Object.keys(o).reduce((l,d)=>(l[d]=Oe(o[d]),l),{})},bn=(0,g.default)(x.k)`
  width: ${le};
  flex-shrink: 0;
`,qe=({actions:t,isFormDisabled:s,kind:a})=>{const{formatMessage:o}=(0,j.Z)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:l}=(0,G.$_)(),d=(0,e.useMemo)(()=>yn(t),[t]),c=(0,e.useMemo)(()=>vn(d,i[a]),[i,d,a]);return e.createElement(m.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ue}},e.createElement(x.k,{gap:0},d.map(({label:p,actionId:u})=>e.createElement(bn,{direction:"column",alignItems:"center",justifyContent:"center",key:u,gap:3},e.createElement(X.Z,{variant:"sigma",textColor:"neutral500"},o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})),e.createElement(K.C,{disabled:s,onValueChange:y=>{l(a,u,y)},name:u,"aria-label":o({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:o({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:R()(c,[u,"hasAllActionsSelected"],!1),indeterminate:R()(c,[u,"hasSomeActionsSelected"],!1)})))))};qe.defaultProps={actions:[]},qe.propTypes={actions:r().arrayOf(r().shape({label:r().string.isRequired,actionId:r().string.isRequired,subjects:r().array.isRequired})),isFormDisabled:r().bool.isRequired,kind:r().string.isRequired};const xn=(0,e.memo)(qe),Rn=(0,g.default)(m.x)`
  overflow-x: auto;
`,vt=({isFormDisabled:t,kind:s,layout:{actions:a,subjects:o}})=>{const i=N()([...o],"label");return e.createElement(Rn,{background:"neutral0"},e.createElement(xn,{actions:a,kind:s,isFormDisabled:t}),e.createElement(hn,{actions:a,isFormDisabled:t,pathToData:s,subjects:i}))};vt.propTypes={isFormDisabled:r().bool.isRequired,kind:r().string.isRequired,layout:r().shape({actions:r().array,subjects:r().arrayOf(r().shape({uid:r().string.isRequired,label:r().string.isRequired,properties:r().array.isRequired}))}).isRequired};const bt=(0,e.memo)(vt);var An=n(18542);const xt=({children:t,value:s})=>e.createElement(An.$l.Provider,{value:s},t);xt.propTypes={children:r().node.isRequired,value:r().exact({availableConditions:r().array.isRequired,modifiedData:r().object.isRequired,onChangeCollectionTypeLeftActionRowCheckbox:r().func.isRequired,onChangeConditions:r().func.isRequired,onChangeSimpleCheckbox:r().func.isRequired,onChangeParentCheckbox:r().func.isRequired,onChangeCollectionTypeGlobalActionCheckbox:r().func.isRequired}).isRequired};const Tn=xt;var Pn=n(97104),Sn=n(27375),Mn=n(37362),Rt=n(13539),On=n(9370),$n=n(61585);const Dn=(t,s,a)=>t.map(o=>{const i=[...a,o.action,"properties","enabled"],l=R()(s,i,!1),d=R()(s,[...a,o.action,"conditions"],{}),c=je(d).some(p=>p);return{...o,isDisplayed:l,checkboxName:i.join(".."),hasSomeActionsSelected:l,value:l,hasConditions:c,label:o.displayName,actionId:o.action,pathToConditionsObject:[...a,o.action]}}),Ln=t=>{const s=Object.entries(t).reduce((o,i)=>{const[l,{conditions:d}]=i;return o[l]=d,o},{});return je(s).some(o=>o)},jn=g.default.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:t})=>t.colors.neutral150};
`,In=g.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:t,disabled:s,theme:a})=>t&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?a.colors.neutral100:a.colors.primary600};
    }
  `}
`,At=({categoryName:t,isFormDisabled:s,subCategoryName:a,actions:o,pathToData:i})=>{const[l,d]=(0,e.useState)(!1),{modifiedData:c,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=(0,G.$_)(),{formatMessage:y}=(0,j.Z)(),T=R()(c,i,{}),D=(0,e.useMemo)(()=>Object.keys(T).reduce((F,te)=>(F[te]=ze(T[te]),F),{}),[T]),{hasAllActionsSelected:V,hasSomeActionsSelected:k}=Oe(D),O=()=>{d(F=>!F)},v=()=>{d(!1)},B=Dn(o,c,i),L=Ln(R()(c,[...i],{}));return e.createElement(e.Fragment,null,e.createElement(m.x,null,e.createElement(x.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(m.x,{paddingRight:4},e.createElement(X.Z,{variant:"sigma",textColor:"neutral600"},a)),e.createElement(jn,null),e.createElement(m.x,{paddingLeft:4},e.createElement(Rt.X,{name:i.join(".."),disabled:s,onValueChange:F=>{p({target:{name:i.join(".."),value:F}})},indeterminate:k,value:V},y({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(x.k,{paddingTop:6,paddingBottom:6},e.createElement(On.r,{gap:2,style:{flex:1}},B.map(({checkboxName:F,value:te,action:H,displayName:q,hasConditions:U})=>e.createElement($n.P,{col:3,key:H},e.createElement(In,{disabled:s,hasConditions:U},e.createElement(Rt.X,{name:F,disabled:s,onValueChange:fe=>{u({target:{name:F,value:fe}})},value:te},q))))),e.createElement(re,{hasConditions:L,onClick:O}))),l&&e.createElement(ie,{headerBreadCrumbs:[t,a],actions:B,isFormDisabled:s,onClosed:v,onToggle:O}))};At.propTypes={actions:r().array.isRequired,categoryName:r().string.isRequired,isFormDisabled:r().bool.isRequired,subCategoryName:r().string.isRequired,pathToData:r().array.isRequired};const kn=At,_e=({childrenForm:t,kind:s,name:a,isOpen:o,isFormDisabled:i,isWhite:l,onOpenCategory:d,pathToData:c})=>{const{formatMessage:p}=(0,j.Z)(),u=()=>{d(a)},y=(0,e.useMemo)(()=>a.split("::").pop(),[a]);return e.createElement(Pn.U,{expanded:o,onToggle:u,id:`accordion-${a}`,variant:l?"primary":"secondary"},e.createElement(Sn.B,{title:ce()(y),description:`${p({id:"Settings.permissions.category"},{category:y})} ${s==="plugins"?"plugin":s}`}),e.createElement(Mn.v,null,e.createElement(m.x,{padding:6},t.map(({actions:T,subCategoryName:D,subCategoryId:V})=>e.createElement(kn,{key:D,actions:T,categoryName:y,isFormDisabled:i,subCategoryName:D,pathToData:[...c,V]})))))};_e.defaultProps={},_e.propTypes={childrenForm:r().array.isRequired,isOpen:r().bool.isRequired,isFormDisabled:r().bool.isRequired,isWhite:r().bool.isRequired,kind:r().string.isRequired,name:r().string.isRequired,onOpenCategory:r().func.isRequired,pathToData:r().array.isRequired};const Bn=_e,Tt=({isFormDisabled:t,kind:s,layout:a})=>{const[o,i]=(0,e.useState)(null),l=d=>{i(d===o?null:d)};return e.createElement(m.x,{padding:6,background:"neutral0"},a.map(({category:d,categoryId:c,childrenForm:p},u)=>e.createElement(Bn,{key:d,childrenForm:p,kind:s,isFormDisabled:t,isOpen:o===d,isWhite:u%2===1,name:d,onOpenCategory:l,pathToData:[s,c]})))};Tt.propTypes={isFormDisabled:r().bool.isRequired,kind:r().string.isRequired,layout:r().arrayOf(r().shape({category:r().string.isRequired,categoryId:r().string.isRequired,childrenForm:r().arrayOf(r().shape({actions:r().array.isRequired})).isRequired}).isRequired).isRequired};const Pt=Tt;var Fn=n(82492),Nn=n.n(Fn),Wn=n(36968),ge=n.n(Wn);const St=(t,s,a)=>t.find(o=>o.action===s&&o.subject===a),Mt=(t,s=[])=>t.reduce((a,o)=>(a[o.id]=s.indexOf(o.id)!==-1,a),{}),Ot=({children:t},s,a="")=>t.reduce((o,i)=>{if(i.children)return{...o,[i.value]:Ot(i,s,`${a}${i.value}.`)};const l=s.indexOf(`${a}${i.value}`)!==-1;return o[i.value]=l,o},{}),Zn=(t,s,a)=>t.reduce((o,i)=>{const l=s.properties.find(({value:d})=>d===i);if(l){const d=R()(a,["properties",l.value],[]),c=Ot(l,d);o.properties[i]=c}return o},{properties:{}}),Vn=(t,s)=>s.reduce((a,o)=>{const i=t.find(({uid:l})=>l===o)||null;return i&&(a[o]=i),a},{}),$t=({subjects:t},s,a,o=[])=>s.reduce((i,l)=>{const d=l.subjects,c=Vn(t,d);if(P()(c))return i;const p=Object.keys(c).reduce((u,y)=>{const{actionId:T,applyToProperties:D}=l,O=c[y].properties.map(({value:F})=>F).every(F=>(D||[]).indexOf(F)===-1),v=St(o,T,y),B=Mt(a,R()(v,"conditions",[]));if(P()(D)||O)return ge()(u,[y,T],{properties:{enabled:v!==void 0},conditions:B}),u;const L=Zn(D,c[y],v);return ge()(u,[y,T],{...L,conditions:B}),u},{});return Nn()(i,p)},{}),Kn=(t,s,a)=>t.reduce((o,i)=>{const l=St(a,i.action,null);return o[i.action]={properties:{enabled:l!==void 0},conditions:Mt(s,l?.conditions??[])},o},{}),Un=(t,s,a)=>t.reduce((o,i)=>(o[i.subCategoryId]=Kn(i.actions,s,a),o),{}),Dt=(t,s,a=[])=>t.reduce((o,{categoryId:i,childrenForm:l})=>{const d=Un(l,s,a);return o[i]=d,o},{}),Lt=t=>t.split(" ").join("-"),jt=(t,s)=>Object.entries(pe()(t,s)).map(([a,o])=>({category:a,categoryId:Lt(a),childrenForm:Object.entries(pe()(o,"subCategory")).map(([i,l])=>({subCategoryName:i,subCategoryId:Lt(i),actions:l}))})),Hn=(t,s)=>{const{conditions:a,sections:{collectionTypes:o,singleTypes:i,plugins:l,settings:d}}=t,c={collectionTypes:o,singleTypes:i,plugins:jt(l,"plugin"),settings:jt(d,"category")},p={collectionTypes:$t(o,o.actions||[],a,s),singleTypes:$t(i,i.actions||[],a,s),plugins:Dt(c.plugins,a,s),settings:Dt(c.settings,a,s)};return{initialData:p,modifiedData:p,layouts:c}};var Gn=n(50361),et=n.n(Gn);const It=t=>Object.keys(t).reduce((s,a)=>{const o=t[a];if(Pe()(o)&&!C()(o,"conditions"))return{...s,[a]:It(o)};if(Pe()(o)&&C()(o,"conditions")&&!je(w()(o,"conditions")).some(l=>l)){const l=Object.keys(o.conditions).reduce((d,c)=>(d[c]=!1,d),{});return{...s,[a]:{...o,conditions:l}}}return s[a]=o,s},{}),tt=It,kt=(t,s,a=!1)=>Object.keys(t).reduce((o,i)=>{const l=t[i];return i==="conditions"&&!a?(o[i]=l,o):Pe()(l)?{...o,[i]:kt(l,s,i==="fields")}:(o[i]=s,o)},{}),He=kt,zn={initialData:{},modifiedData:{},layouts:{}},Yn=(t,s)=>(0,Q.ZP)(t,a=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:o,actionId:i,value:l}=s,d=["modifiedData",o];Object.keys(R()(t,d)).forEach(c=>{const p=R()(t,[...d,c,i],void 0);if(p){let u=He(p,l);if(!l&&u.conditions){const y=He(u.conditions,!1);u={...u,conditions:y}}ge()(a,[...d,c,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:o,propertyName:i,rowName:l,value:d}=s;let c=et()(t.modifiedData);const p=o.split(".."),u=R()(c,p,{});Object.keys(u).forEach(y=>{if(C()(u[y],`properties.${i}`)){const T=R()(u,[y,"properties",i,l]),D=[...p,y,"properties",i,l];if(!Pe()(T))ge()(c,D,d);else{const V=He(T,d);ge()(c,D,V)}}}),d||(c=tt(c)),ge()(a,"modifiedData",c);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(o=>{const[i,l]=o;ge()(a,["modifiedData",...i.split(".."),"conditions"],l)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let o=et()(t.modifiedData);ge()(o,[...s.keys.split("..")],s.value),s.value||(o=tt(o)),ge()(a,"modifiedData",o);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:o,value:i}=s,l=[...o.split("..")];let d=et()(t.modifiedData);const c=R()(d,l,{}),p=He(c,i);ge()(d,l,p),i||(d=tt(d)),ge()(a,["modifiedData"],d);break}case"RESET_FORM":{a.modifiedData=t.initialData;break}case"SET_FORM_AFTER_SUBMIT":{a.initialData=t.modifiedData;break}default:return a}}),nt=t=>Object.entries(t).filter(([,s])=>s).map(([s])=>s),Xn=t=>{const[s,{conditions:a}]=t;return{action:s,subject:null,conditions:nt(a),properties:{}}},wn=t=>Object.values(t).reduce((s,a)=>{const o=Object.entries(a).reduce((i,l)=>{const[,{properties:{enabled:d}}]=l;if(!d)return i;const c=Xn(l);return i.push(c),i},[]);return[...s,...o]},[]),Bt=t=>Object.values(t).reduce((s,a)=>{const o=wn(a);return[...s,...o]},[]),Ft=(t,s="")=>Object.entries(t).reduce((a,o)=>{const[i,l]=o;return Pe()(l)?[...a,...Ft(l,`${s}${i}.`)]:(l&&!Pe()(l)&&a.push(`${s}${i}`),a)},[]),Qn=(t,s,{conditions:a,properties:o})=>Object.entries(o).reduce((i,l)=>{const[d,c]=l;return i.properties[d]=Ft(c),i},{action:t,subject:s,conditions:nt(a),properties:{}}),Jn=(t,s,{conditions:a})=>({action:t,subject:s,properties:{},conditions:nt(a)}),qn=(t,s)=>Object.entries(s).reduce((o,i)=>{const[l,d]=i;if(!je(d).some(u=>u))return o;if(!d?.properties?.enabled){const u=Qn(l,t,d);return[...o,u]}if(!d.properties.enabled)return o;const p=Jn(l,t,d);return o.push(p),o},[]),Nt=t=>Object.entries(t).reduce((a,o)=>{const[i,l]=o,d=qn(i,l);return[...a,...d]},[]),_n=t=>{const s=Bt(t.plugins),a=Bt(t.settings),o=Nt(t.collectionTypes),i=Nt(t.singleTypes);return[...s,...a,...o,...i]},es=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],st=(0,e.forwardRef)(({layout:t,isFormDisabled:s,permissions:a},o)=>{const[{initialData:i,layouts:l,modifiedData:d},c]=(0,e.useReducer)(Yn,zn,()=>Hn(t,a)),{formatMessage:p}=(0,j.Z)();(0,e.useImperativeHandle)(o,()=>({getPermissions(){const k=(0,M.e5)(i.collectionTypes,d.collectionTypes),O=(0,M.e5)(i.singleTypes,d.singleTypes),v={...k,...O};let B;return P()(v)?B=!1:B=Object.values(v).some(L=>Object.values(L).some(F=>C()(F,"conditions"))),{permissionsToSend:_n(d),didUpdateConditions:B}},resetForm(){c({type:"RESET_FORM"})},setFormAfterSubmit(){c({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(k,O,v,B)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:k,propertyName:O,rowName:v,value:B})},y=(k,O,v)=>{c({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:k,actionId:O,value:v})},T=k=>{c({type:"ON_CHANGE_CONDITIONS",conditions:k})},D=(0,e.useCallback)(({target:{name:k,value:O}})=>{c({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:k,value:O})},[]),V=(0,e.useCallback)(({target:{name:k,value:O}})=>{c({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:k,value:O})},[]);return e.createElement(Tn,{value:{availableConditions:t.conditions,modifiedData:d,onChangeConditions:T,onChangeSimpleCheckbox:D,onChangeParentCheckbox:V,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:y}},e.createElement(f.v,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"})},e.createElement(A.m,null,es.map(k=>e.createElement(A.O,{key:k.id},p({id:k.labelId,defaultMessage:k.defaultMessage})))),e.createElement(h.n,{style:{position:"relative"}},e.createElement(h.x,null,e.createElement(bt,{layout:l.collectionTypes,kind:"collectionTypes",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(bt,{layout:l.singleTypes,kind:"singleTypes",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(Pt,{layout:l.plugins,kind:"plugins",isFormDisabled:s})),e.createElement(h.x,null,e.createElement(Pt,{layout:l.settings,kind:"settings",isFormDisabled:s})))))});st.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},st.propTypes={layout:r().object,isFormDisabled:r().bool.isRequired,permissions:r().array};const ts=(0,e.memo)(st)},63727:(Z,$,n)=>{"use strict";n.r($),n.d($,{default:()=>X});var e=n(67294),f=n(60797),A=n(86706),h=n(16550),M=n(36364),b=n(57713),C=n(79371),E=n(75878),P=n(19442),W=n(26789),r=n(50781),j=n(60793),m=n(41054),S=n(86896),N=n(4644),g=n(51754),x=n(90065),K=n(442),oe=n(78549),de=n(9370),ae=n(61585),R=n(28469),me=n(20603),w=n(45697),G=n.n(w);const _=({disabled:ne,role:Y,values:I,errors:Q,onChange:he,onBlur:pe})=>{const{formatMessage:J}=(0,S.Z)();return e.createElement(r.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(E.k,{justifyContent:"space-between"},e.createElement(r.x,null,e.createElement(r.x,null,e.createElement(oe.Z,{fontWeight:"bold"},Y?Y.name:J({id:"global.details",defaultMessage:"Details"}))),e.createElement(r.x,null,e.createElement(oe.Z,{textColor:"neutral500",variant:"pi"},Y?Y.description:J({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),e.createElement(P.z,{disabled:!0,variant:"secondary"},J({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:Y.usersCount}))),e.createElement(de.r,{gap:4},e.createElement(ae.P,{col:6},e.createElement(R.o,{disabled:ne,name:"name",error:Q.name&&J({id:Q.name}),label:J({id:"global.name",defaultMessage:"Name"}),onChange:he,onBlur:pe,required:!0,value:I.name||""})),e.createElement(ae.P,{col:6},e.createElement(me.g,{disabled:ne,label:J({id:"global.description",defaultMessage:"Description"}),id:"description",error:Q.name&&J({id:Q.name}),onChange:he,onBlur:pe},I.description||"")))))};_.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},_.propTypes={disabled:G().bool,errors:G().object.isRequired,onBlur:G().func.isRequired,onChange:G().func.isRequired,role:G().object,values:G().object};const Ce=_;var be=n(87561);const re=be.Ry().shape({name:be.Z_().required(f.I0.required)}),Se=()=>{const ne=(0,f.lm)(),{formatMessage:Y}=(0,S.Z)(),{params:{id:I}}=(0,h.$B)("/settings/roles/:id"),{put:Q}=(0,f.kY)(),[he,pe]=(0,e.useState)(!1),J=(0,e.useRef)(),{lockApp:ce,unlockApp:ke}=(0,f.o1)(),{trackUsage:Be}=(0,f.rS)(),{formatAPIError:Ee}=(0,f.So)(),{isLoading:Fe,data:Le}=(0,x.d)(I,{cacheTime:0}),{roles:[ye={}],isLoading:Me,refetch:Ne}=(0,g.F)({id:I},{cacheTime:0}),{permissions:Ue,isLoading:Ae}=(0,N.V)({id:I},{cacheTime:0}),ee=async le=>{try{ce(),pe(!0);const{permissionsToSend:ue,didUpdateConditions:Te}=J.current.getPermissions();await Q(`/admin/roles/${I}`,le),ye.code!=="strapi-super-admin"&&(await Q(`/admin/roles/${I}/permissions`,{permissions:ue}),Te&&Be("didUpdateConditions")),J.current.setFormAfterSubmit(),await Ne(),ne({type:"success",message:{id:"notification.success.saved"}})}catch(ue){ne({type:"warning",message:Ee(ue)})}finally{pe(!1),ke()}},ie=!Me&&ye.code==="strapi-super-admin";return e.createElement(b.o,null,e.createElement(f.SL,{name:"Roles"}),e.createElement(m.J9,{enableReinitialize:!0,initialValues:{name:ye.name,description:ye.description},onSubmit:ee,validationSchema:re,validateOnChange:!1},({handleSubmit:le,values:ue,errors:Te,handleChange:ot,handleBlur:We})=>e.createElement("form",{onSubmit:le},e.createElement(C.T,{primaryAction:e.createElement(E.k,{gap:2},e.createElement(P.z,{disabled:ye.code==="strapi-super-admin",onClick:le,loading:he,size:"L"},Y({id:"global.save",defaultMessage:"Save"}))),title:Y({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:Y({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.createElement(f.rU,{startIcon:e.createElement(j.Z,null),to:"/settings/roles"},Y({id:"global.back",defaultMessage:"Back"}))}),e.createElement(W.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(Ce,{isLoading:Me||Ae,disabled:ie,errors:Te,values:ue,onChange:ot,onBlur:We,role:ye}),!Fe&&!Me&&!Ae?e.createElement(r.x,{shadow:"filterShadow",hasRadius:!0},e.createElement(K.Z,{isFormDisabled:ie,permissions:Ue,ref:J,layout:Le})):e.createElement(r.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(f.dO,null)))))))},X=()=>{const ne=(0,A.v9)(M._),{isLoading:Y,allowedActions:{canRead:I,canUpdate:Q}}=(0,f.ss)({read:ne.settings.roles.read,update:ne.settings.roles.update});return Y?e.createElement(f.dO,null):!I&&!Q?e.createElement(h.l_,{to:"/"}):e.createElement(Se,null)}},90065:(Z,$,n)=>{"use strict";n.d($,{d:()=>A});var e=n(60797),f=n(88767);const A=(h,M={})=>{const{get:b}=(0,e.kY)(),{data:C,error:E,isError:P,isLoading:W}=(0,f.useQuery)(["permissions",h],async()=>{const{data:{data:r}}=await b("/admin/permissions",{params:{role:h}});return r},M);return{data:C,error:E,isError:P,isLoading:W}}},44174:Z=>{function $(n,e,f,A){for(var h=-1,M=n==null?0:n.length;++h<M;){var b=n[h];e(A,b,f(b),n)}return A}Z.exports=$},81119:(Z,$,n)=>{var e=n(89881);function f(A,h,M,b){return e(A,function(C,E,P){h(b,C,M(C),P)}),b}Z.exports=f},55189:(Z,$,n)=>{var e=n(44174),f=n(81119),A=n(67206),h=n(1469);function M(b,C){return function(E,P){var W=h(E)?e:f,r=C?C():{};return W(E,b,A(P,2),r)}}Z.exports=M},42348:(Z,$,n)=>{var e=n(21078),f=1/0;function A(h){var M=h==null?0:h.length;return M?e(h,f):[]}Z.exports=A},7739:(Z,$,n)=>{var e=n(89465),f=n(55189),A=Object.prototype,h=A.hasOwnProperty,M=f(function(b,C,E){h.call(b,E)?b[E].push(C):e(b,E,[C])});Z.exports=M},97104:(Z,$,n)=>{"use strict";n.d($,{U:()=>j,y:()=>W});var e=n(85893),f=n(67294),A=n(88972),h=n(7535),M=n(73879),b=n(78549),C=n(75878),E=n(50781);const P=({theme:m,expanded:S,variant:N,disabled:g,error:x})=>x?`1px solid ${m.colors.danger600} !important`:g?`1px solid ${m.colors.neutral150}`:S?`1px solid ${m.colors.primary600}`:N==="primary"?`1px solid ${m.colors.neutral0}`:`1px solid ${m.colors.neutral100}`,W=(0,A.default)(b.Z)``,r=(0,A.default)(E.x)`
  border: ${P};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:m})=>m.colors.primary600};

    ${W} {
      color: ${({theme:m,expanded:S})=>S?void 0:m.colors.primary700};
    }

    ${b.Z} {
      color: ${({theme:m,expanded:S})=>S?void 0:m.colors.primary600};
    }

    & > ${C.k} {
      background: ${({theme:m})=>m.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:m})=>m.colors.primary200};
    }
  }
`,j=({children:m,disabled:S=!1,error:N,expanded:g=!1,hasErrorMessage:x=!0,id:K,onToggle:oe,toggle:de,size:ae="M",variant:R="primary",shadow:me})=>{const w=(0,M.M)(K),G=f.useMemo(()=>({expanded:g,onToggle:oe,toggle:de,id:w,size:ae,variant:R,disabled:S}),[S,g,w,oe,ae,de,R]);return(0,e.jsxs)(h.S.Provider,{value:G,children:[(0,e.jsx)(r,{"data-strapi-expanded":g,disabled:S,"aria-disabled":S,expanded:g,hasRadius:!0,variant:R,error:N,shadow:me,children:m}),N&&x&&(0,e.jsx)(E.x,{paddingTop:1,children:(0,e.jsx)(b.Z,{variant:"pi",textColor:"danger600",children:N})})]})}},37362:(Z,$,n)=>{"use strict";n.d($,{v:()=>h});var e=n(85893),f=n(7535),A=n(50781);const h=({children:M,...b})=>{const{expanded:C,id:E}=(0,f.A)();if(!C)return null;const P=`accordion-content-${E}`,W=`accordion-label-${E}`,r=`accordion-desc-${E}`;return(0,e.jsx)(A.x,{role:"region",id:P,"aria-labelledby":W,"aria-describedby":r,...b,children:M})}},7535:(Z,$,n)=>{"use strict";n.d($,{A:()=>A,S:()=>f});var e=n(67294);const f=(0,e.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),A=()=>(0,e.useContext)(f)},27375:(Z,$,n)=>{"use strict";n.d($,{B:()=>m});var e=n(85893),f=n(21514),A=n(88972),h=n(97104),M=n(7535);const b=({expanded:S,disabled:N,variant:g})=>{let x="neutral100";return S?x="primary100":N?x="neutral150":g==="primary"&&(x="neutral0"),x};var C=n(90139),E=n(80907),P=n(75878),W=n(78549);const r=(0,A.default)(C.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:S,expanded:N})=>N?S.colors.primary600:S.colors.neutral500};
    }
  }
`,j=(0,A.default)(P.k)`
  min-height: ${({theme:S,size:N})=>S.sizes.accordions[N]};
  border-radius: ${({theme:S,expanded:N})=>N?`${S.borderRadius} ${S.borderRadius} 0 0`:S.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:S})=>S.colors.primary600};
      }
    }
  }
`,m=({title:S,description:N,as:g="span",togglePosition:x="right",action:K,...oe})=>{const{onToggle:de,toggle:ae,expanded:R,id:me,size:w,variant:G,disabled:_}=(0,M.A)(),Ce=`accordion-content-${me}`,be=`accordion-label-${me}`,xe=`accordion-desc-${me}`,re=w==="M"?6:4,Re=w==="M"?re:re-2,Se=b({expanded:R,disabled:_,variant:G}),z={as:g,fontWeight:w==="S"?"bold":void 0,id:be,textColor:R?"primary600":"neutral700",ellipsis:!0,variant:w==="M"?"delta":void 0},X=R?"primary600":"neutral600",ne=R?"primary200":"neutral200",Y=w==="M"?`${32/16}rem`:`${24/16}rem`,I=()=>{_||(ae&&!de?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),ae()):de&&de())},Q=(0,e.jsx)(P.k,{justifyContent:"center",borderRadius:"50%",height:Y,width:Y,transform:R?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ne,cursor:_?"not-allowed":"pointer",onClick:I,shrink:0,children:(0,e.jsx)(E.J,{as:f.Z,width:w==="M"?`${11/16}rem`:`${8/16}rem`,color:R?"primary600":"neutral600"})});return(0,e.jsx)(j,{paddingBottom:Re,paddingLeft:re,paddingRight:re,paddingTop:Re,background:Se,expanded:R,size:w,justifyContent:"space-between",cursor:_?"not-allowed":"",children:(0,e.jsxs)(P.k,{gap:3,flex:1,maxWidth:"100%",children:[x==="left"&&Q,(0,e.jsx)(r,{onClick:I,"aria-disabled":_,"aria-expanded":R,"aria-controls":Ce,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:R,type:"button",flex:1,minWidth:0,...oe,children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.y,{...z,children:S}),N&&(0,e.jsx)(W.Z,{as:"p",id:xe,textColor:X,children:N})]})}),x==="right"&&(0,e.jsxs)(P.k,{gap:3,children:[Q,K]}),x==="left"&&K]})})}},31439:(Z,$,n)=>{"use strict";n.d($,{Q:()=>h});var e=n(85893),f=n(88972),A=n(55482);const h=({options:b,...C})=>(0,e.jsx)(A.NU,{...C,children:b.map(E=>"children"in E?(0,e.jsx)(A.Ab,{label:E.label,values:E.children.map(P=>P.value.toString()),children:E.children.map(P=>(0,e.jsx)(M,{value:P.value,children:P.label},P.value))},E.label):(0,e.jsx)(A.ML,{value:E.value,children:E.label},E.value))}),M=(0,f.default)(A.ML)`
  padding-left: ${({theme:b})=>b.spaces[7]};
`},82392:(Z,$,n)=>{"use strict";n.d($,{O:()=>P});var e=n(85893),f=n(67294),A=n(88972),h=n(16607),M=n(10574);const b=()=>(0,e.jsx)(h.x,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,e.jsx)(M.Z,{variant:"pi",textColor:"neutral500",children:"/"})});b.displayName="Divider";var C=n(96987);const E=(0,A.default)(C.k)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:W})=>`calc(-1*${W.spaces[2]})`};
  }
`,P=({label:W,children:r,...j})=>{const m=f.Children.toArray(r);return(0,e.jsx)(h.x,{"aria-label":W,...j,children:(0,e.jsx)(E,{as:"ol",children:f.Children.map(m,(S,N)=>{const g=m.length>1&&N+1<m.length;return(0,e.jsxs)(C.k,{inline:!0,as:"li",children:[S,g&&(0,e.jsx)(b,{})]})})})})};P.displayName="Breadcrumbs"},75071:(Z,$,n)=>{"use strict";n.d($,{$:()=>h});var e=n(85893),f=n(16607),A=n(10574);const h=({children:M,isCurrent:b=!1,...C})=>(0,e.jsx)(f.x,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,e.jsx)(A.Z,{variant:"pi",textColor:"neutral800",fontWeight:b?"bold":"normal","aria-current":b,...C,children:M})});h.displayName="Crumb"}}]);
