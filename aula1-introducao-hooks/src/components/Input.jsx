import PropsTypes from 'prop-types'

export function Input({ value, isActive }) {

    var mensagem = isActive ? "Ativo" : "Inativo"
    var color = isActive ? "green" : "red"

    return (
        <>
            <label 
                style={{
                    color,
                }}>
                {mensagem}
            </label>
            <input 
                type="text"     
                value={value} 
                // className={["ativo", "input"].join(" ")}
            />
        </>
    )
}

Input.propTypes = {
    value: PropsTypes.string,
    isActive: PropsTypes.bool,
}


export default Input;
