#!/usr/bin/env python3
"""Scans public/audio/<lang>/*.mp3 and writes public/audio/manifest.json (run after adding recordings)."""
import json, pathlib
root = pathlib.Path('public/audio')
files = sorted(str(p.relative_to(root)).replace('\\', '/') for p in root.glob('*/*.mp3'))
(root / 'manifest.json').write_text(json.dumps(files, indent=2) + '\n')
print(len(files), 'clips listed')
