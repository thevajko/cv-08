# VAII cvičenie 08

Momentálne je otvorená vetva __MASTER__, ktorá obsahuje _štartér_. Riešenie obsahuje vetva __SOLUTION__.

## Zadanie

Východiskom je aplikácia z cvičenia 07. Prezentáciu obrázkov vytvorte ako lightbox otvorený zo stránky s príspevkami,
nie ako samostatnú stránku.

1. Na stranku s prispevkami pridajte tlačidlo **Slideshow**.
2. Pripravte JavaScriptový súbor a vytvorte v ňom triedy `Slideshow` a `Slide`.
3. Prilinkujte skript do aplikácie.
4. Pripravte inicializáciu prezentácie, ktorá zo stránky načíta zoznam slajdov (na základe dát v HTML). Každý slajd obsahuje obrázok a jeho popis.
5. Po kliknutí na tlačidlo **Slideshow** inicializujte prezentáciu: načítajte zoznam obrázkov a vytvorte z nich
   slajdy. Podľa ukážok v súboroch `snippets/slideshow.html` a `snippets/slideshow.css` vytvorte celú HTML štruktúru
   lightboxu pomocou JavaScriptu a zobrazte v ňom prvý obrázok cez celú stránku.
6. Pridajte obsluhu tlačidiel **Ďalej** a **Späť**, aby používateľ mohol prejsť na nasledujúci alebo predchádzajúci
   obrázok. Zabezpečte prechod z posledného obrázka na prvý a opačne.
7. Umožnite ovládanie prezentácie klávesnicou: šípkami doľava a doprava prepínajte obrázky a klávesom **Esc**
   zatvorte lightbox.
8. Doplňte automatické prepínanie obrázkov pomocou časovača. Nastavte interval tak, aby sa dal jednoducho zmeniť,
   a po poslednom obrázku pokračujte prvým.
9. Pri každom slajde zobrazte jeho popis.

## Použitý framework

Cvičenie používa framework vaííčko dostupný na repozitári
[https://github.com/thevajko/vaiicko](https://github.com/thevajko/vaiicko).
