(() => {
 const hero=document.querySelector('.home-grid .hero');
 if(!hero) return;
 const proof=hero.querySelector('.proof');
 let gridEnd=Infinity;
 const measure=()=>{
  if(!proof) return;
  gridEnd=proof.getBoundingClientRect().top-hero.getBoundingClientRect().top;
  hero.style.setProperty('--hero-grid-end',gridEnd+'px');
 };
 measure();
 const resize=new ResizeObserver(measure);resize.observe(hero);if(proof)resize.observe(proof);
 document.fonts.ready.then(measure);
 const enabled=matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
 const light=document.createElement('div'); light.className='hero-cursor-light'; light.setAttribute('aria-hidden','true'); hero.prepend(light);
 let frame=0,x=0,y=0;
 const clear=()=>{hero.classList.remove('is-pointer-lit');cancelAnimationFrame(frame);frame=0;};
 hero.addEventListener('pointermove',e=>{
  if(!enabled.matches||e.pointerType==='touch') return;
  const rect=hero.getBoundingClientRect();x=e.clientX-rect.left;y=e.clientY-rect.top;
  if(y>=gridEnd){clear();return;}
  if(!frame) frame=requestAnimationFrame(()=>{light.style.setProperty('--light-x',x+'px');light.style.setProperty('--light-y',y+'px');hero.classList.add('is-pointer-lit');frame=0;});
 },{passive:true});
 hero.addEventListener('pointerleave',clear);window.addEventListener('blur',clear);enabled.addEventListener('change',clear);
})();
