import Nav from "../components/ui/nav";
import type { ReactNode } from 'react';

interface LayoutDashboardProps {
    children: ReactNode;
}


const LayoutDashboard = ({children}: LayoutDashboardProps) => {
    return (
        <>
        <Nav />

        <div id="content" className="p-4">
            {children}
        </div>
        
        </>
        
        
    )
}

export default LayoutDashboard;
