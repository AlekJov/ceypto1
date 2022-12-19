import React from 'react'
import CoinItem from '../components/CoinItem';
import "./Coins.css"
import { Link } from 'react-router-dom';

const Coins = ({coins}) => {
  return (
    <div className='container'>
           <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>
                
                {coins.map((coin)=>{
                    return(
                      <Link to={`/coin/${coin.id}`}>
                        <CoinItem coin = {coin}/>
                        </Link>
                    )
                })}

           </div>
    </div>
  )
}

export default Coins