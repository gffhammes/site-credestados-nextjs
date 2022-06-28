import React, { useState } from 'react';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import { useWindowWidth } from '../../../utils/hooks/useWindowWidth';

/** 
* @function SliderHomeHeader
*/

export const SliderHomeHeader = () => {
  const windowWidth = useWindowWidth();

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const nextSlide = () => {
    if (state.activeIndex === 2) {
      setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    } else {
      setState({
        ...state,
        translate: (state.activeIndex + 1) * windowWidth,
        activeIndex: state.activeIndex + 1,
      })
    }
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      setState({
        ...state,
        translate: 2 * windowWidth,
        activeIndex: 2,
      });
    } else {
      setState({
        ...state,
        translate: (state.activeIndex - 1) * windowWidth,
        activeIndex: state.activeIndex - 1,
      })
    }
  }

  return (
    <div className='slider-container'>
      <Arrow direction='left' handleClick={prevSlide}/>
      <SliderContent
        translate={state.translate}
        transition={state.transition}
        width={(windowWidth * 3)}
      />
      <Arrow direction='right' handleClick={nextSlide}/>
    </div>
  )
}
