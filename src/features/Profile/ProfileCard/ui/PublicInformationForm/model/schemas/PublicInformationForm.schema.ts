import { z } from 'zod';

const nameLengthMin = 2;
const nameLengthMax = 20;

export const publicInformationFormSchema = z.object({
  firstName: z
    .string()
    .min(
      nameLengthMin,
      `The name must be at least ${nameLengthMin} characters long`,
    )
    .max(nameLengthMax, `The name must not exceed ${nameLengthMax} characters`),
  middleName: z
    .string()
    .min(
      nameLengthMin,
      `The name must be at least ${nameLengthMin} characters long`,
    )
    .max(nameLengthMax, `The name must not exceed ${nameLengthMax} characters`),
  lastName: z
    .string()
    .min(
      nameLengthMin,
      `The name must be at least ${nameLengthMin} characters long`,
    )
    .max(nameLengthMax, `The name must not exceed ${nameLengthMax} characters`),
});

export type FormValues = z.infer<typeof publicInformationFormSchema>;
