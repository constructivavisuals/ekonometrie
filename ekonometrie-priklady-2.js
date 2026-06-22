/* ==========================================================================
   EKONOMETRIE — BANKA POČETNÍCH PŘÍKLADŮ S KROKOVÝM POSTUPEM
   Zadání 1:1 ze sbírky (Doučování s Koljou). Každý výsledek ověřen symbolicky.

   DATOVÝ MODEL (pro CC):
     PROBLEMS = [{
        topic,                 // shoduje se s TOPICS id z ekonometrie-teorie.js
        id,                    // "P81"
        title,                 // krátký název
        zadani,                // plné zadání (KaTeX $...$)
        answer:{val,unit,tol}, // VOLITELNÉ – jeden kontrolovatelný výsledek (mód "zadej výsledek")
        steps:[{ask,sol}]      // ask = navádějící otázka (zobraz první), sol = postupový krok (odkryj)
     }]
     • Pokud "answer" chybí (odvození funkce, více výsledků), engine ukáže jen krokový postup.
     • Vzorce v $...$ (KaTeX). Desetinná čárka v zobrazení: {,}.
   ========================================================================== */

const PROBLEMS = [

/* ===================== PRODUKČNÍ FUNKCE ===================== */
{topic:"produkce", id:"P81", title:"Maximální jednotková produkce (AP)",
 zadani:"Produkční funkce má tvar $y=3x+8x^2-2x^3$. Vyčíslete maximální výši její jednotkové produkce.",
 answer:{val:11, unit:"", tol:0.01},
 steps:[
  {ask:"Jak se z $y$ získá jednotková produkce $AP$?", sol:"$AP=\\dfrac{y}{x}=\\dfrac{3x+8x^2-2x^3}{x}=3+8x-2x^2$"},
  {ask:"Kde má $AP$ své maximum?", sol:"V bodě, kde $\\dfrac{d(AP)}{dx}=0$. Derivace: $\\dfrac{d(AP)}{dx}=8-4x$."},
  {ask:"Vyřeš rovnici pro $x$.", sol:"$8-4x=0\\;\\Rightarrow\\;x=2$ (bod B – maximum AP)."},
  {ask:"Dosaď $x=2$ zpět do $AP$.", sol:"$AP(2)=3+8\\cdot2-2\\cdot2^2=3+16-8=\\mathbf{11}$"}
 ]},

{topic:"produkce", id:"P82", title:"Maximum celkové produkce (TP)",
 zadani:"Produkční funkce má tvar $y=2{,}5x+7x^2-2{,}5x^3$. Určete její maximální hodnotu (TP) a velikost jednotkové produkce v bodě tohoto maxima.",
 answer:{val:13.01, unit:"", tol:0.05},
 steps:[
  {ask:"Kde má celková produkce $TP$ maximum (bod C)?", sol:"Tam, kde $y'=0$. Derivace: $y'=2{,}5+14x-7{,}5x^2$."},
  {ask:"Vyřeš kvadratickou rovnici $7{,}5x^2-14x-2{,}5=0$.", sol:"$x=\\dfrac{14+\\sqrt{14^2+4\\cdot7{,}5\\cdot2{,}5}}{2\\cdot7{,}5}\\approx 2{,}031$ (kladný kořen)."},
  {ask:"Dosaď $x\\approx2{,}031$ do $y$ pro maximum TP.", sol:"$TP_{max}=2{,}5x+7x^2-2{,}5x^3\\approx\\mathbf{13{,}01}$"},
  {ask:"Jednotková produkce v tomto bodě?", sol:"$AP=\\dfrac{y}{x}=\\dfrac{13{,}01}{2{,}031}\\approx 6{,}41$"}
 ]},

{topic:"produkce", id:"P80", title:"Racionální stádium produkční funkce",
 zadani:"Pro produkční funkci $y=4x+5x^2-x^3$ určete rozsah výrobního faktoru, který vymezuje její racionální stádium.",
 steps:[
  {ask:"Čím je vymezeno racionální (2.) stádium?", sol:"Od bodu B (maximum $AP$) do bodu C (maximum $TP$)."},
  {ask:"Najdi bod B: maximum $AP=\\dfrac{y}{x}=4+5x-x^2$.", sol:"$\\dfrac{d(AP)}{dx}=5-2x=0\\;\\Rightarrow\\;x_B=2{,}5$"},
  {ask:"Najdi bod C: maximum $TP$, tedy $y'=0$.", sol:"$y'=4+10x-3x^2=0\\;\\Rightarrow\\;x_C=\\dfrac{10+\\sqrt{100+48}}{6}\\approx 3{,}69$"},
  {ask:"Zapiš interval racionálního stádia.", sol:"$x\\in\\langle 2{,}5\\,;\\,3{,}69\\rangle$ — zde platí $0<E_p<1$."}
 ]},

{topic:"produkce", id:"P79", title:"Produkční pružnost: odhad % změny",
 zadani:"S využitím produkční pružnosti vypočítejte, o kolik procent se zvýší produkce při zvýšení množství výrobního faktoru o 10 % z dosavadní úrovně $x=5$, je-li $y=4x+5x^2-x^3$.",
 answer:{val:-52.5, unit:"%", tol:0.5},
 steps:[
  {ask:"Jaký je vzorec produkční pružnosti $E_p$?", sol:"$E_p=\\dfrac{dy}{dx}\\cdot\\dfrac{x}{y}=MP\\cdot\\dfrac{x}{y}$"},
  {ask:"Spočítej $MP=y'$ a hodnotu $y$ v bodě $x=5$.", sol:"$MP=4+10x-3x^2\\Rightarrow MP(5)=4+50-75=-21$;  $y(5)=20+125-125=20$"},
  {ask:"Dosaď do $E_p$.", sol:"$E_p=-21\\cdot\\dfrac{5}{20}=-5{,}25$"},
  {ask:"Přepočti na % změnu produkce při +10 % faktoru.", sol:"$\\Delta y\\approx E_p\\cdot 10\\%=-5{,}25\\cdot10=\\mathbf{-52{,}5\\,\\%}$. Záporně, protože $x=5$ leží už ve 3. stádiu (za maximem TP)."}
 ]},

{topic:"produkce", id:"P78", title:"Optimální množství faktoru pro maximum zisku",
 zadani:"Uveďte charakteristiky produkční funkce $y=2{,}5+4x+5x^2-2x^3$ a určete objem produkce (faktoru), při kterém firma maximalizuje zisk. Cena faktoru $C_x=10$ Kč, cena produkce $C_y=5$ Kč.",
 answer:{val:1.85, unit:"", tol:0.05},
 steps:[
  {ask:"Jaké je kritérium optimality (max zisku) u jednofaktorové PF?", sol:"$C_y\\cdot MP=C_x\\;\\Rightarrow\\;MP=\\dfrac{C_x}{C_y}$"},
  {ask:"Vyčísli pravou stranu a spočítej $MP$.", sol:"$MP=\\dfrac{10}{5}=2$;  $MP=y'=4+10x-6x^2$"},
  {ask:"Vyřeš $4+10x-6x^2=2$.", sol:"$6x^2-10x-2=0\\;\\Rightarrow\\;3x^2-5x-1=0\\;\\Rightarrow\\;x=\\dfrac{5+\\sqrt{37}}{6}\\approx\\mathbf{1{,}85}$"},
  {ask:"Co znamená výsledek?", sol:"Při $x\\approx1{,}85$ jednotkách faktoru je zisk maximální (mezní produkt právě pokryje poměr cen)."}
 ]},

{topic:"produkce", id:"P77", title:"Charakteristiky PF v intervalu ⟨5;6⟩",
 zadani:"Je dána jednofaktorová produkční funkce $y=\\dfrac{1}{20}(7x+3x^2)$. Vypočítejte jednotkovou produkci, mezní produkci a produkční pružnost v intervalu $\\langle 5;6\\rangle$ a interpretujte je.",
 steps:[
  {ask:"Uprav funkci a urči $MP$ a $AP$.", sol:"$y=0{,}35x+0{,}15x^2$;  $MP=y'=0{,}35+0{,}3x$;  $AP=\\dfrac{y}{x}=0{,}35+0{,}15x$"},
  {ask:"Dosaď krajní bod $x=5$.", sol:"$MP(5)=1{,}85$;  $AP(5)=1{,}10$;  $E_p=MP\\cdot\\dfrac{x}{y}=1{,}85\\cdot\\dfrac{5}{5{,}5}\\approx1{,}68$"},
  {ask:"Dosaď krajní bod $x=6$.", sol:"$MP(6)=2{,}15$;  $AP(6)=1{,}25$;  $E_p\\approx2{,}15\\cdot\\dfrac{6}{7{,}5}\\approx1{,}72$"},
  {ask:"Interpretace pružnosti.", sol:"$E_p>1$ v celém intervalu → funkce je v 1. (neracionálním) stádiu: zvýšení faktoru o 1 % zvýší produkci o cca 1,7 %."}
 ]},

{topic:"produkce", id:"P115", title:"Charakteristiky dvoufaktorové PF",
 zadani:"Vypočítejte a interpretujte charakteristiky 2-faktorové produkční funkce $y=-50+16x_1+17x_2-3{,}5x_1x_2$ pro $x_1=2,\\ x_2=3$ (ceny $C_{x1}=12,\\ C_{x2}=10,\\ C_y=35$).",
 steps:[
  {ask:"Spočítej celkovou produkci $TP$ v bodě $(2;3)$.", sol:"$TP=-50+16\\cdot2+17\\cdot3-3{,}5\\cdot2\\cdot3=-50+32+51-21=\\mathbf{12}$"},
  {ask:"Urči mezní produkty $MP_1,\\ MP_2$ (parciální derivace).", sol:"$MP_1=\\dfrac{\\partial y}{\\partial x_1}=16-3{,}5x_2=16-10{,}5=5{,}5$;  $MP_2=17-3{,}5x_1=17-7=10$"},
  {ask:"Urči jednotkové produkty $AP_1,\\ AP_2$.", sol:"$AP_1=\\dfrac{TP}{x_1}=\\dfrac{12}{2}=6$;  $AP_2=\\dfrac{TP}{x_2}=\\dfrac{12}{3}=4$"},
  {ask:"Urči produkční pružnosti $E_{p1},\\ E_{p2}$.", sol:"$E_{p1}=MP_1\\cdot\\dfrac{x_1}{TP}=5{,}5\\cdot\\dfrac{2}{12}\\approx0{,}92$;  $E_{p2}=10\\cdot\\dfrac{3}{12}=2{,}5$"},
  {ask:"Interpretace.", sol:"Faktor $x_2$ má větší pružnost (2,5) → ovlivňuje produkci silněji než $x_1$ (0,92)."}
 ]},

/* ===================== NÁKLADOVÉ FUNKCE ===================== */
{topic:"naklady", id:"P92", title:"Optimální produkce pro maximum zisku (z MC)",
 zadani:"Funkce mezních nákladů je $mN=400-30y+0{,}5y^2$. Cena jednotky produkce je 400 Kč. Stanovte optimální rozsah produkce zabezpečující maximum zisku.",
 answer:{val:60, unit:"", tol:0.01},
 steps:[
  {ask:"Jaká podmínka platí v optimu (max zisk)?", sol:"$MN=MT=C_y$ — mezní náklady se rovnají ceně produkce."},
  {ask:"Sestav rovnici $mN=400$.", sol:"$400-30y+0{,}5y^2=400\\;\\Rightarrow\\;0{,}5y^2-30y=0$"},
  {ask:"Vyřeš pro $y$.", sol:"$y(0{,}5y-30)=0\\;\\Rightarrow\\;y=0$ nebo $y=\\mathbf{60}$. Smysluplné řešení je $y=60$."}
 ]},

{topic:"naklady", id:"P94", title:"Rozsah produkce z jednotkových fixních nákladů",
 zadani:"Funkce fixních nákladů je $y_{Nf}=200$. Jaký musí být rozsah produkce, aby jednotkové fixní náklady činily 2,5 Kč?",
 answer:{val:80, unit:"", tol:0.01},
 steps:[
  {ask:"Jak souvisí jednotkové fixní náklady s objemem produkce?", sol:"Jednotkové fixní náklady $=\\dfrac{FC}{Q}=\\dfrac{200}{Q}$."},
  {ask:"Sestav rovnici.", sol:"$\\dfrac{200}{Q}=2{,}5$"},
  {ask:"Vyřeš pro $Q$.", sol:"$Q=\\dfrac{200}{2{,}5}=\\mathbf{80}$ jednotek."}
 ]},

{topic:"naklady", id:"P88", title:"Odvození nákladové funkce z produkční",
 zadani:"Odvoďte funkci celkových nákladů, je-li $C_{x1}=1$ Kč, produkční funkce $y=16+4x_1$ a náklady na neměnné faktory $x_2\\dots x_n$ jsou 124 Kč.",
 steps:[
  {ask:"Jaký je vztah nákladové a produkční funkce?", sol:"Nákladová funkce je inverzní k produkční — vyjádříme $x_1$ jako funkci $y$."},
  {ask:"Vyjádři $x_1$ z $y=16+4x_1$.", sol:"$x_1=\\dfrac{y-16}{4}$"},
  {ask:"Sestav variabilní náklady ($C_{x1}\\cdot x_1$).", sol:"$VC=1\\cdot\\dfrac{y-16}{4}=\\dfrac{y}{4}-4$"},
  {ask:"Přičti fixní náklady (124 Kč).", sol:"$N=VC+FC=\\dfrac{y}{4}-4+124=\\mathbf{120+0{,}25\\,y}$"}
 ]},

{topic:"naklady", id:"P90", title:"Mezní náklady z jednotkových nákladů",
 zadani:"Funkce jednotkových celkových nákladů je $y_{jN}=\\dfrac{2{,}5}{Q}+3{,}5-0{,}7Q+0{,}5Q^2$. Odvoďte funkci mezních nákladů.",
 steps:[
  {ask:"Jak z jednotkových nákladů získám celkové?", sol:"$TC=y_{jN}\\cdot Q$"},
  {ask:"Vynásob $Q$.", sol:"$TC=2{,}5+3{,}5Q-0{,}7Q^2+0{,}5Q^3$"},
  {ask:"Mezní náklady = derivace $TC$ podle $Q$.", sol:"$MC=\\dfrac{dTC}{dQ}=\\mathbf{3{,}5-1{,}4Q+1{,}5Q^2}$"}
 ]},

{topic:"naklady", id:"P91", title:"Celkové a jednotkové náklady z MC",
 zadani:"Funkce mezních nákladů má tvar $MC=2+4{,}4Q-0{,}33Q^2$. a) Odvoďte funkci celkových nákladů. b) Odvoďte funkci jednotkových nákladů.",
 steps:[
  {ask:"Jak z $MC$ získám celkové náklady $TC$?", sol:"Integrací: $TC=\\int MC\\,dQ$ (plus fixní náklady $FC$)."},
  {ask:"Zintegruj $MC$.", sol:"$TC=2Q+2{,}2Q^2-0{,}11Q^3\\;(+FC)$"},
  {ask:"Jednotkové náklady = $TC/Q$.", sol:"$y_{jN}=\\dfrac{TC}{Q}=\\mathbf{2+2{,}2Q-0{,}11Q^2}\\;\\left(+\\dfrac{FC}{Q}\\right)$"}
 ]},

{topic:"naklady", id:"P89", title:"Nákladová pružnost: odhad % změny nákladů",
 zadani:"S využitím nákladové pružnosti vypočítejte, o kolik procent se zvýší náklady při zvýšení produkce o 5 % z úrovně $y=42$. Variabilní náklady $VC=0{,}4y$, fixní náklady 100 Kč.",
 answer:{val:0.72, unit:"%", tol:0.05},
 steps:[
  {ask:"Sestav funkci celkových nákladů.", sol:"$N=VC+FC=0{,}4y+100$"},
  {ask:"Jaký je vzorec nákladové pružnosti?", sol:"$E_N=\\dfrac{dN}{dy}\\cdot\\dfrac{y}{N}=0{,}4\\cdot\\dfrac{y}{0{,}4y+100}$"},
  {ask:"Dosaď $y=42$.", sol:"$N(42)=0{,}4\\cdot42+100=116{,}8$;  $E_N=0{,}4\\cdot\\dfrac{42}{116{,}8}\\approx0{,}144$"},
  {ask:"Přepočti na % změnu nákladů při +5 % produkce.", sol:"$\\Delta N\\approx E_N\\cdot5\\%=0{,}144\\cdot5\\approx\\mathbf{0{,}72\\,\\%}$"}
 ]},

/* ===================== IZOKVANTY / IZOFAKTOR / IZONÁKLADY ===================== */
{topic:"izokvanta", id:"P95", title:"Odvození izokvanty (závisle x2)",
 zadani:"Produkční funkce je $y=2{,}4+0{,}5x_1+2x_2+4x_1x_2$. Odvoďte izokvantovou funkci se závisle proměnnou $x_2$ zabezpečující produkci $y=20$.",
 steps:[
  {ask:"Co znamená odvodit izokvantu?", sol:"Dosadíme pevnou produkci $y=20$ a z rovnice vyjádříme $x_2$ pomocí $x_1$."},
  {ask:"Dosaď $y=20$ a osamostatni členy s $x_2$.", sol:"$20=2{,}4+0{,}5x_1+2x_2+4x_1x_2\\;\\Rightarrow\\;17{,}6-0{,}5x_1=x_2(2+4x_1)$"},
  {ask:"Vyjádři $x_2$.", sol:"$x_2=\\dfrac{17{,}6-0{,}5x_1}{2+4x_1}$"}
 ]},

{topic:"izokvanta", id:"P97", title:"Odvození izokvanty pro y = 10",
 zadani:"Odvoďte izokvantovou funkci pro $y=10$ z produkční funkce $y=4+0{,}2x_1+0{,}5x_2+2x_1x_2$.",
 steps:[
  {ask:"Dosaď $y=10$ a osamostatni $x_2$.", sol:"$10=4+0{,}2x_1+0{,}5x_2+2x_1x_2\\;\\Rightarrow\\;6-0{,}2x_1=x_2(0{,}5+2x_1)$"},
  {ask:"Vyjádři $x_2$.", sol:"$x_2=\\dfrac{6-0{,}2x_1}{0{,}5+2x_1}$"}
 ]},

{topic:"izokvanta", id:"P99", title:"Odvození funkce izonákladů",
 zadani:"Odvoďte funkci izonákladů, je-li dáno $C_{x1}=50$ Kč, $C_{x2}=20$ Kč, $N=2000$ Kč.",
 steps:[
  {ask:"Jak vypadá rovnice celkových nákladů (izokosta)?", sol:"$N=C_{x1}\\cdot x_1+C_{x2}\\cdot x_2\\;\\Rightarrow\\;2000=50x_1+20x_2$"},
  {ask:"Vyjádři $x_2$ (izokosta je přímka).", sol:"$x_2=\\dfrac{2000-50x_1}{20}=\\mathbf{100-2{,}5x_1}$"}
 ]},

{topic:"izokvanta", id:"P100", title:"Optimální kombinace faktorů (max zisk)",
 zadani:"Izokvantová funkce je $x_2=\\dfrac{50}{x_1}$, ceny $C_{x1}=5$ Kč a $C_{x2}=10$ Kč. Určete optimální kombinaci faktorů $x_1$ a $x_2$ vedoucí k maximalizaci zisku.",
 steps:[
  {ask:"Jaké je kritérium optimality pro izokvantu (F-F)?", sol:"$MMZF=\\dfrac{\\partial x_2}{\\partial x_1}=-\\dfrac{C_{x1}}{C_{x2}}$ — sklon izokvanty se rovná zápornému poměru cen."},
  {ask:"Spočítej $MMZF$ a pravou stranu.", sol:"$MMZF=\\dfrac{d}{dx_1}\\!\\left(\\dfrac{50}{x_1}\\right)=-\\dfrac{50}{x_1^2}$;  $-\\dfrac{C_{x1}}{C_{x2}}=-\\dfrac{5}{10}=-0{,}5$"},
  {ask:"Vyřeš $-\\dfrac{50}{x_1^2}=-0{,}5$.", sol:"$x_1^2=100\\;\\Rightarrow\\;x_1=10$"},
  {ask:"Dopočti $x_2$.", sol:"$x_2=\\dfrac{50}{10}=5$. Optimální kombinace je $\\mathbf{x_1=10,\\ x_2=5}$."}
 ]},

{topic:"izokvanta", id:"P108", title:"Odvození funkce izotržeb",
 zadani:"Odvoďte funkci izotržeb, je-li dáno $C_{y1}=40$ Kč, $C_{y2}=35$ Kč, $TR=9500$ Kč.",
 steps:[
  {ask:"Jak vypadá rovnice tržeb (izotržba)?", sol:"$TR=C_{y1}\\cdot y_1+C_{y2}\\cdot y_2\\;\\Rightarrow\\;9500=40y_1+35y_2$"},
  {ask:"Vyjádři $y_2$ (přímka).", sol:"$y_2=\\dfrac{9500-40y_1}{35}\\approx\\mathbf{271{,}43-1{,}14\\,y_1}$"}
 ]},

{topic:"izokvanta", id:"P109", title:"MMZP konstantní izofaktorové funkce",
 zadani:"Izofaktorová funkce je $y_2=10-0{,}5y_1$. Mezní míra záměny produktů podle této funkce je rostoucí / klesající / konstantní / nulová / záporná / kladná? Doložte propočtem.",
 answer:{val:-0.5, unit:"", tol:0.01},
 steps:[
  {ask:"Jak se počítá MMZP?", sol:"$MMZP=\\dfrac{\\partial y_2}{\\partial y_1}$"},
  {ask:"Derivuj $y_2=10-0{,}5y_1$.", sol:"$MMZP=-0{,}5$ — nezávisí na $y_1$."},
  {ask:"Závěr.", sol:"MMZP je $\\mathbf{konstantní\\ a\\ záporná}$ (přímková izofaktorová funkce, konkurenční vztah odvětví)."}
 ]},

{topic:"izokvanta", id:"P111", title:"Optimální kombinace produkcí (izofaktor)",
 zadani:"Jaká je optimální kombinace produkcí vedoucí k maximalizaci zisku, je-li izofaktorová funkce $y_2=5y_1^2-60y_1+190$ a ceny $C_{y1}=300$ Kč/kg a $C_{y2}=30$ Kč/kg?",
 steps:[
  {ask:"Kritérium optimality pro izofaktor (P-P)?", sol:"$MMZP=\\dfrac{\\partial y_2}{\\partial y_1}=-\\dfrac{C_{y1}}{C_{y2}}$"},
  {ask:"Spočítej $MMZP$ a pravou stranu.", sol:"$MMZP=10y_1-60$;  $-\\dfrac{C_{y1}}{C_{y2}}=-\\dfrac{300}{30}=-10$"},
  {ask:"Vyřeš $10y_1-60=-10$.", sol:"$10y_1=50\\;\\Rightarrow\\;y_1=5$"},
  {ask:"Dopočti $y_2$.", sol:"$y_2=5\\cdot25-60\\cdot5+190=125-300+190=15$. Optimum $\\mathbf{y_1=5,\\ y_2=15}$."}
 ]},

{topic:"izokvanta", id:"P113", title:"MMZF nelineární izokvanty",
 zadani:"Izokvantová funkce je $x_2=\\dfrac{10}{x_1}-0{,}5x_1$. Vypočítejte mezní míru záměny faktorů pro $x_1=2$.",
 answer:{val:-3, unit:"", tol:0.01},
 steps:[
  {ask:"Jak se počítá MMZF?", sol:"$MMZF=\\dfrac{dx_2}{dx_1}$"},
  {ask:"Derivuj $x_2=\\dfrac{10}{x_1}-0{,}5x_1$.", sol:"$MMZF=-\\dfrac{10}{x_1^2}-0{,}5$"},
  {ask:"Dosaď $x_1=2$.", sol:"$MMZF=-\\dfrac{10}{4}-0{,}5=-2{,}5-0{,}5=\\mathbf{-3}$. Záporná → racionální oblast záměny."}
 ]},

{topic:"izokvanta", id:"P114", title:"Úspora faktoru x2 a substituční účinnost",
 zadani:"Izoprodukční funkce je $x_2=10+\\dfrac{20}{x_1}$. Vyčíslete, jaké množství faktoru $x_2$ lze ušetřit, když se $x_1$ z úrovně 10 jednotek zvýší o 4 jednotky. Jaká je substituční účinnost každé z těchto jednotek $x_1$?",
 answer:{val:0.571, unit:"", tol:0.01},
 steps:[
  {ask:"Spočítej $x_2$ pro $x_1=10$.", sol:"$x_2(10)=10+\\dfrac{20}{10}=12$"},
  {ask:"Spočítej $x_2$ pro $x_1=14$.", sol:"$x_2(14)=10+\\dfrac{20}{14}\\approx11{,}43$"},
  {ask:"Kolik se ušetří na $x_2$?", sol:"$\\Delta x_2=12-11{,}43=\\mathbf{0{,}571}$ jednotky."},
  {ask:"Substituční účinnost na jednotku $x_1$?", sol:"$\\dfrac{0{,}571}{4}\\approx0{,}143$ jednotky $x_2$ na 1 jednotku $x_1$."}
 ]},

{topic:"izokvanta", id:"P117", title:"Izokvanta + MMZF (mikro PF)",
 zadani:"Mikroekonomická produkční funkce je $y=2{,}5+2x_1+3x_2+0{,}5x_1x_2$ ($y$ = výnos, $x_1$ = dusík, $x_2$ = fosfor). Odvoďte izokvantu pro $y=30$ a mezní míru záměny faktorů při zvýšení dávky dusíku ze 4 na 5 jednotek.",
 answer:{val:-0.718, unit:"", tol:0.01},
 steps:[
  {ask:"Odvoď izokvantu (dosaď $y=30$, vyjádři $x_2$).", sol:"$30=2{,}5+2x_1+3x_2+0{,}5x_1x_2\\;\\Rightarrow\\;x_2=\\dfrac{27{,}5-2x_1}{3+0{,}5x_1}$"},
  {ask:"Spočítej $x_2$ pro $x_1=4$ a $x_1=5$.", sol:"$x_2(4)=\\dfrac{19{,}5}{5}=3{,}9$;  $x_2(5)=\\dfrac{17{,}5}{5{,}5}\\approx3{,}18$"},
  {ask:"Obloukové MMZF ze 4 na 5.", sol:"$MMZF=\\dfrac{\\Delta x_2}{\\Delta x_1}=\\dfrac{3{,}18-3{,}9}{5-4}\\approx\\mathbf{-0{,}72}$ — pro +1 jednotku dusíku lze ubrat cca 0,72 jednotky fosforu."}
 ]},

{topic:"izokvanta", id:"P118", title:"Izokvanta lineární PF (konstantní MMZF)",
 zadani:"Produkční funkce je $y=8+2x_1+4x_2$. Odvoďte izokvantu pro $y=10$ a urči, zda jde o izokvantu s rostoucí / klesající / konstantní / kladnou / zápornou mezní mírou záměny.",
 answer:{val:-0.5, unit:"", tol:0.01},
 steps:[
  {ask:"Odvoď izokvantu (dosaď $y=10$).", sol:"$10=8+2x_1+4x_2\\;\\Rightarrow\\;4x_2=2-2x_1\\;\\Rightarrow\\;x_2=0{,}5-0{,}5x_1$"},
  {ask:"Spočítej MMZF.", sol:"$MMZF=\\dfrac{dx_2}{dx_1}=-0{,}5$ — nezávisí na $x_1$."},
  {ask:"Závěr.", sol:"Izokvanta je přímka → $\\mathbf{konstantní\\ a\\ záporná}$ MMZF (faktory dokonale nahraditelné v poměru 2:1)."}
 ]},

/* ===================== PRUŽNOSTI ===================== */
{topic:"pruznosti", id:"P35", title:"Důkaz pružnosti mocninné funkce",
 zadani:"Dokažte, že v poptávkové funkci $y=1{,}4\\,x_p^{1{,}4}$ je koeficient pružnosti roven exponentu.",
 answer:{val:1.4, unit:"", tol:0.01},
 steps:[
  {ask:"Jaký je obecný vzorec pružnosti?", sol:"$E=\\dfrac{dy}{dx_p}\\cdot\\dfrac{x_p}{y}$"},
  {ask:"Derivuj $y=1{,}4\\,x_p^{1{,}4}$.", sol:"$\\dfrac{dy}{dx_p}=1{,}4\\cdot1{,}4\\,x_p^{0{,}4}=1{,}96\\,x_p^{0{,}4}$"},
  {ask:"Dosaď do vzorce a zkrať.", sol:"$E=1{,}96\\,x_p^{0{,}4}\\cdot\\dfrac{x_p}{1{,}4\\,x_p^{1{,}4}}=\\dfrac{1{,}96}{1{,}4}\\cdot\\dfrac{x_p^{1{,}4}}{x_p^{1{,}4}}=\\mathbf{1{,}4}$"},
  {ask:"Obecný závěr.", sol:"U mocninné funkce $y=a\\,x^{b}$ je pružnost vždy rovna exponentu $b$ (konstantní, nezávislá na $x$)."}
 ]},

{topic:"pruznosti", id:"P73", title:"Pružnost nabídky a podmínka stability",
 zadani:"Vyčíslete z nabídkové funkce $Q_S=3+2c_i$ pružnost při ceně $c_i=8$ Kč/l mléka (v tomto bodě je tržní rovnováha). Uveďte, jaká musí být v bodě rovnováhy pružnost poptávky, aby šlo o stabilní tržní rovnováhu.",
 answer:{val:0.842, unit:"", tol:0.01},
 steps:[
  {ask:"Vzorec cenové pružnosti nabídky?", sol:"$E_S=\\dfrac{dQ_S}{dc}\\cdot\\dfrac{c}{Q_S}$"},
  {ask:"Spočítej $Q_S(8)$ a derivaci.", sol:"$Q_S(8)=3+2\\cdot8=19$;  $\\dfrac{dQ_S}{dc}=2$"},
  {ask:"Dosaď do vzorce.", sol:"$E_S=2\\cdot\\dfrac{8}{19}=\\dfrac{16}{19}\\approx\\mathbf{0{,}84}$"},
  {ask:"Podmínka stabilní rovnováhy (pavučinový teorém).", sol:"Poptávka musí být pružnější než nabídka: $|E_D|>|E_S|\\approx0{,}84$ (poptávka méně strmá → oscilace se tlumí)."}
 ]},

/* ===================== TRŽNÍ ROVNOVÁHA / PROGNÓZY ===================== */
{topic:"prognozy", id:"P70", title:"Který model dospěje k tržní rovnováze + cena",
 zadani:"Modely poptávky a nabídky:\\n a) $Q_S=220+0{,}12P$, $Q_D=580-0{,}22P$;\\n b) $Q_S=230+0{,}32P$, $Q_D=550-0{,}22P$.\\n Určete, ve kterém modelu se postupem času vytváří tržní rovnováha, a u vybraného spočtěte rovnovážnou cenu.",
 answer:{val:1058.82, unit:"Kč", tol:1},
 steps:[
  {ask:"Kdy je rovnováha stabilní (pavučinový teorém)?", sol:"Když je nabídka méně strmá než poptávka: $|sklon\\ S|<|sklon\\ D|$."},
  {ask:"Porovnej sklony obou modelů.", sol:"a) $0{,}12<0{,}22$ → STABILNÍ;  b) $0{,}32>0{,}22$ → nestabilní. Vyhovuje model $\\mathbf{a)}$."},
  {ask:"Najdi rovnovážnou cenu modelu a) ($Q_S=Q_D$).", sol:"$220+0{,}12P=580-0{,}22P\\;\\Rightarrow\\;0{,}34P=360$"},
  {ask:"Dořeš.", sol:"$P=\\dfrac{360}{0{,}34}\\approx\\mathbf{1058{,}82}$ Kč."}
 ]},

{topic:"prognozy", id:"P72", title:"Parametr poptávky pro jednotkovou oscilaci",
 zadani:"Nabídková funkce je $Q_N=10+0{,}5c_i$. Jaká je hodnota parametru ceny v poptávkové funkci, víte-li, že na trhu dochází ke stále stejné oscilaci ceny a množství kolem rovnováhy?",
 answer:{val:-0.5, unit:"", tol:0.01},
 steps:[
  {ask:"Co znamená 'stále stejná oscilace' (pavučinový teorém)?", sol:"Jednotková (oscilující) rovnováha — nabídka a poptávka jsou stejně strmé."},
  {ask:"Jaký je sklon nabídky?", sol:"$+0{,}5$ (parametr u $c_i$)."},
  {ask:"Urči parametr poptávky.", sol:"Stejná strmost, ale poptávka klesá → parametr ceny $=\\mathbf{-0{,}5}$."}
 ]},

{topic:"prognozy", id:"P74", title:"Stabilita rovnováhy a pružnosti",
 zadani:"Nabídka $Q_{Sit}=3+4{,}8c_{it}$, poptávka $Q_{Dit}=16{,}5-2{,}3c_{it}$. Je tržní rovnováha stabilní, nebo nestabilní? Vypočítejte pružnosti a interpretujte.",
 steps:[
  {ask:"Porovnej strmost nabídky a poptávky.", sol:"$|sklon\\ S|=4{,}8>|sklon\\ D|=2{,}3$ → nabídka je strmější než poptávka."},
  {ask:"Závěr o stabilitě (pavučinový teorém).", sol:"Strmější nabídka → oscilace se zvětšují → rovnováha je $\\mathbf{nestabilní}$ (divergentní)."},
  {ask:"Dosaď zadanou cenu $c=5$ Kč do obou funkcí.", sol:"$Q_S=3+4{,}8\\cdot5=27$;  $Q_D=16{,}5-2{,}3\\cdot5=5$"},
  {ask:"Spočítej cenové pružnosti při $c=5$.", sol:"$E_S=4{,}8\\cdot\\dfrac{5}{27}\\approx0{,}89$ (nabídka nepružná);  $E_D=-2{,}3\\cdot\\dfrac{5}{5}=-2{,}3$ (poptávka pružná)."}
 ]},

{topic:"prognozy", id:"P66", title:"Normovaná odchylka pro shodu se skutečností",
 zadani:"Jakou hodnotu musí mít normovaná odchylka modelu, aby prognóza z něj odvozená byla shodná se skutečností?",
 answer:{val:0, unit:"", tol:0.001},
 steps:[
  {ask:"Co normovaná odchylka $N$ porovnává?", sol:"Velikost chyby prognózy vůči nahrazení průměrem: $N<1$ dobrá, $N>1$ špatná."},
  {ask:"Co znamená dokonalá shoda se skutečností?", sol:"Nulová chyba prognózy ($y=\\hat{y}$) → čitatel je nula."},
  {ask:"Jaká je tedy hodnota $N$?", sol:"$N=\\mathbf{0}$ — prognóza se přesně shoduje se skutečností."}
 ]},

/* ===================== PRUŽNOSTI (mocninné / bodové) ===================== */
{topic:"pruznosti", id:"P29", title:"Oblouková příjmová pružnost",
 zadani:"Na začátku roku byl příjem 10 tis. Kč a spotřeba mléka 100 l/os., na konci roku příjem 12 tis. Kč a spotřeba 110 l/os. Odvoďte, jak poptávka reagovala na změnu příjmu.",
 answer:{val:0.5, unit:"", tol:0.01},
 steps:[
  {ask:"Jaký vzorec použít, když znám jen dvě období (bez tvaru funkce)?", sol:"Oblouková pružnost: $E_b=\\dfrac{(y_1-y_0)/y_0}{(x_1-x_0)/x_0}$"},
  {ask:"Dosaď hodnoty.", sol:"$E_b=\\dfrac{(110-100)/100}{(12-10)/10}=\\dfrac{0{,}1}{0{,}2}=\\mathbf{0{,}5}$"},
  {ask:"Interpretace.", sol:"$0<E<1$ → statek nezbytný (relativně): při +1 % příjmu vzroste spotřeba o 0,5 %."}
 ]},

{topic:"pruznosti", id:"P30", title:"Bodová cenová pružnost nabídky se zpožděním",
 zadani:"Nabídková funkce je $y_t=f(JV,\\,c_{1(t-1)})$, hodnoty: $y_t=4$, $y_{(t+1)}=2$, $c_{1t}=6$, $c_{1(t-1)}=10$. Vypočtěte bodovou cenovou pružnost.",
 answer:{val:1.25, unit:"", tol:0.01},
 steps:[
  {ask:"Vzorec bodové pružnosti.", sol:"$E_c=\\dfrac{(y_1-y_0)/y_0}{(c_1-c_0)/c_0}$"},
  {ask:"Dosaď (nabídka reaguje na zpožděnou cenu).", sol:"$E_c=\\dfrac{(2-4)/4}{(6-10)/10}=\\dfrac{-0{,}5}{-0{,}4}=\\mathbf{1{,}25}$"},
  {ask:"Interpretace.", sol:"$E>1$ → pružná nabídka: 1% změna ceny vyvolá 1,25% změnu nabízeného množství."}
 ]},

{topic:"pruznosti", id:"P27", title:"Která proměnná víc ovlivňuje + změna spotřeby",
 zadani:"Pro $y_i=15-0{,}4c_i+0{,}06Př+u_i$ (cena $c_i=20$ Kč/kg, příjem $Př=21$ tis. Kč) určete, která proměnná víc ovlivňuje poptávku, a o kolik kg se změní spotřeba, klesne-li příjem na 20,5 tis. Kč.",
 answer:{val:-0.03, unit:"kg", tol:0.005},
 steps:[
  {ask:"Spočítej teoretickou hodnotu $\\hat{y}$ pro porovnání pružností.", sol:"$\\hat{y}=15-0{,}4\\cdot20+0{,}06\\cdot21=8{,}26$"},
  {ask:"Spočítej obě pružnosti.", sol:"$e_c=-0{,}4\\cdot\\dfrac{20}{8{,}26}\\approx-0{,}97$;  $E_{Př}=0{,}06\\cdot\\dfrac{21}{8{,}26}\\approx0{,}15$. $|e_c|>|E_{Př}|$ → víc ovlivňuje cena."},
  {ask:"Změna spotřeby při poklesu příjmu o 0,5 tis. (parametr je v jednotkách).", sol:"$\\Delta y=0{,}06\\cdot(-0{,}5)=\\mathbf{-0{,}03}$ kg."}
 ]},

{topic:"pruznosti", id:"P36", title:"Křížová pružnost u mocninné funkce",
 zadani:"Poptávková funkce je $y_i=2{,}5\\,x_i^{-0{,}2}\\,x_j^{-0{,}1}\\,x_k^{0{,}3}$. Vypočítejte křížovou cenovou pružnost a interpretujte.",
 answer:{val:-0.1, unit:"", tol:0.01},
 steps:[
  {ask:"Co u mocninné funkce udává koeficient pružnosti?", sol:"Přímo exponent u dané proměnné (pružnost je konstantní, nezávislá na hodnotách)."},
  {ask:"Urči křížovou pružnost (vůči ceně $x_j$).", sol:"$e_{ij}=\\mathbf{-0{,}1}$"},
  {ask:"Interpretace.", sol:"Záporná křížová pružnost → statky jsou komplementy: +1 % ceny $x_j$ sníží poptávku po $i$ o 0,1 %."}
 ]},

{topic:"pruznosti", id:"P38", title:"Mocninná funkce: nová poptávka a změna ceny",
 zadani:"Poptávka $y_i=2{,}5\\,c_i^{-0{,}6}\\,c_j^{0{,}2}\\,Př^{0{,}8}$. a) Při $c_i=25$ a poptávce 9 kg se cena $c_i$ zvýší o 10 %. Vypočítejte novou poptávku. b) Jak by se musela změnit cena $c_j$, aby spotřeba klesla z 12 kg o 1 kg?",
 answer:{val:8.5, unit:"kg", tol:0.05},
 steps:[
  {ask:"a) Jak se u mocninné funkce projeví % změna ceny?", sol:"Přes pružnost (exponent). Pružnost vůči $c_i$ je $-0{,}6$."},
  {ask:"Spočítej novou poptávku.", sol:"$y_{i,new}=9\\cdot(1{,}1)^{-0{,}6}\\approx\\mathbf{8{,}5}$ kg (přibližně $9\\cdot(1-0{,}06)=8{,}46$)."},
  {ask:"b) Jakou pružnost má $c_j$ a o kolik % má klesnout poptávka?", sol:"Pružnost vůči $c_j$ je $+0{,}2$; pokles o 1 kg z 12 = $-8{,}33\\,\\%$."},
  {ask:"Dopočti potřebnou změnu ceny $c_j$.", sol:"$\\%\\Delta c_j=\\dfrac{-8{,}33}{0{,}2}\\approx\\mathbf{-41{,}7\\,\\%}$ (cena $c_j$ musí klesnout)."}
 ]},

{topic:"pruznosti", id:"P39", title:"Logaritmický tvar → typ statku a vývoj v čase",
 zadani:"Poptávka: $\\log y_{it}=2-0{,}6\\log c_{it}-0{,}8\\log c_{jt}+1{,}5\\log P_t-0{,}2\\log x_T$. Uveďte funkci v mocninném tvaru a určete typ statku (nezbytný/relativně nezbytný/luxusní) a meziroční vývoj.",
 answer:{val:1.5, unit:"", tol:0.01},
 steps:[
  {ask:"Převeď logaritmický tvar na mocninný.", sol:"$y_{it}=10^{2}\\cdot c_{it}^{-0{,}6}\\cdot c_{jt}^{-0{,}8}\\cdot P_t^{1{,}5}\\cdot x_T^{-0{,}2}$"},
  {ask:"Najdi příjmovou pružnost a urči typ statku.", sol:"Příjmová pružnost $=\\mathbf{1{,}5}$. Protože $E>1$ → **luxusní** statek."},
  {ask:"Co říká koeficient u časového vektoru $x_T$?", sol:"$-0{,}2<0$ → poptávka po $i$-tém výrobku se meziročně **snižuje**."}
 ]},

/* ===================== ENGEL/TORNQUIST – LINEARIZACE ===================== */
{topic:"tornquist", id:"P32", title:"Linearizace 1. TQ: matice X a vektor y",
 zadani:"Upravte podkladová data do matic a vektorů pro odhad parametrů 1. Tornquistovy funkce. Data: $y_i=(150,180,330)$, $x_p=(5,8,12)$. Uveďte postup linearizace.",
 steps:[
  {ask:"Jak se linearizuje 1. TQ $y=a_1\\dfrac{x_p}{x_p+a_2}$?", sol:"Převrácením: $\\dfrac{1}{y}=\\dfrac{1}{a_1}+\\dfrac{a_2}{a_1}\\cdot\\dfrac{1}{x_p}$, tedy $y'=\\dfrac{1}{y},\\ x_p'=\\dfrac{1}{x_p}$ a $a_1'=\\dfrac{1}{a_1},\\ a_2'=\\dfrac{a_2}{a_1}$."},
  {ask:"Sestav vektor $y'$ (převrácené hodnoty $y$).", sol:"$y'=\\left(\\dfrac{1}{150},\\dfrac{1}{180},\\dfrac{1}{330}\\right)\\approx(0{,}00667;\\,0{,}00556;\\,0{,}00303)$"},
  {ask:"Sestav matici $X$ (jednotkový vektor + převrácené $x_p$).", sol:"$X=\\begin{bmatrix}1 & 1/5\\\\ 1 & 1/8\\\\ 1 & 1/12\\end{bmatrix}=\\begin{bmatrix}1 & 0{,}2\\\\ 1 & 0{,}125\\\\ 1 & 0{,}0833\\end{bmatrix}$"},
  {ask:"Jak se odhadnou parametry?", sol:"BMNČ na linearizované funkci: $\\hat{a}'=(X^TX)^{-1}X^Ty'$, pak zpětně $a_1=1/a_1'$, $a_2=a_2'\\cdot a_1$."}
 ]},

{topic:"tornquist", id:"P33", title:"Zpětný převod linearizované 1. TQ na nelineární tvar",
 zadani:"Odhadnutá linearizovaná 1. TQ funkce má tvar $y_i'=0{,}5+7{,}5x_p'+u_i'$. Zapište ji v původním nelineárním tvaru.",
 steps:[
  {ask:"Jak souvisí $a_1'$ s $a_1$?", sol:"$a_1'=\\dfrac{1}{a_1}\\Rightarrow a_1=\\dfrac{1}{a_1'}=\\dfrac{1}{0{,}5}=2$"},
  {ask:"Jak souvisí $a_2'$ s $a_2$?", sol:"$a_2'=\\dfrac{a_2}{a_1}\\Rightarrow a_2=a_2'\\cdot a_1=7{,}5\\cdot2=15$"},
  {ask:"Zapiš nelineární 1. TQ.", sol:"$y_i=\\dfrac{a_1\\,x_p}{x_p+a_2}=\\mathbf{\\dfrac{2x_p}{x_p+15}}$"}
 ]},

{topic:"tornquist", id:"P34", title:"Linearizace mocninné funkce pro BMNČ",
 zadani:"Upravte matici a vektor tak, aby šla mocninná funkce odhadnout BMNČ. $y=(110,100,90,105)$, $X$ má sloupce jednotkový vektor a $x=(5,6,7,8)$.",
 steps:[
  {ask:"Jak se linearizuje mocninná funkce $y=a\\,x^b$?", sol:"Zlogaritmováním: $\\log y=\\log a+b\\log x$ — lineární v logaritmech."},
  {ask:"Zlogaritmuj vektor $y$.", sol:"$\\log y=(\\ln 110,\\ln 100,\\ln 90,\\ln 105)\\approx(4{,}70;\\,4{,}61;\\,4{,}50;\\,4{,}65)$"},
  {ask:"Zlogaritmuj sloupec $x$ v matici $X$.", sol:"$\\log x=(\\ln5,\\ln6,\\ln7,\\ln8)\\approx(1{,}61;\\,1{,}79;\\,1{,}95;\\,2{,}08)$; matice $X=\\begin{bmatrix}1&\\ln5\\\\1&\\ln6\\\\1&\\ln7\\\\1&\\ln8\\end{bmatrix}$"},
  {ask:"Co vyjde z BMNČ?", sol:"Sklon = exponent $b$; úsek = $\\log a$ (parametr $a=e^{úsek}$). Pozn.: lze použít $\\ln$ i $\\log_{10}$, exponent $b$ vyjde stejně."}
 ]},

/* ===================== VÍCEROVNICOVÉ MODELY: REDUKCE, MATICE B ===================== */
{topic:"vicerov", id:"P46", title:"Redukce modelu do redukované formy",
 zadani:"Proveďte redukci modelu a zapište jeho rovnice:\\n $y_{1t}=3y_{3t}-2y_{1(t-1)}+u_{1t}$\\n $y_{2t}=4x_{2t}-3x_{3t}+x_{5t}+u_{2t}$\\n $y_{3t}=-2y_{2t}+1-3x_{3t}+u_{3t}$",
 steps:[
  {ask:"Která rovnice je už v redukovaném tvaru (jen predeterminované vpravo)?", sol:"Druhá: $y_{2t}=4x_{2t}-3x_{3t}+x_{5t}$ — obsahuje jen $x$."},
  {ask:"Dosaď $y_2$ do třetí rovnice.", sol:"$y_{3t}=-2(4x_{2t}-3x_{3t}+x_{5t})+1-3x_{3t}=1-8x_{2t}+3x_{3t}-2x_{5t}$"},
  {ask:"Dosaď $y_3$ do první rovnice.", sol:"$y_{1t}=3(1-8x_{2t}+3x_{3t}-2x_{5t})-2y_{1(t-1)}=3-24x_{2t}+9x_{3t}-6x_{5t}-2y_{1(t-1)}$"},
  {ask:"Zapiš redukovanou formu.", sol:"$y_{1t}=3-24x_{2t}+9x_{3t}-6x_{5t}-2y_{1(t-1)}+v_{1t}$; $\\;y_{2t}=4x_{2t}-3x_{3t}+x_{5t}+v_{2t}$; $\\;y_{3t}=1-8x_{2t}+3x_{3t}-2x_{5t}+v_{3t}$"}
 ]},

{topic:"vicerov", id:"P47", title:"Odvození matic B a Γ",
 zadani:"Pro model odvoďte matice B a Γ:\\n $y_{1t}=\\beta_{12}y_{2t}+\\beta_{13}y_{3t}+\\gamma_{11}x_{1t}+\\gamma^{*}_{12}y_{1(t-1)}+\\gamma_{13}x_{3t}+u_{1t}$\\n $y_{2t}=\\beta_{23}y_{3t}+\\gamma_{21}x_{1t}+\\gamma_{24}x_{4t}+\\gamma_{25}x_{5t}+u_{2t}$\\n $y_{3t}=y_{1t}+x_{2t}+x_{6t}$",
 steps:[
  {ask:"Jak vzniká matice B?", sol:"Koeficienty u endogenních $y$ (po převedení na levou stranu); na diagonále 1, jinde $-\\beta$."},
  {ask:"Sestav B (pořadí $y_1,y_2,y_3$).", sol:"$B=\\begin{bmatrix}1 & -\\beta_{12} & -\\beta_{13}\\\\ 0 & 1 & -\\beta_{23}\\\\ -1 & 0 & 1\\end{bmatrix}$ (3. řádek: $y_3-y_1=\\dots$)"},
  {ask:"Co obsahuje matice Γ?", sol:"Koeficienty u predeterminovaných proměnných ($x_1,y_{1(t-1)},x_3,x_4,x_5,x_2,x_6$) v jednotlivých rovnicích — identitní 3. rovnice má u $x_2,x_6$ koeficient 1."}
 ]},

{topic:"vicerov", id:"P52", title:"Typ modelu podle matice B",
 zadani:"Matice B modelu je $B=\\begin{bmatrix}1&-1&2\\\\2&1&0\\\\-3&-1&1\\end{bmatrix}$. Jsou mezi proměnnými dopředné i zpětné vazby? Zdůvodněte.",
 steps:[
  {ask:"Podle čeho se pozná typ modelu?", sol:"Prostý = B jednotková; rekurzivní = trojúhelníková; simultánní = nenulové prvky nad i pod diagonálou."},
  {ask:"Jsou nenulové prvky NAD diagonálou?", sol:"Ano: $-1$ a $2$ (a 0)."},
  {ask:"Jsou nenulové prvky POD diagonálou?", sol:"Ano: $2,\\,-3,\\,-1$."},
  {ask:"Závěr.", sol:"Prvky nad i pod diagonálou → **ANO**, jde o **simultánní model** (dopředné i zpětné vazby mezi $y$)."}
 ]},

/* ===================== IDENTIFIKACE ===================== */
{topic:"identif", id:"P40", title:"Identifikace rovnic modelu",
 zadani:"Proveďte identifikaci rovnic modelu:\\n $y_{1t}=0{,}4y_{2t}+2+0{,}3x_{2t}+u_{1t}$\\n $y_{2t}=0{,}3y_{1t}+3-0{,}2x_{3t}+1{,}4y_{(t-2)}+u_{2t}$\\n $y_{3t}=y_{1t}+y_{2t}$",
 steps:[
  {ask:"Jaký je identifikační předpis?", sol:"$k^{**}=g_\\Delta-1$ přesně; $k^{**}<g_\\Delta-1$ podidentifikovaná; $k^{**}>g_\\Delta-1$ přeidentifikovaná. ($k^{**}$ = predeterminované NEzahrnuté v rovnici, $g_\\Delta$ = endogenní zahrnuté)."},
  {ask:"Vyjmenuj predeterminované proměnné modelu.", sol:"$x_2,\\ x_3,\\ y_{(t-2)}$ (zpožděná endogenní je predeterminovaná)."},
  {ask:"1. rovnice: $g_\\Delta$ a $k^{**}$?", sol:"Endogenní: $y_1,y_2\\Rightarrow g_\\Delta=2$. Nezahrnuté predet.: $x_3,y_{(t-2)}\\Rightarrow k^{**}=2$. $2>2-1$ → **přeidentifikovaná**."},
  {ask:"2. rovnice?", sol:"Endogenní: $y_1,y_2\\Rightarrow g_\\Delta=2$. Nezahrnuté predet.: $x_2\\Rightarrow k^{**}=1$. $1=2-1$ → **přesně identifikovaná**."},
  {ask:"3. rovnice?", sol:"Identitní (definiční) rovnice → **neidentifikuje se** (je předem identifikovaná)."}
 ]},

{topic:"identif", id:"P42", title:"Identifikace 2. rovnice + úprava + matice DMNČ",
 zadani:"Pro model:\\n $y_{1t}=3y_{2t}-2+0{,}6x_{1t}-x_{5t}+u_{1t}$\\n $y_{2t}=0{,}5y_{1t}-2y_{3t}+5-0{,}4x_{3t}+2x_{4t}+u_{2t}$\\n $y_{3t}=0{,}2y_{2t}+3-4x_{2t}+0{,}5x_{5t}+u_{3t}$\\n a) identifikujte 2. rovnici, b) upravte ji na přesně identifikovanou, c) deklarujte matice pro DMNČ.",
 steps:[
  {ask:"Predeterminované proměnné modelu?", sol:"$x_1,x_2,x_3,x_4,x_5$ (celkem 5)."},
  {ask:"a) 2. rovnice: $g_\\Delta$ a $k^{**}$?", sol:"Endogenní: $y_1,y_2,y_3\\Rightarrow g_\\Delta=3$. Nezahrnuté predet.: $x_1,x_2,x_5\\Rightarrow k^{**}=3$. $3>3-1$ → **přeidentifikovaná**."},
  {ask:"b) Jak ji upravit na přesně identifikovanou?", sol:"Potřebujeme $k^{**}=g_\\Delta-1=2$. Stačí přidat jednu chybějící predeterminovanou (např. $x_5$) do 2. rovnice → $k^{**}=2$."},
  {ask:"c) Matice pro DMNČ 2. rovnice.", sol:"$X^*$ = predet. v rovnici (JV, $x_3,x_4$); $X$ = všechny predet. modelu (nejdřív $X^*$); $Y_2$ = endogenní vpravo ($y_1,y_3$); $y_1$ = vysvětlovaná ($y_2$)."}
 ]},

/* ===================== DMNČ (maticové výpočty) ===================== */
{topic:"dmnc", id:"P43", title:"1. stupeň DMNČ: teoretické hodnoty Ŷ₂",
 zadani:"Při DMNČ je matice $X=\\begin{bmatrix}1&2&1\\\\1&3&4\\\\1&1&3\\end{bmatrix}$ a propočet $(X^TX)^{-1}X^TY_2=Z=\\begin{bmatrix}2&2\\\\3&2\\\\1&2\\end{bmatrix}$. Co matice představují a jaké jsou teoretické hodnoty $\\hat{Y}_2$?",
 steps:[
  {ask:"Co je $X$ a co $Z$?", sol:"$X$ = matice všech predeterminovaných proměnných v modelu; $Z$ = odhadnuté parametry mezirovnic (1. stupeň)."},
  {ask:"Jak získám teoretické hodnoty endogenních proměnných $\\hat{Y}_2$?", sol:"$\\hat{Y}_2=X\\cdot Z$ (dosazení do regrese 1. stupně)."},
  {ask:"Spočítej $X\\cdot Z$.", sol:"$\\hat{Y}_2=\\begin{bmatrix}1&2&1\\\\1&3&4\\\\1&1&3\\end{bmatrix}\\begin{bmatrix}2&2\\\\3&2\\\\1&2\\end{bmatrix}=\\mathbf{\\begin{bmatrix}9&8\\\\15&16\\\\8&10\\end{bmatrix}}$"},
  {ask:"K čemu $\\hat{Y}_2$ slouží?", sol:"Ve 2. stupni DMNČ nahradí původní endogenní proměnné na pravé straně rovnice."}
 ]},

{topic:"dmnc", id:"P44", title:"Výpočet vektoru strukturálních parametrů",
 zadani:"Vypočtěte vektor strukturálních parametrů, znáte-li $C_{ii}=\\begin{bmatrix}1&2&4\\\\3&2&2\\\\4&1&2\\end{bmatrix}$ a $\\begin{bmatrix}\\hat{Y}_2^T\\\\X^{*T}\\end{bmatrix}y_1=\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}$.",
 steps:[
  {ask:"Jaký je vzorec pro strukturální parametry v DMNČ?", sol:"$\\hat{\\beta}=C_{ii}\\cdot\\left(\\begin{bmatrix}\\hat{Y}_2^T\\\\X^{*T}\\end{bmatrix}y_1\\right)$, kde $C_{ii}=K^{-1}$."},
  {ask:"Vynásob matici $C_{ii}$ daným vektorem.", sol:"$\\begin{bmatrix}1&2&4\\\\3&2&2\\\\4&1&2\\end{bmatrix}\\begin{bmatrix}2\\\\1\\\\1\\end{bmatrix}=\\begin{bmatrix}2+2+4\\\\6+2+2\\\\8+1+2\\end{bmatrix}=\\mathbf{\\begin{bmatrix}8\\\\10\\\\11\\end{bmatrix}}$"},
  {ask:"Co výsledek znamená?", sol:"Odhadnutá rovnice ve strukturálním tvaru má tyto tři strukturální parametry (2 u endogenních $\\beta$ a 1 u predeterminované $\\gamma^*$)."}
 ]},

/* ===================== PROGNÓZY (trend, redukovaná forma, multiplikátory, Nit) ===================== */
{topic:"prognozy", id:"P55", title:"Bodová prognóza z trendové funkce (z matic)",
 zadani:"Prognózujte predeterminovanou proměnnou $x_i$ na následující období. Trend $x_i=\\gamma_1+\\gamma_2 x_t$ z 10členné řady; $(X^TX)^{-1}=\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}$, $X^Ty=\\begin{bmatrix}1\\\\1\\end{bmatrix}$.",
 answer:{val:25, unit:"", tol:0.01},
 steps:[
  {ask:"Jak získám parametry trendu?", sol:"$\\hat{\\gamma}=(X^TX)^{-1}X^Ty$"},
  {ask:"Spočítej $\\hat{\\gamma}$.", sol:"$\\begin{bmatrix}2&1\\\\1&1\\end{bmatrix}\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}3\\\\2\\end{bmatrix}$ → trend $x_i=3+2x_t$."},
  {ask:"Jaký je čas pro následující období?", sol:"$t=T+h=10+1=11$ (11. období)."},
  {ask:"Dosaď.", sol:"$x_i=3+2\\cdot11=\\mathbf{25}$"}
 ]},

{topic:"prognozy", id:"P60", title:"Prognóza z LRM se zpožděnou proměnnou",
 zadani:"Model $y_t=1{,}5+0{,}5x_{2t}+1{,}5x_{3(t-1)}+u_t$, kde $x_{2t}=1{,}5+0{,}3t$, $x_{3t}=58+0{,}5t$. Odhadnut na ročních datech 2001–2010. Odvoďte prognózu $y_t$ pro rok 2012.",
 answer:{val:99.3, unit:"", tol:0.1},
 steps:[
  {ask:"Jaký index $t$ má rok 2012? (data 2001–2010, $n=10$)", sol:"$t=T+h=10+2=12$ (rok 2012)."},
  {ask:"Spočítej $x_{2t}$ pro 2012.", sol:"$x_2(12)=1{,}5+0{,}3\\cdot12=5{,}1$"},
  {ask:"Pozor na zpoždění: $x_{3(t-1)}$ pro 2012 = $x_3$ v roce 2011 ($t=11$).", sol:"$x_3(11)=58+0{,}5\\cdot11=63{,}5$"},
  {ask:"Dosaď do modelu.", sol:"$y_t=1{,}5+0{,}5\\cdot5{,}1+1{,}5\\cdot63{,}5=\\mathbf{99{,}3}$"}
 ]},

{topic:"prognozy", id:"P59", title:"Prognóza z redukované formy (maticově)",
 zadani:"Redukovaná forma je $y_t=\\begin{bmatrix}1&2&4&1\\\\3&2&1&2\\\\4&1&5&2\\end{bmatrix}x_t+v_t$. Vypočtěte $y_{3(t+1)}$, znáte-li $x_{(t+1)}=(2,4,1,-2)$.",
 answer:{val:13, unit:"", tol:0.01},
 steps:[
  {ask:"Jak získám $y_3$?", sol:"Vynásobením 3. řádku matice vektorem $x_{(t+1)}$."},
  {ask:"Dosaď 3. řádek $(4,1,5,2)$.", sol:"$y_{3(t+1)}=4\\cdot2+1\\cdot4+5\\cdot1+2\\cdot(-2)$"},
  {ask:"Spočítej.", sol:"$=8+4+5-4=\\mathbf{13}$"}
 ]},

{topic:"prognozy", id:"P57", title:"Prognóza z matice multiplikátorů + trendy",
 zadani:"Matice multiplikátorů (1998–2007, n=10): řádek pro $y_3$ je $(2,-1,1,3)$ vůči $(x_1,x_2,x_3,x_4)$. Trendy: $x_1=JV$, $x_{2t}=2-0{,}5x_t$, $x_{3t}=1+2x_t$, $x_{4t}=0{,}5+x_t$. Vypočítejte prognózu $y_3$ v roce 2009.",
 answer:{val:68.5, unit:"", tol:0.1},
 steps:[
  {ask:"Jaký index $t$ má rok 2009? A co je $x_1=JV$?", sol:"$t=T+h=10+2=12$. $JV$ = jednotkový vektor → $x_1=1$."},
  {ask:"Spočítej trendové hodnoty pro $t=12$.", sol:"$x_2=2-0{,}5\\cdot12=-4$; $x_3=1+2\\cdot12=25$; $x_4=0{,}5+12=12{,}5$."},
  {ask:"Vynásob řádek multiplikátorů vektorem predeterminovaných.", sol:"$y_3=2\\cdot1+(-1)\\cdot(-4)+1\\cdot25+3\\cdot12{,}5$"},
  {ask:"Spočítej.", sol:"$=2+4+25+37{,}5=\\mathbf{68{,}5}$"}
 ]},

{topic:"prognozy", id:"P63", title:"Hodnoty endogenní proměnné z multiplikátorů (ex-post)",
 zadani:"Řádek matice multiplikátorů pro $y_1$ je $(1,2,2)$. Predeterminované hodnoty jsou ve 3. roce $(2,2,1)$ a ve 4. roce $(1,2,2)$ (negativní prognostický horizont). Stanovte $y_{1,3}$ a $y_{1,4}$.",
 steps:[
  {ask:"Jak se počítá hodnota endogenní proměnné?", sol:"Skalární součin řádku multiplikátorů s vektorem predeterminovaných hodnot daného roku."},
  {ask:"3. rok: $(1,2,2)\\cdot(2,2,1)$.", sol:"$y_{1,3}=1\\cdot2+2\\cdot2+2\\cdot1=\\mathbf{8}$"},
  {ask:"4. rok: $(1,2,2)\\cdot(1,2,2)$.", sol:"$y_{1,4}=1\\cdot1+2\\cdot2+2\\cdot2=\\mathbf{9}$"}
 ]},

{topic:"prognozy", id:"P62", title:"Srovnání přesnosti prognóz (absolutní vs. relativní)",
 zadani:"Prognóza $y_{1(n+1)}$ se liší od skutečnosti o 10 mil. Kč, $y_{2(n+1)}$ o 100 mil. Kč. Je prognóza $y_1$ přesnější? a) ano b) ne c) nelze určit.",
 steps:[
  {ask:"Stačí porovnat absolutní odchylky?", sol:"Ne — 10 mil. může být u malé proměnné velká chyba a 100 mil. u obrovské proměnné malá."},
  {ask:"Co je potřeba k porovnání?", sol:"Relativní odchylka — znát úroveň proměnné $y$ a její rozptyl $S_y$ v období $n+1$."},
  {ask:"Závěr.", sol:"Odpověď **c) nelze určit** bez znalosti úrovní a rozptylu proměnných."}
 ]},

{topic:"prognozy", id:"P65", title:"Normovaná odchylka N pro dané období",
 zadani:"Matice $N_{it}=\\begin{bmatrix}0{,}1&0{,}3&0{,}2&0{,}6\\\\0{,}6&0{,}4&0{,}1&0{,}1\\\\0{,}4&0{,}2&0{,}1&0{,}5\\end{bmatrix}$. Vypočítejte $N$ pro 3. období a výsledek zhodnoťte.",
 answer:{val:0.14, unit:"", tol:0.01},
 steps:[
  {ask:"Co je 3. období v matici $N_{it}$?", sol:"3. sloupec: $(0{,}2;\\,0{,}1;\\,0{,}1)$."},
  {ask:"Jaký je vzorec pro $N$ daného období (přes $g$ endogenních)?", sol:"$N_t=\\sqrt{\\dfrac{\\sum_i N_{it}^2}{g}}$"},
  {ask:"Dosaď ($g=3$).", sol:"$N_3=\\sqrt{\\dfrac{0{,}2^2+0{,}1^2+0{,}1^2}{3}}=\\sqrt{\\dfrac{0{,}06}{3}}=\\sqrt{0{,}02}\\approx\\mathbf{0{,}14}$"},
  {ask:"Zhodnoť.", sol:"$N<1$ → dobrá prognóza (lepší než nahrazení průměrem)."}
 ]},

{topic:"prognozy", id:"P67", title:"Výpočet normované odchylky z dat",
 zadani:"Skutečné a teoretické hodnoty $i$-té endogenní proměnné dávají odchylky $\\pm0{,}1$ ve všech 4 obdobích. Celkový rozptyl $S_y^2=0{,}1$. Vypočítejte normovanou odchylku $N_i$.",
 answer:{val:0.316, unit:"", tol:0.01},
 steps:[
  {ask:"Jaký je vzorec normované odchylky?", sol:"$N_i=\\sqrt{\\dfrac{\\frac{1}{n}\\sum_t (y_t-\\hat{y}_t)^2}{S_y^2}}=\\sqrt{\\dfrac{MSE}{S_y^2}}$"},
  {ask:"Spočítej průměrný čtverec odchylek (MSE).", sol:"Odchylky $\\pm0{,}1$ → $MSE=\\dfrac{4\\cdot0{,}1^2}{4}=0{,}01$"},
  {ask:"Dosaď do vzorce.", sol:"$N_i=\\sqrt{\\dfrac{0{,}01}{0{,}1}}=\\sqrt{0{,}1}\\approx\\mathbf{0{,}32}$"},
  {ask:"Zhodnoť.", sol:"$N<1$ → dobrá prognóza."}
 ]},

{topic:"prognozy", id:"P68", title:"Interpretace záporné Nit",
 zadani:"Hodnota $N_{it}$ dosáhla úrovně $-1{,}3$. Z toho plyne, že: a) proměnná je špatně prognózovatelná, b) období $t$ vykazuje vysoké diference, c) model má špatné prognostické vlastnosti jako celek, d) jde pouze o dílčí výsledek samostatně nerozhodující.",
 steps:[
  {ask:"Co je $N_{it}$ v matici normovaných odchylek?", sol:"Jeden prvek (pro konkrétní proměnnou $i$ a období $t$) — může nabývat i záporných hodnot."},
  {ask:"Rozhoduje jeden prvek o kvalitě prognózy?", sol:"Ne — o prognostických vlastnostech rozhoduje agregát (přes období nebo proměnné), ne jeden prvek."},
  {ask:"Správná odpověď.", sol:"**d)** jde pouze o dílčí výsledek, samostatně ještě o ničem nerozhodující."}
 ]},

{topic:"prognozy", id:"P71", title:"Podmínka stability: parametr poptávky",
 zadani:"Nabídková funkce je $Q_N=10+0{,}5c_i$. Jaká musí být hodnota parametru ceny v poptávkové funkci, aby na trhu vznikl rovnovážný stav bez vnějších zásahů? Zdůvodněte.",
 steps:[
  {ask:"Kdy je rovnováha stabilní (pavučinový teorém)?", sol:"Když je poptávka strmější než nabídka: $|sklon\\ D|>|sklon\\ S|$."},
  {ask:"Jaký je sklon nabídky?", sol:"$+0{,}5$."},
  {ask:"Jaký musí být parametr poptávky?", sol:"Poptávka klesá a musí být strmější → parametr ceny $<-0{,}5$, tedy v intervalu $(-\\infty;\\,-0{,}5)$."}
 ]}

];
