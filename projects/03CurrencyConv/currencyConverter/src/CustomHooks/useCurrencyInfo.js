import {useEffect,useState}  from "react";

/*
in hooks major cases these hooks return purely javaScript
// use jsx when it return jsx

 // function  hello(){
 //    return[]
 // }
 // this can be a custom hook

*/



function  useCurrencyInfo(currency) {
    // our hooks needed an agrmunet
   // i need do here api call
    //let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const  [data, setData] = useState({})
    // initially it will be empty and if data not come from api then there will be an empty object

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((response) =>  response.json()).then((response)=>setData(response[currency])
            // this response is in json format)

        )
        console.log(data)
    }, [currency]);
    return data
}

export default useCurrencyInfo;