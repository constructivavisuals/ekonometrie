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
  {ask:"Najdi rovnovážnou cenu a množství.", sol:"$3+4{,}8c=16{,}5-2{,}3c\\;\\Rightarrow\\;7{,}1c=13{,}5\\;\\Rightarrow\\;c\\approx1{,}90$;  $Q\\approx12{,}13$"},
  {ask:"Spočítej pružnosti v rovnováze.", sol:"$E_S=4{,}8\\cdot\\dfrac{1{,}90}{12{,}13}\\approx0{,}75$;  $E_D=-2{,}3\\cdot\\dfrac{1{,}90}{12{,}13}\\approx-0{,}36$. $|E_S|>|E_D|$ potvrzuje nestabilitu."}
 ]},

{topic:"prognozy", id:"P66", title:"Normovaná odchylka pro shodu se skutečností",
 zadani:"Jakou hodnotu musí mít normovaná odchylka modelu, aby prognóza z něj odvozená byla shodná se skutečností?",
 answer:{val:0, unit:"", tol:0.001},
 steps:[
  {ask:"Co normovaná odchylka $N$ porovnává?", sol:"Velikost chyby prognózy vůči nahrazení průměrem: $N<1$ dobrá, $N>1$ špatná."},
  {ask:"Co znamená dokonalá shoda se skutečností?", sol:"Nulová chyba prognózy ($y=\\hat{y}$) → čitatel je nula."},
  {ask:"Jaká je tedy hodnota $N$?", sol:"$N=\\mathbf{0}$ — prognóza se přesně shoduje se skutečností."}
 ]}

];
