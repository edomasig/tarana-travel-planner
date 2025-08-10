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
        const res = await fetch(snippetPath, { cache: "no-cache" });
        if (!res.ok) throw new Error("Failed to load Klook snippet");
        const html = await res.text();
        if (cancelled || !containerRef.current) return;

        // Inject raw snippet
        containerRef.current.innerHTML = html;

        // Ensure script present
        const SCRIPT_SRC = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
        if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
          const s = document.createElement("script");
          (s as any).dataset.klookLoader = "true";
          s.src = SCRIPT_SRC;
          s.async = true;
          s.type = "text/javascript";
          document.body.appendChild(s);
        } else {
          // Re-init if global available
          // @ts-ignore
          if (window.KLOOK_AFFILIATE_WIDGET?.init) {
            // @ts-ignore
            window.KLOOK_AFFILIATE_WIDGET.init();
          }
        }
      } catch (e) {
        if (containerRef.current) {
          containerRef.current.textContent = "Unable to load Klook deals.";
        }
        console.error("Klook widget load error:", e);
      }
    };

    loadSnippet();
    initializedRef.current = true;

    return () => { cancelled = true; };
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
