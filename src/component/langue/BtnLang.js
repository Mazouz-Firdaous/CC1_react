import React, {useContext} from 'react'
import FrenchFlag from './franceflag.svg'
import EnglishFlag from './unitedflag.svg'
import ItalianFlag from './italyflag.svg'
import {LanguageContext} from './LanguageContext'



export default function BtnLang() {

    const {lang,setLang} = useContext(LanguageContext)
  return (
    <div className='container-langs'>
        <img onClick={() => setLang('FR')} src={FrenchFlag} style={{width: '252px' , height:'25px' }}/>
        <img onClick={() => setLang('EN')} src={EnglishFlag} style={{width: '252px' , height:'25px' }}/>
        <img onClick={() => setLang('IT')} src={ItalianFlag} style={{width: '252px' , height:'25px' }}/>
</div>
  )
}