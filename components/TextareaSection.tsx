'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { translate } from '@/lib/translate'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import SpeechToText from './SpeechToText'

const TextareaSection = () => {
  const [translation, setTranslation] = React.useState('')
  const formRef = React.useRef<HTMLFormElement>(null)
  const [transcript, setTranscript] = React.useState<string>('')
  const [language, setLanguage] = React.useState<string>('Angielski')

  return (
    <form
      ref={formRef}
      className='w-full grid grid-cols-2 max-sm:grid-cols-1 gap-6'
      action={async (formData: FormData) => {
        await translate(formData)
        setTranslation((await translate(formData)).translation)

        formRef.current?.reset()
      }}
    >
      <div className=' flex flex-col items-start gap-2 '>
        <Select
          required
          name='languageFrom'
          defaultValue='Polski'
          aria-label='Wybierz Język'
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Wybierz Język' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Polski' aria-label='Polski'>Polski</SelectItem>
            <SelectItem value='Angielski' aria-label='Angielski'>Angielski</SelectItem>
            <SelectItem value='Hiszpański' aria-label='Hiszpański'>Hiszpański</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder='Wpisz tutaj swoją wiadomość.'
          className=''
          name='text'
          defaultValue={transcript}
          aria-label='Wpisz tutaj swoją wiadomość.'
        />
      </div>
      <div className=' flex flex-col items-start gap-2 '>
        <Select
          required
          name='languageTo'
          defaultValue='Angielski'
          onValueChange={(value) => setLanguage(value)}
          aria-label='Wybierz Język'
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Wybierz Język' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Polski' aria-label='Polski'>Polski</SelectItem>
            <SelectItem value='Angielski' aria-label='Angielski'>Angielski</SelectItem>
            <SelectItem value='Hiszpański' aria-label='Hiszpański'>Hiszpański</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder='Wpisz tutaj swoją wiadomość.'
          className=''
          defaultValue={translation}
          aria-label='Wpisz tutaj swoją wiadomość.'
        />
      </div>
      <div className='flex items-center gap-4'>
        <Button
          type='submit'
          className='w-fit'
          aria-label='Przetłumacz'
        >
          translate
        </Button>
        {language === 'Angielski' ? (
          <SpeechToText setTranscript={setTranscript} />
        ) : null}
      </div>
    </form>
  )
}

export default TextareaSection
