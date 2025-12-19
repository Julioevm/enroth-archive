import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by fans, for fans. Not affiliated with Ubisoft.
          </p>
          <a
            href="https://github.com/Julioevm/enroth-archive"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Enroth Archives. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

