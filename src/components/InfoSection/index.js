import React from 'react'
import './infosection.css'
import { INFO_ITEMS } from '../Data/infoitem'
import InfoItem from './infoItem'
const InfoSection = () => {
  return (
    <div className='infosection'>
        <div className='is-heading absolute-center'>
            <span className="heading-gradient">Create and sell your NFT</span>
        </div>
        <div className='is-items-container'>
            {INFO_ITEMS.map((_infoItem)=><InfoItem item={_infoItem} />)}
        </div>
    </div>
  )
}

export default InfoSection