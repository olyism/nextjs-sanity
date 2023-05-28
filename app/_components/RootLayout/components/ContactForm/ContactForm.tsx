'use client'

import {FC} from 'react'
import {useForm, FormProvider} from 'react-hook-form'
import Button, {ButtonType, ButtonStyle} from '@/components/Button'
import TextInput, {TextInputType} from './components/TextInput'
import Textarea from './components/Textarea'
import contact from './contact'

interface Props {
  email?: string
}

const ContactForm: FC<Props> = ({email}) => {
  const methods = useForm()
  const {handleSubmit, register} = methods

  // @ts-ignore
  const onSubmit = async (formData) => {
    if (formData.botcheck) {
      return
    }

    const {from, phone, message} = formData

    const mailData = {
      from,
      to: email || 'hello@dplgroup.com.au',
      subject: 'New Submission from dplgroup.com.au',
      text: `${message}${phone ? ` (phone: ${phone})` : ''}`,
    }

    try {
      const req = await contact(mailData)

      if (req.status === 250) {
        console.log('success')
      }
    } catch (e) {
      console.log(e)
      console.log('error')
    }
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('botcheck')}
          type="checkbox"
          name="botcheck"
          style={{display: 'none'}}
        />
        <div className="md:flex md:gap-4 md:w-full">
          <TextInput type={TextInputType.Text} name="name" label="Name" required />
          <TextInput type={TextInputType.Email} name="from" label="Email" required />
          <TextInput type={TextInputType.Tel} name="phone" label="Phone" />
        </div>
        <Textarea name="message" label="Message" required></Textarea>
        <Button type={ButtonType.Submit} buttonStyle={ButtonStyle.Primary}>
          Get in touch
        </Button>
      </form>
    </FormProvider>
  )
}

export default ContactForm
