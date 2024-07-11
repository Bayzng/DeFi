import React from 'react'
import '../Offer/Offer.css'
import { giftImg, redeemImg, designImg } from '../../../../assets'

const Offer = () => {
  return (
    <div className='offerCon'>
      <h2>What Can You Do On <span>PayGifty</span></h2>
      <div className='cardBox'>

        <div className='cardContent'>
          <div>
            <img src={giftImg} alt="" />
          </div>
          <h3>Create Crypto Gift Card</h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
        </div>

        <div className='cardContent'>
          <div>
            <img src={redeemImg} alt="" />
          </div>
          <h3>Redeem Crypto Gift Card</h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
        </div>

        <div className='cardContent'>
          <div>
            <img src={designImg } alt="" />
            </div>
            <h3>Customise Gift Card Design</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptate pariatur soluta veritatis incidunt eos! Molestias dignissimos optio necessitatibus sunt.
          </div>
      </div>
    </div>
  )
}

export default Offer