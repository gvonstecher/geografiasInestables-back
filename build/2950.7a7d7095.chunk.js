"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[2950],{52713:(S,d,t)=>{t.d(d,{r:()=>u});var e=t(67294),r=t(50781),n=t(45697),a=t.n(n),f=t(99168);function l(s,o,c){if(!s||!o)return{display:"none"};const{x:i,y:g}=c;return{transform:`translate(${i}px, ${g}px)`}}function u({renderItem:s}){const{itemType:o,isDragging:c,item:i,initialOffset:g,currentOffset:T,mouseOffset:L}=(0,f.useDragLayer)(O=>({item:O.getItem(),itemType:O.getItemType(),initialOffset:O.getInitialSourceClientOffset(),currentOffset:O.getSourceClientOffset(),isDragging:O.isDragging(),mouseOffset:O.getClientOffset()}));return c?e.createElement(r.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(r.x,{style:l(g,T,L)},s({type:o,item:i}))):null}u.propTypes={renderItem:a().func.isRequired}},7761:(S,d,t)=>{t.d(d,{pl:()=>s,aY:()=>$,q5:()=>T.q});var e=t(67294),r=t(60797),n=t(18172);const a={data:[],isLoading:!0},l=(y,A)=>(0,n.ZP)(y,m=>{switch(A.type){case"GET_DATA_SUCCEEDED":{m.data=A.data,m.isLoading=!1;break}case"GET_DATA_ERROR":{m.isLoading=!1;break}default:return m}}),s=({ssoEnabled:y})=>{const[A,m]=(0,e.useReducer)(l,a),R=(0,r.lm)(),{get:E}=(0,r.kY)();return(0,e.useEffect)(()=>{(async()=>{try{if(!y){m({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:v}=await E("/admin/providers");m({type:"GET_DATA_SUCCEEDED",data:v})}catch(v){console.error(v),m({type:"GET_DATA_ERROR"}),R({type:"warning",message:{id:"notification.error"}})}})()},[E,y,R]),A};var o=t(14293),c=t.n(o),i=t(86896),g=t(16550),T=t(71926);const L="strapi-notification-seat-limit",O="https://cloud.strapi.io/profile/billing",D="https://strapi.io/billing/request-seats",$=()=>{const{formatMessage:y}=(0,i.Z)();let{license:A,isError:m,isLoading:R}=(0,T.q)();const E=(0,r.lm)(),{pathname:p}=(0,g.TH)(),{enforcementUserCount:v,permittedSeats:I,licenseLimitStatus:C,isHostedOnStrapiCloud:P}=A;(0,e.useEffect)(()=>{if(m||R)return;const W=!c()(I)&&!window.sessionStorage.getItem(`${L}-${p}`)&&(C==="AT_LIMIT"||C==="OVER_LIMIT");let M;C==="OVER_LIMIT"?M="warning":C==="AT_LIMIT"&&(M="softWarning"),W&&E({type:M,message:y({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:C}),title:y({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:C,enforcementUserCount:v,permittedSeats:I}),link:{url:P?O:D,label:y({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:P})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${L}-${p}`,!0)}})},[E,A,p,y,R,I,C,v,P,m])}},71926:(S,d,t)=>{t.d(d,{q:()=>a});var e=t(67294),r=t(60797),n=t(88767);function a({enabled:f}={enabled:!0}){const{get:l}=(0,r.kY)(),{data:u,isError:s,isLoading:o}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:g}}=await l("/admin/license-limit-information");return g},{enabled:f}),c=u??{},i=e.useCallback(g=>(c?.features??[]).find(L=>L.name===g)?.options??{},[c?.features]);return{license:c,getFeature:i,isError:s,isLoading:o}}},43390:(S,d,t)=>{t.d(d,{eJ:()=>R,lx:()=>A,h4:()=>E,fC:()=>m});var e=t(67294),r=t(45349),n=t(57713),a=t(26789),f=t(79371),l=t(60797),u=t(60793),s=t(86896),o=t(52713),c=t(86978),i=t(75878),g=t(78549),T=t(21514),L=t(45697),O=t.n(L),D=t(88972);const h=(0,D.default)(i.k)`
  svg path {
    fill: ${({theme:p})=>p.colors.neutral600};
  }
