interface GalaGPTLogoCompactProps {
  size?: number
  className?: string
}

export function GalaGPTLogoCompact({ size = 32, className = '' }: GalaGPTLogoCompactProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="compactBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect width="80" height="80" rx="16" fill="url(#compactBg)" />
        
        {/* Stylized "G" with AI elements */}
        <path d="M25 25 Q25 15 35 15 L50 15 Q60 15 60 25 L60 35 L50 35 L50 25 L35 25 Q30 25 30 30 L30 50 Q30 55 35 55 L50 55 L50 45 L45 45 L45 40 L60 40 L60 55 Q60 65 50 65 L35 65 Q25 65 25 55 L25 25 Z" 
              fill="white" />
        
        {/* AI circuit dots */}
        <g fill="white" opacity="0.8">
          <circle cx="15" cy="20" r="1.5" />
          <circle cx="65" cy="25" r="1.5" />
          <circle cx="20" cy="60" r="1.5" />
          <circle cx="65" cy="60" r="1.5" />
        </g>
        
        {/* Connection lines */}
        <g stroke="white" strokeWidth="1" opacity="0.6">
          <path d="M15 20 Q20 15 25 25" fill="none" />
          <path d="M65 25 Q60 20 55 30" fill="none" />
        </g>
      </svg>
      
      <span className="text-lg font-bold text-gray-900">GalaGPT.ph</span>
    </div>
  )
}
