interface SectionLabelProps {
  number: string;
  title: string;
}

/**
 * Editorial chapter marker. Copper-lined, monospaced.
 */
export function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-mono text-[14px] uppercase tracking-[0.3em] text-accent-light">
        {number}
      </span>
      <span
        aria-hidden="true"
        className="h-px w-16 rtl:rotate-180"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,165,116,0.6) 0%, rgba(212,165,116,0.1) 100%)",
        }}
      />
      <span className="font-mono text-[14px] uppercase tracking-[0.3em] text-charcoal-200">
        {title}
      </span>
    </div>
  );
}
