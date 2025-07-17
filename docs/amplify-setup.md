# 🚀 Guida Setup AWS Amplify Console

## Prerequisiti
- Account AWS attivo
- Repository GitHub/GitLab con il codice
- AWS CLI configurato (opzionale)

## PASSO 1: Accesso ad AWS Amplify Console

1. **Vai su AWS Console** → Cerca "Amplify"
2. **Clicca su "Amplify"** nella sezione Mobile
3. **Clicca "Host web app"**

## PASSO 2: Connessione Repository

1. **Seleziona il provider**:
   - GitHub (raccomandato)
   - Bitbucket
   - GitLab
   - AWS CodeCommit

2. **Autorizza AWS Amplify** ad accedere al tuo repository

3. **Seleziona il repository**: `saas-platform`

4. **Seleziona il branch**: `main` (o il tuo branch principale)

## PASSO 3: Configurazione Build

1. **App name**: `saas-platform-frontend`

2. **Build settings**: 
   - AWS dovrebbe rilevare automaticamente che è un'app React
   - Se non rileva, carica il file `infra/amplify.yml`

3. **Advanced settings**:
   ```
   Build command: npm run build
   Build output directory: build
   Node.js version: 18
   ```

## PASSO 4: Variabili d'Ambiente

Nella sezione **Environment variables**, aggiungi:

```
REACT_APP_AWS_REGION=eu-west-1
REACT_APP_API_URL=https://your-backend-url.com
REACT_APP_COGNITO_USER_POOL_ID=eu-west-1_xxxxxxxxx
REACT_APP_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
REACT_APP_S3_BUCKET_NAME=your-bucket-name
```

⚠️ **Nota**: Questi valori li aggiornerai dopo aver creato Cognito e S3

## PASSO 5: Deploy

1. **Clicca "Save and deploy"**
2. **Attendi il build** (circa 2-3 minuti)
3. **Verifica il deploy** sul dominio fornito

## PASSO 6: Custom Domain (Opzionale)

1. **Vai su "Domain management"**
2. **Aggiungi il tuo dominio**
3. **Configura DNS** secondo le istruzioni AWS

## PASSO 7: Configurazioni Aggiuntive

### Branch Deploy
- **Main branch**: Deploy automatico
- **Develop branch**: Deploy su staging (opzionale)

### Notifications
- **Slack/Email**: Per notifiche di build
- **SNS**: Per integrazioni avanzate

### Security Headers
- Già configurate nel file `amplify.yml`
- Include HTTPS redirect automatico

## PASSO 8: Test

1. **Visita l'URL** fornito da Amplify
2. **Verifica** che vedi: "🚀 AWS Amplify configurato!"
3. **Controlla Developer Tools** per eventuali errori

## PASSO 9: Monitoraggio

1. **CloudWatch Logs**: Per debug build
2. **Access Logs**: Per analytics
3. **Performance Monitoring**: Incluso

## URL Utili

- **Amplify Console**: https://console.aws.amazon.com/amplify/
- **Documentazione**: https://docs.aws.amazon.com/amplify/
- **CLI Guide**: https://docs.amplify.aws/cli/

## ⚠️ Troubleshooting Comuni

### Build Fallisce
```bash
# Verifica Node.js version in amplify.yml
# Controlla package.json dependencies
# Verifica environment variables
```

### 404 su Route
```yaml
# In amplify.yml aggiungi:
customHeaders:
  - pattern: '**/*'
    headers:
      - key: 'Cache-Control'
        value: 'max-age=0'
```

### Variabili d'Ambiente Non Funzionano
- Devono iniziare con `REACT_APP_`
- Restart deploy dopo modifiche
- Verifica in browser Developer Tools

## Prossimo Step: Cognito

Dopo il deploy di Amplify, procediamo con AWS Cognito per l'autenticazione! 

## 🎉 **RIEPILOGO: AWS Amplify Configurato!**

### ✅ **Cosa abbiamo fatto:**

1. **✅ Installato dipendenze**:
   - `aws-amplify`
   - `@aws-amplify/ui-react`

2. **✅ Creato configurazione**:
   - `src/config/amplify.js` → Configurazione completa
   - `.env` → Variabili d'ambiente pronte
   - `infra/amplify.yml` → Build configuration

3. **✅ Integrato in App.js**:
   - Amplify si avvia automaticamente
   - Pronto per essere utilizzato

4. **✅ Documentazione completa**:
   - `docs/amplify-setup.md` → Guida passo-passo per AWS Console

### 📋 **I tuoi prossimi passi:**

1. **🔧 Committa il codice**:
   ```bash
   cd /Users/tommylangiano/Desktop/saas-platform
   git add .
   git commit -m "Add AWS Amplify configuration"
   git push origin main
   ```

2. **🚀 Segui la guida** in `docs/amplify-setup.md`

3. **🌐 Deploy su AWS Amplify Console**

4. **✨ Testa l'applicazione** sul dominio fornito

### 🔄 **Stato attuale:**
- ✅ **Frontend locale**: Pronto con Amplify configurato
- ⏳ **Deploy AWS**: Da fare seguendo la guida
- ⏳ **Cognito, S3, etc.**: Prossimi step

### 🎯 **Dopo il deploy di Amplify:**
Procederemo con:
- **AWS Cognito** (autenticazione)
- **Amazon S3** (storage)
- **EC2** (backend)
- **RDS** (database)

Hai tutto pronto! Segui la guida e fammi sapere come va il deploy su AWS Amplify Console! 🚀 