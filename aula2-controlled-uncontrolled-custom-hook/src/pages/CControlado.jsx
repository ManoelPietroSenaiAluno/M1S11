import { useState } from "react"

export function CControlado() {
    const [texto,setTexto] = useState("")
    const [password,setPassword] = useState("")

    const buttonDisabled = texto === ""

    function handleOnChange(event) {
        // var isNumeric = isNaN(event.target.value)

        // if(!isNumeric) {
        //     setTexto(event.target.value)
        // } 
        setTexto(event.target.value)
    }

    function handleSubmit() {
        if(texto === "" || password === "") {
            alert("Preencha os campos obrigatórios")
            return;
        }

        alert("Login efetuado com sucesso!")
        
        console.log({
            email: texto,
            password,
        })
        setTexto("")
        setPassword("")
    }

    return (
        <div>
            <span>{texto}</span> <br />
            <input 
                type="text" 
                value={texto} 
                onChange={handleOnChange}
                placeholder="Seu e-mail" 
                autoComplete="none"
            /> 
            <br/ >
            <br/ >
             <input 
                type="password" 
                value={password} 
                placeholder="Sua senha"
                onChange={event => setPassword(event.target.value)} 
            /> 
            <br />
            <br />
            <button  onClick={handleSubmit}>Submit</button>
        </div>
    )
}