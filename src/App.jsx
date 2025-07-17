import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    api.get('/api/hello')
      .then(res => setMsg(res.data.message))
      .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard SaaS</h1>
      <p>Risposta dal backend: <strong>{msg}</strong></p>
    </div>
  )
}

export default App