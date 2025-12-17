'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { getLocationSummaryAction } from '@/actions/get-location-summary';
import { Loader2 } from 'lucide-react';
import type { GameLocation } from '@/lib/types';

export function LocationDetails({ location }: { location: GameLocation }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOpenChange = async (open: boolean) => {
    // Fetch only when opening the dialog and if data isn't already there
    if (open && !summary && !loading && !error) {
      setLoading(true);
      setError('');
      const result = await getLocationSummaryAction(location.name);
      if (result && 'error' in result) {
        setError(result.error);
      } else if (result) {
        setSummary(result.summary);
      }
      setLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto justify-start text-base text-muted-foreground hover:text-primary">
          {location.name}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-headline">{location.name}</DialogTitle>
          <DialogDescription>
            AI-generated summary from in-game context.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 min-h-[12rem] relative">
          {loading && (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-background/80 backdrop-blur-sm rounded-lg">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="mt-4 text-muted-foreground">Generating summary...</p>
            </div>
          )}
          {error && <p className="text-destructive text-center p-4">{error}</p>}
          {summary && (
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
              {summary}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
