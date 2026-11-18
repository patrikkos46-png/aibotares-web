// UKÁZKA – „Ares přepisuje text řecky“.
// Přečtený text (odjíždí nahoru) se rozpadne a složí znovu: odstavce v klasické (attické) řečtině,
// nadpisy v mykénském lineárním písmu B (přepis zvuku po slabikách, jak to dělali Mykéňané).
// Najetí myší / ťuknutí na odstavec vrátí češtinu. Český text zůstává ve stránce (Google, čtečky).
// Překlady jsou připravené předem, nic se nevolá naživo. Před zveřejněním je má zkontrolovat klasický filolog.
(function(){
 const CALM=matchMedia('(prefers-reduced-motion: reduce)').matches;   // omezený pohyb: přepíše se bez animace

 const GR={
 // Ukázky (sekce s videi)
 'Od plánku po prohlídku hotového bytu. Pár ukázek z toho, co připravíte v jedné aplikaci.':'Ἀπὸ τῆς διαγραφῆς μέχρι τῆς θέας τῆς ἑτοίμης οἰκίας. Ὀλίγα δείγματα ὧν ἐν μιᾷ τέχνῃ παρασκευάζετε.',
 'Prohlídka zařízeného bytu s výhledem do skutečné ulice. Kupující vidí, jak se v bytě bude žít.':'Θέα τῆς κατεσκευασμένης οἰκίας πρὸς ἀληθῆ ὁδὸν βλεπούσης. Ὁ ὠνούμενος ὁρᾷ πῶς ἐν αὐτῇ βιώσεται.',
 'Z projektové dokumentace vznikne dům, který si klient prohlédne ze všech stran.':'Ἐκ τῶν τοῦ ἀρχιτέκτονος γραμμάτων γίγνεται οἰκία, ἣν ὁ πελάτης πανταχόθεν θεᾶται.',
 'Papírový plán převedeme na prostorový model, ve kterém se dá procházet.':'Τὴν ἐν χάρτῃ διαγραφὴν εἰς στερεὸν πρόπλασμα μεταβάλλομεν, δι᾽ οὗ ἔξεστι περιπατεῖν.',
 'Půdorys nakreslíte přímo v telefonu nebo tabletu.':'Τὴν ἰχνογραφίαν αὐτοὶ γράφετε ἐν τῷ φορητῷ ἢ ἐν τῷ πινακίῳ.',
 'Plochy místností změříme z výkresu za vás.':'Τὰ ἐμβαδὰ τῶν δωματίων ἐκ τῆς διαγραφῆς ὑμῖν μετροῦμεν.',
 'Nábytek vyzkoušíte v místnosti přímo v mobilu.':'Τὰ σκεύη ἐν τῷ δωματίῳ πειρᾶσθε αὐτόθεν ἐν τῷ φορητῷ.',
 'Pozemek, dům i okolí z výšky dronu.':'Χωρίον, οἰκία καὶ τὰ πέριξ ἐξ ὕψους, ὥσπερ ὄρνις ὁρᾷ.',
 'Některé záběry jsou ilustrační.':'Ἔνιαι τῶν εἰκόνων παραδείγματος χάριν εἰσίν.',
 'Velitel vaší zakázky.':'Στρατηγὸς τοῦ ὑμετέρου ἔργου.',
 'Ares řídí armádu robotů a každý z nich umí jednu věc dokonale. Jeden rozsvítí tmavý pokoj, druhý srovná křivý záběr, třetí vyčistí bílé stěny, další připraví text inzerátu. Vy nahrajete fotky z mobilu, Ares rozdělí práci a hlídá výsledek.':'Ἄρης ἡγεῖται στρατοῦ αὐτομάτων, ὧν ἕκαστον ἓν ἄριστα ἐπίσταται. Τὸ μὲν φωτίζει τὸ σκοτεινὸν δωμάτιον, τὸ δὲ ὀρθοῖ τὴν σκολιὰν ὄψιν, τὸ δὲ τρίτον καθαίρει τοὺς λευκοὺς τοίχους, ἄλλο δὲ γράφει τὸ κήρυγμα. Ὑμεῖς μὲν τὰς εἰκόνας πέμπετε, Ἄρης δὲ διανέμει τὰ ἔργα καὶ φυλάττει τὸ τέλος.',
 'Za pár minut máte celou zakázku připravenou k prezentaci. Bez fotografa, bez Photoshopu a bez dlouhého čekání.':'Ἐν ὀλίγῳ χρόνῳ ὅλον τὸ ἔργον ἕτοιμον ἔχετε πρὸς ἐπίδειξιν, ἄνευ ζωγράφου, ἄνευ ἀλλοτρίας τέχνης, ἄνευ μακρᾶς ἀναμονῆς.',
 'Ares nejdřív načte celou fotku a pak ji rozloží na jednotlivé pixely. Díky tomu zná každý detail snímku a může s ním efektivně pracovat. Vy už jen doladíte finální výsledek.':'Ἄρης πρῶτον ὅλην τὴν εἰκόνα ἀναγιγνώσκει, ἔπειτα εἰς τὰ ἐλάχιστα στοιχεῖα διαιρεῖ. Διὰ τοῦτο ἕκαστα τῆς εἰκόνος οἶδε καὶ εὖ ἐργάζεται. Ὑμεῖς δὲ μόνον τὸ τέλος ἐπιτελεῖτε.',
 'Nahrajete fotky':'Πέμπετε τὰς εἰκόνας',
 'Rovnou z mobilu nebo z Google Disku. Přiřadíte místnosti a víc nic.':'Ἐκ τοῦ φορητοῦ. Τὰ δωμάτια ὀνομάζετε· οὐδὲν πλέον.',
 'Ares je projde':'Ἄρης ἐξετάζει',
 'Změří světlo, barvy a ostrost a ukáže přesný seznam, co jde zlepšit.':'Μετρεῖ φῶς καὶ χρώματα καὶ δείκνυσιν ἃ βελτίω γίγνεται.',
 'Roboti opraví':'Τὰ αὐτόματα ἐπανορθοῦσιν',
 'Každá fotka vletí do jádra, když ji robot opravdu zpracovává, a odletí upravená.':'Ἑκάστη εἰκὼν εἰς τὸν πυρῆνα εἰσπέτεται καὶ ἐκπέτεται ἐπηνωρθωμένη.',
 'Potvrdíte a hotovo':'Ἐπικυροῦτε, καὶ τετέλεσται',
 'Bezpečné opravy proběhnou samy, zbytek jen s vaším souhlasem. Fotky máte v projektu.':'Τὰ ἀσφαλῆ αὐτόματα γίγνεται, τὰ δὲ λοιπὰ ὑμῶν συναινούντων.',
 'Skutečné hodnoty z naší zkoušky na 15 fotkách bytu z mobilu, 11. 11. 2026.':'Ἀληθῆ μέτρα ἐκ τῆς ἡμετέρας πείρας ἐπὶ πεντεκαίδεκα εἰκόσιν οἰκίας, 11. 11. 2026.',
 'Stejná fotka z mobilu, vlevo jak přišla, vpravo po robotech Arese.':'Ἡ αὐτὴ εἰκών· ἀριστερᾷ ὡς ἦλθεν, δεξιᾷ μετὰ τὰ τοῦ Ἄρεως αὐτόματα.',
 'vizualizace':'φαντασία',
 'Návrhy pro představu kupujícího, vždy viditelně označené. Na vlastních fotkách nemovitosti zůstává skutečný stav.':'Παραδείγματα εἰς φαντασίαν τοῦ ὠνητοῦ, ἀεὶ φανερῶς σεσημασμένα. Ἐν ταῖς τοῦ κτήματος εἰκόσι μένει ἡ ἀληθὴς κατάστασις.',
 'Oddálení záběru':'Εὐρυτέρα ὄψις',
 'Širší pohled do malé místnosti.':'Πλατύτερον βλέμμα εἰς μικρὸν δωμάτιον.',
 'Odstranění předmětů':'Ἀφαίρεσις πραγμάτων',
 'Osoby, kabely a nepořádek zmizí.':'Ἄνθρωποι, σχοινία καὶ ἀταξία ἀφανίζονται.',
 'Úklid a ustlání':'Κόσμησις καὶ στρῶσις',
 'Ustlaná postel, uklizená linka, prázdný pokoj.':'Κλίνη ἐστρωμένη, τράπεζα κεκοσμημένη, δωμάτιον κενόν.',
 'Podlahy a stěny':'Ἐδάφη καὶ τοῖχοι',
 'Jiná podlaha nebo barva stěn za pár sekund.':'Ἄλλο ἔδαφος ἢ ἄλλο χρῶμα τοίχων ἐν ἀκαρεῖ.',
 'Koupelny a kuchyně':'Βαλανεῖα καὶ μαγειρεῖα',
 'Nové obklady, dlažba i barva linky.':'Καιναὶ πλάκες, καινὸν ἔδαφος καὶ καινὸν χρῶμα.',
 'Fasády, okna a dveře':'Πρόσωπα, θυρίδες καὶ θύραι',
 'Rodinné i činžovní domy v novém kabátě.':'Οἰκίαι τε καὶ συνοικίαι ἐν καινῷ ἱματίῳ.',
 'Garážová vrata':'Πύλαι τῶν ἁμαξῶν',
 'Moderní vrata místo starých.':'Καιναὶ πύλαι ἀντὶ τῶν παλαιῶν.',
 'Obrazy na zeď':'Γραφαὶ ἐπὶ τοῖχον',
 'Prázdné stěny přestanou působit holě.':'Οἱ κενοὶ τοῖχοι οὐκέτι γυμνοὶ φαίνονται.',
 'Titulek a text inzerátu':'Ἐπιγραφὴ καὶ κήρυγμα',
 'Z ověřených údajů o nemovitosti, vždy jako návrh k vaší kontrole.':'Ἐκ βεβαίων τῶν περὶ τοῦ κτήματος, ἀεὶ ὡς πρότασις εἰς τὴν ὑμετέραν ἐξέτασιν.',
 'Kontrola před zveřejněním':'Ἐξέτασις πρὸ τοῦ κηρύγματος',
 'Cena, údaje, půdorysy a chybějící podklady na jednom seznamu.':'Τιμή, στοιχεῖα, ἰχνογραφίαι καὶ τὰ ἐλλείποντα ἐν ἑνὶ καταλόγῳ.',
 'Marketing':'Ἀγορά',
 'Kampaně a texty pro vaše kanály a sítě.':'Κηρύγματα καὶ λόγοι εἰς τὰς ὑμετέρας ὁδούς.',
 'Video Lab':'Ἐργαστήριον κινήσεως',
 'Prezentace nemovitosti v pohybu.':'Ἐπίδειξις τοῦ κτήματος ἐν κινήσει.',
 'Katastr':'Ἀπογραφή',
 'Údaje k parcele na jednom místě.':'Τὰ περὶ τοῦ χωρίου ἐν ἑνὶ τόπῳ.',
 'Územní plán':'Διάταξις τῆς χώρας',
 'Co lze na pozemku postavit a podle jakých pravidel.':'Τί ἔξεστιν οἰκοδομεῖν ἐπὶ τοῦ χωρίου καὶ κατὰ τίνας νόμους.',
 'Dokumenty':'Γράμματα',
 'Přečte a roztřídí podklady a upozorní, když si odporují.':'Ἀναγιγνώσκει καὶ διακρίνει τὰ γράμματα, καὶ σημαίνει ὅταν ἀλλήλοις ἀντιλέγῃ.',
 'Ocenění a investice':'Τίμησις καὶ τόκοι',
 'Srovnatelné nemovitosti, výnos, cashflow a financování.':'Ὅμοια κτήματα, πρόσοδος, ῥοὴ χρημάτων καὶ δάνεια.',
 'Klienti a zájemci':'Πελάται καὶ ὠνηταί',
 'Přehled poptávek, komunikace a obchodního stavu.':'Σύνοψις τῶν αἰτήσεων, τῶν λόγων καὶ τῶν συναλλαγμάτων.',
 'Kalendář a úkoly':'Ἡμερολόγιον καὶ ἔργα',
 'Agenda nemovitosti i celé kanceláře.':'Τὰ πρακτέα τοῦ κτήματος καὶ ὅλου τοῦ ἐργαστηρίου.',
 'Kontrola trhu':'Σκοπιὰ τῆς ἀγορᾶς',
 'Uložená hledání, která hlídají nové nabídky za vás.':'Ζητήσεις σῳζόμεναι, αἳ τὰς καινὰς προσφορὰς ἀνθ᾽ ὑμῶν φυλάττουσιν.',
 'Automatizace':'Τὰ αὐτόματα',
 'Opakované kroky běží samy, vy jen schvalujete.':'Τὰ πολλάκις πραττόμενα αὐτόματα γίγνεται, ὑμεῖς δὲ μόνον ἐπικυροῦτε.',
 'Ares, váš pomocník v aplikaci.':'Ἄρης, ὁ ὑμέτερος βοηθός.',
 'Zeptáte se, poradí, kde co najdete a jaký je další krok.':'Ἐρωτᾶτε, καὶ συμβουλεύει ποῦ ἕκαστα εὑρήσετε καὶ τί πρακτέον ἔπειτα.',
 'Každá fotka z Arese nese neviditelný podpis AIBOTARES. Naše čtečka z něj pozná, jestli a jak byla fotka upravená.':'Ἑκάστη εἰκὼν ἐκ τοῦ Ἄρεως φέρει ἀφανῆ σφραγῖδα AIBOTARES. Ὁ ἡμέτερος ἀναγνώστης ἐξ αὐτῆς γιγνώσκει εἰ καὶ πῶς ἡ εἰκὼν μετεποιήθη.',
 'Prodej, pronájem, výstavba i investice. Ares pomáhá všude, kde nemovitost potřebuje dobře vypadat a mít v pořádku podklady.':'Πρᾶσις, μίσθωσις, οἰκοδομία καὶ τόκοι. Ἄρης πανταχοῦ βοηθεῖ, ὅπου δεῖ τὸ κτῆμα καλὸν φαίνεσθαι καὶ τὰ γράμματα ἐν τάξει ἔχειν.',
 'Fotíte sami na mobil a nemáte čas na úpravy. Ares připraví fotky i podklady k inzerátu, vy se věnujete klientům.':'Αὐτοὶ τῷ φορητῷ εἰκονίζετε καὶ σχολὴν οὐκ ἔχετε. Ἄρης τάς τε εἰκόνας καὶ τὰ τοῦ κηρύγματος παρασκευάζει, ὑμεῖς δὲ τοῖς πελάταις σχολάζετε.',
 'Jednotný vzhled inzerátů celé kanceláře, desítky zakázek týdně a přehled o každé z nich.':'Ὁμοία ὄψις πάντων τῶν κηρυγμάτων τοῦ ἐργαστηρίου, δεκάδες ἔργων καθ᾽ ἑβδομάδα καὶ σύνοψις ἑκάστου.',
 'Vizualizace fasád, interiérů a materiálů pro prodej bytů, které ještě nejsou dokončené.':'Φαντασίαι προσώπων, τῶν ἔνδον καὶ ὑλῶν πρὸς πρᾶσιν οἰκιῶν οὔπω τετελεσμένων.',
 'Katastr, územní plán a výpočet výnosu i cashflow dřív, než se rozhodnete koupit.':'Ἀπογραφή, διάταξις τῆς χώρας καὶ λογισμὸς τῆς προσόδου πρὶν ὠνήσασθαι.',
 'Světlé a čisté fotky, které přitáhnou nájemníky i hosty krátkodobých pronájmů.':'Λαμπραὶ καὶ καθαραὶ εἰκόνες, αἳ μισθωτάς τε καὶ ξένους ἐπισπῶνται.',
 'Ukažte zákazníkovi novou koupelnu, podlahu nebo fasádu dřív, než začnete stavět.':'Δείξατε τῷ πελάτῃ καινὸν βαλανεῖον, ἔδαφος ἢ πρόσωπον πρὶν οἰκοδομεῖν ἄρξασθαι.',
 'Profesionální fotky a hotový text inzerátu i bez realitní kanceláře.':'Ἔντεχνοι εἰκόνες καὶ ἕτοιμον κήρυγμα καὶ ἄνευ μεσίτου.',
 'Založte si účet a nahrajte první zakázku. Ares projde fotky a roboti je připraví k inzerci.':'Ἐγγράφεσθε καὶ τὸ πρῶτον ἔργον πέμπετε. Ἄρης τὰς εἰκόνας ἐξετάζει καὶ τὰ αὐτόματα πρὸς τὸ κήρυγμα παρασκευάζει.',
 'Celá zakázka najednou':'Ὅλον τὸ ἔργον ἅμα',
 'Před / Po u každé fotky':'Πρὸ / Μετὰ ἐφ᾽ ἑκάστης εἰκόνος',
 'Každá úprava poctivě označená podpisem AIBOTARES':'Πᾶσα μεταποίησις δικαίως σεσημασμένη τῇ σφραγῖδι AIBOTARES',
 'Cvičné tarify, ceny a limity doplníme před spuštěním.':'Τὰς τιμὰς καὶ τοὺς ὅρους πρὸ τῆς ἀρχῆς προσθήσομεν.'
 };

 // Lineární písmo B: slabiky souhláska+samohláska (Unicode U+10000–U+1003F).
 const LB={}; ['a','e','i','o','u'].forEach((v,i)=>LB[v]=0x10000+i);
 const ROWS={d:0x10005,j:0x1000A,k:0x1000F,m:0x10014,n:0x10019,p:0x1001E,q:0x10023,r:0x10028,s:0x1002D,t:0x10032,w:0x10037,z:0x1003C};
 for(const c in ROWS) ['a','e','i','o','u'].forEach((v,i)=>LB[c+v]=ROWS[c]+i);
 delete LB.ji; delete LB.qu; delete LB.wu; delete LB.zi; delete LB.zu;
 const FIX={ji:'i',qu:'ku',wu:'u',zi:'si',zu:'su'};
 const CONS={b:'p',c:'z','č':'z',d:'d','ď':'d',f:'p',g:'k',h:'',j:'j',k:'k',l:'r',m:'m',n:'n','ň':'n',p:'p',q:'k',r:'r','ř':'r',s:'s','š':'s',t:'t','ť':'t',v:'w',w:'w',x:'ks',z:'z','ž':'z'};
 const VOW={a:'a','á':'a',e:'e','é':'e','ě':'e',i:'i','í':'i',o:'o','ó':'o',u:'u','ú':'u','ů':'u',y:'i','ý':'i'};
 // Přepis: každá souhláska dostane samohlásku, která za ní následuje,
 // samohláska bez souhlásky se píše samostatně, koncové souhlásky se jako v mykénštině vynechají.
 function toLinearB(word){
  const s=word.toLowerCase().replace(/ch/g,'k'); let out='', cons=[];
  const syl=x=>{x=FIX[x]||x; return LB[x]!=null?String.fromCodePoint(LB[x]):'';};
  for(const c of s){
   if(VOW[c]!=null){ const v=VOW[c]; if(!cons.length) out+=syl(v); cons.forEach(k=>out+=syl(k+v)); cons=[]; }
   else if(CONS[c]!=null){ for(const k of CONS[c]) cons.push(k); }
   else { cons=[]; out+=c; }
  }
  if(!out.trim()&&cons.length) cons.forEach(k=>out+=syl(k+'e'));   // slova bez samohlásky (v, k, s)
  return out;
 }
 // Náhradní přepis do řecké abecedy pro text bez překladu.
 const TL={a:'α',á:'α',b:'β',c:'τσ',č:'τσ',d:'δ',ď:'δ',e:'ε',é:'η',ě:'ε',f:'φ',g:'γ',h:'',i:'ι',í:'ι',j:'ι',k:'κ',l:'λ',m:'μ',n:'ν',ň:'ν',o:'ο',ó:'ω',p:'π',q:'κ',r:'ρ',ř:'ρ',s:'σ',š:'σ',t:'τ',ť:'τ',u:'ου',ú:'ου',ů:'ου',v:'β',w:'β',x:'ξ',y:'υ',ý:'υ',z:'ζ',ž:'ζ'};
 const translit=t=>t.replace(/ch/gi,'χ').split('').map(c=>{const l=c.toLowerCase(),g=TL[l];return g==null?c:(c!==l?g.toUpperCase():g);}).join('').replace(/σ(?=[\s.,;:!?)]|$)/g,'ς');


 const POOL=[...'αβγδεζηθικλνξοπρστυφχψω'];   // jen malá písmena: jsou úzká, nepřekrývají sousední znaky
 const SKIP='form,button,.btn,.plan,.ba,.rooms,.chips,.stage,nav,.fight,.core,.meter,.nums';
 const targets=[...document.querySelectorAll('.hero .wrap h1,.hero .wrap p,section h2,section h3,section p,section li,section .eyebrow,.src,.honest')].filter(el=>!el.closest(SKIP));

 // Vzhled. Konečný stav (řečtina červeně, řecké číslo v ohnivém kolečku) nezávisí na animaci:
 // animace „rozžhavení“ jen krátce běží navíc a po 0,6 s se třída .burn zase odebere.
 const css=document.createElement('style');
 css.textContent=`
 .gw{display:none}
 .cw.x>.ch{font-size:0!important;opacity:0}
 .cw.x>.gw{display:inline}
 .gw{font-size:calc(1em * var(--gs,1));font-family:"GFS Didot",Didot,"Palatino Linotype",Palatino,Georgia,serif;color:#d7261b;-webkit-text-fill-color:#d7261b;text-shadow:0 0 6px #ff4a2a40;font-weight:inherit;letter-spacing:0}
 .gw.lb{font-family:"Noto Sans Linear B","NotoSansLinearB",sans-serif;letter-spacing:.02em}
 .gc{display:inline-block;white-space:pre;line-height:1}
 .cw.burn .gc{animation:aresBurn .45s cubic-bezier(.2,.7,.3,1)}
 @keyframes aresBurn{
  0%{opacity:.2;transform:translateY(5px) scale(1.2);color:#ffb347;-webkit-text-fill-color:#ffb347;text-shadow:0 0 14px #ff7a1a,0 0 3px #ffd27a}
  55%{opacity:1;transform:none;color:#ff5a1f;-webkit-text-fill-color:#ff5a1f;text-shadow:0 0 10px #ff6a1a}
  100%{color:#d7261b;-webkit-text-fill-color:#d7261b;text-shadow:0 0 6px #ff4a2a40}}
 .ch.s{color:transparent!important;-webkit-text-fill-color:transparent!important;position:relative}
 .ch.s::after{content:attr(data-g);position:absolute;left:0;top:0;color:#e2541c!important;-webkit-text-fill-color:#e2541c!important;text-shadow:0 0 8px #ff8a3a88;font-family:"GFS Didot",Didot,Georgia,serif!important}
 /* Čísla kroků 1–4 → řecké číslice Αʹ Βʹ Γʹ Δʹ v ohnivém kolečku. */
 @counter-style ares-gr{system:fixed;symbols:"Αʹ" "Βʹ" "Γʹ" "Δʹ" "Εʹ" "Ϛʹ" "Ζʹ" "Ηʹ" "Θʹ";fallback:decimal}
 .a1-steps li.ares-gr::before{content:counter(st,ares-gr)!important;font:600 15px/1 "GFS Didot",Didot,Georgia,serif!important;background:linear-gradient(135deg,#ff9a3a 0%,#e2541c 45%,#b3160f 100%)!important;color:#fff!important;box-shadow:0 6px 16px -6px #d7261baa!important}
 .a1-steps li.ares-gr.burn::before{animation:aresNum .5s cubic-bezier(.2,.7,.3,1)}
 @keyframes aresNum{0%{transform:scale(.6) rotate(-20deg);filter:brightness(1.6)}60%{transform:scale(1.12);filter:none}100%{transform:none}}`;
 document.head.appendChild(css);

 // Rozdělení textu: každé české slovo dostane svůj „slot“ s řeckým protějškem.
 const items=[];
 targets.forEach(el=>{
  if(el.dataset.split) return; el.dataset.split=1;
  const head=/^H[123]$/.test(el.tagName)||el.classList.contains('eyebrow');
  const slots=[];
  const walk=node=>{
   [...node.childNodes].forEach(n=>{
    if(n.nodeType===3){
     const key=n.textContent.replace(/\s+/g,' ').trim(); if(!key) return;
     const frag=document.createDocumentFragment(), words=[];
     n.textContent.split(/(\s+)/).forEach(part=>{
      if(!part) return;
      if(/^\s+$/.test(part)){frag.appendChild(document.createTextNode(part));return;}
      const w=document.createElement('span'); w.className='cw'; const chars=[];
      for(const c of part){const sp=document.createElement('span'); sp.className='ch'; sp.textContent=c; w.appendChild(sp); chars.push(sp);}
      words.push({w,chars,text:part}); frag.appendChild(w);
     });
     const gr=head?words.map(x=>toLinearB(x.text)):(GR[key]||translit(key)).split(' ');
     const n_=words.length, m=gr.length;
     words.forEach((x,i)=>{
      const part=head?gr[i]:gr.slice(Math.floor(i*m/n_),Math.floor((i+1)*m/n_)).join(' ');
      const g=document.createElement('span'); g.className='gw'+(head?' lb':''); g.setAttribute('aria-hidden','true');
      for(const c of part){const s=document.createElement('span'); s.className='gc'; s.textContent=c; g.appendChild(s);}
      x.w.appendChild(g);
      slots.push({w:x.w,chars:x.chars,a:Math.random()});
     });
     n.replaceWith(frag);
    } else if(n.nodeType===1 && !n.matches('img,svg,input,br')) walk(n);
   });
  };
  walk(el);
  if(!slots.length) return;
  const it={el,slots,gr:false,cz:false,timers:[],lh:24,num:!!el.closest('.a1-steps')};
  items.push(it);
  el.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){it.cz=true;check();}});
  el.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){it.cz=false;check();}});
  el.addEventListener('pointerup',e=>{if(e.pointerType!=='mouse'){it.cz=!it.cz;check();}});
 });

 // Proti „klepání“: blok drží výšku podle češtiny, řečtina se případně zmenší, aby se vešla.
 function fit(it){
  const el=it.el, was=it.slots.map(s=>s.w.classList.contains('x'));
  el.style.height=''; el.style.removeProperty('--gs');
  it.slots.forEach(s=>s.w.classList.remove('x'));
  const hCz=el.getBoundingClientRect().height;
  it.slots.forEach(s=>s.w.classList.add('x'));
  let gs=1;
  while(gs>.72 && el.getBoundingClientRect().height>hCz+.5){ gs-=.04; el.style.setProperty('--gs',gs.toFixed(2)); }
  it.slots.forEach((s,i)=>s.w.classList.toggle('x',was[i]));
  if(hCz) el.style.height=hCz+'px';
  const cs=getComputedStyle(el), lh=parseFloat(cs.lineHeight);
  it.lh=isNaN(lh)?parseFloat(cs.fontSize)*1.4:lh;
 }
 const fitAll=()=>items.forEach(fit);

 // Rozsypání: znaky ve fázi .s ukazují náhodné řecké písmeno, mění se každých 70 ms.
 const scrambling=new Set();
 setInterval(()=>{ scrambling.forEach(ch=>ch.dataset.g=POOL[(Math.random()*POOL.length)|0]); },70);

 const later=(it,ms,fn)=>{ if(CALM||ms<=0) return fn(); it.timers.push(setTimeout(fn,ms)); };
 function toGreek(it){
  let maxT=0;
  it.slots.forEach(s=>{
   const t0=s.a*300; maxT=Math.max(maxT,t0+120);
   later(it,t0,()=>{ s.chars.forEach(ch=>{ch.className='ch s'; ch.dataset.g=POOL[(Math.random()*POOL.length)|0]; scrambling.add(ch);}); });
   later(it,t0+120,()=>{
    s.chars.forEach(ch=>{ch.className='ch'; scrambling.delete(ch);});
    s.w.classList.add('x'); if(!CALM){ s.w.classList.add('burn'); later(it,600,()=>s.w.classList.remove('burn')); }
   });
  });
  if(it.num) later(it,maxT*.5,()=>{ it.el.classList.add('ares-gr'); if(!CALM){ it.el.classList.add('burn'); later(it,600,()=>it.el.classList.remove('burn')); } });
 }
 function toCzech(it){
  if(it.num) it.el.classList.remove('ares-gr','burn');
  it.slots.forEach(s=>later(it,s.a*150,()=>{ s.chars.forEach(ch=>{ch.className='ch'; scrambling.delete(ch);}); s.w.classList.remove('x','burn'); }));
 }

 // Spouštěč: spodní okraj bloku přejde čáru ~42 % výšky okna mínus jeden řádek → řecky;
 // vrátí se pod ni (s rezervou 16 px proti přeskakování) → česky. Proměna pak vždy doběhne celá.
 const HYST=16;
 function check(){
  const H=innerHeight;
  for(const it of items){
   const r=it.el.getBoundingClientRect();
   if(!r.height&&!r.width) continue;                   // skrytý blok (např. zavřený výběr tarifu)
   const d=H*.42-it.lh-r.bottom;
   const want=!it.cz&&scrollY>=30&&(it.gr?d>-HYST:d>0);
   if(want===it.gr) continue;
   it.gr=want; it.timers.forEach(clearTimeout); it.timers=[];
   (want?toGreek:toCzech)(it);
  }
 }
 fitAll(); check();
 if(document.fonts) document.fonts.ready.then(()=>{fitAll();check();});
 let rz; addEventListener('resize',()=>{clearTimeout(rz); rz=setTimeout(()=>{fitAll();check();},150);});
 addEventListener('scroll',check,{passive:true});
 setInterval(check,250);                               // pojistka, kdyby prohlížeč událost rolování vynechal
})();
