import React from 'react'

function Image({ src, alt }) {
  return (
    <picture>
      <source srcSet={`${src}-1920.webp`} media="(min-width: 800px)" />
      <img src={`${src}-400.webp`} alt={alt} />
      <img src={`${src}.webp`} alt={alt} />
    </picture>
  )
}

export default Image