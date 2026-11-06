"""Authors every page of arcusdevelopment.gr into site/pages/*.html.

Design: the ARCUSCRM-533 "monograph" redesign. One stylesheet (public/styles.css), one script
(public/app.js). Text and facts are the approved copy of the previous version; legal text lives
verbatim in site/data/legal/. Run with `npm run content`.
"""
from pathlib import Path
from html import escape as esc
import json, re
from PIL import Image

import project_portfolio as portfolio
import company_story
import one_stop_journey
from plan_transition import plan_transition

ROOT = Path(__file__).resolve().parents[1]
P = ROOT / 'site/pages'
P.mkdir(parents=True, exist_ok=True)
projects = json.loads((ROOT / 'site/data/drive-projects.json').read_text())

HOME = '/el'; RES = '/el/oliki-anakainisi-diamerismatos'; INV = '/el/ependytiki-anakainisi-diamerismatos'
CONTACT = '/el/epikoinonia'; WORK = '/el/erga'; PROCESS = '/el/diadikasia'; WARRANTY = '/el/eggyisi-ypostirixi'
OSS = '/el/one-stop-shop'; BLOG = 'https://arcusrealestate.gr/el/blog'; PRIVACY = '/el/aporrito'
companylinks = [('/el/etaireia', 'Ποιοι είμαστε'), ('/el/filosofia', 'Φιλοσοφία & αξίες'), (PROCESS, 'Η διαδικασία'),
                ('/el/sychnes-erotiseis', 'Συχνές ερωτήσεις'), ('/el/techniko-lexiko', 'Τεχνικό λεξικό')]

# ---------------------------------------------------------------- small building blocks
ARROW = '<span class="arw" aria-hidden="true">↗</span>'


def btn(url, label, cls='btn', extra=''):
    return f'<a class="{cls}" href="{url}" {extra}>{label}{ARROW}</a>'


def more(url, label, extra=''):
    return f'<a class="more" href="{url}" {extra}>{label}{ARROW}</a>'


def eyebrow(t):
    return f'<p class="eyebrow">{t}</p>'


def pic(src, alt, loading='lazy', cls='', sizes='(max-width: 700px) 100vw, 60vw'):
    path = ROOT / 'public' / src.lstrip('/')
    w, h = Image.open(path).size if path.exists() else (1440, 960)
    srcset = ''
    thumb = src.replace('.webp', '-640.webp')
    if src.startswith('/assets/portfolio/') and (ROOT / 'public' / thumb.lstrip('/')).exists():
        tw = Image.open(ROOT / 'public' / thumb.lstrip('/')).width
        srcset = f' srcset="{thumb} {tw}w, {src} {w}w" sizes="{sizes}"'
    fetch = ' fetchpriority="high"' if loading == 'eager' else ''
    c = f' class="{cls}"' if cls else ''
    return f'<img{c} src="{src}"{srcset} alt="{esc(alt)}" width="{w}" height="{h}" loading="{loading}" decoding="async"{fetch}>'


def head(k, title, text='', side=''):
    """Section heading: eyebrow + serif title on the left, short text or link on the right."""
    right = f'<div class="sec-side">{f"<p>{text}</p>" if text else ""}{side}</div>' if (text or side) else ''
    return f'<div class="sec-head">{f"<div>{eyebrow(k)}<h2>{title}</h2></div>"}{right}</div>'


def intro(k, title, description, cta=None, cls=''):
    return (f'<section class="intro wrap {cls}">{eyebrow(k)}<h1 class="display">{title}</h1>'
            f'<div class="intro-foot"><p class="lede">{description}</p>{cta or ""}</div></section>')


def steps(items, cls='steps'):
    return f'<ol class="{cls}">' + ''.join(
        f'<li><span class="num">{i + 1:02d}</span><h3>{t}</h3><p>{d}</p></li>' for i, (t, d) in enumerate(items)) + '</ol>'


def faq(items):
    return '<div class="faq">' + ''.join(
        f'<details><summary><span>{q}</span><i aria-hidden="true"></i></summary><div><p>{a}</p></div></details>'
        for q, a in items) + '</div>'


def finalcta(intent=''):
    return (f'<section class="closing"><div class="wrap closing-inner">{eyebrow("Το επόμενο κεφάλαιο")}'
            f'<h2>Έχεις ένα διαμέρισμα.<br><em>Ας δούμε τι μπορεί να γίνει.</em></h2>'
            f'<div class="closing-actions">{btn(CONTACT + intent, "Περιέγραψέ μας το ακίνητό σου", "btn btn-light", "data-event=\"click_primary_cta\"")}'
            f'<a class="closing-phone" href="tel:+302310445935" data-event="click_phone"><span>ή κάλεσε</span>2310 445 935</a></div></div></section>')


def legal(name):
    html = (ROOT / 'site/data/legal' / name).read_text().strip()
    return html.replace('class="arc-link"', 'class="more"').replace('class="editorial-list"', 'class="list"').replace(
        '<span aria-hidden="true">↗</span>', ARROW)


# ---------------------------------------------------------------- header and footer
def nav_desktop():
    blurbs = {'/el/etaireia': 'Δημιουργούμε χώρους. Ανοίγουμε δυνατότητες.', '/el/filosofia': 'Όσα πιστεύουμε, σε όσα δημιουργούμε.',
              PROCESS: 'Από την πρώτη συζήτηση μέχρι μετά την παράδοση.', '/el/sychnes-erotiseis': 'Μια καθαρή εικόνα πριν από την πρώτη απόφαση.',
              '/el/techniko-lexiko': 'Μια κοινή γλώσσα για τη δημιουργία.'}
    company = ''.join(f'<a href="{u}"><span>{i + 1:02d}</span><strong>{l}</strong><small>{blurbs[u]}</small><b aria-hidden="true">↗</b></a>' for i, (u, l) in enumerate(companylinks))
    company_mega = (
        '<div class="mega" id="company-menu"><div class="mega-inner"><div class="mega-intro"><div>' + eyebrow('Ο κόσμος της Arcus')
        + '<p class="mega-lead">Γιατί δημιουργούμε.<br>Πώς δουλεύουμε.<br><em>Τι κάνουμε.</em></p></div>'
        + f'<a class="mega-photo" href="{WORK}">{pic("/assets/portfolio/soulioti-17/home-kitchen-light.webp", "Ανακαινισμένη κουζίνα της Arcus Development με ξύλο, ανθρακί επιφάνειες και φυσικό φως", sizes="30vw")}<span>Τα έργα μας ↗</span></a></div>'
        + f'<div class="mega-links">{company}</div></div></div>')
    paths_mega = (
        '<div class="mega" id="service-menu"><div class="mega-inner"><div class="mega-intro"><div>' + eyebrow('Δύο διαδρομές. Μία ολοκληρωμένη εμπειρία.')
        + '<p class="mega-lead">Τι θέλεις<br>να <em>δημιουργήσεις;</em></p></div>'
        + f'{more(OSS, "Όλο το δίκτυο: One Stop Shop")}</div><div class="mega-paths">'
        + f'<a href="{RES}" data-event="select_service_home">{pic("/assets/portfolio/soulioti-17/home-kitchen-light.webp", "Ανακαινισμένη κουζίνα με ανθρακί ντουλάπια, ξύλινη επένδυση και φυσικό φως", sizes="35vw")}<div><span>01</span><strong>Για το σπίτι μου.</strong><small>Ολική ανακαίνιση, με αφετηρία τη δική σου καθημερινότητα.</small></div><b aria-hidden="true">↗</b></a>'
        + f'<a href="{INV}" data-event="select_service_investment">{pic("/assets/portfolio/kolokotroni-14/investment-studio.webp", "Κουζίνα και καθιστικό ανακαινισμένης γκαρσονιέρας στην Κολοκοτρώνη 14", sizes="35vw")}<div><span>02</span><strong>Για επένδυση.</strong><small>Λειτουργική αξιοποίηση, με τεχνικό έλεγχο πριν από κάθε απόφαση.</small></div><b aria-hidden="true">↗</b></a>'
        + '</div></div></div>')
    return (
        '<nav class="nav" aria-label="Κύρια πλοήγηση">'
        f'<details class="drop"><summary aria-controls="company-menu">Η εταιρεία μας<i aria-hidden="true"></i></summary>{company_mega}</details>'
        f'<a href="{WORK}">Τα έργα μας</a>'
        f'<details class="drop"><summary aria-controls="service-menu">Οι υπηρεσίες μας<i aria-hidden="true"></i></summary>{paths_mega}</details>'
        f'<a href="{OSS}">One Stop Shop</a><a href="{BLOG}">Blog</a><a href="{CONTACT}">Επικοινωνία</a></nav>')


