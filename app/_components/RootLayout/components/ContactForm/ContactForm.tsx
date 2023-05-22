'use client'

import {useState} from 'react'
import Button, {ButtonType, ButtonStyle} from '@/components/Button'
import TextInput, {TextInputType} from './components/TextInput'
import Textarea from './components/Textarea'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value={WEB3FORMS_PUBLIC_ACCESS_KEY} />
      <input type="hidden" name="subject" value="New Submission from dplgroup.com.au" />
      <input type="hidden" name="from_name" value="DPL website" />
      <input type="hidden" name="replyto" value="helloi@dplgroup.com.au" />
      <input type="checkbox" name="botcheck" style={{display: 'none'}} />
      <div className="md:flex md:gap-4 md:w-full">
        <TextInput type={TextInputType.Text} name="name" label="Name" required />
        <TextInput type={TextInputType.Email} name="email" label="Email" required />
        <TextInput type={TextInputType.Text} name="phone" label="Phone" required />
      </div>
      <Textarea name="message" label="Message" required></Textarea>
      <Button type={ButtonType.Submit} buttonStyle={ButtonStyle.Primary}>
        Get in touch
      </Button>
    </form>
  )
}

export default ContactForm
