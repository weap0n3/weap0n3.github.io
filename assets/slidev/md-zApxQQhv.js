import{d as p,z as m,o as c,b as f,e as n,f as v,h as _,c as g,k as h,q as k,s as $,B as l}from"../modules/vue-D507KtQs.js";import{u,f as x}from"./context-B5ZdQMDQ.js";import"../index-t9FbNUCf.js";import"../modules/shiki-YfOtFC9C.js";function i(e){return e.startsWith("/")?"/"+e.slice(1):e}function P(e,r=!1){const o=e&&["#","rgb","hsl"].some(s=>e.indexOf(s)===0),t={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?r?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return t.background||delete t.background,t}const b={class:"my-auto w-full"},y=p({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){u();const r=e,o=m(()=>P(r.background,!0));return(t,s)=>(c(),f("div",{class:"slidev-layout cover text-center",style:_(o.value)},[n("div",b,[v(t.$slots,"default")])],4))}}),R={__name:"slides.md__slidev_1",setup(e){const{$slidev:r,$nav:o,$clicksContext:t,$clicks:s,$page:B,$renderContext:C,$frontmatter:d}=u();return t.setup(),(O,a)=>(c(),g(y,k($(l(x)(l(d),0))),{default:h(()=>a[0]||(a[0]=[n("h1",null,"Einführung in die objektorientierte Programmierung (OOP)",-1),n("h2",null,"Grundlagen der OOP verstehen",-1)])),_:1},16))}};export{R as default};