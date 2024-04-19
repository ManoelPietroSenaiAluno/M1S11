import { useEffect, useRef } from "react"

export function Referencia() {
    const inputRef = useRef(null)

    useEffect(() => {
        // console.log(inputRef)
        // inputRef.current.value = "quinta-feira"
        // inputRef.current.focus()
    }, [])
    

    return <input type="text" ref={inputRef} />
}