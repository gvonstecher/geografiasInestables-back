"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[6750],{4322:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(69186),r=e(90291),i=g=>g&&g.__esModule?g:{default:g};function d(g){if(g&&g.__esModule)return g;const T=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const v in g)if(v!=="default"){const u=Object.getOwnPropertyDescriptor(g,v);Object.defineProperty(T,v,u.get?u:{enumerable:!0,get:()=>g[v]})}}return T.default=g,Object.freeze(T)}const a=d(o),m=i(l).default(r.Flex)`
  > svg {
    height: ${({theme:g})=>g.spaces[3]};
    width: ${({theme:g})=>g.spaces[3]};

    > g,
    path {
      fill: ${({theme:g})=>g.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${s.buttonFocusStyle}
`,p=a.forwardRef(({disabled:g,children:T,background:v="neutral0",...u},f)=>t.jsx(m,{ref:f,"aria-disabled":g,as:"button",type:"button",disabled:g,padding:2,hasRadius:!0,background:v,borderColor:"neutral200",cursor:"pointer",...u,children:T}));p.displayName="BaseButton",n.BaseButton=p,n.BaseButtonWrapper=m},47253:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(40057),r=e(26673),i=e(64428),d=e(18627),a=e(60665),c=u=>u&&u.__esModule?u:{default:u};function m(u){if(u&&u.__esModule)return u;const f=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(u){for(const y in u)if(y!=="default"){const x=Object.getOwnPropertyDescriptor(u,y);Object.defineProperty(f,y,x.get?x:{enumerable:!0,get:()=>u[y]})}}return f.default=u,Object.freeze(f)}const p=m(o),T=c(l).default.input`
  height: ${i.getCheckboxSize};
  min-width: ${i.getCheckboxSize};
  margin: 0;
  border-radius: ${({theme:u})=>u.borderRadius};
  border: 1px solid ${({theme:u})=>u.colors.neutral300};
  -webkit-appearance: none;
  background-color: ${({theme:u})=>u.colors.neutral0};
  cursor: pointer;

  &:checked {
    background-color: ${({theme:u})=>u.colors.primary600};
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      background: url(${r}) no-repeat no-repeat center center;
      width: 10px;
      height: 10px;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled:after {
      background: url(${s}) no-repeat no-repeat center center;
    }
  }

  &:disabled {
    background-color: ${({theme:u})=>u.colors.neutral200};
    border: 1px solid ${({theme:u})=>u.colors.neutral300};
  }

  &:indeterminate {
    background-color: ${({theme:u})=>u.colors.primary600};
    border: 1px solid ${({theme:u})=>u.colors.primary600};

    &:after {
      content: '';
      display: block;
      position: relative;
      color: white;
      height: 2px;
      width: 10px;
      background-color: ${({theme:u})=>u.colors.neutral0};
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }

    &:disabled {
      background-color: ${({theme:u})=>u.colors.neutral200};
      border: 1px solid ${({theme:u})=>u.colors.neutral300};
      &:after {
        background-color: ${({theme:u})=>u.colors.neutral500};
      }
    }
  }
`,v=p.forwardRef(({indeterminate:u=!1,size:f="M",name:y,value:x=!1,onValueChange:j,...Z},M)=>{const b=p.useRef(null),S=d.useComposedRefs(b,M);p.useEffect(()=>{b.current&&u?b.current.indeterminate=u:b.current.indeterminate=!1},[u]);const C=()=>{j&&j(!x)};return t.jsx(a.Box,{children:t.jsx(T,{size:f,checked:x,onChange:C,type:"checkbox",ref:S,name:y,...Z})})});v.displayName="BaseCheckbox",n.BaseCheckbox=v},40057:h=>{const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSIjOEU4RUE5IgogIC8+Cjwvc3ZnPg==";h.exports=n},26673:h=>{const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEwIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGgKICAgIGQ9Ik04LjU1MzIzIDAuMzk2OTczQzguNjMxMzUgMC4zMTYzNTUgOC43NjA1MSAwLjMxNTgxMSA4LjgzOTMxIDAuMzk1NzY4TDkuODYyNTYgMS40MzQwN0M5LjkzODkzIDEuNTExNTcgOS45MzkzNSAxLjYzNTkgOS44NjM0OSAxLjcxMzlMNC4wNjQwMSA3LjY3NzI0QzMuOTg1OSA3Ljc1NzU1IDMuODU3MDcgNy43NTgwNSAzLjc3ODM0IDcuNjc4MzRMMC4xMzg2NiAzLjk5MzMzQzAuMDYxNzc5OCAzLjkxNTQ5IDAuMDYxNzEwMiAzLjc5MDMyIDAuMTM4NTA0IDMuNzEyNEwxLjE2MjEzIDIuNjczNzJDMS4yNDAzOCAyLjU5NDMyIDEuMzY4NDMgMi41OTQyMiAxLjQ0NjggMi42NzM0OEwzLjkyMTc0IDUuMTc2NDdMOC41NTMyMyAwLjM5Njk3M1oiCiAgICBmaWxsPSJ3aGl0ZSIKICAvPgo8L3N2Zz4=";h.exports=n},77811:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(47253);n.BaseCheckbox=t.BaseCheckbox},64428:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=({size:t})=>t==="M"?"18px":"20px";n.getCheckboxSize=e},93289:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(60665);n.Box=t.Box},70959:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(26112),s=e(88972),r=e(30240),i=e(60892),d=e(4322),a=e(60665),c=e(4583),m=e(90291),p=x=>x&&x.__esModule?x:{default:x},g=p(o),T=p(s),v=s.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,u=T.default(l.Loader)`
  animation: ${v} 2s infinite linear;
  will-change: transform;
`,f=T.default(d.BaseButton)`
  height: ${({theme:x,size:j})=>x.sizes.button[j]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${i.getDisabledStyle}

    &:active {
      ${i.getDisabledStyle}
    }
  }

  &:hover {
    ${i.getHoverStyle}
  }

  &:active {
    ${i.getActiveStyle}
  }

  ${i.getVariantStyle}
`,y=g.default.forwardRef(({variant:x=r.DEFAULT,startIcon:j,endIcon:Z,disabled:M=!1,children:b,onClick:S,size:C=r.BUTTON_SIZES[0],loading:O=!1,fullWidth:w=!1,...N},P)=>{const L=M||O,U=I=>{!L&&S&&S(I)};return t.jsxs(f,{ref:P,"aria-disabled":L,disabled:L,size:C,variant:x,onClick:U,fullWidth:w,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:w,justifyContent:w?"center":void 0,paddingLeft:4,paddingRight:4,width:w?"100%":void 0,...N,children:[(j||O)&&t.jsx(a.Box,{"aria-hidden":!0,children:O?t.jsx(u,{}):j}),t.jsx(c.Typography,{variant:C==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:b}),Z&&t.jsx(m.Flex,{"aria-hidden":!0,children:Z})]})});y.displayName="Button",n.Button=y,n.ButtonWrapper=f},30240:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="success-light",t="danger-light",o="default",l="tertiary",s="secondary",r="danger",i="success",d="ghost",a=[e,t],c=[o,l,s,r,i,d,...a],m=["S","M","L"];n.BUTTON_SIZES=m,n.DANGER=r,n.DANGER_LIGHT=t,n.DEFAULT=o,n.GHOST=d,n.LIGHT_VARIANTS=a,n.SECONDARY=s,n.SUCCESS=i,n.SUCCESS_LIGHT=e,n.TERTIARY=l,n.VARIANTS=c},35163:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(70959);n.Button=t.Button,n.ButtonWrapper=t.ButtonWrapper},60892:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(30240),o=e(4583),l=a=>a===t.SUCCESS_LIGHT||a===t.DANGER_LIGHT?`${a.substring(0,a.lastIndexOf("-"))}`:a===t.TERTIARY?"neutral":a===t.DEFAULT||a===t.SECONDARY||t.VARIANTS.every(c=>c!==a)?"primary":`${a}`,s=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${o.Typography} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,r=({theme:a,variant:c})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(c)?`
      background-color: ${a.colors.neutral0};
    `:c===t.TERTIARY?`
      background-color: ${a.colors.neutral100};
    `:c===t.GHOST?`
      background-color: ${a.colors.neutral100};
    `:c===t.DEFAULT?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${l(c)}500`]};
    background: ${a.colors[`${l(c)}500`]};
  `,i=({theme:a,variant:c})=>[...t.LIGHT_VARIANTS,t.SECONDARY].includes(c)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${l(c)}600`]};
      ${o.Typography} {
        color: ${a.colors[`${l(c)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${l(c)}600`]};
        }
      }
    `:c===t.TERTIARY?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${l(c)}600`]};
    background: ${a.colors[`${l(c)}600`]};
  `,d=({theme:a,variant:c})=>{switch(c){case t.DANGER_LIGHT:case t.SUCCESS_LIGHT:case t.SECONDARY:return`
          border: 1px solid ${a.colors[`${l(c)}200`]};
          background: ${a.colors[`${l(c)}100`]};
          ${o.Typography} {
            color: ${a.colors[`${l(c)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${l(c)}700`]};
            }
          }
        `;case t.TERTIARY:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${o.Typography} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case t.GHOST:return`
        border: 1px solid transparent;
        background: transparent;

        ${o.Typography} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case t.SUCCESS:case t.DANGER:return`
          border: 1px solid ${a.colors[`${l(c)}600`]};
          background: ${a.colors[`${l(c)}600`]};
          ${o.Typography} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}};n.getActiveStyle=i,n.getDisabledStyle=s,n.getHoverStyle=r,n.getVariantColorName=l,n.getVariantStyle=d},27906:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(60665),i=(a=>a&&a.__esModule?a:{default:a})(o).default(l.Box)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:a})=>a?"margin: 0;":""}
`,d=({unsetMargin:a=!0,...c})=>t.jsx(i,{...c,background:"neutral150",as:"hr",unsetMargin:a});n.Divider=d},58674:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(44158),s=e(52423),r=e(60665),i=o.forwardRef(({children:d,name:a,error:c,hint:m,id:p,required:g=!1,...T},v)=>{const u=s.useId(p),f=o.useMemo(()=>({name:a,id:u,error:c,hint:m,required:g}),[c,u,m,a,g]);return t.jsx(r.Box,{ref:v,...T,children:t.jsx(l.FieldContext.Provider,{value:f,children:d})})});n.Field=i},44158:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),o=t.createContext({id:"",required:!1}),l=()=>t.useContext(o);n.FieldContext=o,n.useField=l},73582:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(44158),l=e(4583),s=()=>{const{id:r,error:i}=o.useField();return!i||typeof i!="string"?null:t.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-error`,textColor:"danger600","data-strapi-field-error":!0,children:i})};n.FieldError=s},92298:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(44158),l=e(4583),s=()=>{const{id:r,hint:i,error:d}=o.useField();return!i||d?null:t.jsx(l.Typography,{variant:"pi",as:"p",id:`${r}-hint`,textColor:"neutral600",children:i})};n.FieldHint=s},30969:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(44158),r=e(69186),i=e(60665),d=e(90291),c=(v=>v&&v.__esModule?v:{default:v})(l),m={S:6.5,M:10.5},p=o.forwardRef(({endAction:v,startAction:u,disabled:f=!1,onChange:y,size:x="M",...j},Z)=>{const{id:M,error:b,hint:S,name:C,required:O}=s.useField();let w;b?w=`${M}-error`:S&&(w=`${M}-hint`);const N=Boolean(b),P=L=>{!f&&y&&y(L)};return t.jsxs(T,{justifyContent:"space-between",hasError:N,disabled:f,children:[u?t.jsx(i.Box,{paddingLeft:3,paddingRight:2,children:u}):null,t.jsx(g,{id:M,name:C,ref:Z,"aria-describedby":w,"aria-invalid":N,"aria-disabled":f,disabled:f,"data-disabled":f?"":void 0,hasLeftAction:Boolean(u),hasRightAction:Boolean(v),onChange:P,"aria-required":O,$size:x,...j}),v?t.jsx(i.Box,{paddingLeft:2,paddingRight:3,children:v}):null]})}),g=c.default.input`
  border: none;
  border-radius: ${({theme:v})=>v.borderRadius};
  padding-bottom: ${({$size:v})=>`${m[v]/16}rem`};
  padding-left: ${({theme:v,hasLeftAction:u})=>u?0:v.spaces[4]};
  padding-right: ${({theme:v,hasRightAction:u})=>u?0:v.spaces[4]};
  padding-top: ${({$size:v})=>`${m[v]/16}rem`};
  cursor: ${v=>v["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:v})=>v.colors.neutral800};
  font-weight: 400;
  font-size: ${v=>v.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:v})=>v.colors.neutral500};
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
`,T=c.default(d.Flex)`
  border: 1px solid ${({theme:v,hasError:u})=>u?v.colors.danger600:v.colors.neutral200};
  border-radius: ${({theme:v})=>v.borderRadius};
  background: ${({theme:v})=>v.colors.neutral0};
  ${r.inputFocusStyle()}

  ${({theme:v,disabled:u})=>u?l.css`
          color: ${v.colors.neutral600};
          background: ${v.colors.neutral150};
        `:void 0}
`;n.FieldInput=p,n.InputWrapper=T},64919:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(44158),r=e(52075),i=e(4583),d=e(90291),c=(u=>u&&u.__esModule?u:{default:u})(l),m=r.once(console.warn),p=o.forwardRef(({children:u,action:f,required:y,...x},j)=>{const{id:Z,required:M}=s.useField(),b=M||y;return y!==void 0&&m('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),t.jsxs(g,{ref:j,variant:"pi",textColor:"neutral800",htmlFor:Z,fontWeight:"bold",as:"label",...x,children:[u,b&&t.jsx(T,{textColor:"danger600",children:"*"}),f&&t.jsx(v,{marginLeft:1,children:f})]})}),g=c.default(i.Typography)`
  display: flex;
  align-items: center;
`,T=c.default(i.Typography)`
  line-height: 0;
`,v=c.default(d.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:u})=>u.colors.neutral500};
  }
`;n.FieldLabel=p},35063:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(91554),s=e(60665),d=(c=>c&&c.__esModule?c:{default:c})(o).default(s.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:c})=>c}, 1fr);
  ${({theme:c,gap:m})=>l("gap",m,c)}
`,a=c=>{const{gap:m="0",gridCols:p=12,...g}=c;return t.jsx(d,{gap:m,gridCols:p,...g})};n.Grid=a},91259:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),o=e(60665),r=(i=>i&&i.__esModule?i:{default:i})(t).default(o.Box)`
  grid-column: span ${({col:i})=>i};
  max-width: 100%;

  ${({theme:i})=>i.mediaQueries.tablet} {
    grid-column: span ${({s:i})=>i};
  }

  ${({theme:i})=>i.mediaQueries.mobile} {
    grid-column: span ${({xs:i})=>i};
  }
`;n.GridItem=r},8066:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(90291),l=({startActions:s,endActions:r})=>!s&&!r?null:t.jsxs(o.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[t.jsx(o.Flex,{gap:2,wrap:"wrap",children:s}),t.jsx(o.Flex,{gap:2,shrink:0,wrap:"wrap",children:r})]});n.ActionLayout=l},69786:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(60665),l=({children:s})=>t.jsx(o.Box,{paddingLeft:10,paddingRight:10,children:s});n.ContentLayout=l},12283:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),s=(r=>r&&r.__esModule?r:{default:r})(t).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:r})=>r.spaces[4]};
`;n.GridLayout=s},11756:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(90082),r=e(30860),i=e(60665),d=e(90291),a=e(4583),c=u=>u&&u.__esModule?u:{default:u},m=c(o),p=c(l),g=u=>{const f=o.useRef(null),[y,x]=o.useState(null),[j,Z]=s.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return r.useResizeObserver(j,()=>{j.current&&x(j.current.getBoundingClientRect())}),o.useEffect(()=>{f.current&&x(f.current.getBoundingClientRect())},[f]),t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{height:y?.height},ref:j,children:Z&&t.jsx(v,{ref:f,...u})}),!Z&&t.jsx(v,{...u,sticky:!0,width:y?.width})]})};g.displayName="HeaderLayout";const T=p.default(i.Box)`
  width: ${({width:u})=>u?`${u/16}rem`:void 0};
  z-index: ${({theme:u})=>u.zIndices[1]};
`,v=m.default.forwardRef(({navigationAction:u,primaryAction:f,secondaryAction:y,subtitle:x,title:j,sticky:Z,width:M,...b},S)=>{const C=typeof x=="string";return Z?t.jsx(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:t.jsxs(d.Flex,{justifyContent:"space-between",children:[t.jsxs(d.Flex,{children:[u&&t.jsx(i.Box,{paddingRight:3,children:u}),t.jsxs(i.Box,{children:[t.jsx(a.Typography,{variant:"beta",as:"h1",...b,children:j}),C?t.jsx(a.Typography,{variant:"pi",textColor:"neutral600",children:x}):x]}),y?t.jsx(i.Box,{paddingLeft:4,children:y}):null]}),t.jsx(d.Flex,{children:f?t.jsx(i.Box,{paddingLeft:2,children:f}):void 0})]})}):t.jsxs(i.Box,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0,children:[u?t.jsx(i.Box,{paddingBottom:2,children:u}):null,t.jsxs(d.Flex,{justifyContent:"space-between",children:[t.jsxs(d.Flex,{minWidth:0,children:[t.jsx(a.Typography,{as:"h1",variant:"alpha",...b,children:j}),y?t.jsx(i.Box,{paddingLeft:4,children:y}):null]}),f]}),C?t.jsx(a.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:x}):x]})});n.BaseHeaderLayout=v,n.HeaderLayout=g},68:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(60665),r=(c=>c&&c.__esModule?c:{default:c})(o),i=r.default(l.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,d=r.default(l.Box)`
  overflow-x: hidden;
`,a=({sideNav:c,children:m})=>t.jsxs(i,{hasSideNav:Boolean(c),children:[c,t.jsx(d,{paddingBottom:10,children:m})]});n.Layout=a},93070:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(35063),l=e(91259),s=e(60665),r=({startCol:i,endCol:d})=>t.jsxs(o.Grid,{gap:4,children:[t.jsx(l.GridItem,{col:9,s:12,children:t.jsx(s.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:i})}),t.jsx(l.GridItem,{col:3,s:12,children:t.jsx(s.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:d})})]});n.TwoColsLayout=r},58136:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(68),o=e(8066),l=e(69786),s=e(11756),r=e(93070),i=e(12283);n.Layout=t.Layout,n.ActionLayout=o.ActionLayout,n.ContentLayout=l.ContentLayout,n.BaseHeaderLayout=s.BaseHeaderLayout,n.HeaderLayout=s.HeaderLayout,n.TwoColsLayout=r.TwoColsLayout,n.GridLayout=i.GridLayout},22647:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(26112),s=e(73727),r=e(88972),i=e(69186),d=e(4583),a=e(60665),c=f=>f&&f.__esModule?f:{default:f};function m(f){if(f&&f.__esModule)return f;const y=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(f){for(const x in f)if(x!=="default"){const j=Object.getOwnPropertyDescriptor(f,x);Object.defineProperty(y,x,j.get?j:{enumerable:!0,get:()=>f[x]})}}return y.default=f,Object.freeze(y)}const p=m(o),g=c(r),T=g.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:f})=>f?"none":void 0};
  color: ${({disabled:f,theme:y})=>f?y.colors.neutral600:y.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${d.Typography} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:f})=>f.colors.primary500};
  }

  &:active {
    color: ${({theme:f})=>f.colors.primary700};
  }

  ${i.buttonFocusStyle};
`,v=g.default(a.Box)`
  display: flex;
