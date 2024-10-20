import type { ReactNode } from 'react';
import { forwardRef, type ComponentProps } from 'react'

interface LinkProps {
    children: ReactNode,
    className: string
}

export default function Link({children, className}: LinkProps) {
    return (
        <>
            <a className={`underline decoration-solid ${className}`} href="/dashboard">
                {children}
            </a>
        </>
    )
}