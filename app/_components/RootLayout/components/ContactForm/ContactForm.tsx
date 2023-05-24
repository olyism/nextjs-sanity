'use client'

import {useForm, FormProvider} from 'react-hook-form'
import Button, {ButtonType, ButtonStyle} from '@/components/Button'
import TextInput, {TextInputType} from './components/TextInput'
import Textarea from './components/Textarea'

const ContactForm = () => {
  const methods = useForm()
  const {handleSubmit, register} = methods

  const onSubmit = (data) => {
    if (data.botcheck) {
      return
    }

    console.log(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="subject" value="New Submission from dplgroup.com.au" />
        <input type="hidden" name="from_name" value="DPL website" />
        <input type="hidden" name="replyto" value="helloi@dplgroup.com.au" />
        <input
          {...register('botcheck')}
          type="checkbox"
          name="botcheck"
          style={{display: 'none'}}
        />
        <div className="md:flex md:gap-4 md:w-full">
          <TextInput type={TextInputType.Text} name="name" label="Name" required />
          <TextInput type={TextInputType.Email} name="email" label="Email" required />
          <TextInput type={TextInputType.Text} name="phone" label="Phone" />
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
