'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo
} from 'lucide-react'

interface SimpleRichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  disabled?: boolean
}

export function SimpleRichTextEditor({ content, onChange, placeholder = "Start writing...", disabled }: SimpleRichTextEditorProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [showImageInput, setShowImageInput] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content
    }
  }, [content, isMounted])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    if (disabled) return
    document.execCommand(command, false, value)
    editorRef.current?.focus()
    handleInput()
  }

  const insertHTML = (html: string) => {
    if (disabled) return
    document.execCommand('insertHTML', false, html)
    editorRef.current?.focus()
    handleInput()
  }

  const handleImageUpload = async (file: File) => {
    setUploading(true)
    try {
      console.log('Starting upload for file:', file.name)
      const timestamp = Date.now()
      const filename = `blog-content/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

      const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        body: file,
      })

      console.log('Upload response status:', response.status)

      if (!response.ok) {
        const error = await response.json()
        console.error('Upload error response:', error)
        throw new Error(error.error || 'Upload failed')
      }

      const result = await response.json()
      console.log('Upload successful, result:', result)
      
      if (result.url) {
        insertHTML(`<img src="${result.url}" alt="Uploaded image" class="editor-image" style="max-width: 100%; height: auto; margin: 1rem 0; border-radius: 0.5rem;" />`)
        alert('Image uploaded successfully!')
      } else {
        throw new Error('No URL returned from upload')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert(error instanceof Error ? error.message : 'Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const addLink = () => {
    if (linkUrl) {
      const selectedText = window.getSelection()?.toString() || 'Link'
      insertHTML(`<a href="${linkUrl}" class="editor-link">${selectedText}</a>`)
      setLinkUrl('')
      setShowLinkInput(false)
    }
  }

  const addImage = () => {
    if (imageUrl.trim()) {
      insertHTML(`<img src="${imageUrl.trim()}" alt="Image" class="editor-image" style="max-width: 100%; height: auto; margin: 1rem 0;" />`)
      setImageUrl('')
      setShowImageInput(false)
    } else {
      alert('Please enter a valid image URL')
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File upload triggered', e.target.files)
    const file = e.target.files?.[0]
    if (file) {
      console.log('File selected:', file.name, file.type, file.size)
      if (file.type.startsWith('image/')) {
        handleImageUpload(file)
      } else {
        alert('Please select an image file')
      }
    }
    // Reset the input value so the same file can be selected again
    e.target.value = ''
  }

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

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Toolbar */}
      <div className="border-b bg-gray-50 p-2 flex flex-wrap gap-1">
        {/* Text Formatting */}
        <div className="flex gap-1 border-r pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('bold')}
            disabled={disabled}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('italic')}
            disabled={disabled}
          >
            <Italic className="h-4 w-4" />
          </Button>
        </div>

        {/* Headings */}
        <div className="flex gap-1 border-r pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('formatBlock', 'h1')}
            disabled={disabled}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('formatBlock', 'h2')}
            disabled={disabled}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Lists */}
        <div className="flex gap-1 border-r pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('insertUnorderedList')}
            disabled={disabled}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('insertOrderedList')}
            disabled={disabled}
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
        </div>

        {/* Media */}
        <div className="flex gap-1 border-r pr-2 mr-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowLinkInput(!showLinkInput)}
            disabled={disabled}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowImageInput(!showImageInput)}
            disabled={disabled}
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          <div className="relative inline-block">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={disabled || uploading}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              disabled={disabled || uploading}
              className="cursor-pointer relative pointer-events-none"
            >
              {uploading ? (
                <span className="flex items-center">
                  <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full mr-1"></div>
                  Uploading...
                </span>
              ) : (
                '📁 Upload'
              )}
            </Button>
          </div>
        </div>

        {/* Undo/Redo */}
        <div className="flex gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('undo')}
            disabled={disabled}
          >
            <Undo className="h-4 w-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => execCommand('redo')}
            disabled={disabled}
          >
            <Redo className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Link Input */}
      {showLinkInput && (
        <div className="border-b bg-gray-50 p-3">
          <div className="flex gap-2">
            <Input
              placeholder="Enter URL..."
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addLink()}
            />
            <Button type="button" onClick={addLink} size="sm">
              Add Link
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => setShowLinkInput(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Image Input */}
      {showImageInput && (
        <div className="border-b bg-gray-50 p-3">
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addImage()}
                className="flex-1"
              />
              <Button 
                type="button" 
                onClick={addImage} 
                size="sm"
                disabled={!imageUrl.trim()}
              >
                Add Image
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setShowImageInput(false)
                  setImageUrl('')
                }}
              >
                Cancel
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Enter a direct link to an image (JPG, PNG, GIF, WebP) or use the upload button above
            </p>
          </div>
        </div>
      )}

      {/* Editor Content */}
      <div
        ref={editorRef}
        contentEditable={!disabled}
        className="prose prose-lg max-w-none focus:outline-none min-h-[200px] p-4"
        onInput={handleInput}
        style={{ whiteSpace: 'pre-wrap' }}
        suppressContentEditableWarning={true}
      />
    </div>
  )
}
