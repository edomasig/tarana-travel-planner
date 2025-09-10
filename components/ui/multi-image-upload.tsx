'use client'

import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Upload, X, Image as ImageIcon, Loader2, Plus } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface MultiImageUploadProps {
  value: string[]
  onChange: (urls: string[]) => void
  disabled?: boolean
  maxImages?: number
}

export function MultiImageUpload({ 
  value = [], 
  onChange, 
  disabled, 
  maxImages = 10 
}: MultiImageUploadProps) {
  const { toast } = useToast()
  const [uploading, setUploading] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleUpload = useCallback(async (files: File[]) => {
    setUploading(true)
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const timestamp = Date.now() + Math.random()
        const filename = `travel-guides/${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`

        const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
          method: 'POST',
          body: file,
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.error || 'Upload failed')
        }

        const result = await response.json()
        return result.url
      })

      const newUrls = await Promise.all(uploadPromises)
      const updatedUrls = [...value, ...newUrls].slice(0, maxImages)
      onChange(updatedUrls)
    } catch (error) {
      console.error('Upload error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to upload images',
        variant: "destructive",
      })
    } finally {
      setUploading(false)
    }
  }, [value, onChange, maxImages])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const remainingSlots = maxImages - value.length
      const filesToUpload = Array.from(files).slice(0, remainingSlots)
      handleUpload(filesToUpload)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    )
    
    if (files.length > 0) {
      const remainingSlots = maxImages - value.length
      const filesToUpload = files.slice(0, remainingSlots)
      handleUpload(filesToUpload)
    }
  }, [handleUpload, value.length, maxImages])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
  }, [])

  const removeImage = (index: number) => {
    const newUrls = value.filter((_, i) => i !== index)
    onChange(newUrls)
  }

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newUrls = [...value]
    const [movedItem] = newUrls.splice(fromIndex, 1)
    newUrls.splice(toIndex, 0, movedItem)
    onChange(newUrls)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label>Gallery Images ({value.length}/{maxImages})</Label>
        {value.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onChange([])}
            disabled={disabled}
          >
            Clear All
          </Button>
        )}
      </div>

      {/* Image Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {value.map((url, index) => (
            <div key={index} className="relative group">
              <img 
                src={url} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-32 object-cover rounded-lg border"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                  disabled={disabled}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Area */}
      {value.length < maxImages && (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {uploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-2" />
              <p className="text-sm text-gray-600">Uploading images...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-2">
                Add more images ({maxImages - value.length} remaining)
              </p>
              <Button type="button" variant="outline" disabled={disabled}>
                <Plus className="h-4 w-4 mr-2" />
                Add Images
              </Button>
            </div>
          )}
          
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={disabled || uploading}
          />
        </div>
      )}
      
      <p className="text-xs text-gray-500">
        Drag and drop multiple images, or click to select. Supported: JPG, PNG, GIF, WebP
      </p>
    </div>
  )
}
