import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10634.710279242658!2d37.8158774120125!3d55.92037988399355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5321cb05418c1%3A0xee598c60a98a474b!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQlNCy0L7RgNC10YYg0JrRg9C70YzRgtGD0YDRiyDQuNC80LXQvdC4INCcLtCYLtCa0LDQu9C40L3QuNC90LA!5e0!3m2!1sde!2sru!4v1642686288552!5m2!1sde!2sru"
        width="100%"
        height="550px"
        frameBorder="0"
        allowfullscreen
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
