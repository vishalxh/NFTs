import React from 'react'
import './infoitem.css'
const InfoItem = (props) => {
    const {item}=props
  return (
    <div className='info-item absolute-center'>
        <img className='ii-icon' src={item.logo}></img>
        <div className='ii-title'>
            {item.section_title}
        </div>
        <div className='ii-description'>
            {item.description}
        </div>
    </div>
  )
}

export default InfoItem