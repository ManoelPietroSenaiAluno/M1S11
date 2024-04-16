import { Input } from "./components/Input" // revisão: importação nomeada
// import InputDiferente from './components/Input' // revisão: importaçao default

function App() {

  function handleClick() {
    alert("Chegou a hora dos hooks")
  }
  
  return (
    <div> 
      <h1>Hello world</h1>
      <Input value={100} isActive={true} />
      <button onClick={handleClick}>Alerta</button>
    </div>
  )
}

export default App
