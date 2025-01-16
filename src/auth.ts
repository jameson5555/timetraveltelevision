import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';

async function getUser(name: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE name=${name}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ name: z.string(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { name, password } = parsedCredentials.data;
                    const user = await getUser(name);
                    if (!user) return null;
                    const passwordsMatch = password === user.password;
                    if (passwordsMatch) return user;
                }

                console.error('Invalid credentials');
                return null;
            },
        }),
    ],
});