def nav_mobile():
    return (
        '<nav class="mnav" id="mnav" aria-label="Πλοήγηση κινητού" hidden><div class="mnav-inner">'
        f'<a href="{HOME}">Αρχική</a>'
        f'<details><summary>Η εταιρεία μας</summary><div>{"".join(f"<a href=\"{u}\">{l}</a>" for u, l in companylinks)}</div></details>'
        f'<a href="{WORK}">Τα έργα μας</a>'
        f'<details><summary>Οι υπηρεσίες μας</summary><div><a href="{RES}">Για το σπίτι μου</a><a href="{INV}">Για επένδυση</a></div></details>'
        f'<a href="{OSS}">One Stop Shop</a><a href="{BLOG}">Blog</a><a href="{WARRANTY}">Εγγύηση & φροντίδα</a><a href="{CONTACT}">Επικοινωνία</a>'
        f'<div class="mnav-foot">{btn(CONTACT, "Συζήτησε το έργο σου", "btn", "data-event=\"click_primary_cta\"")}<a href="tel:+302310445935">2310 445 935</a></div>'
        '</div></nav>')


header = (
    '<header class="site-header"><div class="header-inner">'
    '<a class="brand" href="/el" aria-label="Arcus Development — Αρχική"><img src="/assets/arcus-development.png" alt="Arcus Development" width="202" height="138"></a>'
    + nav_desktop() +
    btn(CONTACT, 'Συζήτησε το έργο σου', 'btn btn-sm header-cta', 'data-event="click_primary_cta"') +
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mnav" aria-label="Άνοιγμα μενού"><span></span><span></span></button>'
    '</div>' + nav_mobile() + '</header>')

group_logos = [
    ('/el', '/assets/arcus-development.png', 'Arcus Development', 202, 138, 'Arcus Development — Αρχική', False),
    ('https://arcusrealestate.gr/el', '/assets/arcus-real-estate.png', 'Arcus Real Estate', 146, 87, 'Arcus Real Estate — ανοίγει σε νέα καρτέλα', True),
    (None, '/assets/arcus-lab.png', 'Arcus Lab', 204, 120, '', False),
    ('https://www.arcusbnb.com', '/assets/arcbnb.png', 'Arcus BnB — We manage properties', 172, 148, 'Arcus BnB — ανοίγει σε νέα καρτέλα', True),
    ('https://arcusrealestate.gr/el/blog', '/assets/estate.png', 'Estate Magazine', 228, 89, 'Estate Magazine — Διαβάστε τα περιοδικά μας (νέα καρτέλα)', True),
    ('https://www.youtube.com/@-arcusrealestate888', '/assets/brand/beyond-horizontal.png', 'Beyond Real Estate by Arcus Group', 1165, 405, 'Beyond Real Estate — Το podcast μας στο YouTube (νέα καρτέλα)', True),
]


def logo_item(u, src, alt, w, h, label, ext):
    img = f'<img src="{src}" alt="{alt}" width="{w}" height="{h}" loading="lazy">'
    if not u:
        return f'<li><span>{img}</span></li>'
    target = ' target="_blank" rel="noopener noreferrer"' if ext else ''
    return f'<li><a href="{u}"{target} aria-label="{label}">{img}</a></li>'


footer = (
    '<footer class="site-footer" id="footer" aria-label="Arcus Development — Πληροφορίες και δίκτυο"><div class="wrap">'
    '<div class="footer-top">'
    '<div class="footer-id"><a class="footer-brand" href="/el" aria-label="Arcus Development — Επιστροφή στην αρχή"><img src="/assets/arcus-development.png" alt="Arcus Development" width="202" height="138" loading="lazy"></a>'
    '<p class="footer-motto">Η πρώτη ύλη είναι η ιδέα σου.<br><em>Μαζί της δίνουμε μορφή.</em></p></div>'
    '<nav class="footer-col" aria-label="Γρήγοροι σύνδεσμοι"><h3>Σελίδες</h3>'
    f'<a href="/el">Αρχική</a><a href="/el/etaireia">Η εταιρεία μας</a><a href="{WORK}">Τα έργα μας</a><a href="/el#services">Υπηρεσίες</a><a href="{OSS}">One Stop Shop</a><a href="{BLOG}">Blog</a></nav>'
    '<nav class="footer-col" aria-label="Οδηγός"><h3>Οδηγός</h3>'
    f'<a href="{PROCESS}">Η διαδικασία</a><a href="/el/filosofia">Φιλοσοφία και αξίες</a><a href="/el/sychnes-erotiseis">Συχνές ερωτήσεις</a><a href="/el/techniko-lexiko">Τεχνικό λεξικό</a><a href="{WARRANTY}">Εγγύηση & φροντίδα</a></nav>'
    '<div class="footer-col footer-contact"><h3>Επικοινωνία</h3><address>Τσαλουχίδη 54, 2ος όροφος<br>Θεσσαλονίκη</address>'
    '<a href="tel:+302310445935">+30 2310 445 935</a><a href="mailto:info@arcusdevelopment.gr">info@arcusdevelopment.gr</a>'
    f'<a class="footer-form" href="{CONTACT}">Στείλε μας ένα μήνυμα{ARROW}</a></div>'
    '</div>'
    '<div class="footer-group"><div class="footer-group-head"><p>Μέλος του Arcus Group</p><p>Όλες οι υπηρεσίες για το ακίνητό σου, κάτω από μία στέγη.</p></div>'
    '<ul class="group-logos" aria-label="Τα brands του Arcus Group">' + ''.join(logo_item(*g) for g in group_logos) + '</ul>'
    '<div class="footer-certs" aria-label="Πιστοποιήσεις και διακρίσεις Arcus">'
    '<a href="https://arcusrealestate.gr/el" target="_blank" rel="noopener noreferrer" title="ISO 9001 — Λειτουργία μεσιτικών γραφείων και δικτύου franchise"><img src="/assets/brand/iso-9001.png" alt="Arcus — ISO 9001, μεσιτικά γραφεία και δίκτυο franchise" width="263" height="391" loading="lazy"></a>'
    '<a href="https://arcusrealestate.gr/el" target="_blank" rel="noopener noreferrer" title="Great Place to Work — Δεκέμβριος 2025 έως Δεκέμβριος 2026"><img src="/assets/brand/great-place-to-work-2025-2026.webp" alt="Great Place to Work Certified — Δεκέμβριος 2025 έως Δεκέμβριος 2026, Ελλάδα" width="438" height="620" loading="lazy"></a>'
    '</div></div>'
    '<div class="footer-bottom"><p>Μελέτη <span aria-hidden="true">/</span> Ανακαίνιση <span aria-hidden="true">/</span> Φροντίδα</p>'
    '<p>© <span id="year">2026</span> ARCUS DEVELOPMENT Ε.Ε. · ΑΦΜ 802211949 · Αρ. ΓΕΜΗ 172215306000</p>'
    f'<p class="footer-legal"><a href="{PRIVACY}">Απόρρητο</a><a href="#top">Στην αρχή <span aria-hidden="true">↑</span></a></p></div>'
    '</div></footer>')
