import axios from 'axios'
import { useEffect, useState } from 'react'
// Importa la configurazione Amplify
import './config/amplify'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Usa la variabile d'ambiente invece dell'URL hardcoded
    const apiUrl = process.env.REACT_APP_API_URL || 'https://httpbin.org'
    
    console.log('🔍 API URL configurato:', apiUrl)
    console.log('🔍 Tutte le env vars:', process.env)
    
    // Test con httpbin per verificare che la connessione funzioni
    axios.get(`${apiUrl}/get`)
      .then(res => {
        console.log('✅ Risposta API:', res.data)
        setMessage(`✅ Connessione riuscita! API: ${apiUrl}`)
      })
      .catch(err => {
        console.error('❌ Errore connessione backend:', err)
        setMessage(`❌ Backend non raggiungibile: ${apiUrl}`)
      })
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Dashboard SaaS</h1>
      <p><strong>Risposta dal backend:</strong> {message}</p>
      <p>✅ AWS Amplify configurato!</p>
      <p>🌐 URL: {window.location.href}</p>
      <p>🔗 API configurata per: {process.env.REACT_APP_API_URL || 'https://httpbin.org (fallback)'}</p>
      <p>🔍 Debug - Tutte le env vars disponibili:</p>
      <pre style={{background: '#f5f5f5', padding: '10px', fontSize: '12px'}}>
        {JSON.stringify(
          Object.keys(process.env)
            .filter(key => key.startsWith('REACT_APP_'))
            .reduce((obj, key) => {
              obj[key] = process.env[key];
              return obj;
            }, {}), 
          null, 2
        )}
      </pre>
    </div>
  )
}

export default App