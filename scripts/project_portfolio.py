"""Portfolio: the projects index, the home showcase and one story page per project.

Data: site/data/drive-projects.json (the owner's curated archive). Facts come only from there.
"""
from html import escape as esc
from plan_transition import plan_transition

STAGES = {
    'archive': ('Αρχείο', 'Ο χώρος, μέσα από το αρχείο.', 'Διαθέσιμες φωτογραφίες του ακινήτου. Το στάδιο λήψης δεν έχει επιβεβαιωθεί ως πριν ή μετά την ανακαίνιση.'),
    'before': ('Πριν', 'Η αφετηρία.', 'Ο χώρος στην αρχική του κατάσταση, πριν από την παρέμβαση.'),
    'plans': ('Κάτοψη', 'Η σκέψη γίνεται σχέδιο.', 'Η οργάνωση του χώρου μέσα από τις κατόψεις της μελέτης.'),
    'renders': ('Render', 'Πριν γίνει πραγματικότητα.', 'Τρισδιάστατες απεικονίσεις της σχεδιαστικής πρότασης. Πρόκειται για renders, όχι για φωτογραφίες του ολοκληρωμένου έργου.'),
    'construction': ('Κατασκευή', 'Η αλλαγή, στην πράξη.', 'Στιγμιότυπα από την πορεία των εργασιών.'),
    'after': ('Μετά', 'Ο χώρος αποκτά ζωή.', 'Πραγματικές φωτογραφίες μετά την ολοκλήρωση της ανακαίνισης.'),
}


def status(p):
    return 'Σε εξέλιξη' if p['status'] == 'ongoing' else 'Ολοκληρωμένο'


def kinds(p):
    return [k for k in STAGES if any(g['kind'] == k and g['images'] for g in p['groups'])]


def card(p, pic, i=0, cls='', sizes='(max-width: 800px) 100vw, 50vw'):
    category = ' '.join(p.get('categories', []) + [p['status']])
    stages = ' · '.join(STAGES[k][0] for k in kinds(p))
    flag = f'<span class="flag {"flag-live" if p["status"] == "ongoing" else ""}">{status(p)}</span>'
    return (f'<article class="work {cls}" data-project-category="{category}"><a href="/el/erga/{p["slug"]}" data-event="view_project" aria-label="Δες το έργο {esc(p["title"])}">'
            f'<div class="work-media">{pic(p["cover"], p["cover_alt"], sizes=sizes)}{flag}</div>'
            f'<div class="work-copy"><p class="work-meta"><span>{i + 1:02d}</span>{esc(p.get("subtitle", "Ανακαίνιση κατοικίας"))}</p>'
            f'<h3>{esc(p["title"])}<span class="arw" aria-hidden="true">↗</span></h3><p class="work-stages">{stages}</p></div></a></article>')


def showcase(items, pic):
    order = ['athanasiou-diakou-16', 'artemidos-37', 'vyronos-37', 'kolokotroni-14']
    chosen = [next(p for p in items if p['slug'] == s) for s in order if any(p['slug'] == s for p in items)]
    layout = ['w-7', 'w-5 w-tall', 'w-5 w-tall', 'w-7']
    return '<div class="works works-showcase">' + ''.join(card(p, pic, items.index(p), layout[i]) for i, p in enumerate(chosen)) + '</div>'


def render(items, page, intro, pic, eyebrow, head, more, finalcta):
    complete = sum(p['status'] == 'completed' for p in items)
    body = '<main id="main">' + intro('Τα έργα μας', 'Οι ιδέες μας,<br><em>στην πράξη.</em>', 'Κάθε ανακαίνιση έχει τη δική της ιστορία. Ανακάλυψε την αρχική εικόνα, τις σχεδιαστικές επιλογές και τη διαδρομή προς τον νέο χώρο.')
    body += (f'<section class="wrap portfolio" id="project-collection"><div class="portfolio-bar"><p class="tally"><span><b>{len(items):02d}</b> έργα</span><span><b>{complete:02d}</b> ολοκληρωμένα</span><span><b>{len(items) - complete:02d}</b> σε εξέλιξη</span></p>'
             '<div class="segmented" role="group" aria-label="Φίλτρα έργων">')
    for key, label in [('all', 'Όλα'), ('completed', 'Ολοκληρωμένα'), ('ongoing', 'Σε εξέλιξη')]:
        body += f'<button type="button" data-project-filter="{key}" aria-pressed="{str(key == "all").lower()}">{label}</button>'
    body += (f'</div><p id="project-count" class="sr-only" aria-live="polite">{len(items)} έργα</p></div>'
             '<div class="works works-index">' + ''.join(card(p, pic, i, 'w-6') for i, p in enumerate(items)) + '</div>'
             '<div class="portfolio-empty" hidden><p>Δεν υπάρχουν έργα σε αυτή την επιλογή.</p></div></section>' + finalcta() + '</main>')
    page('erga', 'Τα έργα μας | Arcus Development', 'Οι ανακαινίσεις της Arcus Development: φωτογραφίες πριν και μετά, κατόψεις, renders και έργα σε εξέλιξη.', body)

    for index, p in enumerate(items):
        ks = kinds(p)
        body = (f'<main id="main" class="story"><section class="story-cover">{pic(p["cover"], p["cover_alt"], "eager", sizes="100vw")}'
                f'<div class="wrap story-cover-copy"><a class="story-back" href="/el/erga">← Τα έργα μας</a>'
                f'{eyebrow(esc(p.get("subtitle", "Arcus Development")) + " · " + status(p))}<h1 class="display">{esc(p["title"])}</h1>'
                f'<p class="lede">{esc(p["summary"])}</p><p class="story-cover-label">{esc(p["cover_label"])}</p></div></section>')
        body += '<nav class="chapters" aria-label="Στάδια παρουσίασης έργου"><div class="wrap">' + ''.join(
            f'<a href="#{k}"><span>{ks.index(k) + 1:02d}</span>{STAGES[k][0]}</a>' for k in ks) + '</div></nav>'
        intro_parts = ''
        if p.get('story'):
            intro_parts += (f'<div class="story-text">{eyebrow("Η ιδέα του έργου")}<h2>{esc(p.get("story_title", "Κάθε χώρος, μια νέα δυνατότητα."))}</h2>'
                            + ''.join(f'<p>{esc(t)}</p>' for t in p['story']) + '</div>')
        if p.get('facts'):
            intro_parts += '<dl class="facts">' + ''.join(f'<div><dt>{esc(f["label"])}</dt><dd>{esc(str(f["value"]))}</dd></div>' for f in p['facts']) + '</dl>'
        if intro_parts:
            body += f'<section class="sec wrap story-intro">{intro_parts}</section>'
        if p['status'] == 'ongoing':
            body += '<aside class="wrap notice"><span class="dot" aria-hidden="true"></span><p>Το έργο βρίσκεται σε εξέλιξη. Οι εικόνες της πρότασης σημειώνονται ως renders· η τελική φωτογράφιση θα ακολουθήσει την ολοκλήρωση.</p></aside>'
        for k in ks:
            label, title, description = STAGES[k]
            num = f'{ks.index(k) + 1:02d}'
            body += f'<section id="{k}" class="stage {"stage-dark" if k == "renders" else ""}"><div class="wrap">' + head(f'{num} — {label}', title, description)
            if k == 'plans' and p['slug'] == 'athanasiou-diakou-16':
                body += f'<div class="stage-plan">{plan_transition()}</div>'
            for group in [g for g in p['groups'] if g['kind'] == k and g['images']]:
                if group.get('unit'):
                    body += f'<h3 class="stage-unit">{esc(group["unit"])}</h3>'
                body += f'<div class="gallery {"gallery-plans" if k == "plans" else ""}">'
                for n, img in enumerate(group['images']):
                    cap = img['alt']
                    big = k == 'plans' or n % 5 == 0
                    body += (f'<figure class="{"g-wide" if big else ""}"><a class="gallery-open" href="{img["src"]}" data-gallery="{k}" data-caption="{esc(cap)}" aria-label="Μεγέθυνση: {esc(cap)}">'
                             f'{pic(img["src"], cap, sizes="100vw" if big else "(max-width: 700px) 100vw, 50vw")}</a><figcaption><span>{label} / {n + 1:02d}</span>{esc(cap)}</figcaption></figure>')
                body += '</div>'
            body += '</div></section>'
        if p.get('public_note'):
            body += f'<p class="wrap story-note">{esc(p["public_note"])}</p>'
        nxt = items[(index + 1) % len(items)]
        body += (f'<section class="wrap next-story"><a href="/el/erga/{nxt["slug"]}"><div class="next-copy">{eyebrow("Επόμενη ιστορία")}'
                 f'<strong>{esc(nxt["title"])}<span class="arw" aria-hidden="true">↗</span></strong><span>{esc(nxt.get("subtitle", ""))}</span></div>'
                 f'<div class="next-media">{pic(nxt["cover"], nxt["cover_alt"], sizes="(max-width: 800px) 100vw, 50vw")}</div></a></section>' + finalcta() + '</main>')
        body += ('<dialog class="lightbox" aria-label="Προβολή εικόνων έργου"><div class="lightbox-bar"><p id="lightbox-counter" aria-live="polite"></p>'
                 '<button type="button" data-gallery-close aria-label="Κλείσιμο προβολής">Κλείσιμο ×</button></div>'
                 '<div class="lightbox-stage"><button type="button" data-gallery-prev aria-label="Προηγούμενη εικόνα">←</button><img alt=""><button type="button" data-gallery-next aria-label="Επόμενη εικόνα">→</button></div>'
                 '<p id="lightbox-caption" aria-live="polite"></p></dialog>')
        page('erga--' + p['slug'], p['title'] + ' | Έργα Arcus Development', p['summary'], body)