(ROOT / 'components/header.html').write_text(header)
(ROOT / 'components/footer-current.html').write_text(footer)


# ---------------------------------------------------------------- the page shell
def page(slug, title, description, body):
    route = '/el' if slug == 'home' else '/el/' + slug.replace('--', '/')
    schema = {'@context': 'https://schema.org', '@type': 'Organization', 'name': 'Arcus Development', 'url': 'https://arcusdevelopment.gr/el',
              'telephone': '+302310445935', 'address': {'@type': 'PostalAddress', 'streetAddress': 'Τσαλουχίδη 54, 2ος όροφος', 'addressLocality': 'Θεσσαλονίκη', 'addressCountry': 'GR'}}
    crumbs = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'Αρχική', 'item': 'https://arcusdevelopment.gr/el'},
        {'@type': 'ListItem', 'position': 2, 'name': title.split(' | ')[0], 'item': 'https://arcusdevelopment.gr' + route}]}
    if slug.startswith('erga--'):
        crumbs['itemListElement'].insert(1, {'@type': 'ListItem', 'position': 2, 'name': 'Τα έργα μας', 'item': 'https://arcusdevelopment.gr/el/erga'})
        crumbs['itemListElement'][-1]['position'] = 3
    m = re.search(r'<img[^>]+src="(/assets/portfolio/[^"]+)"', body)
    social = 'https://arcusdevelopment.gr' + (m.group(1) if m else '/assets/portfolio/soulioti-17/home-kitchen-light.webp')
    ld = '<script type="application/ld+json">' + json.dumps(schema, ensure_ascii=False) + '</script>'
    if slug != 'home':
        ld += '<script type="application/ld+json">' + json.dumps(crumbs, ensure_ascii=False) + '</script>'
    cta = '' if slug == 'epikoinonia' else f'<div class="sticky-cta is-hidden">{btn(CONTACT, "Συζήτησε το έργο σου", "btn", "data-event=\"click_primary_cta\"")}</div>'
    html = (
        '<!doctype html><html lang="el"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
        '<meta name="theme-color" content="#f5f2eb"><meta name="robots" content="noindex,nofollow">'
        f'<title>{esc(title)}</title><meta name="description" content="{esc(description)}"><link rel="canonical" href="https://arcusdevelopment.gr{route}">'
        f'<meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(description)}"><meta property="og:type" content="website">'
        f'<meta property="og:locale" content="el_GR"><meta property="og:url" content="https://arcusdevelopment.gr{route}"><meta property="og:site_name" content="Arcus Development">'
        f'<meta property="og:image" content="{social}"><meta property="og:image:alt" content="{esc(title)}"><meta name="twitter:card" content="summary_large_image">'
        f'<meta name="twitter:title" content="{esc(title)}"><meta name="twitter:description" content="{esc(description)}"><meta name="twitter:image" content="{social}">'
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/favicon.svg">'
        '<link rel="preload" href="/assets/manrope-greek.woff2" as="font" type="font/woff2" crossorigin>'
        '<link rel="stylesheet" href="/styles.css">' + ld +
        '<script>document.documentElement.classList.add("js")</script><script src="/app.js" defer></script></head>'
        f'<body id="top"><a class="skip" href="#main">Μετάβαση στο περιεχόμενο</a>{header}{body}{footer}{cta}</body></html>')
    (P / (slug + '.html')).write_text(html)


# ---------------------------------------------------------------- shared sections
home_steps = [('Ακούμε & αποτυπώνουμε', 'Ξεκινάμε από τον στόχο σου και τις πραγματικές δυνατότητες του χώρου.'),
              ('Σχεδιάζουμε & παρουσιάζουμε', 'Κατόψεις, υλικά και renders κάνουν τη νέα καθημερινότητα ορατή πριν από την κατασκευή.'),
              ('Οργανώνουμε & κατασκευάζουμε', 'Συμφωνούμε αντικείμενο, κόστος και πρόγραμμα. Συντονίζουμε συνεργεία και ελέγχουμε τις εργασίες.'),
              ('Παραδίδουμε & φροντίζουμε', 'Τελικός έλεγχος, παράδοση και υποστήριξη με τη συμφωνημένη γραπτή εγγύηση.')]
basefaq = [
    ('Πόσο διαρκεί μια ολική ανακαίνιση;', 'Η διάρκεια προκύπτει από την αποτύπωση, το αντικείμενο εργασιών, τις απαιτούμενες εγκρίσεις και τη διαθεσιμότητα υλικών. Το πρόγραμμα συμφωνείται πριν ξεκινήσει η κατασκευή.'),
    ('Πότε γνωρίζω το κόστος;', 'Μετά τον έλεγχο του ακινήτου και τον καθορισμό των εργασιών και προδιαγραφών. Η πρόταση περιγράφει συγκεκριμένο αντικείμενο, επιλογές και προϋπολογισμό. Τυχόν αλλαγές συζητούνται πριν εκτελεστούν.'),
    ('Θα δω τον χώρο σε 3D;', 'Η τρισδιάστατη παρουσίαση εντάσσεται στη μελέτη που συμφωνούμε, ώστε να κατανοήσεις τη διαρρύθμιση, τα υλικά και την ατμόσφαιρα πριν από την κατασκευή. Η έκταση και η αμοιβή της μελέτης ορίζονται στην πρόταση.'),
    ('Μπορεί κάθε διαμέρισμα να διαχωριστεί;', 'Όχι. Εξετάζουμε πρώτα την τεχνική και νομική δυνατότητα, τις υποδομές, τον φωτισμό, την πρόσβαση και τις απαιτούμενες εγκρίσεις με τον αρμόδιο μηχανικό.'),
    ('Τι καλύπτει η γραπτή εγγύηση 2 ετών;', 'Τις εργασίες και τα ζητήματα που αναφέρονται στους συμφωνημένους όρους του έργου. Η αποκατάσταση καλυπτόμενου προβλήματος γίνεται χωρίς πρόσθετη χρέωση. Η ακριβής κάλυψη, έναρξη και οι επιμέρους όροι καταγράφονται γραπτώς.')]


