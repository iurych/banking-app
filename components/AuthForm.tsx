'use client'
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import { authFormSchema } from "@/lib/utils"
import CustomInput from "./CustomInput"




type authForm = z.infer<typeof authFormSchema>

interface AuthFormProps {
  type: string
  // fulture props goes here
}


const AuthForm = ({type}: AuthFormProps) => {
  const [user, setUser] = useState(null)

  // define a form
  const form = useForm<authForm>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email:'',
      password:''
    }
  })

  // define a submite handler
  const onSubmit = async (values: authForm) => {
    console.log(values)
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8" >
      <Link href="/" className="flex cursor-pointer items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={34}
          height={34}
          alt="Horizon logo"
        />
        <h1
          className='text-26 font-ibm-plex-serif font-bold text-tblack-1'
          >Horizon
        </h1>
      </Link>

      <div className="flex flex-col gap-1 md:gap-3" >
        <h1 className="text-24 lg:text-36 font-semibold text-gary-900" >
          {user
            ? 'Link Account'
            : type === 'sign-in'
              ? 'Sign In'
              : "Sign Up"
          }
          <p className="text-16 font-normal text-gray-600" >
            {user
              ? 'Link your account to get started'
              : 'Please enter your details'
            }
          </p>
        </h1>
      </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4" >
          {/* PlaidLink */}
        </div>
      ) : (
        <Fragment>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <CustomInput
                control={form.control}
                name='username'
                label='Email'
                placeholder='Enter your email...'
              />

              <CustomInput
                control={form.control}
                name='password'
                label='Password'
                placeholder='******'
              />
            
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </Fragment>
      )}
    </section>
  )
}

export default AuthForm