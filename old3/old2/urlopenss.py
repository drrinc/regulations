from urllib.request import urlopen
import re


def getdb(url):

    html = urlopen(url)
    htmlread = html.read().decode('utf-8')
    htmlnoblank = list(filter(None, htmlread.replace("	", "").replace("\r", "").split('\n')))

    cidreg = '<a target\="_blank" href\="\/yugiohdb\/card\_search\.action\?ope\=2&cid\=(.+)\&'
    cidREG = 'cid\=(.+)\&'
    cnamereg = '<img class\="card\_image\_(monster|spell|trap|extra)\_\d+\_1" alt\=".+" title\="(.+)" class\="none">'
    cnameREG = 'title\="(.+)" class\="none">'

    htmlfiltered = []
    for text in htmlnoblank:
        if re.search(cidreg, str(text)) or re.search(cnamereg, str(text)):
            htmlfiltered.append(str(text))

    htmlfiltered = list(filter(None, htmlfiltered))


    cid = []
    cname = []


    for text in htmlfiltered:
        cid.append(''.join(re.findall(cidREG, str(text))))
        cname.append(''.join(re.findall(cnameREG, str(text))))
    cid = list(filter(None, cid))
    cname = list(filter(None, cname))

    return cid, cname




