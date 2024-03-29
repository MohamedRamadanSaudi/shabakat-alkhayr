import { z } from "zod"

export const userLoginSchema = z.object({
  email: z.string().email().min(8, "email is required").max(255),
  password: z.string().min(8, "password is required").max(100),
})

export const userRegisterSchema = z
  .object({
    username: z.string().min(3).max(50),
    email: z.string().email().max(255),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100)
      .refine(
        (password) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password),
        {
          message:
            "Password must contain at least one uppercase letter, one lowercase letter, and one number",
          path: ["password"],
        }
      ),
    confirmPassword: z.string(),
    isAdmin: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

// const userRegisterSchema = z.object({
//   // Other fields...
//   password: z
//     .string()
//     .min(8, 'Password must be at least 8 characters')
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
//       'Password must contain at least one uppercase letter, one lowercase letter, and one number'
//     ),
//   confirmPassword: z.string()
//     .min(8, 'Password must be at least 8 characters')
//     .refine((confirmPassword, data) => confirmPassword === data.password, {
//       message: "Passwords don't match",
//       path: ['confirmPassword'],
//     }),
// });
