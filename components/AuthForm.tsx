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
import { Loader2 } from "lucide-react"
import CustomInput from "./CustomInput"

type authForm = z.infer<typeof authFormSchema>

interface AuthFormProps {
  type: string
  // fulture props goes here
}


const AuthForm = ({type}: AuthFormProps) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

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

      setIsLoading(true)
      console.log(values)
      setIsLoading(false)
    
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
          className='text-26 font-ibm-plex-serif font-bold text-black-1'
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
              ? 'Please enter your details.'
              : 'Welcome back! Please enter your details.'
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
                name='email'
                label='Email'
                placeholder='Enter your email...'
              />

              <CustomInput
                control={form.control}
                name='password'
                label='Password'
                placeholder='******'
              />

              <div
                className="flex flex-col gap-4"
              >
                <Button type="submit" className='form-btn'
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Fragment>
                      <Loader2 
                        size={20}
                        className="animate-spin"
                      /> &nbsp;
                      Loading...
                    </Fragment>
                  ) : type === 'sign-in'
                    ? 'Sign In' : 'Sign-Up'
                  }
                </Button>
              </div>
            
            </form>
          </Form>

          <footer className='flex justify-center gap-1' >
            <p className='text-14 font-normal text-gray-600' >
              {
                type === 'sign-in'
                  ? 'Don\'t have an account?'
                  : 'Already have an account?'
              }
            </p>
              <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
               {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
          </footer>
        </Fragment>
      )}
    </section>
  )
}

export default AuthForm