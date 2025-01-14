import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import mysql from 'mysql2/promise';
import { GetDBSettings } from '@/shared/common';
import type { User } from '@/app/lib/definitions';

let connectionParams = GetDBSettings();

async function getUser(name: string): Promise<User | undefined> {
    try {
        const connection = await mysql.createConnection(connectionParams);
        const get_exp_query = 'SELECT * FROM ttt_videos.users WHERE name = "' + name + '"';
        const [rows] = await connection.execute<mysql.RowDataPacket[]>(get_exp_query);

        connection.end();

        const userRow = rows[0];
        if (userRow) {
            const user: User = {
                id: userRow.id,
                name: userRow.name,
                password: userRow.password,
            };

            return user;
        }
        return undefined;
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