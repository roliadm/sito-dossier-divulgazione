# Guida Editoriale - Sito Rocco Andrea Ligorio

Il tuo sito è dotato di un sistema di **Auto-Pubblicazione**.
Questo significa che puoi scrivere 10 articoli oggi, impostare le date per le prossime settimane, e il sito li pubblicherà automaticamente uno alla volta, ogni mattina alle 09:00.

## 1. Come aggiungere un nuovo articolo

1.  Vai nella cartella `src/content/articoli/`.
2.  Crea un nuovo file, ad esempio `come-risparmiare-batteria.md`.
3.  Copia il contenuto del file `_TEMPLATE_ARTICOLO.md` (trovi questo file nella stessa cartella).
4.  Modifica i dati in cima al file (**Frontmatter**):
    *   `title`: Il titolo dell'articolo.
    *   `description`: Una frase breve che appare nelle anteprime.
    *   `date`: **LA COSA PIÙ IMPORTANTE**. Se metti una data futura (es. `2025-12-30`), l'articolo rimarrà nascosto fino a quel giorno.
    *   `category`: Hardware, Software, Internet, Sicurezza, Privacy, etc.
    *   `bsLevel`: Livello di "Bullshit" (0 = Verità assoluta, 100 = Truffa marketing). Appare nel "Bullshit Detector" se abilitato.

## 2. Esempio Pratico

Oggi è il **21 Dicembre**.
Scrivi un articolo e imposti `date: 2025-12-30`.

*   **Oggi (21 Dic):** Tu vedi il file, ma sul sito online NON appare.
*   **Domani (22 Dic):** Ancora nascosto.
*   **...**
*   **30 Dicembre, ore 09:00:** Il sistema automatico si sveglia, vede che la data è arrivata e pubblica l'articolo.

## 3. Cosa succede se finiscono gli articoli?

Nulla di grave. Il sito continuerà a funzionare, mostrando come "Ultimo Articolo" quello più recente disponibile. Non ci saranno "buchi" o errori. Semplicemente il blog non si aggiornerà finché non carichi roba nuova.

## 4. Comandi Utili (Se vuoi provare in locale)

*   `npm run dev`: Avvia il sito in modalità Anteprima. **ATTENZIONE:** In questa modalità vedi TUTTI gli articoli, anche quelli futuri, così puoi controllarli.
*   `npm run build`: Simula la versione pubblica (nasconde gli articoli futuri).

---
*Manuale generato da Antigravity - 21/12/2025*
