from urllib.request import urlopen
from bs4 import BeautifulSoup
import re



def crdb(url):
    html = urlopen(url)  
    bsObject = BeautifulSoup(html, "html.parser")
    htmlparsed = bsObject.select('a[target][href]')
    cid = []
    cname = []
    for text in htmlparsed:
        cid.append(''.join(re.findall('cid\=(.+)\&amp', str(text))))
        cname.append(''.join(re.findall('title="(.+)"\/>', str(text))))
    cid = list(filter(None, cid))
    cname = list(filter(None, cname))
    return cid, cname




