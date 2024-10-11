import type { ReactNode } from 'react';
import { forwardRef, type ComponentProps } from 'react'

interface LinkProps {
    children: ReactNode,
    props: ComponentProps<'a'>
}

export default function Link({children, ...props}: LinkProps) {
    return (
        <>
            <a {...props} className='underline  decoration-solid' href="/dashboard">
                {children}
            </a>
        </>
    )
}