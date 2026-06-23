"use client";

import { ArrowUpRight, Linkedin } from "lucide-react";
import { LINKEDIN_BADGE, PROFILE } from "@/app/data/portfolio";

type LinkedInProfileCardProps = {
  className?: string;
};

export function LinkedInProfileCard({ className = "" }: LinkedInProfileCardProps) {
  return (
    <a
      href={LINKEDIN_BADGE.href}
      target="_blank"
      rel="noreferrer"
      className={`group mx-auto block w-full max-w-[292px] rounded-xl border border-[var(--line)] bg-white p-5 transition hover:border-[#0a66c2]/30 hover:shadow-[0_8px_30px_-18px_rgba(10,102,194,0.35)] ${className}`.trim()}
    >
      <div className="flex items-start gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#0a66c2] text-white">
          <Linkedin size={20} fill="currentColor" strokeWidth={0} aria-hidden />
        </span>
        <div className="min-w-0 pt-0.5">
          <p className="font-display text-[15px] font-bold leading-tight text-[var(--ink)]">{PROFILE.name}</p>
          <p className="mt-1.5 text-[13px] leading-snug text-[var(--ink-muted)]">{PROFILE.credential}</p>
          <p className="mt-1 text-xs text-[var(--ink-soft)]">{PROFILE.city}</p>
        </div>
      </div>

      {PROFILE.openToWork ? (
        <span className="mt-4 inline-block rounded-full bg-[#057642]/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-[#057642]">
          Open to work
        </span>
      ) : null}

      <span className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#0a66c2]">
        View profile
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}
