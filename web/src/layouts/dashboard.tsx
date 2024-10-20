import Nav from "../components/ui/nav";
import type { ReactNode } from 'react';

interface LayoutDashboardProps {
    children: ReactNode;
    title: string;
}


const LayoutDashboard = ({children, title}: LayoutDashboardProps) => {
    return (
        <>
        <Nav title={`${title}`} />

        <div id="content" className="p-5">
            {children}
        </div>
        
        </>
        
        
    )
}

export default LayoutDashboard;