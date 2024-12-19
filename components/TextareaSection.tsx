"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { Mic } from "lucide-react"
import { translate } from "@/lib/translate"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"

const TextareaSection = () => {
  const [translation, setTranslation] = React.useState("")

  return (
    <form
      className='w-full grid grid-cols-2 gap-6'
      action={async (formData: FormData) => {
        await translate(formData)
        setTranslation((await translate(formData)).translation)
      }}
    >
      <div className=' flex flex-col items-start gap-2 '>
        <Select required name='languageFrom'defaultValue='Polski'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Wybierz Język' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Polski'>Polski</SelectItem>
            <SelectItem value='Angielski'>Angielski</SelectItem>
            <SelectItem value='Hiszpański'>Hiszpański</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder='Wpisz tutaj swoją wiadomość.'
          className=''
          name='text'
        />
      </div>
      <div className=' flex flex-col items-start gap-2 '>
      <Select required name='languageTo' defaultValue='Angielski'>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Wybierz Język'  />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Polski'>Polski</SelectItem>
            <SelectItem value='Angielski'>Angielski</SelectItem>
            <SelectItem value='Hiszpański'>Hiszpański</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder='Wpisz tutaj swoją wiadomość.'
          className=''
         defaultValue={translation}
        />
        </div>
      <div className='flex items-center gap-4'>
        <Button type='submit' className='w-fit'>
          translate
        </Button>
        <Button
          size={"icon"}
          className='bg-transparent text-black shadow-none hover:text-white rounded-full'
        >
          <Mic />
        </Button>
      </div>
    </form>
  )
}

export default TextareaSection
