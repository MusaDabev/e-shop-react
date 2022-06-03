import React from 'react';
import subsLogo from '../../pictures/Drop_White.png';
import {AiOutlineMail} from 'react-icons/ai'

function Subscribe() {
  return (
    <div className='subscribe'> 
      <img className="subscribe-logo" src={subsLogo} alt="" />
      <p>Абонирайте се за нашите специални оферти</p>
      <form
        className="send-email"
        action="https://formsubmit.co/eminem_3@abv.bg"
        method="POST"
      >

        <input type="email" name="email" className="subscribe-input" placeholder="Твоят E-mail" />
        <input
          type="hidden"
          name="_next"
          value="http://127.0.0.1:5501/Pages/thankYouForSub.html"
        />
        <input type="hidden" name="_captcha" value="false"/>
        <button className="subs-btn"><AiOutlineMail style={{fontSize: "2rem"}}/></button>
      </form>
    </div>
  )
}

export default Subscribe
