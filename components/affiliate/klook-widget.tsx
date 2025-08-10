"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface KlookWidgetProps {
  title?: string
  className?: string
  adId?: string
  product?: string // data-prod value
  cid?: string
  tid?: string
}

// Reverted self-contained widget: directly constructs <ins> and loads script.
export function KlookWidget({
  title = "Klook Deals",
  className = "",
  adId = "1103296",
  product = "hotel_dynamic_widget",
  cid = "111159",
  tid = "",
}: KlookWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return

    // Build <ins>
    const ins = document.createElement("ins")
    ins.className = "klk-aff-widget"
    ins.setAttribute("data-adid", adId)
    ins.setAttribute("data-lang", "")
    ins.setAttribute("data-currency", "PHP")
    ins.setAttribute("data-cardH", "126")
    ins.setAttribute("data-padding", "92")
    ins.setAttribute("data-lgH", "470")
    ins.setAttribute("data-edgeValue", "655")
    ins.setAttribute("data-cid", cid)
    ins.setAttribute("data-tid", tid)
    ins.setAttribute("data-amount", "1")
    ins.setAttribute("data-prod", product)
    ins.style.display = 'block'
    ins.style.margin = '0 auto'
    ins.style.maxWidth = '260px'

    const fallbackLink = document.createElement("a")
    fallbackLink.href = "https://www.klook.com/"
    fallbackLink.textContent = "Klook.com"
    ins.appendChild(fallbackLink)

    containerRef.current.appendChild(ins)

    const SCRIPT_SRC = "https://affiliate.klook.com/widget/fetch-iframe-init.js"
    const ensureInit = () => {
      // @ts-ignore
      if (window.KLOOK_AFFILIATE_WIDGET?.init) {
        try { // @ts-ignore
          window.KLOOK_AFFILIATE_WIDGET.init() } catch (e) { console.error('Klook init error', e) }
        return true
      }
      return false
    }

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT_SRC
      s.async = true
      s.type = 'text/javascript'
      s.onload = () => { ensureInit() }
      document.body.appendChild(s)
    } else {
      let tries = 0
      const iv = setInterval(() => { if (ensureInit() || tries++ > 10) clearInterval(iv) }, 400)
    }

    initializedRef.current = true
  }, [adId, product, cid, tid])

  return (
    <Card className={`p-3 bg-white ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <span className="text-[10px] text-gray-400">Affiliate</span>
      </div>
      <div ref={containerRef} className="min-h-[180px] flex flex-col items-center justify-center text-xs text-gray-500">
        <span>Loading Klook deals...</span>
      </div>
      <p className="mt-2 text-[10px] text-gray-400 leading-snug">Some offers may earn us a commission at no extra cost to you.</p>
    </Card>
  )
}
