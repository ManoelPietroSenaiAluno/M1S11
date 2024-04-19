export function useTeste() {
    
    async function getDados() {
        const response = await fetch('http://gooogle.com.br')
        const data = await response.json()
        
        return data
    }

    return  {
        data: [1,2,3],
        getDados
    }
}