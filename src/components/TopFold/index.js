import React from 'react'
import './topfold.css'
import Button from '../../common/Button'
const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
        <div className="tf-left">
            <div className="tf-heading">
                Discover collect, & sell <span className='heading-gradient'>Extraordinary</span> NFTs
            </div>
            <div className='tf-description'>
            The leading NFT Marketplace on EthereumHome to the next generation of digital creators. Discover the best FT collection.
            </div>
            <div className='tf-left-btns'>
                <Button btnType="PRIMARY" btnText="EXPLORE"/>
                <Button btnType="SECONDARY" btnText="create" customClass="tf-left-secondary-btn"/>
            </div>
            <div className='tf-left-infoStats'>
            <div className='tf-is-infoItem'>
                <div className='tf-infoItem-count'>200k+</div>
                <div className='tf-infoItem-label'>Collections</div>
            </div>
            <div className='tf-is-infoItem'>
                <div className='tf-infoItem-count'>10k+</div>
                <div className='tf-infoItem-label'>Artists</div>
            </div>
            <div className='tf-is-infoItem'>
                <div className='tf-infoItem-count'>423k+</div>
                <div className='tf-infoItem-label'>Community</div>
            </div>
            </div>
        </div>
        <div className="tf-right">
            <div className='tf-r-bg-blob'></div>
            <div className='tf-right-diamond'>
            <div className='tf-r-diamond-item absolute-center'>
                    <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gcs/files/22284fa002c7612a875381ab66b22abf.gif?auto=format&dpr=1&w=384'></img>
                </div>  
                <div className='tf-r-diamond-item absolute-center'>
                    <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/pg1Ze1i5_rZ9WHRGUbZb_HDGrFSe5sFARgI9wxRcfDtS83G-s2Z5RrRZrWIPBSYNV-TgDwLrrZr6sQFZcgPpWm9Wm9pDH6JRd4zu?auto=format&dpr=1&w=750'></img>
                </div>
            </div>
            <div className='tf-right-diamond'>
            <div className='tf-r-diamond-item absolute-center'>
                    <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/ISxpkDaPUArF27TCqCDM3Sk3GuKtW9WqQcBZjeiubfWBEOrmyuwOn5M4Z7GvrUe_8Ji7Jhj1Jk2I1tu0jH9OWb-I0uuYzcl7ayEUbKg?auto=format&dpr=1&w=750'></img>
                </div>
                <div className='tf-r-diamond-item absolute-center'>
                    <img className='tf-r-diamond-img' alt="diamond-banner" src='https://i.seadn.io/gae/cOcf8SG887j5ABOgo3EBL3sS2ugTjPNO4BDa8daAbGj5IKrS9yy0TpI4NLl6aSituYsExOufbGB1rYFB_wakRxKzKKDBvrIK_LJ2G6E?auto=format&dpr=1&w=750'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopFold