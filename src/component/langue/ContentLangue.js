import React from 'react'
import { ThemeContext } from '../theme/ThemeContext'
import { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import data from './dataLangue'
import BtnLang from './BtnLang'
import i1 from './imgcar/i1.PNG';
import i2 from './imgcar/i2.PNG';
import i3 from './imgcar/i3.PNG';
import i4 from './imgcar/i4.PNG';
import i5 from './imgcar/i5.PNG';

export default function ContentLang() {

  const {theme} = useContext(ThemeContext)
  console.log(theme)

  const {lang} = useContext(LanguageContext)

  return (
    <div>
        
    <div style={{margin: '0',display: 'flex',
    justifyContent: 'center',alignItems: 'center',minHeight: '100vh'}}>
      <div className="container ">
        <div className='row'>
        <div className='col-md-4'>
        <h1 style={{fontWeight: 'bolder' , fontFamily: '-moz-initial', textAlign: 'center' }}><br/>{data[lang].title} <br />{data[lang].txt}</h1>
        <BtnLang/>
        </div> 
        
        <div class="card b col-md-8" >
            <p >
            {data[lang].mot}  
            </p>
            <div className='container'>
              <div className='row'>
           <div className='card s col-md-2'>
              <img src={i1} alt="" />
        </div>
        <div className='card s col-md-2'>
              <img src={i2} alt="" />
        </div>
        <div className='card s col-md-2'>
              <img src={i3} alt="" />
        </div>
        <div className='card s col-md-2'>
              <img src={i4} alt="" />
        </div>
        <div className='card s col-md-2'>
              <img src={i5} alt="" />
        </div>
        </div></div>
        
          </div>
          </div>
      </div>
    </div>
    </div>
  )
}