import {useEffect, useState} from "react"


function useCurrency(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        // 
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrency;