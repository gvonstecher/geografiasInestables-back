(self.webpackChunkback=self.webpackChunkback||[]).push([[4139],{94654:(R,h,t)=>{var e=t(21078),o=t(35161);function p(s,l){return e(o(s,l),1)}R.exports=p},35161:(R,h,t)=>{var e=t(29932),o=t(67206),p=t(69199),s=t(1469);function l(a,d){var c=s(a)?e:p;return c(a,o(d,3))}R.exports=l},45349:(R,h,t)=>{"use strict";t.d(h,{A:()=>a});var e=t(85893),o=t(88972),p=t(50781);const s=(0,o.default)(p.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:d})=>d?"auto 1fr":"1fr"};
`,l=(0,o.default)(p.x)`
  overflow-x: hidden;
`,a=({sideNav:d,children:c})=>(0,e.jsxs)(s,{hasSideNav:!!d,children:[d,(0,e.jsx)(l,{paddingBottom:10,children:c})]})},51503:(R,h,t)=>{"use strict";t.d(h,{r:()=>E});var e=t(85893),o=t(67294),p=t(91393),s=t(73727),l=t(88972),a=t(27882),d=t(78549),c=t(50781);const x=l.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:g})=>g?"none":void 0};
  color: ${({disabled:g,theme:i})=>g?i.colors.neutral600:i.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${d.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:g})=>g.colors.primary500};
  }

  &:active {
    color: ${({theme:g})=>g.colors.primary700};
  }

  ${a.BF};
`,u=(0,l.default)(c.x)`
  display: flex;
`,E=o.forwardRef(({children:g,href:i,to:M,disabled:v=!1,startIcon:D,endIcon:b,...j},_)=>(0,e.jsxs)(x,{as:M&&!v?s.NavLink:"a",target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0,to:v?void 0:M,href:v?"#":i,disabled:v,ref:_,...j,children:[D&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingRight:2,children:D}),(0,e.jsx)(d.Z,{children:g}),b&&!i&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:b}),i&&(0,e.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(p.Z,{})})]}))},20501:(R,h,t)=>{"use strict";t.d(h,{G:()=>a,Y:()=>d});var e=t(85893),o=t(67294),p=t(88972),s=t(66362),l=t(96987);const a=(0,p.default)(l.k)`
  > svg {
    height: ${({theme:c})=>c.spaces[3]};
    width: ${({theme:c})=>c.spaces[3]};

    > g,
    path {
      fill: ${({theme:c})=>c.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.BF}
`,d=o.forwardRef(({disabled:c,children:x,background:u="neutral0",...E},g)=>(0,e.jsx)(a,{ref:g,"aria-disabled":c,as:"button",type:"button",disabled:c,padding:2,hasRadius:!0,background:u,borderColor:"neutral200",cursor:"pointer",...E,children:x}));d.displayName="BaseButton"},66362:(R,h,t)=>{"use strict";t.d(h,{BF:()=>s,k3:()=>p});var e=t(88972);const o=l=>({theme:a,size:d})=>a.sizes[l][d],p=(l="&")=>({theme:a,hasError:d=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${l}:focus-within {
      border: 1px solid ${d?a.colors.danger600:a.colors.primary600};
      box-shadow: ${d?a.colors.danger600:a.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:l})=>(0,e.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${l.colors.primary600};
    }
  }
`},66712:(R,h,t)=>{"use strict";t.d(h,{m:()=>x});var e=t(85893),o=t(88972),p=t(33368),s=t(16607);const l=(0,o.default)(s.x)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:u})=>u}, 1fr);
  ${({theme:u,gap:E})=>(0,p.Z)("gap",E,u)}
`,a=u=>{const{gap:E="0",gridCols:g=12,...i}=u;return(0,e.jsx)(l,{gap:E,gridCols:g,...i})},d=`${232/16}rem`,c=(0,o.default)(a)`
  width: ${d};
  background: ${({theme:u})=>u.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:u})=>u.colors.neutral200};
  z-index: 1;
`,x=({ariaLabel:u,...E})=>(0,e.jsx)(c,{"aria-label":u,as:"nav",...E})},5330:(R,h,t)=>{"use strict";t.d(h,{p:()=>fr});var e=t(85893),o=t(67294),p=t(34759),s=t(88972);const l={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};var a=t(92058);const d=r=>{const n=(0,o.useRef)();return(0,o.useEffect)(()=>{n.current=r}),n.current};var c=t(26910),x=t(16607);const u=r=>(0,e.jsx)("form",{...r,role:"search"});var E=t(15800);function g(r,n){typeof r=="function"?r(n):r!=null&&(r.current=n)}function i(...r){return n=>r.forEach(f=>g(f,n))}function M(...r){return React.useCallback(i(...r),r)}var v=t(66362);const D=(0,o.createContext)({id:"",required:!1}),b=()=>(0,o.useContext)(D);var j=t(96987);const _={S:6.5,M:10.5},w=(0,o.forwardRef)(({endAction:r,startAction:n,disabled:f=!1,onChange:m,size:O="M",...B},C)=>{const{id:$,error:P,hint:y,name:T,required:L}=b();let A;P?A=`${$}-error`:y&&(A=`${$}-hint`);const I=Boolean(P),W=Z=>{!f&&m&&m(Z)};return(0,e.jsxs)(U,{justifyContent:"space-between",hasError:I,disabled:f,children:[n?(0,e.jsx)(x.x,{paddingLeft:3,paddingRight:2,children:n}):null,(0,e.jsx)(z,{id:$,name:T,ref:C,"aria-describedby":A,"aria-invalid":I,"aria-disabled":f,disabled:f,"data-disabled":f?"":void 0,hasLeftAction:Boolean(n),hasRightAction:Boolean(r),onChange:W,"aria-required":L,$size:O,...B}),r?(0,e.jsx)(x.x,{paddingLeft:2,paddingRight:3,children:r}):null]})}),z=s.default.input`
  border: none;
  border-radius: ${({theme:r})=>r.borderRadius};
  padding-bottom: ${({$size:r})=>`${_[r]/16}rem`};
  padding-left: ${({theme:r,hasLeftAction:n})=>n?0:r.spaces[4]};
  padding-right: ${({theme:r,hasRightAction:n})=>n?0:r.spaces[4]};
  padding-top: ${({$size:r})=>`${_[r]/16}rem`};
  cursor: ${r=>r["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:r})=>r.colors.neutral800};
  font-weight: 400;
  font-size: ${r=>r.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:r})=>r.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,U=(0,s.default)(j.k)`
  border: 1px solid ${({theme:r,hasError:n})=>n?r.colors.danger600:r.colors.neutral200};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  ${(0,v.k3)()}

  ${({theme:r,disabled:n})=>n?(0,s.css)`
          color: ${r.colors.neutral600};
          background: ${r.colors.neutral150};
        `:void 0}
`;var K=t(22304);const F=(0,s.default)(j.k)`
  font-size: 1.6rem;
  padding: 0;
`,k=(0,o.forwardRef)(({label:r,children:n,...f},m)=>(0,e.jsxs)(F,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...f,as:"button",ref:m,children:[(0,e.jsx)(K.T,{as:"span",children:r}),(0,o.cloneElement)(n,{"aria-hidden":!0,focusable:!1})]})),X=(0,o.forwardRef)(({children:r,name:n,error:f,hint:m,id:O,required:B=!1,...C},$)=>{const P=(0,a.M)(O),y=(0,o.useMemo)(()=>({name:n,id:P,error:f,hint:m,required:B}),[f,P,m,n,B]);return(0,e.jsx)(x.x,{ref:$,...C,children:(0,e.jsx)(D.Provider,{value:y,children:r})})}),J="[@strapi/design-system]:",Q=r=>{const n=r;let f=!1;if(typeof n!="function")throw new TypeError(`${J} once requires a function parameter`);return(...m)=>{f||(n(...m),f=!0)}};var G=t(10574);const q=Q(console.warn),rr=(0,o.forwardRef)(({children:r,action:n,required:f,...m},O)=>{const{id:B,required:C}=b(),$=C||f;return f!==void 0&&q('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,e.jsxs)(er,{ref:O,variant:"pi",textColor:"neutral800",htmlFor:B,fontWeight:"bold",as:"label",...m,children:[r,$&&(0,e.jsx)(tr,{textColor:"danger600",children:"*"}),n&&(0,e.jsx)(nr,{marginLeft:1,children:n})]})}),er=(0,s.default)(G.Z)`
  display: flex;
  align-items: center;
`,tr=(0,s.default)(G.Z)`
  line-height: 0;
`,nr=(0,s.default)(j.k)`
  line-height: 0;

  svg path {
    fill: ${({theme:r})=>r.colors.neutral500};
  }
`,or=(0,s.default)(E.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral400};
  }
`,V=(0,s.default)(p.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:r})=>r.colors.neutral800};
  }
