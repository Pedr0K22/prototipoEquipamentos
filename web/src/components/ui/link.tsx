import type { ReactNode } from 'react';

interface LinkProps {
    children: ReactNode
}

export default function Link({children}: LinkProps) {
    return (
        <>
            <a className='underline  decoration-solid' href="/dashboard">
                {children}
            </a>
        </>
    )
}