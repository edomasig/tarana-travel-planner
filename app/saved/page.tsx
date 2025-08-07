'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Calendar, Trash2, Eye, Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface SavedConversation {
  id: string
  title: string
  preview: string
  messageCount: number
  createdAt: string
  lastMessage: string
}

export default function SavedPage() {
  const [savedConversations, setSavedConversations] = useState<SavedConversation[]>([])

  useEffect(() => {
    // Mock data - in real app, fetch from database
    setSavedConversations([
      {
        id: '1',
        title: 'Palawan Island Hopping Guide',
        preview: 'Detailed 5-day itinerary for El Nido and Coron with budget breakdown...',
        messageCount: 12,
        createdAt: '2024-01-15',
        lastMessage: 'Thanks! This helps a lot with planning my Palawan trip.'
      },
      {
        id: '2',
        title: 'Baguio Weekend Trip Planning',
        preview: 'Cool weather destinations, strawberry farms, and local food recommendations...',
        messageCount: 8,
        createdAt: '2024-01-10',
        lastMessage: 'What about transportation from Manila to Baguio?'
      },
      {
        id: '3',
        title: 'Manila Food Tour Suggestions',
        preview: 'Street food spots, local restaurants, and must-try Filipino dishes...',
        messageCount: 15,
        createdAt: '2024-01-08',
        lastMessage: 'Where can I find the best sisig in Manila?'
      }
    ])
  }, [])

  const handleDelete = (id: string) => {
    setSavedConversations(prev => prev.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Chat
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Saved Conversations</h1>
            <p className="text-gray-600">Your travel planning history</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {savedConversations.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Saved Conversations</h3>
              <p className="text-gray-600 mb-4">Start chatting about your Philippine travel plans to save conversations here.</p>
              <Button asChild>
                <Link href="/">Start New Conversation</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {savedConversations.map((conversation) => (
              <Card key={conversation.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{conversation.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {conversation.messageCount} messages
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(conversation.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline">
                      Saved
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-3">{conversation.preview}</p>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 italic">
                      Last message: "{conversation.lastMessage}"
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/chat/${conversation.id}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        Continue Chat
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Export
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(conversation.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
