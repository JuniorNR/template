import { z } from 'zod';

const passwordLengthMin = 8;

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(
      passwordLengthMin,
      `Password must be at least ${passwordLengthMin} characters long`,
    ),
});

export type FormValues = z.infer<typeof loginFormSchema>;
