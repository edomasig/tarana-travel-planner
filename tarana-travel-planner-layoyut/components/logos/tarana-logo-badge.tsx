interface TaranaLogoBadgeProps {
  size?: number
  className?: string
  style?: 'filled' | 'outline' | 'minimal'
}

export function TaranaLogoBadge({ 
  size = 120, 
  className = '', 
  style = 'filled' 
}: TaranaLogoBadgeProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="50%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <dropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.1"/>
        </filter>
      </defs>
      
      {/* Badge background */}
      <rect 
        width="200" 
        height="120" 
        rx="60" 
        fill={style === 'filled' ? 'url(#badgeGradient)' : 'transparent'}
        stroke={style === 'outline' ? '#3B82F6' : 'none'}
        strokeWidth={style === 'outline' ? '3' : '0'}
        filter={style === 'filled' ? 'url(#shadow)' : 'none'}
      />
      
      {/* Philippine islands pattern */}
      <g fill={style === 'filled' ? 'white' : '#3B82F6'} opacity="0.9">
        <ellipse cx="60" cy="40" rx="8" ry="12" />
        <ellipse cx="65" cy="60" rx="6" ry="4" />
        <ellipse cx="55" cy="65" rx="4" ry="3" />
        <ellipse cx="75" cy="55" rx="5" ry="4" />
        <ellipse cx="70" cy="80" rx="10" ry="8" />
        <ellipse cx="40" cy="70" rx="2" ry="10" transform="rotate(-20 40 70)" />
      </g>
      
      {/* Text */}
      <text 
        x="110" 
        y="50" 
        fontSize="24" 
        fontWeight="bold" 
        fill={style === 'filled' ? 'white' : '#1F2937'}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        TaraNa
      </text>
      <text 
        x="110" 
        y="75" 
        fontSize="16" 
        fontWeight="600" 
        fill={style === 'filled' ? '#BFDBFE' : '#3B82F6'}
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        .ph Travel AI
      </text>
      
      {/* Decorative elements */}
      <g stroke={style === 'filled' ? 'white' : '#3B82F6'} strokeWidth="2" fill="none" opacity="0.6">
        <path d="M160 25 Q170 20 180 25 Q170 30 160 25" />
        <circle cx="175" cy="45" r="3" />
        <path d="M165 85 Q175 80 185 85" />
      </g>
    </svg>
  )
}
