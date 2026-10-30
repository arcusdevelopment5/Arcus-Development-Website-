/* Progressive enhancement: all content is readable without JavaScript or motion. */
(()=>{'use strict';
const root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(min-width: 1001px) and (hover: hover) and (pointer: fine)');
let paused=false;try{paused=sessionStorage.getItem('arcus-motion')==='paused'}catch{}
let enabled=false,frame=0,observer;const animations=new Set(),seen=new WeakSet(),visible=new Set();
const targets=[...document.querySelectorAll('main .section-title, main .service-card, main .project-card, main .method-steps article, main .steps-grid article, main .detailed-process article, main .oss-service, main .editorial-split-new>div, main .warranty-grid>div, main .final-cta>div')];
const photos=[...document.querySelectorAll('main .project-image, main .service-card-image')];
const control=document.createElement('button');control.type='button';control.className='motion-control';
const slot=document.querySelector('.hero-bottom-line')||document.querySelector('.page-intro')||document.querySelector('.breadcrumbs');if(slot)slot.append(control);
const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
function animate(el,keyframes,options){if(!enabled||!el.animate)return;const a=el.animate(keyframes,options);animations.add(a);a.finished.catch(()=>{}).finally(()=>animations.delete(a));}
function reveal(el,index=0){if(seen.has(el))return;seen.add(el);animate(el,[{opacity:.15,transform:'translateY(30px)'},{opacity:1,transform:'translateY(0)'}],{duration:fine.matches?720:440,delay:Math.min(index*65,195),easing:'cubic-bezier(.2,.65,.25,1)',fill:'none'});}
function update(){frame=0;if(!enabled||document.hidden)return;const max=root.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,scrollY/max):0})`;if(fine.matches)visible.forEach(box=>{const bounds=box.getBoundingClientRect();const amount=Math.max(-1,Math.min(1,(bounds.top+bounds.height/2-innerHeight/2)/innerHeight));box.style.setProperty('--image-drift',`${amount*-18}px`)});}
function schedule(){if(enabled&&!frame)frame=requestAnimationFrame(update)}
function configure(){enabled=!paused&&!reduce.matches;root.classList.toggle('motion-active',enabled);root.classList.toggle('motion-paused',!enabled);control.textContent=enabled?'Παύση κίνησης':'Ενεργοποίηση κίνησης';control.setAttribute('aria-pressed',String(enabled));control.setAttribute('aria-label',enabled?'Παύση εφέ κίνησης':'Ενεργοποίηση εφέ κίνησης');control.disabled=reduce.matches;if(reduce.matches){control.textContent='Μειωμένη κίνηση';control.title='Ακολουθείται η ρύθμιση μειωμένης κίνησης της συσκευής σου.'}else control.removeAttribute('title');if(!enabled){animations.forEach(a=>a.cancel());cancelAnimationFrame(frame);frame=0;photos.forEach(p=>p.style.removeProperty('--image-drift'));}schedule();}
control.addEventListener('click',()=>{paused=!paused;try{sessionStorage.setItem('arcus-motion',paused?'paused':'enabled')}catch{}configure()});reduce.addEventListener('change',configure);fine.addEventListener('change',()=>{photos.forEach(p=>p.style.removeProperty('--image-drift'));schedule()});configure();
if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{entries.forEach((entry,i)=>{if(entry.isIntersecting){reveal(entry.target,i);observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});targets.forEach(el=>observer.observe(el));const photoObserver=new IntersectionObserver(entries=>{entries.forEach(e=>e.isIntersecting?visible.add(e.target):visible.delete(e.target));schedule()});photos.forEach(p=>photoObserver.observe(p));}
// A short entrance sequence; the headline and calls to action remain real HTML.
document.querySelectorAll('.hero-copy>.arc-kicker,.hero-copy>h1,.hero-copy>p:not(.arc-kicker),.hero-actions,.page-intro>h1').forEach((el,i)=>reveal(el,i));
const plan=document.querySelector('.hero-plan');if(plan)animate(plan,[{opacity:.25,transform:'translateY(20px) scale(.97)'},{opacity:1,transform:'none'}],{duration:1000,easing:'cubic-bezier(.2,.65,.25,1)'});
// Parallax affects decorative photo framing only, never the before/after comparison.
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule,{passive:true});document.addEventListener('visibilitychange',()=>{root.classList.toggle('motion-background',document.hidden);if(document.hidden){cancelAnimationFrame(frame);frame=0}else schedule()});schedule();
})();
