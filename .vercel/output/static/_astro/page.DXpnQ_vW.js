const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/mermaid.core.C59BvCv3.js","_astro/preload-helper.BlTxHScW.js","_astro/_commonjsHelpers.BiQPW4h4.js"])))=>i.map(i=>d[i]);
import{_ as O}from"./preload-helper.BlTxHScW.js";import{i as R}from"./index.DY-kj3Fw.js";const n=(...t)=>console.log("[astro-mermaid]",...t),S=(...t)=>console.error("[astro-mermaid]",...t),C=()=>document.querySelectorAll("pre.mermaid").length>0;let m=null;async function _(){return m||(n("Loading mermaid.js..."),m=O(()=>import("./mermaid.core.C59BvCv3.js").then(t=>t.bs),__vite__mapDeps([0,1,2])).then(async({default:t})=>{const r=[];if(r&&r.length>0){n("Registering",r.length,"icon packs");const i=r.map(o=>({name:o.name,loader:new Function("return "+o.loader)()}));await t.registerIconPacks(i)}return t}).catch(t=>{throw S("Failed to load mermaid:",t),m=null,t}),m)}const v={startOnLoad:!1,theme:"forest"},B={light:"default",dark:"dark"};async function f(){n("Initializing mermaid diagrams...");const t=document.querySelectorAll("pre.mermaid");if(n("Found",t.length,"mermaid diagrams"),t.length===0)return;const r=await _();let i=v.theme;{const o=document.documentElement.getAttribute("data-theme"),d=document.body.getAttribute("data-theme");i=B[o||d]||v.theme,n("Using theme:",i,"from",o?"html":"body")}r.initialize({...v,theme:i,gitGraph:{mainBranchName:"main",showCommitLabel:!0,showBranches:!0,rotateCommitLabel:!0}});for(const o of t){if(o.hasAttribute("data-processed"))continue;o.hasAttribute("data-diagram")||o.setAttribute("data-diagram",o.textContent||"");const d=o.getAttribute("data-diagram")||"",l="mermaid-"+Math.random().toString(36).slice(2,11);n("Rendering diagram:",l);try{const c=document.getElementById(l);c&&c.remove();const{svg:u}=await r.render(l,d);o.innerHTML=u,o.setAttribute("data-processed","true"),n("Successfully rendered diagram:",l)}catch(c){S("Mermaid rendering error for diagram:",l,c),o.innerHTML=`<div style="color: red; padding: 1rem; border: 1px solid red; border-radius: 0.5rem;">
        <strong>Error rendering diagram:</strong><br/>
        ${c.message||"Unknown error"}
      </div>`,o.setAttribute("data-processed","true")}}}C()?(n("Mermaid diagrams detected on initial load"),f()):n("No mermaid diagrams found on initial load");{const t=new MutationObserver(r=>{for(const i of r)i.type==="attributes"&&i.attributeName==="data-theme"&&(document.querySelectorAll("pre.mermaid[data-processed]").forEach(o=>{o.removeAttribute("data-processed")}),f())});t.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),t.observe(document.body,{attributes:!0,attributeFilter:["data-theme"]})}document.addEventListener("astro:after-swap",()=>{n("View transition detected"),C()&&f()});const A=document.createElement("style");A.textContent=`
            /* Prevent layout shifts by setting minimum height */
            pre.mermaid {
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2rem 0;
              padding: 1rem;
              background-color: transparent;
              border: none;
              overflow: auto;
              min-height: 200px; /* Prevent layout shift */
              position: relative;
            }
            
            /* Loading state with skeleton loader */
            pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
              background-size: 200% 100%;
              animation: shimmer 1.5s infinite;
            }
            
            /* Dark mode skeleton loader */
            [data-theme="dark"] pre.mermaid:not([data-processed]) {
              background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
              background-size: 200% 100%;
            }
            
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            
            /* Show processed diagrams with smooth transition */
            pre.mermaid[data-processed] {
              animation: none;
              background: transparent;
              min-height: auto; /* Allow natural height after render */
            }
            
            /* Ensure responsive sizing for mermaid SVGs */
            pre.mermaid svg {
              max-width: 100%;
              height: auto;
            }
            
            /* Optional: Add subtle background for better visibility */
            @media (prefers-color-scheme: dark) {
              pre.mermaid[data-processed] {
                background-color: rgba(255, 255, 255, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            @media (prefers-color-scheme: light) {
              pre.mermaid[data-processed] {
                background-color: rgba(0, 0, 0, 0.02);
                border-radius: 0.5rem;
              }
            }
            
            /* Respect user's color scheme preference */
            [data-theme="dark"] pre.mermaid[data-processed] {
              background-color: rgba(255, 255, 255, 0.02);
              border-radius: 0.5rem;
            }
            
            [data-theme="light"] pre.mermaid[data-processed] {
              background-color: rgba(0, 0, 0, 0.02);
              border-radius: 0.5rem;
            }
          `;document.head.appendChild(A);function H(t={}){const{position:r="right",tooltipText:i="Scroll to top",smoothScroll:o=!0,threshold:d=30,svgPath:l="M18 15l-6-6-6 6",svgStrokeWidth:c="2",borderRadius:u="15",showTooltip:y=!1}=t;document.addEventListener("DOMContentLoaded",()=>{const e=document.createElement("button");e.id="scroll-to-top-button",e.ariaLabel=i;let p=!1;e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="35" 
           height="35" 
           viewBox="0 0 24 24"            
           fill="none" 
           stroke="currentColor" 
           stroke-width="${c}" 
           stroke-linecap="round" 
           stroke-linejoin="round">
        <path d="${l}"/>
      </svg>
    `;const s=document.createElement("div");s.id="scroll-to-top-tooltip",s.textContent=i;const w=document.createElement("div");w.style.cssText=`
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--sl-color-gray-5);
  `;const k=document.createElement("style");k.textContent=`
    .scroll-to-top-button {
      position: fixed;
      bottom: 40px;
      width: 47px;
      height: 47px;
      ${r==="left"?"left: 40px;":r==="right"?"right: 35px;":"left: 50%; transform: translateX(-50%);"}
      border-radius: ${u}%;     
      background-color: var(--sl-color-bg-sidebar);       
      cursor: pointer;
      display: flex;
      align-items: center;      
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease, background-color 0.3s ease, transform 0.3s ease;      
      z-index: 100;            
      border: none;
      transform-origin: center;
      -webkit-tap-highlight-color: transparent; /* Disable mobile tap highlight */
      touch-action: manipulation; /* Prevent double-tap zoom */
      
    }
      .scroll-to-top-button:active {
        background-color: var(--sl-color-accent-dark); 
        color: var(--sl-text-white);        
        transition: background-color 0.1s ease, transform 0.1s ease; 
     }
        /* Ensure default state after interaction */
       .scroll-to-top-button:not(:hover):not(:active) {         
        background-color: var(--sl-color-bg-sidebar);  
            border: 1px solid var(--sl-color-gray-5);  
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
       }
      .scroll-to-top-button.visible {
        opacity: 1;
        visibility: visible;        
      }
      :root["theme-dark"] .scroll-to-top-button {
         border: 1px solid yellow;
       }

      .scroll-to-top-button:hover {
        background-color: var(--sl-color-accent); 
        box-shadow: 0 0 0 1px rgba(0,0,0,0.04),0 4px 8px 0 rgba(0,0,0,0.2);
        color: white;
        border: none;     
      }
      
      .scroll-to-top-button.keyboard-focus {
        outline: 2px solid var(--sl-color-text);
        outline-offset: 2px;
      }

      .scroll-to-top-btn-tooltip {
        position: absolute;
        ${r==="left"?"left: -25px;":"right: -22px;"}
        top: -47px;
        background-color: var(--sl-color-gray-6);
        color: var(--sl-color-text);
        padding: 5px 10px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 14px;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s, visibility 0.3s;
        pointer-events: none;
     }
      .scroll-to-top-btn-tooltip.visible {
        opacity: 1;
        visibility: visible;        
      }
    `,document.head.appendChild(k),e.classList.add("scroll-to-top-button"),document.body.appendChild(e),y&&(s.classList.add("scroll-to-top-btn-tooltip"),s.appendChild(w),e.appendChild(s),e.appendChild(s));const h=()=>{s.classList.remove("visible")},x=()=>{y&&s.classList.add("visible")};e.addEventListener("mouseenter",()=>{x()}),e.addEventListener("mouseleave",()=>{h()});const g=()=>{h(),window.scrollTo({top:0,behavior:o?"smooth":"auto"}),e.classList.remove("active")};document.addEventListener("keydown",a=>{a.key==="Tab"&&(p=!0)}),e.addEventListener("mousedown",()=>{p=!1}),e.addEventListener("keydown",a=>{a.key==="Enter"&&(g(),e.classList.remove("keyboard-focus"))}),e.addEventListener("focus",()=>{p&&(x(),e.classList.add("keyboard-focus"))}),e.addEventListener("blur",()=>{h(),e.classList.remove("keyboard-focus")}),e.addEventListener("touchstart",a=>{a.preventDefault(),e.classList.add("active")}),e.addEventListener("touchend",a=>{a.preventDefault(),g(),e.classList.remove("active")}),e.addEventListener("click",a=>{a.preventDefault(),g()});const b=()=>{const a=window.scrollY,M=window.innerHeight,P=document.documentElement.scrollHeight,z=a/(P-M),D=d>0&&d>=10&&d<=99?d:30;z>D/100?e.classList.add("visible"):e.classList.remove("visible")};window.addEventListener("scroll",b),b();const L=()=>{document.documentElement.classList.contains("theme-dark")?s.style.backgroundColor="var(--sl-color-gray-6)":s.style.backgroundColor="var(--sl-color-gray-5)"};L();const E=new MutationObserver(L);E.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});function T(){window.devicePixelRatio>3?e.style.display="none":e.style.display="flex"}return window.addEventListener("resize",T),T(),()=>{window.removeEventListener("scroll",b),E.disconnect(),e.parentNode&&e.parentNode.removeChild(e)}})}H({position:"right",tooltipText:"Back to top",smoothScroll:!0,threshold:10,svgPath:"M18 15l-6-6-6 6",svgStrokeWidth:"2",borderRadius:"15",showTooltip:!0});{const t=localStorage,r=new Set(JSON.parse(t.getItem("starlight-site-graph--visited-pages")??"[]"));r.add(new URL(window.location.href).pathname.slice(1)),t.setItem("starlight-site-graph--visited-pages",JSON.stringify([...r]))}R();export{H as default};
