interface TaranaLogoCompactProps {
  size?: number
  className?: string
}

export function TaranaLogoCompact({ size = 32, className = '' }: TaranaLogoCompactProps) {
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
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect width="80" height="80" rx="16" fill="url(#compactBg)" />
        
        {/* Stylized "T" with travel elements */}
        <path d="M20 25 L60 25 M40 25 L40 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
        
        {/* Airplane trail */}
        <path d="M45 35 L55 30 L58 32 L50 37 L55 40 L52 42 L45 35" fill="white" />
        <path d="M45 35 L35 40 Q30 42 35 45" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="2,2" />
        
        {/* Location pin */}
        <circle cx="30" cy="50" r="4" fill="white" />
        <circle cx="30" cy="50" r="2" fill="#0891B2" />
      </svg>
      
      <span className="text-lg font-bold text-gray-900">TaraNa.ph</span>
    </div>
  )
}
