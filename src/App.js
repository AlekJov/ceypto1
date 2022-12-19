import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import axios from "axios";
import { useEffect,useState } from "react";

const App = () => {

  const [coins,setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

useEffect (()=>{
  axios.get(url).then((response)=>{
    console.log(response.data)
    setCoins(response.data)
  }).catch((error)=>{
    console.log(error)
  })
},[])


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Coins coins={coins}/>}/>
        <Route path="coin/:coinId" element={<Coin/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
