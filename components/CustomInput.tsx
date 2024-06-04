import { z } from 'zod'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { authFormSchema } from '@/lib/utils'
import { Control, FieldPath } from 'react-hook-form'

type authFiled = z.infer<typeof authFormSchema>

// type inputNames = <z.infer<typeof authFormSchema>>
interface CustomInputProps {
  control: Control<authFiled>, 
  name: FieldPath<authFiled>,
  label: string,
  placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel className='form-label' >
            {label}
          </FormLabel>
          <div className='flex w-full flex-col' >
            <FormControl>
              <Input
                placeholder={placeholder}
                className='input-class'
                type={name}
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message' />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput