"use client"

import { useEffect, useRef } from "react"

interface KlookActivityBannerProps {
  className?: string
  wid?: string
  adId?: string
  actIds?: string
  product?: string
  price?: string
  lang?: string
  width?: string
  height?: string
  currency?: string
}

export function KlookActivityBanner({
  className = "",
  wid = "96417",
  adId = "1103443",
  actIds = "84003,14539,85610",
  product = "mul_act",
  price = "false",
  lang = "",
  width = "160",
  height = "600",
  currency = "",
}: KlookActivityBannerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    // Build the <ins> element with the specified attributes
    const ins = document.createElement("ins")
    ins.className = "klk-aff-widget"
    ins.setAttribute("data-wid", wid)
    ins.setAttribute("data-adid", adId)
    ins.setAttribute("data-actids", actIds)
    ins.setAttribute("data-prod", product)
    ins.setAttribute("data-price", price)
    ins.setAttribute("data-lang", lang)
    ins.setAttribute("data-width", width)
    ins.setAttribute("data-height", height)
    ins.setAttribute("data-currency", currency)

    // Create fallback link
    const fallbackLink = document.createElement("a")
    fallbackLink.href = "//www.klook.com/"
    fallbackLink.textContent = "Klook.com"
    ins.appendChild(fallbackLink)

    containerRef.current.appendChild(ins)

    // Add the script if it doesn't exist
    const SCRIPT_SRC = "https://affiliate.klook.com/widget/fetch-iframe-init.js"
    
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = SCRIPT_SRC
      
      // Insert script using the same method as the original code
      const existingScript = document.getElementsByTagName('script')[0]
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.insertBefore(script, existingScript)
      } else {
        document.head.appendChild(script)
      }
    }

    initializedRef.current = true
  }, [wid, adId, actIds, product, price, lang, width, height, currency])

  return (
    <div ref={containerRef} className={`min-h-[${height}px] w-[${width}px] ${className}`}>
      {/* Container for the Klook activity banner */}
    </div>
  )
}
