import{j as s,B as i,n as C,p as m,u,q as j,r as h,aa as b,A as g,ab as P,C as d,a6 as y}from"./index-BZF3ays4.js";import{c as A}from"./calculateDiscount-Bk2neCmW.js";import{F as I,I as S,T as w,G as f,b as l,B as z,R as x,C as E}from"./index-Dt_k0ApE.js";import{S as B}from"./Stack-CEKf3M-h.js";import{C as T}from"./index-BWiordN0.js";const D=({image:t,title:o,discont_price:e,price:r,description:n,addToCartSlot:a})=>{const c=t?`${C.BASE_URL}${t}`:void 0;return s.jsx(i,{children:s.jsxs(I,{gap:32,children:[s.jsx(S,{radius:"lg",maw:780,mah:572,w:"100%",h:"100%",src:c,alt:o}),s.jsxs(B,{children:[s.jsx(w,{fz:40,mb:32,lh:1,children:o}),s.jsxs(f,{gap:32,align:"baseline",children:[s.jsxs(l,{lh:1,fz:64,fw:"bold",children:["$",e??r]}),s.jsxs(i,{hidden:!e,pos:"relative",children:[s.jsxs(l,{pos:"absolute",top:-24,right:-64,bg:"green",c:"white",py:4,px:8,style:{borderRadius:6},fw:600,fz:20,lh:"26px",children:["-",A({price:r??0,discountPrice:e??0}),"%"]}),s.jsxs(l,{fz:40,lh:1,td:"line-through",c:"gray",hidden:!e,children:["$",r]})]})]}),a,s.jsx(l,{fw:"bold",children:"Description"}),s.jsx(l,{children:n})]})]})})},L=({product:t})=>{const o=m(),e=u(p=>j.selectors.selectCurrentProductFromCart(p,t.id)),[r,n]=h.useState(()=>(e==null?void 0:e.count)??0);h.useEffect(()=>{n((e==null?void 0:e.count)??0)},[t]);const a=()=>n(()=>r+1),c=()=>n(()=>r-1);return s.jsxs(f,{my:32,children:[s.jsx(T,{increment:r,setIncrement:a,setDecrement:c}),s.jsx(z,{flex:1,maw:316,radius:"xxs",onClick:()=>o(j.actions.addProductToCart({...t,count:r})),children:"Add to Cart"})]})};function M(){const{id:t}=b(),o=m(),e=u(g.selectors.selectCurrentProduct),r=u(c=>c.allProducts.isProductLoading),[n,a]=h.useState(null);return h.useEffect(()=>{if(t)try{o(P(Number(t)))}catch(c){console.error("Error fetching product:",c),a("Ошибка при загрузке товара. Пожалуйста, попробуйте позже.")}},[t,o]),n?s.jsx(x,{title:"Ошибка",children:s.jsx(d,{children:s.jsx(i,{component:"section",mt:116,mb:80,children:s.jsx(l,{color:"red",size:"xl",children:n})})})}):r?s.jsx(x,{title:"Загрузка...",children:s.jsx(d,{children:s.jsx(i,{component:"section",mt:116,mb:80,style:{display:"flex",justifyContent:"center"},children:s.jsx(y,{size:"xl"})})})}):e?s.jsx(x,{title:`${e.title}`,children:s.jsxs(d,{children:[s.jsx(i,{component:"section",mt:116,mb:80,children:s.jsx(D,{...e,addToCartSlot:s.jsx(L,{product:e})})}),s.jsx(E,{})]})}):s.jsx(x,{title:"Товар не найден",children:s.jsx(d,{children:s.jsx(i,{component:"section",mt:116,mb:80,children:s.jsx(l,{size:"xl",children:"Товар не найден или произошла ошибка загрузки."})})})})}export{M as default};
