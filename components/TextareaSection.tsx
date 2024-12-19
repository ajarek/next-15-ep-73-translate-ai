"use client"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button"
import { Mic } from "lucide-react"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TextareaSection = () => {
   const [text1, setText1] = useState("")
   const [text2, setText2] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const textareaElement1 = form.elements.namedItem('text1') as HTMLTextAreaElement
    setText2(textareaElement1.value)
    textareaElement1.value = ''
  }

  return (
    <form className='w-full grid grid-cols-2 gap-6' onSubmit={handleSubmit}>
      <div className=' flex flex-col items-start gap-2 '>
      <Select required>
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
          name="text1"
          defaultValue={text1}
        />
      </div>
      <div className=' flex flex-col items-start gap-2 '>
        <Select required>
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
          name="text2"
          defaultValue={text2}
        />
      </div>
      <div className='flex items-center gap-4'>
        <Button className='w-fit'>translate</Button>
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
