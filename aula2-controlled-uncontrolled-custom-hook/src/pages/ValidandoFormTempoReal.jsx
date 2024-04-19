import { useEffect, useState } from "react"

export function ValidandoFormTempoReal() {
    const [data,setData] = useState({
        texto: '',
        senha: '',
    })
    const [mensagem, setMensagem] = useState("Preencha todos os campos")

    function handleSubmit() {
        if(email === "" || password === "") {
            alert("Preencha os campos obrigatórios")
            return;
        }

    }

    useEffect(() => {
        console.log('chamou o effect')
        const valores = Object.values(data)
        const totalPreenchido = valores.reduce((total, valor) => {
            if(valor) {
                total += 1
            }
            return total
        }, 0)
 
        if(totalPreenchido === 2) {
            setMensagem("Parabéns, todos os valores preenchidos!")
        }
    }, [data])

    // function validarDados() {
    //     const valores = Object.values(data)
    //     const totalPreenchido = valores.reduce((total, valor) => {
    //         if(valor) {
    //             total += 1
    //         }
    //         return total
    //     }, 0)
 
    //     if(totalPreenchido === 2) {
    //         setMensagem("Parabéns, todos os valores preenchidos!")
    //     }
    // }

    return (
        <div>
           <strong style={{
            padding: 16,
            borderRadius: 5,
            minWidth: 500,
            display: 'block',
            background: 'rgba(255, 157, 0, 0.183)',
            marginBottom: 16
           }}>{mensagem}</strong>
           {/* <br /> */}
            <input 
                type="texto" 
                value={data.texto} 
                onChange={event => {
                    setData(prevState => ({
                        // password: prevState.password,
                        ...prevState, // clonando o objeto
                        texto: event.target.value
                    }))
                }}
                placeholder="Seu e-mail" 
                autoComplete="off"
            /> 
            <br/ >
            <br/ >
             <input 
                // onBlur={validarDados}
                type="senha" 
                value={data.senha} 
                placeholder="Sua senha"
                onChange={event => {
                    setData(prevState => ({
                        // senha: prevState.senha,
                        ...prevState, // clonando o objeto
                        senha: event.target.value
                    }))
                }}
            /> 
            <br />
            <br />
            <button  onClick={handleSubmit}>Submit</button>
        </div>
    )
}