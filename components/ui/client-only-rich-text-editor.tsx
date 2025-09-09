'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

// Dynamically import the RichTextEditor to prevent SSR issues
const RichTextEditorComponent = dynamic(
  () => import('./rich-text-editor').then(mod => ({ default: mod.RichTextEditor })),
  { 
    ssr: false,
    loading: () => (
      <div className="border rounded-lg overflow-hidden">
        <div className="border-b bg-gray-50 p-2 h-12" />
        <div className="h-32 bg-gray-100 rounded animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading editor...</span>
        </div>
      </div>
    )
  }
)

interface ClientOnlyRichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  disabled?: boolean
}

export function ClientOnlyRichTextEditor(props: ClientOnlyRichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="border rounded-lg overflow-hidden">
        <div className="border-b bg-gray-50 p-2 h-12" />
        <div className="h-32 bg-gray-100 rounded animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading editor...</span>
        </div>
      </div>
    )
  }

  return <RichTextEditorComponent {...props} />
}
