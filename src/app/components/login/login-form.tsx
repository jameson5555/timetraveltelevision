'use client';

import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <form action={formAction} className="mx-auto card p-3" style={{ maxWidth: '440px' }}>
            <div>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                />
            </div>
            <div className="mt-3">
                <input
                    className="form-control"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    minLength={6}
                />
            </div>
            <Button className="mt-3 w-100 btn btn-primary" aria-disabled={isPending}>
                Log in
            </Button>
            <div
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <>
                        <p className="text-danger">{errorMessage}</p>
                    </>
                )}
            </div>
        </form>
    );
}
