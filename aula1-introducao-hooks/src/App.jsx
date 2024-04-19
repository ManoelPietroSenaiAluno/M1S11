import { useState } from 'react'
import { EfeitoColateral } from './components/EfeitoColateral'
import { News } from './components/News'
import { EfeitoColateral2 } from './components/EfeitoColateral2'
// import { Input } from "./components/Input" // revisão: importação nomeada
// import InputDiferente from './components/Input' // revisão: importaçao default

// var contador = 0;

function App() {
  const [contador, setContador] = useState(0)
  const [texto, setTexto] = useState("")
  // const [primeiro, setSegundoItem] = useState()
  // function handleClick() {
  //   alert("Chegou a hora dos hooks")
  // }
  
  function incrementaMaisUm() {
    // setContador(contador + 1)
    setContador((prevState) => {
      return prevState + 1
    })
  }

  function diminuirUm() {
    // setContador(contador + 1)
    setContador((prevState) => {
      return prevState - 1
    })
  }

  return (
    <div> 
      {/* <h1>Hello world</h1> */}
      {/* <Input value={100} isActive={true} /> */}
      {/* <button onClick={handleClick}>Alerta</button> */}
      <h1>Valor do contador: {contador}</h1>
      
      <button onClick={diminuirUm}>
        dimunuir -1
      </button>

      <button onClick={incrementaMaisUm}>
        aumentar +1
      </button>
      
      <br />
      <br />

      <strong>Meu input: {texto}</strong> <br />
      <input type="text" onChange={(event) => setTexto(event.target.value)} />

      <br />
      <br />

    <EfeitoColateral />
    
      <br />
      <br />

        <News />

         
      <br />
      <br />

      <EfeitoColateral2 />
    </div>
  )
}

export default App