`;function $({name:p}){return e.createElement(i.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,l.Q1)(300)},e.createElement(h,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(T.Z,{width:`${8/16}rem`})),e.createElement(g.Z,{fontWeight:"bold"},p))}$.propTypes={name:O().string.isRequired};function y({type:p,item:v}){switch(p){case c.uL.STAGE:return e.createElement($,{...v});default:return null}}function A(){return e.createElement(o.r,{renderItem:y})}function m({children:p}){return e.createElement(r.A,null,e.createElement(n.o,{tabIndex:-1},e.createElement(a.D,null,p)))}function R({href:p}){const{formatMessage:v}=(0,s.Z)();return e.createElement(l.rU,{startIcon:e.createElement(u.Z,null),to:p},v({id:"global.back",defaultMessage:"Back"}))}function E({title:p,subtitle:v,navigationAction:I,primaryAction:C}){return e.createElement(e.Fragment,null,e.createElement(l.SL,{name:p}),e.createElement(f.T,{navigationAction:I,primaryAction:C,title:p,subtitle:v}))}},38705:(S,d,t)=>{t.d(d,{uT:()=>y,fC:()=>R,Dx:()=>$});var e=t(67294),r=t(78549),n=t(75878),a=t(60881),f=t(48683),l=t(50781),u=t(37527),s=t(94101),o=t(15800),c=t(45697),i=t.n(c),g=t(86896),T=t(88972);const L=t.p+"0cd5f8915b265d5b1856.png",O="limits-title",D="https://strapi.io/pricing-cloud",h="https://strapi.io/contact-sales";function $({children:E}){return e.createElement(r.Z,{variant:"alpha",id:O},E)}$.propTypes={children:i().node.isRequired};function y({children:E}){return e.createElement(r.Z,{variant:"omega"},E)}y.propTypes={children:i().node.isRequired};function A(){const{formatMessage:E}=(0,g.Z)();return e.createElement(n.k,{gap:2,paddingTop:4},e.createElement(s.Q,{variant:"default",isExternal:!0,href:D},E({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(s.Q,{variant:"tertiary",isExternal:!0,href:h},E({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const m=T.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:E})=>`-${E.spaces[7]}`};
  margin-top: ${({theme:E})=>`-${E.spaces[7]}`};
  width: 360px;
`;function R({children:E,isOpen:p,onClose:v}){const{formatMessage:I}=(0,g.Z)();return p?e.createElement(a.P,{labelledBy:O},e.createElement(f.f,null,e.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},E,e.createElement(A,null)),e.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(m,{src:L,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(l.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(u.h,{icon:e.createElement(o.Z,null),"aria-label":I({id:"global.close",defaultMessage:"Close"}),onClick:v})))))):null}R.defaultProps={isOpen:!1},R.propTypes={children:i().node.isRequired,isOpen:i().bool,onClose:i().func.isRequired}},86978:(S,d,t)=>{t.d(d,{$k:()=>s,Ef:()=>T,FT:()=>i,Nj:()=>u,Ot:()=>l,VS:()=>o,_X:()=>L,gu:()=>n,lv:()=>c,qZ:()=>a,sN:()=>r,uL:()=>g,x4:()=>f});var e=t(20468);const r="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",a="Settings/Review_Workflows/SET_WORKFLOW",f="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",l="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",s="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",o="Settings/Review_Workflows/WORKFLOW_UPDATE",c={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},i=e.W.colors.primary600,g={STAGE:"stage"},T="numberOfWorkflows",L="stagesPerWorkflow"},36530:(S,d,t)=>{t.d(d,{n:()=>n});var e=t(60797),r=t(88767);function n(a={}){const{get:f}=(0,e.kY)(),{id:l="",...u}=a,s={populate:"stages"},{data:o,isLoading:c,status:i,refetch:g}=(0,r.useQuery)(["review-workflows","workflows",l],async()=>(await f(`/admin/review-workflows/workflows/${l}`,{params:{...s,...u}})).data);let T=[];return l&&o?.data?T=[o.data]:Array.isArray(o?.data)&&(T=o.data),{meta:o?.meta??{},workflows:T,isLoading:c,status:i,refetch:g}}},60793:(S,d,t)=>{t.d(d,{Z:()=>n});var e=t(85893);const r=a=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...a,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),n=r},4071:(S,d,t)=>{t.d(d,{G$:()=>r,Gt:()=>i,MG:()=>e,MR:()=>u,T:()=>l,TP:()=>n,Vb:()=>f,Vv:()=>o,ZC:()=>c,gK:()=>a,wG:()=>s});const e="success-light",r="danger-light",n="default",a="tertiary",f="secondary",l="danger",u="success",s="ghost",o=[e,r],c=[n,a,f,l,u,s,...o],i=["S","M","L"]},62485:(S,d,t)=>{t.d(d,{PD:()=>u,sg:()=>a,tB:()=>l,yP:()=>f});var e=t(4071),r=t(10574);const n=s=>s===e.MG||s===e.G$?`${s.substring(0,s.lastIndexOf("-"))}`:s===e.gK?"neutral":s===e.TP||s===e.Vb||e.ZC.every(o=>o!==s)?"primary":`${s}`,a=({theme:s})=>`
    border: 1px solid ${s.colors.neutral200};
    background: ${s.colors.neutral150};
    ${r.Z} {
      color: ${s.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${s.colors.neutral600};
      }
    }
  `,f=({theme:s,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${s.colors.neutral0};
    `:o===e.gK?`
      background-color: ${s.colors.neutral100};
    `:o===e.wG?`
      background-color: ${s.colors.neutral100};
    `:o===e.TP?`
      border: 1px solid ${s.colors.buttonPrimary500};
      background: ${s.colors.buttonPrimary500};
    `:`
    border: 1px solid ${s.colors[`${n(o)}500`]};
    background: ${s.colors[`${n(o)}500`]};
  `,l=({theme:s,variant:o})=>[...e.Vv,e.Vb].includes(o)?`
      background-color: ${s.colors.neutral0};
      border: 1px solid ${s.colors[`${n(o)}600`]};
      ${r.Z} {
        color: ${s.colors[`${n(o)}600`]};
      }
      svg {
        > g, path {
          fill: ${s.colors[`${n(o)}600`]};
        }
      }
    `:o===e.gK?`
      background-color: ${s.colors.neutral150};
    `:`
    border: 1px solid ${s.colors[`${n(o)}600`]};
    background: ${s.colors[`${n(o)}600`]};
  `,u=({theme:s,variant:o})=>{switch(o){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${s.colors[`${n(o)}200`]};
          background: ${s.colors[`${n(o)}100`]};
          ${r.Z} {
            color: ${s.colors[`${n(o)}700`]};
          }
          svg {
            > g, path {
              fill: ${s.colors[`${n(o)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${s.colors.neutral200};
          background: ${s.colors.neutral0};
          ${r.Z} {
            color: ${s.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${s.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${r.Z} {
          color: ${s.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${s.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${s.colors[`${n(o)}600`]};
          background: ${s.colors[`${n(o)}600`]};
          ${r.Z} {
            color: ${s.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${s.colors.buttonNeutral0};
            }
          }
        `}}},94101:(S,d,t)=>{t.d(d,{Q:()=>c});var e=t(85893),r=t(67294),n=t(88972),a=t(62485),f=t(20501),l=t(53342),u=t(96987),s=t(10574);const o=(0,n.default)(f.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${a.sg}
    &:active {
      ${a.sg}
    }
  }

  &:hover {
    ${a.yP}
  }

  &:active {
    ${a.tB}
  }

  ${a.PD}
`,c=r.forwardRef(({variant:i="default",startIcon:g,endIcon:T,disabled:L=!1,children:O,size:D="S",as:h=l.f,...$},y)=>{const A=D==="S"?2:"10px",m=4;return(0,e.jsxs)(o,{ref:y,"aria-disabled":L,size:D,variant:i,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:A,paddingLeft:m,paddingRight:m,paddingTop:A,pointerEvents:L?"none":void 0,...$,as:h||l.f,children:[g&&(0,e.jsx)(u.k,{"aria-hidden":!0,children:g}),(0,e.jsx)(s.Z,{variant:D==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:O}),T&&(0,e.jsx)(u.k,{"aria-hidden":!0,children:T})]})});c.displayName="LinkButton"}}]);
