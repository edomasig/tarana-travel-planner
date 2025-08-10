"use client"

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface KlookWidgetProps {
  title?: string;
  className?: string;
  snippetPath?: string;
}

// Renders the provided Klook affiliate widget snippet inside a Card.
// Ensures the external script is only appended once and supports re-renders safely.
export function KlookWidget({ title = "Klook Deals", className = "", snippetPath = "/affiliate/klook-snippet.html" }: KlookWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;

    let cancelled = false;

    const loadSnippet = async () => {
      try {
        const res = await fetch(snippetPath, { cache: 'no-cache' })
        if (!res.ok) throw new Error('Failed to load Klook snippet')
        let raw = await res.text()
        raw = raw.trim()

        if (cancelled || !containerRef.current) return

        // Create sandbox to parse any HTML provided (including comments or script tag)
        const sandbox = document.createElement('div')
        sandbox.innerHTML = raw

        // Prefer first <ins class="klk-aff-widget"> element
        const insEl = sandbox.querySelector('ins.klk-aff-widget')
        if (!insEl) {
          console.warn('Klook snippet: no <ins class="klk-aff-widget"> element found')
          containerRef.current.textContent = 'Invalid Klook snippet.'
          return
        }

        // Clear container and append cloned ins element
        containerRef.current.innerHTML = ''
        containerRef.current.appendChild(insEl.cloneNode(true))

        // Execute any inline <script> tags present in snippet
        const scriptTags = sandbox.querySelectorAll('script')
        scriptTags.forEach(orig => {
          const s = document.createElement('script')
          if (orig.src) s.src = orig.src
          if (orig.textContent) s.textContent = orig.textContent
          s.async = true
          containerRef.current?.appendChild(s)
        })

        // Ensure external loader script exists (if snippet omitted it)
        const SCRIPT_SRC = 'https://affiliate.klook.com/widget/fetch-iframe-init.js'
        const ensureInit = () => {
          // @ts-ignore
          if (window.KLOOK_AFFILIATE_WIDGET?.init) {
            try { // @ts-ignore
              window.KLOOK_AFFILIATE_WIDGET.init() } catch (err) { console.error('Klook init error', err) }
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
          let attempts = 0
            , maxAttempts = 10
          const interval = setInterval(() => { if (ensureInit() || attempts++ >= maxAttempts || cancelled) clearInterval(interval) }, 400)
        }
      } catch (e) {
        if (containerRef.current) containerRef.current.textContent = 'Unable to load Klook deals.'
        console.error('Klook widget load error:', e)
      }
    };

    loadSnippet();
    initializedRef.current = true;

    return () => {
      cancelled = true;
    };
  }, [snippetPath]);

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
      <div className="mt-1 text-[9px] text-gray-400 italic">Manage snippet: public/affiliate/klook-snippet.html</div>
    </Card>
  );
}
