import TextareaSection from '@/components/TextareaSection'

export default async function Home() {
  return (
    <main className='max-w-5xl mx-auto flex flex-col place-items-center min-h-screen  p-8 max-sm:p-4 gap-8'>
      <div className='flex flex-col place-items-center gap-6'>
        <h1 className='text-4xl text-center sm:text-5xl font-extrabold'>
          Tłumacz bez <span className='text-primary'>Trudu</span>
        </h1>
        <p className=' text-lg sm:text-xl text-center  '>
          Natychmiast przełamuj bariery językowe dzieki naszej zaawansowanej
          aplikacji do tłumaczenia.
          <br /> Wypróbuj teraz!
        </p>
      </div>
      <div className='flex flex-col place-items-center gap-6 w-full  bg-white rounded-lg shadow-md p-8'>
        <TextareaSection />
      </div>
    </main>
  )
}
