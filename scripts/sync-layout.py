#!/usr/bin/env python3
"""Compatibility entry point: regenerate shared layout and compile all pages."""
from pathlib import Path
import subprocess
import sys
root = Path(__file__).resolve().parents[1]
for script in ('author-site.py', 'build-pages.py'):
    subprocess.run([sys.executable, str(root / 'scripts' / script)], check=True)
