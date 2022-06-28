import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderParceiros extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 250,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 875,
          settings: {
              slidesToShow: 3,
          }
        },

        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
            }
        },
  ]
    };
    return (
      <div className='slider-parceiros'>
        <Slider {...settings}>
          <div>
            <img src={'/images/parceiro-01.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-02.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-03.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-04.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-05.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-06.webp'} alt="Parceiro" />
          </div>
          <div>
            <img src={'/images/parceiro-07.webp'} alt="Parceiro" />
          </div>
        </Slider>
      </div>
    );
  }
}