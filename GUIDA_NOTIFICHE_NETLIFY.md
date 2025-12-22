# Guida: Come attivare le notifiche email del modulo contatti

Il modulo contatti del sito è ora perfettamente funzionante e i messaggi vengono ricevuti dai server di Netlify.
Tuttavia, per riceverli nella tua casella di posta (`info@roccoandrealigorio.it`), devi attivare manualmente la notifica.

Segui questi passaggi:

1.  Accedi al sito [app.netlify.com](https://app.netlify.com).
2.  Clicca sul progetto **roccoandrealigorio.it** (o il nome del tuo progetto).
3.  Nel menu in alto, clicca su **"Forms"** (Moduli).
4.  Dovresti vedere il modulo chiamato **"modulo-contatti"** nell'elenco.
    *   *Se non lo vedi ancora, prova a inviare un nuovo messaggio di prova dal sito ora che è aggiornato.*
5.  Clicca su **"Settings and usage"** (o "Site configuration" -> "Forms").
6.  Scorri fino alla sezione **"Form notifications"**.
7.  Clicca su **"Add notification"**.
8.  Scegli **"Email notification"**.
9.  Inserisci:
    *   **Event:** "New form submission"
    *   **Email to notify:** `info@roccoandrealigorio.it`
    *   **Form:** Seleziona "modulo-contatti" (o "Any form")
10. Clicca **Save**.

Da questo momento in poi, ogni volta che qualcuno compila il form sul sito, riceverai una mail immediata.
Netlify usa l'oggetto che abbiamo impostato nel codice: *"Nuovo messaggio dal sito web"*.
