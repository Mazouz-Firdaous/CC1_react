import React from 'react';
import './Homc.css';
import ContentLang from '../langue/ContentLangue';
import LanguageContextProvider from '../langue/LanguageContext';
import BtnLang from '../langue/BtnLang';
import { useContext } from 'react';

export default function Home() {
  return (
    <div>
      <LanguageContextProvider >
      <ContentLang />
      
      </LanguageContextProvider>
    </div>
  )
}
