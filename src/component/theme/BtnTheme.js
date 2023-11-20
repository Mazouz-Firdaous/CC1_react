import React, {useContext} from 'react'
import './BtnTheme.css'
import {ThemeContext} from './ThemeContext'


export default function BtnTheme() {

    const {toggleTheme} = useContext(ThemeContext);
  return (
    <div>
          <label class="ui-switch"   >
            <input type="checkbox" onClick={toggleTheme}/>
            <div class="slider">
                <div class="circle"></div>
            </div>
            </label>
    </div>
  )
}