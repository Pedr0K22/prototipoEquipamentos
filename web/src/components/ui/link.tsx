import type { MouseEvent, MouseEventHandler, ReactHTMLElement, ReactNode } from 'react';
import { forwardRef, type ComponentProps } from 'react'

interface LinkProps {
    children: ReactNode,
    className: string,
    onClick: MouseEventHandler<HTMLAnchorElement>,
}

export default function Link({children, className, onClick}: LinkProps) {
    return (
        <>
            <a className={`underline decoration-solid ${className}`} href="/dashboard" onClick={onClick}>
                {children}
            </a>
        </>
    )
}