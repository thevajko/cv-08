# VAII Cvičenie 08

Momentálne je otvorená branch __MAIN__, ktorá obsahuje _štartér_. Riešenie obsahuje branch  __SOLUTION__.

## Úlohy

1. Jednoduché úlohy
   1. Vytvorte funkciu, ktorá bude schopná do vybraného elementu vygenerovať 5 nadpisov. V texte nadpisu sa bude
      nachádzať jeho číslo.
   2. Vytvorte funkciu na výpočet faktoriálu.
      * Doplňte do stránky ovládacie prvky vstupné pole pre vloženie čísla, ktorého faktoriál chcete vypočítať a
        tlačidlo pre zobrazenie výsledku.


2. Hra pexeso
   Naprogramujte jednoduchú hru pexeso pre dvoch hráčov, ktorá bude zobrazovať aktuálne skóre. Hra sa bude dať hrať 
opakovane.
   * Hru riešte pomocou __OOP.__
   * Použite __JS moduly.__

Postup:
1. Preštudujte si štruktúru štartéra projektu a hlavne súbory `index.html` a `css\style.css`.
2. Vytvorte triedu `Player` s privátnymi atribútmi `number` a `score`. Vytvorte k nim _get_ a _set_ metódy. Vytvorte aj 
konštruktor s parametrom `number`.
3. Vytvorte triedu `Card`. Bude mať atribúty `symbol`, `element`, `guessed`. Vytvorte k nim _set_ a _get_ metódy.
   * Vytvorte konštruktor. Čo bude jeho parametrom?
   * Vytvorte a implementujte metódy `show()` a `hide()`, ktoré budú kartu odkrývať a skrývať.
4. Vytvorte triedu `Pexeso`.
   * Trieda bude mať privátne atribúty `cardOne`, `cardTwo`, `cards`, `players` a `currentPlayer`.
   * Vytvorte konštruktor. Čo bude jeho obsahom?
   * Vytvorte metódu `newGame()`. Čo bude metóda robiť?
   * Vytvorte metódu `switchPlayers()`, ktorá bude prepínať hráčov.
   * Vytvorte metódu `turnCard()`, ktorá bude implementovať logiku odkrývania a skrývania kariet pri ťahu.
5. Zmeňte implementáciu metódy `guessed()` v triede `Card`, tak, aby správne zaznamenala, či bola karta uhádnutá.
6. Nastavte správne importy a exporty v jednotlivých súboroch. V súbore `main.js` naimportujte modul `pexeso.js` a hru 
spustite.


## Ako nájsť branch môjho cvičenia?

Pokiaľ sa chcete dostať k riešeniu z cvičenia je potrebné otvoriť si príslušnú _vetvu_, ktorej názov sa skladá:

__MIESTNOST__ + "-" + __HODINA ZAČIATKU__ + "-" + __DEN__

Ak teda navštevujete cvičenie v pondelok o 08:00 v RA323, tak sa vetva bude volať: __RA323-08-PON__.
