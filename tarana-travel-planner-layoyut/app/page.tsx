'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send, MapPin, Sparkles, User, Bot, Loader2 } from 'lucide-react'
import { generateTravelResponse } from '@/lib/ai-service'
import { AdBanner } from '@/components/ads/ad-banner'
import { NativeAd } from '@/components/ads/native-ad'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm your AI travel assistant for the Philippines 🇵🇭\n\nI can help you with:\n• Travel itineraries and recommendations\n• Best places to visit\n• Local food and culture tips\n• Budget planning\n• Transportation advice\n\nWhat would you like to know about traveling in the Philippines?",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    // Check free tier limits
    if (messageCount >= 10) {
      setShowUpgradePrompt(true)
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setMessageCount(prev => prev + 1)

    try {
      const response = await generateTravelResponse(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I'm sorry, I encountered an error. Please try asking your question again.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "Where should I go in Palawan for 5 days?",
    "Best food to try in Manila?",
    "How much budget for Baguio weekend trip?",
    "Island hopping in Bohol itinerary"
  ]

  const shouldShowAd = (index: number) => {
    // Show ads every 4 messages, but not in the first 2 messages
    return index > 1 && (index + 1) % 4 === 0
  }

  const getAdType = (messageContent: string) => {
    const content = messageContent.toLowerCase()
    if (content.includes('hotel') || content.includes('accommodation') || content.includes('stay')) return 'hotel'
    if (content.includes('tour') || content.includes('island') || content.includes('activity')) return 'tour'
    if (content.includes('food') || content.includes('restaurant') || content.includes('eat')) return 'restaurant'
    if (content.includes('transport') || content.includes('flight') || content.includes('bus')) return 'transport'
    return 'hotel' // default
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar with Ads - Desktop Only */}
      <div className="hidden lg:block w-80 bg-white border-r p-4 space-y-4">
        <div className="sticky top-4 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Travel Deals</h3>
            <div className="space-y-3">
              <NativeAd type="hotel" />
              <NativeAd type="tour" />
              <NativeAd type="restaurant" />
            </div>
          </div>
          
          <AdBanner position="sidebar" />
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Upgrade to Premium</h4>
            <p className="text-sm text-purple-700 mb-3">
              Get unlimited messages and ad-free experience
            </p>
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">GalaGPT.ph</h1>
              <p className="text-sm text-gray-600">AI Travel Assistant for the Philippines</p>
            </div>
          </div>
          
          {/* Message Counter for Free Users */}
          <div className="text-sm text-gray-600">
            {messageCount}/10 messages used
          </div>
        </div>

        {/* Top Banner Ad */}
        <AdBanner position="top" className="mx-4 mt-4" />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={message.id}>
              <div className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'assistant' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                
                <Card className={`max-w-2xl p-4 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-12' 
                    : 'bg-white'
                }`}>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">
                    {message.content}
                  </div>
                  <div className={`text-xs mt-2 ${
                    message.type === 'user' ? 'text-purple-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </Card>

                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Show ads between messages */}
              {shouldShowAd(index) && message.type === 'assistant' && (
                <div className="mt-4 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <AdBanner position="between-messages" />
                    <div className="mt-2 lg:hidden">
                      <NativeAd type={getAdType(message.content)} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <Card className="max-w-2xl p-4 bg-white">
                <div className="flex items-center gap-2 text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </Card>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Upgrade Prompt Modal */}
        {showUpgradePrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Daily Limit Reached
              </h3>
              <p className="text-gray-600 mb-4">
                You've used all 10 free messages for today. Upgrade to Premium for unlimited conversations!
              </p>
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  onClick={() => window.location.href = '/pricing'}
                >
                  Upgrade to Premium
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowUpgradePrompt(false)}
                >
                  Maybe Later
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-4 pb-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-600 mb-3">Try asking:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question) => (
                  <Button
                    key={question}
                    variant="outline"
                    className="text-left justify-start h-auto p-3 text-sm"
                    onClick={() => setInput(question)}
                  >
                    <Sparkles className="h-4 w-4 mr-2 flex-shrink-0" />
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t p-4">
          <div className="max-w-4xl mx-auto flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                messageCount >= 10 
                  ? "Upgrade to Premium for unlimited messages..." 
                  : "Ask me anything about traveling in the Philippines..."
              }
              className="flex-1"
              disabled={isLoading || messageCount >= 10}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading || messageCount >= 10}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            GalaGPT.ph can make mistakes. Consider checking important information.
          </p>
        </div>

        {/* Bottom Banner Ad */}
        <AdBanner position="bottom" className="mx-4 mb-4" />
      </div>
    </div>
  )
}
