import { useState, useEffect } from "react"

export function EfeitoColateral() {
    const [contador, setContador] = useState(0)
    const [texto, setTexto] = useState("")


    
    useEffect(() => {
        setContador(contador + 1)
        setTexto("Minha calculadora!")
    }, [])

    return (
        <div>
            <h1>{texto}</h1>
            <strong>Meu Estado: {contador}</strong>
        </div>
    )
}