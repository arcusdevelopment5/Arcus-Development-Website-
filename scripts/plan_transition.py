"""Presentation from the owner's DWG geometry, aligned without redrawing walls."""
import json
from pathlib import Path
CAD=json.loads((Path(__file__).resolve().parents[1]/'site/data/diakou-cad-paths.json').read_text())
def plan_transition(hero=False):
 svg='<svg viewBox="0 0 1000 630" role="img" aria-label="Αθανασίου Διάκου 16 — πραγματική κάτοψη πριν και μετά τον διαχωρισμό, από το αρχείο CAD">'
 for group,items in CAD.items():
  phase,kind=group.split('-')
  cls={'fixed':'plan-fixed','before':'plan-old','after':'plan-new'}[phase]
  weight={'walls':'plan-wall','openings':'plan-opening','furniture':'plan-furnishing'}[kind]
  svg+=f'<g class="{cls} {weight}">'
  for i,d in enumerate(items):
   delay=round((i/max(1,len(items)-1))*.65,3)
   svg+=f'<path d="{d}" pathLength="1" style="--delay:{delay}s"/>'
  svg+='</g>'
 svg+='</svg>'
 return '''<div class="plan-transition" data-plan-transition data-state="before"><div class="plan-transition-top"><span>ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ 16</span><span data-plan-state aria-live="polite">01 / Αρχική κατάσταση</span></div><div class="plan-transition-stage">'''+svg+'''<button type="button" data-plan-switch aria-pressed="false" aria-label="Εμφάνιση νέας διαρρύθμισης"><span aria-hidden="true">+</span></button></div><div class="plan-transition-controls"><p data-plan-description>Η αρχική διαρρύθμιση.</p><button type="button" data-plan-pause aria-pressed="false" aria-label="Παύση αυτόματης εναλλαγής">Παύση Ⅱ</button></div><p class="plan-source-note">Αθανασίου Διάκου 16 · Από τις πραγματικές κατόψεις του έργου.</p><div class="plan-source-links"><a href="/assets/plans/diakou-before.webp" target="_blank" rel="noopener">Αρχική κάτοψη ↗</a><a href="/assets/plans/diakou-after.webp" target="_blank" rel="noopener">Κάτοψη διαχωρισμού ↗</a></div></div>'''