def guarantee():
    return ('<section class="warranty"><div class="wrap warranty-grid"><div class="warranty-mark" aria-hidden="true"><span>2</span><small>χρόνια<br>γραπτή εγγύηση</small></div>'
            f'<div class="warranty-copy">{eyebrow("Φροντίδα μετά την παράδοση")}<h2>Η σχέση μας δεν τελειώνει<br><em>με την παράδοση.</em></h2>'
            '<p>Παραδίδουμε το ανακαινισμένο σου διαμέρισμα με γραπτή εγγύηση καλής λειτουργίας 2 ετών για τις εργασίες που καλύπτονται από τη σύμβαση. Αν προκύψει καλυπτόμενο ζήτημα, αναλαμβάνουμε την αποκατάστασή του χωρίς πρόσθετη χρέωση, σύμφωνα με τους όρους της.</p>'
            f'{more(WARRANTY, "Δες πώς λειτουργεί η εγγύησή μας")}</div></div></section>')


def kitchen_comparison():
    return (
        '<figure class="compare" id="kitchen-transformation" data-comparison>'
        '<div class="compare-stage">' + pic('/assets/portfolio/grigoriou-palama-7/after-08.webp', 'Ολοκληρωμένη πράσινη κουζίνα με νησίδα — Γρηγορίου Παλαμά 7', sizes='100vw') +
        '<div class="compare-before">' + pic('/assets/portfolio/grigoriou-palama-7/before-01.webp', 'Η αρχική κουζίνα πριν από την ανακαίνιση — Γρηγορίου Παλαμά 7', sizes='100vw') + '</div>'
        '<span class="compare-tag tag-before">Πριν</span><span class="compare-tag tag-after">Μετά</span>'
        '<div class="compare-handle" aria-hidden="true"><span>↔</span></div>'
        '<input type="range" min="0" max="100" value="50" aria-label="Ποσοστό εμφάνισης αρχικής κουζίνας — Παλαμά 7" aria-valuetext="50% πριν, 50% μετά"></div>'
        '<div class="compare-foot"><div class="segmented" role="group" aria-label="Προβολή κουζίνας">'
        '<button type="button" data-compare-value="100" aria-pressed="false">Πριν</button><button type="button" data-compare-value="50" aria-pressed="true">Σύγκριση</button><button type="button" data-compare-value="0" aria-pressed="false">Μετά</button></div>'
        f'<figcaption>Γρηγορίου Παλαμά 7 · Πραγματικές φωτογραφίες πριν και μετά την ανακαίνιση. Οι γωνίες λήψης διαφέρουν. Σύρε ή χρησιμοποίησε τα βελάκια του πληκτρολογίου.</figcaption>'
        f'{more("/el/erga/grigoriou-palama-7", "Δες όλο το έργο")}</div></figure>')


def paths():
    rows = [('01', 'Για το σπίτι μου', 'Ολική ανακαίνιση διαμερίσματος', 'Το σπίτι σου, ξανασχεδιασμένο γύρω από τη ζωή σου. Από την πρώτη ιδέα μέχρι την ολοκληρωμένη παράδοση.', RES, 'select_service_home',
             '/assets/portfolio/soulioti-17/home-kitchen-light.webp', 'Ανακαινισμένη κουζίνα με ανθρακί ντουλάπια, ξύλινη επένδυση και φυσικό φως', 'Σουλιώτη 17'),
            ('02', 'Για επένδυση', 'Επενδυτική αξιοποίηση διαμερίσματος', 'Κάθε τετραγωνικό με σκοπό. Νέες διαρρυθμίσεις και, όπου είναι τεχνικά και νομικά εφικτό, περισσότερες αυτόνομες κατοικίες.', INV, 'select_service_investment',
             '/assets/portfolio/kolokotroni-14/investment-studio.webp', 'Κουζίνα και καθιστικό ανακαινισμένης γκαρσονιέρας στην Κολοκοτρώνη 14', 'Κολοκοτρώνη 14')]
    return '<div class="paths">' + ''.join(
        f'<a class="path" href="{u}" data-event="{ev}"><figure class="path-media">{pic(src, alt, sizes="(max-width: 900px) 100vw, 58vw")}<figcaption>{where} · Πραγματικό έργο</figcaption></figure>'
        f'<div class="path-copy"><p class="path-num">{n} <span>— {k}</span></p><h3>{t}</h3><p>{c}</p><span class="more">Εξερεύνησε την υπηρεσία{ARROW}</span></div></a>'
        for n, k, t, c, u, ev, src, alt, where in rows) + '</div>'


# ---------------------------------------------------------------- home
hero = (
    '<section class="hero"><div class="wrap hero-grid">'
    f'<div class="hero-copy">{eyebrow("Arcus Development · Θεσσαλονίκη")}<h1 class="display">Κάθε χώρος κρύβει<br><em>μια νέα αρχή.</em></h1>'
    '<p class="lede">Τη σχεδιάζουμε μαζί. Την κάνουμε πραγματικότητα. Ολικές ανακαινίσεις διαμερισμάτων, από την πρώτη κάτοψη έως την τελευταία λεπτομέρεια.</p>'
    f'<div class="actions">{btn(CONTACT, "Συζήτησε το έργο σου", "btn", "data-event=\"click_primary_cta\"")}{more(WORK, "Δες τις μεταμορφώσεις μας")}</div></div>'
    f'<div class="hero-plan">{plan_transition(auto=True)}<p class="hero-plan-link">{more("/el/erga/athanasiou-diakou-16", "Πραγματικό έργο · Η ιστορία του έργου")}</p></div>'
    '</div>'
    '<ul class="wrap proof"><li><b>Arcus Group</b>Μέλος του ομίλου</li><li><b>Μελέτη</b>πριν από την κατασκευή</li><li><b>2 χρόνια</b>γραπτή εγγύηση</li></ul></section>')

services_sec = (
    f'<section class="sec wrap" id="services">{head("01 — Δύο διαδρομές, μία ομάδα", "Ο δικός σου χώρος.<br><em>Ο δικός σου στόχος.</em>", "Δύο διαφορετικές αφετηρίες. Η ίδια φροντίδα στη μελέτη, στην υλοποίηση και σε κάθε λεπτομέρεια.")}'
    + paths() + '</section>')

compare_sec = (
    '<section class="sec sec-tint"><div class="wrap">'
    + head('02 — Πραγματική μεταμόρφωση', 'Ίδιο ακίνητο.<br><em>Μια άλλη καθημερινότητα.</em>', 'Σύρε τη γραμμή. Ανακάλυψε τη διαφορά.')
    + kitchen_comparison() + '</div></section>')

work_sec = (
    f'<section class="sec wrap" id="selected-works">{head("03 — Επιλεγμένα έργα", "Οι ιδέες μας,<br><em>στην πράξη.</em>", side=more(WORK, f"Όλα τα έργα ({len(projects)})"))}'
    + portfolio.showcase(projects, pic) + '</section>')

process_sec = (
    '<section class="sec sec-tint"><div class="wrap">'
    + head('04 — Από την ιδέα στο σπίτι σου', 'Πρώτα το βλέπεις.<br><em>Έπειτα το ζεις.</em>', side=more(PROCESS, 'Η διαδικασία αναλυτικά'))
    + steps(home_steps, 'steps steps-4') + '</div></section>')

