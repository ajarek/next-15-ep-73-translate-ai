'use server'
import { GoogleGenerativeAI } from '@google/generative-ai'

async function translateText({
  text,
  targetLanguage,
  languageFrom = '',
}: {
  text: string
  targetLanguage: string
  languageFrom?: string
}) {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
  )
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
  const prompt = languageFrom
    ? `Translate the following text from ${languageFrom} to ${targetLanguage} : ${text}`
    : `Detect the language of the text and translate it into ${targetLanguage} : ${text}`
  const additional_prompt =
    'Just return the translated text. Do not add additional descriptions such as `Here are the translations`'

  try {
    const result = await model.generateContent(prompt + additional_prompt)
    return result.response.text()
  } catch (e) {
    console.error(e)
  }
  return "couldn't load translations"
}

export async function translate(formData: FormData) {
  const text = formData.get('text') as string | null
  const targetLanguage = formData.get('languageTo') as string | null
  const languageFrom = formData.get('languageFrom') as string | null

  if (!text || !targetLanguage) {
    return { translation: 'Missing required translation parameters' }
  }

  const translation = await translateText({
    text,
    targetLanguage,
    languageFrom: languageFrom || undefined,
  })

  return { translation }
}
