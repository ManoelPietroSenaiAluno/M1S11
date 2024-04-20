import { useEffect, useState } from "react"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { InteresseItem } from "./components/InteresseItem"
import { News } from "./components/News"

function App() {

  const [interesses, setInteresses] = useState([])
  const [inputTexto, setInputTexto] = useState('')
  const [noticia, setNoticia] = useState('')

  function getInteresses() {
    const interessesStorage = localStorage.getItem('meus-interesses') // []
    if(interessesStorage) {
      const interessesConvertido = JSON.parse(interessesStorage)
      setInteresses(interessesConvertido)
    }
  }

  function adicionarInteresse() {
    setInteresses(prevInteresses => {
      var novaListaInteresses = [...prevInteresses, inputTexto]

      // PERSISTIR OS DADOS NO LOCALSTORAGE
      localStorage.setItem('meus-interesses', JSON.stringify(novaListaInteresses))

      return novaListaInteresses
    })
    // LIMPAR O TEXTO DO INPUT
    setInputTexto('')
  }

  function limparLista() {
    setInteresses([])
    localStorage.removeItem('meus-interesses')
  }

  async function buscarNoticia() {
    const resposta = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
    const data = await resposta.json()
    const noticiaTitulo = data.items[0].titulo
    setNoticia(noticiaTitulo)
  }

  function removerInteresse(posicao) {
    setInteresses(prevInteresses => {
      var novosInteresses = prevInteresses.filter((item, index) => index != posicao)
      
      localStorage.setItem('meus-interesses', JSON.stringify(novosInteresses))

      return novosInteresses
    })
  }

  useEffect(() => {
    getInteresses()
    buscarNoticia()
  }, [])

  useEffect(() => {
    var temporizador = setInterval(() => {
      getInteresses()
    }, 1000)

    return () => clearInterval(temporizador)
  }, [])

  return (
    <>
      <main className="container">
        <header>
              <img src="/logotipo.png" alt="LAB365" />
              <h1>Meus interesses</h1>
          </header>

          <div className="form">
              <Input 
                placeholder="Digite algum interesse" 
                value={inputTexto} 
                onChange={event => setInputTexto(event.target.value)} 
              />
              <Button onClick={adicionarInteresse}>Adicionar</Button>
          </div>

          <div className="list">
              <div>
                  <strong>Lista:</strong>
                  <button className="button-clear" onClick={limparLista}>Limpar lista</button>
              </div>
              <ul>
                {
                  interesses.map((interesse, index) => (
                    <InteresseItem 
                      key={index} 
                      title={interesse} 
                      onRemove={() => {
                        removerInteresse(index)
                      }}
                    />
                  ))
                }
              </ul>
          </div>
      </main>
      <News title={noticia} />
    </>
  )
}

export default App
