'use client'

import { useState, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface SeasonalImageUploadProps {
  value?: string
  onChange: (url: string) => void
  disabled?: boolean
  label?: string
  folder?: string // e.g., 'seasonal', 'destinations', 'itinerary'
}

export function SeasonalImageUpload({ 
  value, 
  onChange, 
  disabled, 
  label = "Image",
  folder = "seasonal"
}: SeasonalImageUploadProps) {
  const { toast } = useToast()
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = useCallback(async (file: File) => {
    setUploading(true)
    try {
      // Generate a unique filename with folder organization
      const timestamp = Date.now()
      const extension = file.name.split('.').pop()
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
      const filename = `seasonal-images/${folder}/${timestamp}-${sanitizedName}`

      // Upload to Vercel Blob
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
        method: 'POST',
        body: file,
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Upload failed')
      }

      const result = await response.json()
      onChange(result.url)
      
      toast({
        title: "Success",
        description: `${label} uploaded successfully`,
      })
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to upload image',
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }, [onChange, label, folder, toast])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      handleUpload(file)
    } else if (file && !file.type.startsWith('image/')) {
      toast({
        title: "Error",
        description: "Please upload an image file",
        variant: "destructive",
      })
    }
  }, [handleUpload, toast])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
  }, [])

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    onChange('')
  }

  return (
    <div className="space-y-4">
      <Label>{label}</Label>
      
      {value ? (
        <div className="relative">
          <img 
            src={value} 
            alt={`${label} preview`}
            className="w-full h-48 object-cover rounded-lg border"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={removeImage}
            disabled={disabled}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
            dragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={handleClick}
        >
          {uploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Uploading {label.toLowerCase()}...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Drag and drop {label.toLowerCase()} here, or click to select
              </p>
              <Button type="button" variant="outline" disabled={disabled} onClick={(e) => e.stopPropagation()}>
                <Upload className="h-4 w-4 mr-2" />
                Choose {label}
              </Button>
            </div>
          )}
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            disabled={disabled || uploading}
          />
        </div>
      )}
      
      {/* Alternative: Manual URL input */}
      <div className="flex gap-2">
        <Input
          placeholder={`Or paste ${label.toLowerCase()} URL here...`}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
      </div>
      
      <p className="text-xs text-gray-500">
        Supported formats: JPG, PNG, GIF, WebP (max 10MB)
      </p>
    </div>
  )
}