import { z } from 'zod';

const nameLengthMin = 2;
const nameLengthMax = 20;

export const privateInformationFormSchema = z.object({
  login: z
    .string()
    .min(
      nameLengthMin,
      `The name must be at least ${nameLengthMin} characters long`,
    )
    .max(nameLengthMax, `The name must not exceed ${nameLengthMax} characters`),
  email: z.string().email('Invalid email'),
});

export type FormValues = z.infer<typeof privateInformationFormSchema>;
