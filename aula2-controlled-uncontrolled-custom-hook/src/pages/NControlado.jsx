import { useRef } from "react"

export function NControlado() {
    const inputRef = useRef(null)

    function onSubmit() {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <span></span> <br />
            <input 
                ref={inputRef}
                type="text" 
            /> 
            <br />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}