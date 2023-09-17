"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[5895],{6966:(gt,O,t)=>{t.r(O),t.d(O,{SettingsPage:()=>mt,default:()=>Te});var e=t(67294),P=t(45349),p=t(60797),Z=t(64593),L=t(86896),z=t(16550),D=t(92807),w=t(80902),B=t(35209),ut=t(66712),pt=t(5330),ht=t(61499),ft=t(21660),Et=t(36636),vt=t(45697),s=t.n(vt),St=t(73727),Lt=t(94654),yt=t.n(Lt);const Mt=o=>yt()(o,a=>a.links).map(a=>(0,B.ot)(a.Component,a.to,a.exact||!1)),Ct=o=>o.filter(n=>!n.links.every(a=>a.isDisplayed===!1)),k=({menu:o})=>{const{formatMessage:n}=(0,L.Z)(),{trackUsage:a}=(0,p.rS)(),{pathname:l}=(0,z.TH)(),m=Ct(o).map(d=>({...d,title:d.intlLabel,links:d.links.map(i=>({...i,title:i.intlLabel,name:i.id}))})),u=n({id:"global.settings",defaultMessage:"Settings"}),c=(d=null)=>{a("willNavigate",{from:l,to:d})};return e.createElement(ut.m,{ariaLabel:u},e.createElement(pt.p,{label:u}),e.createElement(ht.Z,null,m.map(d=>e.createElement(ft.D,{key:d.id,label:n(d.intlLabel)},d.links.map(i=>e.createElement(Et.E,{as:St.NavLink,withBullet:i.hasNotification,to:i.to,onClick:()=>c(i.to),key:i.id},n(i.intlLabel)))))))};k.propTypes={menu:s().array.isRequired};const xt=k,Rt=[{async Component(){return await t.e(3455).then(t.bind(t,7513))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,25545))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(2544)]).then(t.bind(t,63727))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,87901))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,93552))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,71589))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,10372))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,10998))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,71362))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(2458),t.e(4299)]).then(t.bind(t,1880))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(2458),t.e(92)]).then(t.bind(t,50955))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(3467),t.e(4816)]).then(t.bind(t,81524))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,68446))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(949),t.e(5477),t.e(3467),t.e(2492)]).then(t.bind(t,63252))},to:"/settings/transfer-tokens/:id",exact:!0}];var Tt=t(57713),zt=t(28809),It=t(79371),M=t(19442),At=t(26789),C=t(75878),f=t(78549),q=t(9370),I=t(61585),_=t(51503),Ft=t(8675),tt=t(91393),N=t(88767),Ot=t(86706),Pt=t(36364),y=t(50781);const T=750,A=100,et=["image/jpeg","image/png","image/svg+xml"];var Ut=t(2578),Zt=t(58488),nt=t(37527),Dt=t(21345),Bt=t(12978),Nt=t(61378),jt=t(60881),Gt=t(18189),j=t(18172);const ot={localImage:void 0},Ht=(o=ot,n)=>(0,j.ZP)(o,a=>{switch(n.type){case"SET_LOCAL_IMAGE":{a.localImage=n.value;break}default:return a}}),G=({onChangeLogo:o,customLogo:n,goTo:a,Component:l,modalTitle:r,next:m,prev:u,currentStep:c})=>{const[{localImage:d},i]=(0,e.useReducer)(Ht,ot),{formatMessage:h}=(0,L.Z)(),g=E=>{i({type:"SET_LOCAL_IMAGE",value:E})},v=()=>{a(null)};return c?e.createElement(jt.P,{labelledBy:"modal",onClose:v},e.createElement(Gt.x,null,e.createElement(f.Z,{fontWeight:"bold",as:"h2",id:"modal"},h(r))),e.createElement(l,{setLocalImage:g,goTo:a,next:m,prev:u,onClose:v,asset:d||n,onChangeLogo:o})):null};G.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},G.propTypes={Component:s().elementType,currentStep:s().string,customLogo:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}),goTo:s().func.isRequired,modalTitle:s().shape({id:s().string,defaultMessage:s().string}),next:s().string,onChangeLogo:s().func.isRequired,prev:s().string};const Wt=G,at={currentStep:void 0},Vt=(o=at,n)=>(0,j.ZP)(o,a=>{switch(n.type){case"GO_TO":{a.currentStep=n.to;break}default:return a}});var $t=t(20107),H=t(61738),Kt=t(81984),W=t(54375),Qt=t(65093),Jt=t(32156),Xt=t(80907),Yt=t(8595),V=t(45124),bt=t(38828),wt=t(88972);const kt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},st={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},qt=o=>new Promise(n=>{const a=new FileReader;a.onload=()=>{const l=new Image;l.onload=function(){n({width:l.width,height:l.height})},l.src=a.result},a.readAsDataURL(o)}),_t=(o,n)=>({ext:o.name.split(".").pop(),size:o.size/1e3,name:o.name,url:URL.createObjectURL(o),rawFile:o,width:n.width,height:n.height}),lt=async o=>{let n;if(!et.includes(o.type))throw n=new Error("File format"),n.displayMessage=kt,n;const l=await qt(o);if(!(l.width<=T&&l.height<=T))throw n=new Error("File sizing"),n.displayMessage=st,n;const m=_t(o,l);if(!(m.size<=A))throw n=new Error("File sizing"),n.displayMessage=st,n;return m},te=(0,wt.default)(Qt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,$=({setLocalImage:o,goTo:n,next:a,onClose:l})=>{const{formatMessage:r}=(0,L.Z)(),[m,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)(void 0),i=(0,e.useRef)(null),h=()=>u(!0),g=()=>u(!1),v=x=>{x.preventDefault(),i.current.click()},E=async()=>{g();const x=i.current.files[0];if(x)try{const R=await lt(x);o(R),n(a)}catch(R){if(R.displayMessage)d(r(R.displayMessage,{size:A,dimension:T})),i.current.focus();else throw R}},S=()=>m?"primary500":c?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(y.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(Jt.g,{name:"logo-upload",error:c},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(C.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:m?"primary100":"neutral100",borderColor:S(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:h,onDragLeave:g},e.createElement(Xt.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:bt.Z,"aria-hidden":!0}),e.createElement(y.x,{paddingTop:3,paddingBottom:5},e.createElement(f.Z,{variant:"delta",as:"span"},r({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(te,{accept:et,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:E,ref:i,id:"logo-upload"}),e.createElement(M.z,{type:"button",onClick:v},r({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(y.x,{paddingTop:6},e.createElement(f.Z,{variant:"pi",textColor:"neutral600"},r({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:A,dimension:T})))),e.createElement(Yt.c,null)))))),e.createElement(V.m,{startActions:e.createElement(M.z,{onClick:l,variant:"tertiary"},r({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};$.defaultProps={next:null},$.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ee=$;var ne=t(28469);const oe=async o=>{try{const{get:n}=(0,p.tg)(),a=await n(o,{responseType:"blob",timeout:8e3});return new File([a.data],a.config.url,{type:a.headers["content-type"]})}catch(n){throw n.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},n}},K=({goTo:o,next:n,onClose:a,setLocalImage:l})=>{const{formatMessage:r}=(0,L.Z)(),[m,u]=(0,e.useState)(""),[c,d]=(0,e.useState)(null),i=g=>{u(g.target.value)},h=async()=>{try{const g=await oe(m),v=await lt(g);l(v),o(n)}catch(g){if(g.displayMessage)d(r(g.displayMessage,{size:A,dimension:T}));else throw g}};return e.createElement("form",{onSubmit:g=>{g.preventDefault(),h()}},e.createElement(y.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(ne.o,{label:r({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:c,onChange:i,value:m,name:"logo-url"})),e.createElement(V.m,{startActions:e.createElement(M.z,{onClick:a,variant:"tertiary"},r({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(M.z,{type:"submit"},r({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};K.defaultProps={next:null},K.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ae=K,Q=({setLocalImage:o,goTo:n,next:a,onClose:l})=>{const{formatMessage:r}=(0,L.Z)();return e.createElement($t.v,{label:r({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(y.x,{paddingLeft:8,paddingRight:8},e.createElement(H.m,null,e.createElement(H.O,null,r({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(H.O,null,r({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement(Kt.i,null)),e.createElement(W.n,null,e.createElement(W.x,null,e.createElement(ee,{onClose:l,setLocalImage:o,goTo:n,next:a})),e.createElement(W.x,null,e.createElement(ae,{onClose:l,setLocalImage:o,goTo:n,next:a}))))};Q.defaultProps={next:null},Q.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const se=Q;var le=t(46038),ie=t(5390),re=t(11255),de=t(71029),ce=t(91457),it=t(81896),me=t(50192);const rt=({asset:o})=>{const{formatMessage:n}=(0,L.Z)();return e.createElement(le.Z,null,e.createElement(ie.O,null,e.createElement(re.H,{size:"S",src:o.url})),e.createElement(de.e,null,e.createElement(ce.a,null,e.createElement(it.l,null,o.name),e.createElement(it._,null,`${o.ext.toUpperCase()} - ${o.width}\u2715${o.height}`)),e.createElement(me.E,null,n({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};rt.propTypes={asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired};const ge=rt,J=({onClose:o,asset:n,prev:a,next:l,goTo:r,setLocalImage:m,onChangeLogo:u})=>{const{formatMessage:c}=(0,L.Z)(),d=()=>{m(void 0),r(a)},i=()=>{u(n),r(l)};return e.createElement(e.Fragment,null,e.createElement(y.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(C.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(C.k,{direction:"column",alignItems:"flex-start"},e.createElement(f.Z,{variant:"pi",fontWeight:"bold"},c({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(f.Z,{variant:"pi",textColor:"neutral500"},c({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(M.z,{onClick:d,variant:"secondary"},c({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(y.x,{maxWidth:(0,p.Q1)(180)},n.url?e.createElement(ge,{asset:n}):null)),e.createElement(V.m,{startActions:e.createElement(M.z,{onClick:o,variant:"tertiary"},c({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(M.z,{onClick:i},c({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};J.defaultProps={next:null,prev:null},J.propTypes={goTo:s().func.isRequired,asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired,next:s().string,onClose:s().func.isRequired,onChangeLogo:s().func.isRequired,prev:s().string,setLocalImage:s().func.isRequired};const ue={upload:{Component:se,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:J,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},X=({canUpdate:o,customLogo:n,defaultLogo:a,hint:l,label:r,onChangeLogo:m,onResetLogo:u})=>{const[{currentStep:c},d]=(0,e.useReducer)(Vt,at),{Component:i,next:h,prev:g,modalTitle:v}=ue[c]||{},{formatMessage:E}=(0,L.Z)(),S=x=>{d({type:"GO_TO",to:x})};return e.createElement(e.Fragment,null,e.createElement(Ut.F,{label:r,selectedSlide:0,hint:l,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:n?.name||"logo.png",actions:e.createElement(Zt.b,null,e.createElement(nt.h,{disabled:!o,onClick:()=>S(n?"pending":"upload"),label:E({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(Bt.Z,null)}),n&&e.createElement(nt.h,{disabled:!o,onClick:u,label:E({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(Nt.Z,null)}))},e.createElement(Dt.q,{label:E({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(y.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:n?.url||a,alt:E({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Wt,{Component:i,currentStep:c,onChangeLogo:m,customLogo:n,goTo:S,next:h,prev:g,modalTitle:v}))};X.defaultProps={canUpdate:!1,customLogo:null,hint:null},X.propTypes={canUpdate:s().bool,customLogo:s().shape({url:s().string,name:s().string}),label:s().string.isRequired,hint:s().string,defaultLogo:s().string.isRequired,onChangeLogo:s().func.isRequired,onResetLogo:s().func.isRequired};const dt=X;var pe=t(82492),he=t.n(pe);const fe=(o,n)=>he()(o,{menuLogo:{display:n.menuLogo},authLogo:{display:n.authLogo}}),Y={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},Ee=(o=Y,n)=>(0,j.ZP)(o,a=>{switch(n.type){case"SET_CUSTOM_MENU_LOGO":{a.menuLogo.display=n.value,a.menuLogo.submit.rawFile=n.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{a.authLogo.display=n.value,a.authLogo.submit.rawFile=n.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{a.menuLogo.display=null,a.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{a.authLogo.display=null,a.authLogo.submit={rawFile:null,isReset:!0};break}default:return a}}),b=(0,e.forwardRef)(({canUpdate:o,projectSettingsStored:n},a)=>{const{formatMessage:l}=(0,L.Z)(),{trackUsage:r}=(0,p.rS)(),{logos:{menu:m,auth:u}}=(0,D.um)(),[{menuLogo:c,authLogo:d},i]=(0,e.useReducer)(Ee,Y,()=>fe(Y,n)),h=S=>{i({type:"SET_CUSTOM_MENU_LOGO",value:S})},g=()=>{r("didClickResetLogo",{logo:"menu"}),i({type:"RESET_CUSTOM_MENU_LOGO"})},v=S=>{i({type:"SET_CUSTOM_AUTH_LOGO",value:S})},E=()=>{r("didClickResetLogo",{logo:"auth"}),i({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(a,()=>({getValues:()=>({menuLogo:c.submit,authLogo:d.submit})})),e.createElement(y.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(f.Z,{variant:"delta",as:"h3"},l({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(f.Z,{variant:"pi",textColor:"neutral600"},l({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:T,size:A})),e.createElement(q.r,{paddingTop:4,gap:4},e.createElement(I.P,{col:6,s:12},e.createElement(dt,{canUpdate:o,customLogo:c.display,defaultLogo:m.default,hint:l({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:l({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:h,onResetLogo:g})),e.createElement(I.P,{col:6,s:12},e.createElement(dt,{canUpdate:o,customLogo:d.display,defaultLogo:u.default,hint:l({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:l({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:v,onResetLogo:E}))))});b.defaultProps={canUpdate:!1,projectSettingsStored:null},b.propTypes={canUpdate:s().bool,projectSettingsStored:s().shape({menuLogo:s().shape({url:s().string,name:s().string})})};const ve=b;var Se=t(68718),Le=t.n(Se);const ct=o=>Le()(o,(n,a,l)=>{a&&a.url?n[l]={...a,url:(0,p.CR)(a.url)}:n[l]=a},{}),ye=async()=>{const{get:o}=(0,p.tg)(),{data:n}=await o("/admin/project-settings");return ct(n)},Me=async o=>{const{post:n}=(0,p.tg)(),{data:a}=await n("/admin/project-settings",o,{headers:{"Content-Type":"multipart/form-data"}});return ct(a)},Ce=o=>{const n=new FormData;return Object.entries(o).forEach(([a,l])=>{l&&l.rawFile instanceof File&&n.append(a,l.rawFile),l&&l.isReset&&n.append(a,null)}),n},xe=()=>null,Re=()=>{const o=(0,e.useRef)(),n=(0,p.lm)(),{trackUsage:a}=(0,p.rS)(),{formatMessage:l}=(0,L.Z)(),r=(0,N.useQueryClient)();(0,p.go)();const{communityEdition:m,latestStrapiReleaseTag:u,nodeVersion:c,shouldUpdateStrapi:d,strapiVersion:i}=(0,p.L7)(),{updateProjectSettings:h}=(0,D.um)(),g=(0,Ot.v9)(Pt._),v=(0,w.c)(xe,async()=>(await t.e(5013).then(t.bind(t,65013))).AdminSeatInfoEE),{allowedActions:{canRead:E,canUpdate:S}}=(0,p.ss)(g.settings["project-settings"]),x=E&&S,{data:R,isLoading:ze}=(0,N.useQuery)("project-settings",ye,{enabled:E}),Ie=(0,N.useMutation)(F=>Me(F),{async onSuccess({menuLogo:F,authLogo:U}){await r.invalidateQueries("project-settings",{refetchActive:!0}),h({menuLogo:F?.url,authLogo:U?.url})}}),Ae=F=>{if(F.preventDefault(),!S)return;const U=o.current.getValues(),Fe=Ce(U);Ie.mutate(Fe,{onSuccess(){const{menuLogo:Oe,authLogo:Pe}=U;Oe.rawFile&&a("didChangeLogo",{logo:"menu"}),Pe.rawFile&&a("didChangeLogo",{logo:"auth"}),n({type:"success",message:l({id:"app",defaultMessage:"Saved"})})},onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}})};return v?e.createElement(P.A,null,e.createElement(p.SL,{name:"Application"}),e.createElement(Tt.o,null,ze?e.createElement(zt.a,null,l({id:"Settings.application.isLoading",defaultMessage:"Loading"})):e.createElement("form",{onSubmit:Ae},e.createElement(It.T,{title:l({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:l({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:x&&e.createElement(M.z,{type:"submit",startIcon:e.createElement(Ft.Z,null)},l({id:"global.save",defaultMessage:"Save"}))}),e.createElement(At.D,null,e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(C.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(f.Z,{variant:"delta",as:"h3"},l({id:"global.details",defaultMessage:"Details"})),e.createElement(q.r,{gap:5,as:"dl"},e.createElement(I.P,{col:6,s:12},e.createElement(f.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},l({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(C.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(f.Z,null,"v",i),d&&e.createElement(_.r,{href:`https://github.com/strapi/strapi/releases/tag/${u}`,isExternal:!0,endIcon:e.createElement(tt.Z,null)},l({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(I.P,{col:6,s:12},e.createElement(f.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},l({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(C.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(f.Z,null,l({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:m})),e.createElement(_.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement(tt.Z,null)},l({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(I.P,{col:6,s:12},e.createElement(f.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},l({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(f.Z,{as:"dd"},c)),e.createElement(v,null))),E&&R&&e.createElement(ve,{canUpdate:S,ref:o,projectSettingsStored:R})))))):null};function mt(){const{settingId:o}=(0,z.UO)(),{settings:n}=(0,p.j1)(),{formatMessage:a}=(0,L.Z)(),{isLoading:l,menu:r}=(0,D.Te)(),m=(0,w.c)(Rt,async()=>(await t.e(1470).then(t.bind(t,51470))).ROUTES_EE,{combine(i,h){return[...i,...h]},defaultValue:[]}),u=(0,e.useMemo)(()=>(0,B.WW)(m.map(({to:i,Component:h,exact:g})=>(0,B.ot)(h,i,g))),[m]),c=Mt(n);if(l)return e.createElement(p.dO,null);if(!o)return e.createElement(z.l_,{to:"/settings/application-infos"});const d=a({id:"global.settings",defaultMessage:"Settings"});return e.createElement(P.A,{sideNav:e.createElement(xt,{menu:r})},e.createElement(Z.q,{title:d}),e.createElement(z.rs,null,e.createElement(z.AW,{path:"/settings/application-infos",component:Re,exact:!0}),u,c))}const Te=(0,e.memo)(mt)},22534:(gt,O,t)=>{t.d(O,{Z:()=>p});var e=t(85893);const P=Z=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 4 4",...Z,children:(0,e.jsx)("rect",{width:4,height:4,fill:"#A5A5BA",rx:2})}),p=P}}]);