import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div
      className='menu-container'
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='background-image' />
      <div className='menu-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default MenuItem