investor_sec = (
    '<section class="sec wrap split">'
    f'<div class="split-copy">{eyebrow("05 — Πρώτα η εφικτότητα")}<h2>Η αξία ξεκινά<br>από τη σωστή <em>κάτοψη.</em></h2>'
    '<p>Πριν από οποιαδήποτε κατασκευή, εξετάζουμε τις δυνατότητες του διαμερίσματος. Συγκρίνουμε εναλλακτικές διαρρυθμίσεις και μελετάμε περισσότερες αυτόνομες κατοικίες, εφόσον είναι τεχνικά και νομικά εφικτό.</p>'
    f'{more(INV, "Εξερεύνησε την επενδυτική αξιοποίηση")}'
    '<p class="fine">Η τεχνική δυνατότητα και οι νόμιμες εγκρίσεις εξετάζονται ανά ακίνητο. Δεν προεξοφλούνται αριθμός ιδιοκτησιών, μίσθωμα ή απόδοση.</p></div>'
    f'<a class="split-visual split-photo" href="/el/erga/athanasiou-diakou-16">{pic("/assets/portfolio/athanasiou-diakou-16/after-22.webp", "Αθανασίου Διάκου 16 — κουζίνα με πορτοκαλί τοίχο, μία από τις τρεις νέες κατοικίες", sizes="(max-width: 900px) 100vw, 55vw")}</a></section>')

faq_sec = (
    '<section class="sec wrap faq-wrap">'
    f'<div class="faq-head">{eyebrow("Πριν ξεκινήσουμε")}<h2>Κάθε ερώτηση<br><em>έχει τη θέση της.</em></h2>{more("/el/sychnes-erotiseis", "Όλες οι απαντήσεις")}</div>'
    + faq(basefaq) + '</section>')

oss_teaser = (
    '<section class="sec sec-tint"><div class="wrap split split-oss">'
    f'<div>{eyebrow("Arcus Group · One Stop Shop")}<h2>Ένας χώρος.<br><em>Όλες οι δυνατότητες.</em></h2></div>'
    '<div><p class="lede">Η ανακαίνιση είναι ένα κεφάλαιο στην ιστορία του ακινήτου σου. Μέσα από το δίκτυο της Arcus, συνδέουμε τη δημιουργία του χώρου με την αγορά, τη διαχείριση, την εκτίμηση και τις υπηρεσίες που χρειάζεσαι πριν και μετά.</p>'
    f'{more(OSS, "Γνώρισε το One Stop Shop")}</div></div></section>')

home = '<main id="main">' + hero + services_sec + compare_sec + work_sec + process_sec + investor_sec + guarantee() + faq_sec + oss_teaser + finalcta() + '</main>'
page('home', 'Arcus Development | Ολικές Ανακαινίσεις Διαμερισμάτων', 'Ολική ανακαίνιση διαμερίσματος στη Θεσσαλονίκη για κατοικία ή επένδυση. Μελέτη, 3D, κατασκευή και 2ετής γραπτή εγγύηση.', home)

# ---------------------------------------------------------------- service pages
method_sec = (
    '<section class="sec sec-tint"><div class="wrap">'
    + head('Από την κάτοψη στην πραγματικότητα', 'Πρώτα το βλέπεις.<br><em>Έπειτα το ζεις.</em>', 'Η μελέτη συνδέει αυτό που φαντάζεσαι με αυτό που κατασκευάζεται. Κάθε επιλογή έχει θέση μέσα σε ένα ολοκληρωμένο σχέδιο.')
    + '<ol class="steps steps-3 steps-label"><li><span class="num">Κάτοψη</span><h3>Κατανοούμε τον χώρο.</h3><p>Αποτύπωση και εναλλακτικές κατόψεις. Η λειτουργικότητα παίρνει μορφή.</p></li>'
    '<li><span class="num">Render</span><h3>Βλέπεις την πρόταση.</h3><p>Η τρισδιάστατη απεικόνιση βοηθά να εγκρίνεις υλικά, αναλογίες και ατμόσφαιρα.</p></li>'
    '<li><span class="num">Υλοποίηση</span><h3>Η ιδέα γίνεται χώρος.</h3><p>Οργανωμένη κατασκευή, έλεγχος και τελική παράδοση με βάση όσα συμφωνήσαμε.</p></li></ol>'
    + kitchen_comparison() + '</div></section>')

res_steps = [('Αποτύπωση & ανάγκες', 'Μετρήσεις και συζήτηση για τη χρήση κάθε δωματίου.'), ('Διαρρύθμιση & σχεδιασμός', 'Εναλλακτικές λύσεις, υλικά, φωτισμός και λειτουργικές λεπτομέρειες.'),
             ('Φωτορεαλιστική εικόνα', '3D παρουσίαση των επιλογών της συμφωνημένης μελέτης.'), ('Τεχνική οργάνωση', 'Προδιαγραφές, προϋπολογισμός και σειρά εργασιών.'),
             ('Συντονισμός κατασκευής', 'Συνεργεία, επικοινωνία και έλεγχοι ποιότητας.'), ('Παράδοση & φροντίδα', 'Τελικός έλεγχος, φάκελος έργου και γραπτή εγγύηση.')]
resbody = ('<main id="main">' + intro('01 — Για το σπίτι μου', 'Όχι απλώς ένα ανακαινισμένο σπίτι.<br><em>Το δικό σου σπίτι.</em>',
                                      'Κάθε άνθρωπος ζει διαφορετικά. Γι’ αυτό η ολική ανακαίνιση αρχίζει με τις ανάγκες, τις συνήθειες και την αισθητική σου. Αποτυπώνουμε τον υπάρχοντα χώρο, παρουσιάζουμε φωτορεαλιστικά τη νέα του διαμόρφωση και οργανώνουμε την κατασκευή.',
                                      btn(CONTACT + '?intent=home', 'Μίλησε με την ομάδα μας'))
           + f'<figure class="wrap wide-figure">{pic("/assets/portfolio/vyronos-37/edited-kitchen-living.webp", "Βύρωνος 37 — κουζίνα και καθιστικό σε ενιαίο χώρο", "eager", sizes="100vw")}<figcaption>Βύρωνος 37, Σταυρούπολη · Ολοκληρωμένο έργο Arcus Development</figcaption></figure>'
           + '<section class="sec wrap">' + head('Μια ενιαία εμπειρία', 'Από την ανάγκη<br><em>μέχρι την τελευταία λεπτομέρεια.</em>', 'Η μελέτη, τα renders και η κατασκευή συνδέονται μέσα στο ίδιο έργο. Το ακριβές αντικείμενο συμφωνείται πριν από την έναρξη.')
           + steps(res_steps, 'steps steps-3') + '<p class="fine">Αποξηλώσεις, δίκτυα, μπάνιο, κουζίνα, δάπεδα, κουφώματα, φωτισμός, χρωματισμοί και επίπλωση περιλαμβάνονται μόνο όπως ορίζονται στη συμφωνημένη τεχνική περιγραφή.</p></section>'
           + method_sec + guarantee()
           + f'<section class="sec wrap faq-wrap"><div class="faq-head">{eyebrow("Οι επιλογές σου")}<h2>Να ξέρεις<br><em>τι συμφωνούμε.</em></h2></div>'
           + faq([('Ποιος επιλέγει τα υλικά;', 'Η επιλογή γίνεται μαζί σου, με βάση τη μελέτη, τη χρήση των χώρων και το συμφωνημένο εύρος κόστους.'),
                  ('Ποιος συντονίζει τα συνεργεία;', 'Η ομάδα της Arcus οργανώνει τη σειρά των συμφωνημένων εργασιών και ορίζει το σημείο επικοινωνίας για το έργο.'), basefaq[1], basefaq[4]])
           + '</section>' + finalcta('?intent=home') + '</main>')
