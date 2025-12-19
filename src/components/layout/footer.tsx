"use client";

import { Github, TreePine } from "lucide-react";
import { useFestive } from "@/components/festive-provider";
import { isChristmasSeason, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  const { snowEnabled, setSnowEnabled } = useFestive();
  const showFestiveToggle = isChristmasSeason();

  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-4">
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
          {showFestiveToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSnowEnabled(!snowEnabled)}
              className={cn(
                "h-8 w-8 transition-all hover:bg-transparent",
                snowEnabled ? "text-green-600 drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]" : "text-muted-foreground"
              )}
              title={snowEnabled ? "Disable Snow" : "Enable Snow"}
            >
              <TreePine className="h-5 w-5" />
              <span className="sr-only">Toggle snow effect</span>
            </Button>
          )}
        </div>
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Enroth Archives. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

