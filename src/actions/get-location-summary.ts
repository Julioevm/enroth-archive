// @/actions/get-location-summary.ts
'use server';

import { generateLocationSummary } from '@/ai/flows/generate-location-summary';

export async function getLocationSummaryAction(
  locationName: string
): Promise<{ summary: string } | { error: string }> {
  if (!locationName) {
    return { error: 'Location name is required.' };
  }

  try {
    const result = await generateLocationSummary({ locationName });
    if (!result || !result.summary) {
      return { error: 'Could not generate a summary for this location.' };
    }
    return { summary: result.summary };
  } catch (e) {
    console.error('Error generating location summary:', e);
    return { error: 'An unexpected error occurred while generating the summary. Please try again later.' };
  }
}
