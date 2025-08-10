"use client"

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

interface KlookWidgetProps {
  title?: string;
  className?: string;
}

// Renders the provided Klook affiliate widget snippet inside a Card.
// Ensures the external script is only appended once and supports re-renders safely.
export function KlookWidget({ title = "Klook Deals", className = "" }: KlookWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;

    // Create the <ins> element with required data-* attributes
    const ins = document.createElement("ins");
    ins.className = "klk-aff-widget";
    ins.setAttribute("data-adid", "1103295");
    ins.setAttribute("data-lang", "");
    ins.setAttribute("data-currency", "PHP");
    ins.setAttribute("data-cardH", "126");
    ins.setAttribute("data-padding", "92");
    ins.setAttribute("data-lgH", "470");
    ins.setAttribute("data-edgeValue", "655");
    ins.setAttribute("data-cid", "111159");
    ins.setAttribute("data-tid", "4");
    ins.setAttribute("data-amount", "1");
    ins.setAttribute("data-prod", "dynamic_widget");
    // Center style
    ins.style.display = "block";
    ins.style.margin = "0 auto";
    ins.style.maxWidth = "260px";

    const fallbackLink = document.createElement("a");
    fallbackLink.href = "https://www.klook.com/";
    fallbackLink.textContent = "Klook.com";
    ins.appendChild(fallbackLink);

    containerRef.current.appendChild(ins);

    // Append script if not already present
    const SCRIPT_SRC = "https://affiliate.klook.com/widget/fetch-iframe-init.js";
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (!existing) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.type = "text/javascript";
      document.body.appendChild(s);
    } else {
      // If script already loaded, attempt manual init by dispatching an event (script auto-inits normally)
      // @ts-ignore
      if (window.KLOOK_AFFILIATE_WIDGET?.init) {
        // @ts-ignore
        window.KLOOK_AFFILIATE_WIDGET.init();
      }
    }

    initializedRef.current = true;
  }, []);

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
  );
}
