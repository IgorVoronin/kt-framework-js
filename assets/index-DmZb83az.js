import{j as s,L as c,n as l,a8 as d,B as m,C as x,a5 as j,a6 as h}from"./index-8E_9jvGv.js";import{B as p,I as f,b as g,c as u,a as n}from"./index-_OMPFPgb.js";import{S as C}from"./Stack-DDcOfLDY.js";const L=({category:t,imageSrc:e,id:i})=>{const a=e?`${l.BASE_URL}${e}`:void 0;return s.jsx(p,{px:0,h:"100%",component:c,to:`/categories/${i}`,variant:"transparent",children:s.jsxs(C,{h:"100%",c:"black",children:[s.jsx(f,{flex:1,fit:"cover",radius:"lg",maw:316,mih:350,src:a,alt:t}),s.jsx(g,{fz:20,ta:"center",children:t})]})})},I=({showAll:t=!1})=>{const{data:e,isLoading:i}=d(),a=t?e:e==null?void 0:e.slice(0,4),o=t?{}:{href:"/categories",linkLabel:"All categories"};return s.jsx(m,{component:"section",mb:80,mt:116,children:s.jsxs(x,{children:[s.jsx(u,{mb:40,title:"Categories",...o}),i&&s.jsx(j,{children:s.jsx(h,{})}),s.jsx(n,{hidden:!a,grow:!0,mih:392,children:a==null?void 0:a.map(r=>s.jsx(n.Col,{span:{xs:12,md:4,lg:1},children:s.jsx(L,{category:r.title,imageSrc:r.image,id:r.id})},r.id))})]})})};export{I as C};
