'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // const res = await signIn('credentials', {
      //   email,
      //   password,
      //   redirect: false,
      // })

      if (res.error) {
        setError('Invalid credentials')
        return
      }

      router.replace('dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-yellow-400">
        <h1 className="text-lg font-bold my-4 capitalize">sign in</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />

          <Link
            href="/dashboard"
            className="bg-green-600 hover:bg-zinc-200 duration-500 text-white capitalize font-bold px-6 py-2"
          >
            <h4 className="text-center">login</h4>
          </Link>

          {error && (
            <div className="bg-red-500 capitalize text-white w-fit text-sm py-1 px-3 rounded-md">
              {error}
            </div>
          )}

          <Link href={'/register'} className="text-sm mt-3 text-right">
            Don`t have an account?{' '}
            <span className="underline capitalize">sign up</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
