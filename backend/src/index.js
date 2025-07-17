require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

// ✅ CORS: consenti richieste solo dal tuo frontend React in locale
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

// ✅ Middleware per body JSON
app.use(express.json())

// ✅ Route di base
app.get('/', (req, res) => {
  res.send('✅ Backend attivo!')
})

// ✅ API di test per connessione frontend-backend
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Ciao dal backend!' })
})

// ✅ Avvio server sulla porta specificata
const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  console.log(`✅ Backend in ascolto su http://localhost:${PORT}`)
})