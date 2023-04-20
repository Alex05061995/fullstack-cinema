(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{37104:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/genre/edit/[id]",function(){return r(95602)}])},21124:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(85893),i=r(73025),s=r.n(i),l=r(41664),o=r.n(l),a=r(94184),c=r.n(a),u=r(11163);let d=e=>{let{item:{title:t,link:r}}=e,{asPath:i}=(0,u.useRouter)();return(0,n.jsx)("li",{children:(0,n.jsx)(o(),{legacyBehavior:!0,href:r,children:(0,n.jsx)("a",{className:c()({[s().active]:i===r}),children:t})})})};var m=r(89583);let _=[{title:"Statistics",link:(0,m.wk)()},{title:"Users",link:(0,m.A7)("users")},{title:"Movies",link:(0,m.A7)("movies")},{title:"Actors",link:(0,m.A7)("actors")},{title:"Genres",link:(0,m.A7)("genres")}],f=()=>(0,n.jsx)("nav",{className:s().nav,children:(0,n.jsx)("ul",{children:_.map(e=>(0,n.jsx)(d,{item:e},e.link))})});var p=f},48869:function(e,t,r){"use strict";var n=r(85893),i=r(94184),s=r.n(i),l=r(34359),o=r.n(l);let a=e=>{let{children:t,className:r,...i}=e;return(0,n.jsx)("button",{className:s()(o().button,r),...i,children:t})};t.Z=a},76376:function(e,t,r){"use strict";var n=r(85893),i=r(94184),s=r.n(i),l=r(67294),o=r(34359),a=r.n(o);let c=(0,l.forwardRef)((e,t)=>{var r;let{placeholder:i,error:l,type:o="text",style:c,...u}=e;return(0,n.jsxs)("div",{className:s()(a().common,a().field),style:c,children:[(0,n.jsxs)("label",{children:[(0,n.jsx)("span",{children:i}),(0,n.jsx)("input",{ref:t,type:o,...u})]}),l&&(0,n.jsx)("div",{className:a().error,children:null===(r=l.message)||void 0===r?void 0:r.toString()})]})});c.displayName="Field",t.Z=c},92811:function(e,t,r){"use strict";var n=r(85893),i=r(76376),s=r(59574),l=r.n(s);let o=e=>{let{generate:t,register:r,error:s}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(i.Z,{...r("slug",{required:"Slug is required!"}),placeholder:"Slug",error:s}),(0,n.jsx)("div",{className:l().badge,onClick:t,children:"generate"})]})};t.Z=o},40077:function(e,t,r){"use strict";var n=r(85893);let i=e=>{let{title:t,className:r}=e;return(0,n.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat((null==r?void 0:r.includes("xl"))?"":"text-3xl"," ").concat(r),children:t})};t.Z=i},45495:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var n=r(85893),i=r(9008),s=r.n(i),l=r(11163),o=r(40865);let a="Online cinema",c=e=>"".concat(e," | ").concat(a),u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e.replace(/<[^>]+>/g,"").replace(/&[^;]+>./g," ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g,"");return t&&(r=r.slice(0,t)+"..."),r};var d=r(83454);let m=e=>{let{title:t,description:r,image:i,children:m}=e,{asPath:_}=(0,l.useRouter)(),f="".concat(d.env.REACT_APP_URL).concat(_);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{itemProp:"headline",children:c(t)}),r?(0,n.jsxs)(s(),{children:[(0,n.jsx)("meta",{itemProp:"description",name:"description",content:u(r,152)}),(0,n.jsx)("link",{rel:"canonical",href:f}),(0,n.jsx)("meta",{property:"og:locale",content:"en"}),(0,n.jsx)("meta",{property:"og:title",content:c(t)}),(0,n.jsx)("meta",{property:"og:url",content:f}),(0,n.jsx)("meta",{property:"og:image",content:i||o.Z}),(0,n.jsx)("meta",{property:"og:site_name",content:a}),(0,n.jsx)("meta",{property:"og:description",content:u(r,197)})]}):(0,n.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]}),m]})};var _=m},96228:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});let n=e=>Object.keys(e)},85219:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});let n=e=>{let t="А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я".split("-"),r="A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-J-j-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-TS-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split("-"),n="";for(let i=0,s=e.length;i<s;i++){let s=e.charAt(i),l=t.indexOf(s);l>=0?n+=r[l]:n+=s}return n},i=e=>{let t=e.replace(/[\s]+/gi,"-");return(t=n(t)).replace(/[^0-9a-z_\-]+/gi,"").replace("---","-").replace("--","-").toLowerCase()}},95602:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(85893),i=r(5152),s=r.n(i),l=r(87536),o=r(1738),a=r(21124),c=r(48869),u=r(76376),d=r(92811),m=r(40077),_=r(4663);r(27025);var f=r(45495),p=r(85219),x=r(44053),h=r.n(x),g=r(89583),j=r(10538),v=r(96228),y=r(88116),F=r(11163),N=r(88767),w=r(16938);let b=e=>{let{push:t,query:r}=(0,F.useRouter)(),n=String(r.id),{isLoading:i}=(0,N.useQuery)(["genre",n],()=>j.c.getById(n),{onSuccess:t=>{let{data:r}=t;(0,v.R)(r).forEach(t=>{e(t,r[t])})},onError:e=>{(0,y._)(e,"Get genre")},enabled:!!r.id}),{mutateAsync:s}=(0,N.useMutation)("update genre",e=>j.c.update(n,e),{onError:e=>{(0,y._)(e,"Update genre")},onSuccess:()=>{w.Rt.success("Update genre","Update was successful"),t((0,g.A7)("genres"))}}),l=async e=>{await s(e)};return{onSubmit:l,isLoading:i}},S=()=>{let{handleSubmit:e,register:t,formState:{errors:i},setValue:x,getValues:g,control:j}=(0,l.cI)({mode:"onChange"}),{isLoading:v,onSubmit:y}=b(x),F=s()(()=>Promise.all([r.e(925),r.e(72),r.e(665)]).then(r.bind(r,77665)),{loadableGenerated:{webpack:()=>[77665]},ssr:!1});return(0,n.jsxs)(f.Z,{title:"Edit genre",children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(m.Z,{title:"Edit genre"}),(0,n.jsx)("form",{onSubmit:e(y),className:h().form,children:v?(0,n.jsx)(_.Z,{count:3}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:h().fields,children:[(0,n.jsx)(u.Z,{...t("name",{required:"Name is required"}),placeholder:"Name",error:i.name,style:{width:"31%"}}),(0,n.jsx)("div",{style:{width:"31%"},children:(0,n.jsx)(d.Z,{register:t,error:i.slug,generate:()=>{x("slug",(0,p.G)(g("name")))}})}),(0,n.jsx)(u.Z,{...t("icon",{required:"Icon is required"}),placeholder:"Icon",error:i.icon,style:{width:"31%"}})]}),(0,n.jsx)(l.Qr,{control:j,name:"description",defaultValue:"",render:e=>{let{field:{value:t,onChange:r},fieldState:{error:i}}=e;return(0,n.jsx)(F,{onChange:r,value:t,error:i,placeholder:"Description"})},rules:{validate:{required:e=>e&&(0,o.Vt)(e).result.length>0||"Description is required"}}}),(0,n.jsx)(c.Z,{children:"Update"})]})})]})};r(67294);let E=()=>(0,n.jsx)(S,{});E.isOnlyAdmin=!0;var Z=E},73025:function(e){e.exports={nav:"adminNavigation_nav___TpNr",active:"adminNavigation_active__da2_u"}},59574:function(e){e.exports={badge:"slugField_badge__2sZyE"}},44053:function(e){e.exports={form:"admin-form_form__ySSUS",fields:"admin-form_fields__MN7YE"}},34359:function(e){e.exports={button:"form_button__yOLwy",common:"form_common__Y25KB",field:"form_field__MfP1o",uploadField:"form_uploadField__SfNcG",uploadFlex:"form_uploadFlex___EJSQ",uploadImageContainer:"form_uploadImageContainer__WmFzh",fade:"form_fade__luiBw",error:"form_error__sUS7j",editorWrapper:"form_editorWrapper__kd_SU",wrapper:"form_wrapper___Lju1",toolbar:"form_toolbar__nAnM_",editor:"form_editor__uwQTO"}}},function(e){e.O(0,[536,318,971,774,888,179],function(){return e(e.s=37104)}),_N_E=e.O()}]);