import { siteConfig } from "@/data/site";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#030303]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-violet-500 text-[10px] font-bold text-white">
            AS
          </div>
          <p className="text-sm text-zinc-500">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
