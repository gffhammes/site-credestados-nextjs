import Link from 'next/link'
import React from 'react'
import { Button } from '../../Commons/Button'
import Image from '../../Commons/Image'

const Slide = ({ imgPath, h1, buttonText, buttonTarget, slideIndex }) => {
  return (
    <div className="slide">
      <Image
        className={`slide-${slideIndex}`}
        src={`/images/${imgPath}`}
        alt={h1}
      />
      <div className="cover" />
      <div className="content container">
        <h1>{h1}</h1>
        <Button variant="contained" href={buttonTarget} element={Link}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default Slide
