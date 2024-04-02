import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { Nav } from '../components/Nav';
import { Footer } from '@/components/Footer';

const rubik = Rubik({ subsets: ['latin'], weight: ['300','400', '500','700'] });

export const metadata: Metadata = {
    title: '🌱 Green World',
    description: 'A green world for a better tomorrow',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={rubik.className + ' bg-background-500 container mx-auto my-4 text-text' }>
              <Nav></Nav>
              {children}
              <Footer></Footer>
            </body>
        </html>
    );
}
