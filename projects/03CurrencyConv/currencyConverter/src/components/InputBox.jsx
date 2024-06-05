import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,

  className = "",
}) {
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}
      // this css comes from user if user wanted to display smothing else
    >
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount} 
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}


        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
            value={selectedCurrency}
            onChange={()=> onCurrencyChange && onCurrencyChange(e.target.value)}
             
         {currencyOptions.map((currency)=>(
            <option  key ={currency} value= {currency}>

                {/* to incresse performace in loop we need to pass key  in react */}
                {currency }

            </option>
         ))}
        </select>
      </div>
    </div>
  );
}


// to use components there one beeter approch in bigger projects 
// make a index.js file and keep all your coponents there  
export default InputBox;
