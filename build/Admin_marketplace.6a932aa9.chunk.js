"use strict";(self.webpackChunkback=self.webpackChunkback||[]).push([[5516],{63109:(C,v,t)=>{t.d(v,{Z:()=>c});var e=t(67294);const c=(f,k)=>{const[d,h]=(0,e.useState)(f);return(0,e.useEffect)(()=>{const a=setTimeout(()=>{h(f)},k);return()=>{clearTimeout(a)}},[f,k]),d}},11345:(C,v,t)=>{t.r(v),t.d(v,{MarketPlacePage:()=>be,default:()=>vt});var e=t(67294),P=t(45349),c=t(57713),f=t(26789),k=t(20107),d=t(75878),h=t(61738),a=t(50781),g=t(96073),$=t(54375),p=t(60797),Z=t(64593),R=t(86896),N=t(86706),H=t(63109);const Q=()=>{const s=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[r,l]=(0,e.useState)(s),i=()=>l(!0),o=()=>l(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),r};var Y=t(36364),O=t(80907),V=t(80631),j=t(91393);const Ce=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,p.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>r("didMissMarketplacePlugin")},e.createElement(p.Y_,{title:s({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:s({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(V.Z,null),iconBackground:"alternative100",endAction:e.createElement(O.J,{as:j.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=t(14020),J=t(19442),Te=t(15800),$e=t(36002),De=t(45697),n=t.n(De),A=t(88972),Oe=t(92545),oe=t(50614),le=t(473);const ie=({message:s,value:r,onChange:l,possibleFilters:i,onClear:o,customizeContent:E})=>{const u=(m,y)=>`${m} (${y})`;return e.createElement(oe.P,{"data-testid":`${s}-button`,label:s,placeholder:s,size:"M",onChange:l,onClear:o,value:r,customizeContent:E,multi:!0},Object.entries(i).map(([m,y])=>e.createElement(le.W,{"data-testid":`${m}-${y}`,key:m,value:m},u(m,y))))};ie.propTypes={message:n().string.isRequired,value:n().array.isRequired,onChange:n().func.isRequired,possibleFilters:n().object.isRequired,onClear:n().func.isRequired,customizeContent:n().func.isRequired};const ce=ie,de=({source:s,onToggle:r,query:l,npmPackageType:i,possibleCategories:o,possibleCollections:E,handleSelectChange:u,handleSelectClear:m})=>{const{formatMessage:y}=(0,R.Z)();return e.createElement(Oe.J2,{source:s,onDismiss:r,padding:3,spacing:4},e.createElement(Le,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ce,{message:y({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:l?.collections||[],onChange:b=>{u({collections:b})},onClear:()=>m("collections"),possibleFilters:E,customizeContent:b=>y({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:b.length})}),i==="plugin"&&e.createElement(ce,{message:y({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:l?.categories||[],onChange:b=>{u({categories:b})},onClear:()=>m("categories"),possibleFilters:o,customizeContent:b=>y({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:b.length}),name:"categories"})))};de.propTypes={onToggle:n().func.isRequired,source:n().shape({current:n().instanceOf(Element)}).isRequired,query:n().object.isRequired,npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Be=de,Le=(0,A.default)(d.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,X=({name:s,handleRemove:r})=>e.createElement(a.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(Te.Z,null),onClick:r},s)),Ie=(0,A.default)(J.z)`
  height: ${({theme:s})=>s.sizes.input.S};
`,ue=({possibleCollections:s,possibleCategories:r,npmPackageType:l,query:i,handleSelectClear:o,handleSelectChange:E})=>{const[u,m]=(0,e.useState)(!1),y=(0,e.useRef)(),{formatMessage:b}=(0,R.Z)(),x=()=>m(M=>!M),S=(M,T)=>{const L={[T]:i[T].filter(w=>w!==M)};E(L)};return e.createElement(e.Fragment,null,e.createElement(a.x,{paddingTop:1,paddingBottom:1},e.createElement(Ie,{variant:"tertiary",ref:y,"data-testid":"filters-button",startIcon:e.createElement($e.Z,null),onClick:x,size:"S"},b({id:"app.utils.filters",defaultMessage:"Filters"})),u&&e.createElement(Be,{onToggle:x,source:y,query:i,handleSelectClear:o,handleSelectChange:E,possibleCollections:s,possibleCategories:r,npmPackageType:l})),i.collections?.map(M=>e.createElement(X,{name:M,key:M,handleRemove:()=>S(M,"collections")})),l==="plugin"&&i.categories?.map(M=>e.createElement(X,{name:M,key:M,handleRemove:()=>S(M,"categories")})))};X.propTypes={name:n().string.isRequired,handleRemove:n().func.isRequired},ue.propTypes={npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,query:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Ae=ue;var Ze=t(28809),we=t(9370),je=t(61585),B=t(78549),Ne=t(58252);const Ue=A.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:s})=>s.spaces[4]};
`,Ve=(0,A.default)(a.x)`
  background: ${({theme:s})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${s.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Fe=()=>e.createElement(Ue,null,Array(12).fill(null).map((s,r)=>e.createElement(Ve,{key:`empty-plugin-card-${r}`,height:"234px",hasRadius:!0}))),ge=({content:s})=>e.createElement(a.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Fe,null),e.createElement(a.x,{position:"absolute",top:11,width:"100%"},e.createElement(d.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(O.J,{as:Ne.Z,color:"",width:"160px",height:"88px"}),e.createElement(a.x,{paddingTop:6},e.createElement(B.Z,{variant:"delta",as:"p",textColor:"neutral600"},s)))));ge.propTypes={content:n().string.isRequired};const We=ge;var q=t(74273),pe=t(94101),Ge=t(60324),Ke=t(23450),ze=t.n(Ke),He=t(61473),Qe=t(8675),me=t(70780),Ye=t(81249),fe=t.n(Ye);const F=({description:s,installMessage:r,disabled:l,handleCopy:i,pluginName:o})=>e.createElement(q.u,{"data-testid":`tooltip-${o}`,description:s},e.createElement(a.x,null,e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",disabled:l,onClick:i},r))),_=({strapiPeerDepVersion:s,strapiAppVersion:r,handleCopy:l,pluginName:i})=>{const{formatMessage:o}=(0,R.Z)(),E=fe().validRange(s),u=fe().satisfies(r,E),m=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(r){if(!E)return e.createElement(F,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:r}),handleCopy:l});if(!u)return e.createElement(F,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:r,versionRange:E}),disabled:!0})}return e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",onClick:l},m)};F.defaultProps={disabled:!1,handleCopy:null},F.propTypes={description:n().string.isRequired,installMessage:n().string.isRequired,disabled:n().bool,handleCopy:n().func,pluginName:n().string.isRequired},_.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},_.propTypes={strapiAppVersion:n().string,strapiPeerDepVersion:n().string,handleCopy:n().func.isRequired,pluginName:n().string.isRequired};const Je=_,ee=({isInstalled:s,isInDevelopmentMode:r,commandToCopy:l,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:E})=>{const u=(0,p.lm)(),{formatMessage:m}=(0,R.Z)(),{trackUsage:y}=(0,p.rS)(),{copy:b}=(0,p.VP)(),x=async()=>{await b(l)&&(y("willInstallPlugin"),u({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return s?e.createElement(a.x,{paddingLeft:4},e.createElement(O.J,{as:Qe.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(B.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},m({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):r?e.createElement(Je,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:x,pluginName:E}):null};ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={isInstalled:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,commandToCopy:n().string.isRequired,strapiAppVersion:n().string,strapiPeerDepVersion:n().string,pluginName:n().string.isRequired};const Xe=ee;var qe=t(81984),_e=t(86820),et=t(71125),tt=t(52794);const at=(0,A.default)(qe.i)`
  width: ${(0,p.Q1)(12)};
  transform: rotate(90deg);
`,te=({githubStars:s,npmDownloads:r,npmPackageType:l})=>{const{formatMessage:i}=(0,R.Z)();return e.createElement(d.k,{gap:1},!!s&&e.createElement(e.Fragment,null,e.createElement(O.J,{as:_e.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement(O.J,{as:et.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:s,package:l})},e.createElement(B.Z,{variant:"pi",textColor:"neutral800"},s)),e.createElement(at,{unsetMargin:!1,background:"neutral200"})),e.createElement(O.J,{as:tt.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:r,package:l})},e.createElement(B.Z,{variant:"pi",textColor:"neutral800"},r)))};te.defaultProps={githubStars:0,npmDownloads:0},te.propTypes={githubStars:n().number,npmDownloads:n().number,npmPackageType:n().string.isRequired};const nt=te,st=(0,A.default)(B.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ae=({npmPackage:s,isInstalled:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:E})=>{const{attributes:u}=s,{formatMessage:m}=(0,R.Z)(),{trackUsage:y}=(0,p.rS)(),b=l?`yarn add ${u.npmPackageName}`:`npm install ${u.npmPackageName}`,x=m({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),S=`https://market.strapi.io/${ze().plural(o)}/${u.slug}`;return e.createElement(d.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(a.x,null,e.createElement(d.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(a.x,{as:"img",src:u.logo.url,alt:`${u.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(nt,{githubStars:u.githubStars,npmDownloads:u.npmDownloads,npmPackageType:o})),e.createElement(a.x,{paddingTop:4},e.createElement(B.Z,{as:"h3",variant:"delta"},e.createElement(d.k,{alignItems:"center"},u.name,u.validated&&!u.madeByStrapi&&e.createElement(q.u,{description:m({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(d.k,null,e.createElement(O.J,{as:Ge.Z,marginLeft:2,color:"success600"}))),u.madeByStrapi&&e.createElement(q.u,{description:x},e.createElement(d.k,null,e.createElement(a.x,{as:"img",src:He,alt:x,marginLeft:1,width:6,height:"auto"})))))),e.createElement(a.x,{paddingTop:2},e.createElement(st,{as:"p",variant:"omega",textColor:"neutral600"},u.description))),e.createElement(d.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(pe.Q,{size:"S",href:S,isExternal:!0,endIcon:e.createElement(j.Z,null),"aria-label":m({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:u.name}),variant:"tertiary",onClick:()=>y("didPluginLearnMore")},m({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Xe,{isInstalled:r,isInDevelopmentMode:i,commandToCopy:b,strapiAppVersion:E,strapiPeerDepVersion:u.strapiVersion,pluginName:u.name})))};ae.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ae.propTypes={npmPackage:n().shape({id:n().string.isRequired,attributes:n().shape({name:n().string.isRequired,description:n().string.isRequired,slug:n().string.isRequired,npmPackageName:n().string.isRequired,npmPackageUrl:n().string.isRequired,repositoryUrl:n().string.isRequired,logo:n().object.isRequired,developerName:n().string.isRequired,validated:n().bool.isRequired,madeByStrapi:n().bool.isRequired,strapiCompatibility:n().oneOf(["v3","v4"]),strapiVersion:n().string,githubStars:n().number,npmDownloads:n().number}).isRequired}).isRequired,isInstalled:n().bool.isRequired,useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool,npmPackageType:n().string.isRequired,strapiAppVersion:n().string};const rt=ae,ne=({status:s,npmPackages:r,installedPackageNames:l,useYarn:i,isInDevelopmentMode:o,npmPackageType:E,strapiAppVersion:u,debouncedSearch:m})=>{const{formatMessage:y}=(0,R.Z)();if(s==="error")return e.createElement(d.k,{paddingTop:8},e.createElement(p.Hn,null));if(s==="loading")return e.createElement(d.k,{justifyContent:"center",paddingTop:8},e.createElement(Ze.a,null,"Loading content..."));const b=y({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:m});return r.length===0?e.createElement(We,{content:b}):e.createElement(we.r,{gap:4,"data-testid":"marketplace-results"},r.map(x=>e.createElement(je.P,{col:4,s:6,xs:12,style:{height:"100%"},key:x.id},e.createElement(rt,{npmPackage:x,isInstalled:l.includes(x.attributes.npmPackageName),useYarn:i,isInDevelopmentMode:o,npmPackageType:E,strapiAppVersion:u}))))};ne.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},ne.propTypes={status:n().string.isRequired,npmPackages:n().array,installedPackageNames:n().arrayOf(n().string),useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,npmPackageType:n().string.isRequired,strapiAppVersion:n().string,debouncedSearch:n().string};const Ee=ne,Pe=({pagination:s})=>e.createElement(a.x,{paddingTop:4},e.createElement(d.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(p.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(p.tU,{pagination:s})));Pe.propTypes={pagination:n().shape({page:n().number.isRequired,pageCount:n().number.isRequired,pageSize:n().number.isRequired,total:n().number.isRequired}).isRequired};const ot=Pe,lt=t.p+"9d5d788027e86620c234.svg";var it=t(79371),ct=t(76838);const se=({isOnline:s,npmPackageType:r})=>{const{formatMessage:l}=(0,R.Z)(),{trackUsage:i}=(0,p.rS)(),o=r==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(it.T,{title:l({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:l({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:s&&e.createElement(pe.Q,{startIcon:e.createElement(ct.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${r}`,onClick:()=>i(o),isExternal:!0},l({id:`admin.pages.MarketPlacePage.submit.${r}.link`,defaultMessage:`Submit ${r}`}))})},he=se;se.defaultProps={npmPackageType:"plugin"},se.propTypes={isOnline:n().bool.isRequired,npmPackageType:n().string};const dt=()=>{const{formatMessage:s}=(0,R.Z)();return e.createElement(P.A,null,e.createElement(c.o,null,e.createElement(he,{isOnline:!1}),e.createElement(d.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,p.Q1)(120)},e.createElement(a.x,{paddingBottom:2},e.createElement(B.Z,{textColor:"neutral700",variant:"alpha"},s({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(a.x,{paddingBottom:6},e.createElement(B.Z,{textColor:"neutral700",variant:"epsilon"},s({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:lt,alt:"offline",style:{width:"88px",height:"88px"}}))))},ut=(0,A.default)(a.x)`
  font-weight: ${({theme:s})=>s.fontWeights.semiBold};

  span {
    font-size: ${({theme:s})=>s.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,ve=({sortQuery:s,handleSelectChange:r})=>{const{formatMessage:l}=(0,R.Z)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(ut,null,e.createElement(oe.P,{size:"S",id:"sort-by-select",value:s,customizeContent:()=>l(i[s].selected),onChange:o=>{r({sort:o})},label:l({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(i).map(([o,E])=>e.createElement(le.W,{key:o,value:o},l(E.option)))))};ve.propTypes={sortQuery:n().string.isRequired,handleSelectChange:n().func.isRequired};const gt=ve;var pt=t(46683),mt=t(80129),W=t.n(mt),Me=t(88767);const ye="https://market-api.strapi.io",ft=(s,r={})=>{const l=(0,p.lm)();return(0,Me.useQuery)(["marketplace","plugins",r],async()=>{try{const i=W().stringify(W().parse(r)),o=await fetch(`${ye}/plugins?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace plugins.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Et=(s,r={})=>{const l=(0,p.lm)();return(0,Me.useQuery)(["marketplace","providers",r],async()=>{try{const i=W().stringify(W().parse(r)),o=await fetch(`${ye}/providers?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace providers.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Pt({npmPackageType:s,debouncedSearch:r,query:l,tabQuery:i}){const{notifyStatus:o}=(0,pt.G)(),{formatMessage:E}=(0,R.Z)(),u=E({id:"global.marketplace",defaultMessage:"Marketplace"}),m=()=>{o(E({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:u}))},y={page:l?.page||1,pageSize:l?.pageSize||24},{data:b,status:x}=ft(m,{...i.plugin,pagination:y,search:r}),{data:S,status:M}=Et(m,{...i.provider,pagination:y,search:r}),T=s==="plugin"?b:S,L=s==="plugin"?x:M,[w,G]=(0,e.useState)({}),[K,z]=(0,e.useState)({});(0,e.useEffect)(()=>{L==="success"&&G(T.meta.collections),x==="success"&&z(b.meta.categories)},[b?.meta.categories,x,T?.meta.collections,L]);const{pagination:re}=L==="success"?T.meta:{};return{pluginsResponse:b,providersResponse:S,pluginsStatus:x,providersStatus:M,possibleCollections:w,possibleCategories:K,pagination:re}}const ht=Pt,be=()=>{const{formatMessage:s}=(0,R.Z)(),{trackUsage:r}=(0,p.rS)(),l=(0,e.useRef)(r),i=(0,p.lm)(),[{query:o},E]=(0,p.Kx)(),u=(0,H.Z)(o?.search,500)||"",{autoReload:m,dependencies:y,useYarn:b,strapiVersion:x}=(0,p.L7)(),S=Q(),M=o?.npmPackageType||"plugin",[T,L]=(0,e.useState)({plugin:M==="plugin"?{...o}:{},provider:M==="provider"?{...o}:{}});(0,p.go)(),(0,e.useEffect)(()=>{l.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||i({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[i,m]);const{pluginsResponse:w,providersResponse:G,pluginsStatus:K,providersStatus:z,possibleCollections:re,possibleCategories:Mt,pagination:ke}=ht({npmPackageType:M,debouncedSearch:u,query:o,tabQuery:T});if(!S)return e.createElement(dt,null);const yt=I=>{const D=I===0?"plugin":"provider",kt=T[D]&&Object.keys(T[D]).length;E(kt?{...T[D],search:o?.search||"",npmPackageType:D,page:1}:{npmPackageType:D,collections:[],categories:[],sort:"name:asc",page:1,search:o?.search||""})},xe=I=>{E({...I,page:1}),L(D=>({...D,[M]:{...D[M],...I}}))},bt=I=>{E({[I]:[],page:null},"remove"),L(D=>({...D,[M]:{}}))},Re=Object.keys(y);return e.createElement(P.A,null,e.createElement(c.o,null,e.createElement(Z.q,{title:s({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(he,{isOnline:S,npmPackageType:M}),e.createElement(f.D,null,e.createElement(k.v,{label:s({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(M),onTabChange:yt},e.createElement(d.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(h.m,null,e.createElement(h.O,null,s({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",K==="success"?`(${w.meta.pagination.total})`:"..."),e.createElement(h.O,null,s({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",z==="success"?`(${G.meta.pagination.total})`:"...")),e.createElement(a.x,{width:"25%"},e.createElement(g.w,{name:"searchbar",onClear:()=>E({search:"",page:1}),value:o?.search,onChange:I=>E({search:I.target.value,page:1}),clearLabel:s({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(d.k,{paddingBottom:4,gap:2},e.createElement(gt,{sortQuery:o?.sort||"name:asc",handleSelectChange:xe}),e.createElement(Ae,{npmPackageType:M,possibleCollections:re,possibleCategories:Mt,query:o||{},handleSelectChange:xe,handleSelectClear:bt})),e.createElement($.n,null,e.createElement($.x,null,e.createElement(Ee,{npmPackages:w?.data,status:K,installedPackageNames:Re,useYarn:b,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:x,debouncedSearch:u})),e.createElement($.x,null,e.createElement(Ee,{npmPackages:G?.data,status:z,installedPackageNames:Re,useYarn:b,isInDevelopmentMode:m,npmPackageType:"provider",debouncedSearch:u})))),ke&&e.createElement(ot,{pagination:ke}),e.createElement(a.x,{paddingTop:8},e.createElement(Ce,null)))))},vt=()=>{const s=(0,N.v9)(Y._);return e.createElement(p.O4,{permissions:s.marketplace.main},e.createElement(be,null))}},45349:(C,v,t)=>{t.d(v,{A:()=>d});var e=t(85893),P=t(88972),c=t(50781);const f=(0,P.default)(c.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:h})=>h?"auto 1fr":"1fr"};
`,k=(0,P.default)(c.x)`
  overflow-x: hidden;
`,d=({sideNav:h,children:a})=>(0,e.jsxs)(f,{hasSideNav:!!h,children:[h,(0,e.jsx)(k,{paddingBottom:10,children:a})]})},86820:(C,v,t)=>{t.d(v,{Z:()=>c});var e=t(85893);const P=f=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...f,children:(0,e.jsx)("path",{fill:"#161614",d:"M12 0C5.373 0 0 5.501 0 12.288c0 5.43 3.438 10.035 8.206 11.66.6.114.82-.266.82-.59 0-.294-.01-1.262-.016-2.289-3.338.744-4.043-1.45-4.043-1.45-.546-1.42-1.332-1.797-1.332-1.797-1.089-.763.082-.747.082-.747 1.205.086 1.84 1.266 1.84 1.266 1.07 1.878 2.807 1.335 3.491 1.021.108-.794.42-1.336.762-1.643-2.665-.31-5.467-1.364-5.467-6.073 0-1.341.469-2.437 1.236-3.298-.124-.31-.535-1.56.117-3.252 0 0 1.007-.33 3.3 1.26A11.25 11.25 0 0 1 12 5.942c1.02.005 2.047.141 3.006.414 2.29-1.59 3.297-1.26 3.297-1.26.653 1.693.242 2.943.118 3.252.77.86 1.235 1.957 1.235 3.298 0 4.72-2.808 5.76-5.48 6.063.43.382.814 1.13.814 2.276 0 1.644-.014 2.967-.014 3.372 0 .327.216.71.825.59C20.566 22.32 24 17.715 24 12.288 24 5.501 18.627 0 12 0Z"})}),c=P},80631:(C,v,t)=>{t.d(v,{Z:()=>c});var e=t(85893);const P=f=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...f,children:[(0,e.jsx)("path",{fill:"#AC73E6",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),(0,e.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M15.027 13.839c-3.19-.836-6.305-1.064-10.18-.608-1.215.152-1.063 1.975.076 2.203.304.836.456 2.355.912 3.267.987 2.279 5.622 1.975 7.369.835 1.14-.683 1.443-2.279 1.9-3.494.227-.684 1.595-.684 1.822 0 .38 1.215.76 2.81 1.9 3.494 1.747 1.14 6.381 1.444 7.369-.835.456-.912.607-2.431.911-3.267 1.14-.228 1.216-2.051.076-2.203-3.874-.456-6.989-.228-10.18.608-.455.075-1.519.075-1.975 0Z",clipRule:"evenodd"})]}),c=P},71125:(C,v,t)=>{t.d(v,{Z:()=>c});var e=t(85893);const P=f=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...f,children:(0,e.jsx)("path",{fill:"#212134",d:"m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"})}),c=P},76838:(C,v,t)=>{t.d(v,{Z:()=>c});var e=t(85893);const P=f=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...f,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 0 1-.14-.343L11.858.058a.2.2 0 0 1 .282 0l9.513 9.4a.2.2 0 0 1-.14.343H13.57v8.47ZM2.2 21.095a.2.2 0 0 0-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2v-2.424a.2.2 0 0 0-.2-.2H2.2Z",clipRule:"evenodd"})}),c=P},20501:(C,v,t)=>{t.d(v,{G:()=>d,Y:()=>h});var e=t(85893),P=t(67294),c=t(88972),f=t(66362),k=t(96987);const d=(0,c.default)(k.k)`
  > svg {
    height: ${({theme:a})=>a.spaces[3]};
    width: ${({theme:a})=>a.spaces[3]};

    > g,
    path {
      fill: ${({theme:a})=>a.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${f.BF}
`,h=P.forwardRef(({disabled:a,children:g,background:$="neutral0",...p},Z)=>(0,e.jsx)(d,{ref:Z,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:$,borderColor:"neutral200",cursor:"pointer",...p,children:g}));h.displayName="BaseButton"},4071:(C,v,t)=>{t.d(v,{G$:()=>P,Gt:()=>p,MG:()=>e,MR:()=>h,T:()=>d,TP:()=>c,Vb:()=>k,Vv:()=>g,ZC:()=>$,gK:()=>f,wG:()=>a});const e="success-light",P="danger-light",c="default",f="tertiary",k="secondary",d="danger",h="success",a="ghost",g=[e,P],$=[c,f,k,d,h,a,...g],p=["S","M","L"]},62485:(C,v,t)=>{t.d(v,{PD:()=>h,sg:()=>f,tB:()=>d,yP:()=>k});var e=t(4071),P=t(10574);const c=a=>a===e.MG||a===e.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===e.gK?"neutral":a===e.TP||a===e.Vb||e.ZC.every(g=>g!==a)?"primary":`${a}`,f=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${P.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,k=({theme:a,variant:g})=>[...e.Vv,e.Vb].includes(g)?`
      background-color: ${a.colors.neutral0};
    `:g===e.gK?`
      background-color: ${a.colors.neutral100};
    `:g===e.wG?`
      background-color: ${a.colors.neutral100};
    `:g===e.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${c(g)}500`]};
    background: ${a.colors[`${c(g)}500`]};
  `,d=({theme:a,variant:g})=>[...e.Vv,e.Vb].includes(g)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${c(g)}600`]};
      ${P.Z} {
        color: ${a.colors[`${c(g)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${c(g)}600`]};
        }
      }
    `:g===e.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${c(g)}600`]};
    background: ${a.colors[`${c(g)}600`]};
  `,h=({theme:a,variant:g})=>{switch(g){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${a.colors[`${c(g)}200`]};
          background: ${a.colors[`${c(g)}100`]};
          ${P.Z} {
            color: ${a.colors[`${c(g)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${c(g)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${P.Z} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${P.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${a.colors[`${c(g)}600`]};
          background: ${a.colors[`${c(g)}600`]};
          ${P.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},66362:(C,v,t)=>{t.d(v,{BF:()=>f,k3:()=>c});var e=t(88972);const P=k=>({theme:d,size:h})=>d.sizes[k][h],c=(k="&")=>({theme:d,hasError:h=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${k}:focus-within {
      border: 1px solid ${h?d.colors.danger600:d.colors.primary600};
      box-shadow: ${h?d.colors.danger600:d.colors.primary600} 0px 0px 0px 2px;
    }
  `,f=({theme:k})=>(0,e.css)`
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
      border: 2px solid ${k.colors.primary600};
    }
  }
`},94101:(C,v,t)=>{t.d(v,{Q:()=>$});var e=t(85893),P=t(67294),c=t(88972),f=t(62485),k=t(20501),d=t(53342),h=t(96987),a=t(10574);const g=(0,c.default)(k.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${f.sg}
    &:active {
      ${f.sg}
    }
  }

  &:hover {
    ${f.yP}
  }

  &:active {
    ${f.tB}
  }

  ${f.PD}
`,$=P.forwardRef(({variant:p="default",startIcon:Z,endIcon:R,disabled:N=!1,children:H,size:U="S",as:Q=d.f,...Y},O)=>{const V=U==="S"?2:"10px",j=4;return(0,e.jsxs)(g,{ref:O,"aria-disabled":N,size:U,variant:p,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:V,paddingLeft:j,paddingRight:j,paddingTop:V,pointerEvents:N?"none":void 0,...Y,as:Q||d.f,children:[Z&&(0,e.jsx)(h.k,{"aria-hidden":!0,children:Z}),(0,e.jsx)(a.Z,{variant:U==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:H}),R&&(0,e.jsx)(h.k,{"aria-hidden":!0,children:R})]})});$.displayName="LinkButton"}}]);
