import { useEffect } from "react"
import { BotaoContador } from "../components/BotaoContador"

export function CompartilhamentoEstado() {

    useEffect(() => {
        console.log('renderizou')
    }, [])

    return (
        <div>
            <BotaoContador />
            <BotaoContador />
        </div>
    )
}