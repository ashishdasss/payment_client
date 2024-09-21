import React, {useState} from "react";
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import { base_url } from "./App";

function Home() {

    const [captchaValue, setCaptchaValue] = useState(null);
    const HandleSubmit = async (e) => {
      e.preventDefault();

      if (!captchaValue) {
        alert('Please verify the captcha');
        return;
      }

      let res = await axios.post(`${base_url}/payment`, {
        'captcha': captchaValue
      });
      console.log(res);
      if (res && res.data) {
        let link = res.data.links[1].href;
        window.location.href = link;
      }
    };
    
    const onChange = (value)=>{
        setCaptchaValue(value);
    };
  
    return (
      <div className="container home-container">
        <h1>PayPal Payment Gateway</h1>
        <p>
          Welcome to our online payment portal. You can make secure payments via PayPal using the button below. Your transaction will be processed securely, and you will receive a confirmation on success.
        </p>
        <p className="info-text">
          Please click the button to proceed with your PayPal payment. The total amount is $1.00 for the demo transaction.
        </p>
        <div className="recaptcha-container">
        <ReCAPTCHA
          sitekey="6LfyDEsqAAAAAMki_xAhNDa7Zhkf1jKJtPgmWZfl"
          onChange={onChange}
        />
      </div>
        <button onClick={HandleSubmit}>Buy Now</button>
      </div>
    );
  }
  
  export default Home;
  