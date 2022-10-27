import React from 'react'
import './Brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

function Brand() {
  return (
    //This is main BrandDiv which has 5 div with image in it in flex-row
    <div className='gpt3__brand section_padding'>
      <div>
         <img src={google} alt="google" /> 
      </div>
      <div>
         <img src={slack} alt="slack" /> 
      </div>
      <div>
         <img src={atlassian} alt="atlasian" /> 
      </div>
      <div>
         <img src={dropbox} alt="dropbox" /> 
      </div>
      <div>
         <img src={shopify} alt="ahopify" /> 
      </div>
    </div>
  )
}

export default Brand