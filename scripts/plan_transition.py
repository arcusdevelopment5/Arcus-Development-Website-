"""Athanasiou Diakou 16: the real plan before and after the split, drawn from the owner's DWG geometry."""
import json
from pathlib import Path

CAD = json.loads((Path(__file__).resolve().parents[1] / 'site/data/diakou-cad-paths.json').read_text())


def plan_transition(auto=False):
    svg = '<svg viewBox="0 0 1000 630" role="img" aria-label="Αθανασίου Διάκου 16 — πραγματική κάτοψη πριν και μετά τον διαχωρισμό, από το αρχείο CAD">'
    for group, items in CAD.items():
        phase, kind = group.split('-')
        cls = {'fixed': 'plan-fixed', 'before': 'plan-old', 'after': 'plan-new'}[phase]
        weight = {'walls': 'plan-wall', 'openings': 'plan-opening', 'furniture': 'plan-furnishing'}[kind]
        svg += f'<g class="{cls} {weight}">' + ''.join(f'<path d="{d}" pathLength="1"/>' for d in items) + '</g>'
    svg += '</svg>'
    return (
        '<figure class="plan" data-plan-transition data-state="before"' + (' data-plan-auto' if auto else '') + '>'
        '<div class="plan-bar"><span>Αθανασίου Διάκου 16 · Κάτοψη</span>'
        '<div class="segmented" role="group" aria-label="Κάτοψη πριν ή μετά τον διαχωρισμό">'
        '<button type="button" data-plan-show="before" aria-pressed="true">Πριν</button>'
        '<button type="button" data-plan-show="after" aria-pressed="false">Μετά</button></div></div>'
        f'<div class="plan-stage">{svg}</div>'
        '<figcaption><span data-plan-description aria-live="polite">Η αρχική διαρρύθμιση.</span>'
        '<span class="plan-links"><a href="/assets/plans/diakou-before.webp" target="_blank" rel="noopener">Αρχική κάτοψη ↗</a>'
        '<a href="/assets/plans/diakou-after.webp" target="_blank" rel="noopener">Κάτοψη διαχωρισμού ↗</a></span></figcaption>'
        '<p class="plan-note">Από τις πραγματικές κατόψεις του έργου.</p></figure>')