`,u=p.forwardRef(({children:f,href:y,to:x,disabled:j=!1,startIcon:Z,endIcon:M,...b},S)=>{const C=y?"_blank":void 0,O=y?"noreferrer noopener":void 0;return t.jsxs(T,{as:x&&!j?s.NavLink:"a",target:C,rel:O,to:j?void 0:x,href:j?"#":y,disabled:j,ref:S,...b,children:[Z&&t.jsx(v,{as:"span","aria-hidden":!0,paddingRight:2,children:Z}),t.jsx(d.Typography,{children:f}),M&&!y&&t.jsx(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:M}),y&&t.jsx(v,{as:"span","aria-hidden":!0,paddingLeft:2,children:t.jsx(l.ExternalLink,{})})]})});n.Link=u},82922:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(22647);n.Link=t.Link},59110:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(51226),s=e(15809),r=e(13270),i=e(60665),d=c=>t.jsx(a,{...c,as:"th"}),a=({coords:c={col:0,row:0},as:m="td",...p})=>{const g=o.useRef(null),{rowIndex:T,colIndex:v,setTableValues:u}=l.useTable(),[f,y]=o.useState(!1),x=M=>{const b=s.getFocusableNodes(g.current,!0);if(b.length===0||b.length===1&&s.getFocusableNodesWithKeyboardNav(b).length===0)return;if(b.length>1&&!b.find(C=>C.tagName!=="BUTTON")){M.preventDefault();const C=b.findIndex(O=>O===document.activeElement);if(M.key===r.KeyboardKeys.RIGHT){const O=b[C+1];O&&(M.stopPropagation(),O.focus())}else if(M.key===r.KeyboardKeys.LEFT){const O=b[C-1];O&&(M.stopPropagation(),O.focus())}return}const S=M.key===r.KeyboardKeys.ENTER;if(S&&!f)y(!0);else if((M.key===r.KeyboardKeys.ESCAPE||S)&&f){if(S&&document.activeElement?.tagName==="A")return;y(!1),g.current.focus()}else f&&M.stopPropagation()},j=T===c.row-1&&v===c.col-1;o.useLayoutEffect(()=>{const M=s.getFocusableNodes(g.current,!0);M.length===0||M.length===1&&s.getFocusableNodesWithKeyboardNav(M).length!==0||M.length>1&&Boolean(M.find(b=>b.tagName!=="BUTTON"))?(g.current.setAttribute("tabIndex",!f&&j?"0":"-1"),M.forEach((b,S)=>{b.setAttribute("tabIndex",f?"0":"-1"),f&&S===0&&b.focus()})):M.forEach(b=>{b.setAttribute("tabIndex",j?"0":"-1")})},[f,j]);const Z=o.useCallback(()=>{const M=s.getFocusableNodes(g.current,!0);M.length>=1&&(s.getFocusableNodesWithKeyboardNav(M).length!==0||!M.find(b=>b.tagName!=="BUTTON"))&&y(!0),u({rowIndex:c.row-1,colIndex:c.col-1})},[c,u]);return o.useLayoutEffect(()=>{const M=g.current;return s.getFocusableNodes(M,!0).forEach(S=>{S.addEventListener("focus",Z)}),()=>{s.getFocusableNodes(M,!0).forEach(C=>{C.removeEventListener("focus",Z)})}},[Z]),t.jsx(i.Box,{role:"gridcell",as:m,ref:g,onKeyDown:x,...p})};n.RawTd=a,n.RawTh=d},16532:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(97008),s=e(51226),r=e(13270),i=({colCount:d,rowCount:a,jumpStep:c=3,initialCol:m=0,initialRow:p=0,...g})=>{const T=o.useRef(null),v=o.useRef(!1),[u,f]=o.useState(p),[y,x]=o.useState(m),j=o.useCallback(({colIndex:b,rowIndex:S})=>{x(b),f(S)},[]);o.useEffect(()=>{v.current&&l.focusFocusable(T.current),v.current||(v.current=!0)},[y,u]);const Z=b=>{switch(b.key){case r.KeyboardKeys.RIGHT:{b.preventDefault(),x(S=>S<d-1?S+1:S);break}case r.KeyboardKeys.LEFT:{b.preventDefault(),x(S=>S>0?S-1:S);break}case r.KeyboardKeys.UP:{b.preventDefault(),f(S=>S>0?S-1:S);break}case r.KeyboardKeys.DOWN:{b.preventDefault(),f(S=>S<a-1?S+1:S);break}case r.KeyboardKeys.HOME:{b.preventDefault(),b.ctrlKey&&f(0),x(0);break}case r.KeyboardKeys.END:{b.preventDefault(),b.ctrlKey&&f(a-1),x(d-1);break}case r.KeyboardKeys.PAGE_DOWN:{b.preventDefault(),f(S=>S+c<a?S+c:a-1);break}case r.KeyboardKeys.PAGE_UP:{b.preventDefault(),f(S=>S-c>0?S-c:0);break}}},M=o.useMemo(()=>({rowIndex:u,colIndex:y,setTableValues:j}),[y,u,j]);return t.jsx(s.RawTableContext.Provider,{value:M,children:t.jsx("table",{role:"grid",ref:T,"aria-rowcount":a,"aria-colcount":d,onKeyDown:Z,...g})})};n.RawTable=i},51226:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),o=t.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),l=()=>t.useContext(o);n.RawTableContext=o,n.useTable=l},54630:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=({children:s,...r})=>{const i=o.Children.toArray(s).map((d,a)=>o.isValidElement(d)?o.cloneElement(d,{"aria-rowindex":a+2}):d);return t.jsx("tbody",{...r,children:i})};n.RawTbody=l},62798:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=({children:s,...r})=>{const i=o.Children.toArray(s).map(d=>o.isValidElement(d)?o.cloneElement(d,{"aria-rowindex":1}):d);return t.jsx("thead",{...r,children:i})};n.RawThead=l},10964:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(60665),s=({children:r,...i})=>{const d=o.Children.toArray(r).map((a,c)=>o.isValidElement(a)?o.cloneElement(a,{"aria-colindex":c+1,coords:{col:c+1,row:i["aria-rowindex"]}}):a);return t.jsx(l.Box,{as:"tr",...i,children:d})};n.RawTr=s},97008:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=t=>{const o=t.querySelector('[tabindex="0"]');o&&o.focus()};n.focusFocusable=e},60211:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(59110),s=e(90291),i=(p=>p&&p.__esModule?p:{default:p})(o),d=i.default(l.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:p})=>p.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,a=i.default.span`
  svg {
    height: ${4/16}rem;
  }
`,c=({children:p,action:g,...T})=>t.jsx(d,{as:l.RawTh,...T,children:t.jsxs(s.Flex,{children:[p,t.jsx(a,{children:g})]})}),m=({children:p,...g})=>t.jsx(d,{...g,children:p});n.Td=m,n.Th=c},20950:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(60665),s=e(27906),r=e(90291),i=e(4583),a=(g=>g&&g.__esModule?g:{default:g})(o),c=a.default(l.Box)`
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
    fill: ${({theme:g})=>g.colors.primary600};
  }
`,m=a.default(l.Box)`
  border-radius: 0 0 ${({theme:g})=>g.borderRadius} ${({theme:g})=>g.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,p=({children:g,icon:T,...v})=>t.jsxs("div",{children:[t.jsx(s.Divider,{}),t.jsx(m,{as:"button",background:"primary100",padding:5,...v,children:t.jsxs(r.Flex,{children:[t.jsx(c,{"aria-hidden":!0,background:"primary200",children:T}),t.jsx(l.Box,{paddingLeft:3,children:t.jsx(i.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:g})})]})})]});n.TFooter=p},47260:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(88972),s=e(16532),r=e(60665),d=(T=>T&&T.__esModule?T:{default:T})(l),a=d.default(r.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:T})=>T.colors.neutral150};
`,c=d.default(s.RawTable)`
  width: 100%;
  white-space: nowrap;
`,m=d.default(r.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:T})=>T==="both"||T==="left"?"''":void 0};
    box-shadow: ${({theme:T})=>T.shadows.tableShadow};
    width: ${({theme:T})=>T.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:T})=>T==="both"||T==="right"?"''":void 0};
    box-shadow: ${({theme:T})=>T.shadows.tableShadow};
    width: ${({theme:T})=>T.spaces[2]};
    right: 0;
    top: 0;
  }
`,p=d.default(r.Box)`
  overflow-x: auto;
`,g=({footer:T,...v})=>{const u=o.useRef(null),[f,y]=o.useState(),x=j=>{const Z=j.target.scrollWidth-j.target.clientWidth;if(j.target.scrollLeft===0){y("right");return}if(j.target.scrollLeft===Z){y("left");return}j.target.scrollLeft>0&&y("both")};return o.useEffect(()=>{u.current.scrollWidth>u.current.clientWidth&&y("right")},[]),t.jsxs(a,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[t.jsx(m,{overflowing:f,position:"relative",children:t.jsx(p,{ref:u,onScroll:x,paddingLeft:6,paddingRight:6,children:t.jsx(c,{...v})})}),T]})};n.Table=g},30076:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(54630),i=(a=>a&&a.__esModule?a:{default:a})(o).default(l.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,d=({children:a,...c})=>t.jsx(i,{...c,children:a});n.Tbody=d},7815:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(62798),i=(a=>a&&a.__esModule?a:{default:a})(o).default(l.RawThead)`
  border-bottom: 1px solid ${({theme:a})=>a.colors.neutral150};
`,d=({children:a,...c})=>t.jsx(i,{...c,children:a});n.Thead=d},16444:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(88972),l=e(10964),i=(a=>a&&a.__esModule?a:{default:a})(o).default(l.RawTr)`
  border-bottom: 1px solid ${({theme:a})=>a.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:a})=>a.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:a})=>a.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,d=a=>t.jsx(i,{...a});n.Tr=d},14772:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(47260),o=e(30076),l=e(7815),s=e(16444),r=e(60211),i=e(20950);n.Table=t.Table,n.Tbody=o.Tbody,n.Thead=l.Thead,n.Tr=s.Tr,n.Td=r.Td,n.Th=r.Th,n.TFooter=i.TFooter},58405:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(81405),s=e(52423);function r(a){if(a&&a.__esModule)return a;const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const m in a)if(m!=="default"){const p=Object.getOwnPropertyDescriptor(a,m);Object.defineProperty(c,m,p.get?p:{enumerable:!0,get:()=>a[m]})}}return c.default=a,Object.freeze(c)}const i=r(o),d=i.forwardRef(({id:a,initialSelectedTabIndex:c=0,label:m,onTabChange:p,variant:g,...T},v)=>{const u=s.useId(a),[f,y]=i.useState(c);i.useImperativeHandle(v,()=>({_handlers:{setSelectedTabIndex:y}}));const x=i.useMemo(()=>({id:u,selectedTabIndex:f,selectTabIndex:y,label:m,variant:g,onTabChange:p}),[m,p,f,u,g]);return t.jsx(l.TabsContext.Provider,{value:x,children:t.jsx("div",{...T})})});d.displayName="TabGroup",n.TabGroup=d},41556:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(81405),s=({children:i,...d})=>{const{id:a,selectedTabIndex:c}=l.useTabs(),m=o.Children.toArray(i).map((p,g)=>o.cloneElement(p,{id:`${a}-${g}`})).filter((p,g)=>g===c);return t.jsx("div",{...d,children:m})},r=({id:i,...d})=>{const a=`${i}-tab`,c=`${i}-tabpanel`;return t.jsx("div",{id:c,role:"tabpanel",tabIndex:0,"aria-labelledby":a,...d})};n.TabPanel=r,n.TabPanels=s},10438:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(61299),s=e(88972),r=e(19708),i=e(81405),d=e(13270),a=e(4583),m=(u=>u&&u.__esModule?u:{default:u})(s),p=(u,f)=>{const y=o.useRef(null),x=o.useRef(!1),j=l.useCallbackRef(f);return o.useEffect(()=>{if(y.current){if(x.current){const Z=y.current.querySelector('[tabindex="0"]');Z&&(Z.focus(),j(u))}x.current||(x.current=!0)}},[u,j]),y},g=m.default.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,T=({children:u,...f})=>{const{id:y,selectedTabIndex:x,selectTabIndex:j,label:Z,variant:M,onTabChange:b}=i.useTabs(),S=p(x,b),C=o.Children.toArray(u).map((w,N)=>o.cloneElement(w,{id:`${y}-${N}`,index:N,selectedTabIndex:x,onTabClick:()=>j(N),variant:M})),O=w=>{if(!C.every(P=>P.props.disabled))switch(w.key){case d.KeyboardKeys.RIGHT:{const P=x+1,L=I=>C[I].props.disabled?I===C.length-1?L(0):L(I+1):I,U=L(P>=C.length?0:P);j(U);break}case d.KeyboardKeys.LEFT:{const P=x-1,L=I=>C[I].props.disabled?L(I===0?C.length-1:I-1):I,U=L(P<0?C.length-1:P);j(U);break}case d.KeyboardKeys.HOME:{const P=C.findIndex(L=>!L.props.disabled);j(P);break}case d.KeyboardKeys.END:{const L=C.map((U,I)=>({isDisabled:U.props.disabled,index:I})).reverse().find(({isDisabled:U})=>!U);L&&j(L.index);break}}};return M==="simple"?t.jsx("div",{ref:S,role:"tablist","aria-label":Z,onKeyDown:O,...f,children:C}):t.jsx(r.DefaultTabsRow,{ref:S,role:"tablist",alignItems:"flex-end","aria-label":Z,onKeyDown:O,...f,children:C})},v=({disabled:u=!1,id:f,children:y,variant:x,hasError:j=!1,index:Z,selectedTabIndex:M,onTabClick:b,...S})=>{const C=`${f}-tab`,O=`${f}-tabpanel`,w=Z===M,N=()=>{u||b&&b()};if(x==="simple"){let L;return j?L="danger600":w?L="primary600":L="neutral600",t.jsx(g,{id:C,role:"tab","aria-controls":w?O:void 0,tabIndex:w?0:-1,"aria-selected":w,type:"button",onClick:N,"aria-disabled":u,...S,children:t.jsx(r.SimpleTabBox,{padding:4,selected:w,hasError:j,children:t.jsx(a.Typography,{variant:"sigma",textColor:L,children:y})})})}j&&console.warn('The "hasError" prop is only available for the "simple" variant.');const P=M&&M-1===Z;return t.jsx(r.DefaultTabButton,{id:C,role:"tab",type:"button","aria-controls":w?O:void 0,tabIndex:w?0:-1,"aria-selected":w,onClick:N,"aria-disabled":u,showRightBorder:Boolean(P),...S,children:t.jsx(r.DefaultTabBox,{padding:w?4:3,background:w?"neutral0":"neutral100",selected:w,children:t.jsx(a.Typography,{fontWeight:"bold",textColor:w?"primary700":"neutral600",children:y})})})};n.Tab=v,n.Tabs=T},81405:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),o=t.createContext({id:"",label:"",selectedTabIndex:0,selectTabIndex(){throw new Error("TabsContext.selectTabIndex is not implemented.")}}),l=()=>t.useContext(o);n.TabsContext=o,n.useTabs=l},19708:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),o=e(60665),l=e(90291),r=(m=>m&&m.__esModule?m:{default:m})(t),i=r.default(o.Box)`
  border-bottom: 2px solid
    ${({theme:m,selected:p,hasError:g})=>p?g?m.colors.danger600:m.colors.primary600:"transparent"};
