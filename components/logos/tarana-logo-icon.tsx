interface TaranaLogoIconProps {
  size?: number
  className?: string
  variant?: 'default' | 'white' | 'dark'
}

export function TaranaLogoIcon({ size = 40, className = '', variant = 'default' }: TaranaLogoIconProps) {
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          bg: 'white',
          primary: '#3B82F6',
          secondary: '#10B981',
          accent: '#F59E0B'
        }
      case 'dark':
        return {
          bg: '#1F2937',
          primary: '#60A5FA',
          secondary: '#34D399',
          accent: '#FBBF24'
        }
      default:
        return {
          bg: '#3B82F6',
          primary: 'white',
          secondary: '#10B981',
          accent: '#F59E0B'
        }
    }
  }

  const colors = getColors()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`iconGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.bg} />
          <stop offset="100%" stopColor={variant === 'default' ? '#1E40AF' : colors.bg} />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <rect width="100" height="100" rx="20" fill={`url(#iconGradient-${variant})`} />
      
      {/* Philippine archipelago silhouette */}
      <g fill={colors.primary}>
        {/* Luzon */}
        <ellipse cx="45" cy="30" rx="12" ry="18" />
        {/* Visayas */}
        <ellipse cx="50" cy="55" rx="8" ry="6" />
        <ellipse cx="40" cy="58" rx="5" ry="4" />
        <ellipse cx="60" cy="52" rx="6" ry="5" />
        {/* Mindanao */}
        <ellipse cx="55" cy="75" rx="15" ry="12" />
        {/* Palawan */}
        <ellipse cx="25" cy="65" rx="3" ry="15" transform="rotate(-20 25 65)" />
      </g>
      
      {/* Compass rose */}
      <g stroke={colors.accent} strokeWidth="2" fill="none">
        <circle cx="75" cy="25" r="8" />
        <path d="M75 17 L75 33 M67 25 L83 25 M70 20 L80 30 M80 20 L70 30" strokeWidth="1" />
      </g>
      
      {/* Wave pattern */}
      <path d="M10 85 Q20 82 30 85 Q40 88 50 85 Q60 82 70 85 Q80 88 90 85" 
            stroke={colors.primary} strokeWidth="2" opacity="0.6" />
    </svg>
  )
}
