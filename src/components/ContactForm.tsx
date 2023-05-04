'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Banner, { BannerData } from './Banner';
import { sendContactEmail } from '@/utils/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: ''
}

export default function ContactForm() {

  const [form, setForm] = useState<Form>({
    from: '',
    subject: '',
    message: ''
  })

  const [banner, setBanner] = useState<BannerData | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setForm( prev => ({...prev, [name]: value}))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    sendContactEmail(form)
    .then( () => {
      setBanner({
        message: '메일을 발송했습니다.',
        state: "success"
      })
      setForm(DEFAULT_DATA)
    })
    .catch( ()=>{
      setBanner({
        message: '메일 발송에 실패했습니다.',
        state: "error"
      })
    }).finally( ()=>{
      setTimeout( ()=>{
        setBanner(null)
      }, 3000)
    })

  }

  return (
    <section className='max-w-md w-full'>
    { banner && <Banner banner={banner}/>}
    <form onSubmit={onSubmit} className='w-full flex flex-col gap-2 my-4 p-4 bg-stone-900 rounded-xl text-white'>
      <label htmlFor='from' className='font-semibold'>Your Email</label>
      <input type='email' id="from" name='from' required autoFocus value={form.from}
      className='text-black'
      onChange={onChange}></input>

      <label htmlFor='subject' className='font-semibold'>Subject</label>
      <input type='text' id="subject" name='subject' required value={form.subject}
      className='text-black'
      onChange={onChange}></input>

      <label htmlFor='message' className='font-semibold'>Message</label>
      <textarea rows={10} id="message" name='message' required value={form.message}
      onChange={onChange} className='text-black'></textarea>
      <button className='bg-sky-300 text-black font-bold hover:bg-sky-400'>Submit</button>
    </form>
    </section>
  )
}
