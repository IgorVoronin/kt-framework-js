import{j as s,B as i,n as j,p as f,u as h,q as d,r as x,A as p,C}from"./index-8E_9jvGv.js";import{c as g}from"./calculateDiscount-Bk2neCmW.js";import{F as b,I as A,T as P,G as u,b as o,B as w,R as I,C as S}from"./index-_OMPFPgb.js";import{S as T}from"./Stack-DDcOfLDY.js";import{C as y}from"./index-DasrOz5B.js";const B=({image:t,title:a,discont_price:e,price:n,description:r,addToCartSlot:c})=>{const l=t?`${j.BASE_URL}${t}`:void 0;return s.jsx(i,{children:s.jsxs(b,{gap:32,children:[s.jsx(A,{radius:"lg",maw:780,mah:572,w:"100%",h:"100%",src:l,alt:a}),s.jsxs(T,{children:[s.jsx(P,{fz:40,mb:32,lh:1,children:a}),s.jsxs(u,{gap:32,align:"baseline",children:[s.jsxs(o,{lh:1,fz:64,fw:"bold",children:["$",e??n]}),s.jsxs(i,{hidden:!e,pos:"relative",children:[s.jsxs(o,{pos:"absolute",top:-24,right:-64,bg:"green",c:"white",py:4,px:8,style:{borderRadius:6},fw:600,fz:20,lh:"26px",children:["-",g({price:n??0,discountPrice:e??0}),"%"]}),s.jsxs(o,{fz:40,lh:1,td:"line-through",c:"gray",hidden:!e,children:["$",n]})]})]}),c,s.jsx(o,{fw:"bold",children:"Description"}),s.jsx(o,{children:r})]})]})})},D=({product:t})=>{const a=f(),e=h(m=>d.selectors.selectCurrentProductFromCart(m,t.id)),[n,r]=x.useState(()=>(e==null?void 0:e.count)??0);x.useEffect(()=>{r((e==null?void 0:e.count)??0)},[t]);const c=()=>r(()=>n+1),l=()=>r(()=>n-1);return s.jsxs(u,{my:32,children:[s.jsx(y,{increment:n,setIncrement:c,setDecrement:l}),s.jsx(w,{flex:1,maw:316,radius:"xxs",onClick:()=>a(d.actions.addProductToCart({...t,count:n})),children:"Add to Cart"})]})};function v(){const t=h(p.selectors.selectCurrentProduct);return t?s.jsx(I,{title:`${t==null?void 0:t.title}`,children:s.jsxs(C,{children:[s.jsx(i,{component:"section",mt:116,mb:80,children:s.jsx(B,{...t,addToCartSlot:s.jsx(D,{product:t})})}),s.jsx(S,{})]})}):null}export{v as default};
