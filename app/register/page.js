import React from 'react'
import RegisterForm from '@/components/RegisterForm'
// import { getServerSession } from 'next-auth'
// import { redirect } from 'next/navigation'

export default function Register() {
  // const session = getServerSession()

  // if (!session) {
  //   redirect('/dashboard')
  // }
  return <RegisterForm />
}
