interface TaranaLogoProps {
  size?: number
  className?: string
}

export function TaranaLogoMain({ size = 40, className = '' }: TaranaLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        
        {/* Background */}
        <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" />
        
        {/* Sun */}
        <circle cx="35" cy="25" r="8" fill="url(#sunGradient)" />
        
        {/* Sun rays */}
        <path d="M35 10 L35 15 M50 25 L45 25 M44 14 L41 17 M26 14 L29 17 M20 25 L25 25 M26 36 L29 33 M44 36 L41 33" 
              stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Main island */}
        <ellipse cx="50" cy="65" rx="25" ry="8" fill="url(#islandGradient)" />
        
        {/* Palm tree trunk */}
        <rect x="48" y="45" width="4" height="20" fill="#8B4513" rx="2" />
        
        {/* Palm fronds */}
        <path d="M50 45 Q40 35 35 40 Q45 42 50 45" fill="#10B981" />
        <path d="M50 45 Q60 35 65 40 Q55 42 50 45" fill="#10B981" />
        <path d="M50 45 Q45 30 40 35 Q48 38 50 45" fill="#059669" />
        <path d="M50 45 Q55 30 60 35 Q52 38 50 45" fill="#059669" />
        
        {/* Small islands */}
        <ellipse cx="25" cy="70" rx="8" ry="3" fill="#059669" />
        <ellipse cx="75" cy="68" rx="6" ry="2.5" fill="#059669" />
        
        {/* Waves */}
        <path d="M10 75 Q20 72 30 75 Q40 78 50 75 Q60 72 70 75 Q80 78 90 75" 
              stroke="#BFDBFE" strokeWidth="2" fill="none" />
        <path d="M15 80 Q25 77 35 80 Q45 83 55 80 Q65 77 75 80 Q85 83 95 80" 
              stroke="#DBEAFE" strokeWidth="1.5" fill="none" />
      </svg>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">TaraNa</span>
        <span className="text-sm text-blue-600 font-medium">.ph</span>
      </div>
    </div>
  )
}
