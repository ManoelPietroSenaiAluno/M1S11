import { useState } from "react"

export function BotaoContador() {
    const [contador, setContador] = useState(0)

    return <button onClick={() => setContador(prevState => prevState + 1)}>{contador} - Incrementar</button>
}