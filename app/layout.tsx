import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
export const metadata: Metadata = {
    title: 'Azriel De Ryzerine | Musician - Artisan - Producer',
    description: 'Azriel De Ryzerine is a musician, artisan, and producer',
};
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={`${GeistSans.variable} h-full antialiased`}>
            <body className='min-h-full flex flex-col'>{children}</body>
        </html>
    );
}