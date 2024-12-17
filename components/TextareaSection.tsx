import { Textarea } from '@/components/ui/textarea'

const TextareaSection = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-6'>
      <div className=' flex flex-col items-start gap-2 '>
      <Textarea placeholder="Wpisz tutaj swoją wiadomość."  />
      </div>
      <div className=' flex flex-col items-start gap-2 '>
      <Textarea placeholder="Wpisz tutaj swoją wiadomość."  />
      </div>
    </div>
  )
}

export default TextareaSection
