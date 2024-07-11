import React from 'react'
import contentOne from "../../../../assets/Ellipse2.png"
import contentTwo from "../../../../assets/Ellipse3.png"
import contentThree from "../../../../assets/Ellipse4.png"
import "./Content.css"

const Content = () => {
  return (
    <div className='Content'>
      <div className='--Content-Header'>
        <h2>How Does It Work</h2>
        <h3>Here are 3 simple steps to use PayGifty</h3>
      </div>

      <div className='--content-Steps'>
        <div className='--Content-Steps-Info'>
          <img src={contentOne} alt="" />
          <h4>1</h4>
          <h3>Ready To Use Template</h3>
          <p>Add a personal message and choose a design for the gift card</p>
        </div>
        <div className='--Content-Steps-Info steps'>
          <img src={contentTwo} alt="" />
          <h4>2</h4>
          <h3>Choose Crypto Currency</h3>
          <p>Select the cryptocurrency you want to gift And  Choose the value of the gift card you want to buy</p>
        </div>
        <div className='--Content-Steps-Info step'>
          <img src={contentThree} alt="" />
          <h4>3</h4>
          <h3>Send Your Gift Card</h3>
          <p>Click on the 'create gift card' button and easily send your card to love ones.</p>
        </div>
      </div>
    </div>
  )
}

export default Content