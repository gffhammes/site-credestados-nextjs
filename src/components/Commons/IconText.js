import React from 'react'

export const IconText = ({ iconPath, title, text }) => {
  return (
    <div className="icon-text">
      <img src={iconPath} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default IconText
