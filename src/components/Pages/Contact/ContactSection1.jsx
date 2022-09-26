import React from 'react'
import { contact } from '../../../store/contact'
import ContactSection2 from './ContactSection2'

function ContactSection1() {
  return (
    <div className='con-sec1'>
      <div className="container">
        <div className="row">
        {contact.map((contact)=>(
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 col-12">
              
                
                <div className="info">
                    <p>
                        <span>{contact.title}</span>
                        <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.desc}</a>
                        </p>
                </div>
</div>
              ))}
            
        </div>

        <ContactSection2/>
      </div>
    </div>
  )
}

export default ContactSection1