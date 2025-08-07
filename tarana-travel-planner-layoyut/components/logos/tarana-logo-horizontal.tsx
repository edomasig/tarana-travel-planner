interface TaranaLogoHorizontalProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showTagline?: boolean
}

export function TaranaLogoHorizontal({ 
  size = 'md', 
  className = '', 
  showTagline = false 
}: TaranaLogoHorizontalProps) {
  const getSizes = () => {
    switch (size) {
      case 'sm':
        return { icon: 24, text: 'text-lg', tagline: 'text-xs' }
      case 'lg':
        return { icon: 48, text: 'text-3xl', tagline: 'text-sm' }
      default:
        return { icon: 32, text: 'text-xl', tagline: 'text-xs' }
    }
  }

  const sizes = getSizes()

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={sizes.icon}
        height={sizes.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        
        {/* Modern geometric background */}
        <rect width="100" height="100" rx="22" fill="url(#horizontalGradient)" />
        
        {/* Stylized "T" with travel elements */}
        <g fill="white">
          {/* Letter T */}
          <rect x="25" y="25" width="50" height="8" rx="4" />
          <rect x="46" y="25" width="8" height="50" rx="4" />
          
          {/* Travel dots/path */}
          <circle cx="35" cy="45" r="2" opacity="0.8" />
          <circle cx="42" cy="55" r="2" opacity="0.6" />
          <circle cx="58" cy="50" r="2" opacity="0.8" />
          <circle cx="65" cy="40" r="2" opacity="0.6" />
          
          {/* Location marker */}
          <path d="M70 60 C70 65 75 70 75 70 C75 70 80 65 80 60 C80 57 77 55 75 55 C73 55 70 57 70 60 Z" />
          <circle cx="75" cy="60" r="2" fill="#0EA5E9" />
        </g>
      </svg>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-bold text-gray-900 ${sizes.text}`}>TaraNa</span>
          <span className={`font-semibold text-blue-600 ${sizes.text}`}>.ph</span>
        </div>
        {showTagline && (
          <span className={`text-gray-600 ${sizes.tagline} font-medium`}>
            AI Travel Assistant
          </span>
        )}
      </div>
    </div>
  )
}
