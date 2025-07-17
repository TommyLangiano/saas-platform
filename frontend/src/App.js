import axios from 'axios'
import { useEffect, useState } from 'react'
// Importa la configurazione Amplify
import './config/amplify'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Usa la variabile d'ambiente invece dell'URL hardcoded
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5050'
    
    axios.get(`${apiUrl}/api/hello`)
      .then(res => setMessage(res.data.message))
      .catch(err => {
        console.error('Errore connessione backend:', err)
        setMessage('❌ Backend non raggiungibile')
      })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Dashboard SaaS</h1>
      <p><strong>Risposta dal backend:</strong> {message}</p>
      <p>✅ AWS Amplify configurato!</p>
      <p>🌐 URL: {window.location.href}</p>
      <p>🔗 API configurata per: {process.env.REACT_APP_API_URL || 'localhost:5050'}</p>
    </div>
  )
}

export default App