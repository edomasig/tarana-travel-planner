"use client"

import { AdBanner } from '@/components/ads/ad-banner'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface Msg { role: 'user' | 'assistant' | 'system'; content: string }

export default function ChatPage() {
  const searchParams = useSearchParams()
  const incomingPrompt = searchParams.get('prompt') || ''
  const [messages, setMessages] = useState<Msg[]>(incomingPrompt ? [{ role: 'user', content: incomingPrompt }] : [])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState<boolean>(!!incomingPrompt)
  const sentRef = useRef(false)
  const [banner, setBanner] = useState<boolean>(!!incomingPrompt)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (incomingPrompt && !sentRef.current) {
      sentRef.current = true
      send(incomingPrompt)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incomingPrompt])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  async function send(prompt?: string) {
    const text = (prompt ?? input).trim()
    if (!text) return
    if (!prompt) {
      setMessages(prev => [...prev, { role: 'user', content: text }])
      setInput('')
    }
    setLoading(true)
    try {
      const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text }) })
      const data = await res.json()
      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      } else if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${data.error}` }])
      }
    } catch (e: any) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Network error fetching response.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col min-h-screen">
        <header className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">AI Travel Assistant</h1>
            <a href="/seasonal" className="text-sm text-purple-600 hover:text-purple-700 font-medium">
              ← Back to Seasonal
            </a>
          </div>
        </header>
        
        {banner && (
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Auto-generated from Seasonal Explorer. Feel free to refine or ask follow-ups!</span>
              </div>
              <button 
                onClick={() => setBanner(false)} 
                className="text-white/80 hover:text-white transition-colors ml-4"
                aria-label="Dismiss banner"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-8">
          {/* Top banner ad */}
          <div className="mb-8">
            <AdBanner position="top" />
          </div>
          <div className="space-y-8">
            {messages.map((m, i) => (
              <div key={i} className="space-y-4">
                <div className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${m.role === 'user' ? 'max-w-[75%]' : ''}`}>
                    <div className={`rounded-2xl px-6 py-4 shadow-sm ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}>
                      {m.role === 'assistant' ? (
                        <div className="prose prose-sm max-w-none prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-sm prose-p:my-3 prose-ul:my-3 prose-li:my-1.5 prose-strong:text-gray-900 leading-relaxed">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {m.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{m.content}</p>
                      )}
                    </div>
                    <div className={`text-xs text-gray-500 mt-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                      {m.role === 'user' ? 'You' : 'GalaGPT.ph'}
                    </div>
                  </div>
                </div>
                {/* Between messages ad: show after assistant responses at intervals */}
                {m.role === 'assistant' && (i === 0 || (i + 1) % 4 === 0) && (
                  <div className="flex justify-center">
                    <AdBanner position="between-messages" />
                  </div>
                )}
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-500">Generating response...</span>
                  </div>
                </div>
              </div>
            )}
            
            {!messages.length && !incomingPrompt && (
              <div className="text-center py-20">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Welcome to AI Travel Chat</h3>
                <p className="text-gray-600 mb-6">
                  Start by asking for an itinerary or explore our <a className="text-purple-600 hover:text-purple-700 font-medium underline" href="/seasonal">Seasonal Guide</a>.
                </p>
                <div className="text-sm text-gray-500">
                  Try: "Plan a 5-day budget trip to Palawan" or "Best food tour in Manila"
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
            {/* Bottom banner ad below messages list */}
            <div className="mt-10">
              <AdBanner position="bottom" />
            </div>
          </div>
        </main>

        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 sm:px-6 py-4">
          <form onSubmit={e => { e.preventDefault(); send(); }} className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500"
                placeholder="Ask about travel plans, destinations, or budgets..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                rows={1}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    send()
                  }
                }}
                style={{ 
                  minHeight: '48px',
                  maxHeight: '120px',
                  height: 'auto'
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement
                  target.style.height = 'auto'
                  target.style.height = Math.min(target.scrollHeight, 120) + 'px'
                }}
              />
            </div>
            <button 
              type="submit" 
              disabled={loading || !input.trim()} 
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send</span>
                </>
              )}
            </button>
          </form>
          <div className="text-xs text-gray-500 text-center mt-2">
            Press Enter to send, Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  )
}
