import React, { useState } from 'react'
import './index.css';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import {InputBox} from './components/index.js';
function App() {
  const convert=()=>{
    setConvertedAmount((amount*currencyInfo[to]).toFixed(2))
    console.log("Convert called");
  }
  const [amount,setAmount]=useState('');
  const [from,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');
  const [convertedAmount,setConvertedAmount]=useState('');

  const currencyInfo=useCurrencyInfo(from);
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount('');
    setConvertedAmount('');
  }
  
  return (
    // <div className='bg-black text-white'>App</div>
    <div className="w-full h-screen flex flex-wrap justify-center items-center
    bg-cover bg-no-repeat" style={{backgroundImage:`url(https://images.pexels.com/photos/14907454/pexels-photo-14907454.jpeg)`}}>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
      <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
      }}>
        <div className="w-full mb-1">
          <InputBox 
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>
            setFrom(currency)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
          ></InputBox>
        </div>
        <div className="relative w-full h-0.5">
          <button
          className="absolute left-1/2 -translate-x-1/2 -translte-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
          onClick={swap}>Swap</button>
        </div>
        <div className="w-full mb-1">
          <InputBox 
          label="to"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>
            setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          ></InputBox>
        </div>
        <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
      </div>
    </div>
  )
}

export default App