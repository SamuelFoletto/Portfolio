import './globals.css'
import Sidebar from "@/components/sidebar/Sidebar";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
        <body>
        <div className="container">
            <Sidebar />

            <main className="content">
                {children}
            </main>
        </div>
        </body>
        </html>
    )
}