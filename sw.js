/* 2.2.3｜範圍限於生物分類單元，線上優先更新頁面、離線回退本機快取 */
const CACHE='bio-classification-2.2.4-original-ui';
const ASSETS=['./','./index.html','./stage1.html','./stage2.html','./stage3.html','./stage4.html','./data.js','./manifest.webmanifest','./unit.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bio-classification-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const req=event.request,u=new URL(req.url);
 if(req.method!=='GET'||u.origin!==self.location.origin)return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  if(req.mode==='navigate'){
   try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}
   catch(_){return await cache.match(req)||await cache.match('./index.html')||Response.error()}
  }
  const saved=await cache.match(req);if(saved)return saved;
  try{const response=await fetch(req);if(response.ok)await cache.put(req,response.clone());return response}
  catch(_){return Response.error()}
 })());
});
