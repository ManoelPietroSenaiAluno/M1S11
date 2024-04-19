import { useTeste } from "../hooks/useTeste"
import { useValidarForm } from "../hooks/useValidarForm"

export function ValidandoFormCustomHook() {
    const { data: vetorNumerico } = useTeste()
    const { data, mensagem, setData, handleSubmit, mensagemRef } = useValidarForm()

    console.log(vetorNumerico)

    return (
        <div>
           <strong 
            ref={mensagemRef}
            style={{
                padding: 16,
                borderRadius: 5,
                minWidth: 500,
                display: 'block',
                background: 'rgba(255, 157, 0, 0.183)',
                marginBottom: 16
            }}
           >{mensagem}</strong>
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
                onBlur={() => {
                    alert('saiu do foco')
                }}
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
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}