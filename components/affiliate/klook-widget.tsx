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
        let html = await res.text();
        html = html.trim();
        if (!html.startsWith("<ins")) {
          console.warn("Klook snippet missing <ins> tag start");
        }
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = html;

        const SCRIPT_SRC = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
        const ensureInit = () => {
          // @ts-ignore
          if (window.KLOOK_AFFILIATE_WIDGET?.init) {
            try {
              // @ts-ignore
              window.KLOOK_AFFILIATE_WIDGET.init();
            } catch (err) {
              console.error("Klook init error", err);
            }
            return true;
          }
          return false;
        };

        if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
          const s = document.createElement("script");
          s.src = SCRIPT_SRC;
          s.async = true;
          s.type = "text/javascript";
          s.onload = () => {
            ensureInit();
          };
          document.body.appendChild(s);
        } else {
          // Delay a couple times to allow script’s async load to populate global
          let attempts = 0;
          const maxAttempts = 10;
          const interval = setInterval(() => {
            if (ensureInit() || attempts++ >= maxAttempts || cancelled) {
              clearInterval(interval);
            }
          }, 400);
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
