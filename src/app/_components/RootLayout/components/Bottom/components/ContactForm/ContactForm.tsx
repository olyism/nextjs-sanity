'use client'

import {type FC, useState} from 'react'
import {useForm, FormProvider} from 'react-hook-form'
import cn from 'classnames'
import Container, {ContainerWidth} from '@/components/Container'
import TextInput, {TextInputType} from './components/TextInput'
import Textarea from './components/Textarea'
import Summary from './components/Summary'
import SubmitButton from './components/SubmitButton'

interface Props {
  email: string | null
  tel: string | null
}

const ContactForm: FC<Props> = ({email, tel}) => {
  const [isSent, setIsSent] = useState(false)
  const [isError, setIsError] = useState(false)

  const methods = useForm()
  const {
    handleSubmit,
    register,
    formState: {isLoading, isSubmitting, isValid},
  } = methods

  // @ts-ignore
  const onSubmit = async (formData) => {
    if (formData.botcheck) {
      return
    }

    const {name, email, phone, message} = formData

    const mailData = {
      to: email || process.env.CONTACT_EMAIL_ADDRESS,
      name,
      email,
      subject: 'New contact form submission from dplgroup.com.au',
      text: `From ${name}: ${message}. Email: ${email} ${phone ? `, Phone: ${phone})` : ''}`,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData),
      })

      const result = await res.json()

      if (result.success) {
        console.log('Email sent successfully')
        setIsSent(true)
      } else {
        console.error('Failed to send email:', result.message)
        setIsError(true)
      }
    } catch (error) {
      console.error('Error', error)
      setIsError(true)
    }
  }

  return (
    <section className="py-16 relative z-10" id="contact">
      <Container maxWidth={ContainerWidth.Prose}>
        <FormProvider {...methods}>
          <form
            className={cn(
              'p-6',
              'sm:p-8',
              'bg-white/90',
              'text-base-color',
              'rounded',
              'drop-shadow-lg'
            )}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="font-heading text-3xl font-bold my-4">Get in touch</h2>
            <Summary tel={tel} email={email} />
            <input
              {...register('botcheck')}
              type="checkbox"
              name="botcheck"
              style={{display: 'none'}}
            />
            <TextInput type={TextInputType.Text} name="name" label="Name" required />
            <div className="md:flex md:gap-4 md:w-full">
              <TextInput type={TextInputType.Email} name="email" label="Email" required />
              <TextInput type={TextInputType.Tel} name="phone" label="Phone" />
            </div>
            <Textarea name="message" label="Message" required></Textarea>
            <SubmitButton
              isLoading={isLoading}
              isSent={isSent}
              isError={isError}
              isSubmitting={isSubmitting}
              isValid={isValid}
            />
            {isError && (
              <div className="p-4 bg-red-100 border border-red text-red rounded mt-6">
                Something went wrong and the contact form could not be sent. Please get in touch
                directly with the contact details above.
              </div>
            )}
            {isSent && (
              <div className="p-4 bg-green-100 border border-green rounded mt-6">
                Your message has been sent. We&apos;ll reply to your email as soon as possible.
              </div>
            )}
          </form>
        </FormProvider>
      </Container>
    </section>
  )
}

export default ContactForm
