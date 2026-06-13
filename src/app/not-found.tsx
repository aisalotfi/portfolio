import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Aisa Lotfi",
};

export default function GlobalNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-near-black px-6 text-center">
      <span className="font-display text-[clamp(5rem,15vw,10rem)] leading-none text-gradient-luxe">
        404
      </span>
      <p className="mt-6 font-display text-xl text-soft-white md:text-2xl">
        Page not found
      </p>
      <p className="mt-3 max-w-md text-[14px] leading-relaxed text-charcoal-200">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="glass mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] tracking-[0.08em] text-soft-white uppercase transition-all duration-500 hover:border-accent/40 hover:text-accent-light"
      >
        Back to home
      </Link>
    </div>
  );
}
