import { useState, useEffect, useRef } from "react"

export function useValidarForm() {
    const [data,setData] = useState({
        texto: '',
        senha: '',
    })
    const mensagemRef = useRef(null)
    const [mensagem, setMensagem] = useState("Preencha todos os campos")

    function handleSubmit() {
        // if(email === "" || password === "") {
        //     alert("Preencha os campos obrigatórios")
        //     return;
        // }

    }

    useEffect(() => {
        const valores = Object.values(data)
        const totalPreenchido = valores.reduce((total, valor) => {
            if(valor.length > 3) {
                total += 1
            }
            return total
        }, 0)
 
        if(totalPreenchido === 2) {
            setMensagem("Parabéns, todos os valores preenchidos!")
            mensagemRef.current.style.background = "rgba(0,255,0, 0.183)"
        }
    }, [data])

    return {
        data,
        setData,
        mensagem,
        handleSubmit,
        mensagemRef,
    }
}