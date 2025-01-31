'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
        redirect('/admin');
    } catch (error) {
        console.error('Error signing in: ', error);
        if (!(error instanceof AuthError)) {
            redirect('/admin'); // workaround for NEXT_REDIRECT error resulting from using a try/catch
        }
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}