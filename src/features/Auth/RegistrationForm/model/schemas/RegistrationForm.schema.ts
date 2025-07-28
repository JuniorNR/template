import { z } from 'zod';

const nameLengthMin = 2;
const nameLengthMax = 20;
const passwordLengthMin = 8;

export const registrationFormSchema = z.object({
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
  email: z.string().email(),
  password: z
    .string()
    .min(
      passwordLengthMin,
      `Password must be at least ${passwordLengthMin} characters long`,
    ),
  password_confirmation: z
    .string()
    .min(
      passwordLengthMin,
      `Password must be at least ${passwordLengthMin} characters long`,
    ),
});

export type FormValues = z.infer<typeof registrationFormSchema>;
