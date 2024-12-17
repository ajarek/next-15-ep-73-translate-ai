import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TranslationSection = () => {
  return (
  
      <div className='w-full grid grid-cols-2 gap-6'>
        <div className=' flex flex-col items-start gap-2 '>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Wybierz Język' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Polski'>Polski</SelectItem>
              <SelectItem value='Angielski'>Angielski</SelectItem>
              <SelectItem value='Hiszpański'>Hiszpański</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className=' flex flex-col items-start gap-2 '>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Wybierz Język' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Polski'>Polski</SelectItem>
              <SelectItem value='Angielski'>Angielski</SelectItem>
              <SelectItem value='Hiszpański'>Hiszpański</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
   
  )
}

export default TranslationSection