`,d=r.default(o.Box)`
  border-bottom: 1px solid ${({theme:m,selected:p})=>p?m.colors.neutral0:m.colors.neutral150};
`,a=r.default.button`
  border: none;
  background: transparent;
  padding: 0;

  & + & > ${d} {
    border-left: 1px solid ${({theme:m})=>m.colors.neutral150};
  }

  ${d} {
    border-right: ${({theme:m,showRightBorder:p})=>p?`1px solid ${m.colors.neutral150}`:"none"};
  }

  // Hack preventing the outline from being overflow by the following tab
  outline-offset: -2px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`,c=r.default(l.Flex)`
  & > * {
    flex: 1;
  }

  & ${a}:first-of-type ${d} {
    border-radius: ${({theme:m})=>`${m.borderRadius} 0 0 0`};
  }

  & ${a}:last-of-type ${d} {
    border-radius: ${({theme:m})=>`0 ${m.borderRadius} 0 0`};
  }

  & ${a}[aria-selected="true"] ${d} {
    border-radius: ${({theme:m})=>`${m.borderRadius} ${m.borderRadius} 0 0`};
    border-left: none;
    border-right: none;
  }
`;n.DefaultTabBox=d,n.DefaultTabButton=a,n.DefaultTabsRow=c,n.SimpleTabBox=i},63038:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(10438),o=e(41556),l=e(58405);n.Tab=t.Tab,n.Tabs=t.Tabs,n.TabPanel=o.TabPanel,n.TabPanels=o.TabPanels,n.TabGroup=l.TabGroup},94051:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(85893),o=e(67294),l=e(52423),s=e(58674),r=e(90291),i=e(64919),d=e(30969),a=e(92298),c=e(73582),m=o.forwardRef(({name:p,hint:g,error:T,label:v,labelAction:u,id:f,required:y,...x},j)=>{const Z=l.useId(f),M=o.useRef(null),b=o.useRef(null);if(!v&&!x["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return o.useImperativeHandle(j,()=>({input:b,inputWrapperRef:M}),[]),t.jsx("div",{ref:M,children:t.jsx(s.Field,{name:p,hint:g,error:T,id:Z,required:y,children:t.jsxs(r.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[v&&t.jsx(i.FieldLabel,{action:u,children:v}),t.jsx(d.FieldInput,{ref:b,...x}),t.jsx(a.FieldHint,{}),t.jsx(c.FieldError,{})]})})})});m.displayName="TextInput",n.TextInput=m},49006:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(94051);n.TextInput=t.TextInput},4583:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),o=e(50933),l=e(60468),r=(a=>a&&a.__esModule?a:{default:a})(t),i={fontSize:!0,fontWeight:!0},d=r.default.span.withConfig({shouldForwardProp:(a,c)=>!i[a]&&c(a)})`
  ${o.variantStyle}
  ${o.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:a,fontWeight:c})=>l.extractStyleFromTheme(a.fontWeights,c,void 0)};
  font-size: ${({theme:a,fontSize:c})=>l.extractStyleFromTheme(a.fontSizes,c,void 0)};
  line-height: ${({theme:a,lineHeight:c})=>l.extractStyleFromTheme(a.lineHeights,c,c)};
  color: ${({theme:a,textColor:c})=>a.colors[c||"neutral800"]};
  text-align: ${({textAlign:a})=>a};
  text-decoration: ${({textDecoration:a})=>a};
  text-transform: ${({textTransform:a})=>a};
`;n.Typography=d},24866:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="alpha",t="beta",o="delta",l="epsilon",s="omega",r="pi",i="sigma",d=[e,t,o,l,s,r,i];n.ALPHA=e,n.BETA=t,n.DELTA=o,n.EPSILON=l,n.OMEGA=s,n.PI=r,n.SIGMA=i,n.TEXT_VARIANTS=d},84704:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(4583);n.Typography=t.Typography},50933:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(24866),o=({ellipsis:s=!1})=>s&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,l=({variant:s=t.OMEGA,theme:r})=>{switch(s){case t.ALPHA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[5]};
        line-height: ${r.lineHeights[2]};
      `;case t.BETA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[4]};
        line-height: ${r.lineHeights[1]};
      `;case t.DELTA:return`
        font-weight: ${r.fontWeights.semiBold};
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[2]};
      `;case t.EPSILON:return`
        font-size: ${r.fontSizes[3]};
        line-height: ${r.lineHeights[6]};
      `;case t.OMEGA:return`
        font-size: ${r.fontSizes[2]};
        line-height: ${r.lineHeights[4]};
      `;case t.PI:return`
        font-size: ${r.fontSizes[1]};
        line-height: ${r.lineHeights[3]};
      `;case t.SIGMA:return`
        font-weight: ${r.fontWeights.bold};
        font-size: ${r.fontSizes[0]};
        line-height: ${r.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${r.fontSizes[2]};
      `}};n.ellipsisStyle=o,n.variantStyle=l},98365:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),s=(r=>r&&r.__esModule?r:{default:r})(t).default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;n.VisuallyHidden=s},7809:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(98365);n.VisuallyHidden=t.VisuallyHidden},52075:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e="[@strapi/design-system]:",t=o=>{const l=o;let s=!1;if(typeof l!="function")throw new TypeError(`${e} once requires a function parameter`);return(...r)=>{s||(l(...r),s=!0)}};n.PREFIX=e,n.once=t},15809:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e=(o,l)=>[...o.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(i=>i.hasAttribute("disabled")?!1:l?!0:i.getAttribute("tabindex")!=="-1"),t=o=>o.filter(l=>l.tagName==="INPUT"?l.type!=="checkbox"&&l.type!=="radio":!1);n.getFocusableNodes=e,n.getFocusableNodesWithKeyboardNav=t},13270:(h,n)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"};n.KeyboardKeys=e},18627:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294);function o(d){if(d&&d.__esModule)return d;const a=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(d){for(const c in d)if(c!=="default"){const m=Object.getOwnPropertyDescriptor(d,c);Object.defineProperty(a,c,m.get?m:{enumerable:!0,get:()=>d[c]})}}return a.default=d,Object.freeze(a)}const l=o(t);function s(d,a){typeof d=="function"?d(a):d!=null&&(d.current=a)}function r(...d){return a=>d.forEach(c=>s(c,a))}function i(...d){return l.useCallback(r(...d),d)}n.composeRefs=r,n.useComposedRefs=i},90082:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),o=l=>{const s=t.useRef(null),[r,i]=t.useState(!0),d=([a])=>{i(a.isIntersecting)};return t.useEffect(()=>{const a=s.current,c=new IntersectionObserver(d,l);return a&&c.observe(s.current),()=>{a&&c.disconnect()}},[s,l]),[s,r]};n.useElementOnScreen=o},52423:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),s=(d=>d&&d.__esModule?d:{default:d})(t).default["useId".toString()]||(()=>{});let r=0;const i=d=>{const[a,c]=t.useState(s());return t.useLayoutEffect(()=>{d||c(m=>m??String(r++))},[d]),d?.toString()??(a||"")};n.useId=i},30860:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(67294),o=e(61299),l=(s,r)=>{const i=o.useCallbackRef(r);t.useLayoutEffect(()=>{const d=new ResizeObserver(i);return Array.isArray(s)?s.forEach(a=>{a.current&&d.observe(a.current)}):s.current&&d.observe(s.current),()=>{d.disconnect()}},[s,i])};n.useResizeObserver=l},69186:(h,n,e)=>{Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});const t=e(88972),o=r=>({theme:i,size:d})=>i.sizes[r][d],l=(r="&")=>({theme:i,hasError:d=!1})=>t.css`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${r}:focus-within {
      border: 1px solid ${d?i.colors.danger600:i.colors.primary600};
      box-shadow: ${d?i.colors.danger600:i.colors.primary600} 0px 0px 0px 2px;
    }
  `,s=({theme:r})=>t.css`
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
      border: 2px solid ${r.colors.primary600};
    }
  }
`;n.buttonFocusStyle=s,n.getThemeSize=o,n.inputFocusStyle=l},64609:(h,n,e)=>{const t=e(85893),o=s=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:t.jsx("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=o;h.exports=l},76566:(h,n,e)=>{e.r(n),e.d(n,{default:()=>re});var t=e(67294),o=e(93289),l=e(63038),s=e(14772),r=e(35163),i=e(60797),d=e(84704),a=e(7809);const c=()=>t.createElement(s.Thead,null,t.createElement(s.Tr,null,t.createElement(s.Th,null,t.createElement(a.VisuallyHidden,null,"INDEX")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"NAME")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"IN MEILISEARCH ?")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"INDEXING ?")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"INDEX NAME")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"DOCUMENTS")),t.createElement(s.Th,null,t.createElement(d.Typography,{variant:"sigma"},"HOOKS")),t.createElement(s.Th,null,t.createElement(a.VisuallyHidden,null,"Actions")))),m=(0,t.memo)(c);var p=e(77811),g=e(86931);const T=({entry:D,deleteCollection:A,addCollection:F,updateCollection:K})=>t.createElement(s.Tr,{key:D.contentType},t.createElement(s.Td,null,t.createElement(p.BaseCheckbox,{"aria-label":`Select ${D.collection}`,onValueChange:()=>{D.indexed?A({contentType:D.contentType}):F({contentType:D.contentType})},value:D.indexed})),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.collection)),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.indexed?"Yes":"No")),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.isIndexing?"Yes":"No")),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.indexUid)),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.numberOfDocuments," / ",D.numberOfEntries)),t.createElement(s.Td,null,t.createElement(d.Typography,{textColor:"neutral800"},D.reloadNeeded)),t.createElement(s.Td,null,t.createElement(g.Flex,null,t.createElement(o.Box,{paddingLeft:1},t.createElement(r.Button,{onClick:()=>K({contentType:D.contentType}),size:"S",variant:"secondary"},"Update"))))),v=(0,t.memo)(T);var u=e(80101),f=e.n(u);function y(){const D=(0,i.lm)();return{handleNotification:({type:F="info",message:K="Something occured in Meilisearch",link:V,blockTransition:W=!0})=>{D({type:F,message:{id:"notification.meilisearch.message",defaultMessage:K},link:V,blockTransition:W,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)})}}}const x=y,j=({indexed:D,listened:A})=>{if(D&&!A||!D&&A)return"Reload needed";if(D&&A)return"Hooked";if(!D&&!A)return"/"};function Z(){const[D,A]=(0,t.useState)([]),[F,K]=(0,t.useState)(!0),[V,W]=(0,t.useState)(!1),[G,X]=(0,t.useState)(!1),{handleNotification:B}=x(),Y=()=>K(z=>!z),k=async()=>{const{data:z,error:$}=await(0,i.WY)(`/${f()}/content-type/`,{method:"GET"});if($)B({type:"warning",message:$.message,link:$.link});else{const _=z.contentTypes.map(J=>(J.reloadNeeded=j({indexed:J.indexed,listened:J.listened}),J)),de=_.find(J=>J.reloadNeeded==="Reload needed"),ie=_.find(J=>J.isIndexing===!0);X(!!ie),W(!!de),A(_)}},q=async({contentType:z})=>{const{error:$}=await(0,i.WY)(`/${f()}/content-type/${z}`,{method:"DELETE"});$?B({type:"warning",message:$.message,link:$.link}):(Y(),B({type:"success",message:"Request to delete content-type is successful",blockTransition:!1}))},H=async({contentType:z})=>{const{error:$}=await(0,i.WY)(`/${f()}/content-type`,{method:"POST",body:{contentType:z}});$?B({type:"warning",message:$.message,link:$.link}):(Y(),B({type:"success",message:"Request to add a content-type is successful",blockTransition:!1}))},Q=async({contentType:z})=>{const{error:$}=await(0,i.WY)(`/${f()}/content-type`,{method:"PUT",body:{contentType:z}});$?B({type:"warning",message:$.message,link:$.link}):(Y(),B({type:"success",message:"Request to update content-type is successful",blockTransition:!1}))};return(0,t.useEffect)(()=>{k()},[F]),(0,t.useEffect)(()=>{let z;return G?z=setInterval(()=>{Y()},1e3):clearInterval(z),()=>clearInterval(z)},[G]),{collections:D,deleteCollection:q,addCollection:H,updateCollection:Q,reloadNeeded:V,refetchCollection:Y,handleNotification:B}}const M=Z,b=()=>{const{collections:D,deleteCollection:A,addCollection:F,updateCollection:K,reloadNeeded:V,refetchCollection:W}=M(),{lockAppWithAutoreload:G,unlockAppWithAutoreload:X}=(0,i.Vu)(),[B,Y]=(0,t.useState)(!1),k=6,q=10,H=async()=>{try{G(),await(0,i.WY)(`/${f()}/reload`,{method:"GET"},!0),Y(!1)}catch(Q){console.error(Q)}finally{X(),W()}};return(0,t.useEffect)(()=>{B&&H()},[B]),t.createElement(o.Box,{background:"neutral100"},t.createElement(s.Table,{colCount:q,rowCount:k},t.createElement(m,null),t.createElement(s.Tbody,null,D.map(Q=>t.createElement(v,{key:Q.collection,entry:Q,deleteCollection:A,addCollection:F,updateCollection:K})))),V&&t.createElement(o.Box,{padding:5},t.createElement(r.Button,{onClick:()=>Y(!0)},"Reload server")))},S=(0,t.memo)(b);var C=e(49006);function O(){const[D,A]=(0,t.useState)({host:"",apiKey:"",ApiKeyIsFromConfigFile:!0,HostIsFromConfigFile:!0}),[F,K]=(0,t.useState)(!0),[V,W]=(0,t.useState)(""),[G,X]=(0,t.useState)(""),{handleNotification:B}=x(),Y=()=>K(H=>!H),k=async()=>{const{error:H}=await(0,i.WY)(`/${f()}/credential`,{method:"POST",body:{apiKey:G,host:V}});H?B({type:"warning",message:H.message,link:H.link}):(Y(),B({type:"success",message:"Credentials sucessfully updated!",blockTransition:!1}))},q=async()=>{const{data:H,error:Q}=await(0,i.WY)(`/${f()}/credential`,{method:"GET"});Q?B({type:"warning",message:Q.message,link:Q.link}):(A(H),W(H.host),X(H.apiKey))};return(0,t.useEffect)(()=>{q()},[F]),{credentials:D,updateCredentials:k,setHost:W,setApiKey:X,host:V,apiKey:G}}const w=null,N=()=>{const{host:D,apiKey:A,credentials:F,setHost:K,setApiKey:V,updateCredentials:W}=O();return t.createElement(o.Box,null,t.createElement(o.Box,{padding:2},t.createElement(C.TextInput,{placeholder:"Host",label:"Meilisearch Host",name:"host",hint:"The host on which your Meilisearch is running",value:D,onChange:G=>K(G.target.value),disabled:F.HostIsFromConfigFile})),t.createElement(o.Box,{padding:2},t.createElement(C.TextInput,{placeholder:"API key",label:"Meilisearch API Key",name:"apiKey",hint:"A valid API key with enough permission to create indexes (or the master key).",onChange:G=>V(G.target.value),value:A,disabled:F.ApiKeyIsFromConfigFile,"aria-label":"Password",type:"password"})),t.createElement(o.Box,{paddingTop:1,paddingLeft:2},t.createElement(d.Typography,{variant:"pi",style:{color:"red"}},"Do not use this API key on your front-end as it has too much rights. Instead, use the public key available using"," ",t.createElement("a",{href:"https://docs.meilisearch.com/reference/api/keys.html#get-keys"},"the key route"),".")),t.createElement(o.Box,{paddingTop:2,paddingLeft:2,paddingRight:2,paddingBottom:2},t.createElement(r.Button,{variant:"secondary",onClick:()=>W(),disabled:F.ApiKeyIsFromConfigFile&&F.HostIsFromConfigFile},"Save")))},P=(0,t.memo)(N),L=()=>t.createElement(o.Box,{padding:5},t.createElement(P,null)),U=(0,t.memo)(L),I=()=>t.createElement(o.Box,{padding:8,margin:10,background:"neutral"},t.createElement(l.TabGroup,{label:"Some stuff for the label",id:"tabs"},t.createElement(l.Tabs,null,t.createElement(l.Tab,null,"Collections"),t.createElement(l.Tab,null,"Settings")),t.createElement(l.TabPanels,null,t.createElement(l.TabPanel,null,t.createElement(o.Box,{color:"neutral800",padding:4,background:"neutral0"},t.createElement(S,null))),t.createElement(l.TabPanel,null,t.createElement(o.Box,{color:"neutral800",padding:4,background:"neutral0"},t.createElement(U,null)))))),E=(0,t.memo)(I);var ee=e(64609),te=e.n(ee),ne=e(82922),oe=e(58136);const le=()=>t.createElement(o.Box,{background:"neutral100"},t.createElement(oe.BaseHeaderLayout,{navigationAction:t.createElement(ne.Link,{startIcon:t.createElement(te(),null),to:"/"},"Go back"),title:"Meilisearch",subtitle:"strapi-plugin-meilisearch",as:"h2"})),ae=(0,t.memo)(le),se=()=>t.createElement("div",null,t.createElement(ae,null),t.createElement(E,null)),re=(0,t.memo)(se)},69858:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),l=o},61967:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7Zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 1 0 0 3H7ZM7 5v2h2V5H7Zm0 3v2h2V8H7Zm0 3v2h2v-2H7Z"})}),l=o},37855:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,t.jsx)("path",{fill:"#D9822F",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373Zm-2.287 0-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912Z",clipRule:"evenodd"})]}),l=o},80606:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),l=o},90044:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...s,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,t.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),l=o},43219:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Zm-8.806-4 .806.806L12.806 12 16 15.194l-.806.806L12 12.806 8.806 16 8 15.194 11.194 12 8 8.806 8.806 8 12 11.194 15.194 8Z",clipRule:"evenodd"})}),l=o},88514:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#7289DA",d:"M20.04 0H3.96A2.464 2.464 0 0 0 1.5 2.468v16.2a2.464 2.464 0 0 0 2.46 2.469h13.608l-.636-2.217 1.536 1.426 1.452 1.342 2.58 2.277V2.468A2.464 2.464 0 0 0 20.04 0Zm-4.632 15.65s-.432-.516-.792-.972c1.572-.443 2.172-1.425 2.172-1.425-.492.323-.96.55-1.38.707-.6.251-1.176.419-1.74.515a8.417 8.417 0 0 1-3.108-.012 10.086 10.086 0 0 1-1.764-.515 7.053 7.053 0 0 1-.876-.408c-.036-.024-.072-.036-.108-.06a.166.166 0 0 1-.048-.036 4.202 4.202 0 0 1-.336-.203s.576.958 2.1 1.414c-.36.455-.804.994-.804.994-2.652-.084-3.66-1.821-3.66-1.821 0-3.859 1.728-6.986 1.728-6.986 1.728-1.294 3.372-1.258 3.372-1.258l.12.144c-2.16.623-3.156 1.57-3.156 1.57s.264-.144.708-.348c1.284-.563 2.304-.72 2.724-.755.072-.012.132-.024.204-.024A9.792 9.792 0 0 1 16.8 7.297s-.948-.898-2.988-1.521l.168-.192s1.644-.036 3.372 1.258c0 0 1.728 3.127 1.728 6.986 0 0-1.02 1.737-3.672 1.821Zm-5.58-5.597c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33.012-.73-.54-1.33-1.224-1.33Zm4.38 0c-.684 0-1.224.6-1.224 1.33 0 .731.552 1.33 1.224 1.33.684 0 1.224-.599 1.224-1.33 0-.73-.54-1.33-1.224-1.33Z"})}),l=o},93570:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:[(0,t.jsx)("path",{fill:"#231F20",d:"M12.103 0C5.533 0 0 5.278 0 11.79V24l12.1-.012c6.57 0 11.9-5.481 11.9-11.992C24 5.486 18.666 0 12.103 0Z"}),(0,t.jsx)("path",{fill:"#FFF9AE",d:"M12.22 4.564a7.43 7.43 0 0 0-3.644.956 7.346 7.346 0 0 0-2.692 2.614 7.26 7.26 0 0 0-.149 7.22L4.4 19.606l4.793-1.072a7.433 7.433 0 0 0 6.355-.14 7.36 7.36 0 0 0 2.513-2.057 7.28 7.28 0 0 0 1.372-2.93 7.243 7.243 0 0 0-.035-3.228A7.281 7.281 0 0 0 17.96 7.28a7.365 7.365 0 0 0-2.557-2.002 7.432 7.432 0 0 0-3.178-.715h-.007Z"}),(0,t.jsx)("path",{fill:"#00AEEF",d:"M18.071 7.426a7.262 7.262 0 0 1 1.51 4.499 7.264 7.264 0 0 1-1.595 4.47 7.38 7.38 0 0 1-4.028 2.558 7.437 7.437 0 0 1-4.765-.43L4.4 19.61l4.88-.571a7.432 7.432 0 0 0 5.181.858 7.381 7.381 0 0 0 4.443-2.778 7.258 7.258 0 0 0-.833-9.693Z"}),(0,t.jsx)("path",{fill:"#00A94F",d:"M16.713 6.078a7.253 7.253 0 0 1 .86 8.928 7.361 7.361 0 0 1-3.736 2.962 7.437 7.437 0 0 1-4.784.065L4.4 19.61l4.793-1.075a7.436 7.436 0 0 0 5.24.313 7.362 7.362 0 0 0 4.123-3.22 7.249 7.249 0 0 0 .914-5.123 7.296 7.296 0 0 0-2.757-4.427Z"}),(0,t.jsx)("path",{fill:"#F15D22",d:"M6.176 15.515a7.246 7.246 0 0 1-.26-4.876 7.312 7.312 0 0 1 2.9-3.95 7.427 7.427 0 0 1 9.26.735 7.387 7.387 0 0 0-4.603-2.771 7.431 7.431 0 0 0-5.277 1.068A7.311 7.311 0 0 0 5.06 10.06a7.249 7.249 0 0 0 .676 5.294L4.4 19.607l1.776-4.092Z"}),(0,t.jsx)("path",{fill:"#E31B23",d:"M5.735 15.353a7.25 7.25 0 0 1-.764-4.818 7.294 7.294 0 0 1 2.465-4.222 7.415 7.415 0 0 1 4.596-1.744 7.42 7.42 0 0 1 4.681 1.509 7.404 7.404 0 0 0-4.865-2.26 7.421 7.421 0 0 0-5.12 1.61 7.293 7.293 0 0 0-2.66 4.626A7.256 7.256 0 0 0 5.28 15.24l-.877 4.37 1.332-4.257Z"})]}),l=o},5660:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),l=o},34792:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:[(0,t.jsx)("path",{fill:"#212134",d:"M11.987 23.036v-.964H1.876V1.876h10.111V0H0v24h11.987v-.964Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M8 11.2c0-.11.09-.2.2-.2h11.973l-5.445-5.445a.2.2 0 0 1 0-.283l1.13-1.13a.2.2 0 0 1 .283 0l7.718 7.717a.2.2 0 0 1 0 .282L16.14 19.86a.2.2 0 0 1-.282 0l-1.13-1.13a.2.2 0 0 1 0-.284L20.172 13H8.2a.2.2 0 0 1-.2-.2v-1.6Z"})]}),l=o},2204:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,t.jsx)("path",{fill:"#9736E8",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",d:"M18.037 11.774a28.578 28.578 0 0 0-2.948 2.706c-1.995 2.109-3.55 4.093-4.761 6.06-.289.469-.574.945-.855 1.418a9.074 9.074 0 0 0-.463 1.536c-.074.37.275.68.577.395.312-.299.587-.64.851-.985.467-.608.906-1.237 1.342-1.867 3.37.242 7.27-2.048 8.933-4.857a.196.196 0 0 0 .017-.167.183.183 0 0 0-.114-.118c-.809-.27-1.798-.44-2.207-.462-.017 0-.034-.014-.037-.035a.039.039 0 0 1 .024-.043c1.113-.58 1.924-.647 2.877-.505.07.01.134-.046.16-.114.095-.217.356-.87.537-1.404a.201.201 0 0 0-.087-.239c-.71-.384-1.656-.643-2.035-.682-.017 0-.03-.018-.034-.036a.039.039 0 0 1 .024-.043c1.1-.483 1.485-.497 2.364-.302.087.018.17-.05.19-.142.433-1.714.574-3.197.608-3.68a.21.21 0 0 0-.057-.157.177.177 0 0 0-.148-.05c-2.444.356-4.403.865-6.093 1.55-.057.022-.11.072-.11.136.144.551-.242 1.209-.845 1.703a.042.042 0 0 1-.044.018.046.046 0 0 1-.027-.043c.004-.046.158-.665.067-1.116-.013-.064-.033-.125-.084-.16a.173.173 0 0 0-.17-.014c-7.924 3.811-5.922 10.098-5.922 10.098.01.004.02.004.03.007.895-1.86 1.904-3.232 3.49-5.035 1.178-1.337 2.331-2.425 3.525-3.325.75-.565 2.448-1.738 3.51-2.144a.285.285 0 0 1 .105-.021c.097 0 .177.064.2.16a.264.264 0 0 1-.046.228l-2.344 1.731Z"})]}),l=o},86820:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),l=o},80631:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,t.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),l=o},28077:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,t.jsx)("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),l=o},4452:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455ZM7 10v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"})}),l=o},93703:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),l=o},57312:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.74 2.7v3.85h1.04v.85H1.56v-.85H2.6V3.8H1.56v-.77l2.18-.33Zm-.72 10.92.01.04h1.75v.76H1.55v-.67l1.52-1.57c.19-.22.34-.41.43-.58a.99.99 0 0 0 .14-.45.64.64 0 0 0-.14-.43.51.51 0 0 0-.4-.16.43.43 0 0 0-.39.2.96.96 0 0 0-.14.53H1.52v-.02c-.02-.43.12-.79.41-1.09.3-.3.68-.44 1.16-.44.52 0 .91.12 1.2.37.29.25.43.6.43 1.04 0 .29-.08.55-.23.78-.15.22-.43.56-.84 1l-.63.7Zm1.63 5.85a1.25 1.25 0 0 0-.59-.42c.22-.1.4-.24.53-.41a1.16 1.16 0 0 0-.26-1.57c-.3-.23-.7-.35-1.21-.35-.43 0-.8.12-1.1.35-.31.23-.46.55-.45.92l.01.03h1.05c0-.19.05-.25.16-.33a.6.6 0 0 1 .37-.13c.18 0 .31.05.4.15.1.1.15.22.15.37a.6.6 0 0 1-.16.44.6.6 0 0 1-.45.17h-.5v.75h.5c.22 0 .39.07.5.17.12.1.18.28.18.5 0 .16-.05.3-.17.4a.64.64 0 0 1-.45.17.64.64 0 0 1-.42-.18.47.47 0 0 1-.18-.4H1.51l-.01.05c-.01.43.15.78.47 1 .33.23.71.35 1.15.35.5 0 .92-.12 1.25-.36.33-.24.49-.58.49-1 0-.26-.07-.48-.21-.67ZM8.4 3.97h14.1v2.38H8.4V3.98Zm14.1 6.9H8.4v2.37h14.1v-2.37Zm-14.1 6.9h14.1v2.37H8.4v-2.37Z"})}),l=o},78971:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.53-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685Z"})}),l=o},81126:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...s,children:[(0,t.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,t.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),l=o},85362:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 8 8",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M2 .93c0-.4.45-.63.78-.41l4.6 3.06c.3.2.3.64 0 .84l-4.6 3.06A.5.5 0 0 1 2 7.07V.93Z"})}),l=o},12951:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...s,children:[(0,t.jsx)("path",{fill:"#66B7F1",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M12 10.921a.5.5 0 0 1 .773-.419l8.582 5.579a.5.5 0 0 1 0 .838l-8.582 5.579a.5.5 0 0 1-.773-.42V10.922Z",clipRule:"evenodd"})]}),l=o},59533:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),l=o},32672:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),l=o},54535:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 15 14",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M5.08 4.1c0-1.19 1.18-2.17 2.42-2.17s2.43.98 2.43 2.17c0 1.1-.56 1.61-1.31 2.28l-.03.03c-.75.65-1.66 1.47-1.66 3.09a.57.57 0 1 0 1.15 0c0-1.08.55-1.6 1.3-2.26l.02-.02c.75-.66 1.67-1.48 1.67-3.12C11.07 2.13 9.22.78 7.5.78 5.78.78 3.93 2.13 3.93 4.1a.57.57 0 1 0 1.15 0Zm2.42 9.26a.88.88 0 1 0 0-1.75.88.88 0 0 0 0 1.75Z"})}),l=o},93768:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#FF4500",fillRule:"evenodd",d:"M23.634 12.018c0 6.583-5.263 11.92-11.754 11.92C5.388 23.938.125 18.6.125 12.018S5.388.098 11.88.098c6.491 0 11.754 5.337 11.754 11.92ZM17.94 10.34a1.73 1.73 0 0 1 1.779 1.677c.012.67-.36 1.286-.95 1.585.012.175.012.35 0 .524 0 2.673-3.067 4.842-6.851 4.842s-6.852-2.172-6.852-4.842a3.925 3.925 0 0 1 0-.524 1.662 1.662 0 0 1-.461-.314 1.756 1.756 0 0 1-.076-2.46 1.697 1.697 0 0 1 2.425-.076 8.339 8.339 0 0 1 4.584-1.467l.868-4.136v-.006a.364.364 0 0 1 .435-.282l2.881.584c.184-.326.517-.545.888-.584a1.18 1.18 0 0 1 1.295 1.058 1.188 1.188 0 0 1-1.044 1.313 1.18 1.18 0 0 1-1.294-1.058l-2.515-.536-.763 3.718a8.277 8.277 0 0 1 4.526 1.467 1.71 1.71 0 0 1 1.125-.483Zm-8.798 1.677c-.648 0-1.177.536-1.177 1.194a1.19 1.19 0 0 0 1.177 1.194c.649 0 1.178-.536 1.178-1.194 0-.658-.53-1.194-1.178-1.194Zm2.747 5.39a4.47 4.47 0 0 0 2.904-.919v.047a.339.339 0 0 0 .006-.47.327.327 0 0 0-.465-.007 3.83 3.83 0 0 1-2.457.726 3.802 3.802 0 0 1-2.446-.75.314.314 0 0 0-.403 0 .327.327 0 0 0-.044.454 4.47 4.47 0 0 0 2.905.918Zm1.516-4.155c0 .658.529 1.194 1.178 1.194l-.01.045h.06a1.186 1.186 0 0 0 1.127-1.239c0-.657-.529-1.194-1.178-1.194-.648 0-1.177.537-1.177 1.194Z",clipRule:"evenodd"})}),l=o},11748:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...s,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,t.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),l=o},48412:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),l=o},28248:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...s,children:[(0,t.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,t.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),l=o},34012:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 80 80",...s,children:[(0,t.jsx)("path",{fill:"#4945FF",d:"M0 27.7c0-13 0-19.6 4-23.6C8.2 0 14.8 0 27.8 0h24.6C65.4 0 72 0 76 4c4 4.2 4 10.8 4 23.8v24.6c0 13 0 19.6-4 23.6-4.2 4-10.8 4-23.8 4H27.7c-13 0-19.6 0-23.6-4C0 71.8 0 65.2 0 52.2V27.7Z"}),(0,t.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M55.2 24.3h-27V38H42v13.7h13.7V24.8c0-.3-.2-.5-.5-.5Z",clipRule:"evenodd"}),(0,t.jsx)("path",{fill:"#fff",d:"M41.5 38h.5v.5h-.5z"}),(0,t.jsx)("path",{fill:"#9593FF",d:"M28.3 38h13.2c.3 0 .5.2.5.5v13.2H28.8a.5.5 0 0 1-.5-.5V38ZM42 51.7h13.7L42.5 65c-.2.2-.5 0-.5-.2v-13ZM28.3 38H15.2a.3.3 0 0 1-.2-.5l13.3-13.2V38Z"})]}),l=o},76838:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),l=o},32525:(h,n,e)=>{e.d(n,{Z:()=>l});var t=e(85893);const o=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.707.297A1 1 0 0 0 23 .004h-2a13.907 13.907 0 0 0-5.38 1.077 1 1 0 0 0-.615.923V4.92a.035.035 0 0 1-.022.038l-2-1.47a1 1 0 0 0-1.265.052A14 14 0 0 0 7 14.004v1.585l-2.707 2.707a1 1 0 1 0 1.415 1.415l2.707-2.708H10a14.014 14.014 0 0 0 14-14v-2a1 1 0 0 0-.293-.706ZM18 23.999H3a3 3 0 0 1-3-3V6A3 3 0 0 1 3 3h3a1 1 0 1 1 0 2H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3Z",clipRule:"evenodd"})}),l=o},26112:(h,n,e)=>{e.r(n),e.d(n,{Alien:()=>t.Z,Apps:()=>o.Z,Archive:()=>l.Z,ArrowDown:()=>s.Z,ArrowLeft:()=>r.Z,ArrowRight:()=>i.Z,ArrowUp:()=>d.Z,Attachment:()=>a.Z,Bell:()=>c.Z,Bold:()=>m.Z,Book:()=>p.Z,Boolean:()=>g.Z,Briefcase:()=>T.Z,Brush:()=>v.Z,BulletList:()=>u.Z,Calendar:()=>f.Z,Car:()=>y.Z,CarretDown:()=>x.Z,CarretUp:()=>j.Z,Cast:()=>Z.Z,ChartBubble:()=>M.Z,ChartCircle:()=>b.Z,ChartPie:()=>S.Z,Check:()=>C.Z,CheckCircle:()=>O.Z,ChevronDown:()=>w.Z,ChevronLeft:()=>N.Z,ChevronRight:()=>P.Z,ChevronUp:()=>L.Z,Clock:()=>U.Z,Cloud:()=>I.Z,CloudUpload:()=>te,Code:()=>ne.Z,CodeSquare:()=>oe.Z,Cog:()=>le.Z,Collapse:()=>ae.Z,CollectionType:()=>se.Z,Command:()=>re.Z,Component:()=>D.Z,Connector:()=>A.Z,Crop:()=>F.Z,Cross:()=>K.Z,CrossCircle:()=>V.Z,Crown:()=>W.Z,Cube:()=>G.Z,Cup:()=>X.Z,Cursor:()=>B.Z,Dashboard:()=>Y.Z,Database:()=>k.Z,Date:()=>q.Z,Discord:()=>H.Z,Discourse:()=>Q.Z,Discuss:()=>z.Z,Doctor:()=>$.Z,Dot:()=>_.Z,Download:()=>de.Z,Drag:()=>ie.Z,Duplicate:()=>J.Z,DynamicZone:()=>ce.Z,Earth:()=>ue.Z,EarthStriked:()=>he.Z,Email:()=>fe.Z,EmotionHappy:()=>ge.Z,EmotionUnhappy:()=>me.Z,EmptyDocuments:()=>ve.Z,EmptyPermissions:()=>ye.Z,EmptyPictures:()=>xe.Z,Enumeration:()=>pe.Z,Envelop:()=>Te.Z,Equalizer:()=>je,ExclamationMarkCircle:()=>Me.Z,Exit:()=>Se.Z,Expand:()=>Ee.Z,ExternalLink:()=>Ze.Z,Eye:()=>Ce.Z,EyeStriked:()=>Re.Z,Facebook:()=>we,Feather:()=>Le.Z,FeatherSquare:()=>Oe.Z,File:()=>Pe.Z,FileError:()=>Ie.Z,FilePdf:()=>Ae.Z,Filter:()=>Be.Z,Folder:()=>$e.Z,Gate:()=>Ne.Z,Gift:()=>Fe.Z,Github:()=>He.Z,GlassesSquare:()=>ze.Z,Globe:()=>Ue.Z,GraphQl:()=>We,Grid:()=>Ge.Z,HandHeart:()=>Ve.Z,Hashtag:()=>Ye.Z,Headphone:()=>Qe.Z,Heart:()=>Je.Z,House:()=>Xe.Z,IndentDecrease:()=>qe,IndentIncrease:()=>et,Information:()=>tt.Z,InformationSquare:()=>nt.Z,Italic:()=>ot.Z,Json:()=>lt.Z,Key:()=>at.Z,Landscape:()=>st.Z,LandscapeSmall:()=>dt,Layer:()=>it.Z,Layout:()=>ct.Z,Lightbulb:()=>ut.Z,Link:()=>ht.Z,LinkSmall:()=>gt,List:()=>mt.Z,Loader:()=>vt.Z,Lock:()=>yt.Z,Magic:()=>xt.Z,Mail:()=>Tt,ManyToMany:()=>bt.Z,ManyToOne:()=>jt.Z,ManyWays:()=>Mt.Z,Media:()=>St.Z,Medium:()=>Et.Z,MenuBurger:()=>Ct,Message:()=>Rt.Z,Microphone:()=>Dt.Z,Minus:()=>wt.Z,MinusOutlined:()=>Ot,Monitor:()=>Pt.Z,Moon:()=>It.Z,More:()=>At.Z,Move:()=>$t,Music:()=>Nt.Z,Number:()=>Ft.Z,NumberList:()=>Ht.Z,OneToMany:()=>zt.Z,OneToOne:()=>Ut.Z,OneWay:()=>Kt.Z,OnholdCarretDown:()=>Gt,OnholdCarretUp:()=>Yt,Paint:()=>Qt.Z,PaintBrush:()=>Jt.Z,PaperPlane:()=>Xt.Z,Password:()=>kt.Z,Pencil:()=>qt.Z,Phone:()=>_t.Z,Picture:()=>e0.Z,PicturePlus:()=>t0.Z,Pin:()=>n0.Z,PinMap:()=>o0.Z,Plane:()=>l0.Z,Play:()=>a0.Z,PlaySquare:()=>s0.Z,Plus:()=>r0.Z,PlusCircle:()=>d0.Z,PriceTag:()=>i0.Z,Puzzle:()=>c0.Z,Question:()=>u0.Z,Quote:()=>h0.Z,QuoteClosed:()=>g0,Reddit:()=>m0.Z,Refresh:()=>v0.Z,Relation:()=>y0.Z,Repeat:()=>x0.Z,Restaurant:()=>p0.Z,RichText:()=>T0.Z,Rocket:()=>b0.Z,Rotate:()=>j0.Z,Scissors:()=>M0.Z,Search:()=>S0.Z,SearchIcon:()=>Z0,Seed:()=>C0.Z,Server:()=>R0.Z,Shield:()=>D0.Z,Shirt:()=>w0.Z,ShoppingCart:()=>L0.Z,SingleType:()=>O0.Z,Slideshow:()=>P0.Z,Spinner:()=>A0,Stack:()=>B0.Z,Star:()=>$0.Z,Store:()=>N0.Z,Strapi:()=>F0.Z,StrikeThrough:()=>H0.Z,Sun:()=>z0.Z,Television:()=>U0.Z,Text:()=>K0.Z,ThumbDown:()=>W0.Z,ThumbUp:()=>G0.Z,Train:()=>V0.Z,Trash:()=>Y0.Z,Twitter:()=>Q0.Z,Typhoon:()=>J0.Z,Uid:()=>X0.Z,Underline:()=>k0.Z,Upload:()=>q0.Z,User:()=>_0.Z,VolumeMute:()=>e1.Z,VolumeUp:()=>t1.Z,Walk:()=>n1.Z,Wheelchair:()=>o1.Z,Write:()=>l1.Z});var t=e(40010),o=e(33075),l=e(83522),s=e(73141),r=e(60793),i=e(69858),d=e(87273),a=e(49117),c=e(45715),m=e(78748),p=e(61967),g=e(95525),T=e(62757),v=e(67674),u=e(18454),f=e(46236),y=e(62430),x=e(21514),j=e(28122),Z=e(57213),M=e(30531),b=e(49762),S=e(95754),C=e(8675),O=e(60324),w=e(3340),N=e(470),P=e(51682),L=e(84189),U=e(285),I=e(14530),E=e(85893);const ee=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",d:"M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7v-.019ZM13 13h3l-4-5-4 5h3v4h2v-4Z"})}),te=ee;var ne=e(92869),oe=e(37855),le=e(80606),ae=e(96322),se=e(90044),re=e(47607),D=e(4664),A=e(39953),F=e(76768),K=e(15800),V=e(43219),W=e(41518),G=e(61182),X=e(46308),B=e(90506),Y=e(17144),k=e(40495),q=e(9383),H=e(88514),Q=e(93570),z=e(83974),$=e(69767),_=e(22534),de=e(52794),ie=e(5660),J=e(70780),ce=e(90840),ue=e(31335),he=e(42105),fe=e(6459),ge=e(43987),me=e(95161),ve=e(58252),ye=e(7106),xe=e(52548),pe=e(5403),Te=e(46948);const be=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),je=be;var Me=e(91330),Se=e(34792),Ee=e(1030),Ze=e(91393),Ce=e(2953),Re=e(71578);const De=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#1977F3",fillRule:"evenodd",d:"M12.143 24Zm1.732-.146V15.47h2.796l.532-3.47h-3.328V9.749c0-.949.464-1.875 1.956-1.875h1.514V4.921s-1.374-.235-2.687-.235c-2.74 0-4.533 1.66-4.533 4.67V12H7.078v3.47h3.047v8.384C4.388 22.954 0 17.99 0 12 0 5.373 5.373 0 12 0s12 5.373 12 12c0 5.99-4.388 10.954-10.125 11.854Z",clipRule:"evenodd"})}),we=De;var Le=e(58889),Oe=e(2204),Pe=e(28219),Ie=e(73155),Ae=e(52909),Be=e(36002),$e=e(21833),Ne=e(6799),Fe=e(46509),He=e(86820),ze=e(80631),Ue=e(26974);const Ke=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#8E8EA9",fillRule:"evenodd",d:"M11.76 6.801a1.435 1.435 0 0 0 .797 0l4.31 7.45a1.418 1.418 0 0 0-.401.696H7.85a1.427 1.427 0 0 0-.401-.693L11.76 6.8Zm-.63-.378.042.04-4.312 7.453a1.374 1.374 0 0 0-.056-.015v-3.802A1.42 1.42 0 0 0 7.83 8.324l3.3-1.901Zm2.396-.583a1.428 1.428 0 1 0-2.737-.002L7.494 7.736a1.431 1.431 0 0 0-2.273.268 1.425 1.425 0 0 0 .904 2.098V13.9a1.426 1.426 0 1 0 1.37 2.368l3.293 1.897a1.425 1.425 0 0 0 1.37 1.828 1.427 1.427 0 0 0 1.355-1.873l3.274-1.887a1.431 1.431 0 0 0 2.304-.236 1.419 1.419 0 0 0-.9-2.097v-3.797a1.426 1.426 0 1 0-1.371-2.365L13.526 5.84Zm-.381.622.038-.038 3.302 1.903a1.42 1.42 0 0 0 1.027 1.772V13.9l-.055.015-4.312-7.453Zm3.348 9.256-3.28 1.89a1.425 1.425 0 0 0-1.055-.465c-.404 0-.77.167-1.029.436l-3.296-1.9a1.41 1.41 0 0 0 .015-.055h8.619l.026.094Z",clipRule:"evenodd"})}),We=Ke;var Ge=e(55814),Ve=e(9932),Ye=e(46822),Qe=e(17554),Je=e(70907),Xe=e(38588);const ke=R=>(0,E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:[(0,E.jsx)("g",{clipPath:"url(#IndentDecrease_svg__a)",children:(0,E.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8ZM1 12l4.9-4.2v8.4L1 12Z"})}),(0,E.jsx)("defs",{children:(0,E.jsx)("clipPath",{id:"IndentDecrease_svg__a",children:(0,E.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),qe=ke,_e=R=>(0,E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:[(0,E.jsx)("g",{clipPath:"url(#IndentIncrease_svg__a)",children:(0,E.jsx)("path",{fill:"#32324D",d:"M1 1.8h22v2.4H1V1.8Zm0 18h22v2.4H1v-2.4Zm9.8-6H23v2.4H10.8v-2.4Zm0-6H23v2.4H10.8V7.8Zm-5 4.2L1 16.2V7.8L5.9 12Z"})}),(0,E.jsx)("defs",{children:(0,E.jsx)("clipPath",{id:"IndentIncrease_svg__a",children:(0,E.jsx)("path",{fill:"#fff",d:"M0 0h24v24H0z"})})})]}),et=_e;var tt=e(68573),nt=e(28077),ot=e(55086),lt=e(33863),at=e(49231),st=e(19517);const rt=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M7.1 5a.573.573 0 0 0 0 1.145h9.744a.573.573 0 0 0 0-1.145H7.1Zm10.3 2.354a1.6 1.6 0 0 1 1.6 1.6v8.7a1.6 1.6 0 0 1-1.6 1.6H6.6a1.6 1.6 0 0 1-1.6-1.6V8.963c0-.884.716-1.609 1.6-1.609h10.8Zm-9.834 9.47h9.123l-1.996-2.04-1.14 1.165-2.566-2.622-3.421 3.496Zm7.127-4.078c-.798 0-1.425-.641-1.425-1.457 0-.816.627-1.457 1.425-1.457.799 0 1.426.641 1.426 1.457 0 .816-.627 1.457-1.426 1.457Z",clipRule:"evenodd"})}),dt=rt;var it=e(57422),ct=e(19224),ut=e(45287),ht=e(33999);const ft=R=>(0,E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:[(0,E.jsx)("path",{fill:"#212134",d:"M17.756 5.748a3.416 3.416 0 0 0-4.747.467L12.01 7.41a.852.852 0 0 0 1.308 1.092l1-1.195a1.7 1.7 0 0 1 2.43-.18 1.735 1.735 0 0 1 .141 2.394l-2.077 2.486-.019.022a1.697 1.697 0 0 1-2.522.043.852.852 0 0 0-1.248 1.162 3.405 3.405 0 0 0 5.1-.137l2.071-2.48a3.502 3.502 0 0 0 .79-2.572 3.345 3.345 0 0 0-1.228-2.298Z"}),(0,E.jsx)("path",{fill:"#212134",d:"m11.622 14.956-.893 1.069a1.735 1.735 0 0 1-2.381.286 1.7 1.7 0 0 1-.255-2.423l2.113-2.529.016-.017a1.692 1.692 0 0 1 2.552-.012.852.852 0 0 0 .999.205.841.841 0 0 0 .284-.22l.01-.012a.84.84 0 0 0-.014-1.1 3.4 3.4 0 0 0-5.16.07l-2.108 2.522a3.417 3.417 0 0 0 .385 4.754 3.346 3.346 0 0 0 2.48.8 3.501 3.501 0 0 0 2.39-1.234l.89-1.066a.852.852 0 1 0-1.308-1.093Z"})]}),gt=ft;var mt=e(2511),vt=e(64518),yt=e(35575),xt=e(85068);const pt=R=>(0,E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 20",...R,children:[(0,E.jsx)("path",{fill:"#32324D",d:"M0 .8A.8.8 0 0 1 .8 0h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V.8Z"}),(0,E.jsx)("path",{fill:"#32324D",d:"M1.922 5.991C.197 4.675 0 4.252 0 3.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 16H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 19.529.537 20 1.2 20h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,E.jsx)("path",{fill:"#32324D",d:"M0 7.555v10.972h24V7.554c-2.633 1.95-8.367 6.113-9.96 7.165-1.595 1.053-3.352.439-4.032 0L0 7.555Z"})]}),Tt=pt;var bt=e(98860),jt=e(77543),Mt=e(84410),St=e(9148),Et=e(24804);const Zt=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",d:"M8 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8 11.7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v.6a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.6ZM8.5 14.401a.5.5 0 0 0-.5.5v.6a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-.6a.5.5 0 0 0-.5-.5h-7Z"})}),Ct=Zt;var Rt=e(4452),Dt=e(4181),wt=e(46361);const Lt=R=>(0,E.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:[(0,E.jsx)("circle",{cx:12,cy:12,r:11.5,stroke:"#C0C0CF"}),(0,E.jsx)("rect",{width:10,height:2,x:7,y:11,fill:"#4945FF",rx:1})]}),Ot=Lt;var Pt=e(20244),It=e(27449),At=e(93703);const Bt=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",d:"M11 11V5.828L9.172 7.657 7.757 6.243 12 2l4.243 4.243-1.415 1.414L13 5.828V11h5.172l-1.829-1.828 1.414-1.415L22 12l-4.243 4.243-1.414-1.415L18.172 13H13v5.172l1.828-1.829 1.415 1.414L12 22l-4.243-4.243 1.415-1.414L11 18.172V13H5.828l1.829 1.828-1.414 1.415L2 12l4.243-4.243 1.414 1.415L5.828 11H11Z"})}),$t=Bt;var Nt=e(69542),Ft=e(96433),Ht=e(57312),zt=e(41681),Ut=e(4026),Kt=e(95899);const Wt=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M19 8.889a.86.86 0 0 1-.26.625l-6.125 6.222A.834.834 0 0 1 12 16a.834.834 0 0 1-.615-.264L5.26 9.514A.861.861 0 0 1 5 8.889c0-.24.087-.45.26-.625A.834.834 0 0 1 5.875 8h12.25c.237 0 .442.088.615.264a.86.86 0 0 1 .26.625Z",clipRule:"evenodd"})}),Gt=Wt,Vt=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"M5 15.111c0-.24.087-.449.26-.625l6.125-6.222A.834.834 0 0 1 12 8c.237 0 .442.088.615.264l6.125 6.222a.86.86 0 0 1 .26.625.86.86 0 0 1-.26.625.834.834 0 0 1-.615.264H5.875a.835.835 0 0 1-.615-.264.86.86 0 0 1-.26-.625Z",clipRule:"evenodd"})}),Yt=Vt;var Qt=e(71891),Jt=e(10386),Xt=e(78971),kt=e(81126),qt=e(36670),_t=e(78870),e0=e(97545),t0=e(38828),n0=e(66570),o0=e(9459),l0=e(75546),a0=e(85362),s0=e(12951),r0=e(12978),d0=e(59533),i0=e(24007),c0=e(32672),u0=e(54535),h0=e(44437);const f0=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#212134",d:"M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311-1.803-.167-3.225-1.648-3.225-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179Zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.93.311C4.592 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179h-.001Z"})}),g0=f0;var m0=e(93768),v0=e(61378),y0=e(45311),x0=e(56886),p0=e(3841),T0=e(11748),b0=e(21679),j0=e(76891),M0=e(21818),S0=e(34759);const E0=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...R,children:(0,E.jsx)("path",{fill:"#32324D",fillRule:"evenodd",d:"m23.813 20.163-5.3-5.367a9.792 9.792 0 0 0 1.312-4.867C19.825 4.455 15.375 0 9.913 0 4.45 0 0 4.455 0 9.929c0 5.473 4.45 9.928 9.912 9.928a9.757 9.757 0 0 0 5.007-1.4l5.275 5.35a.634.634 0 0 0 .913 0l2.706-2.737a.641.641 0 0 0 0-.907ZM9.91 3.867c3.338 0 6.05 2.718 6.05 6.061s-2.712 6.061-6.05 6.061c-3.337 0-6.05-2.718-6.05-6.06 0-3.344 2.713-6.062 6.05-6.062Z",clipRule:"evenodd"})}),Z0=E0;var C0=e(92726),R0=e(33286),D0=e(95793),w0=e(47904),L0=e(48412),O0=e(28248),P0=e(82721);const I0=R=>(0,E.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 40 40",...R,children:(0,E.jsx)("path",{fill:"#4945FF",d:"M30.113 7.768a16.772 16.772 0 0 0-6.635-3.317c-2.505-.634-5.23-.598-7.854.096-.313.065-.6.166-.879.265l-.123.042c-.102.035-.203.07-.308.108a7.57 7.57 0 0 0-.655.247c-.164.078-.325.148-.488.221-.44.198-.893.403-1.29.657-1.314.71-2.42 1.674-3.247 2.448-1.922 1.931-3.355 4.359-4.035 6.832l-.093.37c-.131.516-.27 1.049-.322 1.572-.012.107-.033.214-.047.318-.032.218-.065.431-.078.664l-.051 1.097c-.005.11-.011.225-.006.358l.073 1.44.148.993c.041.283.085.581.164.85.553 2.391 1.627 4.609 3.103 6.41a15.664 15.664 0 0 0 4.951 3.997l.969.468c.092.04.168.07.242.096l.116.04c.152.053.295.106.444.16.276.106.546.206.843.295l1.26.32c.265.052.531.091.79.128.135.021.27.038.429.065 1.532.166 2.95.147 4.087-.058.092-.016.182-.026.272-.04.183-.025.368-.048.531-.092l1.284-.319 1.307-.456a.502.502 0 0 0-.318-.951l-1.277.396-1.246.257c-.135.026-.277.04-.422.056-.1.004-.196.02-.305.03-1.048.148-2.342.115-3.728-.089-.137-.024-.272-.05-.405-.074-.24-.046-.477-.09-.695-.142l-1.16-.338c-.248-.087-.497-.19-.75-.292a8.766 8.766 0 0 0-.433-.177l-.116-.05c-.055-.022-.117-.045-.145-.06l-.895-.474a14.106 14.106 0 0 1-4.296-3.739c-1.24-1.637-2.115-3.632-2.527-5.76-.42-2.045-.27-4.382.422-6.577.633-2.004 1.756-3.82 3.34-5.404.103-.104.207-.208.295-.29.778-.67 1.714-1.42 2.822-1.962.312-.184.66-.327 1.027-.475.175-.071.346-.142.488-.203.158-.058.327-.112.49-.162.107-.03.213-.065.306-.091l.123-.042c.227-.07.436-.137.668-.174l.836-.17c.163-.03.332-.046.498-.065.111-.011.215-.016.336-.032.384-.06.77-.062 1.185-.063.147 0 .3.001.465-.008.14-.006.292.013.455.03.11.01.216.022.297.027.109.01.21.022.322.03.166.01.318.025.458.051.187.041.377.075.57.106.346.063.673.126.989.238a13.246 13.246 0 0 1 5.263 2.872 12.87 12.87 0 0 1 3.122 4.294c.628 1.403 1.014 2.895 1.104 4.328.017.201.02.398.021.592-.002.126.003.25.006.356a1.64 1.64 0 0 0 .003.187c.005.086.005.171 0 .242l-.038.448c-.014.119-.02.23-.03.34a4.2 4.2 0 0 1-.043.466l-.145.787c-.042.298-.121.554-.194.793-.035.13-.078.254-.096.348-.026.074-.042.143-.061.209-.021.078-.037.151-.078.244l-.545 1.354a2.02 2.02 0 0 0 1.212 2.57 2.002 2.002 0 0 0 2.1-.459c.208-.208.366-.456.464-.735l.465-1.298c.045-.121.092-.287.134-.457l.059-.235c.028-.118.06-.242.096-.377.103-.388.22-.833.268-1.281l.132-.955c.028-.233.036-.47.045-.711.005-.114.009-.233.018-.36l.029-.567c0-.128-.01-.27-.018-.406l-.008-.21a18.315 18.315 0 0 1-.017-.387 7.82 7.82 0 0 0-.067-.832c-.194-1.838-.752-3.734-1.623-5.499a16.385 16.385 0 0 0-4.154-5.293Z"})}),A0=I0;var B0=e(94885),$0=e(71125),N0=e(54770),F0=e(34012),H0=e(40814),z0=e(1776),U0=e(91955),K0=e(59424),W0=e(80267),G0=e(8127),V0=e(45057),Y0=e(34263),Q0=e(52551),J0=e(54969),X0=e(52276),k0=e(51661),q0=e(76838),_0=e(65395),e1=e(62301),t1=e(72551),n1=e(26966),o1=e(48216),l1=e(32525)}}]);
