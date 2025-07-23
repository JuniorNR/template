import { z } from 'zod';

const passwordLengthMin = 2;
const passwordLengthMax = 20;

export const passwordChangeFormSchema = z.object({
  password: z
    .string()
    .min(
      passwordLengthMin,
      `The password must be at least ${passwordLengthMin} characters long`,
    )
    .max(
      passwordLengthMax,
      `The password must not exceed ${passwordLengthMax} characters`,
    ),
  confirm_password: z
    .string()
    .min(
      passwordLengthMin,
      `The password must be at least ${passwordLengthMin} characters long`,
    )
    .max(
      passwordLengthMax,
      `The password must not exceed ${passwordLengthMax} characters`,
    ),
});

export type FormValues = z.infer<typeof passwordChangeFormSchema>;