`,sr=s.default.div`
  border-radius: ${({theme:r})=>r.borderRadius};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};

  &:focus-within {
    ${V} {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }

  ${U} {
    border: 1px solid transparent;
  }

  ${(0,v.k3)(U)}
`,ar=(0,o.forwardRef)(({name:r,size:n="M",children:f,value:m="",onClear:O,clearLabel:B,...C},$)=>{const P=(0,o.useRef)(null),y=m.length>0,T=A=>{O(A),P.current.focus()},L=i($,P);return(0,e.jsx)(sr,{children:(0,e.jsxs)(X,{name:r,children:[(0,e.jsx)(K.T,{children:(0,e.jsx)(rr,{children:f})}),(0,e.jsx)(w,{ref:L,value:m,startAction:(0,e.jsx)(V,{"aria-hidden":!0}),size:n,endAction:y?(0,e.jsx)(k,{label:B,onClick:T,children:(0,e.jsx)(or,{})}):void 0,...C})]})})});var lr=t(79838),dr=t(20501);const ir="tertiary",N="secondary",cr=["S","M","L"],ur=[ir,N],pr=o.forwardRef(({label:r,background:n,borderWidth:f,noBorder:m=!1,children:O,icon:B,disabled:C=!1,onClick:$,size:P=cr[0],"aria-label":y,variant:T=ur[0],...L},A)=>{const I=Z=>{!C&&$&&$(Z)},W=(0,e.jsxs)(H,{"aria-disabled":C,background:C?"neutral150":n,borderWidth:m?0:f,justifyContent:"center",...L,ref:A,size:P,onClick:I,variant:T,children:[(0,e.jsx)(K.T,{as:"span",children:r??y}),o.cloneElement(B||O,{"aria-hidden":!0,focusable:!1})]});return r?(0,e.jsx)(lr.u,{label:r,children:W}):W}),H=(0,s.default)(dr.Y)`
  background-color: ${({theme:r,variant:n})=>{if(n===N)return r.colors.primary100}};
  border-color: ${({theme:r,variant:n})=>n===N?r.colors.primary200:r.colors.neutral200};
  height: ${({theme:r,size:n})=>r.sizes.button[n]};
  width: ${({theme:r,size:n})=>r.sizes.button[n]};

  svg {
    g,
    path {
      fill: ${({theme:r,variant:n})=>n===N?r.colors.primary500:r.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:r,variant:n})=>n===N?r.colors.primary600:r.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral600};
      }
    }
  }
