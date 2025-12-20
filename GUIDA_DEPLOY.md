# Guida al Deploy e Pubblicazione
Questa è la tua guida passo-passo per mettere online il sito "Digital Dossier".

## 1. Caricare il codice su GitHub
Hai generato tutto il codice, ora va messo al sicuro.
1. Vai su [GitHub](https://github.com) e crea un account se non ce l'hai.
2. Crea un **Nuovo Repository** (chiama il repo es. `sito-dossier-divulgazione`).
3. Non inizializzarlo con README o altro, crealo vuoto.
4. Apri il terminale nella cartella del tuo progetto (qui dove siamo ora) ed esegui:
   ```bash
   git init
   git add .
   git commit -m "Primo commit: Digital Dossier Launch"
   git branch -M main
   git remote add origin https://github.com/TUO_NOME_UTENTE/sito-dossier-divulgazione.git
   git push -u origin main
   ```

## 2. Pubblicare su Netlify
1. Vai su [Netlify](https://www.netlify.com/) e fai login con GitHub.
2. Clicca su **Add new site** > **Import an existing project**.
3. Scegli **GitHub**.
4. Seleziona il repository `sito-dossier-divulgazione` che hai appena creato.
5. Netlify rileverà automaticamente Astro. Le impostazioni dovrebbero essere:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clicca su **Deploy Site**.

## 3. Configurare il Dominio (roccoandrealigorio.it)
1. Nella dashboard del sito su Netlify, vai su **Domain management**.
2. Clicca **Add custom domain** e inserisci `www.roccoandrealigorio.it`.
3. Netlify ti darà dei DNS da copiare (es. `dns1.p01.nsone.net`).
4. Vai su **Aruba** > Gestione Dominii > Gestione DNS.
5. Disattiva i record A attuali e cambia i **Name Server** (NS) inserendo quelli forniti da Netlify.
6. Aspetta qualche ora (fino a 24h) per la propagazione.

## 4. Attivare il CMS (Decap) e Identity
Per poter scrivere articoli senza toccare il codice:
1. Su Netlify, vai su **Site Settings** > **Identity** > **Enable Identity**.
2. Scorri giù a **Registration** e imposta "Invite only" (così nessuno può registrarsi a caso).
3. Vai su **Services** > **Git Gateway** e clicca **Enable Git Gateway** (ti chiederà di riconnettere GitHub).
4. Ora vai sulla tab **Identity** in alto, clicca **Invite users** e invita la tua email.
5. Riceverai una mail con un link. Cliccalo. Ti porterà al sito.
6. Aggiungi `/admin` all'URL del tuo sito (es. `https://www.roccoandrealigorio.it/admin`).
7. Fai login. Ora puoi scrivere articoli!

## 5. Aggiornamento News Automatico
Le news dal mondo (Punto Informatico, ecc.) vengono scaricate quando il sito viene "costruito".
Per tenerle aggiornate:
1. Vai su Netlify > **Site Settings** > **Build & deploy** > **Build hooks**.
2. Crea un nuovo hook chiamato "Aggiornamento Mattutino".
3. Copia l'URL che ti da.
4. Vai su un servizio gratuito come [cron-job.org](https://cron-job.org).
5. Crea un job che chiama quell'URL ogni mattina alle 08:00.
6. Fatto! Il sito si rigenererà ogni mattina con le nuove notizie.

---
**Tutto pronto. Benvenuto nel web.**
