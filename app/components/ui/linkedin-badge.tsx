"use client";

import Script from "next/script";
import { LINKEDIN_BADGE, PROFILE } from "@/app/data/portfolio";

export function LinkedInBadge() {
  return (
    <>
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />
      <div
        className="badge-base LI-profile-badge inline-block"
        data-locale={LINKEDIN_BADGE.locale}
        data-size={LINKEDIN_BADGE.size}
        data-theme={LINKEDIN_BADGE.theme}
        data-type={LINKEDIN_BADGE.type}
        data-vanity={LINKEDIN_BADGE.vanity}
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href={LINKEDIN_BADGE.href}
          target="_blank"
          rel="noreferrer"
        >
          {PROFILE.name}
        </a>
      </div>
    </>
  );
}
