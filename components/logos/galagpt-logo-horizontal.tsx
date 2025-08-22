interface GalaGPTLogoHorizontalProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showTagline?: boolean
}

export function GalaGPTLogoHorizontal({ 
  size = 'md', 
  className = '', 
  showTagline = true 
}: GalaGPTLogoHorizontalProps) {
  const getSizes = () => {
    switch (size) {
      case 'sm':
        return { width: 140, height: 48 }
      case 'lg':
        return { width: 240, height: 72 }
      default:
        return { width: 180, height: 60 }
    }
  }

  const sizes = getSizes()

  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={sizes.width}
        height={sizes.height}
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#06B6D4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1F2937', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Background circle with gradient */}
        <circle cx="30" cy="30" r="22" fill="url(#logoGradient)" opacity="0.1"/>
        
        {/* Island/Mountain silhouette */}
        <path d="M8 35 C12 25, 18 22, 25 28 C32 20, 38 25, 45 30 C48 32, 50 35, 52 35 Z" fill="url(#logoGradient)" opacity="0.8"/>
        
        {/* Palm tree */}
        <path d="M35 35 L35 25 M35 25 C32 23, 30 22, 28 24 M35 25 C38 23, 40 22, 42 24 M35 25 C33 20, 31 19, 29 21 M35 25 C37 20, 39 19, 41 21" 
              stroke="url(#logoGradient)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* AI brain/circuit pattern */}
        <g transform="translate(15, 15)" opacity="0.6">
          <circle cx="5" cy="5" r="2" fill="#8B5CF6"/>
          <circle cx="15" cy="8" r="1.5" fill="#06B6D4"/>
          <circle cx="10" cy="12" r="1" fill="#10B981"/>
          <path d="M5 5 L10 8 L15 8 M10 8 L10 12" stroke="#8B5CF6" strokeWidth="1" opacity="0.5"/>
        </g>
        
        {/* Text: GalaGPT */}
        <text x="70" y="25" fontFamily="system-ui, -apple-system, sans-serif" fontSize="20" fontWeight="700" fill="url(#textGradient)">
          Gala<tspan fill="url(#logoGradient)">GPT</tspan>
        </text>
        
        {/* Tagline */}
        {showTagline && (
          <text x="70" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontSize="10" fill="#6B7280" fontWeight="500">
            AI Travel Assistant
          </text>
        )}
        
        {/* Small Filipino flag accent */}
        <g transform="translate(170, 15)">
          <rect width="20" height="12" fill="#0038A8"/>
          <rect width="20" height="6" y="6" fill="#CE1126"/>
          <polygon points="0,0 8,6 0,12" fill="#FFFFFF"/>
          <circle cx="3" cy="4" r="1" fill="#FCD116"/>
          <circle cx="3" cy="8" r="1" fill="#FCD216"/>
          <path d="M1 6 L5 6 M3 4 L3 8" stroke="#FCD116" strokeWidth="0.5"/>
        </g>
      </svg>
    </div>
  )
}
