import '@/styles/global.css';
import GlassPane from "@/components/GlassPane";

export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <head/>
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="h-full w-full flex items-center justify-center">
                    {children}
                </GlassPane>
            </body>
        </html>
    );
}