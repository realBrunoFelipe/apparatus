// common network Ports
// used by the pcapImport.js

const commonPorts = {
  7: 'Echo',
  19: 'Chargen',
  20: 'FTP Data',
  21: 'FTP Control',
  22: 'SSH (encrypted)',
  23: 'TELNET',
  25: 'SMTP',
  42: 'WINS Replication',
  43: 'Whois',
  49: 'TACAS',
  53: 'DNS',
  67: 'DHCP/BOOTP',
  68: 'DHCP/BOOTP',
  69: 'TFTP',
  70: 'Gopher',
  79: 'Finger',
  80: 'HTTP',
  81: 'TOR',
  88: 'Kerberos',
  102: 'MS Exchange',
  110: 'POP3',
  113: 'Ident',
  115: 'SFTP',
  119: 'NTTP',
  118: 'SQL Server',
  123: 'NTP',
  128: 'gss-xlicen',
  135: 'Microsoft RPC',
  137: 'NetBIOS',
  138: 'NetBIOS',
  139: 'NetBIOS',
  143: 'IMAP',
  150: 'sql-net',
  161: 'SNMP',
  162: 'SNMP',
  177: 'XDCMP',
  179: 'BGP',
  201: 'AppleTalk',
  264: 'BGMP',
  318: 'TSP',
  381: 'HP Openview',
  382: 'HP Openview',
  383: 'HP Openview',
  389: 'LDAP',
  411: 'Direct Connect (p2p)',
  412: 'Direct Connect (p2p)',
  443: 'HTTPS (encrypted)',
  449: 'AiCloud',
  445: 'Microsoft DS',
  464: 'Kerberos',
  465: 'SMTPS (encrypted)',
  497: 'Retrospect',
  512: 'rexec',
  513: 'rlogin',
  514: 'syslog',
  515: 'LPD/LPR',
  520: 'RIP',
  521: 'RPIng (IPv6)',
  540: 'UUCP',
  546: 'DHCP Client',
  547: 'DHCP Server',
  560: 'rmonitor',
  563: 'NNTP over SSL (encrypted)',
  587: 'SMTP',
  591: 'FileMaker',
  593: 'Microsoft DCoM',
  631: 'Internet Printing',
  636: 'LDAP over SSL (encrypted)',
  639: 'MSDP (PIM)',
  646: 'LDP (MPLS)',
  691: 'MS Exchange',
  853: 'DNS over TLS',
  860: 'iSCSI',
  873: 'rsync',
  902: 'VMware Server',
  989: 'FTP over SSL (encrypted)',
  990: 'FTP over SSL (encrypted)',
  993: 'IMAP4 over SSL (encrypted)',
  995: 'POP3 over SSL (encrypted)',
  1025: 'Microsoft RPC',
  1026: 'Windows Messenger',
  1027: 'Windows Messenger',
  1028: 'Windows Messenger',
  1029: 'Windows Messenger',
  1060: 'polestar',
  1080: 'MyDoom (malicious)',
  1101: 'pt2-discover or threat',
  1194: 'Open VPN',
  1214: 'Kazaa (p2p)',
  1241: 'Nessus',
  1311: 'Dell OpenManage',
  1337: 'WASTE (p2p)',
  1433: 'Microsoft SQL',
  1434: 'Microsoft SQL',
  1512: 'WINS',
  1589: 'Cisco VQP',
  1592: 'stone-design-1 or trojan',
  1593: 'netmap_lm',
  1606: 'slm-api',
  1701: 'L2TP',
  1723: 'MS PPTP',
  1725: 'Steam (gaming)',
  1741: 'CiscoWorks 2000',
  1755: 'MS Media server (streaming)',
  1812: 'RADIUS',
  1813: 'RADIUS',
  1863: 'MSN (Chat)',
  1985: 'Cisco HSRP',
  1988: 'tr-rsrb-p2',
  1989: 'tr-rsrb-p3',
  2000: 'Cisco SCCP',
  2002: 'Cisco ACS',
  2049: 'NFS',
  2082: 'cPanel',
  2083: 'cPanel',
  2100: 'Oracle XDB',
  2222: 'DirectAdmin',
  2483: 'Oracle DB',
  2484: 'Oracle DB',
  2555: 'compaq-wcp or trojan',
  2559: 'lstp',
  2745: 'Bagie.H (malicious)',
  2826: 'slc-systemlog',
  2828: 'slc-ctrlrloops',
  2829: 'silkp1',
  2830: 'silkp2',
  2831: 'silkp3',
  2832: 'silkp4',
  2833: 'glishd',
  2967: 'Symantic AV',
  3050: 'Interbase DB',
  3074: 'Xbox Live',
  3124: 'HTTP Proxy',
  3127: 'MyDoom',
  3128: 'Xbox Live',
  3222: 'GLBP',
  3260: 'iSCSI Target',
  3306: 'MySQL',
  3389: 'Remote Desktop Protocol',
  3689: 'iTunes',
  3690: 'Subversion',
  4333: 'mSQL',
  4444: 'Blaster (malicious)',
  4664: 'Google Desktop',
  5000: 'UPnP',
  5357: 'wsdapi',
  5432: 'PostgreSQL',
  5500: 'VNC server',
  5554: 'Sasser (malisious)',
  5800: 'VNC over HTTP',
  6000: 'X11',
  6001: 'X11',
  6129: 'DameWare',
  6566: 'SANE',
  6665: 'IRC (chat)',
  6666: 'IRC (chat)',
  6667: 'IRC (chat)',
  6668: 'IRC (chat)',
  6669: 'IRC (chat)',
  6679: 'IRC over SSL (encrypted)',
  6680: 'IRC over SSL (encrypted)',
  6681: 'IRC over SSL (encrypted)',
  6682: 'IRC over SSL (encrypted)',
  6683: 'IRC over SSL (encrypted)',
  6684: 'IRC over SSL (encrypted)',
  6685: 'IRC over SSL (encrypted)',
  6686: 'IRC over SSL (encrypted)',
  6687: 'IRC over SSL (encrypted)',
  6688: 'IRC over SSL (encrypted)',
  6689: 'IRC over SSL (encrypted)',
  6690: 'IRC over SSL (encrypted)',
  6691: 'IRC over SSL (encrypted)',
  6881: 'BitTorrent',
  6882: 'BitTorrent',
  6883: 'BitTorrent',
  6884: 'BitTorrent',
  6885: 'BitTorrent',
  6886: 'BitTorrent',
  6887: 'BitTorrent',
  6888: 'BitTorrent',
  6889: 'BitTorrent',
  6890: 'BitTorrent',
  6891: 'BitTorrent',
  6892: 'BitTorrent',
  6893: 'BitTorrent',
  6894: 'BitTorrent',
  6895: 'BitTorrent',
  6896: 'BitTorrent',
  6897: 'BitTorrent',
  6898: 'BitTorrent',
  6899: 'BitTorrent',
  6900: 'BitTorrent',
  6901: 'BitTorrent',
  6902: 'BitTorrent',
  6903: 'BitTorrent',
  6904: 'BitTorrent',
  6905: 'BitTorrent',
  6906: 'BitTorrent',
  6907: 'BitTorrent',
  6908: 'BitTorrent',
  6909: 'BitTorrent',
  6910: 'BitTorrent',
  6911: 'BitTorrent',
  6912: 'BitTorrent',
  6913: 'BitTorrent',
  6914: 'BitTorrent',
  6915: 'BitTorrent',
  6916: 'BitTorrent',
  6917: 'BitTorrent',
  6918: 'BitTorrent',
  6919: 'BitTorrent',
  6920: 'BitTorrent',
  6921: 'BitTorrent',
  8080: 'HTTP Proxy',
  8118: 'Privoxy',
  8866: 'Bagle.B (malicious)',
  9898: 'Dabber (malicious)',
  9988: 'Rbot/Spybot (malicious)',
  12345: 'NetBus (malicious)',
  62078: 'iPhone sync',
  63321: 'NSDP',
  63322: 'NSDP',
  63323: 'NSDP',
  63324: 'NSDP'
}

module.exports = commonPorts
