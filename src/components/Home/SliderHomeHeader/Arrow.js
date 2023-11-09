import React from 'react'

const Arrow = ({
  direction,
  handleClick
}) => {
  return (
    <div
      className='arrow'
      style={{
        left: (direction === 'left' ? '.25rem' : 'auto'),
        right: (direction === 'right' ? '.25rem' : 'auto')
      }}
      onClick={handleClick}
    >
      <img src={direction === 'right' ? '/images/arrow-right.svg' : '/images/arrow-left.svg' } alt='seta' />
    </div>
  )
}

export default Arrow