page('oliki-anakainisi-diamerismatos', 'Ολική Ανακαίνιση Διαμερίσματος | Arcus Development', 'Ολική ανακαίνιση διαμερίσματος στη Θεσσαλονίκη: αποτύπωση, διαρρύθμιση, 3D, υλικά, οργάνωση κατασκευής και 2ετής γραπτή εγγύηση.', resbody)

invbody = ('<main id="main">' + intro('02 — Για επένδυση', 'Περισσότερη αξία<br>από κάθε <em>τετραγωνικό.</em>',
                                      'Εξετάζουμε τις πραγματικές δυνατότητες ενός διαμερίσματος και σχεδιάζουμε λειτουργικές λύσεις για επενδυτική χρήση. Μελετάμε περισσότερες μικρότερες κατοικίες μόνο όταν οι τεχνικές και πολεοδομικές συνθήκες το επιτρέπουν.',
                                      btn(CONTACT + '?intent=investment', 'Ζήτησε αξιολόγηση διαμερίσματος'))
           + '<section class="sec wrap split split-plan">'
           f'<div class="split-copy">{eyebrow("Πρώτα η εφικτότητα")}<h2>Πρώτα εξετάζουμε.<br><em>Μετά σχεδιάζουμε.</em></h2><p>Η αποτύπωση, τα διαθέσιμα έγγραφα και ο έλεγχος από τον αρμόδιο μηχανικό προηγούνται της απόφασης κατασκευής. Κάθε πρόταση λαμβάνει υπόψη φωτισμό, ιδιωτικότητα, πρόσβαση και υποδομές.</p>'
           '<ul class="list"><li>Υφιστάμενη κατάσταση και τεχνικοί περιορισμοί</li><li>Κανονισμοί και απαιτούμενες εγκρίσεις</li><li>Εναλλακτικές λειτουργικές διαρρυθμίσεις</li><li>Σαφές αντικείμενο και προϋπολογισμός υλοποίησης</li></ul></div>'
           f'<div class="split-visual">{plan_transition()}</div></section>'
           '<section class="wrap case">'
           f'<a class="case-media" href="/el/erga/athanasiou-diakou-16">{pic("/assets/portfolio/athanasiou-diakou-16/after-24.webp", "Αθανασίου Διάκου 16 — ολοκληρωμένη κατοικία μετά την ανακαίνιση", sizes="(max-width: 900px) 100vw, 60vw")}</a>'
           f'<div class="case-copy">{eyebrow("Πραγματικό έργο · Τρεις κατοικίες")}<h3>Αθανασίου Διάκου 16</h3><p>Τρεις πλήρως επιπλωμένες κατοικίες, με θέρμανση αερίου και κλιματισμό. Δες τη μελέτη και το ολοκληρωμένο αποτέλεσμα.</p>{more("/el/erga/athanasiou-diakou-16", "Δες το έργο")}</div></section>'
           '<section class="sec sec-tint"><div class="wrap">'
           + head('Συγκρίνουμε πριν αποφασίσουμε', 'Η σωστή λύση<br><em>χρειάζεται τεκμηρίωση.</em>', 'Συγκρίνουμε τις εναλλακτικές διαρρυθμίσεις ως προς την επιφάνεια, τη λειτουργικότητα και το κόστος υλοποίησης. Έτσι μπορείς να αποφασίσεις με συγκεκριμένα κριτήρια.')
           + '<div class="table"><table><caption>Τι εξετάζουμε στις εναλλακτικές προτάσεις</caption><thead><tr><th scope="col">Κριτήριο</th><th scope="col">Τι περιλαμβάνει η μελέτη</th></tr></thead><tbody>'
           '<tr><th scope="row">Καθαρή ωφέλιμη επιφάνεια</th><td>Αποτύπωση και κατανομή ανά λειτουργικό χώρο.</td></tr><tr><th scope="row">Αυτονομία</th><td>Δυνατότητα ανεξάρτητης χρήσης, είσοδοι και εγκαταστάσεις.</td></tr>'
           '<tr><th scope="row">Ποιότητα κατοίκησης</th><td>Φυσικό φως, αερισμός, ιδιωτικότητα και κυκλοφορία.</td></tr><tr><th scope="row">Εφικτότητα</th><td>Περιορισμοί, απαιτούμενες εγκρίσεις και εκτιμώμενο αντικείμενο εργασιών.</td></tr>'
           '<tr><th scope="row">Εικόνα πριν την κατασκευή</th><td>3D renders των μονάδων που προβλέπει η συμφωνημένη μελέτη.</td></tr></tbody></table></div>'
           '<p class="fine">Ο διαχωρισμός εξετάζεται μόνο εφόσον είναι τεχνικά και νομικά εφικτός. Δεν παρέχεται προκαταβολική εγγύηση άδειας, μισθώματος ή επενδυτικής απόδοσης.</p></div></section>'
           + guarantee()
           + f'<section class="sec wrap faq-wrap"><div class="faq-head">{eyebrow("Επένδυση με σαφείς βάσεις")}<h2>Οι σωστές ερωτήσεις,<br><em>από την αρχή.</em></h2></div>'
           + faq([basefaq[3], ('Περιλαμβάνεται η μελέτη στην αρχική συζήτηση;', 'Στην πρώτη συζήτηση συγκεντρώνουμε βασικά στοιχεία και τον στόχο σου. Η έκταση, τα παραδοτέα και η αμοιβή αποτύπωσης, τεχνικού ελέγχου και μελέτης καθορίζονται στην πρόταση συνεργασίας.'),
                  ('Ποιος ελέγχει τις εγκρίσεις;', 'Ο κατάλληλος μηχανικός ελέγχει τις απαιτήσεις του συγκεκριμένου ακινήτου. Η τελική λύση διαμορφώνεται με βάση αυτόν τον έλεγχο.'), basefaq[4]])
           + '</section>' + finalcta('?intent=investment') + '</main>')
page('ependytiki-anakainisi-diamerismatos', 'Επενδυτική Ανακαίνιση & Διαχωρισμός Διαμερισμάτων | Arcus Development', 'Επενδυτική αξιοποίηση διαμερισμάτων στη Θεσσαλονίκη. Έλεγχος εφικτότητας, εναλλακτικές κατόψεις, 3D και οργανωμένη κατασκευή.', invbody)

