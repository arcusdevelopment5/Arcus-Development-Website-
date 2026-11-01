"""Public renovation stories from the owner's curated project archive."""
from html import escape as esc
from plan_transition import plan_transition

STAGES = {
 'archive': ('00', 'Αρχείο', 'Ο χώρος, μέσα από το αρχείο.', 'Διαθέσιμες φωτογραφίες του ακινήτου. Το στάδιο λήψης δεν έχει επιβεβαιωθεί ως πριν ή μετά την ανακαίνιση.'),
 'before': ('01', 'Πριν', 'Η αφετηρία.', 'Ο χώρος στην αρχική του κατάσταση, πριν από την παρέμβαση.'),
 'plans': ('02', 'Κάτοψη', 'Η σκέψη γίνεται σχέδιο.', 'Η οργάνωση του χώρου μέσα από τις κατόψεις της μελέτης.'),
 'renders': ('03', 'Render', 'Πριν γίνει πραγματικότητα.', 'Τρισδιάστατες απεικονίσεις της σχεδιαστικής πρότασης. Πρόκειται για renders, όχι για φωτογραφίες του ολοκληρωμένου έργου.'),
 'construction': ('04', 'Κατασκευή', 'Η αλλαγή, στην πράξη.', 'Στιγμιότυπα από την πορεία των εργασιών.'),
 'after': ('05', 'Μετά', 'Ο χώρος αποκτά ζωή.', 'Πραγματικές φωτογραφίες μετά την ολοκλήρωση της ανακαίνισης.')
}

def status(p):
 return 'Σε εξέλιξη' if p['status']=='ongoing' else 'Ολοκληρωμένο'

def card(p, pic, i=0):
 category=' '.join(p.get('categories',[])+[p['status']])
 stages=' · '.join(STAGES[k][1] for k in STAGES if any(g['kind']==k and g['images'] for g in p['groups']))
 return f'''<article class="project-card archive-card cinematic-card" data-project-category="{category}"><a href="/el/erga/{p['slug']}" data-event="view_project" aria-label="Δες το έργο {esc(p['title'])}"><div class="project-image">{pic(p['cover'],p['cover_alt'])}</div><div class="cinema-top"><span>{i+1:02d} / ARCUS DEVELOPMENT</span><span class="cinema-status">{status(p)}</span></div><div class="cinema-copy"><span class="cinema-kind">{esc(p['cover_label'])}</span><h3>{esc(p['title'])}</h3><p>{esc(p.get('subtitle','Ανακαίνιση κατοικίας'))}</p><div class="cinema-bottom"><span>{stages}</span><span class="cinema-open">Δες τη μεταμόρφωση <b aria-hidden="true">↗</b></span></div></div></a></article>'''

def grid(items,pic):
 return '<div class="project-grid archive-grid cinema-grid">'+''.join(card(p,pic,i) for i,p in enumerate(items))+'</div>'

def showcase(items,pic):
 chosen=[p for p in items if p['status']=='completed'][:5]
 return '<section class="work-showcase" id="selected-works"><div class="arc-container arc-section"><div class="section-title"><div><p class="arc-kicker">ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ / ARCUS DEVELOPMENT</p><h2>Οι ιδέες μας,<br><em>στην πράξη.</em></h2></div><a class="arc-link" href="/el/erga">Όλα τα έργα ↗</a></div></div><div class="work-reel" tabindex="0" role="region" aria-label="Επιλεγμένα έργα — κύλιση οριζόντια">'+''.join(card(p,pic,i) for i,p in enumerate(chosen))+'</div><div class="arc-container reel-controls"><span>Σύρε για εξερεύνηση <span aria-hidden="true">↔</span></span><span class="reel-position" aria-live="polite">01 / '+str(len(chosen)).zfill(2)+'</span><div><button type="button" data-reel-prev aria-label="Προηγούμενο έργο">←</button><button type="button" data-reel-next aria-label="Επόμενο έργο">→</button></div></div></section>'

def render(items,page,intro,pic,kicker,link,finalcta):
 complete=sum(p['status']=='completed' for p in items)
 body='<main id="main" class="portfolio-cinema">'+intro('ΤΑ ΕΡΓΑ ΜΑΣ / ARCUS DEVELOPMENT','Τα έργα μας.<br>Οι ιδέες μας, <em>στην πράξη.</em>','Κάθε ανακαίνιση έχει τη δική της ιστορία. Ανακάλυψε την αρχική εικόνα, τις σχεδιαστικές επιλογές και τη διαδρομή προς τον νέο χώρο.')
 body+=f'<section class="arc-container portfolio-section" id="project-collection"><div class="archive-stats"><span><b>{len(items):02d}</b> έργα</span><span><b>{complete:02d}</b> ολοκληρωμένα</span><span><b>{len(items)-complete:02d}</b> σε εξέλιξη</span></div><div class="portfolio-tools" role="group" aria-label="Φίλτρα έργων">'
 for key,label in [('all','Όλα τα έργα'),('completed','Ολοκληρωμένα'),('ongoing','Σε εξέλιξη')]:
  body+=f'<button data-project-filter="{key}" aria-pressed="{str(key=="all").lower()}">{label}</button>'
 body+=f'<p id="project-count" aria-live="polite">{len(items)} έργα</p></div>'+grid(items,pic)+'<div class="portfolio-empty" hidden><p>Δεν υπάρχουν έργα σε αυτή την επιλογή.</p></div></section>'+finalcta()+'</main>'
 page('erga','Τα έργα μας | Arcus Development','Οι ανακαινίσεις της Arcus Development: φωτογραφίες πριν και μετά, κατόψεις, renders και έργα σε εξέλιξη.',body)
 for index,p in enumerate(items):
  kinds=[kind for kind in STAGES if any(g['kind']==kind and g['images'] for g in p['groups'])]
  body=f'<main id="main" class="project-story"><section class="story-opening">{pic(p["cover"],p["cover_alt"],"eager")}<div class="arc-container story-opening-top"><a href="/el/erga">← Τα έργα μας</a><span>{status(p)}</span></div><div class="arc-container story-opening-copy">'+kicker(p.get('subtitle','ARCUS DEVELOPMENT'))+f'<h1>{esc(p["title"])}</h1><p>{esc(p["summary"])}</p><div><span>{esc(p["cover_label"])}</span><a href="#project-story">Εξερεύνησε το έργο ↓</a></div></div></section><div id="project-story"></div>'
  if p.get('facts'):
   body+='<dl class="arc-container story-facts">'+''.join(f'<div><dt>{esc(f["label"])}</dt><dd>{esc(str(f["value"]))}</dd></div>' for f in p['facts'])+'</dl>'
  if p.get('story'):
   body+='<section class="arc-section arc-container editorial-split-new"><div>'+kicker('Η ΙΔΕΑ ΤΟΥ ΕΡΓΟΥ')+'<h2>'+esc(p.get('story_title','Κάθε χώρος, μια νέα δυνατότητα.'))+'</h2></div><div>'+''.join('<p>'+esc(t)+'</p>' for t in p['story'])+'</div></section>'
  body+='<nav class="story-chapters" aria-label="Στάδια παρουσίασης έργου"><div class="arc-container">'+''.join(f'<a href="#{kind}"><span>{kinds.index(kind)+1:02d}</span> {STAGES[kind][1]}</a>' for kind in kinds)+'</div></nav>'
  if p['status']=='ongoing':
   body+='<aside class="arc-container story-progress"><span class="status-dot" aria-hidden="true"></span><p>Το έργο βρίσκεται σε εξέλιξη. Οι εικόνες της πρότασης σημειώνονται ως renders· η τελική φωτογράφιση θα ακολουθήσει την ολοκλήρωση.</p></aside>'
  for kind in kinds:
   num,label,title,description=STAGES[kind]
   num=f"{kinds.index(kind)+1:02d}"
   body+=f'<section id="{kind}" class="story-stage arc-section {"stage-dark" if kind=="renders" else ""}"><div class="arc-container"><div class="section-title"><div>{kicker(num+" / "+label)}<h2>{title}</h2></div><p>{description}</p></div>'
   if kind=='plans' and p['slug']=='athanasiou-diakou-16':body+=plan_transition()
   for group in [g for g in p['groups'] if g['kind']==kind and g['images']]:
    if group.get('unit'):body+=f'<h3 class="story-unit">{esc(group["unit"])}</h3>'
    body+=f'<div class="story-gallery {"plan-gallery" if kind=="plans" else ""}">'
    for n,img in enumerate(group['images']):
     caption=img['alt']
     body+=f'<figure><a class="gallery-open" href="{img["src"]}" data-gallery="{kind}" data-caption="{esc(caption)}" aria-label="Μεγέθυνση: {esc(caption)}">{pic(img["src"],caption)}<span class="gallery-zoom" aria-hidden="true">↗</span></a><figcaption><span>{label} / {n+1:02d}</span>{esc(caption)}</figcaption></figure>'
    body+='</div>'
   body+='</div></section>'
  if p.get('public_note'):body+=f'<p class="arc-container story-note">{esc(p["public_note"])}</p>'
  nxt=items[(index+1)%len(items)]
  body+=f'<section class="story-next cinema-next"><a href="/el/erga/{nxt["slug"]}">{pic(nxt["cover"],nxt["cover_alt"])}<div><span>ΕΠΟΜΕΝΗ ΙΣΤΟΡΙΑ / {esc(nxt["cover_label"])}</span><strong>{esc(nxt["title"])}</strong><b aria-hidden="true">↗</b></div></a></section>'+finalcta()+'</main>'
  body+='''<dialog class="project-lightbox" aria-label="Προβολή εικόνων έργου"><div class="lightbox-bar"><p id="lightbox-counter" aria-live="polite"></p><button type="button" data-gallery-close aria-label="Κλείσιμο προβολής">Κλείσιμο ×</button></div><div class="lightbox-stage"><button type="button" data-gallery-prev aria-label="Προηγούμενη εικόνα">←</button><img alt=""><button type="button" data-gallery-next aria-label="Επόμενη εικόνα">→</button></div><p id="lightbox-caption" aria-live="polite"></p><p class="lightbox-hint">← → για εναλλαγή · Esc για κλείσιμο</p></dialog>'''
  page('erga--'+p['slug'],p['title']+' | Έργα Arcus Development',p['summary'],body)
