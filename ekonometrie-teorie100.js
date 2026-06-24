/* ============================================================
   TEORIE — 100 otázek (kartičky)
   Přepis z PDF "nějaké teoretické otázky" (TEST 1, otázky 1–107).
   Každá položka: {q: otázka, a: odpověď} — HTML povoleno (<b>, <br>),
   vzorce v KaTeX delimiteru $...$.
============================================================ */
const TEORIE100 = [
 {q:"1. Nástrojem ekonometrického modelu je:",
  a:"<b>Ekonometrický model.</b>"},

 {q:"2. Aby byl model deterministický, musí platit:",
  a:"<b>a)</b> Rozptyl náhodné proměnné musí být roven 0.<br><b>b)</b> Střední hodnota náhodné proměnné se nesmí rovnat 0."},

 {q:"3. Rozhodněte, zda funkce vybavenosti pracovními silami je dynamickým modelem:<br>yₜ = 2,5x₁ₜ + 0,8x₂ₜ + 2,2x₃ₜ − 0,2x₄ₜ + uₜ",
  a:"<b>Není dynamický.</b> Aby byl dynamický, musíme zavést časový vektor, např. zpožděnou endogenní proměnnou y₁ₜ₋₁."},

 {q:"4. Uveďte zásadní rozdíl mezi ekonomickým a ekonometrickým modelem:",
  a:"<b>Ekonomický model</b> = pouze tvar funkčního zápisu, neobsahuje náhodnou složku.<br><b>Ekonometrický model</b> = má tvar rovnice s rozepsanými koeficienty (Γ) a proměnnými x a obsahuje náhodnou složku."},

 {q:"5. Mezi ekonomické faktory ovlivňující výrobkovou poptávku zahrnujeme zejména:",
  a:"<b>a)</b> Cena výrobku<br><b>b)</b> Příjem<br><b>c)</b> Ekonomická situace<br><b>d)</b> Demografické faktory<br><b>e)</b> Sezónní faktory"},

 {q:"6. Definujte rovnici a matice vstupních údajů nezbytné pro odvození strukturálních parametrů dvoustupňovou metodou nejmenších čtverců (DMNČ).",
  a:"Rovnice: $By_t + \\Gamma x_t = u_t$<br><b>B</b> – matice endogenních proměnných<br><b>yₜ</b> – vektor endogenních proměnných<br><b>Γ</b> – matice predeterminovaných proměnných<br><b>xₜ</b> – vektor predeterminovaných proměnných<br><b>uₜ</b> – vektor stochastické proměnné (náhodné složky)"},

 {q:"7. Jmenujte stochastické předpoklady ekonometrického modelu.",
  a:"<b>a)</b> Nepřítomnost autokorelace reziduí<br><b>b)</b> Homoskedasticita – rozptyl náhodné složky je konstantní a konečný<br><b>c)</b> Normální rozdělení náhodné složky<br><b>d)</b> Průměr náhodné složky je nulový<br><b>e)</b> Není kovariance mezi xₜ a uₜ"},

 {q:"8. Vysvětlete účel a princip Breusch–Paganova testu.",
  a:"Využívá se k testování <b>heteroskedasticity</b> v modelu.<br>Hypotézy:<br>H0 = předpoklad (homoskedasticity) v modelu není porušen<br>H1 = předpoklad je porušen (heteroskedasticita)<br>Pokud je p-hodnota > 0,05 → v modelu není přítomna heteroskedasticita, přijímám H0."},

 {q:"9. Prognóza y₁ se liší od skutečnosti o 10 mil. Kč, prognóza y₂ o 100 mil. Kč. Je prognóza proměnné y₁ přesnější?",
  a:"<b>c) Nelze určit.</b><br>Přesnost prognózy závisí na více faktorech než pouze na absolutní chybě. Pro kvalifikovanou odpověď je třeba zvážit: měřítko proměnných, variabilitu proměnných, relativní chybu, …"},

 {q:"10. Nákladová funkce je definovaná zpravidla jako:",
  a:"<b>b) Degresivně-progresivní.</b>"},

 {q:"11. Uveďte postup při odvození prognózy ex post.",
  a:"<b>a)</b> Výběr modelu<br><b>b)</b> Shromažďování dat<br><b>c)</b> Odhad modelu<br><b>d)</b> Ověření modelu<br><b>e)</b> Prognóza<br><b>f)</b> Interpretace a evaluace"},

 {q:"12. Uveďte maticový zápis ekonometrického modelu, ze kterého se odvozuje prognóza ex ante, a popište jednotlivé prvky.",
  a:"$y_t = M x_t + v_t$<br><b>yₜ</b> – vektor endogenních proměnných<br><b>M</b> – matice multiplikátorů<br><b>xₜ</b> – vektor predeterminovaných proměnných<br><b>vₜ</b> – vektor náhodné složky"},

 {q:"13. Vysvětlete interpretační rozdíl mezi odhadnutým parametrem a koeficientem pružnosti dané proměnné.",
  a:"<b>Odhadnutý parametr</b> – udává velikost změny závislé proměnné při změně nezávislé proměnné o jednotku (číslo – absolutní vyjádření).<br><b>Koeficient pružnosti</b> – udává procentní změnu závislé proměnné při změně nezávislé proměnné o jednotku (v % – relativní vyjádření)."},

 {q:"14. Definujte matice a vektory, jejichž znalost předpokládá aplikace DMNČ, a určete jejich obecný rozměr.",
  a:"<b>X∗</b> = matice všech predeterminovaných proměnných (x a zpožděných y) v dané rovnici<br><b>X</b> = matice všech predeterminovaných proměnných (x a zpožděných y) v celém modelu<br><b>Y</b> = matice všech endogenních proměnných y na pravé straně rovnice<br><b>y</b> = vektor jedné endogenní proměnné y na levé straně rovnice"},

 {q:"15. Model je ve tvaru:<br>Y₁ₜ = 2 + 0,3x₂ₜ<br>Y₂ₜ = 0,3x₁ₜ + 3 − 0,2x₃ₜ<br>X₃ₜ = 0,2y₁ₜ + 0,4y₂ₜ − 1 − 0,1x₅ₜ<br>O jaký typ modelu podle vztahů mezi endogenními proměnnými se jedná a jaká metoda byla použita?",
  a:"Model je <b>simultánní</b>.<br>Pro vyčíslení strukturálních parametrů lze aplikovat <b>DMNČ</b> (dvoustupňovou metodu nejmenších čtverců)."},

 {q:"16. Uveďte a popište všechny formy vyjádření ekonometrického modelu.",
  a:"<b>a) Strukturální forma</b><br>Endogenní proměnné y jsou na levé i pravé straně rovnice. Nelze ji použít na prognózu. Maticově: $By_t + \\Gamma x_t = u_t$<br><br><b>b) Redukovaná forma</b><br>Endogenní proměnné y jsou vždy vlevo, predeterminované vždy vpravo. Náhodná proměnná se značí vₜ. Lze ji použít pro prognózu. Maticově: $y_t = M x_t + v_t$"},

 {q:"17. Ve kterých fázích konstrukce ekonometrického modelu se nejvíce uplatňuje statistika?",
  a:"<b>a)</b> Specifikace modelu<br><b>b)</b> Odhad parametru<br><b>c)</b> Prognóza a simulace"},

 {q:"18. Mezi předpoklady LRM NEpatří:",
  a:"<b>c)</b> Interpretace parametrů v souladu s ekonomickou teorií<br><b>f)</b> Řešení vysoké multikolinearity"},

 {q:"19. Co vyjadřují prvky korelační matice, jakých hodnot nabývají prvky mimo diagonálu a k detekci jakého jevu slouží?",
  a:"Prvky vyjadřují, <b>jaká je závislost mezi proměnnými</b>.<br>Prvky mimo diagonálu nabývají hodnot <b>⟨−1; +1⟩</b>.<br>Korelační matice slouží k detekci jevu zvaného <b>multikolinearita</b>."},

 {q:"20. Pro které typy ekonometrických modelů lze použít k výpočtu parametrů BMNČ?",
  a:"<b>a)</b> Rekurzivní<br><b>b)</b> Jednorovnicový (prostý)<br><b>c)</b> Simultánní – pokud jsou rovnice přesně identifikovány"},

 {q:"21. V případě, že endogenní a exogenní proměnná vykazuje více méně souběžný vývoj v čase, projeví se to:",
  a:"<b>b) Ve vysoké těsnosti závislosti.</b>"},

 {q:"22. Vyjádřete kritérium optimality pro nákladové funkce a vysvětlete zkratky.",
  a:"Graficky najdeme bod optimality nákladové fce (bod C) jako bod dotyku nákladové fce a tečny z počátku.<br>Vzorec: <b>MN = MT = Cy</b><br>MN = mezní náklady, MT = mezní tržby, Cy = cena jednotky produkce (platí MT = Cy)."},

 {q:"23. Prognózy predeterminovaných proměnných v EM se zpravidla odvozují s využitím:",
  a:"<b>historie.</b>"},

 {q:"24. Ekonometrické modely (EM) se uplatňují zejména při odvození:",
  a:"<b>a) Krátkodobých prognóz.</b><br>EM jsou vhodné pro krátkodobé prognózy kvůli analýze krátkodobého chování ekonomických proměnných."},

 {q:"25. Které části matematiky ekonometrie nejvíce využívá?",
  a:"<b>Algebra, matematická analýza, diferenciální rovnice.</b>"},

 {q:"26. Ekonometrickými modely lze popsat ekonomické jevy, pro něž platí:",
  a:"<b>a)</b> měřitelné ekonomické jevy (kvantifikované)<br><b>b)</b> nenáhodné ekonomické jevy"},

 {q:"27. Lze bez znalosti konkrétního tvaru poptávkové funkce odvodit bodovou a obloukovou přímou cenovou pružnost?",
  a:"<b>Ano.</b><br>Bodová cenová pružnost: Ep = (dq/q) ÷ (dp/p)<br>Oblouková cenová pružnost: Ea = (Δq/Δp) × (p/q)"},

 {q:"28. Strukturální parametry třetí Tornquistovy funkce lze odvodit s využitím:",
  a:"<b>a) běžné metody nejmenších čtverců.</b>"},

 {q:"29. Liší se odhadnuté strukturální parametry EM, pokud jsou odhadnuty z proměnných, kterým byla přidána další napozorovaná hodnota?",
  a:"<b>Ano.</b> (S další pozorovanou hodnotou se odhad parametrů změní.)"},

 {q:"30. Jarque-Bera testem se zjišťuje:",
  a:"<b>Normalita reziduí.</b>"},

 {q:"31. P-hodnota Breusch-Godfreyova testu byla vypočtena 0,6; pracujeme na hladině významnosti α = 0,05.",
  a:"<b>d) Model nevykazuje autokorelaci reziduí.</b> (p = 0,6 > 0,05)"},

 {q:"32. Popište postup testování významnosti strukturálních parametrů.",
  a:"<b>a)</b> Odhadnout strukturální parametry EKM modelu<br><b>b)</b> Provést t-test pro každý parametr<br><b>c)</b> Porovnat s hladinou významnosti – statisticky významné či nevýznamné"},

 {q:"33. Cílem ekonometrického modelování je vyjádření ekonomických vztahů:",
  a:"<b>d) v kvantifikované formě.</b>"},

 {q:"34. Uveďte jednotlivé fáze konstrukce ekonometrických modelů (EKM).",
  a:"<b>a)</b> Studium dokumentů<br><b>b)</b> Tvorba ekonomického modelu<br><b>c)</b> Tvorba ekonometrického modelu<br><b>d)</b> Sběr dat<br><b>e)</b> Odhad parametrů EKM pomocí BMNČ<br><b>f)</b> Ekonomická verifikace<br><b>g)</b> Matematická, ekonometrická a statistická verifikace<br><b>h)</b> Aplikace ekonometrického modelu či zamítnutí"},

 {q:"35. Vyjádřete, co znamená BLUE odhad parametrů ekonometrického modelu.",
  a:"<b>B</b> = best (nejlepší)<br><b>L</b> = lineární<br><b>U</b> = nezkreslený (unbiased)<br><b>E</b> = efektivní"},

 {q:"36. Uveďte podstatu dvoustupňové metody nejmenších čtverců.",
  a:"<b>Opakuje se v ní metoda BMNČ.</b>"},

 {q:"37. Rozhodující ekonomické faktory ovlivňující poptávku po jednotlivých výrobcích jsou:",
  a:"<b>a)</b> Cena produktu<br><b>b)</b> Příjmy spotřebitelů<br><b>c)</b> Očekávání<br><b>d)</b> Preference<br><b>e)</b> Dostupnost a substituce"},

 {q:"38. Charakterizujte izofaktorovou funkci a vysvětlete její odvození.",
  a:"Vztah <b>produkt – produkt</b>.<br>Lze odvodit ze dvou jednofaktorových produkčních fcí pro produkce y1 a y2 a společného množství faktoru Qx1 pro obě produkce.<br>Izofaktorová funkce má <b>klesající a konkávní průběh</b>."},

 {q:"39. Co je důsledkem heteroskedasticity?",
  a:"Nesprávné odhady koeficientů<br>Nesprávné intervaly spolehlivosti<br>Změny významnosti testů"},

 {q:"40. Co je to bodová a intervalová prognóza?",
  a:"<b>Bodová prognóza</b> je jediný odhad budoucí hodnoty (konkrétní číslo).<br><b>Intervalová prognóza</b> udává rozsah hodnot považovaných za pravděpodobné – vyjadřuje nejistotu."},

 {q:"41. Co je to náhodná (reziduální) složka modelu a z čeho se skládá?",
  a:"Je to nepředvídatelný a nesystematický zbytek, který zůstává po aplikaci modelu na data. Skládá se z chyb měření, náhodných událostí, běžné variability a nevysvětlených faktorů. Slouží k zachycení vlivů nezahrnutých do modelu a pomáhá hodnotit jeho kvalitu."},

 {q:"42. Co je to autokorelace reziduí? Jak ji lze řešit?",
  a:"Reziduum je závislé se svými předchozími hodnotami (chyby v předchozích letech ovlivňují chyby v následujících letech).<br>Odstranění:<br>• Změna funkčního tvaru modelu na správný<br>• Správná dynamizace modelu<br>• Zahrnutí opomenuté proměnné do modelu"},

 {q:"43. Definujte pojem konzistentní odhad.",
  a:"Konzistentní odhad je takový odhad, který se stává přesnějším a blíží se ke skutečné hodnotě, když máme více dat k dispozici."},

 {q:"44. Autokorelaci stochastické proměnné lze určit jakým testem?",
  a:"<b>Breusch-Godfreyův test, Durbin-Watsonův test.</b>"},

 {q:"45. Popište jednotlivé prvky stochastické rovnice ekonometrického modelu.",
  a:"Závislá proměnná<br>Nezávislá proměnná<br>Koeficienty<br>Náhodná složka (reziduum)"},

 {q:"46. Jaké požadavky mají splňovat Engelovy funkce a co vyjadřují?",
  a:"<b>Požadavky:</b> minimální příjem, nasycenost, nezáporná spotřeba.<br><b>Vyjadřují vztah mezi:</b> spotřebou daného statku a příjmem."},

 {q:"47. Které faktory především ovlivňují HDP?",
  a:"Investice<br>Spotřeba domácností<br>Vládní výdaje<br>Export a import<br>Inflace<br>Měnová politika, …"},

 {q:"48. Uveďte definici prognózy.",
  a:"Prognóza je proces předpovídání budoucích událostí, vývoje nebo trendů na základě dostupných informací a analýzy minulých dat."},

 {q:"49. Co je to multikolinearita? Jak lze odstranit vysokou multikolinearitu?",
  a:"Je to nežádoucí závislost mezi dvěma či více vysvětlujícími proměnnými na pravé straně rovnice. Identifikujeme ji z korelační matice (párový korelační koeficient ≥ 0,8 nebo ≤ −0,8). Pozor: závislost mezi vysvětlovanou y a vysvětlujícími proměnnými je naopak žádoucí!<br>Odstranění:<br>• převedení jedné z korelovaných proměnných na postupné diference nebo relativní odchylky<br>• vyloučení jedné z korelovaných proměnných<br>• ignorování (předpověď funguje, ale nelze interpretovat parametry)<br>• náhrada proměnné dummy proměnnou"},

 {q:"50. Co je důsledkem zahrnutí nepodstatné proměnné do modelu?",
  a:"Snížení přesnosti odhadů, změna významnosti ostatních proměnných, riziko multikolinearity, ztráta významných proměnných."},

 {q:"51. Popište postup testování autokorelace reziduí s využitím DW testu.",
  a:"Sestavím hypotézy H0 a H1, vypočítám p-hodnoty, porovnám s hladinou významnosti α = 0,05 a zjistím, zda je v modelu autokorelace reziduí, či nikoliv."},

 {q:"52. Ekonometrie patří mezi předměty:",
  a:"<b>d) Kvantitativní analýzy.</b>"},

 {q:"53. Ze statistických metod se v ekonometrii uplatňuje zejména:",
  a:"<b>a)</b> Regresní analýza<br><b>b)</b> Analýza trendových funkcí<br><b>c)</b> Teorie odhadu<br><b>d)</b> Indexní analýza"},

 {q:"54. Ekonometrický model je zpravidla kvalitnější, čím je podrobnější?",
  a:"<b>Ne.</b> (Vyšší podrobnost automaticky neznamená vyšší kvalitu modelu.)"},

 {q:"55. Identitní rovnice v ekonometrickém modelu jsou charakterizovány tím, že:",
  a:"<b>a)</b> Proměnné jsou vázány známými koeficienty.<br><b>b)</b> Zesilují vnitřní závislost jednotlivých rovnic."},

 {q:"56. Deterministické EKM modely vyjadřují:",
  a:"<b>f) Ekonomické jevy s nulovou náhodnou složkou.</b>"},

 {q:"57. Rozdíl mezi prognózou a predikcí spočívá v:",
  a:"<b>Prognóza</b> je předpovídání budoucnosti na základě historie, zatímco <b>predikce</b> je předpověď budoucího stavu na základě dostupných informací."},

 {q:"58. Vysvětlete pojem prognostický horizont.",
  a:"Prognostický horizont je doba, na kterou se snažíme předpovědět budoucí události nebo hodnoty."},

 {q:"59. Mezi subjektivní prognostické metody lze zařadit např.:",
  a:"Expertní odhady, anketní šetření, metoda Delphi, …"},

 {q:"60. Prognózy predeterminovaných proměnných v EM se zpravidla odvozují s využitím metod:",
  a:"<b>časových řad, regrese, ARIMA modely, …</b>"},

 {q:"61. Uveďte rozdíl v použití Durbin-Watson a Breusch-Godfrey testu.",
  a:"<b>Durbin-Watsonův test</b> se používá k detekci autokorelace <b>prvního řádu</b> v reziduích, je vhodný pro jednodušší modely.<br><b>Breusch-Godfrey test</b> se používá k detekci autokorelace <b>vyššího řádu</b>, je vhodnější pro složitější modely s většími daty."},

 {q:"62. EKM model obsahuje 15 endogenních proměnných, 12 stochastických a 1 identitní rovnici. Odpovídá to požadavkům kladeným na EKM?",
  a:"<b>Ne.</b> Počet endogenních proměnných se nerovná počtu rovnic (15 ≠ 13)."},

 {q:"63. Jaké prvky musíte deklarovat pro odhad parametrů modelu s využitím BMNČ (vysvětlete obsah a rozměr)?",
  a:"$\\gamma = (X^T X)^{-1} X^T y$<br><b>X</b> – matice predeterminovaných proměnných, rozměr [n × k]<br><b>y</b> – vektor endogenních proměnných, rozměr [n × 1]<br><b>γ</b> – vektor odhadnutých parametrů, rozměr [k × 1]<br>Dále: Xᵀ = [k × n], (XᵀX)⁻¹ = [k × k]"},

 {q:"64. Nabídková funkce vyjádřená funkcí mezních nákladů je z krátkodobého hlediska definovaná na úrovni:",
  a:"<b>a)</b> Minimálních mezních nákladů<br><b>d)</b> Minimálních jednotkových variabilních nákladů<br><b>e)</b> Minimálních jednotkových celkových nákladů"},

 {q:"65. Definujte pojem homoskedasticita a možné testy pro ověření výskytu.",
  a:"Rozptyl náhodné složky je konstantní a konečný = <b>stejnorozptylovost</b> (je žádoucí).<br>Testy: <b>Breusch-Paganův test, Whiteův test.</b>"},

 {q:"66. Izokvantová funkce je vyjádřena následujícím zápisem:",
  a:"<b>b)</b> x₂ = f(x₁ | y₁ = k) + u"},

 {q:"67. Vysvětlete užití korigovaného (adjustovaného) koeficientu determinace.",
  a:"Značí se R̄². Na rozdíl od klasického R² <b>penalizuje (trestá) nadbytečný počet proměnných</b> v modelu a používá se při rozhodování, zda zařadit další proměnnou. Jeho hodnota je zpravidla nižší než hodnota koeficientu determinace."},

 {q:"68. Zapište kritérium pro nalezení optimální kombinace dvou výrobních faktorů.",
  a:"$\\dfrac{\\delta y}{\\delta x} = \\dfrac{C_x}{C_y}$<br>Cx = cena za jednotku faktoru x<br>Cy = cena za jednotku produkce y"},

 {q:"69. Matematicky zapište funkční kritérium BMNČ a graficky znázorněte princip s vyznačením rezidua.",
  a:"Kritérium BMNČ: $\\min \\sum_{t=1}^{n}(y_t - \\hat{y}_t)^2$<br>Maticová podoba: $y = X\\gamma + u$<br>Reziduum = svislá vzdálenost napozorovaného bodu od regresní přímky."},

 {q:"70. Vysvětlete mechanismus vzniku, rozměr a obsah matice multiplikátorů.",
  a:"Matice multiplikátorů M obsahuje parametry před predeterminovanými proměnnými v redukovaném tvaru modelu. Vyjadřuje komplexní (přímé i zprostředkované) vazby mezi endogenními a predeterminovanými proměnnými. U složitějších modelů ji spočteme dle vzorce $M = -B^{-1}\\Gamma$. Rozměr je [g × k]."},

 {q:"71. Definujte specifikační předpoklady ekonometrického modelu.",
  a:"<b>a)</b> Neopomenutí podstatné vysvětlující proměnné<br><b>b)</b> Vypuštění irelevantních vysvětlujících proměnných<br><b>c)</b> Volba správného funkčního tvaru<br><b>d)</b> Stabilní odhadnuté parametry – časová invariantnost (parametry se nemění v čase)"},

 {q:"72. Navrhněte příklad rekurzivního modelu.",
  a:"Např.:<br>y₁ₜ = γ₁₁x₁ₜ + u₁ₜ<br>y₂ₜ = β₂₁y₁ₜ + γ₂₂x₂ₜ + u₂ₜ<br>y₃ₜ = β₃₁y₁ₜ + β₃₂y₂ₜ + γ₃₃x₃ₜ + u₃ₜ<br>(Každá rovnice závisí jen na již vypočtených endogenních proměnných – matice B je trojúhelníková.)"},

 {q:"73. Prognózované hodnoty endogenních proměnných činí:",
  a:"Získají se dosazením predeterminovaných proměnných do redukovaného tvaru modelu $y_t = M x_t + v_t$. (Konkrétní číselné hodnoty v zadání PDF chybí.)"},

 {q:"74. Stochastická proměnná může být snížena tím, že:",
  a:"<b>a)</b> zvýšíme množství dat<br><b>b)</b> aplikujeme statistické modely"},

 {q:"75. Hodnoty predeterminovaných proměnných vznikají:",
  a:"<b>a)</b> nastavením výchozích dat<br><b>b)</b> z historických dat"},

 {q:"76. Obsahový rozdíl mezi strukturálními parametry v matici Gama a M spočívá v tom, že:",
  a:"<b>a)</b> Matice Γ (gama) je ve strukturálním tvaru, rozměr g × k.<br><b>b)</b> Matice multiplikátorů M je v redukovaném tvaru, rozměr g × k."},

 {q:"77. Výsledkem EKM zkoumání v užším pojetí je:",
  a:"<b>b) Analýza působení predeterminovaných proměnných na endogenní proměnné.</b>"},

 {q:"78. Popište identitní rovnici (definiční) a uveďte důvod jejího použití.",
  a:"Identitní rovnice <b>neobsahuje náhodnou proměnnou</b>. Příklad:<br>y₁ₜ = β₁₂y₂ₜ + β*₁₁y₁(ₜ₋₁) + γ₁₁x₁ₜ + γ₁₂x₂ₜ + u₁ₜ — stochastická rovnice<br>y₂ₜ = β₂₃y₃ₜ + γ₂₁x₁ₜ + γ₂₃x₃ₜ + γ₂₄x₄ₜ + u₂ₜ — stochastická rovnice<br>y₃ₜ = y₁ₜ + y₂ₜ — <b>identitní rovnice</b>"},

 {q:"79. Charakterizujte metody odhadu parametrů s úplnou informací.",
  a:"<b>Metody s úplnou informací</b> – odhadují všechny rovnice najednou, berou v potaz všechny informace ve všech rovnicích; vyžadují větší počet pozorování; jsou výpočetně náročnější (např. třístupňová MNČ).<br><b>Metody s neúplnou informací</b> – nezohledňují informace z ostatních rovnic, odhadují každou rovnici zvlášť; nejsou náročné na počet pozorování ani výpočetně (např. dvoustupňová MNČ)."},

 {q:"80. Přímá cenová pružnost potravinářských výrobků je:",
  a:"<b>a) Zpravidla kladná.</b>"},

 {q:"81. Interpretujte obecně parametr proměnné reprezentující čas.",
  a:"Parametr u časové (trendové) proměnné udává průměrnou změnu závislé proměnné za jednotku času (např. za rok) – tj. velikost trendového růstu či poklesu."},

 {q:"82. Podkladová data pro konstrukci EKM modelu rozlišujeme ve formě:",
  a:"<b>a)</b> Časových řad<br><b>b)</b> Průřezových dat<br><b>c)</b> Panelových dat"},

 {q:"83. Ekonomickým zkoumáním kvalifikované vztahy mezi ekonomickými proměnnými jsou vyjádřeny:",
  a:"<b>f) Ekonometrickým modelem.</b>"},

 {q:"84. Vysvětlete důvody vzniku náhodné proměnné v EKM modelech.",
  a:"<b>a)</b> Vlivy nezahrnuté do modelu<br><b>b)</b> Chyby v datech<br><b>c)</b> Chyby plynoucí z použití nevhodného funkčního tvaru<br><b>d)</b> Chování lidí"},

 {q:"85. V rámci statistické verifikace ekonometrického modelu posuzujeme zejména:",
  a:"<b>a)</b> Multikolinearitu<br><b>b)</b> Těsnost závislosti<br><b>c)</b> Rozložení náhodných proměnných<br><b>d)</b> Regresní a korelační analýzu<br><b>e)</b> Trendovou fci"},

 {q:"86. K čemu se používají Engelovy funkce? Napište 1. Tornquistovu fci a převeďte ji do lineárního tvaru.",
  a:"<b>Engelovy funkce</b> popisují, jak příjem ovlivňuje spotřebu (zda lidé budou více spotřebovávat, když mají více peněz).<br><b>1. Tornquistova fce</b> analyzuje vztah příjmu a spotřeby; lze ji převést do lineárního tvaru:<br>$C = f(Y) \\;\\Rightarrow\\; \\ln(C) = \\alpha + \\beta \\ln(Y) + \\varepsilon$"},

 {q:"87. Izofaktorová funkce je ve tvaru y2 = 10 − 0,5y1. Mezní míra záměny podle uvedené funkce je:",
  a:"<b>e) Záporná.</b> (Směrnice −0,5 < 0.)"},

 {q:"88. Národohospodářskou prognózu v ČR zpracovává:",
  a:"<b>ČSÚ.</b>"},

 {q:"90. T-test je využíván pro verifikaci:",
  a:"<b>c) Statistické významnosti jednotlivých parametrů.</b>"},

 {q:"91. Které z následujících funkcí EKM modelů jsou odvozeny z vícefaktorové produkční funkce?",
  a:"<b>a)</b> Izoprodukční fce<br><b>d)</b> Izofaktorové fce<br><b>h)</b> Izonákladové fce"},

 {q:"92. EKM model obsahuje 15 endogenních proměnných, 12 stochastických a 3 identitní rovnice.",
  a:"<b>a)</b> Kolik jevů bude model vysvětlovat? <b>27</b><br><b>b)</b> Kolik rovnic bude celkově obsahovat? <b>15</b><br><b>c)</b> Kolik rovnic bude obsahovat náhodnou proměnnou? <b>3</b><br><b>d)</b> U kolika rovnic bude hodnota náhodné proměnné > 0? <b>24</b>"},

 {q:"93. Degresivita 2. stupně je charakteristická pro:",
  a:"<b>a) Produkční funkci.</b>"},

 {q:"94. Matice multiplikátorů vyjadřuje:",
  a:"$M = -B^{-1}\\,\\Gamma$"},

 {q:"95. Strukturální parametry EKM vyjadřují:",
  a:"<b>a)</b> Endogenní vysvětlovanou proměnnou<br><b>b)</b> Exogenní vysvětlovanou proměnnou"},

 {q:"96. Výsledky EKM modelování jsou využívány pro:",
  a:"<b>a)</b> Určování cen<br><b>b)</b> Vysvětlení cen<br><b>c)</b> Prognózování ekonomického vývoje<br><b>d)</b> Sledování nabídky a poptávky"},

 {q:"97. Nástrojem EKM zkoumání je:",
  a:"<b>e) Ekonometrický model.</b>"},

 {q:"98. Investiční fce v komplexních EKM modelech jsou charakterizovány zpravidla vysokou vypovídací úrovní:",
  a:"<b>Ne.</b>"},

 {q:"99. Produkční fce v makroekonomickém modelu zemědělství by měla obsahovat vysvětlující proměnné:",
  a:"<b>a)</b> Práce<br><b>b)</b> Kapitál<br><b>d)</b> Klimatické podmínky<br>(HDP je výstup, nikoliv vysvětlující proměnná.)"},

 {q:"100. Mezi objektivní prognostické metody patří:",
  a:"<b>a)</b> Analýza trendových funkcí<br><b>b)</b> Regresní analýza<br><b>c)</b> Strukturální analýza<br><b>d)</b> Matematické modelování<br><b>e)</b> Modely síťové analýzy"},

 {q:"101. Metoda analogických úsudků patří mezi:",
  a:"<b>subjektivní metody.</b>"},

 {q:"102. Prognóza ex ante je prognózou v:",
  a:"<b>pozitivním</b> (nebo negativním) prognostickém horizontu."},

 {q:"103. Produkční fce lze využít:",
  a:"<b>a)</b> Vymezení efektivnosti nabídky k minimálním nákladům na její zabezpečení<br><b>b)</b> K ověření efektivnosti využití porovnáváním skutečných a teoretických hodnot"},

 {q:"104. Předmětem ekonometrie je:",
  a:"<b>b)</b> Kvantitativní analýza ekonomických jevů<br><b>c)</b> Kvantifikace vztahů mezi ekonomickými jevy"},

 {q:"105. V EKM modelu rozlišujeme proměnné:",
  a:"<b>a)</b> endogenní<br><b>b)</b> exogenní<br><b>c)</b> náhodné<br><b>d)</b> exogenní zpožděné<br><b>e)</b> endogenní zpožděné<br>A parametry: a) strukturální b) stochastické"},

 {q:"106. Vysvětlete rozdíl mezi jednotkovými (průměrnými celkovými) náklady a mezními náklady.",
  a:"<b>JC</b> = náklady připadající na jednotku množství produkce.<br><b>MC</b> = přírůstek celkových nákladů při zvýšení produkce o jednotku.<br>TC = VC + FC"},

 {q:"107. Co obsahují predeterminované proměnné?",
  a:"<b>a)</b> Exogenní proměnné<br><b>b)</b> Exogenní zpožděné proměnné<br><b>c)</b> Endogenní zpožděné proměnné"}
];
if(typeof window!=="undefined")window.TEORIE100=TEORIE100;
