import { useEffect, useState } from "react"

export function News() {
    const [textoDaNoticia, setTextoDaNoticia] = useState("")

    async function getDados() {
        const resposta = await fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release")
        const data = await resposta.json()
        // console.log(data)
        setTextoDaNoticia(data.items[0].titulo)
    }
    useEffect(() => {
        // http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release
        // fetch("http://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release")
        // .then(resposta => resposta.json())
        // .then(data => console.log(data))
        getDados()
    }, [])

    return (
        <div>
            <strong>Noticia:</strong>
            <p>{textoDaNoticia}</p>
        </div>
    )
}