"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("divide-y divide-border/60", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-4 py-5 text-left"
            >
              <span className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                {item.question}
              </span>
              <ChevronDown
                aria-hidden
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-200",
                  isOpen
                    ? "rotate-180 text-primary"
                    : "group-hover:text-foreground",
                )}
              />
            </button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "max-h-96 pb-5" : "max-h-0",
              )}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
