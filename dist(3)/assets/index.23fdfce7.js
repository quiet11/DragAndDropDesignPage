var g=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(o,e,r)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,c=(o,e)=>{for(var r in e||(e={}))b.call(e,r)&&u(o,r,e[r]);if(l)for(var r of l(e))h.call(e,r)&&u(o,r,e[r]);return o},d=(o,e)=>v(o,y(e));import{d as N,r as w,t as L,a as $,c as k,w as p,v as f,b as i,e as m,o as O,f as V}from"./vendor.8ad403b3.js";const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}};A();var B=N({setup(o){const e=w({accountNumber:"",password:""}),r=()=>{let a={accountNumber:e.accountNumber,password:e.password};$.get("/api",{params:a}).then(t=>{console.log("200")}).catch(t=>{console.log(t)})};return d(c({},L(e)),{login:r})}}),_=(o,e)=>{for(const[r,a]of e)o[r]=a;return o};const x=m(" \u8D26\u53F7"),C=m(" \u5BC6\u7801"),E=i("div",null,"hhh",-1);function M(o,e,r,a,t,n){return O(),k("div",null,[x,p(i("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=s=>o.accountNumber=s)},null,512),[[f,o.accountNumber]]),C,p(i("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>o.password=s)},null,512),[[f,o.password]]),i("button",{onClick:e[2]||(e[2]=s=>o.login())},"\u767B\u5165"),E])}var P=_(B,[["render",M]]);V(P).mount("#app3");
