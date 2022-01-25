import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque explicabo earum, nulla quo, molestiae quasi perspiciatis.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque explicabo earum, nulla quo, molestiae quasi perspiciatis.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque explicabo earum, nulla quo, molestiae quasi perspiciatis.",
    ],
    linkto: ["http://sales.b", "http://sales.m", "http://sales.s"],
    delay: [500, 0, 500],
  };

  const showBoxes = () =>
    priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">
            <span>{priceState.desc[index]}</span>
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{
                color: "#ffffff",
              }}
              link={priceState.linkto[index]}
            />
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};
export default Pricing;