# ---------------------------------------------------------------- process
fullsteps = [('Brief', 'Συζητάμε τη χρήση, τις ανάγκες, τον στόχο και τα βασικά στοιχεία του ακινήτου.', 'Συνοπτική καταγραφή στόχων και επόμενο βήμα.'),
             ('Αποτύπωση', 'Επίσκεψη, μετρήσεις, φωτογραφίες και αρχικός έλεγχος της υφιστάμενης κατάστασης.', 'Αποτύπωση του χώρου και των βασικών περιορισμών.'),
             ('Μελέτη', 'Εξετάζουμε διαρρυθμίσεις, λειτουργικές ανάγκες, υλικά και αισθητική κατεύθυνση.', 'Κάτοψη και προτεινόμενη αρχιτεκτονική λύση.'),
             ('Οπτικοποίηση', 'Παρουσιάζουμε τον σχεδιασμό σε 3D και επιβεβαιώνουμε τις συμφωνημένες επιλογές.', 'Εγκεκριμένη σχεδιαστική κατεύθυνση και renders σύμφωνα με τη μελέτη.'),
             ('Οργάνωση', 'Οριστικοποιούμε τεχνική περιγραφή, προϋπολογισμό, φάσεις και τις απαιτούμενες εγκρίσεις.', 'Συγκεκριμένη πρόταση, σύμβαση και πρόγραμμα.'),
             ('Υλοποίηση', 'Συντονίζουμε τις εργασίες, ελέγχουμε την ποιότητα και ενημερώνουμε για την πρόοδο.', 'Παρακολούθηση σταδίων και τελική παράδοση.'),
             ('After-sales', 'Ολοκληρώνουμε τον έλεγχο παραλαβής, τον φάκελο και τη γραπτή εγγύηση.', 'Φάκελος παράδοσης, 2ετής γραπτή εγγύηση και κανάλι αιτημάτων υποστήριξης.')]
body = ('<main id="main">' + intro('Η διαδικασία', 'Από την πρώτη συζήτηση.<br>Μέχρι <em>μετά την παράδοση.</em>', 'Η βεβαιότητα χτίζεται με καθαρά βήματα. Ξέρεις τι εξετάζουμε, τι αποφασίζουμε και τι παραλαμβάνεις σε κάθε στάδιο.')
        + company_story.subnav(PROCESS, companylinks)
        + '<section class="wrap timeline"><ol>' + ''.join(
            f'<li><span class="num">{i + 1:02d}</span><h2>{t}</h2><div><p>{d}</p><p class="deliverable"><span>Τι παραλαμβάνεις</span>{r}</p></div></li>' for i, (t, d, r) in enumerate(fullsteps))
        + '</ol><p class="fine">Η αποτύπωση, ο τεχνικός έλεγχος, η μελέτη και τα renders αποτελούν συγκεκριμένα παραδοτέα. Η έκταση και η αμοιβή τους συμφωνούνται πριν από την ανάθεση.</p></section>' + finalcta() + '</main>')
page('diadikasia', 'Η Διαδικασία Ανακαίνισης | Arcus Development', 'Τα επτά στάδια του έργου: brief, αποτύπωση, μελέτη, 3D, οργάνωση, κατασκευή και υποστήριξη μετά την παράδοση.', body)

# ---------------------------------------------------------------- warranty (approved legal text, verbatim)
wbody = ('<main id="main">' + intro('Φροντίδα μετά την παράδοση', 'Δίπλα σου.<br>Και <em>μετά την παράδοση.</em>', 'Ένα έργο ολοκληρώνεται όταν ο χώρος λειτουργεί όπως σχεδιάστηκε. Συνοδεύουμε τις καλυπτόμενες εργασίες με γραπτή εγγύηση καλής λειτουργίας 2 ετών.', btn(CONTACT + '?kind=support', 'Άνοιξε αίτημα υποστήριξης'))
         + guarantee()
         + f'<section class="sec wrap prose-split"><div>{eyebrow("Γραπτά. Καθαρά. Συγκεκριμένα.")}<h2>Η κάλυψη<br><em>του δικού σου έργου.</em></h2></div><div class="prose">{legal("eggyisi-terms.html")}</div></section>'
         + '<section class="sec sec-tint"><div class="wrap">' + head('After-sales', 'Πώς ζητάς<br><em>τη βοήθειά μας.</em>', 'Μια σαφής περιγραφή και λίγες φωτογραφίες βοηθούν την ομάδα να κατανοήσει το ζήτημα.')
         + '<ol class="steps steps-3 steps-label"><li><span class="num">01 · Αναφορά</span><h3>Περιέγραψε το ζήτημα.</h3><p>Χρησιμοποίησε τη φόρμα υποστήριξης ή κάλεσε στο 2310 445 935.</p></li>'
         '<li><span class="num">02 · Έλεγχος</span><h3>Εξετάζουμε την περίπτωση.</h3><p>Συσχετίζουμε το αίτημα με το έργο και τους γραπτούς όρους κάλυψης.</p></li>'
         '<li><span class="num">03 · Φροντίδα</span><h3>Οργανώνουμε το επόμενο βήμα.</h3><p>Για καλυπτόμενο πρόβλημα, η αποκατάσταση δεν επιβαρύνεται με πρόσθετη χρέωση.</p></li></ol></div></section>'
         + finalcta('?kind=support') + '</main>')
page('eggyisi-ypostirixi', 'Εγγύηση 2 Ετών & After-sales | Arcus Development', 'Γραπτή εγγύηση καλής λειτουργίας 2 ετών για τις καλυπτόμενες εργασίες και οργανωμένη υποστήριξη μετά την παράδοση.', wbody)


# ---------------------------------------------------------------- contact (form fields must match lib/inquiry-validation.mjs)
def field(name, label, kind='text', extra='', required=False):
    return (f'<div class="field"><label for="{name}">{label}{" <span>*</span>" if required else ""}</label>'
            f'<input id="{name}" name="{name}" type="{kind}" {extra} {"required" if required else ""} aria-describedby="{name}-error"><span class="field-error" id="{name}-error"></span></div>')


form = (
    '<form id="project-form" class="form" novalidate enctype="multipart/form-data"><input name="kind" type="hidden" value="project"><input name="source" type="hidden" value="/el/epikoinonia"><input name="idempotency" type="hidden">'
    '<div class="honeypot" aria-hidden="true"><label>Website<input name="website" autocomplete="off" tabindex="-1"></label></div>'
    '<fieldset class="intent-options"><legend>Τι θέλεις να δημιουργήσεις; <span>*</span></legend>'
    '<label><input type="radio" name="intent" value="home" required><span><b>01</b>Για το σπίτι μου</span></label>'
    '<label><input type="radio" name="intent" value="investment"><span><b>02</b>Για επένδυση</span></label><span class="field-error" id="intent-error"></span></fieldset>'
    '<div class="form-grid">' + field('name', 'Ονοματεπώνυμο', extra='autocomplete="name" maxlength="120"', required=True)
    + field('area', 'Περιοχή ακινήτου', extra='placeholder="Δήμος ή γειτονιά" maxlength="160"', required=True)
    + field('phone', 'Τηλέφωνο', 'tel', 'autocomplete="tel" maxlength="40"') + field('email', 'Email', 'email', 'autocomplete="email" maxlength="200"') + '</div>'
    '<p class="form-help">Χρειαζόμαστε τουλάχιστον έναν τρόπο επικοινωνίας: τηλέφωνο ή email.</p>'
    '<div class="form-grid">' + field('sqm', 'Εμβαδόν (m²) — προαιρετικό', 'number', 'min="1" max="10000" step="1"')
    + '<div class="field"><label for="timeline">Πότε το σκέφτεσαι; — προαιρετικό</label><select id="timeline" name="timeline"><option value="">Επίλεξε</option><option value="now">Άμεσα</option><option value="1-3">Σε 1–3 μήνες</option><option value="later">Αργότερα</option></select><span class="field-error" id="timeline-error"></span></div></div>'
    '<div class="field"><label for="description">Λίγα λόγια για τον χώρο — προαιρετικό</label><textarea id="description" name="description" rows="4" maxlength="3000" placeholder="Τι θα ήθελες να αλλάξει;"></textarea><span class="field-error" id="description-error"></span></div>'
    '<div class="field upload-field"><label for="files">Κάτοψη ή φωτογραφίες — προαιρετικό</label><input id="files" name="files" type="file" multiple accept="image/jpeg,image/png,image/webp,application/pdf" aria-describedby="files-help files-error">'
    '<p id="files-help">Έως 3 αρχεία · JPG, PNG, WebP ή PDF · 8 MB το καθένα. Αφαίρεσε στοιχεία ταυτότητας, τρίτων και ακριβείς διευθύνσεις.</p><span class="field-error" id="files-error"></span></div>'
    '<label class="privacy-check"><input type="checkbox" name="privacy" value="yes" required><span>Έχω διαβάσει την <a href="/el/aporrito" target="_blank" rel="noopener">ενημέρωση απορρήτου</a> για τη διαχείριση του αιτήματός μου. *</span></label><span class="field-error" id="privacy-error"></span>'
    '<div id="form-status" class="form-status" role="status" aria-live="polite" tabindex="-1"></div>'
    f'<button class="btn btn-submit" type="submit">Στείλε το αίτημά σου {ARROW}</button>'
    '<noscript><p>Για την ηλεκτρονική υποβολή χρειάζεται JavaScript. Μπορείς να μας καλέσεις στο <a href="tel:+302310445935">2310 445 935</a>.</p></noscript></form>')
