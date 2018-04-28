import React from 'react'
import './ContactListTable.scss'

import TableHeader from './TableHeader'
import ContactTable from './ContactTable'

const ContactListTable = () =>
  <div className='ContactListTable'>
    <TableHeader title='Lista De Contactos'/>
    <div className='divisor'></div>
    <div className='ContactList-container'>
      <ContactTable />
    </div>
  </div>

export default ContactListTable