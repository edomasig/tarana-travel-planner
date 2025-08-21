'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Send, MapPin, Sparkles, User, Bot, Loader2, Download, Share } from 'lucide-react'
import { generateTravelResponse } from '@/lib/ai-service'
import { AdBanner } from '@/components/ads/ad-banner'
import { NativeAd } from '@/components/ads/native-ad'
import { KlookWidget } from '@/components/affiliate/klook-widget'
import { FallbackAgodaBanner } from '@/components/affiliate/fallback-agoda-banner'
import { AgodaBadge } from '@/components/affiliate/agoda-badge'
import { trackTravelPlanRequest, trackConversationSave } from '@/lib/gtm-tracking'
import { AgodaResponsiveSearchBox } from '@/components/affiliate/agoda-search-box'
import { FloatingTagaytaySearch } from '@/components/affiliate/floating-agoda-search'
import { saveConversationsToCookies, loadConversationsFromCookies, getConversationById } from '@/lib/cookie-utils'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Message {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

// Reduce excessive blank lines in AI markdown output
const tightenMarkdown = (md: string) => md
  .replace(/\n{3,}/g, '\n\n') // collapse 3+ newlines
  .replace(/\n\s+\n/g, '\n\n') // remove whitespace-only lines
  .trim()

export default function ChatPage() {
  try {
    return <ChatPageComponent />
  } catch (error) {
    console.error('ChatPage error:', error)
    return <ChatPageError error={error} />
  }
}

function ChatPageError({ error }: { error: any }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          Please try refreshing the page or go back to the home page.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

function ChatPageComponent() {
  // Check for essential browser APIs on iPad
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const missingAPIs = []
      
      // Check for essential APIs
      if (!window.fetch) missingAPIs.push('fetch')
      if (!window.Promise) missingAPIs.push('Promise')
      if (!window.console) missingAPIs.push('console')
      if (!document.querySelector) missingAPIs.push('querySelector')
      if (!document.addEventListener) missingAPIs.push('addEventListener')
      
      if (missingAPIs.length > 0) {
        console.warn('Missing browser APIs:', missingAPIs)
      }
      
      // Log browser information for debugging
      const browserInfo = {
        userAgent: navigator.userAgent,
        vendor: navigator.vendor,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        language: navigator.language,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints,
        hardwareConcurrency: navigator.hardwareConcurrency
      }
      
      console.log('Browser info:', browserInfo)
      setDebugInfo((prev: any) => ({ ...prev, browser: browserInfo }))
    }
  }, [])

  // Add global error handler for unhandled errors
  useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      console.error('Global error caught:', event.error)
      console.error('Error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      })
    }
    
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason)
    }
    
    window.addEventListener('error', handleGlobalError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    
    return () => {
      window.removeEventListener('error', handleGlobalError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  const [messages, setMessages] = useState<Message[]>(
    [
      {
        id: '1',
        type: 'assistant',
        content:
          "👋 **Kumusta! I'm GalaGPT.ph, your Filipino travel assistant!**\n\nI specialize in creating personalized travel itineraries for the Philippines. I can help you with:\n\n🗺️ **Complete day-by-day itineraries**\n💰 **Budget planning & cost estimates**\n🚌 **Transportation advice**\n🍽️ **Local food recommendations**\n🏖️ **Best destinations & activities**\n💡 **Local tips & cultural insights**\n\nJust tell me where you want to go, how long you're staying, or what kind of experience you're looking for!",
        timestamp: new Date()
      }
    ]
  )
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showDebug, setShowDebug] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const autoSavedRef = useRef(false)
  const autoPromptRef = useRef(false)

  useEffect(() => { 
    try {
      setMounted(true) 
      
      // Enhanced iOS detection and debugging
      if (typeof window !== 'undefined') {
        // Log device information for debugging
        const deviceInfo = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          maxTouchPoints: navigator.maxTouchPoints,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        }
        console.log('Device info:', deviceInfo)
        
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
        
        if (isIOS) {
          console.log('iOS device detected, applying fixes')
          
          const setVh = () => {
            try {
              const vh = window.innerHeight * 0.01
              document.documentElement.style.setProperty('--vh', `${vh}px`)
              console.log('Viewport height set:', vh)
            } catch (e) {
              console.warn('VH calculation failed:', e)
            }
          }
          
          setVh()
          
          // Use passive listeners for better performance
          window.addEventListener('resize', setVh, { passive: true })
          window.addEventListener('orientationchange', () => {
            setTimeout(setVh, 100) // Delay for orientation change
          }, { passive: true })
          
          return () => {
            window.removeEventListener('resize', setVh)
            window.removeEventListener('orientationchange', setVh)
          }
        }
      }
    } catch (error) {
      console.error('iOS setup failed:', error)
      // Continue without iOS-specific fixes
    }
  }, [])

  const formatTime = (timestamp: Date) => {
    if (!mounted) return ''
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  useEffect(() => { scrollToBottom() }, [messages])

  const handleSendMessage = async (override?: string) => {
    const text = (override ?? input).trim()
    if (!text || isLoading) return
    if (messageCount >= 10) { setShowUpgradePrompt(true); return }

    // Track travel plan requests
    trackTravelPlanRequest(text, 'unknown', 'free_tier')

    const userMessage: Message = { id: Date.now().toString(), type: 'user', content: text, timestamp: new Date() }
    setMessages(prev => [...prev, userMessage])
    if (!override) setInput('')
    else setInput('')
    setIsLoading(true)
    setMessageCount(prev => prev + 1)
    try {
      const response = await generateTravelResponse(text)
      const cleaned = tightenMarkdown(response)
      const assistantMessage: Message = { id: (Date.now() + 1).toString(), type: 'assistant', content: cleaned, timestamp: new Date() }
      setMessages(prev => [...prev, assistantMessage])
    } catch {
      const errorMessage: Message = { id: (Date.now() + 1).toString(), type: 'assistant', content: "I'm sorry, I encountered an error. Please try again.", timestamp: new Date() }
      setMessages(prev => [...prev, errorMessage])
    } finally { setIsLoading(false) }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage() } }

  const isItinerary = (content: string) => content.includes('Day 1') || content.includes('Day 2') || content.includes('Budget') || content.includes('₱')

  const saveItinerary = (content: string) => {
    try {
      const text = content.replace(/\*\*/g, '').replace(/🏝️|🏔️|🏙️|🏄|💰/g, '')
      const itineraryText = `GalaGPT.ph Travel Itinerary\n\n${text}\n\nGenerated by GalaGPT.ph - Your AI Travel Assistant for the Philippines`
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(itineraryText).then(() => {
          alert('Itinerary copied to clipboard!')
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement('textarea')
          textArea.value = itineraryText
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
          alert('Itinerary copied to clipboard!')
        })
      } else {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement('textarea')
        textArea.value = itineraryText
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        alert('Itinerary copied to clipboard!')
      }
    } catch (error) {
      console.error('Copy failed:', error)
      alert('Unable to copy to clipboard. Please copy the text manually.')
    }
  }

  const saveConversation = (silent = false) => {
    if (messages.length <= 1) return
    const conversationTitle = messages[1]?.content.slice(0, 50) + (messages[1]?.content.length > 50 ? '...' : '') || 'Travel Conversation'
    const conversation = {
      id: Date.now().toString(),
      title: conversationTitle,
      preview: messages[messages.length - 1]?.content.slice(0, 100) + '...' || 'Travel conversation',
      messageCount: messages.length - 1,
      createdAt: new Date().toISOString(),
      lastMessage: messages[messages.length - 1]?.content.slice(0, 80) + '...' || '',
      messages: messages
    }
    const savedConversations = loadConversationsFromCookies()
    if (savedConversations.length > 0 && savedConversations[0]?.lastMessage === conversation.lastMessage) {
      savedConversations[0] = conversation
    } else { savedConversations.unshift(conversation) }
    const success = saveConversationsToCookies(savedConversations)
    
    // Track conversation save
    if (success) {
      trackConversationSave(conversation.messageCount, conversation.id)
    }
    
    if (success) {
      try { if (typeof window !== 'undefined') localStorage.setItem('savedConversations', JSON.stringify(savedConversations)) } catch {}
      if (!silent) alert('Conversation saved!')
    } else if (!silent) { alert('Error saving conversation.') }
  }

  useEffect(() => { if (messages.length > 1 && !autoSavedRef.current) { saveConversation(true); autoSavedRef.current = true } }, [messages.length])

  const suggestedQuestions = [
    'Where should I go in Palawan for 5 days?',
    'How much is the budget for a Baguio weekend trip?',
    'Best places to visit in Cebu for 3 days?',
    'Island hopping in Bohol itinerary'
  ]

  const shouldShowAd = (index: number) => index > 1 && (index + 1) % 4 === 0 && mounted
  const getAdType = (messageContent: string) => {
    const content = messageContent.toLowerCase()
    if (content.includes('hotel') || content.includes('accommodation') || content.includes('stay')) return 'hotel'
    if (content.includes('tour') || content.includes('island') || content.includes('activity')) return 'tour'
    if (content.includes('food') || content.includes('restaurant') || content.includes('eat')) return 'restaurant'
    if (content.includes('transport') || content.includes('flight') || content.includes('bus')) return 'transport'
    return 'hotel'
  }

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const convId = params.get('convId')
      const prompt = params.get('prompt')
      if (convId) {
        const conv = getConversationById(convId)
        if (conv?.messages?.length) {
          const restored = conv.messages.map((m: any) => ({ ...m, timestamp: typeof m.timestamp === 'string' ? new Date(m.timestamp) : m.timestamp }))
          setMessages(restored)
        }
      } else if (prompt && messages.length === 1 && !autoPromptRef.current) {
        autoPromptRef.current = true
        handleSendMessage(prompt)
      }
    } catch (e) { console.error('Error restoring conversation from URL:', e) }
  }, [])

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex items-center gap-3">
          <Loader2 className="h-6 w-6 animate-spin text-purple-600" />
          <span className="text-gray-600">Loading GalaGPT.ph...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen md:h-screen bg-gray-50 overflow-hidden w-full max-w-full">
      <div className="hidden xl:block w-80 bg-white border-r border-gray-200 flex-shrink-0 max-w-80">
        <div className="sticky top-0 p-4 space-y-5 overflow-y-auto overflow-x-hidden max-h-screen scrollbar-thin w-full">
          {/* Hotel Search Section */}
          <div className="w-full max-w-full">
            <h3 className="font-semibold text-gray-900 mb-3">🏨 Find Hotels</h3>
            <div className="w-full max-w-full overflow-hidden">
              <AgodaResponsiveSearchBox 
                cityCode="18218" 
                destinationName="Tagaytay, Philippines"
              />
            </div>
          </div>
          
          {/* Travel Activities Section */}
          <div className="w-full max-w-full">
            <h3 className="font-semibold text-gray-900 mb-3">🎯 Activities</h3>
            <div className="min-h-[200px] w-full max-w-full overflow-hidden">
              <KlookWidget />
            </div>
          </div>
          
          {/* Restaurant Recommendations */}
          <div className="text-center w-full max-w-full">
            <h3 className="font-semibold text-gray-900 mb-3 text-sm">🍽️ Dining</h3>
            <div className="w-full max-w-full overflow-hidden">
              <NativeAd type="restaurant" />
            </div>
          </div>
          
          {/* Partner Badge */}
          <div className="text-center w-full max-w-full pt-2">
            <AgodaBadge size="small" className="opacity-80" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <div className="bg-white border-b border-gray-200 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="h-3 w-3 md:h-5 md:w-5 text-white" />
            </div>
            <div>
              <h1 className="text-sm md:text-base font-semibold text-gray-900">GalaGPT.ph</h1>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">AI Travel Assistant for the Philippines</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
           
            {messages.length > 1 && (
              <Button size="sm" variant="outline" onClick={() => saveConversation()} className="text-xs flex">
                <Download className="h-3 w-3 mr-1" />
                Save Chat
              </Button>
            )}
            <div className="bg-purple-50 border border-purple-200 rounded-lg px-2 md:px-3 py-1 md:py-2 flex-shrink-0">
              <div className="text-xs md:text-sm text-purple-700 font-medium">{messageCount}/10 messages used</div>
              <div className="text-xs text-purple-600">Free tier</div>
            </div>
          </div>
        </div>

        <div className="block md:hidden flex-shrink-0"><AdBanner position="top" className="px-2 pt-2" /></div>
        <div className="hidden md:block flex-shrink-0"><AdBanner position="top" className="mx-4" /></div>

        {/* Debug Overlay */}
        {showDebug && (
          <div className="bg-yellow-50 border-b border-yellow-200 p-2">
            <div className="text-xs font-mono">
              <div className="font-bold mb-1">Debug Info (iPad Testing)</div>
              <div>User Agent: {debugInfo.browser?.userAgent || 'Loading...'}</div>
              <div>Platform: {debugInfo.browser?.platform || 'Loading...'}</div>
              <div>Touch Points: {debugInfo.browser?.maxTouchPoints || 'N/A'}</div>
              <div>Vendor: {debugInfo.browser?.vendor || 'Loading...'}</div>
              <div>Online: {debugInfo.browser?.onLine ? 'Yes' : 'No'}</div>
              <div>Cookies: {debugInfo.browser?.cookieEnabled ? 'Enabled' : 'Disabled'}</div>
              <div>Language: {debugInfo.browser?.language || 'N/A'}</div>
              <div>Mounted: {mounted ? 'Yes' : 'No'}</div>
              <div>Message Count: {messageCount}</div>
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-3 md:space-y-4 min-h-0 pb-40 md:pb-48 pb-[env(safe-area-inset-bottom)]">
          {messages.map((message, index) => (
            <div key={message.id}>
              <div className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.type === 'assistant' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                )}
                <Card className={`max-w-2xl w-full p-3 sm:p-3 ${message.type === 'user' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-4 sm:ml-12' : 'bg-white'} overflow-hidden`}>
                  {message.type === 'assistant' ? (
                    <div className="whitespace-pre-wrap break-words prose prose-tight prose-sm md:prose-base max-w-none tracking-tight prose-headings:mt-2 prose-headings:mb-1 prose-p:my-1 prose-li:my-[2px] prose-ul:my-1 prose-ol:my-1 prose-p:text-gray-700 prose-li:marker:text-blue-600 prose-strong:text-gray-900 prose-code:text-purple-600">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className="whitespace-pre-wrap break-words text-sm leading-snug tracking-tight">{message.content}</div>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <div className={`text-[10px] md:text-xs ${message.type === 'user' ? 'text-purple-100' : 'text-gray-500'}`} suppressHydrationWarning>{formatTime(message.timestamp)}</div>
                    {message.type === 'assistant' && isItinerary(message.content) && (
                      <div className="flex gap-1.5">
                        <Button size="sm" variant="outline" onClick={() => saveItinerary(message.content)} className="text-[10px] h-6 px-2">
                          <Download className="h-3 w-3 mr-1" />Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={async () => { 
                          try {
                            if (navigator.share && typeof navigator.share === 'function') { 
                              await navigator.share({ 
                                title: 'My Philippines Travel Itinerary', 
                                text: message.content.replace(/\*\*/g, ''), 
                                url: window.location.href 
                              })
                            } else { 
                              saveItinerary(message.content) 
                            } 
                          } catch (error) {
                            console.log('Share failed, falling back to copy:', error)
                            saveItinerary(message.content)
                          }
                        }} className="text-[10px] h-6 px-2">
                          <Share className="h-3 w-3 mr-1" />Share
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              {shouldShowAd(index) && message.type === 'assistant' && (
                <div className="mt-3 flex justify-center">
                  <div className="max-w-2xl w-full">
                    <AdBanner position="between-messages" />
                    <div className="mt-1.5 lg:hidden">
                      <NativeAd type={getAdType(message.content)} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0"><Bot className="h-4 w-4 text-white" /></div>
              <Card className="max-w-2xl w-full p-3 sm:p-4 bg-white">
                <div className="flex items-center gap-2 text-gray-600"><Loader2 className="h-4 w-4 animate-spin" /><span className="text-sm">Thinking...</span></div>
              </Card>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showUpgradePrompt && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Limit Reached</h3>
              <p className="text-gray-600 mb-4">You've used all 10 free messages for today. Upgrade to Premium for unlimited conversations!</p>
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" onClick={() => window.location.href = '/pricing'}>Upgrade to Premium</Button>
                <Button variant="outline" onClick={() => setShowUpgradePrompt(false)}>Maybe Later</Button>
              </div>
            </Card>
          </div>
        )}

        {/* Suggested questions temporarily disabled */}
        {/**
        {messages.length === 1 && (
          <div className="px-4 pb-44 md:pb-56 pb-[env(safe-area-inset-bottom)] flex-shrink-0">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-gray-600 mb-3">Try asking:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suggestedQuestions.map(question => (
                  <Button key={question} variant="outline" className="text-left justify-start h-auto p-3 text-sm" onClick={() => setInput(question)}>
                    <Sparkles className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{question}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
        */}
        {/* End suggested questions */}

        <div className="fixed inset-x-0 bottom-0 z-40 pointer-events-none">
          <div className="pointer-events-none absolute inset-x-0 bottom-full h-10 bg-gradient-to-t from-gray-50 to-transparent" />
          <div className="mx-auto max-w-3xl w-full px-3 pb-3 md:pb-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-md p-2 md:p-3 pointer-events-auto">
              <div className="flex gap-2 md:gap-3 items-center">
                <Input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSendMessage() } }} placeholder={messageCount >= 10 ? 'Upgrade to Premium for unlimited messages...' : 'Ask me anything about traveling in the Philippines...'} className="flex-1 text-sm md:text-base" disabled={isLoading || messageCount >= 10} />
                <Button onClick={() => handleSendMessage()} disabled={!input.trim() || isLoading || messageCount >= 10} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex-shrink-0 px-3 md:px-4">
                  <Send className="h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </div>
              <p className="text-[10px] md:text-xs text-gray-500 text-center mt-1 md:mt-2">GalaGPT.ph can make mistakes. Consider checking important information.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Agoda Search Box - Mobile Only (since desktop has sidebar) */}
      <div className="xl:hidden">
        <FloatingTagaytaySearch position="bottom-left" />
      </div>
    </div>
  )
}
