/* Bio-Class v5.5｜跨教材「回首頁」懸浮鍵。只疊在畫面上，不修改教材排版。 */
(()=>{
  'use strict';
  if(document.getElementById('gang-home-button-host'))return;
  const script=document.currentScript;
  const defaultHub='https://pipipopo7410.github.io/Bio-Class/';
  let home=defaultHub;
  try{
    if(script?.dataset?.hubUrl){
      const base=script.src||location.href;
      const url=new URL(script.dataset.hubUrl,base);
      if(url.protocol==='http:'||url.protocol==='https:')home=url.href;
    }else if(script?.src&&/\/Bio-Class\/home-button\.js(?:\?|$)/.test(script.src)){
      home=new URL('./',script.src).href;
    }
  }catch{home=defaultHub;}
  const attach=()=>{
    if(document.getElementById('gang-home-button-host'))return;
    const host=document.createElement('div');
    host.id='gang-home-button-host';
    host.setAttribute('aria-label','返回數位小教室');
    host.style.cssText='position:fixed;right:calc(14px + env(safe-area-inset-right));bottom:calc(18px + env(safe-area-inset-bottom));width:52px;height:52px;z-index:2147483000;touch-action:none;user-select:none;-webkit-user-select:none;';
    const shadow=host.attachShadow({mode:'open'});
    shadow.innerHTML=`<style>
      :host{--edge:#e3d8e9}
      button{box-sizing:border-box;display:grid;place-items:center;width:52px;height:52px;padding:0;border-radius:17px;border:1px solid var(--edge);background:rgba(255,251,255,.93);color:#594969;box-shadow:0 3px 15px rgba(35,23,47,.18);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);cursor:pointer;touch-action:none;-webkit-tap-highlight-color:transparent;opacity:.97;transition:opacity .23s,background .23s,box-shadow .23s;outline-offset:3px}
      button.quiet{opacity:.63}button:focus-visible{outline:3px solid #8c78be;opacity:1}
      button:active{background:rgba(250,233,250,.98);opacity:1;box-shadow:0 4px 16px rgba(35,23,47,.22)}
      svg{width:25px;height:25px;stroke:currentColor;fill:none;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}
      @media(prefers-reduced-motion:reduce){button{transition:none}}
    </style><button type="button" aria-label="返回剛剛の數位小教室首頁（可拖動位置）" title="回首頁・可拖曳" ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.4 10.7 8.6-7.1 8.6 7.1"/><path d="M5.5 9.4V20h13V9.4"/><path d="M9.6 20v-6h4.8v6"/></svg></button>`;
    const btn=shadow.querySelector('button');
    const path=location.pathname;
    const mirrored=path.match(/\/apps\/([^/]+)\//);
    const unit=mirrored?`mirror-${mirrored[1]}`:(path.split('/').filter(Boolean)[0]||'root');
    const memoryKey='gg-floating-home-position-v1:'+unit;
    let moved=false,blockClick=false,drag=null,idleTimer=null;
    const cap=(n,min,max)=>Math.min(Math.max(n,min),Math.max(min,max));
    const bounds=()=>({w:window.innerWidth||document.documentElement.clientWidth,h:window.innerHeight||document.documentElement.clientHeight});
    function position(left,top){
      const {w,h}=bounds();
      host.style.left=cap(left,4,w-56)+'px';
      host.style.top=cap(top,4,h-56)+'px';
      host.style.right='auto';host.style.bottom='auto';
    }
    function quietLater(){
      clearTimeout(idleTimer);btn.classList.remove('quiet');
      idleTimer=setTimeout(()=>{if(!drag&&!btn.matches(':focus-visible'))btn.classList.add('quiet');},3500);
    }
    try{
      const saved=JSON.parse(localStorage.getItem(memoryKey)||'null');
      if(saved&&Number.isFinite(saved.x)&&Number.isFinite(saved.y)){
        const {w,h}=bounds();position(saved.x*w,saved.y*h);
      }
    }catch{}
    function save(){
      try{const r=host.getBoundingClientRect();const {w,h}=bounds();localStorage.setItem(memoryKey,JSON.stringify({x:r.left/w,y:r.top/h}));}catch{}
    }
    btn.addEventListener('pointerdown',e=>{
      if(e.button!==0&&e.pointerType==='mouse')return;
      const rect=host.getBoundingClientRect();
      drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:rect.left,top:rect.top};
      moved=false;blockClick=false;
      quietLater();
      try{btn.setPointerCapture(e.pointerId);}catch{}
    });
    btn.addEventListener('pointermove',e=>{
      if(!drag||e.pointerId!==drag.id)return;
      const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
      if(!moved&&Math.hypot(dx,dy)<9)return;
      moved=true;position(drag.left+dx,drag.top+dy);
    });
    btn.addEventListener('pointerup',e=>{
      if(!drag||drag.id!==e.pointerId)return;
      if(moved){blockClick=true;save();}
      drag=null;quietLater();
    });
    btn.addEventListener('pointercancel',()=>{if(moved){blockClick=true;save();}drag=null;quietLater();});
    btn.addEventListener('click',e=>{
      if(blockClick){e.preventDefault();e.stopPropagation();blockClick=false;return;}
      location.assign(home);
    });
    window.addEventListener('resize',()=>{
      if(host.style.left){const r=host.getBoundingClientRect();position(r.left,r.top);save();}
    });
    document.addEventListener('visibilitychange',()=>{if(!document.hidden)quietLater();});
    (document.body||document.documentElement).appendChild(host);
    quietLater();
  };
  if(document.body)attach();else document.addEventListener('DOMContentLoaded',attach,{once:true});
})();
