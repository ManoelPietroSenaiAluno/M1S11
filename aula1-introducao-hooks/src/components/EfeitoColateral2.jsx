import { useState, useEffect } from "react"
import data from './movies.json'

const interesses = ["", "", ""]

export function EfeitoColateral2() {
    // const [contador, setContador] = useState(0)
    const [filtro, setFiltro] = useState("todos")
    const [cinema, setCinema] = useState(data)

    
    useEffect(() => {
        // setContador(contador + 1)
        // setTexto("Minha calculadora!")
        if(filtro === 'todos') {
            setCinema(data)
        } else {
            var novosDados = data.filter(item => item.category === filtro)
            
            setCinema(novosDados)
        }

    }, [filtro])

    return (
        <div>
            
            <strong>Filtros: {filtro}</strong>
            <button onClick={() => setFiltro("todos")}>Todos</button>
            <button onClick={() => setFiltro("filmes")}>Filmes</button>
            <button onClick={() => setFiltro("series")}>Series</button>
            <button onClick={() => setFiltro("animes")}>Animes</button>

            <ul>
                {cinema.map(ci => <li key={ci.title}>{ci.title}</li>)}
            </ul>
        </div>
    )
}