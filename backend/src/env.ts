import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    DATABASE_HOST: z.string(),
    DATABASE_PORT: z.string(),
    DATABASE: z.string(),
    DATABASE_USERNAME: z.string(),
    DATABASE_PASSWORD: z.string(),
})

export const env = envSchema.parse(process.env)


