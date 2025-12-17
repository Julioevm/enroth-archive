'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of a location's
 * information, including relevant quests, skills, and monsters.
 *
 * - generateLocationSummary - A function that generates a summary of a location.
 * - GenerateLocationSummaryInput - The input type for the generateLocationSummary function.
 * - GenerateLocationSummaryOutput - The return type for the generateLocationSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLocationSummaryInputSchema = z.object({
  locationName: z.string().describe('The name of the location to summarize.'),
});
export type GenerateLocationSummaryInput = z.infer<
  typeof GenerateLocationSummaryInputSchema
>;

const GenerateLocationSummaryOutputSchema = z.object({
  summary: z.string().describe('A summary of the location, including relevant quests, skills, and monsters.'),
});
export type GenerateLocationSummaryOutput = z.infer<
  typeof GenerateLocationSummaryOutputSchema
>;

export async function generateLocationSummary(
  input: GenerateLocationSummaryInput
): Promise<GenerateLocationSummaryOutput> {
  return generateLocationSummaryFlow(input);
}

const generateLocationSummaryPrompt = ai.definePrompt({
  name: 'generateLocationSummaryPrompt',
  input: {schema: GenerateLocationSummaryInputSchema},
  output: {schema: GenerateLocationSummaryOutputSchema},
  prompt: `You are an expert on the Might and Magic 6 game. A user has clicked on a location named '{{locationName}}' on the map.  Summarize the relevant information about this location, including related quests, skills, and monsters. Focus on Might and Magic 6. Be concise.`,
});

const generateLocationSummaryFlow = ai.defineFlow(
  {
    name: 'generateLocationSummaryFlow',
    inputSchema: GenerateLocationSummaryInputSchema,
    outputSchema: GenerateLocationSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateLocationSummaryPrompt(input);
    return output!;
  }
);
