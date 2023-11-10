import { z } from "zod";

export const courseSchema = z.object({
  id: z.string().length(7),
  name: z.string(),
  registrationYear: z.string().length(4),
  units: z.number().positive(),
  grade: z.enum(["A+", "A", "B", "C", "D", "P", "F", "認", "履修中"]),
});
