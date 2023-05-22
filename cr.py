from urllib.request import urlopen
from bs4 import BeautifulSoup
import re


html = urlopen("https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=378c03716b23a8acc15d78df038b68ac&dno=129&request_locale=ko")  
bsObject = BeautifulSoup(html, "html.parser")
htmlparsed = bsObject.select('a[target][href]')

cid = []
cname = []

for text in htmlparsed:
    cid.append(''.join(re.findall('cid\=(.+)\&amp', str(text))))
    cname.append(''.join(re.findall('title="(.+)"\/>', str(text))))

cid = list(filter(None, cid))
cname = list(filter(None, cname))


print(cid)
print(cname)