`,vr=(0,s.default)(j.k)`
  & span:first-child button {
    border-left: 1px solid ${({theme:r})=>r.colors.neutral200};
    border-radius: ${({theme:r})=>`${r.borderRadius} 0 0 ${r.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:r})=>`0 ${r.borderRadius} ${r.borderRadius} 0`};
  }

  & ${H} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:r})=>r.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:r})=>r.colors.neutral100};

      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:r})=>r.colors.neutral150};
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:r})=>r.colors.neutral600};
        }
      }
    }
  }
`,Y=(0,s.default)(c.i)`
  width: ${24/16}rem;
  background-color: ${({theme:r})=>r.colors.neutral200};
`,fr=({as:r="h2",label:n,searchLabel:f="",searchable:m=!1,onChange:O=()=>{},value:B="",onClear:C=()=>{},onSubmit:$=()=>{},id:P})=>{const[y,T]=(0,o.useState)(!1),L=d(y),A=(0,a.M)(P),I=(0,o.useRef)(void 0),W=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{y&&I.current&&I.current.focus(),L&&!y&&W.current&&W.current.focus()},[y,L]);const Z=()=>{T(S=>!S)},hr=S=>{C(S),I.current.focus()},xr=S=>{S.relatedTarget?.id!==A&&T(!1)},gr=S=>{S.key===l.ESCAPE&&T(!1)};return y?(0,e.jsxs)(x.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(u,{children:(0,e.jsx)(ar,{name:"searchbar",value:B,onChange:O,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:gr,ref:I,onBlur:xr,onClear:hr,onSubmit:$,clearLabel:"Clear",size:"S",children:f})}),(0,e.jsx)(x.x,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(Y,{})})]}):(0,e.jsxs)(x.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(j.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(G.Z,{variant:"beta",as:r,children:n}),m&&(0,e.jsx)(pr,{ref:W,onClick:Z,label:f,icon:(0,e.jsx)(p.Z,{})})]}),(0,e.jsx)(x.x,{paddingTop:4,children:(0,e.jsx)(Y,{})})]})}},36636:(R,h,t)=>{"use strict";t.d(h,{E:()=>g});var e=t(85893),o=t(67294),p=t(22534),s=t(88972),l=t(16607),a=t(10574),d=t(96987),c=t(53342);const x=(0,s.default)(l.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:i})=>i.colors.neutral800};
  svg > * {
    fill: ${({theme:i})=>i.colors.neutral600};
  }

  &.active {
    ${({theme:i})=>`
      background-color: ${i.colors.primary100};
      border-right: 2px solid ${i.colors.primary600};
      svg > * {
        fill: ${i.colors.primary700};
      }
      ${a.Z} {
        color: ${i.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,u=(0,s.default)(p.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:i,$active:M})=>M?i.colors.primary600:i.colors.neutral600};
  }
`,E=s.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,g=o.forwardRef(({children:i,icon:M=null,withBullet:v=!1,as:D=c.f,isSubSectionChild:b=!1,...j},_)=>(0,e.jsxs)(x,{as:D,icon:M,background:"neutral100",paddingLeft:b?9:7,paddingBottom:2,paddingTop:2,ref:_,...j,children:[(0,e.jsxs)(d.k,{children:[M?(0,e.jsx)(E,{children:M}):(0,e.jsx)(u,{}),(0,e.jsx)(l.x,{paddingLeft:2,children:(0,e.jsx)(a.Z,{as:"span",children:i})})]}),v&&(0,e.jsx)(l.x,{as:d.k,paddingRight:4,children:(0,e.jsx)(u,{$active:!0})})]}))},21660:(R,h,t)=>{"use strict";t.d(h,{D:()=>M});var e=t(85893),o=t(67294),p=t(88972),s=t(21514),l=t(96987),a=t(16607),d=t(10574);const c=(0,p.default)(l.k)`
  border: none;
  padding: 0;
  background: transparent;
`,x=p.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:v})=>v?"0deg":"180deg"});
`,u=({collapsable:v=!1,label:D,onClick:b=()=>{},ariaExpanded:j,ariaControls:_})=>v?(0,e.jsxs)(c,{as:"button",onClick:b,"aria-expanded":j,"aria-controls":_,textAlign:"left",children:[(0,e.jsx)(a.x,{paddingRight:1,children:(0,e.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:D})}),v&&(0,e.jsx)(x,{rotated:j,children:(0,e.jsx)(s.Z,{"aria-hidden":!0})})]}):(0,e.jsx)(c,{children:(0,e.jsx)(a.x,{paddingRight:1,children:(0,e.jsx)(d.Z,{variant:"sigma",textColor:"neutral600",children:D})})});var E=t(92058),g=t(18787);const i=(0,p.default)(a.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:v})=>v.colors.neutral500};
    }
  }
`,M=({collapsable:v=!1,label:D,badgeLabel:b,children:j,id:_})=>{const[w,z]=(0,o.useState)(!0),U=(0,E.M)(_),K=()=>{z(F=>!F)};return(0,e.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(i,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(a.x,{position:"relative",paddingRight:b?6:0,children:[(0,e.jsx)(u,{onClick:K,ariaExpanded:w,ariaControls:U,collapsable:v,label:D}),b&&(0,e.jsx)(g.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:b})]})}),(!v||w)&&(0,e.jsx)("ol",{id:U,children:o.Children.map(j,(F,k)=>(0,e.jsx)("li",{children:F},k))})]})}},61499:(R,h,t)=>{"use strict";t.d(h,{Z:()=>l});var e=t(85893),o=t(67294),p=t(16607),s=t(96987);const l=({children:a,spacing:d=2,horizontal:c=!1,...x})=>(0,e.jsx)(p.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(s.k,{as:"ol",gap:d,direction:c?"row":"column",alignItems:c?"center":"stretch",...x,children:o.Children.map(a,(u,E)=>(0,e.jsx)("li",{children:u},E))})})}}]);