contactbody = ('<main id="main">' + intro('Ας σχεδιάσουμε μαζί', 'Κάθε ιδέα ξεκινά<br>με μια <em>συζήτηση.</em>', 'Πες μας την περιοχή, το μέγεθος και τι θέλεις να αλλάξει. Θα επικοινωνήσουμε για να συζητήσουμε τις ανάγκες σου.')
               + '<section class="sec-tight wrap contact-grid"><aside class="contact-aside"><h2>Ο δικός σου χώρος.<br><em>Η επόμενη αρχή.</em></h2>'
               '<a class="contact-phone" href="tel:+302310445935" data-event="click_phone">2310 445 935</a><a class="contact-mail" href="mailto:info@arcusdevelopment.gr" data-event="click_email">info@arcusdevelopment.gr</a>'
               '<address>Τσαλουχίδη 54, 2ος όροφος<br>Θεσσαλονίκη</address>'
               f'<div class="contact-support"><p>Για υποστήριξη μετά την παράδοση:</p>{more(CONTACT + "?kind=support", "Αίτημα after-sales")}</div>'
               '<p class="fine">Η αρχική αίτηση δεν αποτελεί ανάθεση έργου ή επιβεβαίωση ραντεβού. Το αντικείμενο και η αμοιβή μελέτης και τεχνικού ελέγχου συμφωνούνται στην πρόταση.</p></aside>'
               f'<div class="form-card">{form}</div></section>'
               '<section class="sec wrap location" aria-labelledby="location-title">'
               f'<figure>{pic("/assets/arcus-headquarters.webp", "Το κτίριο των γραφείων Arcus στην Τσαλουχίδη 54, Θεσσαλονίκη", sizes="(max-width: 900px) 100vw, 55vw")}<figcaption>Τα γραφεία μας στην Τσαλουχίδη 54.</figcaption></figure>'
               f'<div>{eyebrow("Έλα να γνωριστούμε")}<h2 id="location-title">Οι ιδέες σου<br><em>έχουν διεύθυνση.</em></h2><address>Τσαλουχίδη 54, 2ος όροφος<br>Θεσσαλονίκη</address>'
               '<p>Πριν από την επίσκεψή σου, επικοινώνησε μαζί μας για να προγραμματίσουμε τη συνάντησή μας.</p>'
               '<a class="more" href="https://www.google.com/maps/dir/?api=1&amp;destination=Τσαλουχίδη+54,+Θεσσαλονίκη" target="_blank" rel="noopener noreferrer">Οδηγίες διαδρομής' + ARROW + '</a></div></section></main>')
page('epikoinonia', 'Συζήτησε το Έργο σου | Arcus Development', 'Αίτημα ολικής ανακαίνισης, επενδυτικής αξιοποίησης ή after-sales υποστήριξης. Arcus Development, Θεσσαλονίκη, 2310 445 935.', contactbody)

# ---------------------------------------------------------------- privacy (approved legal text, verbatim)
privacy = ('<main id="main">' + intro('Ενημέρωση απορρήτου', 'Τα στοιχεία σου.<br>Με <em>συγκεκριμένο σκοπό.</em>', 'Πώς χρησιμοποιούμε τα στοιχεία που μας στέλνεις μέσω της ιστοσελίδας και ποια δικαιώματα έχεις.')
           + f'<section class="wrap legal prose">{legal("aporrito.html")}</section></main>')
page('aporrito', 'Ενημέρωση Απορρήτου | Arcus Development', 'Πώς η ARCUS DEVELOPMENT Ε.Ε. χρησιμοποιεί τα στοιχεία της φόρμας επικοινωνίας, πόσο τα διατηρεί και ποια δικαιώματα έχεις.', privacy)

# ---------------------------------------------------------------- company section, portfolio, one stop shop
company_story.render(page, intro, eyebrow, head, more, btn, pic, steps, faq, basefaq, paths, finalcta, companylinks, ROOT)
portfolio.render(projects, page, intro, pic, eyebrow, head, more, finalcta)
page('one-stop-shop', 'One Stop Shop | Arcus Development', 'Το δίκτυο υπηρεσιών της Arcus για το ακίνητό σου: αγορά, ανακαίνιση, διαχείριση, εκτίμηση και εξειδικευμένη υποστήριξη.',
     '<main id="main">' + intro('Arcus Group · One Stop Shop', 'Ένας συνεργάτης.<br>Για κάθε <em>επόμενο βήμα.</em>', 'Όλες οι υπηρεσίες για το ακίνητό σου, κάτω από μία στέγη. Η Arcus Development δημιουργεί τον χώρο. Το δίκτυο της Arcus σε υποστηρίζει σε όλη τη διαδρομή του.', btn('#oss-journey', 'Εξερεύνησε τις υπηρεσίες'))
     + one_stop_journey.render(eyebrow)
     + '<section class="closing"><div class="wrap closing-inner">' + eyebrow('Ας ξεκινήσουμε από εσένα') + '<h2>Τι χρειάζεται<br><em>το ακίνητό σου σήμερα;</em></h2><div class="closing-actions">'
     + btn('https://arcusrealestate.gr/el/communication', 'Μίλησε με την ομάδα Arcus', 'btn btn-light') + '</div></div></section></main>')

# Retired pages must not survive regeneration or enter the sitemap.
for retired in ['admin', 'grafeio', 'erga--perraivou-9', 'erga--nea-paralia', 'erga--stavroupoli', 'erga--city-studio', 'kariera']:
    (P / (retired + '.html')).unlink(missing_ok=True)
print(f'Authored {len(list(P.glob("*.html")))} pages')
