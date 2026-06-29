import { useState } from 'react'
import './App.css'

const rates = {
  EUR: 1,
  USD: 1.08,
  CHF: 0.96
}

function App() {
  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('EUR')
  const [to, setTo] = useState('USD')
  const [result, setResult] = useState('')


  const convert = () => {
    const value = parseFloat(amount)

    if (Number.isNaN(value)) {
      setResult('Erreur : veuillez saisir un montant valide.')
      return
    }

    const inEur = value / rates[from]
    const converted = inEur * rates[to]

    setResult(`${value} ${from} = ${converted.toFixed(2)} ${to}`)
  }

  return (
    <div id="converter">
      <h1>Convertisseur de Devises</h1>

      <input
        type="number"
        placeholder="Montant à convertir"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div id="currencies">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {Object.keys(rates).map((devise) => (
            <option key={devise} value={devise}>
              {devise}
            </option>
          ))}
        </select>

        <span id="arrow">→</span>

        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {Object.keys(rates).map((devise) => (
            <option key={devise} value={devise}>
              {devise}
            </option>
          ))}
        </select>
      </div>

      <button type="button" onClick={convert}>
        Convertir
      </button>

      <div id="result">{result}</div>
    </div>
  )
}

export default App
