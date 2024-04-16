import express from 'express'
import { createChatCompletion } from '../chatbot.ts'

const router = express.Router()
export default router

/// /api/v1/chatbot
router.post('/', async (req, res) => {
  const { chats, currentLocation, currentWeather } = req.body
  // const { chats, currentWeather, currentLocation } = req.body
  console.log(chats)
  try {
    // Call the function from your chatbot file to get the chat response
    const chatResponse = await createChatCompletion(
      chats,
      currentLocation,
      currentWeather,
    )

    // return chat response
    res.status(200).json(chatResponse)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
