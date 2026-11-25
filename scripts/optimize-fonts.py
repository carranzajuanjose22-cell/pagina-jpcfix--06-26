import sys
from pathlib import Path
sys.path.insert(0,str(Path('.local/font-tools').resolve()))
from fontTools import subset
for path in Path('public/fonts').glob('*.ttf'):
    options=subset.Options()
    options.flavor='woff2'
    font=subset.load_font(str(path),options)
    job=subset.Subsetter(options=options)
    job.populate(unicodes=list(range(0x20,0x180))+[0x20ac,0x2013,0x2014,0x2018,0x2019,0x201c,0x201d,0x2022,0x2026,0x2713])
    job.subset(font)
    subset.save_font(font,str(path.with_suffix('.woff2')),options)
    print(path.name,'to WOFF2')
