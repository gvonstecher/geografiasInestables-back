"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[5013],{71926:(u,r,t)=>{t.d(r,{q:()=>l});var e=t(67294),d=t(60797),i=t(88767);function l({enabled:c}={enabled:!0}){const{get:m}=(0,d.kY)(),{data:L,isError:o,isLoading:_}=(0,i.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:a}}=await m("/admin/license-limit-information");return a},{enabled:c}),s=L??{},n=e.useCallback(a=>(s?.features??[]).find(E=>E.name===a)?.options??{},[s?.features]);return{license:s,getFeature:n,isError:o,isLoading:_}}},65013:(u,r,t)=>{t.r(r),t.d(r,{AdminSeatInfoEE:()=>g});var e=t(67294),d=t(61585),i=t(78549),l=t(75878),c=t(74273),m=t(80907),L=t(29430),o=t(60797),_=t(91330),s=t(91393),n=t(86896),a=t(86706),M=t(36364),E=t(71926);const O="https://cloud.strapi.io/profile/billing",P="https://strapi.io/billing/request-seats",g=()=>{const{formatMessage:D}=(0,n.Z)(),A=(0,a.v9)(M._),{isLoading:C,allowedActions:{canRead:I,canCreate:B,canUpdate:R,canDelete:U}}=(0,o.ss)(A.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:f,permittedSeats:p,isHostedOnStrapiCloud:v},isError:W,isLoading:K}=(0,E.q)({enabled:!C&&I&&B&&R&&U});return W||(C||K)||!p?null:e.createElement(d.P,{col:6,s:12},e.createElement(i.Z,{variant:"sigma",textColor:"neutral600"},D({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(l.k,{gap:2},e.createElement(l.k,null,e.createElement(i.Z,{as:"p"},D({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:p,enforcementUserCount:f,text:h=>e.createElement(i.Z,{fontWeight:"semiBold",textColor:f>p?"danger500":null},h)}))),T==="OVER_LIMIT"&&e.createElement(c.u,{description:D({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(m.J,{width:`${(0,o.Q1)(14)}rem`,height:`${(0,o.Q1)(14)}rem`,color:"danger500",as:_.Z}))),e.createElement(L.r,{href:v?O:P,isExternal:!0,endIcon:e.createElement(s.Z,null)},D({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:v})))}},29430:(u,r,t)=>{t.d(r,{r:()=>_});var e=t(85893),d=t(67294),i=t(91393),l=t(88972),c=t(66362),m=t(53342),L=t(10574);const o=(0,l.default)(m.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:s})=>s.spaces[2]};
  pointer-events: ${({disabled:s})=>s?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:s,theme:n})=>s?n.colors.neutral600:n.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:s})=>s.colors.primary500};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary700};
  }

  ${c.BF};
`,_=d.forwardRef(({children:s,href:n,disabled:a=!1,startIcon:M,endIcon:E,isExternal:O=!0,...P},g)=>(0,e.jsxs)(o,{ref:g,href:n,disabled:a,isExternal:O,...P,children:[M,(0,e.jsx)(L.Z,{textColor:a?"neutral600":"primary600",children:s}),E,n&&!E&&O&&(0,e.jsx)(i.Z,{})]}));_.displayName="Link"}}]);
