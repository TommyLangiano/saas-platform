import axios from 'axios'
import { useEffect, useState } from 'react'
// Importa la configurazione Amplify
import './config/amplify'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5050/api/hello')
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>Dashboard SaaS</h1>
      <p>Risposta dal backend: {message}</p>
      <p>🚀 AWS Amplify configurato!</p>
    </div>
  )
}

export default App