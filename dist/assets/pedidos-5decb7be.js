import{l as n,d as a}from"./utilidades-5c65e473.js";function r(o){const d=`
    <p class='text-xl text-bold my-4'>${new Date(o.dataPedido).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</p>
    <section id='container-pedidos-${o.dataPedido}' class='bg-indigo-200 p-3 rounded-md'></section>
    `,e=document.getElementsByTagName("main")[0];e.innerHTML+=d;for(const t in o.pedido)a(t,`container-pedidos-${o.dataPedido}`,o.pedido[t])}function s(){const o=n("historico");for(const i of o)r(i)}s();
