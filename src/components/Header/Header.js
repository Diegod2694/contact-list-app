import React from 'react'
import './Header.scss'

import phoneLogo from './../../assets/phone-receiver.svg'

const Header = () => 
  <div className='component-header'>
    <div className='container-logo'>
      <img src={phoneLogo} alt="logo"/>
      <h1>The Contact List</h1>
    </div>
  </div>

export default Header