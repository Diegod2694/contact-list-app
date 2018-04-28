import React from 'react'
import './ContactListTable.scss'

import Modal from './Modal'

const TableHeader = ({title}) =>
  <div className='TableHeader'>
    <div className='title-container'>
      <h3>{title}</h3>
    </div>
    <div className='items-container'>
      <div className='input-container'>
        <input type='text' />
      </div>
      <button className='add-contact-button'>+</button>
      <Modal />
    </div>
  </div>

export default TableHeader