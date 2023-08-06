import React from 'react'
import './trendingcard.css'
const TrendingCard = (props) => {
    const { nft }=props;
  return (
    <div className='trending-card absolute-center'>
        <div className='tc-inner-wrapper'>
            <div className='tc-content'>
                <img alt={nft.user_name} src={nft.banner} className='tc-banner'></img>
                <div className='tc-user-info'>
                    <div className='tc-ui-left'>
                        <img alt={nft.user_name} src={nft.user_photo} className='tc-user-logo'></img>
                        <div>
                            <div className='tc-ui-username'>{nft.user_name}</div>
                            <div className='tc-ui-userhandle'>{nft.user_handle}</div>
                        </div>
                    </div>
                    <img className='tc-solana-logo' src='https://i.seadn.io/gae/2FZIaxPQNyuin3PPhdahayWiRuDZhh7Nu11cUstYiIjCw8QrsY8Y7VO3kHIrgfpQqxZysdIHBw6E0Ygs9fCapivDW91EyXemXb_FKcw?auto=format&dpr=1&w=750'></img>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default TrendingCard