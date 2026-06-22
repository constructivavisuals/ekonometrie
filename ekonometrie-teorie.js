/* ==========================================================================
   EKONOMETRIE — BANKA TEORETICKÝCH OTÁZEK
   Zdroj: ČZU Ekonometrie (kckurzy – RNDr. M. Rybář) + prezentace teorie.
   Fakta 1:1 ze zdroje; na daná témata jsou dogenerovány varianty otázek.

   DATOVÝ MODEL (pro CC – engine rozliší formát podle klíčů):
     TOPICS = [{id, label}]                      // okruhy do navigace
     BLOCKS = [{topic, title, items:[ ... ]}]
       • ANO/NE položka: {t:"výrok", a:true|false, why:"vysvětlení", hint:"nápověda"}
       • Výběr a/b/c/d:   {q:"otázka", opts:["a","b","c","d"], c:<index 0–3>, why:"...", hint:"..."}
     Vzorce jsou psané v $...$ / $$...$$ (KaTeX). hint = před odpovědí (neprozradí), why = po odpovědi.
   ========================================================================== */

const TOPICS = [
  {id:"zaklady",    label:"Definice, předmět a kroky modelu"},
  {id:"nahodna",    label:"Náhodná složka a verifikace"},
  {id:"lrm",        label:"LRM: obsah, specifikace, předpoklady"},
  {id:"mnc",        label:"MNČ/BMNČ a maticový zápis"},
  {id:"odhad",      label:"Vlastnosti odhadů a projekční matice"},
  {id:"testy",      label:"t-test, F-test, p-hodnota, interval spolehlivosti"},
  {id:"determinace",label:"Koeficient determinace a součty čtverců"},
  {id:"autokor",    label:"Autokorelace reziduí"},
  {id:"hetero",     label:"Heteroskedasticita a normalita"},
  {id:"spec",       label:"Multikolinearita, dummy, specifikace"},
  {id:"pruznosti",  label:"Spotřeba, poptávka a pružnosti"},
  {id:"tornquist",  label:"Engelovy a Tornquistovy funkce"},
  {id:"vicerov",    label:"Vícerovnicové modely a formy"},
  {id:"identif",    label:"Identifikace a typy modelů"},
  {id:"dmnc",       label:"Odhad simultánních modelů (BMNČ/DMNČ)"},
  {id:"produkce",   label:"Produkční funkce"},
  {id:"izokvanta",  label:"Izokvanty, izokliny, izofaktor, izonáklady"},
  {id:"naklady",    label:"Nákladové funkce"},
  {id:"prognozy",   label:"Prognózy a predikce"}
];

const BLOCKS = [

/* ---------- 1. ZÁKLADY ---------- */
{topic:"zaklady", title:"Definice, předmět a kroky konstrukce modelu", items:[
 {t:"Ekonometrie kvantifikuje vztahy mezi ekonomickými veličinami a zároveň vytváří modely pro prognózu vývoje zkoumaného jevu.",a:true,
  why:"Přesná definice: ekonometrie na základě ekonomie, matematiky a statistiky kvantifikuje vztahy a tvoří prognózy.",hint:"Je úkolem ekonometrie jen popsat vztahy, nebo i předpovídat?"},
 {q:"Z jakých vědních disciplín čerpá ekonometrie poznatky?",opts:["ekonomie, matematika, statistika","ekonomie, právo, sociologie","matematika, fyzika, statistika","účetnictví, ekonomie, statistika"],c:0,
  why:"Ekonometrie stojí na třech pilířích: ekonomie (mikro/makro), matematika a statistika.",hint:"Jeden pilíř je o datech, jeden o vztazích, jeden o výpočtech."},
 {t:"Práce s maticemi a výpočet pružností pomocí derivací patří k matematickému aparátu ekonometrie.",a:true,
  why:"Matematika: matematická verifikace, práce s maticemi, derivace pružností.",hint:"Které z disciplín patří matice a derivace?"},
 {q:"Který krok konstrukce modelu následuje bezprostředně po tvorbě ekonometrického modelu (EKMR)?",opts:["sběr dat","ekonomická verifikace","odhad parametrů","aplikace modelu"],c:0,
  why:"Pořadí kroků: ekonomická teorie → EKM → EKMR → sběr dat → odhad parametrů → ekonomická verifikace → statistická a ekonometrická verifikace → aplikace.",hint:"Bez čeho nelze parametry vůbec odhadnout?"},
 {t:"Konstrukce modelu je iterativní – při zamítnutí modelu se postup vrací zpět na začátek (k ekonomické teorii).",a:true,
  why:"8. krok (aplikace nebo zamítnutí) vrací postup k bodu 1.",hint:"Je stavba modelu jednorázová, nebo se může opakovat?"},
 {q:"Která oblast NEpatří mezi tři základní aplikace ekonometrického modelu?",opts:["odstranění multikolinearity","prognóza do budoucna","kvantifikace vztahů mezi veličinami","simulační propočty"],c:0,
  why:"Tři aplikace: prognóza, kvantifikace vztahů, simulace. Multikolinearita je problém specifikace, ne aplikace.",hint:"Tři jsou cíle modelu; jeden je technický problém."},
 {t:"Model lze dynamizovat zahrnutím zpožděných proměnných, časového vektoru nebo dummy proměnné.",a:true,
  why:"Dynamizace: zpožděné proměnné, postupné diference/relativní odchylky, časový vektor, dummy.",hint:"Jak dostat 'čas' do jinak statického modelu?"}
]},

/* ---------- 2. NÁHODNÁ SLOŽKA A VERIFIKACE ---------- */
{topic:"nahodna", title:"Náhodná složka a typy verifikace", items:[
 {t:"Ekonometrický model (EKMR) na rozdíl od ekonomického modelu (EKM) obsahuje náhodnou složku $u_t$.",a:true,
  why:"EKM má jen funkční zápis $y=f(x_1,x_2,\\dots)$ bez $u_t$; EKMR má rozepsané strukturální parametry i náhodnou složku.",hint:"Čím se liší $y=f(x_1,x_2)$ od $y=\\gamma_1 x_1+\\gamma_2 x_2+u_t$?"},
 {t:"Náhodná složka je rozdíl mezi skutečnou hodnotou $y$ a teoretickou hodnotou $\\hat{y}$, tedy $u=y-\\hat{y}$.",a:true,
  why:"Reziduum = naměřená minus teoretická (dosazením do rovnice) hodnota.",hint:"Co zbude, když od naměřené hodnoty odečtu predikci modelu?"},
 {q:"Co NEpatří do obsahu náhodné složky $u$?",opts:["strukturální parametry modelu","vlivy nezahrnutých vysvětlujících proměnných","chyby v datech","chyby z nevhodného funkčního tvaru"],c:0,
  why:"$u$ obsahuje: nezahrnuté vlivy, chyby v datech a chybu funkčního tvaru. Strukturální parametry tvoří deterministickou (vysvětlenou) část.",hint:"Co do 'chyby' nepatří – co je naopak to, co modelem odhadujeme?"},
 {q:"Která verifikace posuzuje směr a intenzitu působení proměnných (správnost znamének a velikost hodnot)?",opts:["ekonomická","matematická","statistická","ekonometrická"],c:0,
  why:"Ekonomická verifikace = posouzení znamének a velikostí parametrů.",hint:"Která verifikace se ptá 'dává to ekonomicky smysl'?"},
 {t:"Matematická verifikace: po dosazení průměrných hodnot všech proměnných se musí obě strany rovnice rovnat.",a:true,
  why:"Kontrola matematické správnosti výpočtu parametrů.",hint:"Co se ověří dosazením průměrů do odhadnuté rovnice?"},
 {q:"Mezi nástroje STATISTICKÉ verifikace patří:",opts:["$R^2$, t-testy a F-test","DW test a BP test","Jarque-Bera test","korelační matice"],c:0,
  why:"Statistická verifikace: $R^2$, t-testy, F-test. (DW, BP a JB patří do ekonometrické verifikace.)",hint:"Které nástroje měří shodu a významnost, ne porušení předpokladů o reziduích?"},
 {t:"Autokorelace, heteroskedasticita a normalita reziduí spadají do ekonometrické verifikace modelu.",a:true,
  why:"Ekonometrická verifikace = předpoklady o náhodné složce.",hint:"Kam patří testy předpokladů o reziduích?"}
]},

/* ---------- 3. LRM ---------- */
{topic:"lrm", title:"Obsah LRM, specifikace a předpoklady", items:[
 {t:"Endogenní proměnné se značí $y$ a mohou být i vysvětlující; exogenní proměnné ($x$) jsou vždy jen vysvětlující.",a:true,
  why:"Endogenní (y) bývají vysvětlované, ale mohou vystupovat i jako vysvětlující; exogenní (x) jsou vždy vysvětlující.",hint:"Která proměnná může hrát obě role?"},
 {t:"Predeterminované proměnné = exogenní proměnné, zpožděné exogenní a zpožděné endogenní proměnné.",a:true,
  why:"Definice predeterminovaných proměnných.",hint:"Co vše je v čase $t$ 'předem dané'?"},
 {q:"Strukturální parametr $\\gamma$ se v lineárním tvaru interpretuje tak, že při změně exogenní proměnné o 1 jednotku se endogenní proměnná změní o:",opts:["$\\gamma$ jednotek","$\\gamma$ procent","1 jednotku","$\\gamma^2$ jednotek"],c:0,
  why:"Parametr v lineárním tvaru = absolutní změna $y$ na jednotku $x$ (ceteris paribus).",hint:"Lineární parametr je v jednotkách, ne v procentech."},
 {q:"Co NEpatří mezi specifikační předpoklady modelu?",opts:["nulový průměr náhodné složky $E(u_t)=0$","neopomenutí podstatné vysvětlující proměnné","vypuštění irelevantních proměnných","volba správné funkční formy"],c:0,
  why:"Specifikační předpoklady: podstatné proměnné, žádné irelevantní, správná forma, stabilní parametry. $E(u_t)=0$ je předpoklad o náhodné složce.",hint:"Který je o reziduích, ne o stavbě modelu?"},
 {t:"Homoskedasticita jako předpoklad LRM znamená konstantní a konečný rozptyl náhodné složky: $Var(u_t)=\\sigma^2<\\infty$.",a:true,
  why:"Rozptyl reziduí má být v čase konstantní a konečný.",hint:"Jak má vypadat rozptyl reziduí v čase?"},
 {t:"Předpokladem LRM je nulová korelace mezi $u_i$ a $u_j$ pro $i\\neq j$ (nepřítomnost autokorelace).",a:true,
  why:"$Cor(u_i,u_j)=0$ – sousední rezidua spolu nemají korelovat.",hint:"Měly by spolu sousední odchylky korelovat?"},
 {t:"Parametry před proměnnými $x$ se značí $\\gamma$, parametry před proměnnými $y$ se značí $\\beta$.",a:true,
  why:"$\\gamma$ u exogenních $x$, $\\beta$ u endogenních $y$.",hint:"Které písmeno patří k vysvětlujícím $x$?"},
 {q:"Stochastické parametry modelu jsou:",opts:["střední hodnota $E(u)$ a rozptyl $D^2(u)$","$\\gamma$ a $\\beta$","$R^2$ a F","$X^TX$ a $C_{ii}$"],c:0,
  why:"Stochastické parametry popisují náhodnou složku: $E(u)$ a $D^2(u)$.",hint:"Které 'parametry' charakterizují náhodnou složku?"}
]},

/* ---------- 4. MNČ / BMNČ ---------- */
{topic:"mnc", title:"BMNČ, kritérium a maticový zápis", items:[
 {t:"Kritériem BMNČ je minimalizace součtu čtverců reziduí (odchylek teoretických hodnot od skutečných).",a:true,
  why:"BMNČ hledá parametry minimalizující $\\sum_{t} u_t^2$.",hint:"Co BMNČ minimalizuje – součet, nebo součin odchylek? A v jaké mocnině?"},
 {t:"Maticový vzorec odhadu parametrů metodou BMNČ je $\\hat{\\gamma}=(X^TX)^{-1}X^Ty$.",a:true,
  why:"Standardní maticový odhad nejmenších čtverců.",hint:"Vzpomeň si na tvar s inverzí matice $X^TX$."},
 {q:"Jaký je rozměr matice $X$ v maticovém zápisu LRM ($n$ pozorování, $k$ proměnných)?",opts:["$[n\\times k]$","$[k\\times n]$","$[n\\times 1]$","$[k\\times 1]$"],c:0,
  why:"$X=[n\\times k]$, $y=[n\\times 1]$, $\\gamma=[k\\times 1]$, $u=[n\\times 1]$.",hint:"Řádky = pozorování, sloupce = proměnné."},
 {q:"Jaký je rozměr vektoru parametrů $\\gamma$?",opts:["$[k\\times 1]$","$[n\\times 1]$","$[n\\times k]$","$[1\\times k]$"],c:0,
  why:"$\\gamma=[k\\times 1]$ – tolik prvků, kolik je odhadovaných parametrů.",hint:"Počet prvků odpovídá počtu proměnných."},
 {t:"BMNČ poskytuje nejlepší, nestranné a konzistentní odhady parametrů.",a:true,
  why:"Klíčové vlastnosti odhadů BMNČ.",hint:"Tři žádané vlastnosti odhadu – splňuje BMNČ všechny?"},
 {t:"Vektor reziduí $u$ z BMNČ má nulový součet svých složek a je kolmý na všechny sloupce matice $X$.",a:true,
  why:"Geometrické vlastnosti BMNČ: $\\sum u=0$, $u\\perp$ sloupce $X$, $\\hat{y}$ a $u$ jsou kolmé.",hint:"Jaký je vztah reziduí k vysvětlujícím proměnným?"},
 {q:"BMNČ se používá k odhadu parametrů:",opts:["jednorovnicových, prostých a rekurzivních a přesně identifikovaných simultánních modelů","pouze neidentifikovaných simultánních modelů","pouze nelineárních modelů","jen modelů s autokorelací"],c:0,
  why:"BMNČ stačí pro tyto typy; jinak (neidentifikovaný simultánní s $y$ vlevo i vpravo) je nutná DMNČ.",hint:"Kde BMNČ stačí – a kde už je potřeba dvoustupňová metoda?"}
]},

/* ---------- 5. VLASTNOSTI ODHADŮ A PROJEKČNÍ MATICE ---------- */
{topic:"odhad", title:"Nejlepší / nestranný / konzistentní odhad a matice Q, M", items:[
 {q:"Nestranný odhad je takový, jehož:",opts:["střední hodnota se rovná hledanému parametru","rozptyl je nejmenší","hodnota roste s počtem pozorování","součet reziduí je nulový"],c:0,
  why:"Nestrannost: $E(\\hat{\\gamma})=\\gamma$ – bez systematického nad/podhodnocení.",hint:"Nestranný = 'v průměru trefí' parametr."},
 {q:"Nejlepší odhad má:",opts:["nejmenší rozptyl ze všech nestranných odhadů","největší rozptyl","nulovou střední hodnotu","největší $R^2$"],c:0,
  why:"Nejlepší = minimální rozptyl mezi nestrannými odhady.",hint:"Z nestranných odhadů ten nejpřesnější."},
 {t:"Konzistentní odhad se s rostoucím počtem pozorování blíží (konverguje) k hodnotě odhadovaného parametru.",a:true,
  why:"Konzistence = konvergence s rostoucím $n$.",hint:"Co se děje s odhadem, když přidávám data?"},
 {t:"Projekční matice $Q$ převádí vektor pozorovaných hodnot $y$ na vektor teoretických hodnot $\\hat{y}$.",a:true,
  why:"$\\hat{y}=Q\\,y$.",hint:"Která matice 'promítne' $y$ na predikci $\\hat{y}$?"},
 {t:"Projekční matice $Q$ a $M$ jsou symetrické a idempotentní ($Q^T=Q$ a $Q\\cdot Q=Q$).",a:true,
  why:"Vlastnosti projekčních matic; navíc jsou navzájem kolmé.",hint:"Co platí, když matici transponuji nebo umocním na druhou?"},
 {q:"Který vztah platí pro projekční matici $M$?",opts:["$M=E-Q$ a $u=M\\cdot y$","$M=Q-E$","$M=Q^{-1}$","$M=X^TX$"],c:0,
  why:"$M=E-Q$, $u=My$; $Q$ a $M$ jsou navzájem kolmé.",hint:"$M$ dává rezidua – jaký je její vztah k $Q$ a jednotkové matici $E$?"}
]},

/* ---------- 6. TESTY ---------- */
{topic:"testy", title:"t-test, F-test, p-hodnota, interval spolehlivosti", items:[
 {q:"Co testuje t-test a co F-test?",opts:["t-test významnost jednotlivých parametrů, F-test významnost modelu jako celku","oba testují celý model","t-test celý model, F-test jednotlivé parametry","oba testují jen autokorelaci"],c:0,
  why:"t-test = statistická významnost jednotlivých strukturálních parametrů; F-test = významnost modelu jako celku.",hint:"Který test jde 'po jednom parametru' a který hodnotí model 'najednou'?"},
 {t:"Pokud interval spolehlivosti parametru obsahuje nulu, je parametr statisticky nevýznamný (analogie t-testu).",a:true,
  why:"Nula uvnitř intervalu → nevýznamný parametr.",hint:"Co znamená, když do intervalu spolehlivosti spadne nula?"},
 {q:"U t-testu a F-testu chceme, aby p-hodnota byla:",opts:["$p<0{,}05$ (zamítáme H0)","$p>0{,}05$","přesně $0{,}5$","libovolná"],c:0,
  why:"Pro t/F chceme $p<\\alpha$ → zamítáme H0, parametr resp. model je významný.",hint:"Chceme prokázat významnost – znamená to malou, nebo velkou p-hodnotu?"},
 {q:"U testů ekonometrické verifikace (Breusch-Godfrey, Breusch-Pagan…) chceme, aby p-hodnota byla:",opts:["$p>0{,}05$ (nezamítáme H0 → předpoklad není porušen)","$p<0{,}05$","přesně 0","co nejmenší"],c:0,
  why:"H0 zní 'předpoklad není porušen' – chceme ji NEzamítnout, tedy $p>\\alpha$.",hint:"U těchto testů je 'dobrá zpráva' nezamítnutí H0."},
 {t:"P-hodnota se nachází v intervalu $\\langle 0;1\\rangle$ a slouží k rozhodnutí mezi hypotézami H0 a H1.",a:true,
  why:"p ∈ ⟨0;1⟩.",hint:"V jakém rozsahu se p-hodnota pohybuje?"},
 {t:"U t-testu zní nulová hypotéza H0 tak, že parametr NENÍ statisticky významný.",a:true,
  why:"H0(t): parametr není významný; H1: parametr je významný.",hint:"Co tvrdí H0 – že parametr funguje, nebo nefunguje?"},
 {q:"Co je prvním krokem postupu testování významnosti odhadnutých parametrů?",opts:["výpočet testovací matice $(X^TX)^{-1}$","výpočet t-hodnoty","porovnání s tabulkou","výpočet $R^2$"],c:0,
  why:"Postup: $(X^TX)^{-1}$ → korigovaný reziduální rozptyl → rozptyly parametrů $S_{ii}$ → směrodatné chyby $S_{bi}$ → t-hodnota → porovnání s tabulkovou hodnotou.",hint:"Od čeho se odvíjí výpočet rozptylů odhadnutých parametrů?"},
 {t:"Testovací kritérium se počítá jako $t=\\dfrac{|\\gamma_i|}{S_{bi}}$ (parametr dělený svou směrodatnou chybou).",a:true,
  why:"t = |parametr| / směrodatná chyba parametru.",hint:"t = parametr vztažený ke své 'chybě'."}
]},

/* ---------- 7. KOEFICIENT DETERMINACE ---------- */
{topic:"determinace", title:"Koeficient determinace a součty čtverců", items:[
 {t:"Koeficient determinace $R^2$ se pohybuje v intervalu $\\langle 0\\%;100\\%\\rangle$ a říká, z kolika procent je $y$ vysvětleno vysvětlujícími proměnnými.",a:true,
  why:"Definice $R^2$ – míra shody modelu s daty.",hint:"Co $R^2$ měří a v jakém rozsahu se pohybuje?"},
 {q:"Korigovaný koeficient determinace $\\bar{R}^2$ oproti $R^2$:",opts:["penalizuje nadbytečné proměnné a bývá nižší","penalizuje počet pozorování","je vždy vyšší než $R^2$","nezohledňuje počet proměnných"],c:0,
  why:"$\\bar{R}^2$ trestá přidávání proměnných, bývá nižší; používá se při rozhodování o zařazení další proměnné.",hint:"Co se s tímto ukazatelem stane, když přidám zbytečnou proměnnou?"},
 {t:"Platí vztah $R^2=1-\\dfrac{RSS}{TSS}$, kde RSS je reziduální a TSS úplný součet čtverců.",a:true,
  why:"Vztah mezi reziduálním (RSS), vysvětleným (ESS) a úplným (TSS) součtem čtverců.",hint:"Jak vyjádřit $R^2$ přes reziduální a celkový součet čtverců?"},
 {q:"Důsledkem NEzahrnutí podstatné proměnné do modelu je, že:",opts:["$R^2$ vyjde nižší a F-test horší","$R^2$ vyjde vyšší","model je vždy lepší","zmizí autokorelace"],c:0,
  why:"Bez podstatné proměnné: nižší $R^2$, horší F-test, t-testy nemusí najít významnou proměnnou, může vzniknout autokorelace, horší prognóza.",hint:"Chybí-li důležitá proměnná, vysvětlí model víc, nebo míň?"},
 {q:"Důsledkem zahrnutí IRELEVANTNÍ (nadbytečné) proměnné je, že:",opts:["$R^2$ vzroste, ale korigované $\\bar{R}^2$ klesne","obojí $R^2$ i $\\bar{R}^2$ klesnou","t-test ji označí za významnou","model nelze odhadnout"],c:0,
  why:"Irelevantní proměnná: t-test ji označí za nevýznamnou, $R^2$ roste, $\\bar{R}^2$ klesá.",hint:"Klasické $R^2$ roste vždy; který ukazatel naopak 'potrestá'?"},
 {t:"Reziduální součet čtverců (RSS) je hodnota součtu čtverců, kterou BMNČ při odhadu parametrů minimalizuje.",a:true,
  why:"RSS = minimalizovaný součet čtverců reziduí.",hint:"Co přesně BMNČ s tímto součtem dělá?"}
]},

/* ---------- 8. AUTOKORELACE ---------- */
{topic:"autokor", title:"Autokorelace reziduí", items:[
 {t:"Autokorelace reziduí je situace, kdy je náhodná složka $u_t$ korelovaná se svými předchozími hodnotami.",a:true,
  why:"Chyby v předchozích obdobích ovlivňují chyby v následujících.",hint:"Co znamená 'samoovlivnění' odchylek v čase?"},
 {q:"Mezi příčiny autokorelace reziduí NEpatří:",opts:["heteroskedasticita","nevhodný funkční tvar","špatná dynamizace (chybějící zpožděné proměnné)","opomenutí podstatné proměnné"],c:0,
  why:"Příčiny: nevhodný tvar, špatná dynamizace, opomenutá proměnná. Heteroskedasticita je jiný předpoklad.",hint:"Tři příčiny souvisí se specifikací; jedna je samostatný problém rozptylu."},
 {q:"Důsledkem autokorelace reziduí je, že odhady parametrů jsou:",opts:["nestranné a konzistentní, ale nejsou nejlepší","stranné a nekonzistentní","zcela nepoužitelné","přesnější"],c:0,
  why:"Odhady zůstávají nestranné a konzistentní, ale nejsou nejlepší; testy zkreslené, prognóza nepřesná.",hint:"Která vlastnost se ztrácí – nestrannost, nebo efektivnost (nejlepší)?"},
 {t:"U Breusch-Godfreyova testu zamítáme H0 (autokorelace je přítomna), pokud $p<\\alpha$.",a:true,
  why:"p < α → zamítám H0 → v modelu je autokorelace.",hint:"Malá p u tohoto testu znamená, že problém je, nebo není?"},
 {q:"Mezi způsoby řešení autokorelace reziduí patří:",opts:["správná dynamizace a změna funkčního tvaru","zvýšení hladiny významnosti","náhodné odebrání pozorování","dummy pro každé pozorování"],c:0,
  why:"Řeší se příčiny: správný tvar, dynamizace, doplnění podstatné proměnné, případně AR model.",hint:"Léčí se příčina, nebo symptom?"},
 {t:"Pokud autokorelaci nelze odstranit, lze pro prognózu použít metodu, které nevadí – např. autoregresní (AR) model.",a:true,
  why:"Ignorace s využitím alternativní metody (AR).",hint:"Existuje metoda, která si s autokorelací poradí?"}
]},

/* ---------- 9. HETEROSKEDASTICITA A NORMALITA ---------- */
{topic:"hetero", title:"Heteroskedasticita a normalita reziduí", items:[
 {t:"Heteroskedasticita znamená, že rozptyl reziduí není v čase konstantní (různorozptylovost).",a:true,
  why:"Hetero = různo-, skedasticita = rozptyl.",hint:"Co napovídá samotný překlad slova heteroskedasticita?"},
 {q:"Mezi testy heteroskedasticity NEpatří:",opts:["Durbin-Watsonův test","Breusch-Paganův test","Whiteův test","Pesaran-Taylorův test"],c:0,
  why:"Testy hetero: Breusch-Pagan, White, Pesaran-Taylor. Durbin-Watson je test autokorelace.",hint:"Jeden z nabízených testů patří k autokorelaci."},
 {q:"Důsledkem heteroskedasticity je, že odhady parametrů jsou:",opts:["nestranné a konzistentní, ale nejsou nejlepší","stranné","nekonzistentní","přesnější s časem"],c:0,
  why:"Jako u autokorelace: nestranné a konzistentní, ale ne nejlepší; testy zkreslené, prognóza se s časem zhoršuje.",hint:"Která vlastnost odhadu se ztrácí?"},
 {q:"Heteroskedasticitu řešíme:",opts:["metodou vážených nejmenších čtverců (MVNČ)","zvýšením počtu proměnných","dummy proměnnou","Durbin-Watsonovým testem"],c:0,
  why:"MVNČ transformuje $y$ a $x$ tak, že rezidua jsou po transformaci homoskedastická.",hint:"Jak 'vyvážit' nestejné rozptyly?"},
 {t:"Normalitu reziduí testujeme Jarque-Bera testem; při $p<\\alpha$ zamítáme H0 a rezidua nejsou normální.",a:true,
  why:"JB test normality reziduí; p<α → nenormalita.",hint:"Který test cílí na rozdělení reziduí?"},
 {t:"U testů ekonometrické verifikace zní H0 'předpoklad modelu není porušen', proto chceme $p>\\alpha$.",a:true,
  why:"Společná logika verifikačních testů.",hint:"Co je u těchto testů 'dobrá zpráva' – zamítnout, nebo nezamítnout H0?"}
]},

/* ---------- 10. SPECIFIKACE: MULTIKOLINEARITA, DUMMY ---------- */
{topic:"spec", title:"Multikolinearita, dummy proměnná, specifikace", items:[
 {t:"Multikolinearita je nežádoucí závislost mezi dvěma či více vysvětlujícími proměnnými na pravé straně rovnice.",a:true,
  why:"Závislost mezi vysvětlujícími proměnnými (napravo).",hint:"Kde vadí závislost – mezi $y$ a $x$, nebo mezi $x$ navzájem?"},
 {q:"Vysokou multikolinearitu identifikujeme z korelační matice, když je párový korelační koeficient:",opts:["$\\geq 0{,}8$ nebo $\\leq -0{,}8$","mezi $-0{,}2$ a $0{,}2$","roven 0","vždy roven 1"],c:0,
  why:"Hranice $|r|\\geq 0{,}8$.",hint:"Silná korelace začíná zhruba u jaké hodnoty?"},
 {t:"Závislost mezi vysvětlovanou proměnnou $y$ vlevo a vysvětlujícími proměnnými vpravo je naopak žádoucí – nejde o multikolinearitu.",a:true,
  why:"Multikolinearita se týká jen proměnných napravo.",hint:"Závislost $y$ na $x$ je problém, nebo cíl modelu?"},
 {q:"Dummy proměnná nabývá hodnot:",opts:["pouze 0 a 1","libovolných reálných čísel","jen kladných čísel","0, 1 a 2"],c:0,
  why:"Uměle vytvořená proměnná nabývající 0 a 1.",hint:"Kolik různých hodnot může dummy nabývat?"},
 {q:"Mezi použití dummy proměnné NEpatří:",opts:["výpočet koeficientu pružnosti","zachycení šoku v datech","odstranění multikolinearity","zachycení sezónnosti"],c:0,
  why:"Dummy: šok v datech, odstranění multikolinearity, sezónnost. Pružnost se počítá derivací.",hint:"Tři jsou role 0/1 proměnné; jedna je výpočet z derivace."},
 {t:"Mezi specifikační předpoklady patří neopomenutí podstatné proměnné a vypuštění irelevantních proměnných.",a:true,
  why:"Specifikace = správný výběr proměnných a funkční formy, stabilní parametry.",hint:"Co se týká výběru proměnných do modelu?"},
 {q:"Chovův (Chow) test slouží k testování:",opts:["stability (časové invariantnosti) parametrů","autokorelace","heteroskedasticity","normality"],c:0,
  why:"Chow test = stabilita parametrů v čase (např. data před a po roce 1989).",hint:"Který test hlídá, že se parametry v čase nemění?"}
]},

/* ---------- 11. SPOTŘEBA, POPTÁVKA, PRUŽNOSTI ---------- */
{topic:"pruznosti", title:"Spotřeba vs. poptávka a typy pružností", items:[
 {q:"Jaký je vztah mezi spotřebou a poptávkou?",opts:["spotřeba je realizovaná poptávka","poptávka je realizovaná spotřeba","jsou totožné pojmy","spotřeba je jen zamýšlené množství"],c:0,
  why:"Poptávka = zamýšlené množství při dané ceně, příjmu apod.; spotřeba = realizovaná poptávka.",hint:"Která z nich je ta 'uskutečněná'?"},
 {q:"U LINEÁRNÍHO tvaru udává odhadnutý parametr změnu $y$ v jednotkách; pružnost tutéž změnu udává v:",opts:["procentech","jednotkách","absolutních hodnotách","kusech"],c:0,
  why:"Parametr = absolutní změna (jednotky), pružnost = relativní změna (%).",hint:"Pružnost je relativní vyjádření – v čem?"},
 {t:"U mocninného (power) tvaru funkce odhadnuté parametry zároveň vyjadřují koeficienty pružnosti.",a:true,
  why:"U mocninné funkce parametr = pružnost.",hint:"Co je u mocninného tvaru speciální na odhadnutých parametrech?"},
 {q:"Přímá cenová pružnost $e_{ii}=\\dfrac{\\partial y}{\\partial x_i}\\cdot\\dfrac{x_i}{\\hat{y}}$ vyjadřuje:",opts:["% změnu poptávky po i-tém výrobku při 1% změně jeho vlastní ceny","% změnu při změně ceny jiného výrobku","% změnu při změně příjmu","absolutní změnu poptávky"],c:0,
  why:"Přímá cenová pružnost = reakce na vlastní cenu i-tého výrobku.",hint:"Pružnost vůči ceně téhož (i-tého) výrobku."},
 {q:"Křížová pružnost $e_{ij}$ vyjadřuje:",opts:["% změnu poptávky po i-tém výrobku při 1% změně ceny j-tého výrobku","% změnu při změně vlastní ceny","% změnu při změně příjmu","absolutní změnu"],c:0,
  why:"Křížová pružnost = reakce na cenu jiného (j-tého) výrobku.",hint:"Vliv ceny CIZÍHO výrobku."},
 {t:"Příjmová pružnost $E_i=\\dfrac{\\partial y}{\\partial x_p}\\cdot\\dfrac{x_p}{\\hat{y}}$ udává procentní změnu poptávky při 1% změně příjmu.",a:true,
  why:"Příjmová pružnost = reakce poptávky na příjem.",hint:"Pružnost vůči čemu – vlastní ceně, nebo příjmu?"},
 {t:"Proměnná s největší pružností (v absolutní hodnotě) nejvíce ovlivňuje vysvětlovanou proměnnou.",a:true,
  why:"Pružnosti (v %) umožňují srovnat vlivy proměnných i při odlišných jednotkách.",hint:"Proč se vlivy proměnných srovnávají právě přes pružnosti?"},
 {q:"Proč je vhodné u vztahu spotřeba–příjem použít NElineární funkční tvar?",opts:["spotřeba se při vyšších příjmech nasycuje (lineární tvar by rostl neomezeně)","lineární tvar nelze odhadnout","nelineární je vždy přesnější","kvůli multikolinearitě"],c:0,
  why:"Reálná spotřeba je nasycená (Tornquist); lineární funkce by rostla bez omezení, což neodpovídá realitě.",hint:"Roste spotřeba s rostoucím příjmem donekonečna?"},
 {q:"Bodová a oblouková (intervalová) pružnost se počítají z hodnot $y$ a $x$ z původního a nového období a:",opts:["nevyžadují znalost tvaru poptávkové funkce","vyžadují znalost tvaru funkce","vyžadují odhad BMNČ","vyžadují korelační matici"],c:0,
  why:"Přibližné metody – stačí dosadit hodnoty z dvou období, tvar funkce není potřeba.",hint:"Co tyto přibližné metody NEpotřebují znát?"}
]},

/* ---------- 12. ENGELOVY A TORNQUISTOVY FUNKCE ---------- */
{topic:"tornquist", title:"Engelovy a Tornquistovy funkce", items:[
 {q:"Spotřební funkce, jejichž vysvětlující proměnnou je příjem, se nazývají:",opts:["Engelovy funkce (jejich podmnožinou jsou Tornquistovy)","Tornquistovy funkce (jejich podmnožinou jsou Engelovy)","produkční funkce","nákladové funkce"],c:0,
  why:"Engelovy funkce; Tornquistovy funkce jsou jejich podmnožinou.",hint:"Která třída je nadřazená – Engel, nebo Tornquist?"},
 {t:"Mezi požadavky na Engelovy funkce patří nezáporná spotřeba, což platí pro všechny tři Tornquistovy funkce.",a:true,
  why:"Nelze koupit záporné množství statků – platí pro všechny tři TQ funkce.",hint:"Co platí pro spotřebu u všech tří TQ funkcí?"},
 {q:"Vlastnost 'minimální příjem' (spotřeba začíná až od určité úrovně příjmu) platí pro:",opts:["2. a 3. TQ funkci","1. a 2. TQ funkci","jen 1. TQ funkci","všechny tři"],c:0,
  why:"Minimální příjem: 2. a 3. TQ funkce.",hint:"Které funkce se 'nastartují' až od jisté úrovně příjmu?"},
 {q:"Vlastnost 'nasycenost' (od určité úrovně se spotřeba už nezvyšuje) platí pro:",opts:["1. a 2. TQ funkci","2. a 3. TQ funkci","jen 3. TQ funkci","žádnou"],c:0,
  why:"Nasycenost: 1. a 2. TQ funkce.",hint:"Které funkce se 'zastropují' (saturují)?"},
 {t:"1. Tornquistova funkce se používá pro modelování nezbytných statků (např. chleba).",a:true,
  why:"1. TQ = nezbytné statky.",hint:"Pro jaké statky je první TQ – nezbytné, nebo luxusní?"},
 {q:"2. Tornquistova funkce modeluje:",opts:["relativně zbytné statky (např. máslo)","nezbytné statky","luxusní statky","veřejné statky"],c:0,
  why:"2. TQ = relativně zbytné statky.",hint:"Druhá TQ je 'mezi' nezbytnými a luxusními."},
 {t:"3. Tornquistova funkce se používá pro modelování luxusních statků.",a:true,
  why:"3. TQ = luxusní statky.",hint:"Která TQ funkce je pro luxus?"},
 {q:"1. TQ funkce $y_t=a_1\\dfrac{x_p}{x_p+a_2}+u_t$ se linearizuje substitucemi:",opts:["$a_1'=\\dfrac{1}{a_1}$, $a_2'=\\dfrac{a_2}{a_1}$","$a_1'=a_1$, $a_2'=a_2$","$a_1'=\\dfrac{a_2}{a_1}$, $a_2'=\\dfrac{1}{a_1}$","nelze linearizovat"],c:0,
  why:"Linearizovaná 1. TQ má tvar $y_t'=a_1'+a_2'\\,x_p'+u_t'$ s těmito substitucemi.",hint:"Která substituce dává $a_1'$ jako převrácenou hodnotu $a_1$?"}
]},

/* ---------- 13. VÍCEROVNICOVÉ MODELY A FORMY ---------- */
{topic:"vicerov", title:"Vícerovnicové modely: strukturální a redukovaná forma", items:[
 {t:"Rozměr matice multiplikátorů $M$ je $[g\\times k]$ (g endogenních, k predeterminovaných proměnných).",a:true,
  why:"Matice multiplikátorů má rozměr [g × k].",hint:"Řádky odpovídají endogenním $y$, sloupce predeterminovaným proměnným."},
 {q:"Identitní (definiční) rovnice:",opts:["neobsahuje náhodnou složku $u_t$ a její parametry jsou předem známé","obsahuje $u_t$ a parametry se odhadují","je vždy stochastická","nemá ekonomický smysl"],c:0,
  why:"Deterministický vztah, parametry většinou =1, bez $u_t$, neidentifikuje se.",hint:"Je definiční rovnice náhodná, nebo přesně daná?"},
 {t:"Identitní rovnice se již neidentifikuje – je předem (automaticky) identifikovaná.",a:true,
  why:"Deterministický vztah → není co identifikovat.",hint:"Musí se u definiční rovnice provádět identifikace?"},
 {q:"Strukturální parametry identitní rovnice jsou většinou:",opts:["rovny 1","rovny 0","neznámé a odhadují se","záporné"],c:0,
  why:"Např. $y_3=y_1+y_2$ → parametry =1.",hint:"Sčítají-li se složky, jaký je u nich koeficient?"},
 {t:"Predeterminované proměnné jsou všechny zpožděné endogenní, exogenní a zpožděné exogenní proměnné.",a:true,
  why:"Definice predeterminovaných proměnných.",hint:"Co vše je v daném období 'předem dané'?"},
 {q:"Strukturální forma se od redukované liší tím, že:",opts:["ve strukturální formě jsou endogenní proměnné i na pravé straně; v redukované jsou vyjádřeny jen pomocí predeterminovaných proměnných","redukovaná forma má více rovnic","strukturální forma nemá náhodnou složku","jsou totožné"],c:0,
  why:"Redukovaná forma vyjadřuje endogenní proměnné výhradně pomocí predeterminovaných proměnných.",hint:"Ve které formě vystupují $y$ i napravo?"},
 {q:"Převod strukturální formy do redukované lze provést:",opts:["substitucí nebo výpočtem dle vzorce","jen graficky","jen odhadem BMNČ","nelze převést"],c:0,
  why:"Dvě cesty: substituce a maticový výpočet.",hint:"Existuje algebraická i maticová cesta."}
]},

/* ---------- 14. IDENTIFIKACE A TYPY MODELŮ ---------- */
{topic:"identif", title:"Identifikace rovnic a typy modelů podle matice B", items:[
 {q:"Rovnice je PŘESNĚ identifikovaná, pokud platí:",opts:["$k^{**}=g_\\Delta-1$","$k^{**}<g_\\Delta-1$","$k^{**}>g_\\Delta-1$","$k^{**}=g_\\Delta$"],c:0,
  why:"$k^{**}$ = nezahrnuté predeterminované, $g_\\Delta$ = zahrnuté endogenní proměnné v rovnici.",hint:"Přesná identifikace = rovnost (s posunem o 1)."},
 {q:"Pokud $k^{**}<g_\\Delta-1$, rovnice je:",opts:["podidentifikovaná (neidentifikovaná)","přesně identifikovaná","přeidentifikovaná","vždy identifikovaná"],c:0,
  why:"Méně nezahrnutých predeterminovaných než třeba → podidentifikovaná.",hint:"Méně, než je potřeba → málo informace k identifikaci."},
 {t:"Identifikace se provádí pro každou rovnici modelu samostatně.",a:true,
  why:"Po jednotlivých rovnicích.",hint:"Identifikuje se model jako celek, nebo rovnice zvlášť?"},
 {t:"Identifikace se provádí u simultánních modelů; jsou-li všechny rovnice přesně identifikované, lze pro odhad použít BMNČ.",a:true,
  why:"Vše přesně identifikované → BMNČ; jinak DMNČ.",hint:"Co rozhoduje mezi BMNČ a DMNČ u simultánního modelu?"},
 {q:"Je-li model podidentifikovaný, znamená to, že:",opts:["redukované formě odpovídá více strukturálních forem a parametry nelze odhadnout","model má příliš mnoho proměnných","model je vždy přesný","jen klesne $R^2$"],c:0,
  why:"Redukovaná forma není jednoznačně určena → nelze odhadnout parametry.",hint:"Co se stane s jednoznačností řešení?"},
 {q:"PROSTÝ model má matici B:",opts:["jednotkovou (mezi $y$ není žádný vztah)","trojúhelníkovou","s nenulovými prvky nad i pod diagonálou","nulovou"],c:0,
  why:"Prostý = jednotková B; rekurzivní = trojúhelníková; simultánní = prvky nad i pod diagonálou.",hint:"Žádné vazby mezi $y$ → jaká matice?"},
 {q:"REKURZIVNÍ model má matici B:",opts:["trojúhelníkovou (jen dopředné nebo jen zpětné vazby)","jednotkovou","s prvky nad i pod diagonálou","nulovou"],c:0,
  why:"Rekurzivní = trojúhelníková matice B.",hint:"Vazby jen jedním směrem → jaký tvar matice?"}
]},

/* ---------- 15. ODHAD SIMULTÁNNÍCH MODELŮ (BMNČ/DMNČ) ---------- */
{topic:"dmnc", title:"BMNČ vs. DMNČ a metody s úplnou/neúplnou informací", items:[
 {q:"Jakou metodou se odhadují parametry PROSTÉHO a REKURZIVNÍHO modelu?",opts:["běžnou metodou nejmenších čtverců (BMNČ)","dvoustupňovou (DMNČ)","třístupňovou metodou","metodou vážených čtverců"],c:0,
  why:"Prosté i rekurzivní modely → BMNČ.",hint:"U samostatných/jednosměrných rovnic stačí základní metoda."},
 {t:"U rekurzivního modelu se vypočtená endogenní proměnná $y_1$ z první rovnice použije jako vysvětlující proměnná pro odhad $y_2$ ve druhé rovnici.",a:true,
  why:"Postupný odhad rovnice po rovnici.",hint:"Jak se 'řetězí' odhad u rekurzivního modelu?"},
 {q:"Proč nelze strukturální formu simultánního modelu odhadnout přímo BMNČ?",opts:["obsahuje endogenní proměnné na levé i pravé straně rovnic","obsahuje příliš mnoho exogenních proměnných","má autokorelaci","je lineární"],c:0,
  why:"Endogenní $y$ vlevo i vpravo → nejdřív převést na redukovaný tvar nebo použít DMNČ.",hint:"Kde vystupují $y$, že to BMNČ vadí?"},
 {q:"Podstatou DMNČ (dvoustupňové metody) je:",opts:["opakovaná aplikace BMNČ – 1. stupeň odhad teoretických hodnot endogenních proměnných, 2. stupeň odhad strukturálních parametrů","jednorázová aplikace BMNČ","odhad všech rovnic najednou","grafické řešení"],c:0,
  why:"DMNČ = dvakrát aplikovaná BMNČ.",hint:"Kolik stupňů má a co se v každém dělá?"},
 {t:"Platí, že DMNČ obsahuje BMNČ – v DMNČ je BMNČ opakovaně aplikována.",a:true,
  why:"Vztah mezi BMNČ a DMNČ.",hint:"Je DMNČ nadstavbou nad BMNČ?"},
 {q:"Metody s ÚPLNOU informací (na rozdíl od neúplné):",opts:["odhadují všechny rovnice najednou a jsou náročnější (např. třístupňová metoda)","odhadují každou rovnici zvlášť","nevyžadují data","jsou jednodušší"],c:0,
  why:"Úplná informace = všechny rovnice najednou, náročnější (3SLS); neúplná = po rovnicích (2SLS).",hint:"Berou v potaz informace ze všech rovnic, nebo jen z jedné?"},
 {q:"Matice $C_{ii}=K^{-1}$ slouží k:",opts:["výpočtu strukturálních parametrů a testování jejich významnosti","výpočtu $R^2$","detekci autokorelace","grafickému řešení"],c:0,
  why:"$C_{ii}$ je čtvercová matice inverzní k $K$, slouží pro výpočet a testování strukturálních parametrů.",hint:"K čemu je v DMNČ inverzní matice $K$?"}
]},

/* ---------- 16. PRODUKČNÍ FUNKCE ---------- */
{topic:"produkce", title:"Produkční funkce a její charakteristiky", items:[
 {q:"Produkční funkce reprezentuje vztah:",opts:["faktor–produkt (přeměna výrobních faktorů ve výslednou produkci)","produkt–produkt","faktor–faktor","produkt–faktor"],c:0,
  why:"PF = vztah faktor–produkt.",hint:"Co se v PF mění v co – vstupy ve výstup?"},
 {q:"Neoklasická produkční funkce má průběh:",opts:["progresivně-degresivní","degresivně-progresivní","lineární","konstantní"],c:0,
  why:"Neoklasická PF má typický progresivně-degresivní průběh.",hint:"Nejprve roste zrychleně, pak zpomaluje."},
 {t:"Obecný tvar progresivně-degresivní produkční funkce je $y=a+bx+cx^2-dx^3$.",a:true,
  why:"Obecný kubický tvar produkční funkce.",hint:"Vzpomeň si na pořadí znamének u kubického tvaru PF."},
 {q:"Ve 2. (racionálním) stádiu neoklasické PF platí pro produkční pružnost:",opts:["$0<E<1$","$E>1$","$E<0$","$E=1$"],c:0,
  why:"1. stádium $E>1$, 2. stádium $0<E<1$ (racionální), 3. stádium $E<0$.",hint:"Racionální = pružnost mezi nulou a jednou."},
 {q:"Ve 3. stádiu neoklasické PF (za bodem C) je produkční pružnost:",opts:["$E<0$","$0<E<1$","$E>1$","$E=1$"],c:0,
  why:"3. stádium: $E<0$, celková produkce už klesá.",hint:"Za maximem produkce pružnost klesá pod nulu."},
 {q:"Bod C na neoklasické PF představuje:",opts:["maximum celkové produkce (TP), kde $y'=0$","maximum mezní produkce (MP)","maximum průměrné produkce (AP)","minimum nákladů"],c:0,
  why:"Bod C = max TP ($y'=0$); bod A = max MP ($y''=0$); bod B = max AP ($y'=y/x$).",hint:"Kde je celková produkce nejvyšší – první derivace je nulová."},
 {q:"Mezní produkce (MP) říká:",opts:["o kolik jednotek se zvýší produkce při zvýšení faktoru o 1 jednotku","o kolik % se zvýší produkce","kolik produkce připadá průměrně na jednotku faktoru","celkové množství produkce"],c:0,
  why:"MP = absolutní přírůstek produkce na jednotku faktoru; AP = průměr; Ep = % přírůstek.",hint:"Mezní = přírůstek na 'jednu další' jednotku faktoru."},
 {t:"Mikroekonomická produkční funkce popisuje chování firmy, zatímco odvětvová PF popisuje chování celého odvětví (agregace podnikových PF).",a:true,
  why:"Mikro = firma, odvětvová = odvětví.",hint:"Která PF je za jednu firmu a která za celé odvětví?"},
 {q:"Produkční pružnost (Ep) říká:",opts:["o kolik % se zvýší produkce při zvýšení faktoru o 1 %","o kolik jednotek vzroste produkce","celkové množství produkce","průměr na jednotku faktoru"],c:0,
  why:"Ep = relativní (%) přírůstek produkce na 1% přírůstek faktoru.",hint:"Pružnost = relativní vyjádření, tedy v procentech."}
]},

/* ---------- 17. IZOKVANTY, IZOKLINY, IZOFAKTOR, IZONÁKLADY ---------- */
{topic:"izokvanta", title:"Izokvanty, izokliny, izofaktorová a izonákladová funkce", items:[
 {q:"Izokvanta vyjadřuje vztah:",opts:["faktor–faktor (kombinace x1 a x2 při stále stejné produkci y)","faktor–produkt","produkt–produkt","produkt–faktor"],c:0,
  why:"Izokvanta = vztah faktor–faktor; všechny kombinace x1, x2 při stejné produkci y.",hint:"Izokvanta drží konstantní co – produkci, nebo náklady?"},
 {t:"Izokvantu lze odvodit z dvoufaktorové produkční funkce: za $y$ dosadím známou produkci a z rovnice vyjádřím $x_2$ pomocí $x_1$.",a:true,
  why:"Odvození izokvanty z 2-PF: $x_2=f(x_1//y)$.",hint:"Z čeho izokvanta vzniká?"},
 {q:"Typický průběh izokvanty je:",opts:["klesající a konvexní","rostoucí a konkávní","lineární","konstantní"],c:0,
  why:"Izokvanta je klesající a konvexní.",hint:"V racionální oblasti: víc jednoho faktoru → míň druhého."},
 {t:"Mezní míra záměny faktoru $\\text{MMZF}=\\dfrac{\\partial x_2}{\\partial x_1}$ udává, o kolik se změní $x_2$, změní-li se $x_1$ o jednotku.",a:true,
  why:"Definice MMZF.",hint:"Záměna jednoho faktoru za druhý – jaká derivace?"},
 {q:"V RACIONÁLNÍ (negativní) oblasti záměny faktorů:",opts:["MMZF je záporná a izokvanty klesající (víc x1 → míň x2)","MMZF je kladná a izokvanty rostoucí","MMZF je nulová","faktory nelze zaměnit"],c:0,
  why:"Racionální = záporná MMZF, klesající izokvanty, dochází k očekávané záměně.",hint:"Racionální záměna = jeden faktor nahrazuje druhý, takže izokvanta klesá."},
 {q:"Izokliny jsou:",opts:["funkce spojující body se stejnou MMZF na různých izokvantách","totéž co izokvanty","kombinace produkcí y1 a y2","přímky stejných nákladů"],c:0,
  why:"Izoklina spojuje body se stejnou MMZF (stejným sklonem izokvant).",hint:"Spojuje body se stejným SKLONEM izokvant."},
 {t:"Izonákladová funkce (izokosta) představuje kombinace faktorů se stále stejným nákladem a má tvar přímky.",a:true,
  why:"Izokosta = stejný náklad, přímka; slouží k nalezení optima na izokvantě.",hint:"Stejný náklad → jaký tvar (přímka, nebo křivka)?"},
 {q:"Izofaktorová funkce vyjadřuje vztah:",opts:["produkt–produkt (kombinace y1 a y2 při stejné spotřebě faktoru x)","faktor–faktor","faktor–produkt","produkt–faktor"],c:0,
  why:"Izofaktor = vztah produkt–produkt mezi dvěma odvětvími.",hint:"Drží konstantní spotřebu faktoru x – mezi čím a čím?"},
 {q:"Efekt substituce (při snížení ceny faktoru x1) znamená, že:",opts:["optimální kombinace se posune ve prospěch levnějšího faktoru x1","sníží se celková produkce","izokvanta se posune doprava nahoru","změní se cena produkce"],c:0,
  why:"Efekt substituce: změna sklonu izokosty → posun optima po izokvantě k levnějšímu faktoru.",hint:"Zlevní-li faktor, používáme ho víc, nebo míň?"},
 {t:"Izofaktorová funkce má klesající a konkávní průběh (na rozdíl od konvexní izokvanty).",a:true,
  why:"Izofaktor: klesající a konkávní.",hint:"Izokvanta je konvexní; izofaktor je…?"}
]},

/* ---------- 18. NÁKLADOVÉ FUNKCE ---------- */
{topic:"naklady", title:"Nákladové funkce a nabídka firmy", items:[
 {q:"Nákladová funkce reprezentuje vztah:",opts:["produkt–faktor (závislost celkových nákladů N na produkci y)","faktor–produkt","faktor–faktor","produkt–produkt"],c:0,
  why:"Nákladová funkce = vztah produkt–faktor; je inverzní k produkční funkci.",hint:"Náklady jako funkce produkce – který vztah?"},
 {t:"Nákladová funkce (P-F) je inverzní k produkční funkci (F-P).",a:true,
  why:"Nákladová funkce vznikne inverzním vyjádřením $x$ z produkční funkce.",hint:"Jaký je vztah mezi produkční a nákladovou funkcí?"},
 {q:"Průběh nákladové funkce je:",opts:["degresivně-progresivní","progresivně-degresivní","lineární","konstantní"],c:0,
  why:"Nákladová funkce má degresivně-progresivní průběh (opak produkční).",hint:"Je to 'zrcadlo' produkční funkce."},
 {t:"Obecný tvar degresivně-progresivní nákladové funkce je $N=a+by-cy^2+dy^3$.",a:true,
  why:"Obecný kubický tvar nákladové funkce.",hint:"Vzpomeň na znaménka u kubického tvaru nákladů."},
 {q:"Kritérium optimality pro nákladovou funkci (maximalizace zisku) má tvar:",opts:["$MN=MT=C_y$ (mezní náklady = mezní tržby = cena produkce)","$MN=0$","$MT=0$","$N=0$"],c:0,
  why:"Optimum: mezní náklady = mezní tržby = cena produkce.",hint:"Maximum zisku: mezní náklady se rovnají čemu?"},
 {t:"V krátkém období je alespoň jeden faktor fixní, v dlouhém období jsou všechny faktory variabilní.",a:true,
  why:"Rozdíl krátkého a dlouhého období.",hint:"Co je v krátkém období neměnné?"},
 {q:"Nabídková funkce firmy je tvořena:",opts:["rostoucí částí mezních nákladů (v krátkém období od minima AVC, v dlouhém od minima AC)","klesající částí mezních nákladů","celými průměrnými náklady","fixními náklady"],c:0,
  why:"Nabídka = rostoucí větev MC; minimum AC značí bod uzavření firmy.",hint:"Která větev mezních nákladů tvoří nabídku?"}
]},

/* ---------- 19. PROGNÓZY A PREDIKCE ---------- */
{topic:"prognozy", title:"Prognózy, predikce a normované odchylky", items:[
 {q:"Jaký je rozdíl mezi predikcí a prognózou?",opts:["predikce vychází čistě z matematického modelu, prognóza navíc využívá znalosti mikro/makroekonomie a vztahů mezi odvětvími","predikce je do minulosti, prognóza do budoucna","jsou totožné","prognóza je čistě matematická"],c:0,
  why:"Predikce = jen model; prognóza = model + ekonomické znalosti.",hint:"Která z nich přidává ekonomický kontext nad rámec modelu?"},
 {q:"Ex-post prognóza:",opts:["předpovídá již známé (minulé) hodnoty a slouží k ověření prognostických vlastností modelu","předpovídá do budoucna","nelze ji ověřit","nepoužívá model"],c:0,
  why:"Ex-post = negativní horizont; ověření modelu na známých datech.",hint:"Předpovídá dopředu, nebo dozadu?"},
 {t:"Ex-ante prognóza předpovídá do budoucna (pozitivní prognostický horizont).",a:true,
  why:"Ex-ante = budoucnost.",hint:"Která prognóza míří do budoucna?"},
 {q:"K odvození prognózy se používá:",opts:["redukovaná forma modelu (strukturální formu nelze použít)","strukturální forma","identitní rovnice","korelační matice"],c:0,
  why:"Pro prognózu se používá redukovaná forma modelu.",hint:"Která forma vyjadřuje endogenní proměnné pomocí predeterminovaných?"},
 {q:"Pro normovanou odchylku platí: pokud $N<1$, pak prognóza je:",opts:["dobrá (lepší než nahrazení průměrem)","špatná","přesná (shoduje se se skutečností)","neurčitá"],c:0,
  why:"$N<1$ dobrá; $N>1$ špatná; $N=0$ shoda se skutečností.",hint:"Menší než jedna = lepší, nebo horší než průměr?"},
 {t:"Pokud normovaná odchylka $N>1$, je prognóza horší, než kdyby byla nahrazena průměrem.",a:true,
  why:"$N>1$ = špatná prognóza.",hint:"Větší než jedna znamená lepší, nebo horší prognózu?"},
 {q:"Bodová prognóza z trendové funkce $X_{2t}=3+1{,}5t$ při $T=10$ letech a předpovědi na $h=2$ roky ($t=T+h=12$) vychází:",opts:["21","18","12","15"],c:0,
  why:"$3+1{,}5\\cdot 12=3+18=21$.",hint:"Dosaď $t=12$ do rovnice trendu."},
 {q:"Bodová prognóza předpovídá konkrétní hodnotu; intervalová prognóza předpovídá:",opts:["interval (MIN;MAX), v němž hodnota leží s určitou pravděpodobností","přesnou hodnotu","jen průměr","nulu"],c:0,
  why:"Intervalová prognóza = rozsah hodnot.",hint:"Bodová = číslo; intervalová = ?"},
 {q:"Podle pavučinového (cobweb) teorému je rovnováha STABILNÍ (konvergentní), když:",opts:["nabídková funkce S je méně strmá než poptávková D","S je strmější než D","S a D jsou stejně strmé","S je vodorovná"],c:0,
  why:"Stabilní = S méně strmá než D (oscilace se zmenšují); divergentní = S strmější; jednotková = stejně strmé.",hint:"Kdy se oscilace zmenšují – když je nabídka plošší, nebo strmější než poptávka?"}
]}

];
