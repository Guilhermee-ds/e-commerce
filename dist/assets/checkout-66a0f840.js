import{l as a,d,s as n,a as s}from"./utilidades-5c65e473.js";function c(){const o=a("carrinho")??{};for(const t in o)d(t,"container-produtos-checkout",o[t])}function u(o){o.preventDefault();const t=a("carrinho")??{};if(Object.keys(t).length===0)return;const r={dataPedido:new Date,pedido:t},i=a("historico")??[],e=[r,...i];n("historico",e),s("carrinho"),window.location.href="./pedidos.html"}c();document.addEventListener("submit",o=>u(o));
