import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const audioFile = formData.get('audio')

  if (!audioFile || !(audioFile instanceof File)) {
    return Response.json({ error: 'No audio file uploaded' }, { status: 400 })
  }

  // Convert File to base64
  const arrayBuffer = await audioFile.arrayBuffer()
  const base64Data = Buffer.from(arrayBuffer).toString('base64')

  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY ?? ''
  )
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  })

  try {
    // Generate content using a prompt and the metadata of the uploaded file.
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: 'audio/wav',
          data: base64Data,
        },
      },
      { text: 'Please transcribe the audio.' },
    ])

    return Response.json({ result: result.response.text() })
  } catch (error) {
    return Response.json({ error })
  }
}
