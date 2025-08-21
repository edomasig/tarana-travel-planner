'use client'

import { trackAffiliateLinkClick } from '@/lib/gtm-tracking'

interface AgodaBadgeProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export function AgodaBadge({ className = '', size = 'medium' }: AgodaBadgeProps) {
  const sizeClasses = {
    small: 'w-16 h-auto',
    medium: 'w-20 h-auto',
    large: 'w-24 h-auto'
  }

  const handleClick = () => {
    trackAffiliateLinkClick('agoda', 'general', 'badge')
  }

  return (
    <div className={`inline-block ${className}`}>
      <a 
        href="https://www.agoda.com/partners/partnersearch.aspx?cid=1947165&pcs=8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block transition-opacity hover:opacity-80"
        title="Book hotels with Agoda - Our trusted partner"
        onClick={handleClick}
      >
        <img 
          src="//sherpa.agoda.com/Badge/GetBadge?badgetype=4&refkey=f%2B5sovBnlpUOWrWie0%2BOqw%3D%3D" 
          alt="Agoda Partner Badge"
          className={`${sizeClasses[size]} block`}
          loading="lazy"
        />
      </a>
    </div>
  )
}
