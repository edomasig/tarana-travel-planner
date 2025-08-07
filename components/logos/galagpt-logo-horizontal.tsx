interface GalaGPTLogoHorizontalProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showTagline?: boolean
}

export function GalaGPTLogoHorizontal({ 
  size = 'md', 
  className = '', 
  showTagline = false 
}: GalaGPTLogoHorizontalProps) {
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
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        
        {/* Modern geometric background */}
        <rect width="100" height="100" rx="22" fill="url(#horizontalGradient)" />
        
        {/* Stylized "G" with AI elements */}
        <g fill="white">
          {/* Letter G */}
          <path d="M30 25 Q25 20 35 20 L60 20 Q70 20 70 30 L70 45 L60 45 L60 30 L35 30 Q30 30 30 35 L30 65 Q30 70 35 70 L60 70 L60 55 L50 55 L50 50 L70 50 L70 70 Q70 80 60 80 L35 80 Q25 80 25 70 L25 30 Q25 20 30 25 Z" />
          
          {/* AI neural network dots */}
          <circle cx="80" cy="25" r="2" opacity="0.8" />
          <circle cx="85" cy="35" r="1.5" opacity="0.6" />
          <circle cx="75" cy="40" r="1.5" opacity="0.8" />
          <circle cx="80" cy="75" r="2" opacity="0.6" />
        </g>
        
        {/* Connection lines */}
        <g stroke="white" strokeWidth="1" opacity="0.5">
          <path d="M80 25 L85 35 M80 25 L75 40" />
        </g>
      </svg>
      
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-bold text-gray-900 ${sizes.text}`}>GalaGPT</span>
          <span className={`font-semibold text-purple-600 ${sizes.text}`}>.ph</span>
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
