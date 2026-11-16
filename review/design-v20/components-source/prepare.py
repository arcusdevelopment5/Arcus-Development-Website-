import sys
sys.path.insert(0,'/tmp/arcus-python')
from bs4 import BeautifulSoup as S
from pathlib import Path
p=Path(__file__).resolve().parent.parent/'dist/el/erga/athanasiou-diakou-16/index.html'
s=S(p.read_text(),'html.parser')
if not s.select_one('#arcus-parallax-mount'):
 mount=s.new_tag('div',id='arcus-parallax-mount');s.select_one('#after-photos').insert_before(mount)
 s.head.append(s.new_tag('link',rel='stylesheet',href='/carousel.css'))
 script=s.new_tag('script',type='module',src='/assets/arcus-parallax.js');s.body.append(script)
p.write_text(str(s))
