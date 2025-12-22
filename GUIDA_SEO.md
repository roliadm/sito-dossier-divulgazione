# Guida SEO: Come indicizzare il sito su Google

Il tuo sito è già ottimizzato tecnicamente per i motori di ricerca.
- **Sitemap**: Generata automaticamente a `https://www.roccoandrealigorio.it/sitemap-index.xml`
- **Robots.txt**: Configurato correttamente.
- **Performance**: Il sito è velocissimo (fattore ranking importante).

## Passo 1: Google Search Console (Fondamentale)

Questo è l'unico modo per dire a Google: "Ehi, il mio sito esiste, indicizzalo".

1. Vai su [Google Search Console](https://search.google.com/search-console).
2. Fai login con il tuo account Google (meglio se ne usi uno dedicato al lavoro).
3. Nel menu in alto a sinistra, clicca **Aggiungi proprietà**.
4. Scegli l'opzione **Dominio** (Box a sinistra).
5. Inserisci `roccoandrealigorio.it` (senza www o https).
6. Clicca **Continua**.

## Passo 2: Verifica del Dominio (Record DNS)

Google ti chiederà di dimostrare che il dominio è tuo copiando un codice TXT.

1. Copia il codice che ti dà Google (inizia con `google-site-verification=...`).
2. Vai dove gestisci i **DNS** del tuo dominio (probabilmente **Aruba** o **Netlify**).
   - Se hai impostato i "Nameservers" di Netlify su Aruba: Vai su **Netlify** > Scegli il sito > **Domain settings** > **DNS records** > **Add new record**.
     - **Type**: TXT
     - **Name**: @ (o lascia vuoto)
     - **Value**: Incolla il codice di Google.
     - **TTL**: Lascia default.
   - Se usi i DNS di Aruba: Vai sul pannello di controllo Aruba > Gestione DNS > Record TXT > Aggiungi.
3. Torna sulla Search Console e clicca **VERIFICA**. (Potrebbe volerci qualche minuto o un'ora prima che funzioni).

## Passo 3: Inviare la Sitemap

Una volta dentro la dashboard del tuo sito su Search Console:

1. Nel menu a sinistra clicca su **Sitemap**.
2. Nello spazio "Aggiungi una nuova sitemap", scrivi:
   `sitemap-index.xml`
3. Clicca **INVIA**.

Se vedi "Stato: Operazione riuscita", hai finito! Google visiterà il sito nelle prossime 24-48 ore.

## Consigli Extra

- **Bing Webmaster Tools**: Puoi fare lo stesso su Bing (spesso importa i dati direttamente da Google Search Console senza fare nulla).
- **Titoli e Descrizioni**: Quando scrivi un articolo su Decap CMS (l'area admin), assicurati di scrivere sempre una `Description` accattivante. Quella è la frase che appare sotto il link su Google.
