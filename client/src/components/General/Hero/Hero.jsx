
import React from "react";
import "../Hero/Hero.css";
import { heroImg } from "../../../../assets";


const Hero = () => {
  return (
    <div className="heroCon">
      <div>
        <h5 className="heroBig">
          With <span>PayGifty</span> Surprise your <br /> loved ones with
          affordable gifts <br />
          In An Easy Way
        </h5>

        <p>
          Make your loved one's day extra special by surprising them with a thoughtful and affordable gift. Whether it's for a birthday, anniversary, or just to show them how much you care, finding the perfect present doesn't have to break the bank.
        </p>

        <button>Get Started</button>
      </div>
      <div>
        <img src={heroImg} alt="heropic" className="heroPic" />
      </div>
    </div>
  );
};

export default Hero;
