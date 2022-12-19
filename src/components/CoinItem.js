import React from 'react'

const CoinItem = ({coin}) => {
  return (
    <div className='coin-row'>
        <div className='img-symbol'>
            <img src={coin.image} alt=""></img>
        </div>
        <p className='coin-name'>{coin.name}</p>
        <p>${coin.current_price.toLocaleString()}</p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
        <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem