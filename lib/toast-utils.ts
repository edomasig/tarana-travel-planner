import { toast as baseToast } from "@/hooks/use-toast"

// Enhanced toast utilities for common use cases
export const toast = {
  // Success toast with green styling
  success: (title: string, description?: string) => {
    return baseToast({
      title,
      description,
      variant: "default", // This will use the green success styling
    })
  },

  // Error toast with red styling
  error: (title: string, description?: string) => {
    return baseToast({
      title,
      description,
      variant: "destructive",
    })
  },

  // Info toast with blue styling
  info: (title: string, description?: string) => {
    return baseToast({
      title,
      description,
      variant: "info",
    })
  },

  // Warning toast with yellow styling
  warning: (title: string, description?: string) => {
    return baseToast({
      title,
      description,
      variant: "warning",
    })
  },

  // Basic toast (same as success)
  show: (title: string, description?: string) => {
    return baseToast({
      title,
      description,
      variant: "default",
    })
  },
}

// Facebook-specific toast messages
export const facebookToast = {
  publishSuccess: () => toast.success(
    "Facebook Success!", 
    "Successfully published to Facebook!"
  ),
  
  repostSuccess: () => toast.success(
    "Facebook Success!", 
    "Successfully reposted to Facebook!"
  ),
  
  deleteSuccess: () => toast.success(
    "Facebook Success!", 
    "Successfully deleted from Facebook!"
  ),
  
  publishError: (error?: string) => toast.error(
    "Facebook Error", 
    `Failed to publish to Facebook${error ? `: ${error}` : ''}`
  ),
  
  networkError: () => toast.error(
    "Network Error", 
    "Failed to connect to Facebook. Please try again."
  ),
}

// Blog-specific toast messages
export const blogToast = {
  saveSuccess: () => toast.success(
    "Success!", 
    "Blog post saved successfully!"
  ),
  
  publishSuccess: () => toast.success(
    "Published!", 
    "Blog post published successfully!"
  ),
  
  deleteSuccess: () => toast.success(
    "Deleted!", 
    "Blog post deleted successfully!"
  ),
  
  saveError: () => toast.error(
    "Save Error", 
    "Failed to save blog post. Please try again."
  ),
  
  notFound: () => toast.error(
    "Not Found", 
    "Blog post not found."
  ),
}
